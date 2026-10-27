<?php
/**
 * DŌGU — приём заказа с сайта.
 * Отправляет заказ в Telegram (бот) и на e-mail.
 *
 * Секреты НЕ хранятся здесь и не попадают в GitHub.
 * Файл с настройками лежит на сервере ВНЕ папки сайта:
 *   /home4/itallv/dogu-config.php   (образец: server/dogu-config.sample.php в репозитории)
 */
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function out(int $code, array $data): void { http_response_code($code); echo json_encode($data, JSON_UNESCAPED_UNICODE); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(405, ['ok' => false, 'error' => 'method']);

/* ---------- настройки ---------- */
// Не секретные настройки — здесь. Токен бота — только в файле на сервере (вне сайта и GitHub).
$cfg = [
  'telegram_token'   => '',
  'telegram_chat_id' => '-5582207077',
  'mail_to'          => 'info@remontriga.lv',
  'mail_from'        => 'noreply@remontriga.lv',
];
$cfgFile = getenv('DOGU_CONFIG') ?: dirname(__DIR__, 2) . '/dogu-config.php';
if (is_file($cfgFile)) { $c = require $cfgFile; if (is_array($c)) $cfg = array_merge($cfg, array_filter($c, static fn($v) => $v !== '')); }
$tgToken  = trim((string)($cfg['telegram_token'] ?? ''));
$tgChats  = array_filter(array_map('trim', explode(',', (string)($cfg['telegram_chat_id'] ?? ''))));
$mailTo   = (string)($cfg['mail_to'] ?? 'info@remontriga.lv');
$mailFrom = (string)($cfg['mail_from'] ?? 'noreply@remontriga.lv');

/* ---------- входные данные ---------- */
$raw = file_get_contents('php://input', false, null, 0, 20000);
$in = json_decode((string)$raw, true);
if (!is_array($in)) out(400, ['ok' => false, 'error' => 'json']);

// защита от ботов: скрытое поле и слишком быстрая отправка
if (!empty($in['website'])) out(200, ['ok' => true, 'id' => 'OK']);
if (isset($in['elapsed']) && (int)$in['elapsed'] < 3000) out(429, ['ok' => false, 'error' => 'fast']);

// простой лимит: не чаще 1 заказа в 30 секунд с одного IP
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$lock = sys_get_temp_dir() . '/dogu_' . hash('sha256', $ip . 'dogu');

$clean = static function ($v, int $max): string {
  $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', (string)$v) ?? '';
  return mb_substr(trim($v), 0, $max);
};
$name     = $clean($in['name'] ?? '', 80);
$phone    = $clean($in['phone'] ?? '', 40);
$method   = $clean($in['method'] ?? '', 20);      // pickup | delivery
$address  = $clean($in['address'] ?? '', 200);
$comment  = $clean($in['comment'] ?? '', 500);
$lang     = $clean($in['lang'] ?? 'lv', 2);
$agree    = !empty($in['agree']);

if ($name === '' || !preg_match('/^[+\d][\d\s()\-]{6,}$/', $phone)) out(422, ['ok' => false, 'error' => 'contact']);
if (!in_array($method, ['pickup', 'delivery'], true)) out(422, ['ok' => false, 'error' => 'method']);
if ($method === 'delivery' && $address === '') out(422, ['ok' => false, 'error' => 'address']);
if (!$agree) out(422, ['ok' => false, 'error' => 'agree']);

$items = [];
$sum = 0.0;
foreach (array_slice((array)($in['items'] ?? []), 0, 50) as $it) {
  $q = max(1, min(99, (int)($it['q'] ?? 1)));
  $price = max(0, min(10000, (float)($it['price'] ?? 0)));
  $wrap = !empty($it['gift']) ? max(0, min(100, (float)($it['wrap'] ?? 0))) : 0.0;
  $items[] = ['id' => $clean($it['id'] ?? '', 6), 'name' => $clean($it['name'] ?? '', 120), 'q' => $q, 'price' => $price, 'gift' => $wrap > 0, 'wrap' => $wrap];
  $sum += ($price + $wrap) * $q;
}
if (!$items) out(422, ['ok' => false, 'error' => 'empty']);

// лимит: не чаще 1 заказа в 30 секунд с одного IP (считаем только прошедшие проверку)
if (is_file($lock) && time() - (int)@filemtime($lock) < 30) out(429, ['ok' => false, 'error' => 'rate']);
@touch($lock);

/* ---------- текст заказа ---------- */
$tz = new DateTimeZone('Europe/Riga');
$now = new DateTime('now', $tz);
$orderId = 'DOGU-' . $now->format('ymd-Hi') . '-' . strtoupper(substr(bin2hex(random_bytes(2)), 0, 3));
$eur = static fn(float $n): string => '€' . rtrim(rtrim(number_format($n, 2, ',', ' '), '0'), ',');

$lines = [];
foreach ($items as $it) {
  $l = "• {$it['name']} (№{$it['id']}) × {$it['q']} — " . $eur($it['price'] * $it['q']);
  if ($it['gift']) $l .= ' + подарочная упаковка ' . $eur($it['wrap'] * $it['q']);
  $lines[] = $l;
}
const LOCKER_PRICE = 3.99;
$deliveryPrice = $method === 'pickup' ? 0.0 : LOCKER_PRICE;
$deliveryText = $method === 'pickup'
  ? 'Самовывоз из офиса (Purvciema iela 18)'
  : 'Доставка в пакомат ' . $eur(LOCKER_PRICE) . " — выбрать ближайший к адресу\nАдрес: " . $address;

$text = "🛒 Новый заказ {$orderId}\n"
      . $now->format('d.m.Y H:i') . " · язык сайта: " . strtoupper($lang) . "\n\n"
      . implode("\n", $lines) . "\n\n"
      . 'Товары: ' . $eur($sum) . ($deliveryPrice > 0 ? "\nДоставка: " . $eur($deliveryPrice) : '') . "\nИТОГО: " . $eur($sum + $deliveryPrice) . "\n\n"
      . "Имя: {$name}\nТелефон: {$phone}\n{$deliveryText}"
      . ($comment !== '' ? "\nКомментарий: {$comment}" : '')
      . "\n\n(цены — по данным сайта, проверить перед подтверждением)";

/* ---------- Telegram ---------- */
$tgOk = false;
if ($tgToken !== '' && $tgChats) {
  foreach ($tgChats as $chat) {
    $ch = curl_init("https://api.telegram.org/bot{$tgToken}/sendMessage");
    curl_setopt_array($ch, [
      CURLOPT_POST => true,
      CURLOPT_POSTFIELDS => http_build_query(['chat_id' => $chat, 'text' => $text, 'disable_web_page_preview' => 'true']),
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_TIMEOUT => 10,
    ]);
    $res = curl_exec($ch);
    $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($res !== false && $code === 200) $tgOk = true;
    else error_log("DOGU telegram failed for chat {$chat}: HTTP {$code}");
  }
}

/* ---------- e-mail ---------- */
$subject = '=?UTF-8?B?' . base64_encode("DOGU заказ {$orderId}") . '?=';
$headers = implode("\r\n", [
  'From: DOGU <' . $mailFrom . '>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit',
  'X-Mailer: DOGU',
]);
$mailOk = @mail($mailTo, $subject, $text, $headers, '-f' . $mailFrom);
if (!$mailOk) error_log('DOGU mail failed');

if (!$tgOk && !$mailOk) out(502, ['ok' => false, 'error' => 'deliver']);
out(200, ['ok' => true, 'id' => $orderId]);
