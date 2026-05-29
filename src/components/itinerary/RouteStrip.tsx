import type { FC } from "react";
import type { RouteStop } from "../../types/types";

interface RouteStripProps {
    stops: RouteStop[];
}

const RouteStrip: FC<RouteStripProps> = ({ stops }) => (
    <div className="itin-route-wrap">
        <div className="itin-route-label">Full Trip Route</div>
        <div className="itin-route">
            {stops.map((s, i) => (
                <div key={s.name} className="itin-rs">
                    <div className={`itin-rs-dot${s.dot ? ` ${s.dot}` : ""}`} />
                    <div className="itin-rs-info">
                        <div className="itin-rs-name">{s.name}</div>
                        <div className="itin-rs-sub">{s.sub}</div>
                    </div>
                    {i < stops.length - 1 && <div className="itin-rs-line" />}
                </div>
            ))}
        </div>
    </div>
);

export default RouteStrip;