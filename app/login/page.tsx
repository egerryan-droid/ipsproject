'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
// Login page uses plain <img> tags — Next.js Image optimization
// can fail on unauthenticated client-rendered pages

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/home')
      } else {
        const data = await res.json()
        setError(data.error || 'Incorrect password')
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#f0f2f5' }}
    >
      {/* Subtle navy accent at top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: '#1B3A6B' }} />

      {/* Light grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(27, 58, 107, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27, 58, 107, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div
          className="rounded-2xl border border-gray-200 p-10 shadow-lg bg-white"
        >
          {/* Logos — inline SVG to bypass any auth/middleware blocking of static files */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <svg viewBox="0 0 240 90" width={172} height={48} xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M 20 28 Q 120 -2 220 28" stroke="#C8202D" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
              <path d="M 20 50 Q 120 80 220 50" stroke="#C8202D" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
              <text x="120" y="52" fontFamily="Arial, Helvetica, sans-serif" fontSize="34" fontWeight="900" fontStyle="italic" fill="#1B3A6B" textAnchor="middle" letterSpacing="2">IPS</text>
              <text x="120" y="76" fontFamily="Arial, Helvetica, sans-serif" fontSize="8.5" fontWeight="600" fill="#1B3A6B" textAnchor="middle" letterSpacing="1.5">INTEGRATED PROTECTION SERVICES</text>
            </svg>
            <div className="w-px h-8 bg-gray-300" />
            <svg viewBox="0 0 100 112" width={36} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" className="opacity-70">
              <line x1="8" y1="2" x2="92" y2="70" stroke="#14284a" strokeWidth="28" strokeLinecap="square"/>
              <line x1="92" y1="2" x2="8" y2="70" stroke="#14284a" strokeWidth="28" strokeLinecap="square"/>
              <line x1="8" y1="2" x2="92" y2="70" stroke="#1e3d7a" strokeWidth="9" strokeLinecap="square"/>
              <line x1="92" y1="2" x2="8" y2="70" stroke="#1e3d7a" strokeWidth="9" strokeLinecap="square"/>
              <circle cx="50" cy="36" r="5.5" fill="none" stroke="#f0f2f5" strokeWidth="2"/>
              <circle cx="50" cy="36" r="2" fill="#f0f2f5"/>
              <text x="50" y="90" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="800" fill="#14284a" textAnchor="middle" letterSpacing="1.4">EXECUTIVE MBA</text>
              <text x="50" y="104" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="400" fill="#5a5a6e" textAnchor="middle" letterSpacing="1.4">PROGRAM</text>
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-center text-[#1B3A6B] text-2xl font-bold tracking-tight mb-1">
            Strategic Capstone Portal
          </h1>

          {/* Subtitle */}
          <p className="text-center text-[#80848f] text-sm font-medium mb-8 tracking-wide">
            Xavier EMBA · 2026
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter portal password"
                autoComplete="current-password"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg text-[#1a1a1f] placeholder-gray-400 text-sm outline-none transition-all disabled:opacity-50 bg-gray-50 border border-gray-200 focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/20"
              />
            </div>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#C8202D] text-sm text-center"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-lg text-white text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-[#1B3A6B] hover:bg-[#122847]"
            >
              {loading ? 'Verifying...' : 'Access Portal'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6 tracking-wide">
          Integrated Protection Services · Confidential
        </p>
      </motion.div>
    </div>
  )
}
