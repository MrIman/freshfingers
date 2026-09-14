/* Fingers Fresh — the wipe. Coloured layers erased by a finger wipe: automatically on arrival, by hand afterwards; chapters wipe in the same way. */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement, G = window.gsap;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isStatic = root.classList.contains('is-static');
  const motion = !!G && !reduce && !isStatic;
  if (motion) { root.classList.add('has-motion'); G.registerPlugin(ScrollTrigger, window.SplitText || {}); G.ticker.lagSmoothing(0); ScrollTrigger.clearScrollMemory('manual'); }
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; // the page always opens at the top, under the wipe
  if (reduce) root.classList.add('reduced-motion');
  const DPR = Math.min(2, devicePixelRatio || 1);

  /* ---------- brush: a soft, slightly ragged eraser the size of a wipe ---------- */
  const brush = (ctx, x, y, r) => {
    ctx.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < 5; i++) {
      const jx = (Math.random() - .5) * r * .5, jy = (Math.random() - .5) * r * .5, rr = r * (.55 + Math.random() * .5);
      const g = ctx.createRadialGradient(x + jx, y + jy, rr * .2, x + jx, y + jy, rr);
      g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(.7, 'rgba(0,0,0,.85)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x + jx, y + jy, rr, 0, Math.PI * 2); ctx.fill();
    }
  };
  const strokeTo = (ctx, from, to, r) => { // dense dabs so a fast pointer still leaves a continuous wipe
    const d = Math.hypot(to.x - from.x, to.y - from.y), n = Math.max(1, Math.ceil(d / (r * .22)));
    for (let i = 1; i <= n; i++) brush(ctx, from.x + (to.x - from.x) * i / n, from.y + (to.y - from.y) * i / n, r);
  };
  const paintLayer = (cv, color, ink, word) => {
    const w = cv.clientWidth, h = cv.clientHeight; cv.width = w * DPR; cv.height = h * DPR;
    const ctx = cv.getContext('2d'); ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = color; ctx.fillRect(0, 0, w, h);
    if (word) { ctx.fillStyle = ink; ctx.font = `800 ${Math.min(w * .19, h * .42)}px 'Bricolage Grotesque', Arial, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(word.toUpperCase(), w / 2, h / 2); }
    return ctx;
  };
  const coverage = cv => { // how much of the layer is left, sampled coarsely
    if (!cv.width || !cv.height) return 1;
    const w = 48, h = 27, off = coverage.off || (coverage.off = document.createElement('canvas')); off.width = w; off.height = h;
    const c = off.getContext('2d'); c.clearRect(0, 0, w, h); c.drawImage(cv, 0, 0, w, h);
    const d = c.getImageData(0, 0, w, h).data; let a = 0; for (let i = 3; i < d.length; i += 4) a += d[i]; return a / (255 * w * h);
  };
  // an S-shaped wiping path across a box, like a hand wiping a window
  const wipePath = (w, h, rows = 4) => { const pts = []; for (let r = 0; r < rows; r++) { const y = h * (0.05 + 0.9 * r / (rows - 1)); const L = r % 2 === 0; pts.push({ x: L ? -w * .12 : w * 1.12, y: y - h * .05 }, { x: w * .5, y: y + (L ? h * .05 : -h * .05) }, { x: L ? w * 1.12 : -w * .12, y: y + h * .04 }); } return pts; };
  const autoWipe = (cv, ctx, r, dur, onDone, sprite) => {
    const w = cv.clientWidth, h = cv.clientHeight, pts = wipePath(w, h), state = { t: 0 }; let last = pts[0];
    return G.to(state, { t: 1, duration: dur, ease: 'power1.inOut', onUpdate: () => {
      const p = state.t * (pts.length - 1), i = Math.min(pts.length - 2, Math.floor(p)), f = p - i;
      const cur = { x: pts[i].x + (pts[i + 1].x - pts[i].x) * f, y: pts[i].y + (pts[i + 1].y - pts[i].y) * f };
      strokeTo(ctx, last, cur, r); last = cur; if (sprite) G.set(sprite, { x: cur.x, y: cur.y, opacity: 1 });
    }, onComplete: onDone });
  };

  /* ---------- 1. arrival: one layer, four products, wiped by hand ---------- */
  let arrived = false;
  const stage = $('#stage'), layer = $('#layer'), sprite = $('#wipe');
  const finishStage = () => { stage.classList.add('is-done'); if (!stage.classList.contains('is-deep')) scrollTo({ top: 0, behavior: 'instant' }); document.body.style.overflow = ''; if (window.ScrollTrigger) requestAnimationFrame(() => ScrollTrigger.refresh()); };
  const loadImg = src => new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
  const paintComposite = async (cv) => {
    const w = cv.clientWidth, h = cv.clientHeight, ctx = paintLayer(cv, '#ffffff', null, null);
    const items = JSON.parse(cv.dataset.products), imgs = await Promise.all(items.map(p => loadImg(p.pack))), bgs = await Promise.all(items.map(p => p.bg ? loadImg(p.bg).catch(() => null) : null));
    const mobile = w < 700, cols = mobile ? 2 : 4, rows = mobile ? 2 : 1, cw = w / cols, ch = h / rows;
    // wobbling boundaries: each panel is laid down as a painted swipe over the previous one
    const wob = () => { const ph = [rnd(0, 6), rnd(0, 6), rnd(0, 6)], amp = Math.min(cw, ch) * (mobile ? .07 : .11), lean = rnd(-.09, .09) * Math.min(cw, ch) * (mobile ? .5 : 1); return t => lean * (t / 6 - .5) * 2 + Math.sin(t * 1.4 + ph[0]) * amp + Math.sin(t * 2.9 + ph[1]) * amp * .35 + Math.sin(t * 5.2 + ph[2]) * amp * .12; };
    // one shared boundary per column and per row, so where four panels meet the edges cross cleanly
    const colEdges = Array.from({ length: cols }, () => wob()), rowEdges = Array.from({ length: rows }, () => wob());
    ctx.fillStyle = items[0].color; ctx.fillRect(0, 0, w, h);
    items.forEach((p, i) => {
      const cx = (i % cols) * cw, cy = Math.floor(i / cols) * ch;
      ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = p.color;
      const fV = colEdges[i % cols], fH = rowEdges[Math.floor(i / cols)], left = i % cols > 0, top = Math.floor(i / cols) > 0;
      ctx.beginPath();
      // top edge (wobbles when a panel sits above), then right, bottom, and the wobbling left edge
      for (let x = cx - 60; x <= cx + cw + 60; x += 6) { const y = cy + (top ? fH(x / w * 6) : -60); x === cx - 60 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
      ctx.lineTo(cx + cw + 60, cy + ch + 60); ctx.lineTo(cx - 60, cy + ch + 60);
      for (let y = cy + ch + 60; y >= cy - 60; y -= 6) ctx.lineTo(cx + (left ? fV(y / h * 6) : -60), y);
      ctx.closePath(); ctx.fill();
      // the generated brand texture fills the panel (cover-fit, anchored to its base), tinted by the brand colour as a fallback
      const bg = bgs[i]; if (bg) { ctx.save(); ctx.clip(); const sc = Math.max((cw + 120) / bg.width, (ch + 120) / bg.height), bw = bg.width * sc, bh = bg.height * sc; ctx.drawImage(bg, cx - 60 + (cw + 120 - bw) / 2, cy - 60 + (ch + 120 - bh), bw, bh); ctx.restore(); }
      // a soft shadow along the painted edge gives it body
      if (left) { ctx.save(); ctx.clip(); const sh = ctx.createLinearGradient(cx - 60, 0, cx + 90, 0); sh.addColorStop(0, 'rgba(0,0,0,.22)'); sh.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = sh; ctx.fillRect(cx - 80, cy - 60, 200, ch + 120); ctx.restore(); }
      if (top) { ctx.save(); ctx.clip(); const sh = ctx.createLinearGradient(0, cy - 60, 0, cy + 90); sh.addColorStop(0, 'rgba(0,0,0,.22)'); sh.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = sh; ctx.fillRect(cx - 60, cy - 80, cw + 120, 200); ctx.restore(); }
      const img = imgs[i]; if (img) {
        const ph = ch * (mobile ? .44 : .4), pw0 = ph * img.width / img.height, pw = Math.min(pw0, cw * .8), phh = pw / img.width * img.height;
        ctx.shadowColor = 'rgba(0,0,0,.35)'; ctx.shadowBlur = 34; ctx.shadowOffsetY = 20;
        ctx.drawImage(img, cx + (cw - pw) / 2, cy + ch * (mobile ? .92 : .86) - phh, pw, phh); ctx.shadowColor = 'transparent';
      }
      let size = Math.min(cw * (mobile ? .17 : .16), ch * .11);
      const lines = p.word.split(' '), x = cx + cw * (left ? .16 : .08), maxW = cw * (left ? .76 : .84);
      ctx.fillStyle = p.ink; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      const fit = () => { ctx.font = `800 ${size}px 'Bricolage Grotesque', Arial, sans-serif`; return Math.max(...lines.map(l => ctx.measureText(l.toUpperCase()).width)); };
      while (fit() > maxW && size > 12) size -= 1; // the name always fits its cell
      const y0 = cy + ch * (mobile ? .26 : .2);
      lines.forEach((ln, k) => ctx.fillText(ln.toUpperCase(), x, y0 + k * size * .96));

    });
    return ctx;
  };
  const deep = new URLSearchParams(location.search).get('at'); // debug deep link only: every visit otherwise starts with the wipe
  if (!motion || deep) { if (stage) { stage.classList.add('is-deep'); finishStage(); } }
  const atEl = deep && document.getElementById(deep); if (atEl) { root.style.scrollBehavior = 'auto'; atEl.scrollIntoView(); }
  else if (motion) {
    if (location.hash) history.replaceState(null, '', location.pathname + location.search); // a leftover #section must not pull the page down under the wipe
    const toTop = () => scrollTo({ top: 0, behavior: 'instant' });
    toTop(); addEventListener('load', toTop); addEventListener('pageshow', toTop);
    document.body.style.overflow = 'hidden';
    const R = () => Math.max(56, Math.min(innerWidth, innerHeight) * .1);
    let ctx = null, last = null, down = false, checking = null, done = false;
    const pos = e => ({ x: e.clientX, y: e.clientY });
    const move = e => {
      if (done || !ctx) return; const p = pos(e); G.set(sprite, { x: p.x, y: p.y, opacity: 1 });
      const touch = e.pointerType !== 'mouse'; if (touch && !down) { last = p; return; }
      if (last) strokeTo(ctx, last, p, R()); last = p;
      if (!checking) checking = setTimeout(() => { checking = null; if (!done && coverage(layer) < .6) { done = true; G.to(sprite, { opacity: 0, duration: .3 }); autoWipe(layer, ctx, R() * 1.6, .55, () => { finishStage(); arrived = true; }); } }, 160); // the page was already there under the wipe: no second entrance
    };
    stage.addEventListener('pointerdown', e => { down = true; last = pos(e); });
    addEventListener('pointerup', () => { down = false; });
    stage.addEventListener('pointermove', move);
    stage.addEventListener('pointerleave', () => { last = null; G.to(sprite, { opacity: 0, duration: .25 }); });
    $('#skip').addEventListener('click', () => { done = true; finishStage(); arrived = true; });
    (document.fonts ? Promise.all([document.fonts.load("800 100px 'Bricolage Grotesque'"), document.fonts.load("italic 500 40px 'Newsreader'")]).catch(() => {}) : Promise.resolve()).then(() => paintComposite(layer)).then(c => { ctx = c; layer.style.background = 'transparent'; }); // once painted, the wipe shows the page beneath, not a colour
    addEventListener('resize', () => { if (!last && !done) paintComposite(layer).then(c => { ctx = c; }); });
  }

  /* ---------- 1b. arrival choreography: the claim letters and the packs land after the wipe ---------- */
  const arrive = () => {
    if (arrived || !motion) return; arrived = true;
    const tl = G.timeline({ defaults: { ease: 'expo.out' } });
    if (window.SplitText) {
      const split = new SplitText('.giant', { type: 'chars,words', charsClass: 'ch' });
      tl.from(split.chars, { yPercent: 110, rotation: () => G.utils.random(-8, 8), opacity: 0, duration: .9, stagger: { each: .025, from: 'start' } }, 0);
    } else tl.from('.giant', { y: 40, opacity: 0, duration: .9 }, 0);
    tl.from('.pack', { y: 90, opacity: 0, rotation: () => G.utils.random(-10, 10), duration: 1.1, ease: 'back.out(1.6)', stagger: .09 }, .35)
      .from(['.hero__sub', '.hero__when'], { y: 18, opacity: 0, duration: .7, stagger: .1 }, .55)
      .from('.hero .btn', { y: 24, opacity: 0, duration: .7 }, .9)
      .from('.top', { y: -20, opacity: 0, duration: .7 }, .2);
  };
  if (motion && !stage) requestAnimationFrame(arrive);
  if (motion) {
    // hero shelf: packs part for the pointer (magnetic), the hexagon menu leans toward it
    const hex = $('#menu-btn');
    addEventListener('pointermove', e => {
      const r = hex.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2), d = Math.hypot(dx, dy);
      G.to(hex, { x: d < 160 ? dx * .22 : 0, y: d < 160 ? dy * .22 : 0, duration: .5, ease: 'power3.out' });
    }, { passive: true });
    $$('.pack').forEach(p => {
      p.addEventListener('pointermove', e => { const r = p.getBoundingClientRect(); G.to($('.pack__img', p), { rotationY: ((e.clientX - r.left) / r.width - .5) * 26, rotationX: -((e.clientY - r.top) / r.height - .5) * 18, transformPerspective: 700, y: -14, duration: .5, ease: 'power2.out' }); });
      p.addEventListener('pointerleave', () => G.to($('.pack__img', p), { rotationY: 0, rotationX: 0, y: 0, duration: .9, ease: 'elastic.out(1,.5)' }));
    });
    // marquees run faster with the scroll and settle back
    $$('.marquee__track').forEach(tr => { tr.style.animation = 'none'; const w = tr.scrollWidth / 2; const loop = G.to(tr, { x: -w, duration: 22, ease: 'none', repeat: -1 });
      ScrollTrigger.create({ onUpdate: st => { G.to(loop, { timeScale: 1 + Math.min(6, Math.abs(st.getVelocity()) / 250), duration: .2, overwrite: true, onComplete: () => G.to(loop, { timeScale: 1, duration: 1.2 }) }); } }); });
    // statement: words rise line by line; moments bob in
    if (window.SplitText) { const st = new SplitText('#st-h', { type: 'lines,words', linesClass: 'ln' }); G.from(st.words, { yPercent: 100, opacity: 0, duration: .9, ease: 'expo.out', stagger: .03, scrollTrigger: { trigger: '#st-h', start: 'top 85%', once: true } }); }
    G.from('.moments li', { y: 40, opacity: 0, scale: .92, duration: .9, ease: 'back.out(1.8)', stagger: .07, scrollTrigger: { trigger: '.moments', start: 'top 85%', once: true } });
    $$('.moments li').forEach((li, i) => G.to(li, { y: -6, duration: 2.2 + i * .25, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1 + i * .15 }));
    // chapters: text stacks in, chips pop, packs arrive with a turn
    $$('.brand').forEach(b => {
      const trig = { trigger: b, start: 'top 60%', once: true };
      G.from($$('.brand__text > *', b), { y: 30, opacity: 0, duration: .8, ease: 'expo.out', stagger: .08, scrollTrigger: trig });
      G.from($$('.chips li', b), { scale: .6, opacity: 0, duration: .5, ease: 'back.out(2.5)', stagger: .05, delay: .3, scrollTrigger: trig });
      G.from($('.brand__main', b), { scale: .7, rotation: -14, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: b, start: 'top 65%', once: true } });
    });
    // product: steps and spec rows draw themselves
    G.from('.steps li', { x: -30, opacity: 0, duration: .7, ease: 'expo.out', stagger: .1, scrollTrigger: { trigger: '.steps', start: 'top 85%', once: true } });
    G.from('.spec div', { opacity: 0, y: 12, duration: .5, stagger: .05, scrollTrigger: { trigger: '.spec', start: 'top 85%', once: true } });
    // the smile: the photo drifts against the scroll, the words settle in
    G.fromTo('.smile__img', { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.smile', start: 'top bottom', end: 'bottom top', scrub: .8 } });
    G.from('.smile__text > *', { y: 30, opacity: 0, duration: .9, ease: 'expo.out', stagger: .12, scrollTrigger: { trigger: '.smile', start: 'top 70%', once: true } });
    G.from('.product__fig img', { y: 60, rotation: 6, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.product__fig', start: 'top 80%', once: true } });
    G.from('.manifesto > *', { y: 30, opacity: 0, duration: .9, ease: 'expo.out', stagger: .12, scrollTrigger: { trigger: '.manifesto', start: 'top 80%', once: true } });
    G.from('.framecard--half', { y: 40, opacity: 0, duration: .9, ease: 'expo.out', stagger: .15, scrollTrigger: { trigger: '.b2b', start: 'top 80%', once: true } });
    G.from('.contact > *', { y: 30, opacity: 0, duration: .9, ease: 'expo.out', stagger: .15, scrollTrigger: { trigger: '.contact', start: 'top 80%', once: true } });
    // section headings draw in as lines
    if (window.SplitText) $$('.caps--l, .caps--m').forEach(hd => { const sp = new SplitText(hd, { type: 'lines' }); G.from(sp.lines, { yPercent: 80, opacity: 0, duration: .8, ease: 'expo.out', stagger: .1, scrollTrigger: { trigger: hd, start: 'top 88%', once: true } }); });
  }

  /* ---------- frost: a cold film over each chapter, painted procedurally and wiped clear ---------- */
  const rnd = (a, b) => a + Math.random() * (b - a);
  const paintStains = (cv) => {
    const w = cv.clientWidth, h = cv.clientHeight; cv.width = w * DPR; cv.height = h * DPR;
    const ctx = cv.getContext('2d'); ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.clearRect(0, 0, w, h);
    const S = Math.min(w, h);
    // the film: thicker toward the edges, thinner in the middle
    const film = ctx.createRadialGradient(w / 2, h / 2, S * .05, w / 2, h / 2, Math.hypot(w, h) * .55);
    film.addColorStop(0, 'rgba(232,244,255,.58)'); film.addColorStop(.7, 'rgba(224,239,255,.74)'); film.addColorStop(1, 'rgba(216,234,255,.9)');
    ctx.fillStyle = film; ctx.fillRect(0, 0, w, h);
    // grain: the surface is rough, not glass
    for (let i = 0; i < S * 12; i++) { ctx.fillStyle = `rgba(255,255,255,${rnd(.05, .35)})`; const r = rnd(.4, 1.8); ctx.fillRect(rnd(0, w), rnd(0, h), r, r); }
    // soft patches of thicker frost
    for (let i = 0; i < 9; i++) { const x = rnd(0, w), y = rnd(0, h), r = rnd(S * .08, S * .28); const g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2); }
    // dendrites: feathered ice crystals growing in from the edges and from a few seeds
    ctx.lineCap = 'round';
    const branch = (x, y, ang, len, wdt, depth) => {
      if (depth <= 0 || len < 4) return;
      const nx = x + Math.cos(ang) * len, ny = y + Math.sin(ang) * len;
      ctx.strokeStyle = `rgba(255,255,255,${rnd(.5, .95)})`; ctx.lineWidth = wdt; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nx, ny); ctx.stroke();
      const n = 2 + Math.floor(rnd(0, 3));
      for (let k = 1; k <= n; k++) { const t = k / (n + 1), bx = x + (nx - x) * t, by = y + (ny - y) * t, side = k % 2 ? 1 : -1; branch(bx, by, ang + side * rnd(.7, 1.15), len * rnd(.35, .6), wdt * .6, depth - 1); }
      branch(nx, ny, ang + rnd(-.25, .25), len * rnd(.6, .85), wdt * .8, depth - 1);
    };
    const seeds = [];
    for (let i = 0; i < 10; i++) seeds.push({ x: rnd(0, w), y: -4, a: Math.PI / 2 + rnd(-.6, .6) });
    for (let i = 0; i < 10; i++) seeds.push({ x: rnd(0, w), y: h + 4, a: -Math.PI / 2 + rnd(-.6, .6) });
    for (let i = 0; i < 6; i++) seeds.push({ x: -4, y: rnd(0, h), a: rnd(-.6, .6) });
    for (let i = 0; i < 6; i++) seeds.push({ x: w + 4, y: rnd(0, h), a: Math.PI + rnd(-.6, .6) });
    for (let i = 0; i < 8; i++) { const x = rnd(w * .1, w * .9), y = rnd(h * .1, h * .9); for (let k = 0; k < 6; k++) seeds.push({ x, y, a: k / 6 * Math.PI * 2 + rnd(-.2, .2), s: .55 }); }
    seeds.forEach(sd => branch(sd.x, sd.y, sd.a, S * rnd(.1, .22) * (sd.s || 1), rnd(1.4, 2.6), 4));
    // a cold sheen
    const sheen = ctx.createLinearGradient(0, 0, w, h); sheen.addColorStop(0, 'rgba(255,255,255,.18)'); sheen.addColorStop(.5, 'rgba(200,225,255,0)'); sheen.addColorStop(1, 'rgba(255,255,255,.14)');
    ctx.fillStyle = sheen; ctx.fillRect(0, 0, w, h);
    return ctx;
  };

  /* ---------- 2. chapters: each brand is wiped in over the previous colour ---------- */
  $$('.brand').forEach(b => {
    const cv = $('.cover', b);
    if (!motion) { cv.remove(); b.style.background = b.dataset.bg; b.style.color = b.dataset.ink; return; }
    b.style.background = b.dataset.bg; b.style.color = b.dataset.ink;
    let painted = false, done = false;
    const paint = () => { if (done) return; paintStains(cv); painted = true; };
    paint(); addEventListener('resize', () => { if (!done) paint(); });
    // the stains come off with the scroll: the wipe follows the chapter through the viewport, and the pointer can help
    let prog = 0, lastPt = null;
    const pts = () => wipePath(cv.clientWidth, cv.clientHeight, 6);
    const drawTo = (p1) => {
      const P = pts(), n = P.length - 1; const ctx = cv.getContext('2d'); const r = Math.max(120, Math.min(cv.clientWidth, cv.clientHeight) * .2);
      const at = t => { const q = Math.min(n, Math.max(0, t * n)), i = Math.min(n - 1, Math.floor(q)), f = q - i; return { x: P[i].x + (P[i + 1].x - P[i].x) * f, y: P[i].y + (P[i + 1].y - P[i].y) * f }; };
      const steps = Math.max(1, Math.ceil((p1 - prog) * 60)); let from = lastPt || at(prog);
      for (let k = 1; k <= steps; k++) { const to = at(prog + (p1 - prog) * k / steps); strokeTo(ctx, from, to, r); from = to; }
      lastPt = from; prog = p1;
      if (prog >= .96 && !done) { done = true; G.to(cv, { opacity: 0, duration: .35, ease: 'power1.out', onComplete: () => cv.classList.add('is-done') }); }
    };
    ScrollTrigger.create({ trigger: b, start: 'top 80%', end: 'bottom 65%', scrub: 1.2, onUpdate: st => { if (!painted) paint(); if (st.progress > prog) drawTo(st.progress); } });
    // a hand on the chapter wipes too
    let lp = null; b.addEventListener('pointermove', e => { if (done) return; const rc = cv.getBoundingClientRect(), p = { x: e.clientX - rc.left, y: e.clientY - rc.top }; if (lp && e.pointerType === 'mouse') strokeTo(cv.getContext('2d'), lp, p, 90); lp = p; }, { passive: true });
    b.addEventListener('pointerleave', () => { lp = null; });
  });
  // the page itself is the brand's field: whichever chapter sits under the viewport's middle paints the body (idempotent, no trigger races)
  const paintBody = (bg, fg) => { document.body.style.setProperty('--bg', bg); document.body.style.setProperty('--fg', fg); root.classList.toggle('is-light', fg === '#ffffff'); };
  if (motion) {
    const brands = $$('.brand'); let tick = false;
    const sync = () => { tick = false; const mid = innerHeight * .55; const b = brands.find(el => { const r = el.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; }); paintBody(b ? b.dataset.bg : '#ffffff', b ? b.dataset.ink : '#111111'); };
    addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(sync); } }, { passive: true });
    addEventListener('resize', sync); sync();
  }

  /* ---------- 3. packs breathe; the main pack tilts with the pointer ---------- */
  if (motion) {
    $$('.brand').forEach(b => {
      const main = $('.brand__main', b), sec = $('.brand__second', b);
      G.fromTo(main, { y: 50 }, { y: -50, ease: 'none', scrollTrigger: { trigger: b, start: 'top bottom', end: 'bottom top', scrub: .8 } });
      if (sec) G.fromTo(sec, { y: 30, rotation: 12 }, { y: -30, rotation: 4, ease: 'none', scrollTrigger: { trigger: b, start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
      b.addEventListener('pointermove', e => { const rct = b.getBoundingClientRect(); const dx = (e.clientX - rct.left) / rct.width - .5, dy = (e.clientY - rct.top) / rct.height - .5; G.to(main, { rotationY: dx * 14, rotationX: -dy * 10, transformPerspective: 900, duration: .6, ease: 'power2.out' }); });
      b.addEventListener('pointerleave', () => G.to(main, { rotationY: 0, rotationX: 0, duration: .8, ease: 'expo.out' }));
    });
  }

  /* ---------- hexagon menu ---------- */
  const btn = $('#menu-btn'), menu = $('#menu'); let open = false;
  const setMenu = v => {
    open = v; btn.classList.toggle('is-open', v); btn.setAttribute('aria-expanded', String(v));
    if (v) { menu.hidden = false; requestAnimationFrame(() => G ? G.to(menu, { clipPath: 'circle(150% at calc(100% - 64px) 64px)', duration: .8, ease: 'expo.inOut' }) : (menu.style.clipPath = 'none')); document.body.style.overflow = 'hidden'; $('a', menu).focus(); }
    else { const done = () => { menu.hidden = true; document.body.style.overflow = ''; btn.focus(); }; G ? G.to(menu, { clipPath: 'circle(0 at calc(100% - 64px) 64px)', duration: .6, ease: 'expo.inOut', onComplete: done }) : done(); }
  };
  btn.addEventListener('click', () => setMenu(!open));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && open) setMenu(false); if (e.key === 'Tab' && open) { const f = $$('a', menu); if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); } } });

  /* ---------- contact: mailto once the recipient is configured ---------- */
  const form = $('#form');
  if (form) {
    const status = $('.form__status', form);
    $$('[data-role]').forEach(a => a.addEventListener('click', () => { const rr = form.querySelector(`input[name="role"][value="${a.dataset.role}"]`); if (rr) rr.checked = true; }));
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form), role = d.get('role') === 'investor' ? 'investor' : 'partner';
      const to = form.dataset[role === 'investor' ? 'emailInvestor' : 'emailPartner'];
      if (!form.checkValidity()) { status.textContent = 'Please fill in your name, email and message.'; status.classList.add('is-error'); form.reportValidity(); return; }
      status.classList.remove('is-error');
      const subject = encodeURIComponent(`[Fingers Fresh] ${role === 'investor' ? 'Investor' : 'Retail partner'}: ${d.get('company') || d.get('name')}`);
      const body = encodeURIComponent(`${d.get('message')}\n\n— ${d.get('name')}${d.get('company') ? ', ' + d.get('company') : ''}\n${d.get('email')}`);
      if (to) { location.href = `mailto:${to}?subject=${subject}&body=${body}`; status.textContent = 'Opening your email app…'; }
      else { status.textContent = 'The recipient address is not configured yet, the message was not sent.'; status.classList.add('is-error'); }
    });
  }
})();
