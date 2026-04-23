import type { FC } from "react";
import { ROUTE_STOPS } from "../../data/data.ts";

const BADGES = [
    "June 17–19, 2025",
    "Checkout: Canmore",
    "Base: Golden, BC",
    "Flight: Jun 20 · 7 AM YYC",
] as const;

const Hero: FC = () => (
    <div className="rm-hero">
        <div className="rm-hero-bg" />
        <div className="rm-mtn">
            <div className="rm-mtn-fill" />
            <div className="rm-mtn-snow" />
        </div>
        <div className="rm-hero-inner">
            <p className="rm-eyebrow">Canadian Rockies · 3-Day Itinerary</p>
            <h1>Wild <em>Peaks</em> &amp; <em>Glacial</em> Waters</h1>
            <p className="rm-subtitle">Columbia Icefield · Yoho · Glacier NP · Kootenay</p>
            <div className="rm-badges">
                {BADGES.map((b) => (
                    <span key={b} className="rm-badge">{b}</span>
                ))}
            </div>
            <div className="rm-hero-route-label">Full Trip Route</div>
            <div className="rm-route rm-hero-route">
                {ROUTE_STOPS.map((s, i) => (
                    <div key={s.name} className="rs">
                        <div className={`rs-dot${s.dot ? ` ${s.dot}` : ""}`} />
                        <div className="rs-info">
                            <div className="rs-name">{s.name}</div>
                            <div className="rs-sub">{s.sub}</div>
                        </div>
                        {i < ROUTE_STOPS.length - 1 && <div className="rs-line" />}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Hero;