import type { FC } from "react";
import { guatemalaFullCss } from "../styles/guatemala.css";
import { GT_DAYS, GT_ROUTE_STOPS, GT_FOOTER_TIPS, getPins } from "../data/guatemala.data.ts";
import ItineraryPage from "../components/itinerary/ItineraryPage";
import RouteStrip from "../components/itinerary/RouteStrip";

const BADGES = [
    "7 Days",
    "Base: Antigua Guatemala",
    "Base: Lake Atitlán",
    "Acatenango Volcano",
] as const;

const GtHero: FC = () => (
    <div className="itin-hero">
        <div className="gt-hero-bg" />
        <div className="gt-volcano-shape">
            <div className="gt-volcano-fill" />
            <div className="gt-volcano-glow" />
        </div>
        <div className="itin-hero-inner">
            <p className="itin-eyebrow">Guatemala · 7-Day Itinerary</p>
            <h1>Colonial <em>Cobblestones</em> &amp; <em>Volcanic</em> Shores</h1>
            <p className="itin-subtitle">Antigua Guatemala · Lake Atitlán · Acatenango</p>
            <div className="itin-badges">
                {BADGES.map((b) => (
                    <span key={b} className="itin-badge">{b}</span>
                ))}
            </div>
        </div>
        <RouteStrip stops={GT_ROUTE_STOPS} />
    </div>
);

const GuatemalaItinerary: FC = () => (
    <ItineraryPage
        days={GT_DAYS}
        css={guatemalaFullCss}
        prefix="gt"
        resolvePins={getPins}
        mapTitle="Guatemala Route"
        mapDistanceLabel="Antigua Guatemala → Lake Atitlán · ~120 km"
        footerTips={GT_FOOTER_TIPS}
        footerBrand="Guatemala Adventure · 7 Days"
        hero={<GtHero />}
        sectionLabel={(i) => `${GT_DAYS[i].tabDate} — ${GT_DAYS[i].title}`}
    />
);

export default GuatemalaItinerary;