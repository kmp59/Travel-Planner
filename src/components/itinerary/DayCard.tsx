import type { FC } from "react";
import type { DayData } from "../../types/types";
import DayHeader from "./DayHeader";
import Timeline from "./Timeline";

interface DayCardProps {
    day: DayData;
    prefix?: string;
}

const DayCard: FC<DayCardProps> = ({ day, prefix = "rm" }) => (
    <div className={`${prefix}-day ${day.cls}`}>
        <DayHeader
            num={day.num}
            date={day.date}
            title={day.title}
            sub={day.sub}
            base={day.base}
            tags={day.tags}
            prefix={prefix}
        />
        <div className={`${prefix}-drive`}>{day.drive}</div>
        <Timeline events={day.events} prefix={prefix} />
    </div>
);

export default DayCard;