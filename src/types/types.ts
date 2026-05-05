export type PillVariant = "pill-w" | "pill-a" | "";
export type PillTuple = [label: string, variant: PillVariant];
export type DotColor = "o" | "g" | "r" | "e" | "";
export type TagClass =
    | "t-gl" | "t-ad" | "t-ki" | "t-dr" | "t-hi" | "t-re"
    | "t-cu" | "t-fo" | "t-bo";
export type TagTuple = [label: string, cls: TagClass];
export type DayClass = "d1" | "d2" | "d3" | "d4" | "d5" | "d6" | "d7" | "d8";
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
    mapPins: string[]
}

export type MapPinIcon = "airport" | "volcano" | "village" | "landmark" | "activity";

export interface MapPin {
    key:   string;
    label: string;
    lat:   number;
    lng:   number;
    icon?: MapPinIcon;
}