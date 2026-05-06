import { sharedCss } from "./shared.css";

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

// Composed export — BanffPage imports this
export const css = sharedCss + rockiesCss;