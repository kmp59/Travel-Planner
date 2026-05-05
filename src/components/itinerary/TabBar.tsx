import type { FC, RefObject } from "react";
import type { DayData } from "../../types/types";

interface TabBarProps {
    days: DayData[];
    active: number;
    onTabClick: (i: number) => void;
    tabBarRef: RefObject<HTMLDivElement>;
    activeTabRef: RefObject<HTMLButtonElement>;
    prefix?: string;
}

const TabBar: FC<TabBarProps> = ({ days, active, onTabClick, tabBarRef, activeTabRef, prefix = "rm" }) => (
    <div className={`${prefix}-tabs-bar`}>
        <div className={`${prefix}-tabs`} ref={tabBarRef}>
            {days.map((d, i) => (
                <button
                    key={d.cls}
                    ref={active === i ? activeTabRef : null}
                    className={`${prefix}-tab${active === i ? " active" : ""}`}
                    onClick={() => onTabClick(i)}
                >
                    <span className={`${prefix}-tab-date`}>{d.tabDate}</span>
                    <span className={`${prefix}-tab-title`}>{d.tabTitle}</span>
                </button>
            ))}
        </div>
    </div>
);

export default TabBar;