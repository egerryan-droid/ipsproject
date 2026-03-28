import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const SCENARIOS = [
  {
    name: 'Perfect Storm',
    tag: 'Extreme',
    tagColor: 'bg-red-100 text-red-700',
    description: 'All displacement vectors hit simultaneously — Amazon DIY, EC capture, and national platform erosion.',
    metrics: [
      { label: 'Revenue Impact', value: '-38%', note: 'Year 3' },
      { label: 'EBITDA Impact', value: '-62%', note: 'Year 3' },
      { label: 'Survival Probability', value: '41%', note: 'Without intervention' },
    ],
    rows: [
      { year: 'Year 1', revenue: '$28.2M', ebitda: '$1.8M', margin: '6.4%' },
      { year: 'Year 2', revenue: '$24.1M', ebitda: '$0.9M', margin: '3.7%' },
      { year: 'Year 3', revenue: '$19.8M', ebitda: '$-0.3M', margin: '-1.5%' },
    ],
  },
  {
    name: 'Amazon Walks',
    tag: 'High',
    tagColor: 'bg-orange-100 text-orange-700',
    description: 'Amazon enters DIY fire/security — 30% of residential and small commercial customers self-install.',
    metrics: [
      { label: 'Revenue Impact', value: '-18%', note: 'Year 3' },
      { label: 'RMR Impact', value: '-22%', note: 'Year 3' },
      { label: 'Customer Churn', value: '2.8x', note: 'vs. baseline' },
    ],
    rows: [
      { year: 'Year 1', revenue: '$30.1M', ebitda: '$2.4M', margin: '8.0%' },
      { year: 'Year 2', revenue: '$27.8M', ebitda: '$1.9M', margin: '6.8%' },
      { year: 'Year 3', revenue: '$26.2M', ebitda: '$1.5M', margin: '5.7%' },
    ],
  },
  {
    name: 'EC Capture',
    tag: 'High',
    tagColor: 'bg-orange-100 text-orange-700',
    description: 'PE-backed electrical contractors vertically integrate fire/security, capturing project pipeline from the inside.',
    metrics: [
      { label: 'Revenue Impact', value: '-24%', note: 'Year 3' },
      { label: 'Project Win Rate', value: '-35%', note: 'Commercial' },
      { label: 'Margin Compression', value: '340 bps', note: 'Year 3' },
    ],
    rows: [
      { year: 'Year 1', revenue: '$29.4M', ebitda: '$2.1M', margin: '7.1%' },
      { year: 'Year 2', revenue: '$26.0M', ebitda: '$1.3M', margin: '5.0%' },
      { year: 'Year 3', revenue: '$24.3M', ebitda: '$0.8M', margin: '3.3%' },
    ],
  },
  {
    name: 'Full Displacement',
    tag: 'Extreme',
    tagColor: 'bg-red-100 text-red-700',
    description: 'Combined technology displacement — smart building platforms absorb monitoring, installation commoditizes.',
    metrics: [
      { label: 'Revenue Impact', value: '-42%', note: 'Year 5' },
      { label: 'RMR Erosion', value: '-55%', note: 'Year 5' },
      { label: 'Breakeven Timeline', value: 'Never', note: 'Without pivot' },
    ],
    rows: [
      { year: 'Year 1', revenue: '$29.8M', ebitda: '$2.2M', margin: '7.4%' },
      { year: 'Year 3', revenue: '$22.5M', ebitda: '$0.2M', margin: '0.9%' },
      { year: 'Year 5', revenue: '$18.5M', ebitda: '$-1.1M', margin: '-5.9%' },
    ],
  },
]

export default function ScenariosPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-2 leading-tight">Stress Test Scenarios</h1>
            <p className="text-white/60 max-w-2xl">
              Four displacement scenarios pressure-tested against the IPS financial model.
              Each scenario models revenue, EBITDA, and margin impact over a 3-5 year horizon.
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
            <span className="text-sm text-ips-dark font-medium">Scenarios</span>
          </div>

          {/* Scenario Cards */}
          <div className="space-y-8">
            {SCENARIOS.map((scenario) => (
              <div
                key={scenario.name}
                className="rounded-xl border border-gray-100 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-ips-dark">{scenario.name}</h2>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${scenario.tagColor}`}>
                      {scenario.tag}
                    </span>
                  </div>
                  <p className="text-sm text-ips-gray">{scenario.description}</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
                  {scenario.metrics.map((metric) => (
                    <div key={metric.label} className="p-4 text-center">
                      <p className="text-2xl font-bold text-[#C8202D]">{metric.value}</p>
                      <p className="text-xs font-semibold text-ips-dark mt-1">{metric.label}</p>
                      <p className="text-xs text-ips-gray">{metric.note}</p>
                    </div>
                  ))}
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="px-6 py-3 font-semibold text-ips-gray">Period</th>
                        <th className="px-6 py-3 font-semibold text-ips-gray">Revenue</th>
                        <th className="px-6 py-3 font-semibold text-ips-gray">EBITDA</th>
                        <th className="px-6 py-3 font-semibold text-ips-gray">Margin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scenario.rows.map((row) => (
                        <tr key={row.year} className="border-t border-gray-50">
                          <td className="px-6 py-3 font-medium text-ips-dark">{row.year}</td>
                          <td className="px-6 py-3 text-ips-dark">{row.revenue}</td>
                          <td className="px-6 py-3 text-ips-dark">{row.ebitda}</td>
                          <td className={`px-6 py-3 font-medium ${row.margin.startsWith('-') ? 'text-[#C8202D]' : 'text-ips-dark'}`}>
                            {row.margin}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Sources */}
          <section className="mt-12 mb-8 rounded-xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="text-xs font-bold text-ips-gray uppercase tracking-widest mb-3">Sources & Verification</h3>
            <ul className="text-xs text-ips-gray space-y-1.5">
              <li>• IPS Financial Model V5 — Scenario Analysis sheets (Perfect Storm, Customer Loss, EC Channel Loss, Full Displacement)</li>
              <li>• IPS 3-Year Customer Invoice Data — customer concentration analysis</li>
              <li>• PitchBook — PE/EC consolidation deal data</li>
              <li>• IPS Leadership Meeting (March 20, 2026) — Amazon relationship, EC partner details</li>
              <li>• Pete Keller Consultation (March 25, 2026) — Edwards/Kidde partnership status</li>
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
