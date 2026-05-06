import { sharedCss } from "./shared.css";

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

/* ── Tag colours (Guatemala) ── */
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

// Composed export — GuatemalaPage imports this
export const guatemalaFullCss = sharedCss + guatemalaCss;