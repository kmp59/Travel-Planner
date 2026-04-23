import type { FC } from "react";
import type { EventItem } from "../../types/types.ts";
import EventRow from "./EventRow";

interface TimelineProps {
    events: EventItem[];
}

const Timeline: FC<TimelineProps> = ({ events }) => (
    <div className="rm-tl">
        {events.map((ev, i) => (
            <EventRow key={ev.time} {...ev} isLast={i === events.length - 1} />
        ))}
    </div>
);

export default Timeline;