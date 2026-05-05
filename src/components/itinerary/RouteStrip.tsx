import type { FC } from "react";
import type { RouteStop } from "../../types/types";

interface RouteStripProps {
    stops: RouteStop[];
    prefix?: string;
}

const RouteStrip: FC<RouteStripProps> = ({ stops, prefix = "rm" }) => (
    <div className={`${prefix}-route-wrap`}>
        <div className={`${prefix}-route-label`}>Full Trip Route</div>
        <div className={`${prefix}-route`}>
            {stops.map((s, i) => (
                <div key={s.name} className={`${prefix}-rs`}>
                    <div className={`${prefix}-rs-dot${s.dot ? ` ${s.dot}` : ""}`} />
                    <div className={`${prefix}-rs-info`}>
                        <div className={`${prefix}-rs-name`}>{s.name}</div>
                        <div className={`${prefix}-rs-sub`}>{s.sub}</div>
                    </div>
                    {i < stops.length - 1 && <div className={`${prefix}-rs-line`} />}
                </div>
            ))}
        </div>
    </div>
);

export default RouteStrip;