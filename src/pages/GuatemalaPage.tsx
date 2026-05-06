import type { FC } from "react";
import PasswordGate from "../components/auth/PasswordGate";
import { guatemalaFullCss } from "../styles/guatemala.css";
import {
    GT_DAYS,
    GT_ROUTE_STOPS,
    GT_FOOTER_TIPS,
    getPins,
} from "../data/guatemala.data.ts";
import ItineraryPage from "../components/itinerary/ItineraryPage";
import RouteStrip from "../components/itinerary/RouteStrip";

// ─── Hero ─────────────────────────────────────────────────────────────────────

const BADGES = [
    "7 Days",
    "Base: Antigua Guatemala",
    "Base: Lake Atitlán",
    "Acatenango Volcano",
] as const;

const GtHero: FC = () => (
    <div className="gt-hero">
        <div className="gt-hero-bg" />
        <div className="gt-volcano-shape">
            <div className="gt-volcano-fill" />
            <div className="gt-volcano-glow" />
        </div>
        <div className="gt-hero-inner">
            <p className="gt-eyebrow">Guatemala · 7-Day Itinerary</p>
            <h1>Colonial <em>Cobblestones</em> &amp; <em>Volcanic</em> Shores</h1>
            <p className="gt-subtitle">Antigua Guatemala · Lake Atitlán · Acatenango</p>
            <div className="gt-badges">
                {BADGES.map((b) => (
                    <span key={b} className="gt-badge">{b}</span>
                ))}
            </div>
        </div>
        <RouteStrip stops={GT_ROUTE_STOPS} prefix="gt" />
    </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const GuatemalaItinerary: FC = () => (
    <PasswordGate
        storageKey="auth_guatemala"
        password={import.meta.env.VITE_GUATEMALA_PASSWORD ?? ''}
        label="Guatemala Itinerary"
        accentColor="#5dbfa0"
    >
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
    </PasswordGate>
);

export default GuatemalaItinerary;