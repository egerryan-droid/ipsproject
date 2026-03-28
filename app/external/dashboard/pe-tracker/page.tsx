import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const PE_PLATFORMS = [
  { platform: 'Convergint Technologies', revenue: '$2.7B', employees: '11,000', sponsor: 'Leonard Green / Ares', valuation: '$5-7B est.', debt: '$2.7B', undrawn: 'Not disclosed', pace: '~10/yr' },
  { platform: 'Pye-Barker Fire & Safety', revenue: '$1.0B', employees: '8,000', sponsor: 'Leonard Green', valuation: '$6.1B', debt: '$4.3B', undrawn: '$680M', pace: '57/yr' },
  { platform: 'Everon (fka ADT Commercial)', revenue: '$782M', employees: '5,000', sponsor: 'GTCR', valuation: '$1.61B', debt: '$1.61B', undrawn: '~$200M', pace: '8 since LBO' },
  { platform: 'Pavion', revenue: '$625M', employees: '2,000+', sponsor: 'Wind Point', valuation: 'N/A', debt: 'Blackstone', undrawn: 'Significant', pace: '15+ sisters' },
  { platform: 'Silco Fire & Security', revenue: '~$60-80M', employees: '450', sponsor: 'None', valuation: 'N/A', debt: 'N/A', undrawn: 'Retained earnings', pace: 'Organic' },
]

const REGIONAL_THREATS = [
  { market: 'Cincinnati, OH', competitor: 'Convergint', acquisition: 'Digital Visions', date: 'Jun 2025', threat: 'CRITICAL' },
  { market: 'Mason, OH', competitor: 'Pye-Barker', acquisition: 'Shiver Security', date: 'Recent', threat: 'CRITICAL' },
  { market: 'Cincinnati, OH', competitor: 'Pavion', acquisition: 'Turnkey Technology', date: 'Ongoing', threat: 'HIGH' },
  { market: 'Somerset, KY', competitor: 'Pye-Barker', acquisition: 'Modern Systems', date: 'Recent', threat: 'HIGH' },
  { market: 'Louisville, KY', competitor: 'Pye-Barker', acquisition: 'Care Security', date: 'Nov 2025', threat: 'HIGH' },
]

function ThreatBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    CRITICAL: 'bg-red-100 text-red-700 border border-red-200',
    HIGH: 'bg-orange-100 text-orange-700 border border-orange-200',
    MODERATE: 'bg-amber-100 text-amber-700 border border-amber-200',
    LOW: 'bg-gray-100 text-gray-500 border border-gray-200',
  }
  return (
    <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${styles[level] || styles.LOW}`}>
      {level}
    </span>
  )
}

export default function PETrackerPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-2 leading-tight">PE Platform Intelligence</h1>
            <p className="text-white/60 max-w-2xl">
              Capital structures, acquisition war chests, and geographic threat mapping for the five
              PE-backed fire and security platforms competing in IPS markets. Source: PitchBook, March 2026.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/external" className="text-sm text-ips-gray hover:text-accent transition-colors">
              External Analysis
            </Link>
            <span className="text-ips-gray mx-2">/</span>
            <Link href="/external/dashboard" className="text-sm text-ips-gray hover:text-accent transition-colors">
              Research &amp; Intelligence
            </Link>
            <span className="text-ips-gray mx-2">/</span>
            <span className="text-sm text-ips-dark font-medium">PE Platform Tracker</span>
          </div>

          {/* Leonard Green Dual Ownership Callout */}
          <div className="mb-8 rounded-xl border-2 border-[#C8202D] bg-red-50/50 p-5">
            <div className="flex items-start gap-3">
              <span className="text-[#C8202D] text-2xl font-bold flex-shrink-0">!!</span>
              <div>
                <h3 className="font-bold text-[#C8202D] text-lg mb-1">Leonard Green Dual Ownership</h3>
                <p className="text-sm text-ips-dark">
                  Leonard Green &amp; Partners controls <strong>BOTH</strong> the #1 and #2 PE-backed platforms &mdash;
                  Convergint Technologies ($2.7B) and Pye-Barker Fire &amp; Safety ($1.0B).
                  Combined: <strong>$3.7B revenue, ~19,000 employees</strong> under a single PE firm.
                  Potential for coordinated market strategy, combined purchasing power, and shared acquisition playbook.
                </p>
              </div>
            </div>
          </div>

          {/* PE Platform Comparison */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">PE Platform Comparison</h2>
            <p className="text-sm text-ips-gray mb-4">
              Capital structures and acquisition firepower for the five primary competitors.
              Pye-Barker&apos;s $680M undrawn capacity could fund 15-20 acquisitions the size of IPS in a single year.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold text-ips-gray">Platform</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">Revenue</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">Employees</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">PE Sponsor</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">Valuation</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">Debt</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">Undrawn</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">Acq. Pace</th>
                  </tr>
                </thead>
                <tbody>
                  {PE_PLATFORMS.map((p) => (
                    <tr key={p.platform} className="border-t border-gray-50">
                      <td className="px-4 py-3 font-medium text-ips-dark whitespace-nowrap">{p.platform}</td>
                      <td className="px-4 py-3 font-semibold text-ips-dark">{p.revenue}</td>
                      <td className="px-4 py-3 text-ips-dark">{p.employees}</td>
                      <td className="px-4 py-3 text-ips-dark">{p.sponsor}</td>
                      <td className="px-4 py-3 text-ips-dark">{p.valuation}</td>
                      <td className="px-4 py-3 text-ips-dark">{p.debt}</td>
                      <td className="px-4 py-3 text-ips-dark">{p.undrawn}</td>
                      <td className={`px-4 py-3 font-semibold ${p.pace === '57/yr' ? 'text-[#C8202D]' : 'text-ips-dark'}`}>
                        {p.pace}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Estimated Annual M&A Budgets */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Estimated Annual M&amp;A Budgets</h2>
            <p className="text-sm text-ips-gray mb-4">
              Estimated annual acquisition spend by platform, based on debt facilities and deal frequency.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 font-semibold text-ips-gray">Platform</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Est. Annual M&amp;A Budget</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Typical Target Size</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Funding Source</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { platform: 'Convergint', budget: '$200-400M/yr', target: '$10-50M revenue', source: 'Cash flow + debt draws' },
                    { platform: 'Pye-Barker', budget: '$500M-1B/yr', target: '$5-30M revenue', source: 'DDTL + revolver + cash flow' },
                    { platform: 'Pavion', budget: '$100-200M/yr', target: '$10-40M revenue', source: 'Wind Point equity + Blackstone debt' },
                    { platform: 'Everon', budget: '$100-200M/yr', target: '$10-50M revenue', source: 'DDTL + revolver + GTCR equity' },
                    { platform: 'Silco', budget: 'Minimal', target: 'N/A', source: 'Retained earnings only' },
                  ].map((r) => (
                    <tr key={r.platform} className="border-t border-gray-50">
                      <td className="px-5 py-3 font-medium text-ips-dark">{r.platform}</td>
                      <td className={`px-5 py-3 font-semibold ${r.budget.includes('1B') ? 'text-[#C8202D]' : 'text-ips-dark'}`}>{r.budget}</td>
                      <td className="px-5 py-3 text-ips-dark">{r.target}</td>
                      <td className="px-5 py-3 text-ips-gray">{r.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Regional Threat Map */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Regional Threat Map &mdash; IPS Markets</h2>
            <p className="text-sm text-ips-gray mb-4">
              Direct market incursions by PE-backed platforms into IPS&apos;s OH/KY/TN footprint.
              Cincinnati is the most contested zone with four PE-backed competitors now present.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 font-semibold text-ips-gray">Market</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Competitor</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Acquisition</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Date</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Threat</th>
                  </tr>
                </thead>
                <tbody>
                  {REGIONAL_THREATS.map((t, i) => (
                    <tr key={`${t.market}-${t.competitor}-${i}`} className="border-t border-gray-50">
                      <td className="px-5 py-3 font-medium text-ips-dark">{t.market}</td>
                      <td className="px-5 py-3 text-ips-dark">{t.competitor}</td>
                      <td className="px-5 py-3 text-ips-dark">{t.acquisition}</td>
                      <td className="px-5 py-3 text-ips-gray">{t.date}</td>
                      <td className="px-5 py-3"><ThreatBadge level={t.threat} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Encirclement Timeline */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Market Encirclement Timeline</h2>
            <div className="rounded-xl border border-gray-100 p-5">
              <div className="space-y-3">
                {[
                  { year: '2019-2023', event: 'IPS markets relatively insulated from PE-backed consolidators', color: 'bg-green-500' },
                  { year: '2023', event: 'GTCR carves Everon out of ADT; national coverage but no specific OH/KY moves', color: 'bg-amber-500' },
                  { year: '2025 Q2', event: 'Convergint acquires Digital Visions IN Cincinnati', color: 'bg-[#C8202D]' },
                  { year: '2025 Q3-Q4', event: 'Pye-Barker acquires in Mason OH, Somerset KY, Louisville KY — three-front pressure', color: 'bg-[#C8202D]' },
                  { year: 'Ongoing', event: 'Pavion / Turnkey Technology operates as sister company in Cincinnati', color: 'bg-orange-500' },
                  { year: '2026+', event: 'Pye-Barker continues 57-deals/year pace; additional OH/KY/TN targets probable', color: 'bg-[#C8202D]' },
                ].map((item) => (
                  <div key={item.year} className="flex items-start gap-3">
                    <span className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0 mt-1`} />
                    <div>
                      <span className="text-xs font-bold text-ips-dark">{item.year}</span>
                      <p className="text-sm text-ips-gray">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/external/dashboard"
              className="text-sm text-ips-gray hover:text-accent transition-colors"
            >
              &larr; Back to Research &amp; Intelligence
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
