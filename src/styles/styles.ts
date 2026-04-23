export const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,300&family=Space+Mono:wght@400;700&display=swap');

/* ── Global reset ──────────────────────── */
html, body, #root {
  margin:0; padding:0; width:100%; height:100%;
}

:root {
  --ice:#cce5f6; --glacier:#5ba3c9; --deep:#0d1c2a;
  --gold:#c9963a; --dawn:#f0e8dc; --snow:#f7f4f0;

  /* ── Readable body colours ── */
  --text-body:   #d4e8f5;
  --text-sub:    #b8d8ec;
  --text-muted:  #90bdd4;
  --text-mono:   #9ecfde;
  --text-drive:  #f0c278;
  --text-base:   #e8a84a;
}

/* ── Shell — THIS is the scroll container ─
   .rm scrolls. position:sticky on .rm-tabs-bar
   is relative to .rm, so it always works.  */
.rm, .rm * { box-sizing:border-box; margin:0; padding:0; }
.rm {
  height:100vh;
  height:100dvh;
  overflow-y:auto;
  overflow-x:hidden;
  background:var(--deep);
  font-family:'Crimson Pro',Georgia,serif;
  color:var(--dawn);
}

/* ── Hero — scrolls with page ──────────── */
.rm-hero {
  position:relative;
  padding:clamp(32px,6vw,64px) 16px clamp(44px,6vw,64px);
  text-align:center; overflow:hidden;
}
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
.rm-hero-inner { position:relative; z-index:2; }
.rm-eyebrow {
  font-family:'Space Mono',monospace;
  font-size:clamp(12px,1.8vw,14px); letter-spacing:3px; text-transform:uppercase;
  color:var(--glacier); margin-bottom:12px;
}
.rm-hero h1 {
  font-family:'Playfair Display',serif;
  font-size:clamp(2rem,6vw,4.4rem);
  font-weight:900; line-height:1; color:var(--snow); margin-bottom:10px;
}
.rm-hero h1 em { font-style:italic; color:var(--ice); }
.rm-subtitle {
  font-style:italic; font-size:clamp(1.1rem,2.4vw,1.3rem);
  color:var(--text-sub); margin-bottom:18px;
}
.rm-badges { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-bottom:28px; }
.rm-badge {
  background:rgba(91,163,201,.14); border:1px solid rgba(91,163,201,.35);
  border-radius:100px; padding:6px 16px;
  font-family:'Space Mono',monospace;
  font-size:clamp(11px,1.6vw,13px); letter-spacing:1px; color:var(--ice);
}

/* ── Route strip inside hero ───────────── */
.rm-hero-route-label {
  font-family:'Space Mono',monospace; font-size:13px;
  letter-spacing:3px; text-transform:uppercase;
  color:var(--glacier); margin-bottom:12px;
  display:flex; align-items:center; gap:10px;
  max-width:900px; margin-left:auto; margin-right:auto;
}
.rm-hero-route-label::after {
  content:''; flex:1; height:1px;
  background:linear-gradient(90deg,rgba(91,163,201,.4),transparent);
}
.rm-hero-route {
  max-width:1100px; margin:0 auto;
  background:rgba(0,0,0,.18); border-color:rgba(91,163,201,.2);
  justify-content:center; flex-wrap:nowrap;
  gap:0;
}
.rm-hero-route .rs-line { width:clamp(16px,4vw,48px); }
.rm-hero-route .rs-info { padding:0 10px; }

/* ── Sticky tab bar ────────────────────── */
.rm-tabs-bar {
  position:sticky; top:0; z-index:100;
  background:rgba(10,22,34,.97);
  backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
  border-bottom:1px solid rgba(255,255,255,.09);
  width:100%;
}
.rm-tabs {
  display:flex; max-width:1300px; margin:0 auto;
  overflow-x:auto; scrollbar-width:none;
  -webkit-overflow-scrolling:touch;
  padding:0 8px;
}
.rm-tabs::-webkit-scrollbar { display:none; }
.rm-tab {
  flex-shrink:0;
  padding:12px 20px 14px;
  font-family:'Playfair Display',serif; font-weight:700;
  color:rgba(255,255,255,.38); background:none; border:none;
  cursor:pointer; position:relative;
  display:flex; flex-direction:column; align-items:flex-start; gap:3px;
  border-radius:7px 7px 0 0;
  transition:color .18s,background .18s;
  -webkit-tap-highlight-color:transparent;
  text-align:left; min-width:0;
}
.rm-tab:hover  { color:rgba(255,255,255,.7); background:rgba(255,255,255,.04); }
.rm-tab.active { color:var(--snow);          background:rgba(255,255,255,.06); }
.rm-tab.active::after {
  content:''; position:absolute; bottom:-1px; left:0; right:0; height:2px;
}
.rm-tab:nth-child(1).active::after { background:#5ba3c9; }
.rm-tab:nth-child(2).active::after { background:#4a8c5c; }
.rm-tab:nth-child(3).active::after { background:#c9963a; }
.rm-tab-date {
  font-family:'Space Mono',monospace; font-size:12px;
  letter-spacing:2px; text-transform:uppercase; opacity:.75; font-weight:400;
}
.rm-tab-title { font-size:clamp(1.05rem,2.4vw,1.15rem); line-height:1.2; }

/* ── Main content (normal page flow) ──── */
.rm-main { width:100%; }
.rm-inner {
  max-width:1300px; margin:0 auto;
  padding:0 16px 64px;
}

/* ── Two-column content grid ───────────── */
.rm-content-grid {
  display:grid;
  grid-template-columns:1fr;
  gap:0;
  align-items:start;
  padding-top:24px;
}
@media(min-width:860px){
  .rm-content-grid {
    grid-template-columns:480px 1fr;
    gap:28px;
  }
}
@media(min-width:1100px){
  .rm-content-grid {
    grid-template-columns:520px 1fr;
    gap:36px;
  }
}

/* Map column — sticky on desktop */
.rm-map-col { }
@media(min-width:860px){
  .rm-map-col {
    position:sticky;
    top:calc(56px + 16px); /* tab bar height + gap */
  }
}

.rm-itinerary-col { min-width:0; }

/* ── Section label ─────────────────────── */
.rm-sec {
  font-family:'Space Mono',monospace; font-size:13px;
  letter-spacing:3px; text-transform:uppercase;
  color:var(--glacier); margin-bottom:14px; padding-top:4px;
  display:flex; align-items:center; gap:10px;
}
.rm-sec::after {
  content:''; flex:1; height:1px;
  background:linear-gradient(90deg,rgba(91,163,201,.4),transparent);
}

/* ── Route strip (shared styles) ───────── */
.rm-route {
  background:rgba(255,255,255,.04); border:1px solid rgba(91,163,201,.15);
  border-radius:12px; padding:14px 16px;
  display:flex; align-items:center; margin-bottom:20px;
  overflow-x:auto; -webkit-overflow-scrolling:touch; scrollbar-width:none;
}
.rm-route::-webkit-scrollbar { display:none; }
.rs       { display:flex; align-items:center; flex-shrink:0; }
.rs-dot   { width:9px; height:9px; border-radius:50%; border:2px solid var(--glacier); background:var(--deep); flex-shrink:0; }
.rs-dot.o { border-color:#c9963a; }
.rs-dot.g { border-color:#4a8c5c; }
.rs-dot.r { border-color:#b85c38; }
.rs-dot.e { border-color:#9b5de5; background:#9b5de5; }
.rs-line  { width:clamp(12px,3vw,32px); height:1px; background:rgba(91,163,201,.25); flex-shrink:0; }
.rs-info  { padding:0 8px; }
.rs-name  { font-family:'Space Mono',monospace; font-size:12px; letter-spacing:.8px; color:var(--ice); white-space:nowrap; }
.rs-sub   { font-size:1rem; color:var(--text-muted); font-style:italic; white-space:nowrap; margin-top:3px; }

/* ── Map card ──────────────────────────── */
.rm-map-card { border-radius:14px; overflow:hidden; border:1px solid rgba(91,163,201,.18); margin-bottom:0; }
.rm-map-hdr  {
  background:rgba(20,40,58,.97); padding:13px 18px;
  display:flex; align-items:center; gap:10px;
  flex-wrap:nowrap;
  border-bottom:1px solid rgba(91,163,201,.12);
}
.rm-map-dot  { width:9px; height:9px; border-radius:50%; background:var(--glacier); flex-shrink:0; }
.rm-map-t    { font-family:'Space Mono',monospace; font-size:13px; letter-spacing:1px; color:#9bbfd4; white-space:nowrap; }
.rm-map-km   { font-family:'Space Mono',monospace; font-size:12px; color:#5ba3c9; margin-left:auto; white-space:nowrap; }
.rm-map-frame {
  width:100%;
  height:clamp(280px,55vw,580px);
  border:0; display:block; filter:saturate(.88) brightness(.92);
}
@media(min-width:860px){
  .rm-map-frame { height:clamp(440px,62vh,720px); }
}

/* ── Day card ──────────────────────────── */
.rm-day {
  background:rgba(255,255,255,.035); border:1px solid rgba(255,255,255,.07);
  border-radius:14px; overflow:hidden; margin-top:0;
  animation:rmIn .28s ease forwards;
}
@keyframes rmIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
.rm-day.d1 { border-top:3px solid #5ba3c9; }
.rm-day.d2 { border-top:3px solid #4a8c5c; }
.rm-day.d3 { border-top:3px solid #c9963a; }

.rm-dhdr { padding:18px 16px 14px; border-bottom:1px solid rgba(255,255,255,.06); }
.rm-dhdr-top { display:flex; align-items:flex-start; gap:14px; }
.rm-dnum {
  font-family:'Playfair Display',serif;
  font-size:clamp(2.4rem,7vw,3.6rem); font-weight:900; line-height:1;
  color:transparent; -webkit-text-stroke:1.5px rgba(91,163,201,.35);
  flex-shrink:0; align-self:center;
}
.rm-dmeta  { flex:1; min-width:0; }
.rm-ddate  { font-family:'Space Mono',monospace; font-size:13px; letter-spacing:2px; color:var(--glacier); margin-bottom:6px; }
.rm-dtitle { font-family:'Playfair Display',serif; font-size:clamp(1.2rem,3.8vw,1.6rem); font-weight:700; color:var(--snow); line-height:1.2; }
.rm-dsub   { font-style:italic; color:var(--text-sub); font-size:clamp(1.05rem,2.3vw,1.15rem); margin-top:5px; }
.rm-dbase  { font-family:'Space Mono',monospace; font-size:12px; letter-spacing:.6px; color:var(--text-base); margin-top:10px; line-height:1.8; }
.rm-dtags  { display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; }

.tag  { font-family:'Space Mono',monospace; font-size:11px; letter-spacing:.6px; padding:5px 13px; border-radius:100px; white-space:nowrap; }
.t-gl { background:rgba(200,230,245,.14); border:1px solid rgba(200,230,245,.32); color:#d6eefa; }
.t-ad { background:rgba(91,163,201,.22);  border:1px solid rgba(91,163,201,.55);  color:#b8dcf4; }
.t-ki { background:rgba(180,100,200,.22); border:1px solid rgba(180,100,200,.45); color:#e0b8f8; }
.t-dr { background:rgba(184,92,56,.22);   border:1px solid rgba(184,92,56,.5);    color:#f0a882; }
.t-hi { background:rgba(45,92,63,.45);    border:1px solid rgba(45,92,63,.75);    color:#96dfb8; }
.t-re { background:rgba(201,150,58,.22);  border:1px solid rgba(201,150,58,.55);  color:#f4cc7a; }

.rm-drive {
  margin:0 16px 6px;
  background:rgba(201,150,58,.1); border:1px solid rgba(201,150,58,.28);
  border-radius:8px; padding:12px 16px;
  font-family:'Space Mono',monospace; font-size:12px; letter-spacing:.3px;
  color:var(--text-drive); line-height:1.9;
}

/* ── Timeline ──────────────────────────── */
.rm-tl   { padding:0 14px 18px; }
.rm-tb   { display:grid; grid-template-columns:72px 1fr; gap:0 12px; }
.rm-tc   { display:flex; flex-direction:column; align-items:center; padding-top:20px; }
.rm-tlab { font-family:'Space Mono',monospace; font-size:12px; color:var(--text-mono); letter-spacing:.3px; white-space:nowrap; }
.rm-tdot { width:8px; height:8px; border-radius:50%; border:1.5px solid var(--glacier); background:var(--deep); margin-top:-3px; flex-shrink:0; }
.rm-tbar { width:1px; flex:1; min-height:14px; background:linear-gradient(180deg,rgba(91,163,201,.35),rgba(91,163,201,.03)); margin-top:5px; }
.rm-ec   { padding:20px 0 8px; border-bottom:1px solid rgba(255,255,255,.05); }
.rm-tb:last-child .rm-ec { border-bottom:none; }
.rm-etit {
  font-family:'Playfair Display',serif;
  font-size:clamp(1.1rem,3.2vw,1.3rem); font-weight:700;
  color:var(--snow); margin-bottom:8px; line-height:1.25;
}
.rm-edesc {
  font-size:clamp(1.05rem,2.6vw,1.15rem);
  color:var(--text-body);
  line-height:1.75;
  margin-bottom:12px;
}
.rm-pills { display:flex; flex-wrap:wrap; gap:6px; }
.pill {
  font-family:'Space Mono',monospace; font-size:11px; letter-spacing:.5px;
  padding:5px 13px; border-radius:100px;
  background:rgba(255,255,255,.07); color:#9ec8de;
  border:1px solid rgba(255,255,255,.1);
}
.pill-w { background:rgba(201,150,58,.15); color:#f0c278; border-color:rgba(201,150,58,.35); }
.pill-a { background:rgba(184,92,56,.18);  color:#f4a07a; border-color:rgba(184,92,56,.4); }

/* ── Footer ────────────────────────────── */
.rm-footer {
  margin-top:48px; border-top:1px solid rgba(255,255,255,.08); padding-top:24px;
  display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:18px;
  text-align:center;
}
.rm-ft { display:flex; flex-direction:column; align-items:center; gap:8px; text-align:center; }
.rm-fi { font-size:1.4rem; flex-shrink:0; }
.rm-fx { font-size:clamp(1rem,2.4vw,1.05rem); color:var(--text-muted); line-height:1.7; }
.rm-fx strong { color:var(--text-sub); font-weight:600; }
.rm-fbrand {
  font-family:'Playfair Display',serif; font-style:italic;
  font-size:1rem; color:rgba(91,163,201,.35);
  text-align:center; grid-column:1/-1;
  padding-top:10px; border-top:1px solid rgba(255,255,255,.05);
}

/* ── Responsive tweaks ─────────────────── */
@media(min-width:500px){
  .rm-inner  { padding:0 22px 64px; }
  .rm-tab    { padding:12px 22px 14px; }
  .rm-tb     { grid-template-columns:80px 1fr; gap:0 16px; }
  .rm-tl     { padding:0 22px 22px; }
  .rm-dhdr   { padding:20px 22px 16px; }
  .rm-drive  { margin:0 22px 6px; }
}
@media(min-width:860px){
  .rm-inner  { padding:0 28px 72px; }
  .rm-tab    { padding:13px 24px 15px; }
  .rm-tb     { grid-template-columns:84px 1fr; gap:0 18px; }
  .rm-tl     { padding:0 24px 24px; }
  .rm-dhdr   { padding:24px 24px 18px; }
  .rm-drive  { margin:0 24px 8px; }
}
@media(max-width:480px){ .rm-map-km { display:none; } }
@media(max-width:360px){
  .rm-hero  { padding:22px 10px 36px; }
  .rm-inner { padding:0 10px 44px; }
}
`;