import type { FC, RefObject } from "react";
import type { DayData } from "../../types/types";

interface TabBarProps {
    days: DayData[];
    active: number;
    onTabClick: (i: number) => void;
    tabBarRef: RefObject<HTMLDivElement>;
    activeTabRef: RefObject<HTMLButtonElement>;
}

const TabBar: FC<TabBarProps> = ({ days, active, onTabClick, tabBarRef, activeTabRef }) => (
    <div className="itin-tabs-bar">
        <div className="itin-tabs" ref={tabBarRef}>
            {days.map((d, i) => (
                <button
                    key={d.cls}
                    ref={active === i ? activeTabRef : null}
                    className={`itin-tab${active === i ? " active" : ""}`}
                    onClick={() => onTabClick(i)}
                >
                    <span className="itin-tab-date">{d.tabDate}</span>
                    <span className="itin-tab-title">{d.tabTitle}</span>
                </button>
            ))}
        </div>
    </div>
);

export default TabBar;