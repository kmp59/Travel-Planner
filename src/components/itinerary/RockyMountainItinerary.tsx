import { useState, useRef, useEffect } from "react";
import type { FC, RefObject } from "react";
import { css } from "../../styles/styles.ts";
import { DAYS } from "../../data/data.ts";
import Hero from "../layout/Hero.tsx";
import TabBar from "./TabBar.tsx";
import MapCard from "./MapCard.tsx";
import DayCard from "./DayCard.tsx";
import Footer from "../layout/Footer.tsx";

const RockyMountainItinerary: FC = () => {
    const [active, setActive] = useState<number>(0);
    const tabBarRef    = useRef<HTMLDivElement>(null);
    const activeTabRef = useRef<HTMLButtonElement>(null);

    // Centre the active tab inside the horizontally-scrollable tab bar
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
    };

    // .rm is the ONE scroll container (height:100vh, overflow-y:auto).
    // Hero lives inside it and scrolls away naturally.
    // TabBar has position:sticky; top:0 — sticky works because the scroll
    // container IS .rm itself, so there are no ancestor overflow issues.
    // The content below the tab bar scrolls within the same container.
    return (
        <div className="rm">
            <style>{css}</style>

            {/* Scrolls away as user scrolls down */}
            <Hero />

            {/* Sticks to top of .rm once hero scrolls out of view */}
            <TabBar
                active={active}
                onTabClick={handleTab}
                tabBarRef={tabBarRef as RefObject<HTMLDivElement>}
                activeTabRef={activeTabRef as RefObject<HTMLButtonElement>}
            />

            {/* Content below the sticky tab bar */}
            <div className="rm-main">
                <div className="rm-inner">
                    <div className="rm-content-grid">
                        <div className="rm-map-col">
                            <MapCard />
                        </div>
                        <div className="rm-itinerary-col">
                            <div className="rm-sec">
                                Day {active + 1} of 3 — {DAYS[active].date}
                            </div>
                            <DayCard key={active} day={DAYS[active]} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default RockyMountainItinerary;