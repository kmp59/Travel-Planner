import type { FC } from "react";
import { ROUTE_STOPS } from "../../data/banff.data.ts";
import RouteStrip from "../itinerary/RouteStrip";

const BADGES = [
    "June 17–19, 2025",
    "Checkout: Canmore",
    "Base: Golden, BC",
    "Flight: Jun 20 · 7 AM YYC",
] as const;

const Hero: FC = () => (
    <div className="itin-hero">
        <div className="rm-hero-bg" />
        <div className="rm-mtn">
            <div className="rm-mtn-fill" />
            <div className="rm-mtn-snow" />
        </div>
        <div className="itin-hero-inner">
            <p className="itin-eyebrow">Canadian Rockies · 3-Day Itinerary</p>
            <h1>Wild <em>Peaks</em> &amp; <em>Glacial</em> Waters</h1>
            <p className="itin-subtitle">Columbia Icefield · Yoho · Glacier NP · Kootenay</p>
            <div className="itin-badges">
                {BADGES.map((b) => (
                    <span key={b} className="itin-badge">{b}</span>
                ))}
            </div>
        </div>
        <RouteStrip stops={ROUTE_STOPS} />
    </div>
);

export default Hero;