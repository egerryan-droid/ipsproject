import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const RMR_TIERS = [
  { tier: 'Distressed', multiple: '24-30x', rmr: '$285K', valuation: '$6.8M - $8.6M', notes: 'Fire sale / forced exit' },
  { tier: 'Fair Market', multiple: '30-36x', rmr: '$285K', valuation: '$8.6M - $10.3M', notes: 'Arm\'s length transaction' },
  { tier: 'Strategic', multiple: '36-42x', rmr: '$285K', valuation: '$10.3M - $12.0M', notes: 'Platform value to acquirer' },
  { tier: 'Premium', multiple: '42-48x', rmr: '$285K', valuation: '$12.0M - $13.7M', notes: 'Competitive bidding / geography premium' },
]

const BUYOUT_TIMELINE = [
  { clock: 'Seller Clock', event: 'Glass House deterioration', urgency: 'High', timeline: '12-18 months', description: 'Operational metrics trending down — leverage decreases with each quarter of margin compression.' },
  { clock: 'Seller Clock', event: 'Owner succession gap', urgency: 'Medium', timeline: '24-36 months', description: 'No identified successor; key-man dependency grows as founder ages.' },
  { clock: 'Buyer Clock', event: 'EC vertical integration', urgency: 'High', timeline: '18-24 months', description: 'PE-backed ECs absorbing fire/security — IPS geography becomes contested.' },
  { clock: 'Buyer Clock', event: 'Platform consolidation', urgency: 'Medium', timeline: '24-36 months', description: 'National platforms (APi, Pye-Barker) filling midwest gaps.' },
]

const STRESS_MATRIX = [
  { scenario: 'Base Case', multiple: '36x', rmr: '$285K', value: '$10.3M', irr: '22%', payback: '4.2 yrs' },
  { scenario: 'RMR Erosion (-15%)', multiple: '36x', rmr: '$242K', value: '$8.7M', irr: '17%', payback: '5.1 yrs' },
  { scenario: 'Multiple Compression', multiple: '30x', rmr: '$285K', value: '$8.6M', irr: '15%', payback: '5.5 yrs' },
  { scenario: 'Combined Stress', multiple: '30x', rmr: '$242K', value: '$7.3M', irr: '11%', payback: '6.8 yrs' },
  { scenario: 'Perfect Storm', multiple: '24x', rmr: '$210K', value: '$5.0M', irr: '6%', payback: '9.2 yrs' },
]

export default function ValuationPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-2 leading-tight">Valuation &amp; Buyout Analysis</h1>
            <p className="text-white/60 max-w-2xl">
              RMR-based valuation framework, dual-clock buyout timing model, and
              stress-tested acquisition scenarios for IPS.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/internal" className="text-sm text-ips-gray hover:text-accent transition-colors">
              Internal Analysis
            </Link>
            <span className="text-ips-gray mx-2">/</span>
            <Link href="/internal/dashboard" className="text-sm text-ips-gray hover:text-accent transition-colors">
              Dashboard
            </Link>
            <span className="text-ips-gray mx-2">/</span>
            <span className="text-sm text-ips-dark font-medium">Valuation</span>
          </div>

          {/* Key Takeaways */}
          <div className="mb-10 rounded-xl border-l-4 border-[#1B3A6B] bg-[#e8edf7] p-6">
            <h3 className="text-sm font-bold text-[#1B3A6B] uppercase tracking-widest mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-[#1a1a1f]">
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> At 5.8% RMR, IPS trades at ~1.0x revenue. At 10% RMR: ~1.5x. At 20%: ~2.15x. The model never crosses 10% organically.</li>
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> Maximum affordable buyout: $62M under base case, $27M under Amazon loss. Gap between negotiated and full price is $9M — survivability is binary.</li>
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> A $1.9M managed security acquisition is immediately executable from existing LOC and breaks even on EV basis by Year 2.</li>
            </ul>
          </div>

          {/* RMR Valuation Tiers */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">RMR Valuation Tiers</h2>
            <p className="text-sm text-ips-gray mb-4">
              Industry-standard RMR multiple methodology applied to IPS monthly recurring revenue base.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-3 font-semibold text-ips-gray">Tier</th>
                    <th className="px-6 py-3 font-semibold text-ips-gray">Multiple</th>
                    <th className="px-6 py-3 font-semibold text-ips-gray">Monthly RMR</th>
                    <th className="px-6 py-3 font-semibold text-ips-gray">Implied Valuation</th>
                    <th className="px-6 py-3 font-semibold text-ips-gray">Context</th>
                  </tr>
                </thead>
                <tbody>
                  {RMR_TIERS.map((tier) => (
                    <tr key={tier.tier} className="border-t border-gray-50">
                      <td className="px-6 py-3 font-medium text-ips-dark">{tier.tier}</td>
                      <td className="px-6 py-3 text-ips-dark">{tier.multiple}</td>
                      <td className="px-6 py-3 text-ips-dark">{tier.rmr}</td>
                      <td className="px-6 py-3 font-semibold text-[#1B3A6B]">{tier.valuation}</td>
                      <td className="px-6 py-3 text-ips-gray">{tier.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Buyout Timing — Dual Clock */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Buyout Timing &mdash; Dual Clock</h2>
            <p className="text-sm text-ips-gray mb-4">
              Two clocks running simultaneously: the seller&apos;s window of maximum leverage and
              the buyer&apos;s window of strategic opportunity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BUYOUT_TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      item.clock === 'Seller Clock'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.clock}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      item.urgency === 'High'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {item.urgency} Urgency
                    </span>
                  </div>
                  <h3 className="font-bold text-ips-dark mb-1">{item.event}</h3>
                  <p className="text-sm text-ips-gray mb-2">{item.description}</p>
                  <p className="text-xs font-semibold text-[#1B3A6B]">Window: {item.timeline}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Buyout Stress Matrix */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Buyout Stress Matrix</h2>
            <p className="text-sm text-ips-gray mb-4">
              Acquisition returns under progressively adverse conditions — from base case through perfect storm.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-3 font-semibold text-ips-gray">Scenario</th>
                    <th className="px-6 py-3 font-semibold text-ips-gray">Multiple</th>
                    <th className="px-6 py-3 font-semibold text-ips-gray">Monthly RMR</th>
                    <th className="px-6 py-3 font-semibold text-ips-gray">Enterprise Value</th>
                    <th className="px-6 py-3 font-semibold text-ips-gray">IRR</th>
                    <th className="px-6 py-3 font-semibold text-ips-gray">Payback</th>
                  </tr>
                </thead>
                <tbody>
                  {STRESS_MATRIX.map((row) => (
                    <tr key={row.scenario} className="border-t border-gray-50">
                      <td className="px-6 py-3 font-medium text-ips-dark">{row.scenario}</td>
                      <td className="px-6 py-3 text-ips-dark">{row.multiple}</td>
                      <td className="px-6 py-3 text-ips-dark">{row.rmr}</td>
                      <td className="px-6 py-3 font-semibold text-[#1B3A6B]">{row.value}</td>
                      <td className={`px-6 py-3 font-medium ${
                        parseFloat(row.irr) < 10 ? 'text-[#C8202D]' : 'text-ips-dark'
                      }`}>
                        {row.irr}
                      </td>
                      <td className="px-6 py-3 text-ips-dark">{row.payback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sources */}
          <section className="mt-12 mb-8 rounded-xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="text-xs font-bold text-ips-gray uppercase tracking-widest mb-3">Sources & Verification</h3>
            <ul className="text-xs text-ips-gray space-y-1.5">
              <li>• IPS Financial Model V5 — Valuation Analysis, Partner Buyout, RMR Valuation, Buyout Timing, Buyout Stress sheets</li>
              <li>• Breakwater M&A — Fire Alarm and Security Valuation Multiples (2026)</li>
              <li>• Capstone Partners — Security Solutions M&A Update (February 2026)</li>
              <li>• PitchBook — comparable transaction data</li>
              <li>• IPS VTO — Partner buyout parameters (42% stake, age 70)</li>
            </ul>
          </section>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/internal/dashboard"
              className="text-sm text-ips-gray hover:text-accent transition-colors"
            >
              &larr; Back to Financial Dashboard
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
