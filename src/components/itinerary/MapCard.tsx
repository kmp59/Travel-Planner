import type { FC } from "react";
import { MAP_SRC } from "../../data/data.ts";

const MapCard: FC = () => (
    <div className="rm-map-card">
        <div className="rm-map-hdr">
            <div className="rm-map-dot" />
            <span className="rm-map-t">Interactive Route Map</span>
            <span className="rm-map-km">
            · ~700 km
      </span>
        </div>
        <iframe
            className="rm-map-frame"
            title="Rocky Mountain Route"
            src={MAP_SRC}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    </div>
);

export default MapCard;