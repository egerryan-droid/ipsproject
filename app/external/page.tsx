import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'
import { DELIVERABLES } from '@/lib/constants'

export default function ExternalPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-4">
              Phase 1
            </p>
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">External Analysis</h1>
            <p className="text-white/60 max-w-2xl mb-8">
              A comprehensive scan of the fire and security integration industry — covering
              macro-environmental forces, competitive dynamics, driving forces, and the
              strategic groups defining where the market is headed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/external/presentation"
                className="bg-accent text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-accent-dark transition-colors"
              >
                View Presentation (10 Slides)
              </Link>
              <Link
                href="/external/deliverables"
                className="bg-white/10 text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-white/20 transition-colors"
              >
                Browse Deliverables
              </Link>
              <Link
                href="/external/summary"
                className="bg-white/10 text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-white/20 transition-colors"
              >
                Executive Summary
              </Link>
              <Link
                href="/external/dashboard"
                className="bg-white/10 text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-white/20 transition-colors"
              >
                Research & Intelligence
              </Link>
            </div>
          </div>
        </section>

        {/* Deliverables grid */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-xl font-bold text-ips-dark mb-6">Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DELIVERABLES.map((d) => (
              <Link
                key={d.slug}
                href={`/external/deliverables/${d.slug}`}
                className="group rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-sm p-5 transition-all"
              >
                <h3 className="font-bold text-ips-dark group-hover:text-accent transition-colors">
                  {d.label}
                </h3>
                <p className="text-sm text-ips-gray mt-1">{d.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
