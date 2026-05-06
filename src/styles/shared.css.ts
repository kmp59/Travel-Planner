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
.t-ki, .gt-day .t-ki { background:rgba(180,100,200,.22); border:1px solid rgba(180,100,200,.45); color:#e0b8f8; }
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