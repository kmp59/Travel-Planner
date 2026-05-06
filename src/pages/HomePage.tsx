import { Link } from 'react-router-dom'

const trips = [
    {
        path: '/banff',
        title: 'Canadian Rockies',
        sub: 'Banff · Yoho · Glacier · Kootenay',
        dates: 'June 17–19, 2025',
        color: '#5ba3c9',
        emoji: '🏔️',
    },
    {
        path: '/guatemala',
        title: 'Guatemala',
        sub: 'Antigua · Volcán de Fuego · Lago de Atitlán',
        dates: '7 Days',
        color: '#5dbfa0',
        emoji: '🌋',
    },
]

export default function HomePage() {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#0d1c2a',
            padding: '64px 24px',
            fontFamily: 'Georgia, serif',
        }}>
            {/* Header */}
            <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <p style={{
                    fontFamily: 'monospace', fontSize: 11, letterSpacing: 4,
                    textTransform: 'uppercase', color: '#5ba3c9', marginBottom: 10,
                }}>
                    Private Itineraries
                </p>
                <h1 style={{
                    color: '#f7f4f0', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                    fontWeight: 700, lineHeight: 1.1, marginBottom: 8,
                }}>
                    My Travel Itineraries
                </h1>
                <p style={{
                    color: '#7baabf', fontStyle: 'italic',
                    fontSize: '1.1rem', marginBottom: 48,
                }}>
                    Each destination is password-protected — pick a trip to continue.
                </p>

                {/* Trip cards */}
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                    {trips.map(t => (
                        <Link key={t.path} to={t.path} style={{ textDecoration: 'none', flex: '1 1 240px', minWidth: 220 }}>
                            <div style={{
                                background: 'rgba(255,255,255,.05)',
                                border: `1px solid ${t.color}44`,
                                borderTop: `3px solid ${t.color}`,
                                borderRadius: 14,
                                padding: '28px 28px 24px',
                                cursor: 'pointer',
                                transition: 'background .18s, transform .18s',
                                position: 'relative',
                            }}
                                 onMouseEnter={e => {
                                     (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,.08)'
                                     ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
                                 }}
                                 onMouseLeave={e => {
                                     (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,.05)'
                                     ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                                 }}
                            >
                                {/* Lock badge */}
                                <div style={{
                                    position: 'absolute', top: 14, right: 14,
                                    background: `${t.color}22`,
                                    border: `1px solid ${t.color}55`,
                                    borderRadius: 100, padding: '3px 9px',
                                    fontFamily: 'monospace', fontSize: 10,
                                    color: t.color, letterSpacing: 1,
                                    display: 'flex', alignItems: 'center', gap: 4,
                                }}>
                                    🔒 Protected
                                </div>

                                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{t.emoji}</div>

                                <div style={{
                                    fontFamily: 'monospace', fontSize: 10, letterSpacing: 3,
                                    color: t.color, marginBottom: 8, textTransform: 'uppercase',
                                }}>
                                    {t.dates}
                                </div>

                                <div style={{
                                    color: '#f7f4f0', fontSize: '1.35rem',
                                    fontWeight: 700, marginBottom: 6,
                                }}>
                                    {t.title}
                                </div>

                                <div style={{ color: '#a8cfe0', fontStyle: 'italic', fontSize: '0.95rem' }}>
                                    {t.sub}
                                </div>

                                <div style={{
                                    marginTop: 20, color: t.color,
                                    fontFamily: 'monospace', fontSize: 11, letterSpacing: 1,
                                    display: 'flex', alignItems: 'center', gap: 6,
                                }}>
                                    View itinerary →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}