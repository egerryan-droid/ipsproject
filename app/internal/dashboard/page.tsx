import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const DASHBOARD_SECTIONS = [
  {
    title: 'Scenario Analysis',
    href: '/internal/dashboard/scenarios',
    description: 'Stress test the financial model under four displacement scenarios',
    items: ['Perfect Storm', 'Customer Loss (Amazon Walks)', 'EC Channel Loss', 'Full Displacement'],
    icon: '🔥',
  },
  {
    title: 'Valuation & Buyout',
    href: '/internal/dashboard/valuation',
    description: 'RMR-based valuation, buyout timing analysis, and stress matrix',
    items: ['RMR Valuation Tiers', 'Buyout Timing (Dual Clock)', 'Buyout Stress Matrix'],
    icon: '💰',
  },
  {
    title: 'Operational Health',
    href: '/internal/dashboard/operations',
    description: 'Glass House metrics, branch comparison, and channel profitability',
    items: ['Glass House 11 Metrics', 'Branch Compare (4 locations)', 'Channel Profitability'],
    icon: '📊',
  },
]

export default function DashboardPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-ips-red uppercase tracking-widest text-sm font-semibold mb-4">
              Financial Model
            </p>
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">Financial Dashboard</h1>
            <p className="text-white/60 max-w-2xl mb-8">
              Interactive model outputs, scenario analysis, and downloadable tools.
              Built from the IPS Finance Model V5 — a 61-sheet Excel workbook with
              full pressure test infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/internal/dashboard/download"
                className="bg-ips-red text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-ips-red/90 transition-colors"
              >
                Download Excel Model
              </Link>
              <Link
                href="/internal"
                className="bg-white/10 text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-white/20 transition-colors"
              >
                Back to Internal Analysis
              </Link>
            </div>
          </div>
        </section>

        {/* Dashboard Cards */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/internal" className="text-sm text-ips-gray hover:text-accent transition-colors">
              Internal Analysis
            </Link>
            <span className="text-ips-gray mx-2">/</span>
            <span className="text-sm text-ips-dark font-medium">Dashboard</span>
          </div>

          <h2 className="text-xl font-bold text-ips-dark mb-6">Model Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DASHBOARD_SECTIONS.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-xl border border-gray-100 hover:border-ips-red/30 hover:shadow-md p-6 transition-all"
              >
                <span className="text-3xl mb-3 block">{section.icon}</span>
                <h3 className="font-bold text-ips-dark group-hover:text-ips-red transition-colors text-lg mb-2">
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

          {/* Model Download Card */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-ips-dark mb-6">Model Download</h2>
            <Link
              href="/internal/dashboard/download"
              className="group flex items-center gap-6 rounded-xl border border-gray-100 hover:border-ips-red/30 hover:shadow-md p-6 transition-all"
            >
              <span className="text-4xl">📥</span>
              <div className="flex-1">
                <h3 className="font-bold text-ips-dark group-hover:text-ips-red transition-colors text-lg">
                  IPS Finance Model V5
                </h3>
                <p className="text-sm text-ips-gray mt-1">
                  61-sheet Excel workbook with full pressure test infrastructure,
                  19 stress scenarios, and Claude-for-Excel integration prompts.
                </p>
              </div>
              <span className="text-ips-gray group-hover:text-ips-red transition-colors text-xl">
                &rarr;
              </span>
            </Link>
          </div>

          {/* Sources */}
          <section className="mt-12 mb-8 rounded-xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="text-xs font-bold text-ips-gray uppercase tracking-widest mb-3">Sources & Verification</h3>
            <ul className="text-xs text-ips-gray space-y-1.5">
              <li>• IPS Financial Model V5 (61-sheet Excel workbook)</li>
              <li>• IPS Audited Financial Statements 2021-2025</li>
              <li>• IPS 3-Year Customer Invoice Data (30,241 records)</li>
              <li>• IPS 3-Year Vendor AP Data (42,786 records)</li>
              <li>• Xavier EMBA Capstone Research Team Analysis (March 2026)</li>
            </ul>
          </section>
        </section>
      </main>
    </>
  )
}
