import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const GLASS_HOUSE_METRICS = [
  { metric: 'Revenue Growth', value: '+26%', trend: 'up', status: 'green', note: 'Strong organic growth' },
  { metric: 'Gross Margin', value: '35.6%', trend: 'up', status: 'green', note: 'Up 3.7pp from 2024' },
  { metric: 'EBITDA Margin', value: '10.7%', trend: 'down', status: 'red', note: 'Down from 11.4% despite GM gains' },
  { metric: 'Cash Position', value: '-$71K', trend: 'down', status: 'red', note: 'Negative on $54M revenue' },
  { metric: 'DSO (Days Sales Outstanding)', value: '122 days', trend: 'up', status: 'red', note: 'Spiked 22 days from 100' },
  { metric: 'Bad Debt', value: '$849K', trend: 'up', status: 'red', note: 'Up 94x from $9K' },
  { metric: 'SGA % of Revenue', value: '25.1%', trend: 'up', status: 'red', note: 'Up 4.3pp; SGA grew 52%' },
  { metric: 'Top 3 Concentration', value: '46.4%', trend: 'up', status: 'red', note: 'Up from 36.5% in 2024' },
  { metric: 'Backlog', value: '$11.3M', trend: 'flat', status: 'red', note: 'Flat after 26% growth year' },
  { metric: 'Customer Retention', value: '81.5%', trend: 'flat', status: 'yellow', note: '185 customers lost annually' },
  { metric: 'RMR % of Revenue', value: '5.8%', trend: 'down', status: 'red', note: 'Declining from 6.9% in 2023' },
]

const BRANCH_DATA = [
  { branch: 'Columbus', revenue: '$4.35M', margin: '48.5%', ebitda: '$1.80M (41.3%)', cogs: '51.5%', rank: '#1' },
  { branch: 'National', revenue: '$2.75M', margin: '34.4%', ebitda: '$587K (21.4%)', cogs: '65.6%', rank: '#2' },
  { branch: 'Cincinnati', revenue: '$1.69M', margin: '25.0%', ebitda: '$83K (4.9%)', cogs: '75.0%', rank: '#3' },
  { branch: 'Lexington', revenue: '$297K', margin: '29.3%', ebitda: '-$94K (-31.6%)', cogs: '70.7%', rank: '#4' },
  { branch: 'Nashville', revenue: '$75K', margin: '-29.6%', ebitda: '-$171K (-229%)', cogs: '129.6%', rank: '#5' },
]

const CHANNEL_DATA = [
  { channel: 'EC/GC Subcontract', revenue: '$23.1M', margin: '18%', share: '43%', trend: 'Growing', risk: 'PE acquiring ECs' },
  { channel: 'National Accounts', revenue: '$12.6M', margin: '22%', share: '24%', trend: 'Concentrated', risk: 'Amazon = 23.5%' },
  { channel: 'Service/Recurring', revenue: '$9.8M', margin: '50%', share: '18%', trend: 'Growing', risk: 'Low — IS the RMR' },
  { channel: 'Direct End-User', revenue: '$8.3M', margin: '30%', share: '15%', trend: 'Stable', risk: 'Highest RMR potential' },
]

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    green: 'bg-green-500',
    yellow: 'bg-amber-500',
    red: 'bg-red-500',
  }
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${colors[status] || 'bg-gray-400'}`} />
}

function TrendArrow({ trend }: { trend: string }) {
  if (trend === 'up') return <span className="text-green-600 text-xs font-bold">&uarr;</span>
  if (trend === 'down') return <span className="text-red-600 text-xs font-bold">&darr;</span>
  return <span className="text-gray-400 text-xs font-bold">&rarr;</span>
}

export default function OperationsPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-2 leading-tight">Operational Health Dashboard</h1>
            <p className="text-white/60 max-w-2xl">
              The Glass House metrics that reveal deterioration beneath the growth story,
              branch-level comparison, and channel profitability analysis.
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
            <span className="text-sm text-ips-dark font-medium">Operations</span>
          </div>

          {/* Glass House 11 Metrics */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Glass House &mdash; 11 Metric Summary</h2>
            <p className="text-sm text-ips-gray mb-4">
              IPS grew revenue 26% in 2025 and ended the year with negative cash. Of 11 key metrics, only 2 are positive. The other 9 are deteriorating.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 font-semibold text-ips-gray w-8">Status</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Metric</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Value</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray w-8">Trend</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {GLASS_HOUSE_METRICS.map((m) => (
                    <tr key={m.metric} className="border-t border-gray-50">
                      <td className="px-5 py-3 text-center"><StatusDot status={m.status} /></td>
                      <td className="px-5 py-3 font-medium text-ips-dark">{m.metric}</td>
                      <td className="px-5 py-3 font-semibold text-ips-dark">{m.value}</td>
                      <td className="px-5 py-3 text-center"><TrendArrow trend={m.trend} /></td>
                      <td className="px-5 py-3 text-ips-gray">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-6 mt-3 text-xs text-ips-gray">
              <span className="flex items-center gap-1.5"><StatusDot status="green" /> Healthy</span>
              <span className="flex items-center gap-1.5"><StatusDot status="yellow" /> Watch</span>
              <span className="flex items-center gap-1.5"><StatusDot status="red" /> Deteriorating</span>
            </div>
          </section>

          {/* Branch Comparison */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Branch Comparison</h2>
            <p className="text-sm text-ips-gray mb-4">
              Columbus is carrying the company at 52% COGS. Cincinnati runs at 75%. Lexington and Nashville are both losing money. Nashville at 130% COGS is spending more than it earns. 78pp variance between best and worst.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 font-semibold text-ips-gray">Rank</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Branch</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">YTD Revenue</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Gross Margin</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">EBITDA</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">COGS %</th>
                  </tr>
                </thead>
                <tbody>
                  {BRANCH_DATA.map((b) => (
                    <tr
                      key={b.branch}
                      className={`border-t border-gray-50 ${
                        b.branch === 'Columbus' ? 'bg-green-50/50' :
                        b.ebitda.includes('-') ? 'bg-red-50/30' : ''
                      }`}
                    >
                      <td className="px-5 py-3 text-xs font-bold text-ips-gray">{b.rank}</td>
                      <td className="px-5 py-3 font-medium text-ips-dark">{b.branch}</td>
                      <td className="px-5 py-3 text-ips-dark">{b.revenue}</td>
                      <td className="px-5 py-3 text-ips-dark">{b.margin}</td>
                      <td className={`px-5 py-3 font-semibold ${b.ebitda.includes('-') ? 'text-[#C8202D]' : 'text-ips-dark'}`}>{b.ebitda}</td>
                      <td className="px-5 py-3 text-ips-dark">{b.cogs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Channel Profitability */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Channel Profitability</h2>
            <p className="text-sm text-ips-gray mb-4">
              EC/GC is 43% of revenue but only ~29% of gross profit at 18% margin.
              Service/Recurring is 18% of revenue but ~34% of GP at 50% margin. Growing fastest in the worst channel.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 font-semibold text-ips-gray">Channel</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Revenue</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Margin</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Share</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Trend</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Primary Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {CHANNEL_DATA.map((c) => (
                    <tr key={c.channel} className="border-t border-gray-50">
                      <td className="px-5 py-3 font-medium text-ips-dark">{c.channel}</td>
                      <td className="px-5 py-3 text-ips-dark">{c.revenue}</td>
                      <td className="px-5 py-3 font-semibold text-ips-dark">{c.margin}</td>
                      <td className="px-5 py-3 text-ips-dark">{c.share}</td>
                      <td className={`px-5 py-3 font-medium ${
                        c.trend === 'Declining' ? 'text-[#C8202D]' :
                        c.trend === 'Growing' ? 'text-green-600' : 'text-ips-dark'
                      }`}>
                        {c.trend}
                      </td>
                      <td className="px-5 py-3 text-ips-gray">{c.risk}</td>
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
              <li>• IPS Audited Financial Statements 2021-2025 (Barnes Dennig)</li>
              <li>• IPS Financial Model V5 — Branch Dashboard and Branch IS-YTD sheets</li>
              <li>• IPS 3-Year Customer Invoice Data (30,241 records)</li>
              <li>• IPS 3-Year Vendor AP Data (42,786 records)</li>
              <li>• IPS VTO (Vision/Traction Organizer, printed March 20, 2026)</li>
              <li>• IPS Leadership Meeting Transcript (March 20, 2026)</li>
              <li>• Pete Keller Consultation (March 25, 2026)</li>
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
