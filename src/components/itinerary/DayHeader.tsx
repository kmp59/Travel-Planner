import type { FC } from "react";
import type { TagTuple } from "../../types/types.ts";

interface DayHeaderProps {
    num: string;
    date: string;
    title: string;
    sub: string;
    base: string;
    tags: TagTuple[];
}

const DayHeader: FC<DayHeaderProps> = ({ num, date, title, sub, base, tags }) => (
    <div className="rm-dhdr">
        <div className="rm-dhdr-top">
            <div className="rm-dnum">{num}</div>
            <div className="rm-dmeta">
                <div className="rm-ddate">{date}</div>
                <div className="rm-dtitle">{title}</div>
                <div className="rm-dsub">{sub}</div>
                <div className="rm-dbase">{base}</div>
            </div>
        </div>
        <div className="rm-dtags">
            {tags.map(([label, cls]) => (
                <span key={label} className={`tag ${cls}`}>{label}</span>
            ))}
        </div>
    </div>
);

export default DayHeader;