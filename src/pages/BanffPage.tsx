import ItineraryPage from "../components/itinerary/ItineraryPage";
import Hero from "../components/layout/Hero";
import { DAYS, FOOTER_TIPS, getPins } from "../data/banff.data.ts";
import { css } from "../styles/banff.css";

export default function BanffPage() {
    return (
        <ItineraryPage
            days={DAYS}
            css={css}
            prefix="rm"
            resolvePins={getPins}
            mapTitle="Rocky Mountain Route"
            mapDistanceLabel="· ~700 km"
            footerTips={FOOTER_TIPS}
            footerBrand="Rockies Adventure · June 17–19, 2025"
            hero={<Hero />}
            sectionLabel={(i) => `Day ${i + 1} of 3 — ${DAYS[i].date}`}
        />
    );
}