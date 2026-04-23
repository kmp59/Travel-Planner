export type PillVariant = "pill-w" | "pill-a" | "";
export type PillTuple = [label: string, variant: PillVariant];
export type DotColor = "o" | "g" | "r" | "e" | "";
export type TagClass = "t-gl" | "t-ad" | "t-ki" | "t-dr" | "t-hi" | "t-re";
export type TagTuple = [label: string, cls: TagClass];
export type DayClass = "d1" | "d2" | "d3";
export interface EventItem {
    time: string;
    icon: string;
    title: string;
    desc: string;
    pills: PillTuple[];
}

export interface RouteStop {
    dot: DotColor;
    name: string;
    sub: string;
}

export interface FooterTip {
    icon: string;
    label: string;
    text: string;
}

export interface DayData {
    cls: DayClass;
    num: string;
    tabDate: string;
    tabTitle: string;
    date: string;
    title: string;
    sub: string;
    base: string;
    tags: TagTuple[];
    drive: string;
    events: EventItem[];
}