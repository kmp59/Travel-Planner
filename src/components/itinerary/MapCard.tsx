import { useEffect, useRef, type FC } from "react";
import type { MapPin } from "../../types/types";

// ─── Leaflet types (minimal inline — no @types/leaflet needed) ────────────────

interface LLatLng        { lat: number; lng: number }
interface LLatLngBounds  { extend(pos: LLatLng): LLatLngBounds }
interface LMarker        { addTo(map: LMap): LMarker; bindPopup(html: string): LMarker; remove(): void }
interface LMap           {
    setView(pos: LLatLng, zoom: number): LMap;
    fitBounds(bounds: LLatLngBounds, opts?: object): LMap;
    remove(): void;
}
interface LIcon          { options: object }
interface LeafletNS {
    map:          (el: HTMLElement) => LMap;
    tileLayer:    (url: string, opts: object) => { addTo(map: LMap): void };
    marker:       (pos: LLatLng, opts?: object) => LMarker;
    icon:         (opts: object) => LIcon;
    latLngBounds: (corners: LLatLng[]) => LLatLngBounds;
}

declare global {
    interface Window { L: LeafletNS }
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface MapCardProps {
    pins:          MapPin[];
    title:         string;
    distanceLabel: string;
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

function makeSvgUrl(colour: string): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36"><path d="M14 0C6.27 0 0 6.27 0 14c0 9.33 14 22 14 22S28 23.33 28 14C28 6.27 21.73 0 14 0z" fill="${colour}" stroke="white" stroke-width="1.5"/><circle cx="14" cy="14" r="6" fill="white"/></svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// ─── Loader — injects Leaflet CSS + JS exactly once ──────────────────────────

let _leafletReady: Promise<void> | null = null;

function loadLeaflet(): Promise<void> {
    if (window.L) return Promise.resolve();
    if (_leafletReady) return _leafletReady;

    _leafletReady = new Promise<void>((resolve, reject) => {
        const link  = document.createElement("link");
        link.rel    = "stylesheet";
        link.href   = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);

        const script   = document.createElement("script");
        script.src     = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.async   = true;
        script.onload  = () => resolve();
        script.onerror = () => reject(new Error("Leaflet failed to load"));
        document.head.appendChild(script);
    });

    return _leafletReady;
}

// ─── Component ────────────────────────────────────────────────────────────────

const MapCard: FC<MapCardProps> = ({
                                       pins,
                                       title,
                                       distanceLabel,
                                       prefix = "rm",
                                   }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef       = useRef<LMap | null>(null);
    const markersRef   = useRef<LMarker[]>([]);

    // ─── Helper: place markers for the current pins array ────────────────────
    const placePins = (L: LeafletNS, map: LMap, pins: MapPin[]) => {
        markersRef.current.forEach(m => m.remove());
        markersRef.current = [];

        if (pins.length === 0) return;

        pins.forEach(pin => {
            const icon = L.icon({
                iconUrl:     makeSvgUrl(pinColour(pin)),
                iconSize:    [28, 36],
                iconAnchor:  [14, 36],
                popupAnchor: [0, -36],
            });
            const marker = L.marker({ lat: pin.lat, lng: pin.lng }, { icon })
                .addTo(map)
                .bindPopup(`<div style="font:600 13px sans-serif;padding:2px 4px">${pin.label}</div>`);
            markersRef.current.push(marker);
        });

        if (pins.length === 1) {
            map.setView({ lat: pins[0].lat, lng: pins[0].lng }, 13);
        } else {
            const bounds = L.latLngBounds(pins.map(p => ({ lat: p.lat, lng: p.lng })));
            map.fitBounds(bounds, { padding: [48, 48] });
        }
    };

    // Mount the map once — place initial pins immediately after ready
    useEffect(() => {
        if (!containerRef.current) return;

        loadLeaflet().then(() => {
            if (!containerRef.current || mapRef.current) return;
            const L = window.L;

            const defaultCentre: LLatLng = pins.length > 0
                ? { lat: pins[0].lat, lng: pins[0].lng }
                : { lat: 0, lng: 0 };

            mapRef.current = L.map(containerRef.current).setView(defaultCentre, 8);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                maxZoom: 19,
            }).addTo(mapRef.current);

            // Place the initial pins right here — map is guaranteed ready
            placePins(L, mapRef.current, pins);
        }).catch(console.error);

        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Swap markers whenever pins prop changes (tab switch)
    useEffect(() => {
        const L   = window.L;
        const map = mapRef.current;
        if (!L || !map) return; // map not ready yet — initial load handled above
        placePins(L, map, pins);
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