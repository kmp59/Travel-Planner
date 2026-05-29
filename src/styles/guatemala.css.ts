import { buildThemeCss } from "./theme.css";

const guatemalaCss = `
/* ── Guatemala: CSS custom properties ── */
.gt {
  background:#0d1c16; color:#f0ece4;
  --bg:           #0d1c16;
  --text:         #f8f5f0;
  --accent:       #5dbfa0;
  --accent-rgb:   45,138,110;
  --accent-bright:#a8dfc8;
  --accent-mid:   #98c8b0;
  --accent-dim:   #6a9e88;
  --tlab:         #7fbfa4;
  --edesc:        #cce8dc;
  --pill-color:   #7fbfa4;
  --dbase:        #d4a040;
  --tabs-bar-bg:  rgba(10,22,14,.97);
  --map-hdr-bg:   rgba(14,30,18,.97);
  --map-filter:   saturate(.9) brightness(.9);
  --route-bg:     linear-gradient(90deg,transparent 0%,rgba(5,14,10,.70) 20%,rgba(5,14,10,.70) 80%,transparent 100%);
  --drive-bg:     rgba(232,184,75,.09);
  --drive-border: 1px solid rgba(232,184,75,.25);
  --drive-color:  #e8b84b;
  --dot-o: #e8b84b;
  --dot-g: #2d8a6e;
  --dot-r: #c0392b;
  --dot-e: #8e6bbf;
}

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

/* ── Tab active indicators (per-tab colours) ── */
.gt .itin-tab:nth-child(1).active::after { background:#2d8a6e; }
.gt .itin-tab:nth-child(2).active::after { background:#4a90c4; }
.gt .itin-tab:nth-child(3).active::after { background:#c0392b; }
.gt .itin-tab:nth-child(4).active::after { background:#8e6bbf; }
.gt .itin-tab:nth-child(5).active::after { background:#2d8a6e; }
.gt .itin-tab:nth-child(6).active::after { background:#e8b84b; }
.gt .itin-tab:nth-child(7).active::after { background:#c0392b; }

/* ── Day card top-border colours ── */
@keyframes gtIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
.gt .itin-day    { animation:gtIn .28s ease forwards; }
.gt .itin-day.d1 { border-top:3px solid #2d8a6e; }
.gt .itin-day.d2 { border-top:3px solid #4a90c4; }
.gt .itin-day.d3 { border-top:3px solid #c0392b; }
.gt .itin-day.d4 { border-top:3px solid #8e6bbf; }
.gt .itin-day.d5 { border-top:3px solid #2d8a6e; }
.gt .itin-day.d6 { border-top:3px solid #e8b84b; }
.gt .itin-day.d7 { border-top:3px solid #c0392b; }

/* ── Tag colours (Guatemala) ── */
.gt .t-gl { background:rgba(74,144,196,.2);   border:1px solid rgba(74,144,196,.5);  color:#a8d4f0; }
.gt .t-ad { background:rgba(192,57,43,.2);    border:1px solid rgba(192,57,43,.5);   color:#f0a898; }
.gt .t-dr { background:rgba(232,184,75,.2);   border:1px solid rgba(232,184,75,.5);  color:#f4d080; }
.gt .t-hi { background:rgba(45,138,110,.3);   border:1px solid rgba(45,138,110,.6);  color:#90dfbc; }
.gt .t-re { background:rgba(74,144,196,.15);  border:1px solid rgba(74,144,196,.4);  color:#a0ccec; }
.gt .t-cu { background:rgba(232,184,75,.18);  border:1px solid rgba(232,184,75,.45); color:#f0cc78; }
.gt .t-fo { background:rgba(45,138,110,.18);  border:1px solid rgba(45,138,110,.45); color:#80cfac; }

/* ── Timeline column widths (Guatemala-specific) ── */
.gt .itin-tb { display:grid; grid-template-columns:80px 1fr; gap:0 11px; }
@media(min-width:500px){ .gt .itin-tb { grid-template-columns:90px 1fr; gap:0 15px; } }
@media(min-width:800px){ .gt .itin-tb { grid-template-columns:96px 1fr; gap:0 18px; } }
`;

export const guatemalaFullCss = buildThemeCss(guatemalaCss);