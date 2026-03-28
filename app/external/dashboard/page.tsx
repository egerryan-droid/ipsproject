import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const DASHBOARD_SECTIONS = [
  {
    title: 'PE Platform Tracker',
    href: '/external/dashboard/pe-tracker',
    description: 'Capital structures, acquisition pace, and geographic threat mapping for PE-backed fire/security platforms',
    items: ['Convergint ($2.7B)', 'Pye-Barker ($1.0B)', 'Everon ($782M)', 'Pavion ($625M)', 'Silco ($60-80M)'],
    accent: 'border-l-4 border-l-[#C8202D]',
  },
  {
    title: 'EC Consolidation Monitor',
    href: '/external/dashboard/ec-monitor',
    description: 'Electrical contractor roll-up activity, vertical integration evidence, and IPS customer ownership risk',
    items: ['ArchKey / 26North', 'EMCOR (F500)', 'IES Holdings', 'State Group / Apollo'],
    accent: 'border-l-4 border-l-[#D96619]',
  },
  {
    title: 'Market Activity',
    href: '/external/dashboard/market',
    description: 'Deal volume trends, marquee transactions, valuation multiples, and capital deployment across fire/security and EC',
    items: ['Deal volume trends', 'Marquee transactions', 'Valuation multiples', 'Regional incursions'],
    accent: 'border-l-4 border-l-[#0D8090]',
  },
  {
    title: 'Competitive Landscape',
    href: '/external/dashboard/pe-tracker',
    description: 'IPS positioning against PE-backed national platforms and independent peers in OH/KY/TN markets',
    items: ['IPS vs. PE platforms', 'Market encirclement timeline', 'Leonard Green dual ownership', 'Silco benchmarking'],
    accent: 'border-l-4 border-l-[#1B3A6B]',
  },
]

export default function ResearchDashboardPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#C8202D] uppercase tracking-widest text-sm font-semibold mb-4">
              External Analysis
            </p>
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">Research &amp; Intelligence</h1>
            <p className="text-white/60 max-w-2xl mb-8">
              PE consolidation tracking, competitive intelligence, and market research
              synthesized from PitchBook data, deal analysis, and primary source research.
              Updated March 2026.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/external"
                className="bg-white/10 text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-white/20 transition-colors"
              >
                Back to External Analysis
              </Link>
            </div>
          </div>
        </section>

        {/* Dashboard Cards */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/external" className="text-sm text-ips-gray hover:text-accent transition-colors">
              External Analysis
            </Link>
            <span className="text-ips-gray mx-2">/</span>
            <span className="text-sm text-ips-dark font-medium">Research &amp; Intelligence</span>
          </div>

          {/* Key Takeaways */}
          <div className="mb-10 rounded-xl border-l-4 border-[#1B3A6B] bg-[#e8edf7] p-6">
            <h3 className="text-sm font-bold text-[#1B3A6B] uppercase tracking-widest mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-[#1a1a1f]">
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> $9.6B+ in PE capital deployed across fire, security, and electrical contractor consolidation</li>
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> Leonard Green controls both #1 and #2 platforms — $3.7B combined. One board decision from operational coordination.</li>
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> 3 of IPS&apos;s 8 EC customers are already PE/corporate-owned. The displacement is not hypothetical.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-ips-dark mb-6">Intelligence Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DASHBOARD_SECTIONS.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className={`group rounded-xl border border-gray-100 hover:border-[#C8202D]/30 hover:shadow-md p-6 transition-all ${section.accent}`}
              >
                <h3 className="font-bold text-ips-dark group-hover:text-[#C8202D] transition-colors text-lg mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-ips-gray mb-4">{section.description}</p>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item} className="text-xs text-ips-gray flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-ips-gray/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          {/* Key Stats Banner */}
          <div className="mt-10 rounded-xl bg-[#1B3A6B] p-6">
            <h3 className="text-white font-bold text-lg mb-4">Market Snapshot</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { stat: '$9.6B+', label: 'PE capital deployed in fire/security' },
                { stat: '57/yr', label: 'Pye-Barker acquisition pace' },
                { stat: '4', label: 'PE competitors in Cincinnati' },
                { stat: '$255B', label: 'EC industry revenue' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-white">{s.stat}</p>
                  <p className="text-xs text-white/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
