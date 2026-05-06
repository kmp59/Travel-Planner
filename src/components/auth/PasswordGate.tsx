import { useState } from 'react'

interface PasswordGateProps {
    children: React.ReactNode
    /** sessionStorage key — unique per page so each page has independent auth */
    storageKey: string
    /** The correct password — pass import.meta.env.VITE_XXX from the page */
    password: string
    /** Display label shown on the lock screen, e.g. "Canadian Rockies" */
    label?: string
    /** Accent colour for the lock screen chrome */
    accentColor?: string
}

export default function PasswordGate({
                                         children,
                                         storageKey,
                                         password,
                                         label = 'Itinerary',
                                         accentColor = '#5ba3c9',
                                     }: PasswordGateProps) {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const [unlocked, setUnlocked] = useState(
        () => sessionStorage.getItem(storageKey) === 'true'
    )

    const handleSubmit = () => {
        if (input === password) {
            sessionStorage.setItem(storageKey, 'true')
            setUnlocked(true)
        } else {
            setError(true)
            setInput('')
            setTimeout(() => setError(false), 2000)
        }
    }

    if (unlocked) return <>{children}</>

    const border = (alpha: number) =>
        accentColor.startsWith('#')
            ? `${accentColor}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`
            : accentColor

    return (
        <div style={{
            height: '100vh', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: '#0d1c2a', fontFamily: 'Georgia, serif', gap: '16px',
        }}>
            <div style={{ fontSize: '2rem', marginBottom: '4px' }}>🔒</div>

            <div style={{ color: '#f0e8dc', fontSize: '1.4rem', fontWeight: 700, marginBottom: '2px' }}>
                {label}
            </div>

            <div style={{
                color: accentColor,
                fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase',
                marginBottom: '8px',
            }}>
                ENTER ACCESS KEY
            </div>

            <input
                type="password"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                placeholder="Secret key"
                autoFocus
                style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: `1px solid ${error ? '#f4a07a' : border(0.4)}`,
                    borderRadius: '8px', padding: '12px 18px',
                    color: '#f7f4f0', fontSize: '1rem', outline: 'none',
                    width: '260px', transition: 'border-color 0.2s',
                }}
            />

            {error && (
                <div style={{ color: '#f4a07a', fontSize: '0.85rem' }}>
                    Incorrect key. Try again.
                </div>
            )}

            <button
                onClick={handleSubmit}
                style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: `1px solid ${border(0.5)}`,
                    borderRadius: '8px', padding: '10px 32px',
                    color: '#f0e8dc', fontSize: '0.95rem',
                    cursor: 'pointer', letterSpacing: '1px',
                    transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.11)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            >
                Unlock
            </button>
        </div>
    )
}