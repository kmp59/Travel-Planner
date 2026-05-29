import { useState, useRef, useEffect } from "react";
import type { FC, RefObject, ReactNode } from "react";
import type { DayData, FooterTip, MapPin } from "../../types/types";
import TabBar from "./TabBar";
import MapCard from "./MapCard";
import DayCard from "./DayCard";
import Footer from "../layout/Footer";

interface ItineraryPageProps {
    days: DayData[];
    css: string;
    prefix: string;
    resolvePins: (keys: string[]) => MapPin[];
    mapTitle: string;
    mapDistanceLabel: string;
    footerTips: FooterTip[];
    footerBrand: string;
    hero: ReactNode;
    sectionLabel: (active: number) => string;
}

const ItineraryPage: FC<ItineraryPageProps> = ({
                                                   days,
                                                   css: pageCss,
                                                   prefix,
                                                   resolvePins,
                                                   mapTitle,
                                                   mapDistanceLabel,
                                                   footerTips,
                                                   footerBrand,
                                                   hero,
                                                   sectionLabel,
                                               }) => {
    const [active, setActive] = useState<number>(0);
    const tabBarRef    = useRef<HTMLDivElement>(null);
    const activeTabRef = useRef<HTMLButtonElement>(null);

    // Centre the active tab inside the horizontally-scrollable tab bar.
    // Skip when active === 0 so mobile always starts flush-left on Day 1.
    useEffect(() => {
        const bar = tabBarRef.current;
        const tab = activeTabRef.current;
        if (!bar || !tab) return;
        if (active === 0) {
            bar.scrollTo({ left: 0, behavior: "smooth" });
            return;
        }
        bar.scrollTo({
            left: tab.offsetLeft - bar.offsetWidth / 2 + tab.offsetWidth / 2,
            behavior: "smooth",
        });
    }, [active]);

    const handleTab = (i: number): void => {
        setActive(i);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={prefix}>
            <style>{pageCss}</style>

            {hero}

            <TabBar
                days={days}
                active={active}
                onTabClick={handleTab}
                tabBarRef={tabBarRef as RefObject<HTMLDivElement>}
                activeTabRef={activeTabRef as RefObject<HTMLButtonElement>}
            />

            <div className="itin-inner">
                <div className="itin-body">
                    <div className="itin-left">
                        <MapCard
                            pins={resolvePins(days[active].mapPins)}
                            title={mapTitle}
                            distanceLabel={mapDistanceLabel}
                        />
                    </div>
                    <div className="itin-right">
                        <div className="itin-sec">{sectionLabel(active)}</div>
                        <DayCard key={active} day={days[active]} />
                    </div>
                </div>
            </div>

            <Footer tips={footerTips} brand={footerBrand} />
        </div>
    );
};

export default ItineraryPage;