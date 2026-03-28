'use client'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SLIDES, type Slide } from '@/lib/slides-data'
import { SlideRenderer } from './SlideRenderer'
// Inline SVG for slide viewer — no external dependencies

function SlideSection({ slide, index, total }: { slide: Slide; index: number; total: number }) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const ACT_COLORS: Record<number, string> = {
    1: '#1B3A6B', 2: '#1B3A6B', 3: '#1B3A6B',
    4: '#1B3A6B', 5: '#1B3A6B', 6: '#1B3A6B',
    7: '#1B3A6B', 8: '#C8202D', 9: '#C8202D', 10: '#1B3A6B',
    11: '#1B3A6B',
  }

  return (
    <section
      ref={ref}
      className="relative h-screen snap-start snap-always flex items-center justify-center overflow-hidden bg-[#0f1623]"
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${ACT_COLORS[slide.actNumber] || '#1B3A6B'}40, transparent)`
        }}
      />

      {/* Subtle center glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${ACT_COLORS[slide.actNumber] || '#1B3A6B'}15 0%, transparent 60%)`
        }}
      />

      <motion.div
        className="relative w-full max-w-[96vw] xl:max-w-[94vw] mx-auto px-1"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Slide card — large, nearly full viewport width */}
        <div className="slide-container rounded-lg overflow-hidden shadow-2xl">
          <SlideRenderer component={slide.component} id={slide.id} />
        </div>

        {/* Bottom info bar — outside the slide, in the dark space */}
        <div className="flex items-center justify-between mt-2 px-1">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: ACT_COLORS[slide.actNumber] || '#1B3A6B' }}
            >
              {slide.act}
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 text-xs">{slide.speaker}</span>
          </div>
          <span className="text-white/30 text-xs font-mono">{index + 1} / {total}</span>
        </div>
      </motion.div>
    </section>
  )
}

export function SlideViewer({ slides = SLIDES }: { slides?: Slide[] }) {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [])

  return (
    <main ref={mainRef} className="h-screen snap-y snap-mandatory overflow-y-auto bg-[#0f1623]">
      {/* Nav overlay — fixed, minimal, fades into background */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #0f1623 0%, transparent 100%)' }}>
        <div className="pointer-events-auto flex items-center gap-4">
          <Link href="/home" className="text-white/30 hover:text-white/60 text-xs transition-colors">
            ← Exit
          </Link>
          <svg viewBox="0 0 240 90" className="h-6 w-auto opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M 20 28 Q 120 -2 220 28" stroke="#C8202D" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
            <path d="M 20 50 Q 120 80 220 50" stroke="#C8202D" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
            <text x="120" y="52" fontFamily="Arial, Helvetica, sans-serif" fontSize="34" fontWeight="900" fontStyle="italic" fill="#ffffff" textAnchor="middle" letterSpacing="2">IPS</text>
            <text x="120" y="76" fontFamily="Arial, Helvetica, sans-serif" fontSize="8.5" fontWeight="600" fill="#ffffff" textAnchor="middle" letterSpacing="1.5">INTEGRATED PROTECTION SERVICES</text>
          </svg>
        </div>
        <div className="pointer-events-auto">
          <span className="text-white/20 text-xs">Scroll to navigate</span>
        </div>
      </div>

      {/* Slides as full-screen snap sections */}
      {slides.map((slide, i) => (
        <SlideSection key={slide.id} slide={slide} index={i} total={slides.length} />
      ))}
    </main>
  )
}
