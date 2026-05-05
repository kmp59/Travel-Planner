import type { FC } from "react";
import type { EventItem } from "../../types/types";
import EventRow from "./EventRow";

interface TimelineProps {
    events: EventItem[];
    prefix?: string;
}

const Timeline: FC<TimelineProps> = ({ events, prefix = "rm" }) => (
    <div className={`${prefix}-tl`}>
        {events.map((ev, i) => (
            <EventRow key={ev.time + String(i)} {...ev} isLast={i === events.length - 1} prefix={prefix} />
        ))}
    </div>
);

export default Timeline;