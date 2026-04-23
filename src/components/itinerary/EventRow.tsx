import type { FC } from "react";
import type { EventItem } from "../../types/types.ts";
import Pill from "../Common/Pill.tsx";

interface EventRowProps extends EventItem {
    isLast: boolean;
}

const EventRow: FC<EventRowProps> = ({ time, icon, title, desc, pills, isLast }) => (
    <div className="rm-tb">
        <div className="rm-tc">
            <span className="rm-tlab">{time}</span>
            <div className="rm-tdot" />
            {!isLast && <div className="rm-tbar" />}
        </div>
        <div className="rm-ec">
            <div className="rm-etit">{icon} {title}</div>
            <div className="rm-edesc">{desc}</div>
            <div className="rm-pills">
                {pills.map(([label, variant]) => (
                    <Pill key={label} label={label} variant={variant} />
                ))}
            </div>
        </div>
    </div>
);

export default EventRow;