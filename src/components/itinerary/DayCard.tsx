import type { FC } from "react";
import type { DayData } from "../../types/types.ts";
import DayHeader from "./DayHeader";
import DriveBanner from "./DriveBanner";
import Timeline from "./Timeline";

interface DayCardProps {
    day: DayData;
}

const DayCard: FC<DayCardProps> = ({ day }) => (
    <div className={`rm-day ${day.cls}`}>
        <DayHeader
            num={day.num}
            date={day.date}
            title={day.title}
            sub={day.sub}
            base={day.base}
            tags={day.tags}
        />
        <DriveBanner text={day.drive} />
        <Timeline events={day.events} />
    </div>
);

export default DayCard;