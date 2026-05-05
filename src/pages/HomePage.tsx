import { Link } from 'react-router-dom'

const trips = [
    {
        path: '/banff',
        title: 'Canadian Rockies',
        sub: 'Banff · Yoho · Glacier · Kootenay',
        dates: 'June 17–19, 2025',
        color: '#5ba3c9',
    },
    {
        path: '/guatemala',
        title: 'Guatemala',
        sub: 'Coming soon',
        dates: '—',
        color: '#4a8c5c',
    },
]

export default function HomePage() {
    return (
        <div style={{ minHeight: '100vh', background: '#0d1c2a', padding: '48px 24px', fontFamily: 'Georgia, serif' }}>
            <h1 style={{ color: '#f7f4f0', fontSize: '2.5rem', marginBottom: 8 }}>My Travel Itineraries</h1>
            <p style={{ color: '#5ba3c9', marginBottom: 40, fontStyle: 'italic' }}>Pick a destination</p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {trips.map(t => (
                    <Link key={t.path} to={t.path} style={{ textDecoration: 'none' }}>
                        <div style={{
                            background: 'rgba(255,255,255,.05)', border: `1px solid ${t.color}55`,
                            borderTop: `3px solid ${t.color}`, borderRadius: 14,
                            padding: '28px 32px', minWidth: 240, cursor: 'pointer',
                            transition: 'background .2s',
                        }}>
                            <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: 3, color: t.color, marginBottom: 8, textTransform: 'uppercase' }}>{t.dates}</div>
                            <div style={{ color: '#f7f4f0', fontSize: '1.4rem', fontWeight: 700, marginBottom: 4 }}>{t.title}</div>
                            <div style={{ color: '#a8cfe0', fontStyle: 'italic' }}>{t.sub}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}