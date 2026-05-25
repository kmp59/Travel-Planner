import type { FC } from "react";
import type { DayData, TagTuple, EventItem } from "../../types/types";
import Pill from "../common/Pill";

// ─── DayHeader ────────────────────────────────────────────────────────────────

interface DayHeaderProps {
    num: string;
    date: string;
    title: string;
    sub: string;
    base: string;
    tags: TagTuple[];
    prefix?: string;
}

const DayHeader: FC<DayHeaderProps> = ({ num, date, title, sub, base, tags, prefix = "rm" }) => (
    <div className={`${prefix}-dhdr`}>
        <div className={`${prefix}-dhdr-top`}>
            <div className={`${prefix}-dnum`}>{num}</div>
            <div className={`${prefix}-dmeta`}>
                <div className={`${prefix}-ddate`}>{date}</div>
                <div className={`${prefix}-dtitle`}>{title}</div>
                <div className={`${prefix}-dsub`}>{sub}</div>
                <div className={`${prefix}-dbase`}>{base}</div>
            </div>
        </div>
        <div className={`${prefix}-dtags`}>
            {tags.map(([label, cls]) => (
                <span key={label} className={`tag ${cls}`}>{label}</span>
            ))}
        </div>
    </div>
);

// ─── EventRow ─────────────────────────────────────────────────────────────────

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

// ─── Timeline ─────────────────────────────────────────────────────────────────

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

// ─── DayCard (public export) ──────────────────────────────────────────────────

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