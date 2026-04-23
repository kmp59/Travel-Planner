import type { FC } from "react";
import { ROUTE_STOPS } from "../../data/data.ts";

const RouteStrip: FC = () => (
    <>
        <div className="rm-sec">Full Trip Route</div>
        <div className="rm-route">
            {ROUTE_STOPS.map((s, i) => (
                <div key={s.name} className="rs">
                    <div className={`rs-dot${s.dot ? ` ${s.dot}` : ""}`} />
                    <div className="rs-info">
                        <div className="rs-name">{s.name}</div>
                        <div className="rs-sub">{s.sub}</div>
                    </div>
                    {i < ROUTE_STOPS.length - 1 && <div className="rs-line" />}
                </div>
            ))}
        </div>
    </>
);

export default RouteStrip;