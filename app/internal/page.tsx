import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'
import { INTERNAL_DELIVERABLES } from '@/lib/constants'

export default function InternalPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-ips-red uppercase tracking-widest text-sm font-semibold mb-4">
              Phase 2
            </p>
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">Internal Analysis</h1>
            <p className="text-white/60 max-w-2xl mb-8">
              What the numbers say about where IPS really stands — VRIO assessment,
              value chain analysis, the glass house thesis, model pressure testing,
              and the capstone thesis that ties everything together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/internal/presentation"
                className="bg-ips-red text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-ips-red/90 transition-colors"
              >
                View Presentation (20 Slides)
              </Link>
              <Link
                href="/internal/deliverables"
                className="bg-white/10 text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-white/20 transition-colors"
              >
                Browse Deliverables
              </Link>
              <Link
                href="/internal/dashboard"
                className="bg-white/10 text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-white/20 transition-colors"
              >
                Financial Dashboard
              </Link>
            </div>
          </div>
        </section>

        {/* Deliverables grid */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-xl font-bold text-ips-dark mb-6">Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INTERNAL_DELIVERABLES.map((d) => (
              <Link
                key={d.slug}
                href={`/internal/deliverables/${d.slug}`}
                className="group rounded-xl border border-gray-100 hover:border-ips-red/30 hover:shadow-sm p-5 transition-all"
              >
                <h3 className="font-bold text-ips-dark group-hover:text-ips-red transition-colors">
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
