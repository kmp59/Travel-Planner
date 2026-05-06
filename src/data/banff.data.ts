import type { DayData, FooterTip, RouteStop, MapPin } from "../types/types";

// ─── Map pin registry ─────────────────────────────────────────────────────────

export const BANFF_MAP_PINS: Record<string, MapPin> = {
    canmore:         { key: "canmore",         label: "Canmore, AB",              lat: 51.0884,  lng: -115.3479, icon: "village"  },
    bowLake:         { key: "bowLake",         label: "Bow Lake",                 lat: 51.6716,  lng: -116.4637, icon: "landmark" },
    columbiaIcefield:{ key: "columbiaIcefield",label: "Columbia Icefield Centre", lat: 52.2195,  lng: -117.2243, icon: "activity" },
    sunwapta:        { key: "sunwapta",        label: "Sunwapta Falls",           lat: 52.2020,  lng: -117.6413, icon: "landmark" },
    golden:          { key: "golden",          label: "Golden, BC",               lat: 51.2961,  lng: -116.9631, icon: "village"  },
    emeraldLake:     { key: "emeraldLake",     label: "Emerald Lake, Yoho NP",   lat: 51.4375,  lng: -116.5327, icon: "landmark" },
    takakkaw:        { key: "takakkaw",        label: "Takakkaw Falls",           lat: 51.5002,  lng: -116.4773, icon: "landmark" },
    rogersPass:      { key: "rogersPass",      label: "Rogers Pass, Glacier NP",  lat: 51.2988,  lng: -117.5228, icon: "activity" },
    paintPots:       { key: "paintPots",       label: "Paint Pots, Kootenay NP",  lat: 50.9987,  lng: -116.2295, icon: "landmark" },
    marbleCanyon:    { key: "marbleCanyon",    label: "Marble Canyon",            lat: 51.0114,  lng: -116.1559, icon: "landmark" },
    radiumHotSprings:{ key: "radiumHotSprings",label: "Radium Hot Springs",       lat: 50.6237,  lng: -116.0729, icon: "activity" },
    calgary:         { key: "calgary",         label: "Calgary (YYC)",            lat: 51.0447,  lng: -114.0719, icon: "airport"  },
};

/** Return the MapPin objects for a given set of keys. */
export function getPins(keys: string[]): MapPin[] {
    return keys.map(k => BANFF_MAP_PINS[k]).filter(Boolean);
}

// ─── Route strip stops ────────────────────────────────────────────────────────

export const ROUTE_STOPS: RouteStop[] = [
    { dot: "o", name: "CANMORE, AB",       sub: "Checkout · Jun 17" },
    { dot: "",  name: "COLUMBIA ICEFIELD", sub: "Glacier Tour · Jun 17" },
    { dot: "g", name: "GOLDEN, BC",        sub: "Base · Jun 17–19" },
    { dot: "",  name: "YOHO + GLACIER NP", sub: "Day trip · Jun 18" },
    { dot: "r", name: "KOOTENAY NP",       sub: "Day trip · Jun 19" },
    { dot: "e", name: "CALGARY (YYC)",     sub: "Jun 19 Eve · Fly Jun 20" },
];

// ─── Footer tips ──────────────────────────────────────────────────────────────

export const FOOTER_TIPS: FooterTip[] = [
    { icon: "✈️", label: "Flight Reminder:", text: "June 20 · 7 AM YYC. Be at the airport by 5 AM. Book a hotel within 5 min of the terminal for June 19 night." },
    { icon: "🎫", label: "Book Early:",       text: "Columbia Icefield Glacier Adventure + Skywalk sell out in June. Also pick up a Parks Canada Discovery Pass — covers all 3 national parks." },
    { icon: "🐻", label: "Wildlife Safety:",  text: "Bear spray on every trail. Noise while hiking. June is peak bear activity season in all three parks." },
    { icon: "🌡️", label: "June Weather:",     text: "10–18°C, afternoon showers possible. Layer up and pack a waterproof shell. Snow still possible near the Icefield." },
];

// ─── Days ─────────────────────────────────────────────────────────────────────

export const DAYS: DayData[] = [
    {
        cls: "d1", num: "01", tabDate: "Jun 17", tabTitle: "Canmore → Icefield",
        mapPins: ["canmore", "bowLake", "columbiaIcefield", "sunwapta", "golden"],
        date: "Tuesday · June 17",
        title: "Canmore → Columbia Icefield → Golden",
        sub: "Check out, walk on ancient ice, settle into Golden",
        base: "🏠 Tonight: Golden, BC · ~3.5 hr total drive from Canmore via Icefield",
        tags: [["Glacier Tour", "t-gl"], ["Adventure", "t-ad"], ["Kid Favourite", "t-ki"], ["Drive Day", "t-dr"]],
        drive: "🚗  Canmore → Icefield: ~1 hr 45 min (Hwy 1 + Icefields Pkwy N)  |  Icefield → Golden: ~1 hr 50 min (Hwy 93S + Hwy 1W)",
        events: [
            { time: "7:30 AM",  icon: "🏠", title: "Checkout from Canmore Airbnb",          desc: "Pack up and grab an early breakfast in Canmore (Communitea Café or Beamer's Coffee). Hit the road early — the Icefields Parkway rewards early risers with quiet roads and wildlife sightings in the golden morning light.", pills: [["Hwy 1 → Hwy 93N", ""], ["Bear spray in car", ""], ["Gas up in Lake Louise", ""]] },
            { time: "8:45 AM",  icon: "🌊", title: "Bow Lake Quick Stop",                    desc: "A 10-minute stop at Bow Lake — one of the Parkway's most photographed spots. The turquoise water mirrors surrounding peaks beautifully in morning light. Easy flat walk for all ages.", pills: [["10 min off highway", ""], ["Flat gravel path", ""], ["All ages", ""]] },
            { time: "10:00 AM", icon: "🧊", title: "Glacier Adventure — Athabasca Glacier", desc: "Board the Ice Explorer snowcoach at the Columbia Icefield Centre for a ride onto the Athabasca Glacier. Stand on 10,000-year-old glacial ice, taste the pristine meltwater, and learn about glaciology. Fully accessible for seniors.", pills: [["~90 min total", ""], ["Snowcoach included", ""], ["Book tickets in advance!", "pill-a"], ["Flat ice walking", ""]] },
            { time: "12:00 PM", icon: "🌈", title: "Glacier Skywalk",                        desc: "A glass-floored platform cantilevered 280 m above the Sunwapta Valley. The 1 km paved interpretive trail is fully accessible. Absolutely spectacular for all ages.", pills: [["1 km paved trail", ""], ["Fully accessible", ""], ["Shuttle from Icefield Centre", ""]] },
            { time: "1:15 PM",  icon: "🍴", title: "Lunch at Icefield Centre",               desc: "Refuel at the Icefield Centre restaurant with panoramic glacier views. Let seniors rest and kids explore the outdoor terrace before the drive to Golden.", pills: [["Full menu available", ""], ["Glacier-facing windows", ""]] },
            { time: "2:30 PM",  icon: "🚗", title: "Drive South to Golden, BC",              desc: "Head south on Hwy 93 and west on Hwy 1. Stop at Sunwapta Falls for a dramatic 5-min walk. Watch for elk and bighorn sheep along the roadside. Arrive Golden around 4:30 PM.", pills: [["Sunwapta Falls stop", ""], ["~1 hr 50 min drive", ""], ["Arrive Golden ~4:30 PM", ""]] },
            { time: "5:00 PM",  icon: "🏘️", title: "Arrive & Settle into Golden, BC",        desc: "Check into your Golden accommodation. Dinner at Eleven22 or The Wolf's Den — great local picks with mountain views. Easy, relaxed evening before the full Yoho + Glacier day.", pills: [["Golden town centre", ""], ["Dinner + rest", ""]] },
        ],
    },
    {
        cls: "d2", num: "02", tabDate: "Jun 18", tabTitle: "Yoho + Glacier NP",
        mapPins: ["golden", "emeraldLake", "takakkaw", "rogersPass"],
        date: "Wednesday · June 18",
        title: "Yoho NP + Glacier NP Day Loop",
        sub: "Emerald lakes, thundering falls & cedar-canyon forests",
        base: "🏠 Return to Golden tonight · Day trip east on Hwy 1",
        tags: [["Moderate Hike", "t-hi"], ["Scenic Lakes", "t-re"], ["Kid-Friendly", "t-ki"]],
        drive: "🚗  Golden → Yoho (Emerald Lake): ~35 min east  |  Yoho → Rogers Pass (Glacier NP): ~55 min west  |  Return to Golden: ~45 min",
        events: [
            { time: "7:45 AM",  icon: "💎", title: "Emerald Lake — Morning Loop",                     desc: "Yoho's crown jewel glows an impossible turquoise from glacial rock flour. The 5.2 km flat loop is easy and gorgeous — ideal for seniors and kids. Rent a canoe if you want to paddle on the lake.", pills: [["5.2 km flat loop · Easy", ""], ["~1.5 hrs", ""], ["Canoe rentals", ""], ["All ages", ""]] },
            { time: "10:30 AM", icon: "💦", title: "Takakkaw Falls",                                   desc: "Canada's second-highest waterfall at 373 m — a flat 1 km walk from the parking lot to the thundering base. The mist and roar is exhilarating for kids and awe-inspiring for everyone. Pack a light rain jacket.", pills: [["1 km easy walk", ""], ["~45 min", ""], ["Rain jacket — heavy mist!", "pill-w"]] },
            { time: "12:00 PM", icon: "🥾", title: "Yoho Valley Trail (Hikers Only)",                 desc: "Active hikers take the Yoho Valley Trail — waterfalls cascade around every bend on this spectacular 7 km moderate route. Seniors and kids relax at picnic tables near the parking lot.", pills: [["7 km return · Moderate", ""], ["~2 hrs", ""], ["+180m elevation", ""]] },
            { time: "2:30 PM",  icon: "🥪", title: "Packed Lunch Picnic",                              desc: "Regroup at the Yoho Valley picnic area beside the rushing river. Kids splash at the water's edge while everyone refuels before heading into Glacier NP.", pills: [["Riverside picnic area", ""], ["Tables available", ""]] },
            { time: "4:00 PM",  icon: "🏔️", title: "Glacier NP — Rogers Pass + Abandoned Rails Trail", desc: "Stop at the Rogers Pass Discovery Centre for avalanche control exhibits, then walk the flat Abandoned Rails Trail through old-growth cedar and hemlock. Wide, gentle, and fully accessible.", pills: [["2.8 km return · Easy", ""], ["~1 hr", ""], ["Wheelchair-friendly", ""], ["Ancient cedar canopy", ""]] },
            { time: "6:30 PM",  icon: "🌅", title: "Return to Golden",                                 desc: "Drive back east on Hwy 1 to Golden — about 45 min with beautiful evening light on the Selkirk Mountains. Dinner in town and an early night before the Kootenay + Calgary day.", pills: [["~45 min drive", ""], ["Dinner in Golden", ""]] },
        ],
    },
    {
        cls: "d3", num: "03", tabDate: "Jun 19", tabTitle: "Kootenay → Calgary",
        mapPins: ["golden", "paintPots", "marbleCanyon", "radiumHotSprings", "calgary"],
        date: "Thursday · June 19",
        title: "Kootenay NP → Hot Springs → Calgary",
        sub: "Painted canyons, hanging glaciers & a mineral soak before the road home",
        base: "✈️ Flight June 20 · 7 AM YYC — Depart Radium by 4:30 PM · Arrive Calgary by 8 PM",
        tags: [["Moderate Hike", "t-hi"], ["Hot Springs", "t-re"], ["To Calgary", "t-dr"]],
        drive: "🚗  Golden → Kootenay NP (Radium): ~1 hr south on Hwy 95  |  Radium → Calgary: ~3 hrs via Hwy 93 + Hwy 1 East  |  Depart Radium ≤4:30 PM",
        events: [
            { time: "7:30 AM",  icon: "🚗", title: "Drive Golden → Kootenay NP",           desc: "Drive south on Hwy 95 along the wide Columbia River Valley — flanked by two mountain ranges, one of BC's most beautiful drives. Gas up in Radium before heading into the park.", pills: [["~1 hr drive", ""], ["Columbia Valley views", ""], ["Gas up in Radium", ""]] },
            { time: "9:00 AM",  icon: "🎨", title: "Paint Pots — Ochre Springs",            desc: "A flat 1 km boardwalk to vivid iron-rich mineral springs creating pools of burnt orange and deep red. Sacred to First Nations peoples for millennia as a pigment source. Totally accessible.", pills: [["1 km boardwalk · Easy", ""], ["~45 min", ""], ["Fully accessible", ""], ["Culturally significant", ""]] },
            { time: "10:30 AM", icon: "🏞️", title: "Marble Canyon Loop",                   desc: "A dramatic 3.4 km loop through a deep limestone gorge, crossing 8 bridges above a roaring turquoise creek as the canyon walls narrow to just a few feet apart. Thrilling for kids, stunning for all.", pills: [["3.4 km loop · Easy–Mod", ""], ["~1.5 hrs", ""], ["8 bridges", ""], ["Minimal elevation", ""]] },
            { time: "12:30 PM", icon: "🥾", title: "Stanley Glacier Trail (Hikers Only)",  desc: "Kootenay's premier hike — through a fire-regenerated valley to a stunning hanging glacier viewpoint. Non-hikers relax in Radium town (10 min away), explore the village, or have a leisurely lunch.", pills: [["10 km return · Moderate", ""], ["~3 hrs", ""], ["+365m elevation", ""], ["Start by 12:30 sharp", "pill-w"]] },
            { time: "3:00 PM",  icon: "♨️", title: "Radium Hot Springs Pools",              desc: "Soak in Radium Hot Springs — Canada's largest natural hot springs at 38°C. Mineral-rich waters ease tired hiking legs for everyone. Keep the soak to 45–60 min to be on the road by 4:30 PM.", pills: [["38°C mineral pool", ""], ["All ages", ""], ["Towel rental available", ""], ["Depart by 4:30 PM latest!", "pill-a"]] },
            { time: "4:30 PM",  icon: "🚗", title: "Drive Radium → Calgary (~3 hrs)",       desc: "Head east on Hwy 93 through Banff National Park — spectacular at dusk. Stop in Banff for a quick dinner. Mountains fade to prairies as you reach Calgary. Arrive hotel near YYC by ~7:30–8 PM.", pills: [["~3 hrs driving", ""], ["Banff dinner stop", ""], ["Arrive Calgary ~7:30 PM", ""], ["Watch for wildlife at dusk", "pill-w"]] },
            { time: "8:00 PM",  icon: "🛬", title: "Arrive Calgary · Pre-Flight Night",     desc: "Check into a hotel near Calgary Airport (YYC) — Hampton Inn or Acclaim Hotel are 5 min from the terminal. For your 7 AM flight be at the airport by 5 AM. Set the alarms and relive three incredible days.", pills: [["Stay near YYC terminal", ""], ["Airport by 5:00 AM for 7 AM flight", "pill-a"], ["Confirm airport shuttle/parking", ""]] },
        ],
    },
];