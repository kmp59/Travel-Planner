import type { FC } from "react";
import type { EventItem } from "../../types/types";
import Pill from "../common/Pill";

interface EventRowProps extends EventItem {
    isLast: boolean;
    prefix?: string;
}

const EventRow: FC<EventRowProps> = ({ time, icon, title, desc, pills, isLast, prefix = "rm" }) => (
    <div className={`${prefix}-tb`}>
        <div className={`${prefix}-tc`}>
            <span className={`${prefix}-tlab`}>{time}</span>
            <div className={`${prefix}-tdot`} />
            {!isLast && <div className={`${prefix}-tbar`} />}
        </div>
        <div className={`${prefix}-ec`}>
            <div className={`${prefix}-etit`}>{icon} {title}</div>
            <div className={`${prefix}-edesc`}>{desc}</div>
            <div className={`${prefix}-pills`}>
                {pills.map(([label, variant]) => (
                    <Pill key={label} label={label} variant={variant} prefix={prefix} />
                ))}
            </div>
        </div>
    </div>
);

export default EventRow;