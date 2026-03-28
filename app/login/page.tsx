'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { IPSLogo, XavierBadge } from '@/components/IPSLogo'

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
      style={{ backgroundColor: '#1a1a1f' }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26, 58, 143, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 58, 143, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top-right accent orb — IPS navy */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(26, 58, 143, 0.3) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Bottom-left accent orb — IPS red */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(204, 34, 34, 0.15) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
          filter: 'blur(60px)',
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
          className="rounded-2xl border border-white/10 p-10 shadow-2xl"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(12px)' }}
        >
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <IPSLogo className="h-12 w-auto" />
            <div className="w-px h-8 bg-white/20" />
            <XavierBadge className="h-10 w-auto opacity-70" />
          </div>

          {/* Title */}
          <h1 className="text-center text-white text-2xl font-bold tracking-tight mb-1">
            Strategic Capstone Portal
          </h1>

          {/* Subtitle */}
          <p className="text-center text-white/40 text-sm font-medium mb-8 tracking-wide">
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
                className="w-full px-4 py-3 rounded-lg text-white placeholder-white/30 text-sm outline-none transition-all disabled:opacity-50"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
                onFocus={e => {
                  e.currentTarget.style.border = '1px solid #1B3A6B'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 58, 143, 0.25)'
                }}
                onBlur={e => {
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
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
                  className="text-red-400 text-sm text-center"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-lg text-white text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#1B3A6B' }}
              onMouseEnter={e => {
                if (!loading && password) {
                  e.currentTarget.style.backgroundColor = '#122847'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#1B3A6B'
              }}
            >
              {loading ? 'Verifying...' : 'Access Portal'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-white/20 text-xs mt-6 tracking-wide">
          Integrated Protection Services · Confidential
        </p>
      </motion.div>
    </div>
  )
}
