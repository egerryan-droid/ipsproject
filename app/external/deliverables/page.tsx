import SiteNav from '@/components/layout/SiteNav'
import Link from 'next/link'
import { DELIVERABLES } from '@/lib/constants'

const FRAMEWORK_ICONS: Record<string, string> = {
  'pestel': 'P',
  'five-forces': '5F',
  'driving-forces': 'DF',
  'key-success-factors': 'KSF',
  'value-net': 'VN',
  'strategic-groups': 'SG',
  'competitive-analysis': 'CA',
  'conclusions': 'C',
}

export default function DeliverablesIndexPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen bg-[#f5f5f8]">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-[#80848f] mb-3">
              <Link href="/external" className="hover:text-[#1B3A6B] transition-colors">External Analysis</Link>
              <span>/</span>
              <span className="text-[#1a1a1f]">Deliverables</span>
            </div>
            <h1 className="text-3xl font-extrabold text-[#1a1a1f] mb-2">External Analysis Deliverables</h1>
            <p className="text-[#80848f]">Eight strategic frameworks applied to the fire and security integration industry.</p>
          </div>
        </div>

        {/* List */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="space-y-2">
            {DELIVERABLES.map((d, i) => (
              <Link
                key={d.slug}
                href={`/external/deliverables/${d.slug}`}
                className="flex items-center gap-5 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#1B3A6B]/40 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e8edf7] text-[#1B3A6B] font-extrabold text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B3A6B] group-hover:text-white transition-all">
                  {FRAMEWORK_ICONS[d.slug] || (i + 1)}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1a1a1f] group-hover:text-[#1B3A6B] transition-colors">{d.label}</div>
                  <div className="text-sm text-[#80848f] mt-0.5">{d.description}</div>
                </div>
                <span className="text-[#80848f] group-hover:text-[#1B3A6B] text-lg transition-all group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Back to presentation CTA */}
          <div className="mt-8 p-6 bg-[#e8edf7] rounded-xl border border-[#1B3A6B]/20">
            <p className="text-sm text-[#80848f] mb-3">Looking for the full narrative?</p>
            <Link href="/external/presentation" className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white font-semibold rounded-xl px-5 py-2.5 text-sm hover:bg-[#122847] transition-all">
              View the 21-Slide Presentation
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
