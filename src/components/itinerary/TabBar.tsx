import type { FC, RefObject } from "react";
import { DAYS } from "../../data/data.ts";

interface TabBarProps {
    active: number;
    onTabClick: (i: number) => void;
    tabBarRef: RefObject<HTMLDivElement>;
    activeTabRef: RefObject<HTMLButtonElement>;
}

const TabBar: FC<TabBarProps> = ({ active, onTabClick, tabBarRef, activeTabRef }) => (
    <div className="rm-tabs-bar">
        <div className="rm-tabs" ref={tabBarRef}>
            {DAYS.map((d, i) => (
                <button
                    key={d.cls}
                    ref={active === i ? activeTabRef : null}
                    className={`rm-tab${active === i ? " active" : ""}`}
                    onClick={() => onTabClick(i)}
                >
                    <span className="rm-tab-date">Day {i + 1} · {d.tabDate}</span>
                    <span className="rm-tab-title">{d.tabTitle}</span>
                </button>
            ))}
        </div>
    </div>
);

export default TabBar;