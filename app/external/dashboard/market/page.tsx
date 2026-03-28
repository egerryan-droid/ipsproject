import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const MARQUEE_DEALS = [
  { deal: 'Power Solutions International', value: '$1.95B', date: 'Nov 2025', buyer: 'Dycom Industries', significance: 'Largest EC deal ever recorded' },
  { deal: 'ArchKey Solutions', value: '$1B+', date: 'Nov 2024', buyer: '26North Capital', significance: '3rd PE sponsor in 6 years' },
  { deal: 'Miller Electric', value: '$865M', date: 'Feb 2025', buyer: 'EMCOR Group', significance: 'Fire + security capabilities added' },
  { deal: 'Chubb Fire & Security', value: '$3.1B', date: '2021', buyer: 'APi Group', significance: 'EC-to-fire transformation model' },
]

const VALUATION_MULTIPLES = [
  { profile: 'Small EC ($3-8M EBITDA)', ebitda: '5.0-6.4x', revenue: '0.4-0.6x' },
  { profile: 'Mid-market EC ($8M+)', ebitda: '6.5-8.0x', revenue: '0.6-1.0x' },
  { profile: 'Data center specialist', ebitda: '8.0-10.0x+', revenue: '1.0-2.0x' },
  { profile: 'Fire/security with RMR <10%', ebitda: '4-5x', revenue: '0.8-1.2x' },
  { profile: 'Fire/security with RMR 10-20%', ebitda: '5-7x', revenue: '1.2-1.8x' },
  { profile: 'Fire/security with RMR >20%', ebitda: '7-10x', revenue: '1.8-3.0x' },
]

const KEY_STATS = [
  { stat: '$9.6B', label: 'PE capital deployed in fire/security', color: 'bg-[#C8202D]' },
  { stat: '242', label: 'M&A deals in 2025 (fire + EC)', color: 'bg-[#D96619]' },
  { stat: '$255B', label: 'EC industry total revenue', color: 'bg-[#0D8090]' },
  { stat: '58 of 79', label: 'EC deals PE-driven (2024)', color: 'bg-[#1B3A6B]' },
]

export default function MarketActivityPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-2 leading-tight">Market Activity Dashboard</h1>
            <p className="text-white/60 max-w-2xl">
              Deal volume trends, marquee transactions, and valuation multiples across fire/security
              and electrical contractor M&amp;A. Capital deployment at historically high levels.
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
            <span className="text-sm text-ips-dark font-medium">Market Activity</span>
          </div>

          {/* Key Takeaways */}
          <div className="mb-10 rounded-xl border-l-4 border-[#1B3A6B] bg-[#e8edf7] p-6">
            <h3 className="text-sm font-bold text-[#1B3A6B] uppercase tracking-widest mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-[#1a1a1f]">
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> Fire/security integrators with &lt;10% RMR trade at 4-5x EBITDA. With 20%+ RMR: 7-10x. IPS is at 5.8%.</li>
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> Largest EC transaction ever: Power Solutions for $1.95B (Nov 2025). Data centers are driving 45-70% of EC construction cost.</li>
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> Three new large-cap PE firms (Apax, Blackstone, KKR) entered fire/life safety in 2024</li>
            </ul>
          </div>

          {/* Key Stat Cards */}
          <section className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {KEY_STATS.map((s) => (
                <div key={s.label} className={`${s.color} rounded-xl p-5 text-white`}>
                  <p className="text-3xl font-extrabold">{s.stat}</p>
                  <p className="text-xs text-white/70 mt-2 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Marquee Transactions */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Marquee Transactions</h2>
            <p className="text-sm text-ips-gray mb-4">
              The largest and most strategically significant deals shaping the fire/security and EC landscape.
              APi Group&apos;s $3.1B Chubb acquisition established the playbook that EC platforms are now following.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 font-semibold text-ips-gray">Deal</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Value</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Date</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Buyer</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Significance</th>
                  </tr>
                </thead>
                <tbody>
                  {MARQUEE_DEALS.map((d) => (
                    <tr key={d.deal} className="border-t border-gray-50">
                      <td className="px-5 py-3 font-medium text-ips-dark">{d.deal}</td>
                      <td className="px-5 py-3 font-semibold text-ips-dark">{d.value}</td>
                      <td className="px-5 py-3 text-ips-gray">{d.date}</td>
                      <td className="px-5 py-3 text-ips-dark">{d.buyer}</td>
                      <td className="px-5 py-3 text-ips-gray">{d.significance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Valuation Multiples */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Valuation Multiples by Profile</h2>
            <p className="text-sm text-ips-gray mb-4">
              Current market multiples for EC and fire/security acquisitions. RMR percentage is the
              single biggest valuation driver in fire/security &mdash; companies with &gt;20% RMR
              command 2x the EBITDA multiple of those below 10%.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 font-semibold text-ips-gray">Profile</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">EBITDA Multiple</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Revenue Multiple</th>
                  </tr>
                </thead>
                <tbody>
                  {VALUATION_MULTIPLES.map((v, i) => (
                    <tr
                      key={v.profile}
                      className={`border-t border-gray-50 ${
                        v.profile.includes('>20%') ? 'bg-green-50/50' :
                        v.profile.includes('Data center') ? 'bg-green-50/30' : ''
                      }`}
                    >
                      <td className="px-5 py-3 font-medium text-ips-dark">{v.profile}</td>
                      <td className={`px-5 py-3 font-semibold ${
                        i >= 4 ? 'text-[#1B3A6B]' : 'text-ips-dark'
                      }`}>
                        {v.ebitda}
                      </td>
                      <td className={`px-5 py-3 font-semibold ${
                        i >= 4 ? 'text-[#1B3A6B]' : 'text-ips-dark'
                      }`}>
                        {v.revenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-xl border border-[#1B3A6B]/20 bg-[#1B3A6B]/5 p-4">
              <p className="text-sm text-ips-dark">
                <strong>IPS context:</strong> At ~5.8% RMR and ~$5.8M EBITDA, IPS would currently trade in
                the 4-5x EBITDA range ($23-29M). Growing RMR to 15%+ could push multiples to 5-7x,
                adding $6-12M in enterprise value on current earnings.
              </p>
            </div>
          </section>

          {/* Deal Volume Trend */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Deal Volume Trends</h2>
            <p className="text-sm text-ips-gray mb-4">
              Year-over-year M&amp;A activity across fire/security and EC sectors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-ips-dark mb-3">Fire &amp; Security</h3>
                <div className="space-y-3">
                  {[
                    { year: '2023', deals: '129 deals', bar: '65%' },
                    { year: '2024 (through Sept)', deals: '109 deals', bar: '55%' },
                    { year: '2025 (projected)', deals: '140+ deals', bar: '70%' },
                  ].map((y) => (
                    <div key={y.year}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-ips-gray">{y.year}</span>
                        <span className="font-semibold text-ips-dark">{y.deals}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-[#C8202D] h-2 rounded-full" style={{ width: y.bar }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-ips-dark mb-3">Electrical Contractor</h3>
                <div className="space-y-3">
                  {[
                    { year: '2024', deals: '79 EC deals', bar: '40%' },
                    { year: '2025', deals: '99 EC deals', bar: '50%' },
                    { year: '2025 (subcontractor)', deals: '366 sub deals', bar: '90%' },
                  ].map((y) => (
                    <div key={y.year + y.deals}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-ips-gray">{y.year}</span>
                        <span className="font-semibold text-ips-dark">{y.deals}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-[#1B3A6B] h-2 rounded-full" style={{ width: y.bar }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Industry Context */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Industry Context</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-gray-100 p-5">
                <p className="text-2xl font-extrabold text-[#1B3A6B]">$255B</p>
                <p className="text-sm text-ips-gray mt-1">EC industry revenue</p>
                <p className="text-xs text-ips-gray mt-2">219,000 businesses. Highly fragmented. Early innings of consolidation.</p>
              </div>
              <div className="rounded-xl border border-gray-100 p-5">
                <p className="text-2xl font-extrabold text-[#C8202D]">73%</p>
                <p className="text-sm text-ips-gray mt-1">EC deals PE-driven (2024)</p>
                <p className="text-xs text-ips-gray mt-2">58 of 79 EC acquisitions in 2024 were PE-backed. Strategic buyers are being outpaced.</p>
              </div>
              <div className="rounded-xl border border-gray-100 p-5">
                <p className="text-2xl font-extrabold text-[#D96619]">10+</p>
                <p className="text-sm text-ips-gray mt-1">Active PE-backed EC platforms</p>
                <p className="text-xs text-ips-gray mt-2">Each with dedicated M&amp;A teams, debt facilities, and integration playbooks.</p>
              </div>
            </div>
          </section>

          {/* Sources */}
          <section className="mt-12 mb-8 rounded-xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="text-xs font-bold text-ips-gray uppercase tracking-widest mb-3">Sources & Verification</h3>
            <ul className="text-xs text-ips-gray space-y-1.5">
              <li>• PitchBook Data, Inc. — company profiles retrieved March 2026</li>
              <li>• Capstone Partners — Security Solutions M&A Update (February 2026)</li>
              <li>• BMI Mergers & Acquisitions — EC M&A Report (2024)</li>
              <li>• Breakwater M&A — Fire Alarm Valuation Multiples (2026)</li>
              <li>• Lincoln International — Fire & Life Safety M&A (2024)</li>
              <li>• Meridian Investment Banking — Fire & Life Safety Update (Summer 2025)</li>
              <li>• SDM Magazine — Top 100 Systems Integrators (2025)</li>
              <li>• APi Group SEC filings and Speedwell Research</li>
            </ul>
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
