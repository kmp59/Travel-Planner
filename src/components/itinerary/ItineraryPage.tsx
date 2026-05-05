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
    mapApiKey: string;
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
                                                   mapApiKey,
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

    useEffect(() => {
        const bar = tabBarRef.current;
        const tab = activeTabRef.current;
        if (!bar || !tab) return;
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
                prefix={prefix}
            />

            <div className={`${prefix}-scroll`}>
                <div className={`${prefix}-inner`}>
                    <div className={`${prefix}-body`}>
                        <div className={`${prefix}-left`}>
                            <MapCard
                                pins={resolvePins(days[active].mapPins)}
                                title={mapTitle}
                                distanceLabel={mapDistanceLabel}
                                apiKey={mapApiKey}
                                prefix={prefix}
                            />
                        </div>
                        <div className={`${prefix}-right`}>
                            <div className={`${prefix}-sec`}>{sectionLabel(active)}</div>
                            <DayCard key={active} day={days[active]} prefix={prefix} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer tips={footerTips} brand={footerBrand} prefix={prefix} />
        </div>
    );
};

export default ItineraryPage;