import { useState } from 'react'

const CORRECT_PASSWORD = import.meta.env.VITE_SITE_PASSWORD

interface PasswordGateProps {
    children: React.ReactNode
}

export default function PasswordGate({ children }: PasswordGateProps) {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const [unlocked, setUnlocked] = useState(
        () => sessionStorage.getItem('auth') === 'true'
    )

    const handleSubmit = () => {
        if (input === CORRECT_PASSWORD) {
            sessionStorage.setItem('auth', 'true')
            setUnlocked(true)
        } else {
            setError(true)
            setInput('')
            setTimeout(() => setError(false), 2000)
        }
    }

    if (unlocked) return <>{children}</>

    return (
        <div style={{
            height: '100vh', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            background: '#0d1c2a', fontFamily: 'Georgia, serif', gap: '16px'
        }}>
            <div style={{ color: '#cce5f6', fontSize: '1.5rem', marginBottom: '8px' }}>
                🏔️ Rockies Itinerary
            </div>
            <div style={{ color: '#5ba3c9', fontSize: '0.85rem', letterSpacing: '2px' }}>
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
                    background: 'rgba(255,255,255,0.07)', border: `1px solid ${error ? '#f4a07a' : 'rgba(91,163,201,0.4)'}`,
                    borderRadius: '8px', padding: '12px 18px', color: '#f7f4f0',
                    fontSize: '1rem', outline: 'none', width: '260px',
                    transition: 'border-color 0.2s'
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
                    background: 'rgba(91,163,201,0.2)', border: '1px solid rgba(91,163,201,0.5)',
                    borderRadius: '8px', padding: '10px 32px', color: '#cce5f6',
                    fontSize: '0.95rem', cursor: 'pointer', letterSpacing: '1px'
                }}
            >
                Unlock
            </button>
        </div>
    )
}