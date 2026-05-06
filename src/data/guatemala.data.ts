import type { DayData, FooterTip, RouteStop, MapPin } from "../types/types";
// ─── Map ──────────────────────────────────────────────────────────────────────
// Pin registry — plain lat/lng + label. Used by MapCard via the Maps JS API.

export const GT_MAP_PINS: Record<string, MapPin> = {
    // ── Airport & transit ────────────────────────────────────────────────────
    airport:        { key: "airport",        label: "La Aurora Airport (GUA)",          lat: 14.5833,  lng: -90.5275, icon: "airport"   },
    antigua:        { key: "antigua",        label: "Antigua Guatemala",                lat: 14.5586,  lng: -90.7295, icon: "village"   },

    // ── Antigua landmarks ────────────────────────────────────────────────────
    parqueCentral:  { key: "parqueCentral",  label: "Parque Central, Antigua",          lat: 14.5586,  lng: -90.7335, icon: "landmark"  },
    cerroCruz:      { key: "cerroCruz",      label: "Cerro de la Cruz",                 lat: 14.5659,  lng: -90.7275, icon: "landmark"  },
    santaCatalina:  { key: "santaCatalina",  label: "Arco de Santa Catalina",           lat: 14.5593,  lng: -90.7340, icon: "landmark"  },
    mercadoCentral: { key: "mercadoCentral", label: "Mercado Central, Antigua",         lat: 14.5570,  lng: -90.7322, icon: "landmark"  },

    // ── Volcanoes ────────────────────────────────────────────────────────────
    pacaya:         { key: "pacaya",         label: "Volcán Pacaya",                    lat: 14.3815,  lng: -90.6015, icon: "volcano"   },
    acatenango:     { key: "acatenango",     label: "Volcán Acatenango",                lat: 14.5003,  lng: -90.8757, icon: "volcano"   },
    fuego:          { key: "fuego",          label: "Volcán de Fuego",                  lat: 14.4731,  lng: -90.8801, icon: "volcano"   },

    // ── Near Antigua ─────────────────────────────────────────────────────────
    hobbitenango:   { key: "hobbitenango",   label: "Hobbitenango",                     lat: 14.5731,  lng: -90.7089, icon: "activity"  },

    // ── Lake Atitlán ─────────────────────────────────────────────────────────
    panajachel:     { key: "panajachel",     label: "Panajachel",                       lat: 14.7403,  lng: -91.1614, icon: "village"   },
    calleSantander: { key: "calleSantander", label: "Calle Santander, Panajachel",      lat: 14.7380,  lng: -91.1601, icon: "landmark"  },
    sanPedro:       { key: "sanPedro",       label: "San Pedro La Laguna",              lat: 14.6949,  lng: -91.2726, icon: "village"   },
    sanPedroWater:  { key: "sanPedroWater",  label: "San Pedro Waterfront",             lat: 14.6935,  lng: -91.2740, icon: "activity"  },
    sanMarcos:      { key: "sanMarcos",      label: "San Marcos La Laguna",             lat: 14.7273,  lng: -91.2631, icon: "village"   },
    trampolineDive: { key: "trampolineDive", label: "Cliff Diving & Trampoline Platform, San Marcos", lat: 14.7265, lng: -91.2645, icon: "activity" },
    sanJuan:        { key: "sanJuan",        label: "San Juan La Laguna",               lat: 14.7089,  lng: -91.2858, icon: "village"   },

    // ── Indian Nose hike ─────────────────────────────────────────────────────
    indianNose:     { key: "indianNose",     label: "Indian Nose / Nariz del Indio",    lat: 14.7214,  lng: -91.2489, icon: "activity"  },
};

/** Return the MapPin objects for a given set of keys (used by the map component). */
export function getPins(keys: string[]): MapPin[] {
    return keys.map(k => GT_MAP_PINS[k]).filter(Boolean);
}

// ─── Route strip stops ────────────────────────────────────────────────────────

export const GT_ROUTE_STOPS: RouteStop[] = [
    { dot: "o", name: "GUA AIRPORT",        sub: "Arrival Night · Night flight" },
    { dot: "g", name: "ANTIGUA GUATEMALA",  sub: "Days 1–4 · Colonial Base" },
    { dot: "r", name: "LAKE ATITLÁN",       sub: "Days 5–7 · Volcanic Shores" },
];

// ─── Footer tips ──────────────────────────────────────────────────────────────
export const GT_FOOTER_TIPS: FooterTip[] = [
    { icon: "🛡️", label: "Safety:",       text: "Stay in well-trafficked areas, use recommended taxi services (Uber is available in Antigua), and avoid walking alone after dark." },
    { icon: "💵", label: "Currency:",     text: "Guatemalan Quetzal (GTQ). ATMs widely available in Antigua. Cash preferred at markets and smaller villages around Atitlán." },
    { icon: "🌋", label: "Volcano Tips:", text: "Acatenango hike requires good fitness and layers — temperatures drop sharply overnight near the summit. Book a reputable guided tour only." },
    { icon: "⛵", label: "Atitlán Boats:", text: "Lanchas (water taxis) are the main transport between villages. Agree on price before boarding and check return schedules." },
];

// ─── Days ─────────────────────────────────────────────────────────────────────
export const GT_DAYS: DayData[] = [
    {
        cls: "d1", num: "00", tabDate: "Day 0", tabTitle: "Night Flight · Arrival",
        mapPins: ["airport", "antigua", "parqueCentral"],
        date: "Day 0 — Arrival Night",
        title: "Night Flight → Antigua Guatemala",
        sub: "Land late, get to Antigua, crash — adventure starts tomorrow",
        base: "🏠 Base: Antigua Guatemala — hostels, Airbnbs & boutique hotels all central",
        tags: [["Arrival", "t-dr"], ["Night Flight", "t-ad"]],
        drive: "🚗  GUA Airport → Antigua: ~45 min · Bus, Uber, or hostel shuttle",
        events: [
            {
                time: "Landing", icon: "✈️", title: "Arrive at La Aurora Airport (GUA)",
                desc: "Clear immigration and collect your bags. La Aurora is a small, easy airport — you'll be out quickly. Night arrivals can feel hectic outside; stay calm and assess your options before committing to a ride.",
                pills: [["Small easy airport", ""], ["Stay aware outside arrivals", "pill-w"]],
            },
            {
                time: "Late Night", icon: "🚌", title: "Get to Antigua — Bus, Uber or Shuttle",
                desc: "You have three solid options. Public bus (chicken bus) is the cheapest at ~10–15 GTQ but slower and harder with luggage at night. Uber is reliable, ~150–200 GTQ, and the easiest option if time is short. Many Antigua hostels and Airbnbs offer pre-arranged airport shuttles (~100–150 GTQ) — best booked in advance. Pick based on your energy and budget.",
                pills: [["Uber: ~150–200 GTQ · Easiest", ""], ["Hostel shuttle: book in advance", "pill-w"], ["Bus: cheapest but tricky at night", ""]],
            },
            {
                time: "Arrival", icon: "🏨", title: "Check In & Rest",
                desc: "Antigua's accommodation is clustered tightly — nearly everything is walkable from the central park. Drop your bags, shower if you need to, and sleep. Tomorrow is a full day.",
                pills: [["Central Antigua is compact", ""], ["Confirm check-in time ahead", "pill-w"]],
            },
        ],
    },
    {
        cls: "d2", num: "01", tabDate: "Day 1", tabTitle: "Explore Antigua",
        mapPins: ["antigua", "parqueCentral", "cerroCruz", "santaCatalina", "mercadoCentral"],
        date: "Day 1",
        title: "Rest, Explore & Eat Your Way Through Antigua",
        sub: "Viewpoints, markets, colonial streets & the best food scene in Central America",
        base: "🏠 Base: Antigua Guatemala",
        tags: [["Walking Day", "t-hi"], ["Cultural", "t-cu"], ["Food & Drinks", "t-re"]],
        drive: "🚶  Fully walkable — Antigua's colonial grid is compact and flat",
        events: [
            {
                time: "Morning", icon: "☕", title: "Slow Breakfast at a Local Café",
                desc: "Start easy — you just flew in. Antigua has excellent café culture. Grab breakfast at one of the many local spots around the Parque Central before heading out. Guatemalan coffee here is some of the best in the world.",
                pills: [["Local cafés near Parque Central", ""], ["Try Guatemalan drip coffee", ""]],
            },
            {
                time: "9:30 AM", icon: "⛰️", title: "Cerro de la Cruz — Panoramic Viewpoint",
                desc: "Start the sightseeing at the hilltop Cross of the Hill, a short walk or cheap tuk-tuk ride north of the city centre. From here you get the classic postcard view — Antigua's terracotta rooftops, the yellow arch, and Volcán de Agua rising perfectly behind. Best in the morning before clouds roll in.",
                pills: [["~20 min walk or tuk-tuk", ""], ["Best views in Antigua", ""], ["Go early — clouds build later", "pill-w"]],
            },
            {
                time: "11:00 AM", icon: "🏛️", title: "Arco de Santa Catalina & Colonial Streets",
                desc: "Walk back down through the colonial centre. The iconic yellow Santa Catalina Arch spans 5a Avenida Norte — the most photographed spot in Guatemala. Built in the 17th century to let nuns cross the street unseen. Stroll the cobblestone streets, peek into church courtyards, and soak up the UNESCO atmosphere.",
                pills: [["Most iconic Antigua photo spot", ""], ["17th century arch", ""], ["Free to view", ""]],
            },
            {
                time: "12:00 PM", icon: "🛒", title: "Mercado Central & Tanque La Unión",
                desc: "Head to the Mercado Central for the real local experience — fresh produce, street food, textiles, and noise. Just south of the market is Tanque La Unión, a 18th-century public laundry tank still used by locals. A quietly beautiful piece of everyday Antigua life.",
                pills: [["Local market — cash only", ""], ["Tanque La Unión: free & photogenic", ""], ["Watch your belongings", "pill-w"]],
            },
            {
                time: "1:30 PM", icon: "🍽️", title: "Lunch — Guatemalan Cuisine",
                desc: "Time to eat properly. For authentic Guatemalan food, these are the top picks: Arín Cuan for traditional pepián and kak'ik in a beautiful colonial courtyard; 7 Caldos for hearty soups and local stews; Cueva de los Urquizu for a more intimate local feel. All serve classic dishes at fair prices.",
                pills: [["Arín Cuan — traditional courtyard", ""], ["7 Caldos — soups & stews", ""], ["Cueva de los Urquizu — local gem", ""]],
            },
            {
                time: "Afternoon", icon: "🌿", title: "Afternoon Wander — Optional Indian Food",
                desc: "Digest with a slow afternoon walk through Antigua's backstreets. If you're craving something different, Delhi 6 Antigua is a genuinely excellent Indian restaurant — widely recommended and a surprising find in Guatemala. Great option if you want a break from Guatemalan food.",
                pills: [["Delhi 6 Antigua — highly rated", ""], ["Cobblestone strolling", ""], ["Explore side streets", ""]],
            },
            {
                time: "Evening", icon: "🍺", title: "Craft Beer, Cocktails & Nightlife",
                desc: "Antigua has a punchy bar scene for its size. For craft beer: Franca and Antigua Cervecería are top picks, or try El Depósito (Cervecería 14) for a laid-back warehouse vibe. For cocktails: Franca doubles as a great cocktail bar; Ulew does creative mezcal-forward drinks; El Ilegal and Whisky Den are excellent for a more intimate late-night drink. If you're vegan, La Bruja is the standout — considered one of the best vegan restaurants in Central America.",
                pills: [["Craft beer: Franca · Antigua Cervecería · El Depósito", ""], ["Cocktails: Ulew · El Ilegal · Whisky Den", ""], ["Vegan: La Bruja — unmissable", ""], ["Franca is great for both beer & cocktails", ""]],
            },
        ],
    },
    {
        cls: "d3", num: "02", tabDate: "Day 2", tabTitle: "Pacaya Volcano + Hobbitenango",
        mapPins: ["antigua", "pacaya", "hobbitenango", "fuego"],
        date: "Day 2",
        title: "Pacaya Volcano Morning Trek & Hobbitenango Afternoon",
        sub: "Lava fields at dawn, marshmallows on a volcano, then a hobbit's-eye view of Fuego",
        base: "🏠 Base: Antigua Guatemala",
        tags: [["Volcano Hike", "t-hi"], ["Half Day Trek", "t-ad"], ["Scenic Views", "t-gl"], ["Easy–Moderate", "t-re"]],
        drive: "🚗  Tour bus pickup near your hotel → Pacaya: ~90 min · Antigua → Hobbitenango: ~15 min by Uber",
        events: [
            {
                time: "Early AM", icon: "🎒", title: "Book & Meet Your Tour — Pacaya Volcano",
                desc: "Book through GetYourGuide — plenty of operators run early morning Pacaya tours with hotel pickup from a common meeting point near your accommodation. Early departure means you beat the heat and the crowds. Most tours are half-day, getting you back in Antigua by noon.",
                pills: [["Book on GetYourGuide", "pill-w"], ["Early pickup ~5–6 AM", ""], ["Pickup near your hotel", ""]],
            },
            {
                time: "On the Bus", icon: "🚌", title: "90-Minute Bus Ride — Take Your Motion Sickness Pill",
                desc: "This is important: take motion sickness medication before boarding. The bus winds through mountain roads with steep curves and switchbacks for nearly 90 minutes. The roads are genuinely stomach-churning for many people. Don't skip this step — it can make or break the whole morning.",
                pills: [["Take motion sickness meds!", "pill-a"], ["~90 min winding mountain roads", ""], ["Sit near the front if sensitive", "pill-w"]],
            },
            {
                time: "Morning", icon: "🌋", title: "Hike Pacaya Volcano",
                desc: "The hike itself is not difficult — well-maintained trails, moderate elevation gain, and very manageable for most fitness levels. Your guide speaks decent English and sets a comfortable pace. Not an avid hiker? No problem — horses are available for anyone who'd rather skip the uphill and only walk the descent. The guides are friendly and will take good care of you.",
                pills: [["Easy–Moderate difficulty", ""], ["~2–3 hrs total", ""], ["Horses available for non-hikers", ""], ["English-speaking guides", ""]],
            },
            {
                time: "At the Summit", icon: "🔥", title: "Lava Fields — Marshmallows & Pizza",
                desc: "When you reach the active lava fields of Pacaya, the heat radiating from the ground is intense and surreal. Most tour companies roast marshmallows over the lava vents — a genuinely unforgettable experience. Some operators go further and cook pizza using the volcanic heat. Check what your chosen tour includes when booking, or ask when you arrive.",
                pills: [["Marshmallows roasted on lava — most tours", ""], ["Lava pizza — select operators", ""], ["Check tour inclusions when booking", "pill-w"]],
            },
            {
                time: "Noon", icon: "🏠", title: "Return to Antigua — Lunch & Freshen Up",
                desc: "Back in Antigua by midday. You'll be dusty, possibly smelling faintly of sulphur, and hungry. Shower, change, and have a proper lunch before deciding what to do with the afternoon. The morning hike won't have wiped you out — Pacaya is easy enough that you'll still have energy.",
                pills: [["Back by ~12 PM", ""], ["Shower + lunch before afternoon", ""]],
            },
            {
                time: "Afternoon", icon: "🧙", title: "Hobbitenango — Scenic Views & the Iconic Swing",
                desc: "If you have the time and energy, Hobbitenango is well worth a visit. Take an Uber from Antigua (~15 min) up to this quirky hilltop eco-park inspired by Tolkien's Shire. The views are spectacular — rolling green hills, Antigua below, and Volcán de Fuego looming in the distance. The iconic swing over the valley and the giant stone hobbit hand with Fuego as the backdrop are two of the most photographed spots near Antigua. Relaxed, photogenic, and unlike anything else.",
                pills: [["~15 min Uber from Antigua", ""], ["Iconic swing & hobbit hand", ""], ["Fuego volcano views", ""], ["Go if energy allows", "pill-w"]],
            },
            {
                time: "Evening", icon: "🍽️", title: "Dinner in Antigua — Well Earned",
                desc: "Head back into Antigua for a relaxed dinner. You've done a volcano and a hobbit hill in one day — you've earned a good meal. Revisit any favourites from Day 1 or explore somewhere new. Early night if Acatenango is on your agenda soon.",
                pills: [["Antigua restaurants nearby", ""], ["Rest up for upcoming days", ""]],
            },
        ],
    },
    {
        cls: "d4", num: "03", tabDate: "Day 3", tabTitle: "Acatenango Overnight",
        mapPins: ["antigua", "acatenango", "fuego"],
        date: "Day 3 — Overnight Trek",
        title: "Acatenango & Fuego Volcano — Overnight Summit Hike",
        sub: "Watch an erupting volcano from 400 ft away. One of the most unforgettable nights of your life.",
        base: "⛺ Base: Acatenango Basecamp (~11,500 ft) — tent & camp bed provided by tour operator",
        tags: [["Overnight Trek", "t-ad"], ["Volcano Eruption", "t-hi"], ["Strenuous", "t-gl"], ["Must-Do", "t-re"]],
        drive: "🚗  Antigua → Acatenango Trailhead: ~45 min · Tour operator provides transport",
        events: [
            {
                time: "Morning", icon: "🎒", title: "Pack Your Kit — Layers Are Non-Negotiable",
                desc: "This is the most physically demanding day of the trip. It's cold at 11,000+ ft — genuinely cold. Pack every layer you have: thermal base layer, fleece mid-layer, windproof outer shell, warm hat, gloves, and thick socks. The temperatures drop sharply after sunset and sleeping at basecamp elevation is nothing like sleeping in Antigua. Under-packing layers is the single most common mistake hikers make on this trek.",
                pills: [["Pack ALL your layers — not optional", "pill-a"], ["Gloves + hat essential", "pill-w"], ["Bring snacks & 2L+ water", ""], ["Trekking poles: highly recommended", ""]],
            },
            {
                time: "Late Morning", icon: "🚐", title: "Tour Pickup & Drive to Trailhead",
                desc: "Your tour operator (book via GetYourGuide, OX Expeditions, Wicho & Charlie's, or another reputable Antigua-based operator) will pick you up near your hotel. The ride to the trailhead takes ~45 minutes. All reputable tours include transport, guided ascent and descent, all meals (dinner, breakfast), tents, sleeping bags, and camp beds. Confirm inclusions before booking. Tours typically depart mid-morning to arrive at camp before dark.",
                pills: [["GetYourGuide · OX Expeditions · Wicho & Charlie's", ""], ["Inclusions: meals · tent · sleeping bag · bed", "pill-w"], ["Pickup ~10–11 AM typically", ""]],
            },
            {
                time: "Noon–5 PM", icon: "🌋", title: "The Ascent — Strenuous 4–5 Hour Climb",
                desc: "The hike is strenuous — full stop. The trail gains significant elevation through dense forest before breaking out into open volcanic scree. The altitude hits hard in the upper sections: your lungs work harder, legs tire faster. Go at your own pace, breathe steadily, and don't race the group. The guides manage a sustainable pace. By the time you reach basecamp at ~11,500 ft, you will be genuinely tired — expect jelly legs and a deep exhaustion that feels satisfying. Take it seriously: this is not Pacaya.",
                pills: [["Strenuous — 4–5 hrs ascent", "pill-a"], ["Altitude affects everyone differently", "pill-w"], ["Go slow · breathe steady", ""], ["~11,500 ft basecamp elevation", ""]],
            },
            {
                time: "Sunset", icon: "🔥", title: "Basecamp & Fuego Eruptions Begin",
                desc: "Basecamp sits at ~11,500 ft with a direct sightline to Volcán de Fuego, roughly 400 ft away horizontally. As night falls, the eruptions become spectacular — massive plumes of ash and lava light up the sky every 20–30 minutes. The rumble of each eruption is felt in your chest before you hear it. This is the moment. Every bit of effort on the ascent is paid back in full here. Your guides will take you up to ~13,000 ft for an even closer view of the active crater.",
                pills: [["Eruptions every ~20–30 min", ""], ["Felt in your chest — incredible", ""], ["Views to 13,000 ft with guides", ""], ["Fuego is 400 ft away", "pill-w"]],
            },
            {
                time: "Evening", icon: "🍲", title: "Dinner at Camp",
                desc: "Your tour operator cooks a hot meal at basecamp — typically rice, beans, hot soup, and warm drinks. Simple food tastes extraordinary after 5 hours of hiking at altitude. Eat everything. Hydrate aggressively. The cold sets in fast once you stop moving, so layer up immediately after sitting down.",
                pills: [["Hot meal & warm drinks included", ""], ["Eat & hydrate fully", "pill-w"], ["Layer up immediately after arriving", "pill-a"]],
            },
            {
                time: "9:30–10 PM", icon: "🛏️", title: "Sleep at Basecamp — A Rough but Honest Night",
                desc: "By 9:30–10 PM the day is over and you'll be ready to collapse. Sleeping at 11,000+ ft on a foldable camp bed in a shared tent is not luxury — it's adventure. The cold creeps through regardless of how many layers you wear. Sleep may be light, interrupted, and strange. That's part of it. Accept the discomfort, keep your gear on inside the sleeping bag, and know that the descent and the stories make it all worth it tomorrow morning.",
                pills: [["Sleep ~9:30–10 PM", ""], ["Camp bed in shared tent", ""], ["Cold, interrupted sleep — normal", "pill-w"], ["Keep layers on inside sleeping bag", "pill-a"]],
            },
        ],
    },
    {
        cls: "d5", num: "04", tabDate: "Day 4", tabTitle: "Descend → Atitlán",
        mapPins: ["acatenango", "fuego", "antigua", "panajachel", "sanPedro"],
        date: "Day 4 — Travel Day",
        title: "Descend Acatenango · Antigua Farewell · Lake Atitlán",
        sub: "Sore knees, fond goodbyes, and the world's most beautiful lake by evening",
        base: "🏠 Base: San Pedro La Laguna, Lake Atitlán",
        tags: [["Descent", "t-hi"], ["Travel Day", "t-dr"], ["Lake Arrival", "t-gl"]],
        drive: "🚗  Trailhead → Antigua: ~45 min · Antigua → Panajachel: ~2.5 hrs · ⛵ Panajachel → San Pedro: ~30 min by lancha",
        events: [
            {
                time: "Early Morning", icon: "☀️", title: "Breakfast at Basecamp",
                desc: "Your tour operator serves breakfast at camp before the descent. Eat properly — you need fuel in the legs. Take one last look at Fuego in the morning light before shouldering your pack. This moment is worth pausing for.",
                pills: [["Breakfast included by tour", ""], ["Last views of Fuego", ""], ["Pack everything before leaving", "pill-w"]],
            },
            {
                time: "Morning", icon: "🏔️", title: "Descent — Knees Will Know About It",
                desc: "The descent is faster than the climb — expect 2–3 hours down to the trailhead. It's less aerobically demanding but harder on the knees than going up. Take it steady on the loose volcanic scree sections, use your trekking poles if you have them, and don't be tempted to race down. The group moves quickly and you'll be at the trailhead before you know it.",
                pills: [["~2–3 hrs descent", ""], ["Knees take the hit going down", "pill-w"], ["Use trekking poles on scree", ""], ["Shuttle back to Antigua included", ""]],
            },
            {
                time: "Late Morning", icon: "🤝", title: "Tour Office Meetup — Say Your Goodbyes",
                desc: "The shuttle returns the whole group to your tour operator's office in Antigua. This is the natural end point of the trek — everyone is tired, dusty, and grinning. Take a moment to exchange contacts with the people you shared the summit with. These goodbyes happen fast, so don't rush off immediately.",
                pills: [["Group returns to tour office", ""], ["Exchange contacts before leaving", ""], ["Tip your guides — they earned it", "pill-w"]],
            },
            {
                time: "Noon", icon: "🍽️", title: "Lunch in Antigua — Last Meal in Town",
                desc: "You're back in Antigua with a window before the shuttle departs. Have a proper sit-down lunch — your body has earned it. Revisit a favourite spot from Day 1, or try something new. Keep it straightforward and efficient: you'll need to be at the shuttle pickup location early.",
                pills: [["Last Antigua meal — make it count", ""], ["Keep an eye on your bus time", "pill-w"], ["Stay close to the pickup zone", ""]],
            },
            {
                time: "Afternoon", icon: "🚐", title: "Shuttle to Panajachel — Know Your Bus Times",
                desc: "Shuttles to Panajachel depart from fixed pickup locations in Antigua — not from your hotel door. Arrive at the pickup point 15–20 minutes early. These buses do not wait for latecomers. Departure times: 11 AM, 2 PM, 4 PM, and 5 PM. Choosing the right one matters: if you're staying in Panajachel itself, the 5 PM bus works fine. If you're heading to any other lake village (San Pedro, San Marcos, Santa Cruz etc.), take the 2 PM bus — lanchas stop running at 6:00–6:30 PM. Miss the last lancha and you're looking at a private boat costing up to 500 GTQ.",
                pills: [["Arrive pickup point 15–20 min early", "pill-a"], ["Buses don't wait — no exceptions", "pill-a"], ["Lanchas stop 6:00–6:30 PM daily", "pill-w"], ["Miss lancha = private boat up to 500 GTQ", "pill-w"], ["Staying in Pana only → 5 PM bus OK", ""], ["All other villages → take the 2 PM bus", ""]],
            },
            {
                time: "Late Afternoon", icon: "⛵", title: "Lancha to San Pedro La Laguna",
                desc: "From Panajachel's dock, board a lancha to San Pedro La Laguna. The boat ride across the lake — volcanoes rising on three sides, water turning deep blue in the afternoon light — is the perfect decompression after two days on the mountain. San Pedro is one of the most vibrant villages on the lake with excellent food, a laid-back atmosphere, and easy access to everything.",
                pills: [["~30 min by lancha", ""], ["Agree price before boarding", "pill-w"], ["First views of Atitlán: unforgettable", ""]],
            },
            {
                time: "Evening", icon: "🍜", title: "Check In & Dinner in San Pedro",
                desc: "Check into your hotel, shower off two days of volcano, and breathe. San Pedro has a great local restaurant scene — grab dinner at one of the spots along the waterfront or up in the village centre. Nothing ambitious tonight. You've done Acatenango. Rest is the whole point.",
                pills: [["Shower · eat · sleep", ""], ["Waterfront dining in San Pedro", ""], ["Early night — fully earned", ""]],
            },
        ],
    },
    {
        cls: "d6", num: "05", tabDate: "Day 5", tabTitle: "San Marcos + Panajachel",
        mapPins: ["sanPedro", "sanMarcos", "trampolineDive", "panajachel", "calleSantander"],
        date: "Day 5",
        title: "San Marcos La Laguna · Cliff Diving · Panajachel Streets",
        sub: "40-ft platform, native Mayan food, and the best street eats on the lake",
        base: "🏠 Base: San Pedro La Laguna",
        tags: [["Cliff Diving", "t-ad"], ["Swimming", "t-re"], ["Street Food", "t-fo" as unknown as "t-re"], ["Cash Only Villages", "t-hi"]],
        drive: "⛵  San Pedro → San Marcos: ~15–20 min  |  ⛵  San Marcos → Panajachel: ~20 min  |  ⛵  Panajachel → San Pedro: ~30 min",
        events: [
            {
                time: "Morning", icon: "⛵", title: "Lancha to San Marcos La Laguna",
                desc: "Take an early lancha from San Pedro to San Marcos La Laguna — a short 15–20 minute ride across the lake. San Marcos is one of the quieter villages but punches well above its weight. Settle in and head straight to the water.",
                pills: [["~15–20 min lancha from San Pedro", ""], ["Agree fare before boarding", "pill-w"], ["Bring cash — cards not widely accepted", "pill-a"]],
            },
            {
                time: "Late Morning", icon: "🤿", title: "Cliff Diving & The 40-ft Platform — Half Day at the Lake",
                desc: "San Marcos is famous for its cliff jumping spots and a purpose-built 40-ft diving platform right on the lake. The platform drops you straight into the deep, clear waters of Atitlán with a volcano backdrop that makes it feel completely surreal. Spend at least half the day here — swim, jump, rest, jump again. The water is cool and refreshing, especially after two days on Acatenango. There's no rush. This is the antidote to the mountain.",
                pills: [["40-ft platform — commit or don't", "pill-a"], ["Spend at least half a day here", ""], ["Cool lake water — volcanic and clear", ""], ["No strong currents — safe for swimming", ""]],
            },
            {
                time: "Midday", icon: "🍛", title: "Lunch — Native Mayan Food in San Marcos",
                desc: "San Marcos has excellent local restaurants serving traditional Mayan food — pepián (rich seed-based stew), jocon (tomatillo chicken), black bean dishes, and fresh handmade tortillas. Eat at one of the small local spots rather than the tourist-facing places. The food is genuinely outstanding and inexpensive. This is the kind of meal you'll be talking about later.",
                pills: [["Try pepián or jocon — traditional Mayan", ""], ["Eat local, not tourist menus", ""], ["Cash only in most places", "pill-a"], ["Inexpensive and outstanding", ""]],
            },
            {
                time: "Afternoon", icon: "💵", title: "Cash Reminder — Carry GTQ Before Leaving San Pedro",
                desc: "The further you get from Panajachel, the fewer merchants accept credit cards or USD. In San Marcos and smaller villages, Quetzales (GTQ) is the only reliable way to pay — for food, lanchas, entry fees, and everything else. ATMs are limited and often unreliable outside Panajachel. Withdraw enough GTQ before you leave San Pedro in the morning and keep it on you.",
                pills: [["GTQ cash is king in villages", "pill-a"], ["Cards & USD rarely accepted off the beaten path", "pill-w"], ["Withdraw GTQ before leaving San Pedro", "pill-a"], ["ATMs unreliable outside Panajachel", "pill-w"]],
            },
            {
                time: "Late Afternoon", icon: "🏙️", title: "Optional: Panajachel Downtown — Decorated Streets & Street Food",
                desc: "From San Marcos, hop a lancha to Panajachel — the main hub on the lake. Panajachel's main drag (Calle Santander) is a lively, colour-soaked street lined with vendors, weavings, and street food stalls. The street food here is some of the best eating on the entire trip — grilled corn, chuchitos, tostadas piled high, fresh fruit with chili and lime. Wander without a plan and eat whatever looks good. Alternatively, if you're tired from the cliff diving and the mountain is still in your legs, head straight back to San Pedro and rest — no guilt.",
                pills: [["Calle Santander — the main street", ""], ["Street food is exceptional here", ""], ["Grilled corn · chuchitos · tostadas", ""], ["Or skip and head back to San Pedro", ""]],
            },
            {
                time: "Evening", icon: "⛵", title: "Lancha Back to San Pedro",
                desc: "Catch a lancha back to San Pedro before the 6:00–6:30 PM cutoff. Dinner at your hotel or a local restaurant in the village. After cliff diving and a full day of lake life, tonight should be easy — a good meal, a cold drink, and an early night.",
                pills: [["Lanchas stop 6:00–6:30 PM", "pill-a"], ["Don't miss the last boat", "pill-w"], ["Easy dinner in San Pedro", ""]],
            },
        ],
    },
    {
        cls: "d7", num: "06", tabDate: "Day 6", tabTitle: "Indian Face + San Juan",
        mapPins: ["sanPedro", "indianNose", "sanPedroWater", "sanJuan"],
        date: "Day 6 — Last Full Day",
        title: "Mayan Face Sunrise Hike · Paddle Boarding · San Juan Market",
        sub: "One last sunrise from the mountain, lake time, and a TukTuk ride to the market",
        base: "🏠 Base: San Pedro La Laguna — pack up tonight",
        tags: [["Sunrise Hike", "t-hi"], ["Lake Activities", "t-re"], ["Local Market", "t-cu"], ["Last Day", "t-gl"]],
        drive: "🛺  TukTuk: San Pedro → San Juan La Laguna: ~10–15 GTQ  |  Note: TukTuks cannot cross town boundaries — expect a handoff at the border",
        events: [
            {
                time: "Pre-Dawn", icon: "⏰", title: "Early Rise — Layers On, Torch Ready",
                desc: "Set your alarm early — this hike departs before sunrise so you reach the summit in time for first light. It will be cold at the start, especially on the exposed upper sections, so bring every layer you have left from Acatenango. The cold doesn't last long once you're moving, but standing still on the summit waiting for sunrise without layers is miserable. Don't skip them.",
                pills: [["Early departure — pre-dawn start", "pill-a"], ["Bring all your layers", "pill-w"], ["Torch / headlamp useful", ""], ["Book tour the evening before", "pill-w"]],
            },
            {
                time: "Sunrise", icon: "🌄", title: "Mayan Face (Indian Nose) Sunrise Hike — Short but Challenging",
                desc: "The Mayan Face hike — also known as Indian Nose — is a short but genuinely steep and challenging climb above the lake. The trail rises sharply through forest before breaking out onto the rocky summit at around 7,000 ft. The views from the top are among the best in Guatemala: Lake Atitlán spread out below you, all three volcanoes visible at once, and the morning mist slowly burning off the water. If you only have time for one sunrise of the trip and you haven't done it already, this is the one. Highly recommended.",
                pills: [["Short but steep — challenging ascent", ""], ["~7,000 ft summit elevation", ""], ["Three volcanoes visible from top", ""], ["One of the best views in Guatemala", ""]],
            },
            {
                time: "Summit", icon: "☕", title: "Hot Bread & Coffee (or Hot Chocolate) at the Top",
                desc: "The tour operator serves hot bread with coffee or locally sourced hot chocolate right on the summit. After a cold early morning climb, this is an exceptional treat. The chocolate in particular is made from cacao grown around the lake — it tastes nothing like anything you'd find at home. Take your time at the top. You've earned it.",
                pills: [["Hot bread + coffee included by tour", ""], ["Try the local hot chocolate", ""], ["Cacao grown around Lake Atitlán", ""], ["Linger — don't rush the descent", ""]],
            },
            {
                time: "By 10 AM", icon: "🏨", title: "Back at the Hotel — Freshen Up",
                desc: "The hike is done and you'll be back at your hotel by 10 AM. Shower, change, and eat a proper breakfast if you haven't already. You have the rest of the morning and afternoon ahead of you — the day is far from over.",
                pills: [["Back by 10 AM", ""], ["Shower & breakfast before heading out", ""]],
            },
            {
                time: "Mid-Morning", icon: "🏄", title: "Paddle Boarding or Kayaking on Lake Atitlán",
                desc: "Head down to the waterfront and rent a paddle board or kayak for a few hours. The lake is at its calmest in the morning before afternoon winds pick up — the earlier the better. Paddle out into the open water with volcanoes on every horizon. Several rental outfits operate from San Pedro's shore; prices are very reasonable. This is the best way to see the lake at water level.",
                pills: [["Morning = calmest water", ""], ["Afternoon winds can pick up", "pill-w"], ["Paddle boards & kayaks for rent on shore", ""], ["Cash for rental", "pill-a"]],
            },
            {
                time: "Afternoon", icon: "🛺", title: "TukTuk to San Juan La Laguna — Local Market",
                desc: "Hop a TukTuk to San Juan La Laguna for last-day shopping at the local market. TukTuks are the primary way to get between villages on land and cost around 10–15 GTQ for a short hop. There's one important quirk to know: TukTuks from one town are not permitted to enter another town's territory. They will drop you at the boundary line between San Pedro and San Juan, where a San Juan TukTuk picks you up to take you the rest of the way. It sounds odd but it works seamlessly — just be ready for the handoff and have small GTQ coins ready.",
                pills: [["TukTuk: ~10–15 GTQ short distance", ""], ["TukTuks can't cross town boundaries", "pill-w"], ["Expect a handoff at the border", ""], ["Small GTQ coins handy for fares", "pill-a"]],
            },
            {
                time: "Late Afternoon", icon: "🧶", title: "San Juan Market — Textiles, Art & Local Crafts",
                desc: "San Juan La Laguna is one of the best villages on the lake for authentic handmade goods — natural dye textiles, backstrap-loom weavings, locally grown coffee, and cacao products. Browse the cooperatives and buy directly from the artisans. Prices are fair and the quality is excellent. This is your last chance to pick up gifts before the trip ends. Cash only — no exceptions in San Juan.",
                pills: [["Natural dye textiles & weavings", ""], ["Local coffee & cacao products", ""], ["Buy direct from cooperatives", ""], ["Cash only — no cards in San Juan", "pill-a"]],
            },
            {
                time: "Evening", icon: "🌅", title: "Last Evening in Guatemala — Dinner & Pack Up",
                desc: "Back in San Pedro for your final evening. Have a proper farewell dinner — somewhere with a lake view if you can get one. After dinner, head back to the hotel and pack everything up for an early departure tomorrow. Leave tips for hotel staff, double-check your bags, and get a good night's sleep. Guatemala delivered.",
                pills: [["Last dinner — make it a good one", ""], ["Tip hotel staff before you leave", ""], ["Pack tonight — early start tomorrow", "pill-w"], ["Get a full night's sleep", ""]],
            },
        ],
    },

    {
        cls: "d8", num: "07", tabDate: "Day 7", tabTitle: "Departure Day",
        mapPins: ["sanPedro", "panajachel", "antigua", "airport"],
        date: "Day 7 — Departure",
        title: "San Pedro → Antigua → Guatemala City Airport",
        sub: "Breakfast, two buses, and a long ride home — budget your time generously",
        base: "✈️  La Aurora International Airport (GUA) — 2+ hrs buffer before your flight, non-negotiable",
        tags: [["Travel Day", "t-dr"], ["Bus Change Antigua", "t-hi"], ["Traffic Delays Likely", "t-gl"]],
        drive: "⛵  San Pedro → Panajachel: ~30 min  |  🚐  Panajachel → Antigua: ~2.5–3 hrs  |  20 min changeover  |  🚐  Antigua → GUA Airport: ~1–1.5 hrs  |  Total: ~6 hrs",
        events: [
            {
                time: "Morning", icon: "☕", title: "Wake Up, Get Ready & Breakfast at a Local Café",
                desc: "Your last morning in Guatemala. Don't rush it — you've earned a proper sit-down breakfast. Head to a local café in San Pedro for coffee and something fresh. Enjoy it. The bus won't let you do this later. Check out of your hotel, tip the staff, and do a final bag check before you leave for the dock.",
                pills: [["Last Guatemalan breakfast — savour it", ""], ["Check out & tip hotel staff", ""], ["Final bag check before leaving", "pill-w"]],
            },
            {
                time: "Mid-Morning", icon: "⛵", title: "Lancha to Panajachel & Board Your Bus",
                desc: "Take a lancha from San Pedro to Panajachel dock, then make your way to the shuttle pickup point. As with all shuttles in Guatemala, arrive at the pickup location early — these buses will not wait. The driver will work a route picking up passengers from multiple hotels and stops around the area before heading out, which adds time at the start.",
                pills: [["Arrive pickup point early", "pill-a"], ["Bus will not wait", "pill-a"], ["Lancha to Pana first: ~30 min", ""]],
            },
            {
                time: "En Route", icon: "🚐", title: "Panajachel → Antigua — First Leg (~2.5–3 hrs)",
                desc: "The first bus leg takes you from Panajachel back through the highlands to Antigua. The route involves pickups along the way so the bus meanders before it gets moving properly. Settle in, enjoy the window views, and don't expect fast time. The full journey from San Pedro to the airport runs roughly 6 hours total — plan your flight around that reality and don't book a tight connection.",
                pills: [["~2.5–3 hrs Panajachel → Antigua", ""], ["Town pickups en route — adds time", ""], ["Total door-to-gate: ~6 hrs", "pill-w"]],
            },
            {
                time: "Antigua Stop", icon: "🔄", title: "Bus Change in Antigua — 20-Minute Break",
                desc: "You'll stop in Antigua to switch buses. The layover is around 20 minutes — just enough for the bathroom, a quick snack or coffee, and a stretch. Don't wander far from the drop-off point. Your onward bus to the airport departs from the same location and the connection has no slack. Stay close and be back before the driver signals to board.",
                pills: [["~20 min layover only", ""], ["Stay near the bus — don't wander", "pill-a"], ["Bathroom + snack opportunity", ""], ["Onward bus departs same spot", ""]],
            },
            {
                time: "Final Leg", icon: "🏙️", title: "Antigua → GUA Airport — Direct (~1–1.5 hrs)",
                desc: "The second bus goes directly from Antigua to La Aurora International Airport. Normally 1–1.5 hours, but the highway into Guatemala City is prone to heavy and unpredictable traffic delays. There is no detour and no workaround once you're in it. This is exactly where your time buffer gets consumed if something goes wrong — treat it seriously.",
                pills: [["Direct to GUA — no stops", ""], ["~1–1.5 hrs in normal traffic", ""], ["Highway delays: 30–60+ mins possible", "pill-w"], ["No detour available", "pill-a"]],
            },
            {
                time: "Airport", icon: "✈️", title: "Arrive GUA — Minimum 2 Hours Before Your Flight",
                desc: "You need at least 2 hours between the bus's expected drop-off time and your flight departure — and that's a minimum, not a comfortable buffer. Traffic delays on the Guatemala City highway are common and sometimes severe with no warning. La Aurora is manageable once inside, but international check-in and security take time. If your flight doesn't allow a 2-hour buffer after drop-off, seriously consider booking the previous day's last shuttle and overnighting near the airport.",
                pills: [["2 hrs gap minimum — not optional", "pill-a"], ["Traffic can add 30–60+ mins no warning", "pill-w"], ["International check-in queues add time", ""], ["Tight flight? Overnight near GUA instead", "pill-w"]],
            },
        ],
    },
];