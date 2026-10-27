/* ===== Тексты интерфейса и юридические страницы: lv (основной), en, ru =====
   В юр. текстах {company}, {regNo}, {vatNo}, {legalAddress}, {email}, {phone}, {address}
   подставляются из SHOP (js/data.js). */

const UI = {
 lv: {
  langName:'LV', nav:{collection:'Kolekcija', video:'Apskati', gift:'Dāvana meistaram', showroom:'Salons', cart:'Grozs'},
  eyebrow:'Japāņu instrumenti · Rīga',
  h1:'Katra lieta — kā asmens. Meistara izvēlēta meistaram.',
  lead:'Mazi japāņu inženiertehniskie risinājumi, kuru nav būvniecības tīklu veikalos. Katru no tiem vispirms esam pārbaudījuši savos objektos.',
  cta1:'Skatīt kolekciju', cta2:'Paturēt rokās salonā',
  principles:[['Tikai Japāna','Zīmoli ar gadsimta vēsturi: Vessel, Engineer, Tajima.'],['Pārbaudīts objektā','Katrai precei — video, kā tā strādā īstā remontā.'],['Līdz €50','Pietiekami, lai nopirktu sev. Ideāli, lai uzdāvinātu.']],
  colEyebrow:'Pirmā kolekcija · ziema 2026', colTitle:'Divpadsmit asmeņi',
  cats:{all:'Visi', el:'Elektriķim', every:'Ikvienam', gift:'Dāvana'},
  vidEyebrow:'Apskati no objekta', vidTitle:'Paskaties, kā tas strādā, pirms pērc',
  vidConsent:'Video ielādēsies pēc piekrišanas ārējā satura sīkdatnēm.', vidLoad:'Rādīt video',
  giftTitle:'Dāvana meistaram',
  giftText:'Jebkura kolekcijas lieta — melnā kastē ar sarkanu apli un kartīti: kas tas ir, no kurienes un kāpēc viņam patiks. Viņš novērtēs, pat ja viņam „jau viss ir".',
  giftWrap:'Dāvanu iesaiņojums', giftBtn:'Izvēlēties dāvanu',
  shEyebrow:'Salons', shTitle:'Instruments jāpatur rokā',
  shText:'Nāc uz mūsu biroju Rīgā: parādīsim katru lietu darbībā un ļausim izmēģināt uz parauga.',
  shBtn:'Vienoties par apmeklējumu',
  info:{address:'Adrese', hours:'Darba laiks', phone:'Tālrunis', delivery:'Piegāde'},
  deliveryShort:'Omniva, DPD, Venipak, Smartposti, Latvijas Pasts, kurjers — pēc izvēlētā pārvadātāja noteikumiem',
  footer:'DŌGU — japāņu instrumenti meistariem. Rīga.',
  back:'← Visa kolekcija', vat:'ar PVN', wrapCheck:'Iesaiņot dāvanai', add:'Ielikt grozā', addMore:'Grozā · pievienot vēl', seeShowroom:'Apskatīt salonā',
  pickupFree:'Saņemšana salonā — bez maksas', whyTitle:'Kāpēc meistars priecāsies', storyTitle:'No kurienes', related:'Der kopā ar', added:'Pievienots grozam',
  since:'kopš', jp:'Japāna', no:'Nr.',
  cart:{title:'Grozs', empty:'Grozs ir tukšs.', goods:'Preces', wrap:'Dāvanu iesaiņojums', delivery:'Piegāde', tbd:'pēc tarifa — apstiprināsim', total:'Kopā', name:'Vārds', phone:'Tālrunis', method:'Saņemšanas veids', locker:'Pakomāts / punkts vai adrese', lockerPh:'piem., Omniva, Purvciema iela 1', send:'Nosūtīt pasūtījumu WhatsApp', note:'Pasūtījums atvērsies WhatsApp — apstiprināsim pieejamību, piegādes cenu un laiku. Apmaksa pēc rēķina vai saņemot.', agree:'Esmu iepazinies ar', terms:'lietošanas noteikumiem', and:'un', privacy:'privātuma politiku', less:'Mazāk', more:'Vairāk', inWrap:'dāvanu iesaiņojumā', orderTitle:'Pasūtījums DŌGU', itemsWord:'Preces'},
  cookie:{text:'Mēs izmantojam tikai nepieciešamo pārlūka krātuvi (grozs, valoda, jūsu izvēle). Ārējais saturs (piem., YouTube video) ielādējas tikai ar jūsu piekrišanu.', essential:'Tikai nepieciešamās', all:'Pieņemt visas', more:'Uzzināt vairāk', settings:'Sīkdatņu iestatījumi'},
  legal:{terms:'Lietošanas noteikumi', delivery:'Piegāde un apmaksa', returns:'Atgriešana un garantija', privacy:'Privātuma politika', cookies:'Sīkdatņu politika'},
  seller:'Pārdevējs'
 },
 en: {
  langName:'EN', nav:{collection:'Collection', video:'Reviews', gift:'Gift for a pro', showroom:'Showroom', cart:'Cart'},
  eyebrow:'Japanese tools · Riga',
  h1:'Every piece like a blade. Chosen by a pro, for a pro.',
  lead:'Small Japanese engineering solutions you will not find in chain DIY stores. We test every one on our own job sites first.',
  cta1:'View the collection', cta2:'Hold it in the showroom',
  principles:[['Japan only','Brands with a century of history: Vessel, Engineer, Tajima.'],['Tested on site','Every product comes with a video of it working on a real renovation.'],['Under €50','Enough to treat yourself. Perfect as a gift.']],
  colEyebrow:'First collection · winter 2026', colTitle:'Twelve blades',
  cats:{all:'All', el:'For electricians', every:'For everyone', gift:'Gift'},
  vidEyebrow:'Reviews from the job site', vidTitle:'See how it works before you buy',
  vidConsent:'The video loads after you accept external content cookies.', vidLoad:'Show video',
  giftTitle:'A gift for a pro',
  giftText:'Any piece from the collection in a black box with a red circle and a card: what it is, where it comes from and why they will love it. They will appreciate it even if they "already have everything".',
  giftWrap:'Gift wrapping', giftBtn:'Choose a gift',
  shEyebrow:'Showroom', shTitle:'A tool has to be held',
  shText:'Visit our office in Riga: we will show every piece in action and let you try it on a sample.',
  shBtn:'Book a visit',
  info:{address:'Address', hours:'Opening hours', phone:'Phone', delivery:'Delivery'},
  deliveryShort:'Omniva, DPD, Venipak, Smartposti, Latvijas Pasts, courier — under the chosen carrier\'s terms',
  footer:'DŌGU — Japanese tools for professionals. Riga.',
  back:'← All products', vat:'incl. VAT', wrapCheck:'Gift wrap it', add:'Add to cart', addMore:'In cart · add another', seeShowroom:'See it in the showroom',
  pickupFree:'Showroom pickup — free', whyTitle:'Why a pro will love it', storyTitle:'Where it comes from', related:'Goes well with', added:'Added to cart',
  since:'since', jp:'Japan', no:'No.',
  cart:{title:'Cart', empty:'Your cart is empty.', goods:'Products', wrap:'Gift wrapping', delivery:'Delivery', tbd:'carrier rate — we will confirm', total:'Total', name:'Name', phone:'Phone', method:'Delivery method', locker:'Parcel locker / point or address', lockerPh:'e.g. Omniva, Purvciema iela 1', send:'Send order via WhatsApp', note:'Your order opens in WhatsApp — we will confirm availability, delivery price and time. Payment by invoice or on collection.', agree:'I have read the', terms:'terms of use', and:'and', privacy:'privacy policy', less:'Less', more:'More', inWrap:'gift wrapped', orderTitle:'DŌGU order', itemsWord:'Items'},
  cookie:{text:'We only use necessary browser storage (cart, language, your choice). External content (e.g. YouTube videos) loads only with your consent.', essential:'Necessary only', all:'Accept all', more:'Learn more', settings:'Cookie settings'},
  legal:{terms:'Terms of use', delivery:'Delivery and payment', returns:'Returns and warranty', privacy:'Privacy policy', cookies:'Cookie policy'},
  seller:'Seller'
 },
 ru: {
  langName:'RU', nav:{collection:'Коллекция', video:'Обзоры', gift:'Подарок мастеру', showroom:'Шоурум', cart:'Корзина'},
  eyebrow:'Японский инструмент · Рига',
  h1:'Каждая вещь — как клинок. Выбрана мастером для мастера.',
  lead:'Маленькие японские инженерные решения, которых нет в строительных сетях. Каждое мы сначала проверили на своих объектах.',
  cta1:'Смотреть коллекцию', cta2:'Подержать в руках в шоуруме',
  principles:[['Только Япония','Бренды с вековой историей: Vessel, Engineer, Tajima.'],['Проверено на объекте','У каждого товара — видео, как он работает на настоящем ремонте.'],['До €50','Достаточно, чтобы купить себе. Идеально, чтобы подарить.']],
  colEyebrow:'Первая коллекция · зима 2026', colTitle:'Двенадцать клинков',
  cats:{all:'Все', el:'Электрику', every:'Каждому', gift:'Подарок'},
  vidEyebrow:'Обзоры с объекта', vidTitle:'Смотри, как это работает, прежде чем купить',
  vidConsent:'Видео загрузится после согласия на куки внешнего контента.', vidLoad:'Показать видео',
  giftTitle:'Подарок мастеру',
  giftText:'Любая вещь из коллекции — в чёрной коробке с красным кругом и карточкой: что это, откуда и почему ему понравится. Он оценит, даже если у него «уже всё есть».',
  giftWrap:'Подарочная упаковка', giftBtn:'Выбрать подарок',
  shEyebrow:'Шоурум', shTitle:'Инструмент надо подержать в руке',
  shText:'Приходи в наш офис в Риге: покажем каждую вещь в деле, дадим попробовать на образце.',
  shBtn:'Договориться о визите',
  info:{address:'Адрес', hours:'Часы работы', phone:'Телефон', delivery:'Доставка'},
  deliveryShort:'Omniva, DPD, Venipak, Smartposti, Latvijas Pasts, курьер — по условиям выбранного перевозчика',
  footer:'DŌGU — японский инструмент для мастеров. Рига.',
  back:'← Вся коллекция', vat:'с НДС', wrapCheck:'Упаковать в подарок', add:'В корзину', addMore:'В корзине · добавить ещё', seeShowroom:'Посмотреть в шоуруме',
  pickupFree:'Самовывоз из шоурума — бесплатно', whyTitle:'Почему мастер будет рад', storyTitle:'Откуда он', related:'В пару к нему', added:'Добавлено в корзину',
  since:'с', jp:'Япония', no:'№',
  cart:{title:'Корзина', empty:'Корзина пуста.', goods:'Товары', wrap:'Подарочная упаковка', delivery:'Доставка', tbd:'по тарифу — подтвердим', total:'Итого', name:'Имя', phone:'Телефон', method:'Способ получения', locker:'Пакомат / пункт или адрес', lockerPh:'напр., Omniva, Purvciema iela 1', send:'Отправить заказ в WhatsApp', note:'Заказ откроется в WhatsApp — подтвердим наличие, цену и срок доставки. Оплата по счёту или при получении.', agree:'Я ознакомлен(а) с', terms:'правилами', and:'и', privacy:'политикой конфиденциальности', less:'Меньше', more:'Больше', inWrap:'в подарочной упаковке', orderTitle:'Заказ DŌGU', itemsWord:'Товары'},
  cookie:{text:'Мы используем только необходимое хранилище браузера (корзина, язык, ваш выбор). Внешний контент (например, видео YouTube) загружается только с вашего согласия.', essential:'Только необходимые', all:'Принять все', more:'Подробнее', settings:'Настройки куки'},
  legal:{terms:'Правила пользования', delivery:'Доставка и оплата', returns:'Возврат и гарантия', privacy:'Политика конфиденциальности', cookies:'Политика куки'},
  seller:'Продавец'
 }
};

const LEGAL = {
 lv: {
  terms: `<h1>Lietošanas un pirkšanas noteikumi</h1>
<p>Šie noteikumi attiecas uz pirkumiem DŌGU interneta veikalā un salonā. Pārdevējs: <b>{company}</b>, reģ. Nr. {regNo}, PVN Nr. {vatNo}, juridiskā adrese: {legalAddress}. Salons: {address}. Tālrunis: {phone}, e-pasts: {email}.</p>
<h2>1. Pasūtījums un līgums</h2>
<p>Pasūtījumu var veikt vietnē (pasūtījums tiek nosūtīts mums WhatsApp), pa tālruni vai salonā. Līgums tiek noslēgts brīdī, kad apstiprinām pasūtījumu, preču pieejamību, cenu un piegādes izmaksas.</p>
<h2>2. Cenas</h2>
<p>Visas cenas norādītas euro, ieskaitot PVN. Piegādes izmaksas nav iekļautas preču cenā, un tās paziņojam pirms pasūtījuma apstiprināšanas. Dāvanu iesaiņojums — €{giftWrap} par vienu preci.</p>
<h2>3. Apmaksa</h2>
<p>Apmaksa ar bankas pārskaitījumu pēc rēķina pirms nosūtīšanas vai saņemot preci salonā [precizēt: skaidrā naudā / ar karti].</p>
<p>Bankas rekvizīti: {company}, IBAN {iban}, BIC {bic} ({bank}). Maksājuma mērķī norādiet rēķina numuru.</p>
<h2>4. Piegāde</h2>
<p>Piegāde notiek ar izvēlēto pārvadātāju saskaņā ar tā noteikumiem. Sīkāk — sadaļā „Piegāde un apmaksa".</p>
<h2>5. Atteikuma tiesības un garantija</h2>
<p>Patērētājam ir 14 dienu atteikuma tiesības distances līgumiem un tiesības iesniegt pretenziju par preces neatbilstību 2 gadu laikā. Sīkāk — sadaļā „Atgriešana un garantija".</p>
<h2>6. Strīdi</h2>
<p>Pretenzijas izskatām 15 dienu laikā. Ja vienošanos panākt neizdodas, patērētājs var vērsties Patērētāju tiesību aizsardzības centrā (www.ptac.gov.lv). Piemērojami Latvijas Republikas normatīvie akti.</p>`,
  delivery: `<h1>Piegāde un apmaksa</h1>
<h2>Saņemšanas veidi</h2>
<ul><li>Saņemšana salonā — {address}, bez maksas, pēc saskaņošanas.</li>
<li>Omniva pakomāti</li><li>DPD Pickup pakomāti un punkti</li><li>Venipak pakomāti</li><li>Smartposti pakomāti</li><li>Latvijas Pasts — pakomāti un nodaļas</li><li>Kurjers Rīgā un Pierīgā</li></ul>
<h2>Termiņi un cena</h2>
<p>Pēc pasūtījuma apstiprināšanas un apmaksas preci nododam pārvadātājam parasti 1–2 darba dienu laikā [precizēt]. Piegādes termiņš, cena un nosacījumi — saskaņā ar izvēlētā pārvadātāja tarifiem un noteikumiem. Precīzu piegādes cenu paziņojam, apstiprinot pasūtījumu.</p>
<h2>Saņemot sūtījumu</h2>
<p>Lūdzam pārbaudīt iepakojumu. Ja tas ir bojāts, to atzīmējiet pārvadātāja dokumentos un sazinieties ar mums.</p>
<h2>Apmaksa</h2>
<p>Ar bankas pārskaitījumu pēc rēķina vai saņemot salonā. Cenas ietver PVN.</p>`,
  returns: `<h1>Atgriešana un garantija</h1>
<h2>14 dienu atteikuma tiesības</h2>
<p>Ja pasūtījums veikts attālināti (vietnē, pa tālruni vai WhatsApp), patērētājam ir tiesības atteikties no līguma 14 dienu laikā no preces saņemšanas dienas, nenorādot iemeslu, saskaņā ar Patērētāju tiesību aizsardzības likumu un MK noteikumiem Nr. 255 „Noteikumi par distances līgumu".</p>
<ul><li>Par atteikumu paziņojiet uz {email} vai pa tālruni {phone}.</li>
<li>Preci atgrieziet 14 dienu laikā pēc paziņojuma, nelietotu, ar visām sastāvdaļām un oriģinālajā iepakojumā.</li>
<li>Tiešās preces atpakaļ nosūtīšanas izmaksas sedz pircējs.</li>
<li>Naudu atmaksājam 14 dienu laikā pēc atteikuma saņemšanas; varam aizturēt atmaksu, līdz saņemam preci.</li>
<li>Pircējs atbild par preces vērtības samazināšanos, ja ar to rīkojies vairāk, nekā nepieciešams tās īpašību pārbaudei.</li></ul>
<h2>Preces neatbilstība (likumiskā garantija)</h2>
<p>Patērētājs var iesniegt pretenziju par preces neatbilstību līguma noteikumiem 2 gadu laikā no iegādes dienas. Pievienojiet pirkumu apliecinošu dokumentu un aprakstu vai foto. Neatbilstības gadījumā preci salabosim, nomainīsim, samazināsim cenu vai atmaksāsim naudu atbilstoši likumam.</p>
<h2>Kas nav garantijas gadījums</h2>
<p>Normāls nodilums (asmeņi, uzgaļi), bojājumi nepareizas lietošanas, pārslodzes vai mehānisku bojājumu dēļ. Instrumenti nav paredzēti darbam zem sprieguma, ja vien tas nav īpaši norādīts.</p>`,
  privacy: `<h1>Privātuma politika</h1>
<p>Pārzinis: <b>{company}</b>, reģ. Nr. {regNo}, {legalAddress}, e-pasts: {email}.</p>
<h2>Kādus datus apstrādājam</h2>
<p>Vārdu, tālruni, piegādes informāciju (pakomāts, punkts vai adrese), pasūtījuma saturu un saziņu par pasūtījumu.</p>
<h2>Mērķi un tiesiskais pamats</h2>
<ul><li>Pasūtījuma izpilde un piegāde — līguma izpilde (VDAR 6. panta 1. punkta b) apakšpunkts).</li>
<li>Grāmatvedība un nodokļi — juridisks pienākums (c) apakšpunkts).</li></ul>
<h2>Saņēmēji</h2>
<p>Izvēlētais pārvadātājs (Omniva, DPD, Venipak, Smartposti, Latvijas Pasts vai kurjers), grāmatvedības pakalpojumu sniedzējs, vietnes mitināšanas pakalpojumu sniedzējs. Ja pasūtījumu sūtāt caur WhatsApp, datus apstrādā arī Meta Platforms Ireland Ltd. saskaņā ar saviem noteikumiem; tas var ietvert datu nodošanu ārpus ES.</p>
<h2>Glabāšana</h2>
<p>Pasūtījuma datus glabājam tik ilgi, cik nepieciešams līguma izpildei un pretenziju izskatīšanai, bet grāmatvedības dokumentus — normatīvajos aktos noteikto termiņu.</p>
<h2>Jūsu tiesības</h2>
<p>Jums ir tiesības piekļūt saviem datiem, labot tos, prasīt dzēšanu vai apstrādes ierobežošanu, iebilst un saņemt datus pārnesamā formā. Rakstiet uz {email}. Sūdzību varat iesniegt Datu valsts inspekcijai (www.dvi.gov.lv).</p>`,
  cookies: `<h1>Sīkdatņu politika</h1>
<p>Vietne neizmanto reklāmas vai analītikas sīkdatnes. Mēs izmantojam tikai pārlūka vietējo krātuvi (localStorage), kas nepieciešama vietnes darbībai:</p>
<ul><li><b>dogu-cart</b> — groza saturs;</li><li><b>dogu-lang</b> — izvēlētā valoda;</li><li><b>dogu-consent</b> — jūsu sīkdatņu izvēle.</li></ul>
<p>Šie dati glabājas tikai jūsu pārlūkā un netiek nosūtīti mums. Fonti tiek ielādēti no jūsu ierīces, ne no trešajām pusēm.</p>
<h2>Ārējais saturs</h2>
<p>Video (piem., YouTube) tiek ielādēti tikai tad, ja izvēlaties „Pieņemt visas". Šie pakalpojumi var iestatīt savas sīkdatnes saskaņā ar saviem noteikumiem.</p>
<h2>Izvēles maiņa</h2>
<p>Izvēli varat mainīt jebkurā laikā, vietnes kājenē noklikšķinot „Sīkdatņu iestatījumi".</p>`
 },
 en: {
  terms: `<h1>Terms of use and sale</h1>
<p>These terms apply to purchases in the DŌGU online store and showroom. Seller: <b>{company}</b>, reg. no. {regNo}, VAT no. {vatNo}, registered address: {legalAddress}. Showroom: {address}. Phone: {phone}, e-mail: {email}.</p>
<h2>1. Order and contract</h2>
<p>You can order on the website (the order is sent to us via WhatsApp), by phone or in the showroom. The contract is concluded when we confirm the order, availability, price and delivery cost.</p>
<h2>2. Prices</h2>
<p>All prices are in euro and include VAT. Delivery costs are not included in product prices and are communicated before the order is confirmed. Gift wrapping — €{giftWrap} per item.</p>
<h2>3. Payment</h2>
<p>By bank transfer against an invoice before dispatch, or on collection in the showroom [to confirm: cash / card].</p>
<p>Bank details: {company}, IBAN {iban}, BIC {bic} ({bank}). Please quote the invoice number as the payment reference.</p>
<h2>4. Delivery</h2>
<p>Delivery is made by the chosen carrier under its terms. See "Delivery and payment".</p>
<h2>5. Right of withdrawal and warranty</h2>
<p>Consumers have a 14-day right of withdrawal for distance contracts and may claim for non-conformity of goods within 2 years. See "Returns and warranty".</p>
<h2>6. Disputes</h2>
<p>We review complaints within 15 days. If no agreement is reached, consumers may contact the Consumer Rights Protection Centre of Latvia (www.ptac.gov.lv). The laws of the Republic of Latvia apply.</p>`,
  delivery: `<h1>Delivery and payment</h1>
<h2>Delivery methods</h2>
<ul><li>Showroom pickup — {address}, free, by arrangement.</li>
<li>Omniva parcel lockers</li><li>DPD Pickup lockers and points</li><li>Venipak parcel lockers</li><li>Smartposti parcel lockers</li><li>Latvijas Pasts — lockers and post offices</li><li>Courier in Riga and surroundings</li></ul>
<h2>Times and cost</h2>
<p>After the order is confirmed and paid, we usually hand it to the carrier within 1–2 working days [to confirm]. Delivery time, cost and conditions follow the chosen carrier's rates and terms. We confirm the exact delivery price when confirming your order.</p>
<h2>On receipt</h2>
<p>Please check the packaging. If it is damaged, note it in the carrier's documents and contact us.</p>
<h2>Payment</h2>
<p>By bank transfer against an invoice, or on collection in the showroom. Prices include VAT.</p>`,
  returns: `<h1>Returns and warranty</h1>
<h2>14-day right of withdrawal</h2>
<p>If you ordered remotely (website, phone or WhatsApp), as a consumer you may withdraw from the contract within 14 days of receiving the goods without giving a reason, under the Latvian Consumer Rights Protection Law and Cabinet Regulation No. 255 on distance contracts.</p>
<ul><li>Notify us at {email} or by phone {phone}.</li>
<li>Return the item within 14 days of your notice, unused, complete and in its original packaging.</li>
<li>The direct cost of returning the goods is borne by the buyer.</li>
<li>We refund within 14 days of receiving your withdrawal; we may withhold the refund until we receive the goods.</li>
<li>The buyer is liable for any diminished value resulting from handling beyond what is necessary to establish the nature of the goods.</li></ul>
<h2>Non-conformity (legal guarantee)</h2>
<p>Consumers may claim for goods not in conformity with the contract within 2 years of purchase. Please attach proof of purchase and a description or photos. In case of non-conformity we will repair, replace, reduce the price or refund in accordance with the law.</p>
<h2>Not covered</h2>
<p>Normal wear (blades, bits) and damage caused by misuse, overload or mechanical impact. Tools are not intended for live electrical work unless specifically stated.</p>`,
  privacy: `<h1>Privacy policy</h1>
<p>Controller: <b>{company}</b>, reg. no. {regNo}, {legalAddress}, e-mail: {email}.</p>
<h2>Data we process</h2>
<p>Your name, phone number, delivery details (locker, point or address), order contents and communication about the order.</p>
<h2>Purposes and legal basis</h2>
<ul><li>Fulfilling and delivering your order — performance of a contract (GDPR Art. 6(1)(b)).</li>
<li>Accounting and tax — legal obligation (Art. 6(1)(c)).</li></ul>
<h2>Recipients</h2>
<p>The chosen carrier (Omniva, DPD, Venipak, Smartposti, Latvijas Pasts or courier), our accounting service provider and website hosting provider. If you send your order via WhatsApp, Meta Platforms Ireland Ltd. also processes data under its own terms, which may involve transfers outside the EU.</p>
<h2>Retention</h2>
<p>Order data is kept as long as needed to fulfil the contract and handle claims; accounting records for the period required by law.</p>
<h2>Your rights</h2>
<p>You may access, rectify or erase your data, restrict or object to processing, and receive your data in a portable format. Write to {email}. You may lodge a complaint with the Data State Inspectorate of Latvia (www.dvi.gov.lv).</p>`,
  cookies: `<h1>Cookie policy</h1>
<p>This website uses no advertising or analytics cookies. We only use your browser's local storage (localStorage), which is necessary for the site to work:</p>
<ul><li><b>dogu-cart</b> — cart contents;</li><li><b>dogu-lang</b> — chosen language;</li><li><b>dogu-consent</b> — your cookie choice.</li></ul>
<p>This data stays in your browser and is not sent to us. Fonts load from your device, not from third parties.</p>
<h2>External content</h2>
<p>Videos (e.g. YouTube) load only if you choose "Accept all". These services may set their own cookies under their own terms.</p>
<h2>Changing your choice</h2>
<p>You can change your choice at any time via "Cookie settings" in the site footer.</p>`
 },
 ru: {
  terms: `<h1>Правила пользования и покупки</h1>
<p>Эти правила действуют для покупок в интернет-магазине и шоуруме DŌGU. Продавец: <b>{company}</b>, рег. № {regNo}, № плательщика НДС {vatNo}, юридический адрес: {legalAddress}. Шоурум: {address}. Телефон: {phone}, e-mail: {email}.</p>
<h2>1. Заказ и договор</h2>
<p>Заказать можно на сайте (заказ отправляется нам в WhatsApp), по телефону или в шоуруме. Договор заключается, когда мы подтверждаем заказ, наличие, цену и стоимость доставки.</p>
<h2>2. Цены</h2>
<p>Все цены указаны в евро с НДС. Стоимость доставки не входит в цену товара и сообщается до подтверждения заказа. Подарочная упаковка — €{giftWrap} за одну позицию.</p>
<h2>3. Оплата</h2>
<p>Банковским переводом по счёту до отправки или при получении в шоуруме [уточнить: наличные / карта].</p>
<p>Банковские реквизиты: {company}, IBAN {iban}, BIC {bic} ({bank}). В назначении платежа укажите номер счёта.</p>
<h2>4. Доставка</h2>
<p>Доставка выполняется выбранным перевозчиком по его условиям. Подробнее — в разделе «Доставка и оплата».</p>
<h2>5. Право отказа и гарантия</h2>
<p>Потребитель имеет право отказаться от дистанционного договора в течение 14 дней и предъявить претензию о несоответствии товара в течение 2 лет. Подробнее — в разделе «Возврат и гарантия».</p>
<h2>6. Споры</h2>
<p>Претензии рассматриваем в течение 15 дней. Если договориться не удалось, потребитель может обратиться в Центр защиты прав потребителей Латвии (www.ptac.gov.lv). Применяется законодательство Латвийской Республики.</p>`,
  delivery: `<h1>Доставка и оплата</h1>
<h2>Способы получения</h2>
<ul><li>Самовывоз из шоурума — {address}, бесплатно, по договорённости.</li>
<li>Пакоматы Omniva</li><li>Пакоматы и пункты DPD Pickup</li><li>Пакоматы Venipak</li><li>Пакоматы Smartposti</li><li>Latvijas Pasts — пакоматы и отделения</li><li>Курьер по Риге и окрестностям</li></ul>
<h2>Сроки и стоимость</h2>
<p>После подтверждения и оплаты заказа мы обычно передаём его перевозчику в течение 1–2 рабочих дней [уточнить]. Срок, стоимость и условия доставки — по тарифам и правилам выбранного перевозчика. Точную стоимость доставки сообщаем при подтверждении заказа.</p>
<h2>При получении</h2>
<p>Пожалуйста, проверьте упаковку. Если она повреждена, отметьте это в документах перевозчика и свяжитесь с нами.</p>
<h2>Оплата</h2>
<p>Банковским переводом по счёту или при получении в шоуруме. Цены включают НДС.</p>`,
  returns: `<h1>Возврат и гарантия</h1>
<h2>14 дней на отказ от покупки</h2>
<p>Если заказ сделан дистанционно (на сайте, по телефону или в WhatsApp), потребитель вправе отказаться от договора в течение 14 дней со дня получения товара без объяснения причин — согласно Закону о защите прав потребителей Латвии и правилам Кабинета министров № 255 о дистанционных договорах.</p>
<ul><li>Сообщите об отказе на {email} или по телефону {phone}.</li>
<li>Верните товар в течение 14 дней после уведомления — неиспользованным, в комплекте и в оригинальной упаковке.</li>
<li>Прямые расходы на обратную отправку несёт покупатель.</li>
<li>Деньги возвращаем в течение 14 дней после получения отказа; можем задержать возврат до получения товара.</li>
<li>Покупатель отвечает за снижение стоимости товара, если обращался с ним больше, чем нужно для проверки его свойств.</li></ul>
<h2>Несоответствие товара (законная гарантия)</h2>
<p>Потребитель может предъявить претензию о несоответствии товара условиям договора в течение 2 лет со дня покупки. Приложите документ о покупке и описание или фото. При несоответствии мы отремонтируем, заменим товар, снизим цену или вернём деньги согласно закону.</p>
<h2>Что не является гарантийным случаем</h2>
<p>Нормальный износ (лезвия, биты), повреждения из-за неправильного использования, перегрузки или механических повреждений. Инструменты не предназначены для работы под напряжением, если это не указано отдельно.</p>`,
  privacy: `<h1>Политика конфиденциальности</h1>
<p>Оператор данных: <b>{company}</b>, рег. № {regNo}, {legalAddress}, e-mail: {email}.</p>
<h2>Какие данные мы обрабатываем</h2>
<p>Имя, телефон, данные доставки (пакомат, пункт или адрес), состав заказа и переписку по заказу.</p>
<h2>Цели и правовое основание</h2>
<ul><li>Выполнение и доставка заказа — исполнение договора (ст. 6(1)(b) GDPR).</li>
<li>Бухгалтерия и налоги — юридическая обязанность (ст. 6(1)(c)).</li></ul>
<h2>Получатели</h2>
<p>Выбранный перевозчик (Omniva, DPD, Venipak, Smartposti, Latvijas Pasts или курьер), бухгалтерская служба, хостинг сайта. Если вы отправляете заказ через WhatsApp, данные обрабатывает также Meta Platforms Ireland Ltd. по своим правилам, что может включать передачу данных за пределы ЕС.</p>
<h2>Срок хранения</h2>
<p>Данные заказа храним столько, сколько нужно для исполнения договора и рассмотрения претензий, бухгалтерские документы — в течение срока, установленного законом.</p>
<h2>Ваши права</h2>
<p>Вы вправе получить доступ к своим данным, исправить или удалить их, ограничить обработку или возразить против неё, получить данные в переносимом формате. Пишите на {email}. Жалобу можно подать в Государственную инспекцию данных Латвии (www.dvi.gov.lv).</p>`,
  cookies: `<h1>Политика куки</h1>
<p>Сайт не использует рекламные или аналитические куки. Мы используем только локальное хранилище браузера (localStorage), необходимое для работы сайта:</p>
<ul><li><b>dogu-cart</b> — содержимое корзины;</li><li><b>dogu-lang</b> — выбранный язык;</li><li><b>dogu-consent</b> — ваш выбор по куки.</li></ul>
<p>Эти данные хранятся только в вашем браузере и нам не передаются. Шрифты загружаются с вашего устройства, а не от третьих сторон.</p>
<h2>Внешний контент</h2>
<p>Видео (например, YouTube) загружаются, только если вы выбрали «Принять все». Эти сервисы могут устанавливать свои куки по своим правилам.</p>
<h2>Изменить выбор</h2>
<p>Выбор можно изменить в любой момент — ссылка «Настройки куки» внизу сайта.</p>`
 }
};
