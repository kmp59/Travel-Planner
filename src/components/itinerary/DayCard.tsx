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
}

const DayHeader: FC<DayHeaderProps> = ({ num, date, title, sub, base, tags }) => (
    <div className="itin-dhdr">
        <div className="itin-dhdr-top">
            <div className="itin-dnum">{num}</div>
            <div className="itin-dmeta">
                <div className="itin-ddate">{date}</div>
                <div className="itin-dtitle">{title}</div>
                <div className="itin-dsub">{sub}</div>
                <div className="itin-dbase">{base}</div>
            </div>
        </div>
        <div className="itin-dtags">
            {tags.map(([label, cls]) => (
                <span key={label} className={`tag ${cls}`}>{label}</span>
            ))}
        </div>
    </div>
);

// ─── EventRow ─────────────────────────────────────────────────────────────────

interface EventRowProps extends EventItem {
    isLast: boolean;
}

const EventRow: FC<EventRowProps> = ({ time, icon, title, desc, pills, isLast }) => (
    <div className="itin-tb">
        <div className="itin-tc">
            <span className="itin-tlab">{time}</span>
            <div className="itin-tdot" />
            {!isLast && <div className="itin-tbar" />}
        </div>
        <div className="itin-ec">
            <div className="itin-etit">{icon} {title}</div>
            <div className="itin-edesc">{desc}</div>
            <div className="itin-pills">
                {pills.map(([label, variant]) => (
                    <Pill key={label} label={label} variant={variant} />
                ))}
            </div>
        </div>
    </div>
);

// ─── Timeline ─────────────────────────────────────────────────────────────────

interface TimelineProps {
    events: EventItem[];
}

const Timeline: FC<TimelineProps> = ({ events }) => (
    <div className="itin-tl">
        {events.map((ev, i) => (
            <EventRow key={ev.time + String(i)} {...ev} isLast={i === events.length - 1} />
        ))}
    </div>
);

// ─── DayCard (public export) ──────────────────────────────────────────────────

interface DayCardProps {
    day: DayData;
}

const DayCard: FC<DayCardProps> = ({ day }) => (
    <div className={`itin-day ${day.cls}`}>
        <DayHeader
            num={day.num}
            date={day.date}
            title={day.title}
            sub={day.sub}
            base={day.base}
            tags={day.tags}
        />
        <div className="itin-drive">{day.drive}</div>
        <Timeline events={day.events} />
    </div>
);

export default DayCard;