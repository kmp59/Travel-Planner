import { useEffect, useRef, type FC } from "react";
import type { MapPin } from "../../types/types";

// ─── Minimal inline types for the Maps JS API (no @types/Google Maps needed) ──

interface GLatLng       { lat: number; lng: number }
interface GSize         { width: number; height: number }
interface GPoint        { x: number; y: number }
interface GLatLngBounds { extend(pos: GLatLng): void }
interface GInfoWindow   { setContent(html: string): void; open(map: GMap, marker: GMarker): void }
interface GMarker       { setMap(map: GMap | null): void; addListener(event: string, cb: () => void): void }
interface GMap          {
    setCenter(pos: GLatLng): void;
    setZoom(z: number): void;
    fitBounds(bounds: GLatLngBounds, padding: number): void;
}
interface GMapsNS {
    Map:         new (el: HTMLElement, opts: object) => GMap;
    Marker:      new (opts: object) => GMarker;
    InfoWindow:  new () => GInfoWindow;
    LatLngBounds:new () => GLatLngBounds;
    Size:        new (w: number, h: number) => GSize;
    Point:       new (x: number, y: number) => GPoint;
}

declare global {
    interface Window {
        google: { maps: GMapsNS };
        [key: string]: (() => void) | undefined;
    }
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface MapCardProps {
    pins:          MapPin[];
    title:         string;
    distanceLabel: string;
    apiKey:        string;
    prefix?:       string;
}

// ─── Marker colours by pin icon type ─────────────────────────────────────────

const ICON_COLOUR: Record<string, string> = {
    airport:  "#6366f1",
    volcano:  "#ef4444",
    village:  "#10b981",
    landmark: "#f59e0b",
    activity: "#3b82f6",
};

function pinColour(pin: MapPin): string {
    return ICON_COLOUR[pin.icon ?? "landmark"] ?? "#f59e0b";
}

function makeSvgIcon(colour: string): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36"><path d="M14 0C6.27 0 0 6.27 0 14c0 9.33 14 22 14 22S28 23.33 28 14C28 6.27 21.73 0 14 0z" fill="${colour}" stroke="white" stroke-width="1.5"/><circle cx="14" cy="14" r="6" fill="white"/></svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// ─── Loader — injects the Maps JS API script exactly once ────────────────────

let _mapsReady: Promise<void> | null = null;

function loadMapsApi(apiKey: string): Promise<void> {
    if (window.google?.maps?.Map) return Promise.resolve();
    if (_mapsReady) return _mapsReady;
    _mapsReady = new Promise<void>((resolve, reject) => {
        const callbackName = `_gmapsCb_${Date.now()}`;
        window[callbackName] = () => {
            resolve();
            delete window[callbackName];
        };
        const s = document.createElement("script");
        s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}`;
        s.async = true;
        s.defer = true;
        s.onerror = () => reject(new Error("Maps JS API failed to load"));
        document.head.appendChild(s);
    });
    return _mapsReady;
}

// ─── Component ────────────────────────────────────────────────────────────────

const MapCard: FC<MapCardProps> = ({
                                       pins,
                                       title,
                                       distanceLabel,
                                       apiKey,
                                       prefix = "rm",
                                   }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef       = useRef<GMap | null>(null);
    const markersRef   = useRef<GMarker[]>([]);

    // Mount the map once
    useEffect(() => {
        if (!containerRef.current) return;
        loadMapsApi(apiKey).then(() => {
            if (!containerRef.current || mapRef.current) return;
            const G = window.google.maps;
            const defaultCentre = pins.length > 0
                ? { lat: pins[0].lat, lng: pins[0].lng }
                : { lat: 0, lng: 0 };
            mapRef.current = new G.Map(containerRef.current, {
                zoom:              8,
                center:            defaultCentre,
                mapTypeId:         "terrain",
                mapTypeControl:    false,
                streetViewControl: false,
                fullscreenControl: true,
            });
        }).catch(console.error);
        // apiKey never changes at runtime — intentionally omitted
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Swap markers whenever pins prop changes
    useEffect(() => {
        const G   = window.google?.maps;
        const map = mapRef.current;
        if (!G || !map) return;

        markersRef.current.forEach(m => m.setMap(null));
        markersRef.current = [];

        if (pins.length === 0) return;

        const bounds     = new G.LatLngBounds();
        const infoWindow = new G.InfoWindow();

        pins.forEach(pin => {
            const pos = { lat: pin.lat, lng: pin.lng };
            bounds.extend(pos);
            const marker = new G.Marker({
                position: pos,
                map,
                title:    pin.label,
                icon: {
                    url:        makeSvgIcon(pinColour(pin)),
                    scaledSize: new G.Size(28, 36),
                    anchor:     new G.Point(14, 36),
                },
            });
            marker.addListener("click", () => {
                infoWindow.setContent(
                    `<div style="font:600 13px sans-serif;padding:2px 4px">${pin.label}</div>`
                );
                infoWindow.open(map, marker);
            });
            markersRef.current.push(marker);
        });

        if (pins.length === 1) {
            map.setCenter({ lat: pins[0].lat, lng: pins[0].lng });
            map.setZoom(13);
        } else {
            map.fitBounds(bounds, 48);
        }
    }, [pins]);

    const presentTypes = Array.from(new Set(pins.map(p => p.icon ?? "landmark")));

    return (
        <div className={`${prefix}-map-card`}>
            <div className={`${prefix}-map-hdr`}>
                <div className={`${prefix}-map-dot`} />
                <span className={`${prefix}-map-t`}>{title}</span>
                <span className={`${prefix}-map-km`}>{distanceLabel}</span>
            </div>

            {presentTypes.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", padding: "6px 12px 2px", fontSize: 11 }}>
                    {presentTypes.map(type => (
                        <span key={type} style={{ display: "flex", alignItems: "center", gap: 5, textTransform: "capitalize" }}>
                            <span style={{ width: 10, height: 10, borderRadius: "50%", background: ICON_COLOUR[type] ?? "#999", display: "inline-block" }} />
                            {type}
                        </span>
                    ))}
                </div>
            )}

            <div
                ref={containerRef}
                className={`${prefix}-map-frame`}
                style={{ width: "100%", height: "400px" }}
            />
        </div>
    );
};

export default MapCard;