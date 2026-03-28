import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'
import { PHASES } from '@/lib/constants'

const phase = PHASES.find((p) => p.slug === 'final')!

export default function FinalPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen flex items-center justify-center bg-ips-light">
        <div className="text-center px-6 max-w-md">
          {/* Icon circle */}
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 text-2xl">
            🔒
          </div>

          <p className="text-xs uppercase tracking-widest font-semibold text-ips-gray mb-2">
            Phase {phase.number}
          </p>
          <h1 className="text-3xl font-extrabold text-ips-dark mb-4">{phase.label}</h1>
          <p className="text-ips-gray mb-2">{phase.description}</p>
          <p className="text-sm text-ips-gray mb-8">
            This phase is currently in progress and will be published after May 8, 2026.
          </p>

          <Link
            href="/home"
            className="inline-block bg-accent text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-accent-dark transition-colors"
          >
            Back to Overview
          </Link>
        </div>
      </main>
    </>
  )
}
