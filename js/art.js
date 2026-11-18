/* 《拾光之旅》原创 Canvas / SVG 美术。所有图形由本文件程序化绘制，不使用官方素材。 */
(function (global) {
  'use strict';

  const PALETTE = global.SHIGUANG_PALETTE || {};
  const ART_VERSION = 3;

  function hexToRgb(hex) {
    const h = hex.replace('#', '');
    const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function rgba(hex, a) {
    const c = hexToRgb(hex);
    return `rgba(${c.r},${c.g},${c.b},${a})`;
  }
  function mix(hexA, hexB, t) {
    const a = hexToRgb(hexA), b = hexToRgb(hexB);
    const c = k => Math.round(a[k] + (b[k] - a[k]) * t);
    return `rgb(${c('r')},${c('g')},${c('b')})`;
  }
  function hash2(x, y, seed) {
    let h = Math.imul(x + 1, 374761393) + Math.imul(y + 1, 668265263) + Math.imul(seed || 1, 2246822519);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function smooth(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }
  function roundRect(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  /* ---------------- 魔幻夜色山林 ---------------- */
  function forestSVG() {
    const conifer = (x, baseY, h, w, fill, op) => {
      let d = '';
      for (let i = 0; i < 3; i++) {
        const t = i / 3;
        const top = baseY - h + h * t * .62;
        const spread = w * (1 - t * .34);
        const bottom = top + h * .34;
        d += `M${x} ${top} L${x - spread / 2} ${bottom} L${x + spread / 2} ${bottom} Z `;
      }
      return `<path d="${d}" fill="${fill}" opacity="${op}"/>`;
    };
    const layer = (count, baseY, minH, maxH, fill, op, seed) => {
      let out = '';
      for (let i = 0; i < count; i++) {
        const t = i / Math.max(1, count - 1);
        const jitter = hash2(i, seed, 13);
        const x = -8 + t * 406 + (jitter - .5) * 14;
        const h = minH + hash2(i, seed, 29) * (maxH - minH);
        out += conifer(x, baseY + (jitter - .5) * 8, h, h * .46, fill, op);
      }
      return out;
    };
    return `<svg viewBox="0 0 390 844" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="far-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#5f5996" stop-opacity=".34"/>
          <stop offset=".55" stop-color="#393460" stop-opacity=".42"/>
          <stop offset="1" stop-color="#16142d" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="mid-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#3c3d74" stop-opacity=".62"/>
          <stop offset=".6" stop-color="#20233f" stop-opacity=".9"/>
          <stop offset="1" stop-color="#111726" stop-opacity="1"/>
        </linearGradient>
        <linearGradient id="near-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#162132" stop-opacity=".88"/>
          <stop offset="1" stop-color="#070c13" stop-opacity="1"/>
        </linearGradient>
        <linearGradient id="mist-band" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#b7d8d2" stop-opacity="0"/>
          <stop offset=".5" stop-color="#a9cfd0" stop-opacity=".13"/>
          <stop offset="1" stop-color="#8faecc" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="moon-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#fff1c6" stop-opacity=".30"/>
          <stop offset=".34" stop-color="#efd9ad" stop-opacity=".13"/>
          <stop offset="1" stop-color="#c7b2e0" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="horizon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#ffd995" stop-opacity=".13"/>
          <stop offset=".5" stop-color="#9b88c9" stop-opacity=".05"/>
          <stop offset="1" stop-color="#6f5fa8" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="cottage-ground" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#ffd995" stop-opacity=".11"/>
          <stop offset=".55" stop-color="#7fc7bc" stop-opacity=".04"/>
          <stop offset="1" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="326" cy="102" r="88" fill="url(#moon-halo)"/>
      <g opacity=".7">
        <circle cx="326" cy="102" r="25" fill="#f3e2ba" opacity=".16"/>
        <path d="M339 81a24 24 0 1 0 10 33 20 20 0 0 1-10-33Z" fill="#ffecc4" opacity=".34"/>
      </g>
      <ellipse cx="195" cy="676" rx="248" ry="108" fill="url(#horizon-glow)"/>
      <path d="M0 610 C38 578 66 596 104 566 C143 536 174 558 210 574 C250 592 282 554 322 574 C352 588 372 580 390 590 L390 844 L0 844 Z" fill="url(#far-hill)"/>
      <path d="M0 652 C42 628 70 644 104 618 C140 590 166 618 202 632 C242 648 270 614 306 626 C338 637 364 628 390 644 L390 844 L0 844 Z" fill="url(#mid-hill)" opacity=".9"/>
      <g opacity=".55">${layer(22, 700, 56, 108, '#34335f', .55, 4)}</g>
      <g opacity=".68">${layer(17, 748, 70, 136, '#1d233e', .7, 11)}</g>
      <path d="M0 706 C58 692 116 710 174 700 C230 690 286 708 342 698 C360 695 376 698 390 694 L390 844 L0 844 Z" fill="url(#mist-band)" opacity=".9"/>
      <g opacity=".9">${layer(15, 800, 86, 160, '#101827', .92, 23)}</g>
      <path d="M0 772 C68 758 112 774 168 766 C226 758 268 776 330 766 C354 762 374 766 390 762 L390 844 L0 844 Z" fill="url(#near-hill)"/>
      <ellipse cx="195" cy="792" rx="190" ry="46" fill="url(#cottage-ground)"/>
      <g opacity=".26" fill="none" stroke="#bdd8d5" stroke-width="1">
        <path d="M0 684 C58 672 112 688 168 676 C226 664 274 682 334 672 C356 668 374 672 390 666"/>
        <path d="M0 714 C56 702 108 718 168 708 C224 698 278 714 336 702"/>
        <path d="M0 742 C62 732 120 746 180 736 C238 726 292 742 350 732"/>
      </g>
    </svg>`;
  }

  /* ---------------- 玻璃小屋 C：双山墙、彩玻璃、暖窗、屋顶星饰 ---------------- */
  function cottageSVG(prefix) {
    const p = 'cottage-' + (prefix || 'a');
    return `<svg viewBox="0 0 120 102" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="${p}-roof" x1="0" y1="0" x2=".7" y2="1">
          <stop offset="0" stop-color="#c3b0dc"/><stop offset=".34" stop-color="#8c77b2"/><stop offset=".72" stop-color="#5d4a85"/><stop offset="1" stop-color="#372c58"/>
        </linearGradient>
        <linearGradient id="${p}-roof2" x1="0" y1="0" x2=".8" y2="1">
          <stop offset="0" stop-color="#ab98cc"/><stop offset=".55" stop-color="#75608f"/><stop offset="1" stop-color="#3a2d5c"/>
        </linearGradient>
        <linearGradient id="${p}-wall" x1="0" y1="0" x2=".35" y2="1">
          <stop offset="0" stop-color="#b9b5c8" stop-opacity=".46"/><stop offset=".42" stop-color="#777c98" stop-opacity=".36"/><stop offset="1" stop-color="#3f4268" stop-opacity=".68"/>
        </linearGradient>
        <linearGradient id="${p}-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f4c4d6" stop-opacity=".55"/><stop offset=".42" stop-color="#8fd4c8" stop-opacity=".42"/><stop offset=".72" stop-color="#f5d38b" stop-opacity=".38"/><stop offset="1" stop-color="#a48bd8" stop-opacity=".48"/>
        </linearGradient>
        <linearGradient id="${p}-warm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff9d8"/><stop offset=".44" stop-color="#ffdc92"/><stop offset="1" stop-color="#ef9f55"/>
        </linearGradient>
        <linearGradient id="${p}-door" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffcf88"/><stop offset=".7" stop-color="#c97a77"/><stop offset="1" stop-color="#70405f"/>
        </linearGradient>
        <radialGradient id="${p}-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#ffe3a0" stop-opacity=".46"/><stop offset=".46" stop-color="#ffc978" stop-opacity=".18"/><stop offset="1" stop-color="#f5b970" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="${p}-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#c7b1ef" stop-opacity=".18"/><stop offset=".55" stop-color="#8fd4c8" stop-opacity=".06"/><stop offset="1" stop-color="#8fd4c8" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="${p}-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#8fc4a8" stop-opacity=".22"/><stop offset="1" stop-color="#6b5a8f" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="52" rx="55" ry="45" fill="url(#${p}-halo)"/>
      <ellipse cx="60" cy="95" rx="47" ry="7" fill="#05040b" opacity=".55"/>
      <ellipse cx="46" cy="75" rx="39" ry="26" fill="url(#${p}-glow)"/>
      <!-- 左侧烟囱 -->
      <rect x="24" y="13" width="9" height="29" rx="1.8" fill="url(#${p}-roof2)" stroke="#d7c6e8" stroke-opacity=".34"/>
      <rect x="21.5" y="10" width="14" height="4.2" rx="1.6" fill="#9b86bb" stroke="#e0d1ee" stroke-opacity=".34"/>
      <path d="M29 8 C27 4 32 3 30 0" fill="none" stroke="#d8c7ec" stroke-opacity=".32" stroke-width="1.1" stroke-linecap="round"/>
      <!-- 墙体 -->
      <path d="M16 48 Q16 43 21.5 43 H80 Q87 43 87 49 V85 Q87 90 81 90 H21.5 Q16 90 16 85 Z" fill="url(#${p}-wall)" stroke="#e1d2ec" stroke-opacity=".46" stroke-width="1.2"/>
      <path d="M77 47 H109 Q115 47 115 53 V85 Q115 90 108 90 H81 Z" fill="url(#${p}-wall)" stroke="#e1d2ec" stroke-opacity=".38" stroke-width="1.1"/>
      <!-- 彩玻璃墙 -->
      <g opacity=".92">
        <path d="M20 53 L34 46 L46 50 L45 86 L20 86 Z" fill="#7fc7bc" opacity=".34"/>
        <path d="M46 50 L63 42 L78 47 L78 86 L45 86 Z" fill="#df9ebc" opacity=".28"/>
        <path d="M81 52 L95 46 L106 50 L108 86 L81 86 Z" fill="#e7ad68" opacity=".26"/>
        <path d="M18 55 L45 49 L78 55 L108 51" stroke="#fff4df" stroke-opacity=".22" fill="none" stroke-width=".8"/>
        <path d="M18 70 L45 65 L78 72 L108 67" stroke="#fff4df" stroke-opacity=".16" fill="none" stroke-width=".8"/>
        <path d="M33 47 L31 86 M62 43 L63 86 M95 47 L97 86" stroke="#f6e6ef" stroke-opacity=".2" fill="none" stroke-width=".7"/>
        <path d="M20 58 L45 53 L78 58 L108 54" stroke="#a485c8" stroke-opacity=".28" fill="none" stroke-width="1.4"/>
      </g>
      <!-- 屋顶：左高右低双山墙 -->
      <path d="M7 50 Q8 43 17 36 L42 18 Q46.5 14.6 51 18.5 L76 38 Q84 44 83 52 L80 55 L16 55 Z" fill="url(#${p}-roof)" stroke="#efe0f3" stroke-opacity=".66" stroke-width="1.4"/>
      <path d="M69 49 L87 28 Q90.5 24 94.5 27.8 L113 47 Q117.5 51 111 55 L84 55 L76 55 Z" fill="url(#${p}-roof2)" stroke="#efe0f3" stroke-opacity=".56" stroke-width="1.3"/>
      <path d="M11 50 Q43 40 78 50" stroke="#fff5e0" stroke-opacity=".26" fill="none" stroke-width="1"/>
      <path d="M76 34 L92 44" stroke="#e7d7ef" stroke-opacity=".32" stroke-width=".8"/>
      <g fill="none" stroke="#ead9f2" stroke-opacity=".3" stroke-width=".7">
        <path d="M19 44 L43 26 L65 41"/><path d="M78 47 L93 33 L105 43"/>
        <path d="M23 50 L52 50"/><path d="M90 50 L108 50"/>
      </g>
      <!-- 屋脊星饰 -->
      <g transform="translate(44 20)">
        <path d="M0 -5 L1.3 -1.3 L5 0 L1.3 1.3 L0 5 L-1.3 1.3 L-5 0 L-1.3 -1.3 Z" fill="#ffe8a8" opacity=".95"/>
        <circle cx="0" cy="0" r="1.2" fill="#fff9e2"/>
      </g>
      <!-- 山墙小圆窗 -->
      <path d="M37 34 Q32 39 35 44 Q41 47 46 43 Q47 36 40 33 Z" fill="#f3cf85" opacity=".62" stroke="#f8eccb" stroke-opacity=".6" stroke-width=".8"/>
      <!-- 暖窗 -->
      <g>
        <rect x="25" y="59" width="15" height="17" rx="3.2" fill="url(#${p}-warm)" stroke="#46334f" stroke-width="2"/>
        <path d="M32.5 60 V74 M26 67.5 H39.5" stroke="#e8b46e" stroke-opacity=".85" stroke-width="1"/>
        <rect x="87" y="59" width="15" height="17" rx="3.2" fill="url(#${p}-warm)" stroke="#46334f" stroke-width="2"/>
        <path d="M94.5 60 V74 M88 67.5 H101.5" stroke="#e8b46e" stroke-opacity=".85" stroke-width="1"/>
        <rect x="91" y="44" width="6" height="9" rx="2" fill="url(#${p}-warm)" opacity=".86" stroke="#5b4264" stroke-width="1"/>
      </g>
      <!-- 门与暖光 -->
      <path d="M50 87 V68 Q50 60.5 58 60.5 Q66 60.5 66 68 V87 Z" fill="url(#${p}-door)" stroke="#e7c07f" stroke-opacity=".62" stroke-width="1.2"/>
      <path d="M53 86 V69 Q53 64 58 64 Q63 64 63 69 V86 Z" fill="#b56a76" opacity=".82"/>
      <path d="M53 68 Q58 60 63 68" fill="url(#${p}-warm)" opacity=".92"/>
      <circle cx="61.6" cy="79" r="1.1" fill="#fff0bc"/>
      <path d="M49 87 H67" stroke="#f0d49a" stroke-opacity=".4" stroke-width="1"/>
      <!-- 门前花与地灯 -->
      <g>
        <path d="M16 87 H87 M78 87 H115" stroke="#e5d3ef" stroke-opacity=".36" stroke-width="1.2"/>
        <path d="M17 90 H115" stroke="#0b0817" stroke-opacity=".55" stroke-width="1.2"/>
        <path d="M20 90 Q25 84 31 90 Z" fill="url(#${p}-ground)"/>
        <path d="M89 90 Q95 83 101 90 Z" fill="url(#${p}-ground)"/>
        <circle cx="30" cy="88" r="1.5" fill="#ffd98b" opacity=".8"/>
        <circle cx="100" cy="88" r="1.3" fill="#8fd4c8" opacity=".7"/>
        <circle cx="34" cy="86" r=".8" fill="#ffc7dc" opacity=".7"/>
        <circle cx="95" cy="86" r=".7" fill="#c6b1ef" opacity=".7"/>
      </g>
    </svg>`;
  }

  /* ---------------- 棋盘星、空玻璃格与完整原画 ---------------- */
  const spriteCache = new Map();
  const paneCache = new Map();
  const artCache = new Map();
  function clearSpriteCache() { spriteCache.clear(); paneCache.clear(); artCache.clear(); }

  function makeStarSprite(color, cell, dpr, variant) {
    const key = `${ART_VERSION}|${color}|${cell.toFixed(2)}|${dpr}|${variant.toFixed(2)}`;
    if (spriteCache.has(key)) return spriteCache.get(key);
    const p = PALETTE[color] || { fill: '#d9c9a5', glow: '#fff0c8' };
    const S = Math.max(22, cell * 1.72);
    const cv = document.createElement('canvas');
    cv.width = Math.ceil(S * dpr);
    cv.height = Math.ceil(S * dpr);
    const c = cv.getContext('2d');
    c.scale(dpr, dpr);
    const cx = S / 2, cy = S / 2;
    const fill = p.fill, glow = p.glow;
    c.globalCompositeOperation = 'lighter';
    // 大而柔的色晕
    let g = c.createRadialGradient(cx, cy, 0, cx, cy, S * .34);
    g.addColorStop(0, rgba(glow, .5));
    g.addColorStop(.16, rgba(fill, .4));
    g.addColorStop(.48, rgba(glow, .12));
    g.addColorStop(1, rgba(glow, 0));
    c.fillStyle = g;
    c.beginPath(); c.arc(cx, cy, S * .34, 0, Math.PI * 2); c.fill();
    // 四芒：长短随格子微差，整片星野不呆板
    const hLen = S * (.21 + variant * .035);
    const vLen = S * (.25 + (1 - variant) * .035);
    const rays = [
      [1, 0, hLen, S * .045], [-1, 0, hLen, S * .045],
      [0, 1, vLen, S * .048], [0, -1, vLen, S * .048],
    ];
    c.lineCap = 'round';
    for (const [dx, dy, len, w] of rays) {
      const grd = c.createLinearGradient(cx, cy, cx + dx * len, cy + dy * len);
      grd.addColorStop(0, rgba('#fff7e2', .48));
      grd.addColorStop(.26, rgba(glow, .5));
      grd.addColorStop(.7, rgba(glow, .14));
      grd.addColorStop(1, rgba(glow, 0));
      c.strokeStyle = grd; c.lineWidth = w;
      c.beginPath(); c.moveTo(cx - dx * len * .28, cy - dy * len * .28); c.lineTo(cx + dx * len, cy + dy * len); c.stroke();
    }
    // 对角短芒
    for (const [dx, dy] of [[.7, .7], [-.7, .7], [.7, -.7], [-.7, -.7]]) {
      const len = S * (.14 + variant * .03);
      const grd = c.createLinearGradient(cx, cy, cx + dx * len, cy + dy * len);
      grd.addColorStop(0, rgba(glow, .3)); grd.addColorStop(1, rgba(glow, 0));
      c.strokeStyle = grd; c.lineWidth = S * .018;
      c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx + dx * len, cy + dy * len); c.stroke();
    }
    // 色心：保留本色，不漂成白球
    g = c.createRadialGradient(cx - S * .02, cy - S * .03, 0, cx, cy, S * .13);
    g.addColorStop(0, rgba('#fff9e8', .95));
    g.addColorStop(.28, rgba(glow, .9));
    g.addColorStop(.7, rgba(fill, .86));
    g.addColorStop(1, rgba(fill, 0));
    c.fillStyle = g;
    c.beginPath(); c.arc(cx, cy, S * .13, 0, Math.PI * 2); c.fill();
    // 细小十字闪
    c.strokeStyle = rgba('#fff7df', .55); c.lineWidth = .8;
    c.beginPath(); c.moveTo(cx - S * .05, cy); c.lineTo(cx + S * .05, cy);
    c.moveTo(cx, cy - S * .05); c.lineTo(cx, cy + S * .05); c.stroke();
    c.globalCompositeOperation = 'source-over';
    const out = { canvas: cv, size: S };
    spriteCache.set(key, out);
    return out;
  }

  // 完整原画的一格：像彩色玻璃小切面，格心颜色仍是关卡数据里的本格颜色。
  function paintFacet(ctx, x, y, cell, color, alpha) {
    const p = PALETTE[color] || { fill: '#555', glow: '#aaa' };
    ctx.save();
    ctx.globalAlpha = alpha == null ? 1 : alpha;
    const pad = Math.max(.6, cell * .035);
    // 底层本色
    ctx.fillStyle = p.fill;
    ctx.fillRect(x, y, cell + .25, cell + .25);
    // 切面明暗：左上受光，右下入影
    let g = ctx.createLinearGradient(x, y, x + cell, y + cell);
    g.addColorStop(0, 'rgba(255,249,230,.28)');
    g.addColorStop(.34, 'rgba(255,247,224,.045)');
    g.addColorStop(1, 'rgba(5,4,13,.28)');
    ctx.fillStyle = g;
    ctx.fillRect(x, y, cell + .25, cell + .25);
    // 玻璃高光斜纹
    ctx.fillStyle = 'rgba(255,252,240,.1)';
    ctx.beginPath();
    ctx.moveTo(x, y + cell * .62);
    ctx.lineTo(x + cell * .54, y);
    ctx.lineTo(x + cell * .78, y);
    ctx.lineTo(x, y + cell * .84);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(5,4,14,.10)';
    ctx.beginPath();
    ctx.moveTo(x + cell, y + cell * .34);
    ctx.lineTo(x + cell * .72, y + cell);
    ctx.lineTo(x + cell, y + cell);
    ctx.closePath(); ctx.fill();
    // 色心柔光
    g = ctx.createRadialGradient(x + cell * .36, y + cell * .3, 0, x + cell * .52, y + cell * .52, cell * .82);
    g.addColorStop(0, rgba(p.glow, .32));
    g.addColorStop(.48, rgba(p.glow, .08));
    g.addColorStop(1, rgba(p.glow, 0));
    ctx.fillStyle = g;
    ctx.fillRect(x, y, cell + .25, cell + .25);
    // 确定性颗粒，保留像素画手作感
    const h = hash2(x, y, 5), h2 = hash2(x, y, 9), h3 = hash2(x, y, 31);
    ctx.fillStyle = 'rgba(255,248,230,.12)';
    ctx.fillRect(x + cell * (.12 + h * .62), y + cell * (.16 + h2 * .58), Math.max(1, cell * .07), Math.max(1, cell * .05));
    ctx.fillStyle = 'rgba(6,4,14,.1)';
    ctx.fillRect(x + cell * (.18 + h2 * .6), y + cell * (.2 + h3 * .56), Math.max(1, cell * .06), Math.max(1, cell * .05));
    // 玻璃铅条
    ctx.fillStyle = 'rgba(7,5,16,.26)';
    ctx.fillRect(x + cell - pad, y, pad, cell);
    ctx.fillRect(x, y + cell - pad, cell, pad);
    ctx.fillStyle = 'rgba(255,246,225,.16)';
    ctx.fillRect(x, y, cell, Math.max(.7, pad * .72));
    ctx.fillRect(x, y, Math.max(.7, pad * .72), cell);
    ctx.restore();
  }

  function fullArtCanvas(level, size, dpr) {
    const key = `${ART_VERSION}|${level.id || 'level'}|${Math.round(size)}|${dpr}`;
    if (artCache.has(key)) return artCache.get(key);
    const cv = document.createElement('canvas');
    cv.width = Math.max(1, Math.round(size * dpr));
    cv.height = Math.max(1, Math.round(size * dpr));
    const c = cv.getContext('2d');
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    const N = level.cells.length, cell = size / N;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      paintFacet(c, x * cell, y * cell, cell, level.cells[y][x], 1);
    }
    // 画面整体空气感
    const g = c.createLinearGradient(0, 0, size, size);
    g.addColorStop(0, 'rgba(255,231,177,.07)');
    g.addColorStop(.42, 'rgba(255,247,225,.018)');
    g.addColorStop(1, 'rgba(118,95,180,.07)');
    c.fillStyle = g; c.fillRect(0, 0, size, size);
    // 星屑与柔光：让完整原画像一块被点亮的彩窗
    c.save();
    c.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 18; i++) {
      const px = size * hash2(i, 4, 41);
      const py = size * hash2(i, 9, 43);
      const a = .08 + hash2(i, 2, 47) * .18;
      const r = .7 + hash2(i, 6, 53) * 1.3;
      c.fillStyle = `rgba(255,244,210,${a})`;
      c.beginPath();
      for (let k = 0; k < 4; k++) {
        const ang = k * Math.PI / 2;
        c.lineTo(px + Math.cos(ang) * r * 2.7, py + Math.sin(ang) * r * 2.7);
        c.lineTo(px + Math.cos(ang + Math.PI / 4) * r * .55, py + Math.sin(ang + Math.PI / 4) * r * .55);
      }
      c.closePath(); c.fill();
    }
    c.restore();
    // 低分辨率回采的柔光，不靠降画质
    try {
      const bcv = document.createElement('canvas');
      bcv.width = Math.max(8, Math.round(cv.width / 4));
      bcv.height = Math.max(8, Math.round(cv.height / 4));
      const bc = bcv.getContext('2d');
      bc.imageSmoothingEnabled = true;
      bc.drawImage(cv, 0, 0, bcv.width, bcv.height);
      c.save();
      c.setTransform(1, 0, 0, 1, 0, 0);
      c.globalCompositeOperation = 'lighter';
      c.globalAlpha = .14;
      c.imageSmoothingEnabled = true;
      c.drawImage(bcv, 0, 0, cv.width, cv.height);
      c.restore();
    } catch (e) { /* 老浏览器忽略柔光，不改主画面 */ }
    artCache.set(key, cv);
    return cv;
  }

  // 每个格子的玻璃底缓存成 sprite：摘星过程中最多 256 格，不在每帧反复建渐变。
  function paneSprite(present, cell, dpr) {
    const key = `${ART_VERSION}|pane|${present ? 1 : 0}|${cell.toFixed(2)}|${dpr}`;
    if (paneCache.has(key)) return paneCache.get(key);
    const S = Math.max(6, cell * dpr);
    const cv = document.createElement('canvas');
    cv.width = Math.ceil(S);
    cv.height = Math.ceil(S);
    const c = cv.getContext('2d');
    c.scale(dpr, dpr);
    if (present) {
      c.fillStyle = '#14112a';
      c.fillRect(0, 0, cell, cell);
      // 蒙住画的深色玻璃，只留极弱冷光
      c.fillStyle = 'rgba(117,95,170,.055)';
      c.fillRect(0, 0, cell, cell);
      c.fillStyle = 'rgba(255,246,225,.04)';
      c.fillRect(0, 0, cell, Math.max(.7, cell * .08));
      c.fillStyle = 'rgba(5,4,13,.2)';
      c.fillRect(0, cell - Math.max(.7, cell * .08), cell, Math.max(.7, cell * .08));
    } else {
      // 已摘走的格子：空的凹面玻璃，不显示原画颜色
      c.fillStyle = '#0c0a1b';
      c.fillRect(0, 0, cell, cell);
      let g = c.createRadialGradient(cell * .5, cell * .44, 0, cell * .5, cell * .5, cell * .72);
      g.addColorStop(0, 'rgba(91,73,132,.15)');
      g.addColorStop(.62, 'rgba(37,30,68,.1)');
      g.addColorStop(1, 'rgba(5,4,13,.28)');
      c.fillStyle = g;
      c.fillRect(0, 0, cell, cell);
      c.strokeStyle = 'rgba(190,174,218,.1)';
      c.lineWidth = .8;
      c.beginPath(); c.arc(cell / 2, cell / 2, cell * .17, 0, Math.PI * 2); c.stroke();
      c.fillStyle = 'rgba(255,244,217,.06)';
      c.fillRect(cell * .42, cell * .42, Math.max(.8, cell * .09), Math.max(.8, cell * .09));
    }
    paneCache.set(key, cv);
    return cv;
  }

  function drawBoard(canvas, game, opts) {
    opts = opts || {};
    const size = canvas.clientWidth || parseFloat(getComputedStyle(canvas).width) || 320;
    const dpr = Math.min(2, global.devicePixelRatio || 1);
    const px = Math.round(size * dpr);
    if (canvas.width !== px || canvas.height !== px) { canvas.width = px; canvas.height = px; }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);
    const N = game.N, cell = size / N;
    const t = opts.now || 0;

    // 深海夜色 + 极光底
    let bg = ctx.createLinearGradient(0, 0, size, size);
    bg.addColorStop(0, '#100d24');
    bg.addColorStop(.48, '#14112b');
    bg.addColorStop(1, '#0a0c1b');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, size, size);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    let neb = ctx.createRadialGradient(size * .18, size * .12, 0, size * .18, size * .12, size * .7);
    neb.addColorStop(0, 'rgba(139,104,195,.15)'); neb.addColorStop(.55, 'rgba(106,78,160,.05)'); neb.addColorStop(1, 'rgba(106,78,160,0)');
    ctx.fillStyle = neb; ctx.fillRect(0, 0, size, size);
    neb = ctx.createRadialGradient(size * .84, size * .86, 0, size * .84, size * .86, size * .62);
    neb.addColorStop(0, 'rgba(90,196,183,.11)'); neb.addColorStop(.55, 'rgba(62,124,146,.035)'); neb.addColorStop(1, 'rgba(62,124,146,0)');
    ctx.fillStyle = neb; ctx.fillRect(0, 0, size, size);
    const aur = ctx.createLinearGradient(size * .1, size * .95, size * .92, size * .08);
    aur.addColorStop(0, 'rgba(255,213,135,0)');
    aur.addColorStop(.42, 'rgba(173,143,214,.055)');
    aur.addColorStop(.62, 'rgba(142,207,196,.045)');
    aur.addColorStop(1, 'rgba(255,213,135,0)');
    ctx.fillStyle = aur; ctx.fillRect(0, 0, size, size);
    ctx.restore();

    const reveal = opts.reveal == null ? (opts.complete ? 1 : 0) : clamp(opts.reveal, 0, 1);

    // 未完成的盘面：深色玻璃格 + 星
    if (reveal < 1) {
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          const pane = paneSprite(!!game.board[y][x], cell, dpr);
          ctx.drawImage(pane, x * cell, y * cell, cell + .2, cell + .2);
        }
      }
      // 摘走位置的细格线仍然保留，让“同一套格子”一眼可读
      ctx.save();
      ctx.strokeStyle = 'rgba(228,214,247,.05)';
      ctx.lineWidth = .55;
      for (let i = 1; i < N; i++) {
        ctx.beginPath(); ctx.moveTo(i * cell, 0); ctx.lineTo(i * cell, size); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i * cell); ctx.lineTo(size, i * cell); ctx.stroke();
      }
      ctx.restore();
      // 星
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          const color = game.board[y][x];
          if (!color) continue;
          const index = y * N + x;
          const reach = game.isReachable(x, y);
          const claim = game.claimed.get(index);
          const phase = hash2(x, y, 11);
          const variant = hash2(x, y, 17);
          const tw = .5 + .5 * Math.sin((t / 1100) * Math.PI * 2 + phase * Math.PI * 2);
          const highlighted = !!opts.highlightColor && opts.highlightColor === color;
          let alpha = reach ? (.82 + tw * .18) : (.27 + tw * .11);
          if (claim) alpha = Math.min(1, alpha + .14);
          if (highlighted) alpha = Math.min(1, alpha + .2);
          const sprite = makeStarSprite(color, cell, dpr, variant);
          // 星的大小只由格子密度/DPR 决定；可达与否只改亮度，不随剩余数量变大。
          const s = sprite.size * (.96 + tw * .04);
          ctx.save();
          ctx.globalAlpha = Math.max(.1, Math.min(1, alpha));
          ctx.translate(x * cell + cell / 2, y * cell + cell / 2);
          const tilt = (hash2(x, y, 3) - .5) * .18;
          ctx.rotate(tilt);
          ctx.drawImage(sprite.canvas, -s / 2, -s / 2, s, s);
          ctx.restore();
          if (highlighted) {
            ctx.save();
            const hr = cell * .38;
            const hg = ctx.createRadialGradient(x * cell + cell / 2, y * cell + cell / 2, hr * .2, x * cell + cell / 2, y * cell + cell / 2, hr * 1.6);
            hg.addColorStop(0, rgba('#fff4cf', .18));
            hg.addColorStop(.55, rgba('#fff0bf', .08));
            hg.addColorStop(1, rgba('#fff0bf', 0));
            ctx.fillStyle = hg;
            ctx.beginPath(); ctx.arc(x * cell + cell / 2, y * cell + cell / 2, hr * 1.6, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = rgba('#fff0bf', .6);
            ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.arc(x * cell + cell / 2, y * cell + cell / 2, hr, 0, Math.PI * 2); ctx.stroke();
            ctx.restore();
          }
          if (claim) {
            const pulse = (Math.sin(t / 180 + phase * 6) + 1) / 2;
            ctx.save();
            ctx.strokeStyle = rgba('#ffe8b2', .48 + pulse * .26);
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.arc(x * cell + cell / 2, y * cell + cell / 2, cell * (.3 + pulse * .09), 0, Math.PI * 2); ctx.stroke();
            ctx.restore();
          }
        }
      }
      // 刚摘到的格子闪一下
      if (opts.flashes) {
        for (const f of opts.flashes) {
          const age = t - f.at;
          if (age > 620) continue;
          const a = Math.max(0, 1 - age / 620);
          const cx = (f.x + .5) * cell, cy = (f.y + .5) * cell;
          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          const p = PALETTE[f.color] || { glow: '#ffe8b2' };
          const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, cell * 1.5);
          g.addColorStop(0, rgba('#fff7e4', a * .8)); g.addColorStop(.3, rgba(p.glow, a * .5)); g.addColorStop(1, rgba(p.glow, 0));
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, cell * 1.5, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }
      }
    }

    // 全部摘完：在同一套 N×N 格子上绘制完整原画
    if (reveal > 0) {
      const art = fullArtCanvas(game.level, size, dpr);
      const artCell = art.width / N;
      if (reveal >= .999) {
        ctx.drawImage(art, 0, 0, size, size);
      } else {
        const p = reveal;
        for (let y = 0; y < N; y++) {
          for (let x = 0; x < N; x++) {
            const sweep = (x + y) / (2 * N - 2);
            const delay = .03 + sweep * .74 + (hash2(x, y, 21) - .5) * .055;
            const local = smooth((p - delay) / .17);
            if (local <= .002) continue;
            ctx.globalAlpha = local;
            ctx.drawImage(art, x * artCell, y * artCell, artCell, artCell, x * cell, y * cell, cell + .25, cell + .25);
          }
        }
        ctx.globalAlpha = 1;
        // 笔刷般的斜向光带
        const q = clamp(p * 1.08 - .04, 0, 1);
        const cx = q * size, cy = q * size;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI / 4);
        const band = ctx.createLinearGradient(-size * .6, 0, size * .6, 0);
        band.addColorStop(0, 'rgba(255,244,214,0)');
        band.addColorStop(.34, 'rgba(255,236,180,.22)');
        band.addColorStop(.5, 'rgba(255,252,235,.48)');
        band.addColorStop(.66, 'rgba(255,220,150,.2)');
        band.addColorStop(1, 'rgba(255,244,214,0)');
        ctx.fillStyle = band;
        ctx.fillRect(-size * .8, -Math.max(4, size * .035), size * 1.6, Math.max(8, size * .07));
        ctx.restore();
        // 光带边的细小星屑
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 16; i++) {
          const h = hash2(i, Math.floor(q * 90), 7);
          const ss = clamp(q + (h - .5) * .05, 0, 1);
          const along = size * ss;
          const off = (hash2(i, 3, 19) - .5) * size * .16;
          const px = along + off * .7, py = along - off * .7;
          const a = (1 - Math.abs(q - ss) / .08) * .55;
          if (a <= 0) continue;
          ctx.fillStyle = `rgba(255,244,213,${a})`;
          const r = .8 + hash2(i, 5, 3) * 1.7;
          ctx.beginPath();
          for (let k = 0; k < 4; k++) {
            const ang = k * Math.PI / 2;
            ctx.lineTo(px + Math.cos(ang) * r * 2.4, py + Math.sin(ang) * r * 2.4);
            ctx.lineTo(px + Math.cos(ang + Math.PI / 4) * r * .6, py + Math.sin(ang + Math.PI / 4) * r * .6);
          }
          ctx.closePath(); ctx.fill();
        }
        ctx.restore();
      }
      // 完成后的温润空气光
      const breath = .1 + .025 * Math.sin(t / 900);
      ctx.save();
      const g = ctx.createLinearGradient(0, 0, size, size);
      g.addColorStop(0, `rgba(255,236,186,${breath + .03})`);
      g.addColorStop(.4, 'rgba(255,245,215,.015)');
      g.addColorStop(.72, 'rgba(255,219,160,.035)');
      g.addColorStop(1, `rgba(255,245,225,${breath})`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
      ctx.globalCompositeOperation = 'lighter';
      const rg = ctx.createRadialGradient(size * .32, size * .22, 0, size * .5, size * .5, size * .8);
      rg.addColorStop(0, 'rgba(255,244,206,.08)');
      rg.addColorStop(.55, 'rgba(255,226,160,.02)');
      rg.addColorStop(1, 'rgba(255,226,160,0)');
      ctx.fillStyle = rg; ctx.fillRect(0, 0, size, size);
      ctx.restore();
      ctx.strokeStyle = 'rgba(255,240,200,.24)'; ctx.lineWidth = 1;
      roundRect(ctx, .5, .5, size - 1, size - 1, 10); ctx.stroke();
    }

    // 四边暗角，让星与画都往中间聚
    const vig = ctx.createRadialGradient(size * .5, size * .46, size * .28, size * .5, size * .5, size * .78);
    vig.addColorStop(0, 'rgba(5,4,13,0)');
    vig.addColorStop(1, 'rgba(5,4,13,.34)');
    ctx.fillStyle = vig; ctx.fillRect(0, 0, size, size);
  }

  function paintDataURL(level, size, opts) {
    opts = opts || {};
    const cv = fullArtCanvas(level, size, opts.dpr || 1);
    return cv.toDataURL('image/png');
  }

  /* ---------------- 小精灵 ---------------- */
  function drawFairy(ctx, x, y, color, opts) {
    opts = opts || {};
    const p = PALETTE[color] || { fill: '#e6cf9d', glow: '#fff1c7' };
    const time = opts.time || 0;
    const phase = opts.phase || 0;
    const flap = opts.idle ? (.56 + .44 * Math.abs(Math.sin(time * .0019 + phase))) : (.52 + .48 * Math.abs(Math.sin(time * .017 + phase)));
    const angle = opts.angle || 0;
    const bob = Math.sin(time * .006 + phase) * (opts.idle ? 1.15 : .55);
    const scale = opts.scale || 1;
    const litEarly = !!opts.glow;
    ctx.save();
    ctx.translate(x, y + bob);
    if (opts.trail && litEarly && opts.trail.length > 1) {
      for (let i = Math.max(0, opts.trail.length - 7); i < opts.trail.length - 1; i++) {
        const q = opts.trail[i];
        const a = (i / opts.trail.length) * .14;
        ctx.fillStyle = rgba(p.glow, a);
        ctx.beginPath(); ctx.arc(q.x - x, q.y - y, 2.4 * (i / opts.trail.length) + .6, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.rotate(angle);
    ctx.scale(scale, scale);
    const lit = litEarly;
    if (lit) {
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 24);
      g.addColorStop(0, rgba(p.glow, .74)); g.addColorStop(.3, rgba(p.fill, .34)); g.addColorStop(1, rgba(p.glow, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 24, 0, Math.PI * 2); ctx.fill();
    }
    // 玻璃翅：左右各两片，随拍翅开合
    const wing = (side) => {
      const sx = side;
      ctx.save();
      ctx.scale(sx * Math.max(.2, flap), 1);
      ctx.globalCompositeOperation = lit ? 'lighter' : 'source-over';
      // 上翼
      ctx.beginPath();
      ctx.moveTo(0, -1);
      ctx.bezierCurveTo(4, -11, 12, -13, 14, -7);
      ctx.bezierCurveTo(15, -2.6, 8, 1, 1, 1);
      ctx.closePath();
      const wg = ctx.createLinearGradient(0, -8, 12, 4);
      wg.addColorStop(0, lit ? 'rgba(255,250,232,.62)' : 'rgba(255,250,232,.2)');
      wg.addColorStop(.45, rgba(p.glow, lit ? .5 : .14));
      wg.addColorStop(1, lit ? 'rgba(142,207,196,.3)' : 'rgba(142,207,196,.08)');
      ctx.fillStyle = wg;
      ctx.fill();
      if (lit) {
        ctx.save();
        ctx.globalAlpha = .45;
        ctx.fillStyle = rgba(p.glow, .5);
        ctx.fill();
        ctx.restore();
      }
      ctx.strokeStyle = rgba('#f7f1dc', lit ? .82 : .34); ctx.lineWidth = lit ? .85 : .6; ctx.stroke();
      // 下翼
      ctx.beginPath();
      ctx.moveTo(0, 1);
      ctx.bezierCurveTo(5, 3, 11, 9, 8, 12);
      ctx.bezierCurveTo(6, 14, 1, 8, 0, 3);
      ctx.closePath();
      ctx.fillStyle = rgba(p.fill, lit ? .72 : .44);
      ctx.fill();
      ctx.strokeStyle = rgba('#f7f1dc', lit ? .68 : .46); ctx.lineWidth = lit ? .7 : .55; ctx.stroke();
      // 翼脉
      ctx.beginPath();
      ctx.moveTo(1, 0); ctx.quadraticCurveTo(7, -7, 13, -7);
      ctx.moveTo(1, .5); ctx.quadraticCurveTo(6, 6, 8, 11);
      ctx.strokeStyle = rgba('#fff7e4', lit ? .62 : .24); ctx.lineWidth = lit ? .55 : .4; ctx.stroke();
      ctx.restore();
    };
    wing(-1); wing(1);
    ctx.globalCompositeOperation = 'source-over';
    // 光球身体
    const bodyR = opts.carrying ? 4.7 : 4.2;
    const g2 = ctx.createRadialGradient(-1, -1.3, 0, 0, 0, bodyR * 1.25);
    g2.addColorStop(0, lit ? 'rgba(255,252,242,.99)' : 'rgba(255,252,242,.86)');
    g2.addColorStop(.26, rgba(p.glow, lit ? .99 : .7));
    g2.addColorStop(.64, rgba(p.fill, lit ? .96 : .88));
    g2.addColorStop(1, rgba(p.fill, lit ? .08 : 0));
    ctx.fillStyle = g2;
    ctx.beginPath(); ctx.arc(0, 0, bodyR, 0, Math.PI * 2); ctx.fill();
    if (lit) {
      ctx.strokeStyle = 'rgba(255,250,232,.62)';
      ctx.lineWidth = .8;
      ctx.beginPath(); ctx.arc(0, 0, bodyR + .4, 0, Math.PI * 2); ctx.stroke();
    }
    if (opts.carrying) {
      const s = 3.4 + Math.sin(time * .008) * .45;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = rgba('#fff5d6', .96);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2;
        ctx.lineTo(Math.cos(a) * s * 1.35, Math.sin(a) * s * 1.35);
        ctx.lineTo(Math.cos(a + Math.PI / 4) * s * .42, Math.sin(a + Math.PI / 4) * s * .42);
      }
      ctx.closePath(); ctx.fill();
      ctx.restore();
    }
    // 眼睛似的小高光
    ctx.fillStyle = 'rgba(255,255,250,.94)';
    ctx.beginPath(); ctx.arc(-1.25, -1.35, .95, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function drawBurst(ctx, x, y, color, age, seed) {
    const p = PALETTE[color] || { glow: '#ffe8b2', fill: '#fff' };
    const t = Math.min(1, age / 620);
    const e = 1 - Math.pow(1 - t, 3);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const ringA = (1 - t) * .6;
    ctx.strokeStyle = rgba(p.glow, ringA); ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.arc(x, y, 3 + e * 18, 0, Math.PI * 2); ctx.stroke();
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2 + seed;
      const dist = 2 + e * (11 + (i % 3) * 6);
      const px = x + Math.cos(a) * dist, py = y + Math.sin(a) * dist;
      ctx.fillStyle = rgba(i % 2 ? p.glow : p.fill, (1 - t) * .95);
      ctx.beginPath(); ctx.arc(px, py, 1.6 - t * .7, 0, Math.PI * 2); ctx.fill();
    }
    // 一点十字星屑
    ctx.strokeStyle = rgba('#fff8e7', (1 - t) * .6);
    ctx.lineWidth = .9;
    const r = 3 + e * 9;
    ctx.beginPath(); ctx.moveTo(x - r, y); ctx.lineTo(x + r, y); ctx.moveTo(x, y - r); ctx.lineTo(x, y + r); ctx.stroke();
    ctx.restore();
  }

  global.SHIGUANG_ART = {
    forestSVG, cottageSVG, drawBoard, paintDataURL, fullArtCanvas, drawFairy, drawBurst,
    clearSpriteCache, palette: PALETTE, hexToRgb, rgba, mix,
  };
})(typeof window !== 'undefined' ? window : globalThis);
