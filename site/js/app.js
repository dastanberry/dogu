/* ===== DŌGU — логика сайта. Обычно трогать не нужно: тексты и цены в data.js и i18n.js ===== */
(function () {
  'use strict';
  const SUN = '#C8381F';
  const LANGS = ['lv', 'en', 'ru'];
  const D = {
    pliers:'M114 110 C108 80 112 55 118 40 M126 110 C132 80 128 55 122 40 M118 40 L122 40 M114 112 C100 150 88 180 80 214 M126 112 C140 150 152 180 160 214 M114 110 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0',
    small:'M116 110 C112 86 114 66 118 54 M124 110 C128 86 126 66 122 54 M116 112 C106 146 98 172 92 204 M124 112 C134 146 142 172 148 204',
    ratchet:'M100 132 Q100 120 112 120 L128 120 Q140 120 140 132 L140 204 Q140 216 128 216 L112 216 Q100 216 100 204 Z M116 110 L116 48 L120 36 L124 48 L124 110',
    bits:'M74 204 L74 104 L78 92 L82 104 L82 204 Z M102 204 L102 84 L106 72 L110 84 L110 204 Z M130 204 L130 96 L134 84 L138 96 L138 204 Z',
    stubby:'M92 150 Q92 134 108 134 L132 134 Q148 134 148 150 L148 196 Q148 212 132 212 L108 212 Q92 212 92 196 Z M116 134 L116 100 L120 90 L124 100 L124 134',
    scissors:'M80 182 a18 18 0 1 0 36 0 a18 18 0 1 0 -36 0 M124 182 a18 18 0 1 0 36 0 a18 18 0 1 0 -36 0 M108 166 L140 40 M132 166 L100 40',
    knife:'M40 140 L158 140 Q168 140 168 150 L168 158 Q168 168 158 168 L40 168 Q30 168 30 158 L30 150 Q30 140 40 140 Z M168 146 L212 146 L198 162 L168 162',
    chalk:'M78 150 a42 42 0 1 0 84 0 a42 42 0 1 0 -84 0 M120 150 L148 118 L158 126 M162 150 L216 150',
    plane:'M44 172 L196 172 L184 150 L56 150 Z M72 150 Q72 108 120 108 Q168 108 168 150',
    carabiner:'M94 62 Q94 40 116 40 L128 40 Q150 40 150 62 L150 180 Q150 206 124 206 L120 206 Q94 206 94 180 Z M106 72 L106 156',
    holder:'M88 64 L152 64 L152 196 L88 196 Z M88 104 L152 104',
    box:'M70 112 L170 112 L170 204 L70 204 Z M62 92 L178 92 L178 112 L62 112 Z M120 92 L120 204 M120 92 Q96 56 84 76 Q82 92 120 92 Q144 56 156 76 Q158 92 120 92'
  };

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"']/g, m => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[m]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  let lang = (() => {
    const q = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(q)) return q;
    const s = store.get('dogu-lang', null);
    return LANGS.includes(s) ? s : 'lv';
  })();
  const U = () => UI[lang];
  const t = o => (o && typeof o === 'object') ? (o[lang] || o.lv) : (o ?? '');
  const eur = n => '€' + (Math.round(n * 100) / 100).toFixed(Number.isInteger(n) ? 0 : 2).replace('.', lang === 'en' ? '.' : ',');
  const brandLine = p => p.tag === 'jp' ? `${p.brand} · ${U().jp}` : (typeof p.tag === 'number' ? `${p.brand} · ${U().since} ${p.tag}` : p.brand);
  const fill = s => s.replace(/\{(\w+)\}/g, (m, k) => k === 'giftWrap' ? SHOP.giftWrap : (SHOP[k] !== undefined ? esc(t(SHOP[k])) : m));
  const tel = SHOP.phone.replace(/\s/g, '');
  const catLabel = c => ({ el: U().cats.el, all: U().cats.every, gift: U().cats.gift })[c];

  function art(p, opts = {}) {
    const [cx, cy, r] = p.c;
    const img = p.img ? `<img src="${p.img}" alt="${esc(t(p.name))}" loading="lazy" onload="this.parentNode.classList.add('has-photo')" onerror="this.remove()">` : '';
    return `<div class="art">${opts.no ? `<span class="no">${U().no} ${p.id}</span>` : ''}<svg viewBox="0 0 240 240" aria-hidden="true"><circle cx="${cx}" cy="${cy}" r="${r}" fill="${SUN}"/><path d="${D[p.art]}" fill="none" stroke="#1B1B1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>${img}</div>`;
  }
  const card = p => `<a class="card" href="#/p/${p.id}">${art(p, { no: 1 })}<div class="body"><span class="brand">${esc(brandLine(p))}</span><span class="name">${esc(t(p.name))}</span><span class="hook">${esc(t(p.hook))}</span><span class="price">${eur(p.price)}</span></div></a>`;

  /* ---------- header & footer ---------- */
  function renderChrome() {
    document.documentElement.lang = lang;
    const u = U();
    $('#mainNav').innerHTML = `
<a class="hide-sm" href="#/collection">${u.nav.collection}</a>
<a class="hide-sm" href="#/video">${u.nav.video}</a>
<a class="hide-sm" href="#/gift">${u.nav.gift}</a>
<a class="hide-sm" href="#/showroom">${u.nav.showroom}</a>
<div class="langs" role="group" aria-label="Language">${LANGS.map(l => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}" lang="${l}">${UI[l].langName}</button>`).join('')}</div>
<button class="cart-btn" type="button" id="cartOpen" aria-haspopup="dialog">${u.nav.cart} · <span id="cartCount">0</span></button>`;
    $$('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    $('#cartOpen').addEventListener('click', openCart);
    const L = u.legal;
    $('#footer').innerHTML = `
<div><div>${esc(u.footer)}</div><div>${esc(SHOP.address)} · <a href="tel:${tel}">${esc(SHOP.phone)}</a></div><div>${u.seller}: ${esc(SHOP.company)}</div></div>
<nav aria-label="Legal">${['terms', 'delivery', 'returns', 'privacy', 'cookies'].map(k => `<a href="#/info/${k}">${L[k]}</a>`).join('')}<button type="button" class="linklike" id="cookieSettings">${u.cookie.settings}</button></nav>`;
    $('#cookieSettings').addEventListener('click', () => showCookie(true));
  }

  function setLang(l) {
    lang = l; store.set('dogu-lang', l);
    renderChrome(); renderCart(); showCookie(false); route();
  }

  /* ---------- pages ---------- */
  let filter = 'all';
  function home(anchor) {
    const u = U();
    const cats = ['all', 'el', 'every', 'gift'];
    const map = { all: null, el: 'el', every: 'all', gift: 'gift' };
    const shown = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === map[filter]);
    const consent = store.get('dogu-consent', null);
    const hero = PRODUCTS[0];
    $('#app').innerHTML = `
<div class="wrap"><section class="hero">
<div class="txt"><p class="eyebrow">${u.eyebrow}</p><h1>${u.h1}</h1><p class="lead">${u.lead}</p>
<div class="row"><a class="btn" href="#/collection">${u.cta1}</a><a class="btn ghost" href="#/showroom">${u.cta2}</a></div></div>
<div class="art-wrap"><svg viewBox="0 0 480 520" role="img" aria-label="${esc(t(hero.name))}" style="width:100%;height:auto;display:block">
<line x1="0" y1="392" x2="480" y2="392" stroke="#1B1B1A" stroke-width="1"/><line x1="40" y1="410" x2="300" y2="410" stroke="#1B1B1A" stroke-width=".6"/>
<circle cx="292" cy="250" r="170" fill="${SUN}"/>
<g id="heroLine" transform="translate(60 60) scale(1.7)" fill="none" stroke="#1B1B1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${D.pliers}"/></g>
<image href="img/hero.png" x="20" y="20" width="420" height="420" preserveAspectRatio="xMidYMid meet" onload="document.getElementById('heroLine').style.display='none'" onerror="this.remove()"/>
</svg></div></section></div>

<section class="band" aria-label="${esc(u.principles[0][0])}">
<svg class="sun-set" viewBox="0 0 400 200" aria-hidden="true"><circle cx="200" cy="200" r="200" fill="${SUN}"/></svg>
<div class="wrap"><div class="grid">${u.principles.map((x, i) => `<div class="item"><span class="num">0${i + 1}</span><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div></div>
</section>

<div class="wrap"><section class="block" id="collection">
<div class="head-row"><div><p class="eyebrow">${u.colEyebrow}</p><h2>${u.colTitle}</h2></div>
<div class="filters" role="group">${cats.map(c => `<button type="button" data-cat="${c}" aria-pressed="${c === filter}">${u.cats[c]}</button>`).join('')}</div></div>
<div class="cards">${shown.map(card).join('')}</div>
</section>

<section class="block" id="video">
<p class="eyebrow">${u.vidEyebrow}</p><h2 style="font-size:clamp(26px,3.4vw,38px);margin-bottom:28px">${u.vidTitle}</h2>
<div class="videos">${VIDEOS.map(v => {
      if (v.src && consent === 'all') return `<div class="video"><iframe src="${esc(v.src)}" title="${esc(t(v.title))}" allowfullscreen loading="lazy"></iframe></div>`;
      const ph = `<svg viewBox="0 0 90 160" aria-hidden="true"><line x1="0" y1="118" x2="90" y2="118" stroke="#5B574F" stroke-width=".4"/><circle cx="${v.cx}" cy="118" r="22" fill="${SUN}"/><path d="M40 70 L54 80 L40 90 Z" fill="#F4F1EA"/></svg>`;
      if (v.src) return `<div class="video">${ph}<div class="consent"><span>${u.vidConsent}</span><button type="button" class="btn red" data-accept-all>${u.vidLoad}</button></div></div>`;
      return `<div class="video">${ph}<p>${esc(t(v.title))}</p></div>`;
    }).join('')}</div>
</section></div>

<section class="gift" id="gift"><div class="wrap"><div class="split">
<div><svg viewBox="0 0 400 360" role="img" aria-label="${esc(u.giftTitle)}" style="width:100%;height:auto;display:block">
<circle cx="250" cy="130" r="110" fill="${SUN}"/><line x1="0" y1="300" x2="400" y2="300" stroke="#1B1B1A" stroke-width="1"/>
<g transform="translate(40 40) scale(1.1)" fill="none" stroke="#1B1B1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${D.box}"/></g></svg></div>
<div><h2>${u.giftTitle}</h2><p>${u.giftText}</p><p style="font-size:15px">${u.giftWrap} — ${eur(SHOP.giftWrap)}</p>
<a class="btn red" href="#/p/12">${u.giftBtn}</a></div>
</div></div></section>

<div class="wrap"><section class="split" id="showroom">
<div><p class="eyebrow">${u.shEyebrow}</p><h2>${u.shTitle}</h2><p>${u.shText}</p>
<a class="btn ghost" href="https://wa.me/${SHOP.whatsapp}" target="_blank" rel="noopener">${u.shBtn}</a></div>
<dl class="info"><dt>${u.info.address}</dt><dd>${esc(SHOP.address)}</dd><dt>${u.info.hours}</dt><dd>${esc(t(SHOP.hours))}</dd>
<dt>${u.info.phone}</dt><dd><a href="tel:${tel}">${esc(SHOP.phone)}</a></dd><dt>${u.info.delivery}</dt><dd>${esc(u.deliveryShort)}</dd></dl>
</section></div>`;
    document.title = 'DŌGU — ' + u.eyebrow;
    $$('[data-cat]').forEach(b => b.addEventListener('click', () => { filter = b.dataset.cat; home('collection'); }));
    $$('[data-accept-all]').forEach(b => b.addEventListener('click', () => { setConsent('all'); home('video'); }));
    if (anchor) { const el = document.getElementById(anchor); if (el) el.scrollIntoView(); } else window.scrollTo(0, 0);
  }

  function product(id) {
    const p = PRODUCTS.find(x => x.id === id); if (!p) return home();
    const u = U();
    const rel = PRODUCTS.filter(x => x.id !== p.id && (x.cat === p.cat || x.brand === p.brand)).slice(0, 3);
    const gal = p.gallery || [];
    $('#app').innerHTML = `
<div class="wrap"><a class="back" href="#/collection">${u.back}</a>
<section class="pp">
<div class="media"><div id="mainMedia">${art(p)}</div>${gal.length ? `<div class="thumbs" role="group">
<button type="button" data-g="-1" aria-pressed="true" aria-label="${esc(t(p.name))}">${art(p)}</button>${gal.map((g, i) => `<button type="button" data-g="${i}" aria-pressed="false" aria-label="${esc(t(g[1]))}"><img class="t" src="${g[0]}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}</div>
<div class="info">
<p class="eyebrow" style="margin:0">${u.no} ${p.id} · ${esc(brandLine(p))}</p>
<h1>${esc(t(p.name))}</h1>
<p class="promise">${esc(t(p.hook))}</p>
<p class="desc">${esc(t(p.desc))}</p>
<div class="price-row"><b>${eur(p.price)}</b><span>${u.vat}</span></div>
${p.cat !== 'gift' ? `<label class="check"><input type="checkbox" id="giftBox"> ${u.wrapCheck} (+${eur(SHOP.giftWrap)})</label>` : ''}
<div class="row"><button class="btn" type="button" id="addBtn">${u.add}</button><a class="btn ghost" href="#/showroom">${u.seeShowroom}</a></div>
<ul><li>— ${u.pickupFree}</li><li>— ${esc(u.deliveryShort)}</li></ul>
</div></section></div>

<section class="band why"><svg class="sun-set" viewBox="0 0 400 200" aria-hidden="true" style="left:-60px;right:auto"><circle cx="200" cy="200" r="200" fill="${SUN}"/></svg>
<div class="wrap"><h2 style="position:relative;font-size:clamp(26px,3.4vw,34px);padding-top:64px">${u.whyTitle}</h2>
<div class="grid">${p.why.map((w, i) => `<div class="item"><span class="num">0${i + 1}</span><h3>${esc(t(w[0]))}</h3><p>${esc(t(w[1]))}</p></div>`).join('')}</div></div></section>

<div class="wrap"><section class="specs">
<div><h2>${u.storyTitle}</h2><p style="margin:0;color:var(--ink2)">${esc(t(p.story))}</p></div>
<dl class="info" style="grid-template-columns:160px 1fr">${p.specs.map(s => `<dt>${esc(t(s[0]))}</dt><dd>${esc(t(s[1]))}</dd>`).join('')}</dl>
</section>
${rel.length ? `<section style="padding-bottom:88px"><h2 style="font-size:28px;margin-bottom:24px">${u.related}</h2><div class="cards">${rel.map(card).join('')}</div></section>` : ''}
</div>`;
    document.title = t(p.name) + ' — DŌGU';
    $('#addBtn').addEventListener('click', () => addToCart(p.id, !!($('#giftBox') && $('#giftBox').checked)));
    $$('[data-g]').forEach(b => b.addEventListener('click', () => {
      const i = +b.dataset.g;
      $('#mainMedia').innerHTML = i < 0 ? art(p) : `<div class="art photo"><img src="${gal[i][0]}" alt="${esc(t(gal[i][1]))}"></div>`;
      $$('[data-g]').forEach(x => x.setAttribute('aria-pressed', x === b));
    }));
    window.scrollTo(0, 0);
  }

  function legal(key) {
    const L = LEGAL[lang] || LEGAL.lv;
    if (!L[key]) return home();
    const u = U();
    $('#app').innerHTML = `<div class="wrap"><nav class="legal-nav" aria-label="Legal">${['terms', 'delivery', 'returns', 'privacy', 'cookies'].map(k => `<a href="#/info/${k}"${k === key ? ' aria-current="page"' : ''}>${u.legal[k]}</a>`).join('')}</nav><article class="legal">${fill(L[key])}</article></div>`;
    document.title = u.legal[key] + ' — DŌGU';
    window.scrollTo(0, 0);
  }

  /* ---------- cart ---------- */
  let cart = store.get('dogu-cart', []);
  if (!Array.isArray(cart)) cart = [];
  cart = cart.filter(l => PRODUCTS.some(p => p.id === l.id));
  let deliveryId = 'pickup';
  const save = () => { store.set('dogu-cart', cart); renderCart(); };

  function addToCart(id, gift) {
    const line = cart.find(l => l.id === id && l.gift === gift);
    if (line) line.q++; else cart.push({ id, gift, q: 1 });
    save(); toast(U().added);
  }
  function totals() {
    let goods = 0, wrap = 0;
    cart.forEach(l => { const p = PRODUCTS.find(x => x.id === l.id); if (!p) return; goods += p.price * l.q; if (l.gift) wrap += SHOP.giftWrap * l.q; });
    const d = SHOP.delivery.find(x => x.id === deliveryId) || SHOP.delivery[0];
    return { goods, wrap, d, total: goods + wrap + (d.price || 0) };
  }
  function renderCart() {
    const u = U(), c = u.cart;
    const n = cart.reduce((s, l) => s + l.q, 0);
    const cc = $('#cartCount'); if (cc) cc.textContent = n;
    const T_ = totals();
    const form = $('#orderForm');
    const keep = form ? { name: form.name.value, phone: form.phone.value, locker: form.locker ? form.locker.value : '', agree: form.agree.checked } : {};
    $('#drawer').innerHTML = `
<header><h2 id="cartTitle">${c.title}</h2><button class="icon-btn" type="button" id="cartClose" aria-label="×">×</button></header>
<div class="scroll">
<div class="items">${cart.length ? cart.map((l, i) => { const p = PRODUCTS.find(x => x.id === l.id); return `<div class="ci">${art(p)}<div class="meta"><b>${esc(t(p.name))}</b><span class="note">${eur(p.price)}${l.gift ? ` · ${c.inWrap} +${eur(SHOP.giftWrap)}` : ''}</span></div><div class="qty"><button type="button" data-i="${i}" data-d="-1" aria-label="${c.less}">−</button><span>${l.q}</span><button type="button" data-i="${i}" data-d="1" aria-label="${c.more}">+</button></div></div>`; }).join('') : `<p class="empty">${c.empty}</p>`}</div>
${cart.length ? `<form id="orderForm" novalidate>
<label class="f">${c.method}<select name="delivery" id="deliverySel">${SHOP.delivery.map(d => `<option value="${d.id}"${d.id === deliveryId ? ' selected' : ''}>${esc(t(d.name))}${d.price === 0 ? ' — €0' : ''}</option>`).join('')}</select></label>
${deliveryId !== 'pickup' ? `<label class="f">${c.locker}<input type="text" name="locker" placeholder="${esc(c.lockerPh)}" required></label>` : ''}
<label class="f">${c.name}<input type="text" name="name" autocomplete="name" required></label>
<label class="f">${c.phone}<input type="tel" name="phone" autocomplete="tel" required></label>
<div class="sum"><span>${c.goods}</span><span>${eur(T_.goods)}</span>${T_.wrap ? `<span>${c.wrap}</span><span>${eur(T_.wrap)}</span>` : ''}<span>${c.delivery}</span><span>${T_.d.price === null ? c.tbd : eur(T_.d.price)}</span><span class="total">${c.total}</span><span class="total">${eur(T_.total)}${T_.d.price === null ? ' +' : ''}</span></div>
<label class="check" style="font-size:13px"><input type="checkbox" name="agree" required> <span>${c.agree} <a href="#/info/terms">${c.terms}</a> ${c.and} <a href="#/info/privacy">${c.privacy}</a>.</span></label>
<button class="btn red" type="submit">${c.send}</button>
<p class="note" style="margin:0">${c.note}</p>
</form>` : ''}
</div>`;
    $('#cartClose').addEventListener('click', closeCart);
    $$('#drawer [data-i]').forEach(b => b.addEventListener('click', () => { const l = cart[+b.dataset.i]; l.q += +b.dataset.d; if (l.q <= 0) cart.splice(+b.dataset.i, 1); save(); }));
    $$('#drawer a').forEach(a => a.addEventListener('click', closeCart));
    const f = $('#orderForm');
    if (f) {
      if (keep.name !== undefined) { f.name.value = keep.name; f.phone.value = keep.phone; if (f.locker) f.locker.value = keep.locker; f.agree.checked = keep.agree; }
      $('#deliverySel').addEventListener('change', e => { deliveryId = e.target.value; renderCart(); const s = $('#deliverySel'); if (s) s.focus(); });
      f.addEventListener('submit', sendOrder);
    }
  }
  function sendOrder(e) {
    e.preventDefault();
    const f = e.target, c = U().cart;
    if (!f.reportValidity()) return;
    const T_ = totals();
    const lines = cart.map(l => { const p = PRODUCTS.find(x => x.id === l.id); return `• ${t(p.name)} ×${l.q} — ${eur(p.price * l.q)}${l.gift ? ` (${c.inWrap} +${eur(SHOP.giftWrap * l.q)})` : ''}`; });
    const msg = [c.orderTitle, lines.join('\n'), '', `${c.goods}: ${eur(T_.goods)}`, T_.wrap ? `${c.wrap}: ${eur(T_.wrap)}` : null,
      `${c.delivery}: ${t(T_.d.name)}${f.locker ? ' — ' + f.locker.value : ''} (${T_.d.price === null ? c.tbd : eur(T_.d.price)})`,
      `${c.total}: ${eur(T_.total)}${T_.d.price === null ? ' + ' + c.delivery.toLowerCase() : ''}`, '',
      `${c.name}: ${f.name.value}`, `${c.phone}: ${f.phone.value}`, `Lang: ${lang.toUpperCase()}`].filter(x => x !== null).join('\n');
    window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }
  function openCart() { document.body.classList.add('open'); const b = $('#cartClose'); if (b) b.focus(); }
  function closeCart() { document.body.classList.remove('open'); const b = $('#cartOpen'); if (b) b.focus(); }
  $('#overlay').addEventListener('click', closeCart);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('open')) closeCart(); });

  /* ---------- cookies ---------- */
  function setConsent(v) { store.set('dogu-consent', v); $('#cookie').classList.remove('show'); }
  function showCookie(force) {
    const u = U().cookie, el = $('#cookie');
    el.innerHTML = `<p>${u.text} <a href="#/info/cookies">${u.more}</a></p><div class="row"><button type="button" class="btn ghost" id="ckEss">${u.essential}</button><button type="button" class="btn red" id="ckAll">${u.all}</button></div>`;
    $('#ckEss').addEventListener('click', () => { setConsent('essential'); route(); });
    $('#ckAll').addEventListener('click', () => { setConsent('all'); route(); });
    if (force || store.get('dogu-consent', null) === null) el.classList.add('show');
  }

  let tt;
  function toast(s) { const el = $('#toast'); el.textContent = s; el.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => el.classList.remove('show'), 1800); }

  /* ---------- router ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    if (h.startsWith('p/')) return product(h.slice(2));
    if (h.startsWith('info/')) return legal(h.slice(5));
    home(['collection', 'video', 'gift', 'showroom'].includes(h) ? h : null);
  }
  window.addEventListener('hashchange', route);
  renderChrome(); renderCart(); showCookie(false); route();
})();
