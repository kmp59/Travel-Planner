import { buildThemeCss } from "./theme.css";

const rockiesCss = `
/* ── Rockies: CSS custom properties ── */
.rm {
  background:#0d1c2a; color:#f0e8dc;
  --bg:           #0d1c2a;
  --text:         #f7f4f0;
  --accent:       #5ba3c9;
  --accent-rgb:   91,163,201;
  --accent-bright:#cce5f6;
  --accent-mid:   #a8cfe0;
  --accent-dim:   #7baabf;
  --tlab:         #8ec6dd;
  --edesc:        #d4e8f5;
  --pill-color:   #9ec8de;
  --dbase:        #e8a84a;
  --tabs-bar-bg:  rgba(13,28,42,.97);
  --map-hdr-bg:   rgba(20,40,58,.97);
  --map-filter:   saturate(.88) brightness(.92);
  --route-bg:     linear-gradient(90deg,transparent 0%,rgba(5,14,22,.70) 20%,rgba(5,14,22,.70) 80%,transparent 100%);
  --drive-bg:     rgba(201,150,58,.1);
  --drive-border: 1px solid rgba(201,150,58,.28);
  --drive-color:  #f0c278;
  --dot-o: #c9963a;
  --dot-g: #4a8c5c;
  --dot-r: #b85c38;
  --dot-e: #9b5de5;
}

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

/* ── Tab active indicators (per-tab colours) ── */
.rm .itin-tab:nth-child(1).active::after { background:#5ba3c9; }
.rm .itin-tab:nth-child(2).active::after { background:#4a8c5c; }
.rm .itin-tab:nth-child(3).active::after { background:#c9963a; }

/* ── Day card top-border colours ── */
@keyframes rmIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
.rm .itin-day    { animation:rmIn .28s ease forwards; }
.rm .itin-day.d1 { border-top:3px solid #5ba3c9; }
.rm .itin-day.d2 { border-top:3px solid #4a8c5c; }
.rm .itin-day.d3 { border-top:3px solid #c9963a; }

/* ── Tag colours (Rockies) ── */
.rm .t-gl { background:rgba(200,230,245,.14); border:1px solid rgba(200,230,245,.32); color:#d6eefa; }
.rm .t-ad { background:rgba(91,163,201,.22);  border:1px solid rgba(91,163,201,.55);  color:#b8dcf4; }
.rm .t-dr { background:rgba(184,92,56,.22);   border:1px solid rgba(184,92,56,.5);    color:#f0a882; }
.rm .t-hi { background:rgba(45,92,63,.45);    border:1px solid rgba(45,92,63,.75);    color:#96dfb8; }
.rm .t-re { background:rgba(201,150,58,.22);  border:1px solid rgba(201,150,58,.55);  color:#f4cc7a; }

/* ── Timeline column widths (Rockies-specific) ── */
.rm .itin-tb { display:grid; grid-template-columns:64px 1fr; gap:0 11px; }
@media(min-width:500px){ .rm .itin-tb { grid-template-columns:74px 1fr; gap:0 15px; } }
@media(min-width:800px){ .rm .itin-tb { grid-template-columns:80px 1fr; gap:0 18px; } }
`;

export const css = buildThemeCss(rockiesCss);