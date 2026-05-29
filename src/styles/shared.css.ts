export const sharedCss = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,300&family=Space+Mono:wght@400;700&display=swap');

/* ── Reset & shell ── */
.rm, .rm *, .gt, .gt * { box-sizing:border-box; margin:0; padding:0; }
.rm, .gt {
  min-height:100vh; min-height:100dvh;
  font-family:'Crimson Pro',Georgia,serif;
}

/* ── Hero ── */
.itin-hero {
  position:relative;
  padding:clamp(20px,4vw,44px) 16px 0;
  text-align:center; overflow:hidden;
}
.itin-hero-inner { position:relative; z-index:2; }
.itin-eyebrow {
  font-family:'Space Mono',monospace;
  font-size:clamp(10px,1.8vw,12px); letter-spacing:3px; text-transform:uppercase;
  margin-bottom:10px;
  color:var(--accent);
}
.itin-hero h1 {
  font-family:'Playfair Display',serif;
  font-size:clamp(1.85rem,6vw,4.4rem);
  font-weight:900; line-height:1; margin-bottom:8px;
  color:var(--text);
}
.itin-hero h1 em { font-style:italic; color:var(--accent-bright); }
.itin-subtitle {
  font-style:italic; font-size:clamp(1rem,2.4vw,1.2rem); margin-bottom:14px;
  color:var(--accent-mid);
}
.itin-badges { display:flex; flex-wrap:wrap; gap:6px; justify-content:center; }
.itin-badge {
  border-radius:100px; padding:5px 14px;
  font-family:'Space Mono',monospace;
  font-size:clamp(9px,1.6vw,11px); letter-spacing:1px;
  background:rgba(var(--accent-rgb),.14); border:1px solid rgba(var(--accent-rgb),.35); color:var(--accent-bright);
}

/* ── Sticky tab bar ── */
.itin-tabs-bar {
  position:sticky; top:0; z-index:100;
  backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
  border-bottom:1px solid rgba(255,255,255,.07);
  width:100%;
  background:var(--tabs-bar-bg);
}
.itin-tabs {
  display:flex; justify-content:center;
  overflow-x:auto; scrollbar-width:none;
  -webkit-overflow-scrolling:touch; padding:0 4px;
}
.itin-tabs::-webkit-scrollbar { display:none; }
.itin-tab {
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
.itin-tab:hover  { color:rgba(255,255,255,.65); background:rgba(255,255,255,.04); }
.itin-tab.active { background:rgba(255,255,255,.06); color:var(--text); }
.itin-tab.active::after {
  content:''; position:absolute; bottom:-1px; left:0; right:0; height:2px;
}
.itin-tab-date {
  font-family:'Space Mono',monospace; font-size:10px;
  letter-spacing:2px; text-transform:uppercase; opacity:.55; font-weight:400;
}
.itin-tab-title { font-size:clamp(.9rem,2.4vw,1.05rem); line-height:1.2; }

/* ── Inner wrapper ── */
.itin-inner { max-width:1280px; margin:0 auto; padding:0 14px; }

/* ── Two-panel layout ── */
.itin-body {
  display:grid; grid-template-columns:1fr;
  gap:0 28px; align-items:start;
  padding:0 14px 56px; max-width:1280px; margin:0 auto;
}
.itin-left  { position:static; align-self:start; }
.itin-right { min-width:0; }

/* ── Section label ── */
.itin-sec {
  font-family:'Space Mono',monospace; font-size:11px;
  letter-spacing:4px; text-transform:uppercase;
  margin-bottom:14px; padding-top:28px;
  display:flex; align-items:center; gap:10px;
  color:var(--accent);
}
.itin-sec::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,rgba(var(--accent-rgb),.4),transparent); }

/* ── Route strip ── */
.itin-route-wrap {
  position:relative; z-index:2; padding:12px 16px 16px; text-align:center;
}
.itin-route-label {
  font-family:'Space Mono',monospace; font-size:11px;
  letter-spacing:4px; text-transform:uppercase;
  display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:8px;
  color:var(--accent);
}
.itin-route-label::before { content:''; flex:1; height:1px; background:linear-gradient(270deg,rgba(var(--accent-rgb),.4),transparent); }
.itin-route-label::after  { content:''; flex:1; height:1px; background:linear-gradient(90deg,rgba(var(--accent-rgb),.4),transparent); }
.itin-route {
  display:flex; align-items:center; justify-content:center;
  overflow-x:auto; -webkit-overflow-scrolling:touch; scrollbar-width:none; padding:8px 0;
  background:var(--route-bg);
}
.itin-route::-webkit-scrollbar { display:none; }
.itin-rs      { display:flex; align-items:center; flex-shrink:0; }
.itin-rs-dot  { width:9px; height:9px; border-radius:50%; border:2px solid; flex-shrink:0; border-color:var(--accent); background:var(--bg); }
.itin-rs-dot.o { border-color:var(--dot-o); }
.itin-rs-dot.g { border-color:var(--dot-g); }
.itin-rs-dot.r { border-color:var(--dot-r); }
.itin-rs-dot.e { border-color:var(--dot-e); background:var(--dot-e); }
.itin-rs-line { width:clamp(20px,4vw,60px); height:1px; flex-shrink:0; background:rgba(var(--accent-rgb),.25); }
.itin-rs-info { padding:0 10px; }
.itin-rs-name { font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.8px; white-space:nowrap; color:var(--accent-bright); }
.itin-rs-sub  { font-size:.85rem; font-style:italic; white-space:nowrap; margin-top:2px; color:var(--accent-dim); }

/* ── Map card ── */
.itin-map-card  { border-radius:14px; overflow:hidden; margin-top:28px; border:1px solid rgba(var(--accent-rgb),.18); }
.itin-map-hdr   { padding:11px 16px; display:flex; align-items:center; gap:8px; flex-wrap:wrap; background:var(--map-hdr-bg); border-bottom:1px solid rgba(var(--accent-rgb),.12); }
.itin-map-dot   { width:8px; height:8px; border-radius:50%; flex-shrink:0; background:var(--accent); }
.itin-map-t     { font-family:'Space Mono',monospace; font-size:11px; letter-spacing:1.5px; color:var(--accent-dim); }
.itin-map-km    { font-family:'Space Mono',monospace; font-size:10px; margin-left:auto; color:var(--accent); }
.itin-map-frame { width:100%; height:clamp(300px,44vw,620px); border:0; display:block; filter:var(--map-filter); }

/* ── Day card skeleton ── */
.itin-day {
  background:rgba(255,255,255,.035); border:1px solid rgba(255,255,255,.07);
  border-radius:14px; overflow:hidden; margin-top:20px;
}
.itin-dhdr     { padding:16px 14px 12px; border-bottom:1px solid rgba(255,255,255,.06); }
.itin-dhdr-top { display:flex; align-items:flex-start; gap:12px; }
.itin-dnum {
  font-family:'Playfair Display',serif;
  font-size:clamp(2.3rem,7vw,3.6rem); font-weight:900; line-height:1;
  color:transparent; flex-shrink:0; align-self:center;
  -webkit-text-stroke:1.5px rgba(var(--accent-rgb),.35);
}
.itin-dmeta  { flex:1; min-width:0; }
.itin-ddate  { font-family:'Space Mono',monospace; font-size:11px; letter-spacing:2.5px; margin-bottom:4px; color:var(--accent); }
.itin-dtitle { font-family:'Playfair Display',serif; font-size:clamp(1.15rem,3.8vw,1.55rem); font-weight:700; line-height:1.2; color:var(--text); }
.itin-dsub   { font-style:italic; font-size:clamp(.95rem,2.3vw,1.05rem); margin-top:4px; color:var(--accent-mid); }
.itin-dbase  { font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.8px; margin-top:6px; line-height:1.6; color:var(--dbase); }
.itin-dtags  { display:flex; flex-wrap:wrap; gap:5px; margin-top:12px; }

/* ── Drive banner ── */
.itin-drive { border-radius:8px; padding:10px 14px; font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.3px; line-height:1.7; background:var(--drive-bg); border:var(--drive-border); color:var(--drive-color); }

/* ── Tag pill base ── */
.tag { font-family:'Space Mono',monospace; font-size:9px; letter-spacing:.8px; padding:4px 11px; border-radius:100px; white-space:nowrap; }
.t-ki { background:rgba(180,100,200,.22); border:1px solid rgba(180,100,200,.45); color:#e0b8f8; }
.t-bo { background:rgba(142,107,191,.2);  border:1px solid rgba(142,107,191,.5);  color:#c8a8f0; }

/* ── Timeline ── */
.itin-tl   { padding:0 12px 16px; }
.itin-tc   { display:flex; flex-direction:column; align-items:center; padding-top:18px; }
.itin-tlab { font-family:'Space Mono',monospace; font-size:10px; letter-spacing:.3px; white-space:nowrap; color:var(--tlab); }
.itin-tdot { width:8px; height:8px; border-radius:50%; border:1.5px solid; margin-top:-3px; flex-shrink:0; border-color:var(--accent); background:var(--bg); }
.itin-tbar { width:1px; flex:1; min-height:14px; margin-top:5px; background:linear-gradient(180deg,rgba(var(--accent-rgb),.35),rgba(var(--accent-rgb),.03)); }
.itin-ec   { padding:18px 0 6px; border-bottom:1px solid rgba(255,255,255,.05); }
.itin-tb:last-child .itin-ec { border-bottom:none; }
.itin-etit {
  font-family:'Playfair Display',serif;
  font-size:clamp(1.05rem,3.2vw,1.25rem); font-weight:700; margin-bottom:6px; line-height:1.25;
  color:var(--text);
}
.itin-edesc { font-size:clamp(1rem,2.6vw,1.1rem); line-height:1.7; margin-bottom:10px; color:var(--edesc); }
.itin-pills { display:flex; flex-wrap:wrap; gap:5px; }
.itin-pill {
  font-family:'Space Mono',monospace; font-size:9px; letter-spacing:.6px;
  padding:4px 10px; border-radius:100px;
  background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.1);
  color:var(--pill-color);
}
.itin-pill.pill-w { background:rgba(201,150,58,.15); color:#f0c278; border-color:rgba(201,150,58,.35); }
.itin-pill.pill-a { background:rgba(184,92,56,.18);  color:#f4a07a; border-color:rgba(184,92,56,.4); }

/* ── Footer ── */
.itin-footer {
  margin-top:40px; border-top:1px solid rgba(255,255,255,.08); padding-top:22px;
  display:flex; flex-wrap:wrap; justify-content:center; gap:16px;
  padding-left:28px; padding-right:28px;
}
.itin-ft { flex:0 1 220px; display:flex; align-items:flex-start; gap:10px; }
.itin-fi { font-size:1.1rem; flex-shrink:0; margin-top:2px; }
.itin-fx { font-size:clamp(.95rem,2.4vw,1rem); line-height:1.65; color:var(--accent-dim); }
.itin-fx strong { font-weight:600; color:var(--accent-mid); }
.itin-fbrand {
  font-family:'Playfair Display',serif; font-style:italic;
  font-size:1rem; text-align:right; width:100%;
  padding-top:8px; border-top:1px solid rgba(255,255,255,.05);
  color:rgba(var(--accent-rgb),.35);
}

/* ── Responsive ── */
@media(min-width:500px){
  .itin-inner  { padding:0 20px 0; }
  .itin-body   { padding:0 20px 56px; }
  .itin-tab    { padding:12px 20px 14px; }
  .itin-tab-title { font-size:1rem; }
  .itin-tl     { padding:0 20px 20px; }
  .itin-dhdr   { padding:20px 20px 14px; }
  .itin-drive  { margin:0 20px 4px; }
}
@media(min-width:800px){
  .itin-inner  { padding:0 28px 0; }
  .itin-body   { grid-template-columns:1fr 1fr; padding:0 28px 64px; }
  .itin-tab    { padding:13px 22px 15px; }
  .itin-tab-title { font-size:1.05rem; }
  .itin-tl     { padding:0 28px 24px; }
  .itin-dhdr   { padding:24px 28px 18px; }
  .itin-drive  { margin:0 28px 6px; }
  .itin-left   { position:sticky; top:68px; }
}
@media(max-width:480px){ .itin-map-km { display:none; } }
@media(max-width:360px){
  .itin-hero  { padding:20px 10px 30px; }
  .itin-inner { padding:0 10px 40px; }
}

/* ── Instagram button ── */
.itin-ig-wrap {
  width:100%; display:flex; justify-content:center; margin-top:16px;
}
.itin-ig-btn {
  display:inline-flex; align-items:center; gap:8px;
  padding:10px 22px; border-radius:100px;
  background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.15);
  color:#f0e8dc; font-family:'Space Mono',monospace;
  font-size:12px; letter-spacing:1px; text-decoration:none;
  transition:background 0.2s,border-color 0.2s;
}
.itin-ig-btn:hover { background:rgba(255,255,255,0.13); border-color:rgba(255,255,255,0.3); }
.itin-ig-btn svg { flex-shrink:0; }
`;