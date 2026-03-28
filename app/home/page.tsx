'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SiteNav from '@/components/layout/SiteNav'
import { IPSLogo } from '@/components/IPSLogo'
import { PHASES } from '@/lib/constants'

const METRICS = [
  { value: '$55M', label: '2025 Revenue' },
  { value: '20%', label: 'Organic Growth' },
  { value: '3-5yr', label: 'Action Window' },
  { value: '242', label: 'PE Deals in 2025' },
]

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <IPSLogo className="h-14 w-auto mb-8" height={56} priority />
            <p className="text-ips-red uppercase tracking-widest text-sm font-semibold mb-4">
              Strategic Intelligence Platform
            </p>
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Integrated Protection Services
            </h1>
            <div className="w-24 h-1 bg-ips-red rounded mb-6"></div>
            <p className="text-xl text-white/60 max-w-2xl mb-12">
              A complete strategic analysis delivered as a living intelligence platform — built to
              inform decisions, not just fill a slide deck.
            </p>

            {/* Metric bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="bg-white/10 rounded-xl p-4 border border-white/15"
                >
                  <div className="text-3xl font-extrabold text-white">{m.value}</div>
                  <div className="text-sm text-white/60 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-ips-dark mb-8">Capstone Phases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHASES.map((phase, i) => (
              <PhaseCard key={phase.slug} phase={phase} index={i} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-ips-light py-8">
          <div className="max-w-5xl mx-auto text-center space-y-1">
            <p className="text-xs font-medium text-xavier-gray">
              Built by Xavier EMBA Capstone Team 2026
            </p>
            <p className="text-xs text-ips-gray">
              Choi&nbsp;·&nbsp;Eger&nbsp;·&nbsp;McKean&nbsp;·&nbsp;Peat&nbsp;·&nbsp;Tucker
              &nbsp;&nbsp;|&nbsp;&nbsp;Advisor: Dr. Bott
            </p>
            <p className="text-[10px] text-ips-gray">
              Confidential — Prepared for IPS Leadership
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

type PhaseProps = {
  phase: (typeof PHASES)[number]
  index: number
}

function PhaseCard({ phase, index }: PhaseProps) {
  const isLive = phase.status === 'live'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={
        isLive
          ? 'border-2 border-accent bg-white shadow-sm rounded-2xl p-6 flex flex-col gap-4'
          : 'border-2 border-gray-100 bg-ips-light opacity-70 rounded-2xl p-6 flex flex-col gap-4'
      }
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest font-semibold text-ips-gray">
          Phase {phase.number}
        </span>
        {isLive ? (
          <span className="text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-1 uppercase tracking-wide">
            Live
          </span>
        ) : (
          <span className="text-xs font-bold text-ips-gray bg-gray-100 rounded-full px-3 py-1 uppercase tracking-wide">
            Coming Soon
          </span>
        )}
      </div>

      {/* Title & description */}
      <div>
        <h3 className="text-xl font-bold text-ips-dark">{phase.label}</h3>
        <p className="text-sm text-ips-gray mt-1">{phase.description}</p>
      </div>

      {/* Buttons */}
      {isLive ? (
        <div className="flex flex-wrap gap-3 mt-auto">
          <Link
            href={`/${phase.slug}/presentation`}
            className="bg-accent text-white text-sm font-semibold rounded-lg px-4 py-2 hover:bg-accent-dark transition-colors"
          >
            View Presentation
          </Link>
          <Link
            href={`/${phase.slug}/deliverables`}
            className="bg-accent/10 text-accent text-sm font-semibold rounded-lg px-4 py-2 hover:bg-accent/20 transition-colors"
          >
            Deliverables
          </Link>
        </div>
      ) : (
        <div className="mt-auto">
          <button
            disabled
            className="bg-gray-100 text-ips-gray text-sm font-semibold rounded-lg px-4 py-2 cursor-not-allowed"
          >
            In Progress
          </button>
        </div>
      )}
    </motion.div>
  )
}
