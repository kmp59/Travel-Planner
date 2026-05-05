import type { FC } from "react";
import type { TagTuple } from "../../types/types";

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

export default DayHeader;