// ─── 1. SHARED ────────────────────────────────────────────────────────────────

export const sharedCss = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,300&family=Space+Mono:wght@400;700&display=swap');

/* ── Reset & shell ── */
.rm, .rm *, .gt, .gt * { box-sizing:border-box; margin:0; padding:0; }
.rm, .gt {
  min-height:100vh; min-height:100dvh;
  font-family:'Crimson Pro',Georgia,serif;
}

/* ── Hero ── */
.rm-hero, .gt-hero {
  position:relative;
  padding:clamp(20px,4vw,44px) 16px 0;
  text-align:center; overflow:hidden;
}
.rm-hero-inner, .gt-hero-inner { position:relative; z-index:2; }
.rm-eyebrow, .gt-eyebrow {
  font-family:'Space Mono',monospace;
  font-size:clamp(10px,1.8vw,12px); letter-spacing:3px; text-transform:uppercase;
  margin-bottom:10px;
}
.rm-hero h1, .gt-hero h1 {
  font-family:'Playfair Display',serif;
  font-size:clamp(1.85rem,6vw,4.4rem);
  font-weight:900; line-height:1; margin-bottom:8px;
}
.rm-hero h1 em, .gt-hero h1 em { font-style:italic; }
.rm-subtitle, .gt-subtitle {
  font-style:italic; font-size:clamp(1rem,2.4vw,1.2rem); margin-bottom:14px;
}
.rm-badges, .gt-badges { display:flex; flex-wrap:wrap; gap:6px; justify-content:center; }
.rm-badge, .gt-badge {
  border-radius:100px; padding:5px 14px;
  font-family:'Space Mono',monospace;
  font-size:clamp(9px,1.6vw,11px); letter-spacing:1px;
}

/* ── Sticky tab bar ── */
.rm-tabs-bar, .gt-tabs-bar {
  position:sticky; top:0; z-index:100;
  backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
  border-bottom:1px solid rgba(255,255,255,.07);
  width:100%;
}
.rm-tabs, .gt-tabs {
  display:flex; justify-content:center;
  overflow-x:auto; scrollbar-width:none;
  -webkit-overflow-scrolling:touch; padding:0 4px;
}
.rm-tabs::-webkit-scrollbar, .gt-tabs::-webkit-scrollbar { display:none; }
.rm-tab, .gt-tab {
  flex-shrink:0; padding:10px 16px 13px;
  font-family:'Playfair Display',serif; font-weight:700;
  color:rgba(255,255,255,.35); background:none; border:none;
  cursor:pointer; position:relative;
  display:flex; flex-direction:column; align-items:flex-start; gap:3px;
  border-radius:7px 7px 0 0;
  transition:color .18s,background .18s;
  -webkit-tap-highlight-color:transparent;
  text-align:left; min-width:0;
}
.rm-tab:hover, .gt-tab:hover   { color:rgba(255,255,255,.65); background:rgba(255,255,255,.04); }
.rm-tab.active, .gt-tab.active { background:rgba(255,255,255,.06); }
.rm-tab.active::after, .gt-tab.active::after {
  content:''; position:absolute; bottom:-1px; left:0; right:0; height:2px;
}
.rm-tab-date, .gt-tab-date {
  font-family:'Space Mono',monospace; font-size:10px;
  letter-spacing:2px; text-transform:uppercase; opacity:.55; font-weight:400;
}
.rm-tab-title, .gt-tab-title { font-size:clamp(.9rem,2.4vw,1.05rem); line-height:1.2; }

/* ── Inner wrapper ── */
.rm-inner, .gt-inner { max-width:1280px; margin:0 auto; padding:0 14px; }

/* ── Two-panel layout ── */
.rm-body, .gt-body {
  display:grid; grid-template-columns:1fr;
  gap:0 28px; align-items:start;
  padding:0 14px 56px; max-width:1280px; margin:0 auto;
}
.rm-left, .gt-left { position:sticky; top:68px; align-self:start; }
.rm-right, .gt-right { min-width:0; }

/* ── Section label ── */
.rm-sec, .gt-sec {
  font-family:'Space Mono',monospace; font-size:11px;
  letter-spacing:4px; text-transform:uppercase;
  margin-bottom:14px; padding-top:28px;
  display:flex; align-items:center; gap:10px;
}
.rm-sec::after, .gt-sec::after { content:''; flex:1; height:1px; }

/* ── Route strip ── */
.rm-route-wrap, .gt-route-wrap {
  position:relative; z-index:2; padding:12px 16px 16px; text-align:center;
}
.rm-route-label, .gt-route-label {
  font-family:'Space Mono',monospace; font-size:11px;
  letter-spacing:4px; text-transform:uppercase;
  display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:8px;
}
.rm-route-label::before, .gt-route-label::before { content:''; flex:1; height:1px; }
.rm-route-label::after,  .gt-route-label::after  { content:''; flex:1; height:1px; }
.rm-route, .gt-route {
  display:flex; align-items:center; justify-content:center;
  overflow-x:auto; -webkit-overflow-scrolling:touch; scrollbar-width:none; padding:8px 0;
}
.rm-route::-webkit-scrollbar, .gt-route::-webkit-scrollbar { display:none; }
.rm-rs, .gt-rs           { display:flex; align-items:center; flex-shrink:0; }
.rm-rs-dot, .gt-rs-dot   { width:9px; height:9px; border-radius:50%; border:2px solid; flex-shrink:0; }
.rm-rs-line, .gt-rs-line { width:clamp(20px,4vw,60px); height:1px; flex-shrink:0; }
.rm-rs-info, .gt-rs-info { padding:0 10px; }
.rm-rs-name, .gt-rs-name { font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.8px; white-space:nowrap; }
.rm-rs-sub,  .gt-rs-sub  { font-size:.85rem; font-style:italic; white-space:nowrap; margin-top:2px; }

/* ── Map card ── */
.rm-map-card, .gt-map-card { border-radius:14px; overflow:hidden; margin-top:28px; }
.rm-map-hdr,  .gt-map-hdr  { padding:11px 16px; display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
.rm-map-dot,  .gt-map-dot  { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
.rm-map-t,    .gt-map-t    { font-family:'Space Mono',monospace; font-size:11px; letter-spacing:1.5px; }
.rm-map-km,   .gt-map-km   { font-family:'Space Mono',monospace; font-size:10px; margin-left:auto; }
.rm-map-frame, .gt-map-frame { width:100%; height:clamp(300px,44vw,620px); border:0; display:block; }

/* ── Day card skeleton ── */
.rm-day, .gt-day {
  background:rgba(255,255,255,.035); border:1px solid rgba(255,255,255,.07);
  border-radius:14px; overflow:hidden; margin-top:20px;
}
.rm-dhdr, .gt-dhdr     { padding:16px 14px 12px; border-bottom:1px solid rgba(255,255,255,.06); }
.rm-dhdr-top, .gt-dhdr-top { display:flex; align-items:flex-start; gap:12px; }
.rm-dnum, .gt-dnum {
  font-family:'Playfair Display',serif;
  font-size:clamp(2.3rem,7vw,3.6rem); font-weight:900; line-height:1;
  color:transparent; flex-shrink:0; align-self:center;
}
.rm-dmeta, .gt-dmeta   { flex:1; min-width:0; }
.rm-ddate, .gt-ddate   { font-family:'Space Mono',monospace; font-size:11px; letter-spacing:2.5px; margin-bottom:4px; }
.rm-dtitle, .gt-dtitle { font-family:'Playfair Display',serif; font-size:clamp(1.15rem,3.8vw,1.55rem); font-weight:700; line-height:1.2; }
.rm-dsub, .gt-dsub     { font-style:italic; font-size:clamp(.95rem,2.3vw,1.05rem); margin-top:4px; }
.rm-dbase, .gt-dbase   { font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.8px; margin-top:6px; line-height:1.6; }
.rm-dtags, .gt-dtags   { display:flex; flex-wrap:wrap; gap:5px; margin-top:12px; }

/* ── Drive banner ── */
.rm-drive, .gt-drive { border-radius:8px; padding:10px 14px; font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.3px; line-height:1.7; }

/* ── Tag pill base — shared selector used by both themes ── */
.tag { font-family:'Space Mono',monospace; font-size:9px; letter-spacing:.8px; padding:4px 11px; border-radius:100px; white-space:nowrap; }
/* t-ki is identical in both themes */
.t-ki, .gt-day .t-ki { background:rgba(180,100,200,.22); border:1px solid rgba(180,100,200,.45); color:#e0b8f8; }
/* Guatemala-only tag */
.gt-day .t-bo { background:rgba(142,107,191,.2); border:1px solid rgba(142,107,191,.5); color:#c8a8f0; }

/* ── Timeline ── */
.rm-tl, .gt-tl   { padding:0 12px 16px; }
.rm-tc, .gt-tc   { display:flex; flex-direction:column; align-items:center; padding-top:18px; }
.rm-tlab, .gt-tlab { font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.3px; white-space:nowrap; }
.rm-tdot, .gt-tdot { width:8px; height:8px; border-radius:50%; border:1.5px solid; margin-top:-3px; flex-shrink:0; }
.rm-tbar, .gt-tbar { width:1px; flex:1; min-height:14px; margin-top:5px; }
.rm-ec, .gt-ec   { padding:18px 0 6px; border-bottom:1px solid rgba(255,255,255,.05); }
.rm-tb:last-child .rm-ec, .gt-tb:last-child .gt-ec { border-bottom:none; }
.rm-etit, .gt-etit {
  font-family:'Playfair Display',serif;
  font-size:clamp(1.05rem,3.2vw,1.25rem); font-weight:700; margin-bottom:6px; line-height:1.25;
}
.rm-edesc, .gt-edesc { font-size:clamp(1rem,2.6vw,1.1rem); line-height:1.7; margin-bottom:10px; }
.rm-pills, .gt-pills { display:flex; flex-wrap:wrap; gap:5px; }
.rm-pill, .gt-pill {
  font-family:'Space Mono',monospace; font-size:9px; letter-spacing:.6px;
  padding:4px 10px; border-radius:100px;
  background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.1);
}
.rm-pill.pill-w, .gt-pill.pill-w { background:rgba(201,150,58,.15); color:#f0c278; border-color:rgba(201,150,58,.35); }
.rm-pill.pill-a, .gt-pill.pill-a { background:rgba(184,92,56,.18);  color:#f4a07a; border-color:rgba(184,92,56,.4); }

/* ── Footer ── */
.rm-footer, .gt-footer {
  margin-top:40px; border-top:1px solid rgba(255,255,255,.08); padding-top:22px;
  display:flex; flex-wrap:wrap; justify-content:center; gap:16px;
  padding-left:28px; padding-right:28px;
}
.rm-ft, .gt-ft { flex:0 1 220px; display:flex; align-items:flex-start; gap:10px; }
.rm-fi, .gt-fi { font-size:1.1rem; flex-shrink:0; margin-top:2px; }
.rm-fx, .gt-fx { font-size:clamp(.95rem,2.4vw,1rem); line-height:1.65; }
.rm-fx strong, .gt-fx strong { font-weight:600; }
.rm-fbrand, .gt-fbrand {
  font-family:'Playfair Display',serif; font-style:italic;
  font-size:1rem; text-align:right; width:100%;
  padding-top:8px; border-top:1px solid rgba(255,255,255,.05);
}

/* ── Responsive ── */
@media(min-width:500px){
  .rm-inner, .gt-inner   { padding:0 20px 0; }
  .rm-body, .gt-body     { padding:0 20px 56px; }
  .rm-tab, .gt-tab       { padding:12px 20px 14px; }
  .rm-tab-title, .gt-tab-title { font-size:1rem; }
  .rm-tl, .gt-tl         { padding:0 20px 20px; }
  .rm-dhdr, .gt-dhdr     { padding:20px 20px 14px; }
  .rm-drive, .gt-drive   { margin:0 20px 4px; }
}
@media(min-width:800px){
  .rm-inner, .gt-inner   { padding:0 28px 0; }
  .rm-body, .gt-body     { grid-template-columns:1fr 1fr; padding:0 28px 64px; }
  .rm-tab, .gt-tab       { padding:13px 22px 15px; }
  .rm-tab-title, .gt-tab-title { font-size:1.05rem; }
  .rm-tl, .gt-tl         { padding:0 28px 24px; }
  .rm-dhdr, .gt-dhdr     { padding:24px 28px 18px; }
  .rm-drive, .gt-drive   { margin:0 28px 6px; }
}
@media(max-width:480px){ .rm-map-km, .gt-map-km { display:none; } }
@media(max-width:360px){
  .rm-hero, .gt-hero   { padding:20px 10px 30px; }
  .rm-inner, .gt-inner { padding:0 10px 40px; }
}
`;

// ─── 2. ROCKIES THEME ─────────────────────────────────────────────────────────

export const rockiesCss = `
/* ── Rockies: page shell & colour ── */
.rm { background:#0d1c2a; color:#f0e8dc; }

/* ── Hero background & mountain silhouette ── */
.rm-hero-bg {
  position:absolute; inset:0;
  background:linear-gradient(170deg,#0c1c2c 0%,#1a3a52 55%,#1c3828 100%);
}
.rm-mtn { position:absolute; bottom:0; left:0; right:0; height:70px; }
.rm-mtn-fill {
  position:absolute; bottom:0; left:0; width:100%; height:100%;
  background:rgba(255,255,255,.11);
  clip-path:polygon(0% 100%,6% 45%,12% 70%,19% 15%,27% 55%,34% 8%,41% 48%,48% 22%,55% 58%,63% 18%,70% 52%,78% 28%,86% 60%,93% 35%,100% 50%,100% 100%);
}
.rm-mtn-snow {
  position:absolute; bottom:0; left:0; width:100%; height:24px;
  background:#c8e6f5; opacity:.4;
  clip-path:polygon(0% 100%,6% 60%,12% 80%,19% 25%,27% 68%,34% 18%,41% 60%,48% 38%,55% 70%,63% 30%,70% 64%,78% 42%,86% 72%,93% 50%,100% 65%,100% 100%);
}

/* ── Hero text ── */
.rm-eyebrow    { color:#5ba3c9; }
.rm-hero h1    { color:#f7f4f0; }
.rm-hero h1 em { color:#cce5f6; }
.rm-subtitle   { color:#a8cfe0; }
.rm-badge      { background:rgba(91,163,201,.14); border:1px solid rgba(91,163,201,.35); color:#cce5f6; }

/* ── Tab bar ── */
.rm-tabs-bar { background:rgba(13,28,42,.97); }
.rm-tab.active { color:#f7f4f0; }
.rm-tab:nth-child(1).active::after { background:#5ba3c9; }
.rm-tab:nth-child(2).active::after { background:#4a8c5c; }
.rm-tab:nth-child(3).active::after { background:#c9963a; }

/* ── Section label ── */
.rm-sec { color:#5ba3c9; }
.rm-sec::after { background:linear-gradient(90deg,rgba(91,163,201,.4),transparent); }

/* ── Route strip ── */
.rm-route-label { color:#5ba3c9; }
.rm-route-label::before { background:linear-gradient(270deg,rgba(91,163,201,.4),transparent); }
.rm-route-label::after  { background:linear-gradient(90deg,rgba(91,163,201,.4),transparent); }
.rm-route       { background:linear-gradient(90deg,transparent 0%,rgba(5,14,22,.70) 20%,rgba(5,14,22,.70) 80%,transparent 100%); }
.rm-rs-dot      { border-color:#5ba3c9; background:#0d1c2a; }
.rm-rs-dot.o    { border-color:#c9963a; }
.rm-rs-dot.g    { border-color:#4a8c5c; }
.rm-rs-dot.r    { border-color:#b85c38; }
.rm-rs-dot.e    { border-color:#9b5de5; background:#9b5de5; }
.rm-rs-line     { background:rgba(91,163,201,.25); }
.rm-rs-name     { color:#cce5f6; }
.rm-rs-sub      { color:#7baabf; }

/* ── Map ── */
.rm-map-card  { border:1px solid rgba(91,163,201,.18); }
.rm-map-hdr   { background:rgba(20,40,58,.97); border-bottom:1px solid rgba(91,163,201,.12); }
.rm-map-dot   { background:#5ba3c9; }
.rm-map-t     { color:#9bbfd4; }
.rm-map-km    { color:#5ba3c9; }
.rm-map-frame { filter:saturate(.88) brightness(.92); }

/* ── Day card ── */
@keyframes rmIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
.rm-day    { animation:rmIn .28s ease forwards; }
.rm-day.d1 { border-top:3px solid #5ba3c9; }
.rm-day.d2 { border-top:3px solid #4a8c5c; }
.rm-day.d3 { border-top:3px solid #c9963a; }
.rm-dnum   { -webkit-text-stroke:1.5px rgba(91,163,201,.35); }
.rm-ddate  { color:#5ba3c9; }
.rm-dtitle { color:#f7f4f0; }
.rm-dsub   { color:#a8cfe0; }
.rm-dbase  { color:#e8a84a; }

/* ── Drive banner ── */
.rm-drive  { margin:0 12px 4px; background:rgba(201,150,58,.1); border:1px solid rgba(201,150,58,.28); color:#f0c278; }

/* ── Tag colours (Rockies) ── */
.t-gl { background:rgba(200,230,245,.14); border:1px solid rgba(200,230,245,.32); color:#d6eefa; }
.t-ad { background:rgba(91,163,201,.22);  border:1px solid rgba(91,163,201,.55);  color:#b8dcf4; }
.t-dr { background:rgba(184,92,56,.22);   border:1px solid rgba(184,92,56,.5);    color:#f0a882; }
.t-hi { background:rgba(45,92,63,.45);    border:1px solid rgba(45,92,63,.75);    color:#96dfb8; }
.t-re { background:rgba(201,150,58,.22);  border:1px solid rgba(201,150,58,.55);  color:#f4cc7a; }

/* ── Timeline ── */
.rm-tb    { display:grid; grid-template-columns:64px 1fr; gap:0 11px; }
.rm-tlab  { color:#8ec6dd; }
.rm-tdot  { border-color:#5ba3c9; background:#0d1c2a; }
.rm-tbar  { background:linear-gradient(180deg,rgba(91,163,201,.35),rgba(91,163,201,.03)); }
.rm-etit  { color:#f7f4f0; }
.rm-edesc { color:#d4e8f5; }
.rm-pill  { color:#9ec8de; }

/* ── Footer ── */
.rm-fx         { color:#7baabf; }
.rm-fx strong  { color:#a8cfe0; }
.rm-fbrand     { color:rgba(91,163,201,.35); }

/* ── Responsive (Rockies timeline column widths) ── */
@media(min-width:500px){ .rm-tb { grid-template-columns:74px 1fr; gap:0 15px; } }
@media(min-width:800px){ .rm-tb { grid-template-columns:80px 1fr; gap:0 18px; } }
`;

// ─── 3. GUATEMALA THEME ───────────────────────────────────────────────────────

export const guatemalaCss = `
/* ── Guatemala: page shell & colour ── */
.gt { background:#0d1c16; color:#f0ece4; }

/* ── Hero background & volcano silhouette ── */
.gt-hero-bg {
  position:absolute; inset:0;
  background:linear-gradient(170deg,#0a1a10 0%,#1a3828 55%,#2a2a10 100%);
}
.gt-volcano-shape { position:absolute; bottom:0; left:0; right:0; height:80px; }
.gt-volcano-fill {
  position:absolute; bottom:0; left:0; width:100%; height:100%;
  background:rgba(255,255,255,.09);
  clip-path:polygon(0% 100%,10% 80%,20% 100%,28% 40%,36% 100%,45% 55%,50% 20%,55% 55%,64% 100%,72% 45%,80% 100%,90% 75%,100% 90%,100% 100%);
}
.gt-volcano-glow {
  position:absolute; bottom:10px; left:50%; transform:translateX(-50%);
  width:60px; height:30px;
  background:radial-gradient(ellipse,rgba(192,57,43,.5) 0%,transparent 70%);
}

/* ── Hero text ── */
.gt-eyebrow    { color:#5dbfa0; }
.gt-hero h1    { color:#f8f5f0; }
.gt-hero h1 em { color:#a8dfc8; }
.gt-subtitle   { color:#98c8b0; }
.gt-badge      { background:rgba(45,138,110,.14); border:1px solid rgba(45,138,110,.4); color:#a8dfc8; }

/* ── Tab bar ── */
.gt-tabs-bar { background:rgba(10,22,14,.97); }
.gt-tab.active { color:#f8f5f0; }
.gt-tab:nth-child(1).active::after { background:#2d8a6e; }
.gt-tab:nth-child(2).active::after { background:#4a90c4; }
.gt-tab:nth-child(3).active::after { background:#c0392b; }
.gt-tab:nth-child(4).active::after { background:#8e6bbf; }
.gt-tab:nth-child(5).active::after { background:#2d8a6e; }
.gt-tab:nth-child(6).active::after { background:#e8b84b; }
.gt-tab:nth-child(7).active::after { background:#c0392b; }

/* ── Section label ── */
.gt-sec { color:#5dbfa0; }
.gt-sec::after { background:linear-gradient(90deg,rgba(45,138,110,.4),transparent); }

/* ── Route strip ── */
.gt-route-label { color:#5dbfa0; }
.gt-route-label::before { background:linear-gradient(270deg,rgba(45,138,110,.4),transparent); }
.gt-route-label::after  { background:linear-gradient(90deg,rgba(45,138,110,.4),transparent); }
.gt-route       { background:linear-gradient(90deg,transparent 0%,rgba(5,14,10,.70) 20%,rgba(5,14,10,.70) 80%,transparent 100%); }
.gt-rs-dot      { border-color:#2d8a6e; background:#0d1c16; }
.gt-rs-dot.o    { border-color:#e8b84b; }
.gt-rs-dot.g    { border-color:#2d8a6e; }
.gt-rs-dot.r    { border-color:#c0392b; }
.gt-rs-dot.e    { border-color:#8e6bbf; background:#8e6bbf; }
.gt-rs-line     { background:rgba(45,138,110,.25); }
.gt-rs-name     { color:#a8dfc8; }
.gt-rs-sub      { color:#6a9e88; }

/* ── Map ── */
.gt-map-card  { border:1px solid rgba(45,138,110,.2); }
.gt-map-hdr   { background:rgba(14,30,18,.97); border-bottom:1px solid rgba(45,138,110,.14); }
.gt-map-dot   { background:#2d8a6e; }
.gt-map-t     { color:#7fbfa4; }
.gt-map-km    { color:#5dbfa0; }
.gt-map-frame { filter:saturate(.9) brightness(.9); }

/* ── Day card ── */
@keyframes gtIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
.gt-day    { animation:gtIn .28s ease forwards; }
.gt-day.d1 { border-top:3px solid #2d8a6e; }
.gt-day.d2 { border-top:3px solid #4a90c4; }
.gt-day.d3 { border-top:3px solid #c0392b; }
.gt-day.d4 { border-top:3px solid #8e6bbf; }
.gt-day.d5 { border-top:3px solid #2d8a6e; }
.gt-day.d6 { border-top:3px solid #e8b84b; }
.gt-day.d7 { border-top:3px solid #c0392b; }
.gt-dnum   { -webkit-text-stroke:1.5px rgba(45,138,110,.4); }
.gt-ddate  { color:#5dbfa0; }
.gt-dtitle { color:#f8f5f0; }
.gt-dsub   { color:#98c8b0; }
.gt-dbase  { color:#d4a040; }

/* ── Drive banner ── */
.gt-drive  { margin:0 12px 4px; background:rgba(232,184,75,.09); border:1px solid rgba(232,184,75,.25); color:#e8b84b; }

/* ── Tag colours (Guatemala — scoped to avoid colliding with Rockies globals) ── */
.gt-day .t-gl { background:rgba(74,144,196,.2);   border:1px solid rgba(74,144,196,.5);  color:#a8d4f0; }
.gt-day .t-ad { background:rgba(192,57,43,.2);    border:1px solid rgba(192,57,43,.5);   color:#f0a898; }
.gt-day .t-dr { background:rgba(232,184,75,.2);   border:1px solid rgba(232,184,75,.5);  color:#f4d080; }
.gt-day .t-hi { background:rgba(45,138,110,.3);   border:1px solid rgba(45,138,110,.6);  color:#90dfbc; }
.gt-day .t-re { background:rgba(74,144,196,.15);  border:1px solid rgba(74,144,196,.4);  color:#a0ccec; }
.gt-day .t-cu { background:rgba(232,184,75,.18);  border:1px solid rgba(232,184,75,.45); color:#f0cc78; }
.gt-day .t-fo { background:rgba(45,138,110,.18);  border:1px solid rgba(45,138,110,.45); color:#80cfac; }

/* ── Timeline ── */
.gt-tb    { display:grid; grid-template-columns:80px 1fr; gap:0 11px; }
.gt-tlab  { color:#7fbfa4; }
.gt-tdot  { border-color:#2d8a6e; background:#0d1c16; }
.gt-tbar  { background:linear-gradient(180deg,rgba(45,138,110,.35),rgba(45,138,110,.03)); }
.gt-etit  { color:#f8f5f0; }
.gt-edesc { color:#cce8dc; }
.gt-pill  { color:#7fbfa4; }

/* ── Footer ── */
.gt-fx        { color:#6a9e88; }
.gt-fx strong { color:#98c8b0; }
.gt-fbrand    { color:rgba(45,138,110,.4); }

/* ── Responsive (Guatemala timeline column widths) ── */
@media(min-width:500px){ .gt-tb { grid-template-columns:90px 1fr; gap:0 15px; } }
@media(min-width:800px){ .gt-tb { grid-template-columns:96px 1fr; gap:0 18px; } }
`;

// ─── Composed exports ─────────────────────────────────────────────────────────
// Drop-in replacements for the old single-file exports.
// BanffPage / ItineraryPage: import { css } from "./itineraryStyles"
// GuatemalaPage:             import { guatemalaFullCss } from "./itineraryStyles"

export const css              = sharedCss + rockiesCss;
export const guatemalaFullCss = sharedCss + guatemalaCss;