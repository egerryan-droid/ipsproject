import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const PRESSURE_TEST_SHEETS = [
  'PT-01: Revenue Sensitivity',
  'PT-02: Gross Margin Compression',
  'PT-03: RMR Erosion Scenarios',
  'PT-04: Customer Concentration Risk',
  'PT-05: DSO / Cash Flow Stress',
  'PT-06: Technician Utilization Drag',
  'PT-07: Amazon DIY Displacement',
  'PT-08: EC Vertical Integration',
  'PT-09: National Platform Erosion',
  'PT-10: Full Displacement (Combined)',
  'PT-11: Perfect Storm Scenario',
  'PT-12: Buyout Valuation Sensitivity',
  'PT-13: Buyout Stress Matrix',
  'PT-14: RMR Multiple Sensitivity',
  'PT-15: Branch-Level P&L Stress',
  'PT-16: Channel Mix Shift',
  'PT-17: Labor Cost Escalation',
  'PT-18: Interest Rate Sensitivity',
  'PT-19: Convergence Vulnerability Index',
]

const CLAUDE_PROMPTS = [
  {
    title: 'Scenario Comparison',
    prompt: 'Compare the Perfect Storm and Amazon Walks scenarios. Which has the faster path to EBITDA breakeven? Show me the quarter-by-quarter delta.',
  },
  {
    title: 'Valuation Sensitivity',
    prompt: 'If RMR attrition increases from 14% to 18%, what happens to the fair market valuation range? Walk through the math.',
  },
  {
    title: 'Branch Optimization',
    prompt: 'Which branch has the most room for margin improvement? What would happen if we brought Lexington utilization to Cincinnati levels?',
  },
  {
    title: 'Buyout Timing',
    prompt: 'Given the dual clock model, what is the optimal quarter to initiate buyout discussions? Factor in both seller leverage decay and buyer urgency.',
  },
]

export default function DownloadPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-2 leading-tight">Download Financial Model</h1>
            <p className="text-white/60 max-w-2xl">
              IPS Finance Model V5 — 61-sheet Excel workbook with full pressure test
              infrastructure, scenario analysis, and Claude-for-Excel integration.
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
            <span className="text-sm text-ips-dark font-medium">Download</span>
          </div>

          {/* Download Card */}
          <section className="mb-12">
            <div className="rounded-xl border-2 border-[#1B3A6B]/20 bg-[#1B3A6B]/5 p-8 text-center">
              <span className="text-5xl mb-4 block">📊</span>
              <h2 className="text-2xl font-bold text-ips-dark mb-2">IPS Finance Model V5</h2>
              <p className="text-ips-gray max-w-lg mx-auto mb-6">
                61-sheet Excel workbook with full pressure test infrastructure.
                Includes 19 stress scenario sheets, branch-level P&amp;L,
                RMR valuation model, and buyout analysis.
              </p>
              <a
                href="/files/IPS-Finance-Model-V5.xlsm"
                download
                className="inline-flex items-center gap-2 bg-[#C8202D] text-white text-sm font-semibold rounded-lg px-6 py-3 hover:bg-[#C8202D]/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Excel Model (.xlsx)
              </a>
              <p className="text-xs text-ips-gray mt-4">
                Note: The model file must be placed at <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">public/files/IPS-Finance-Model-V5.xlsm</code> for this download to work.
              </p>
            </div>
          </section>

          {/* Pressure Test Sheets */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">19 Pressure Test Sheets</h2>
            <p className="text-sm text-ips-gray mb-4">
              Each sheet is a standalone stress scenario with inputs, assumptions, and output tables.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {PRESSURE_TEST_SHEETS.map((sheet, i) => (
                  <div
                    key={sheet}
                    className={`px-5 py-3 text-sm flex items-center gap-3 ${
                      i % 2 === 0 ? '' : 'md:border-l border-gray-100'
                    } ${i >= 2 ? 'border-t border-gray-100' : ''}`}
                  >
                    <span className="text-xs font-mono text-ips-gray w-8 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ips-dark">{sheet}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Claude-for-Excel Prompts */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Claude-for-Excel Prompts</h2>
            <p className="text-sm text-ips-gray mb-4">
              Use these prompts with Claude&apos;s Excel integration to interrogate the model interactively.
              Open the model in Excel, enable Claude, and paste any prompt below.
            </p>
            <div className="space-y-4">
              {CLAUDE_PROMPTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 p-5"
                >
                  <h3 className="font-bold text-ips-dark mb-2">{item.title}</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-ips-dark font-mono leading-relaxed">
                      &ldquo;{item.prompt}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-bold text-amber-900 mb-2">How to use Claude-for-Excel</h3>
              <ol className="text-sm text-amber-800 space-y-2 list-decimal list-inside">
                <li>Open the IPS Finance Model V5 in Microsoft Excel (desktop or web)</li>
                <li>Enable the Claude for Excel add-in from the Insert &gt; Add-ins menu</li>
                <li>Select the sheet(s) you want to analyze</li>
                <li>Paste one of the prompts above — or write your own</li>
                <li>Claude will read the visible data and return analysis in natural language</li>
              </ol>
            </div>
          </section>

          {/* Sources */}
          <section className="mt-12 mb-8 rounded-xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="text-xs font-bold text-ips-gray uppercase tracking-widest mb-3">Sources & Verification</h3>
            <ul className="text-xs text-ips-gray space-y-1.5">
              <li>• IPS Financial Model V5 — built from IPS audited financials, customer invoice data, and vendor AP data</li>
              <li>• Model contains 61 sheets: 43 original analytical sheets + 18 pressure test sheets</li>
              <li>• Data sources: Barnes Dennig audited statements (2021-2025), IPS Sedona Office ERP exports, IPS VTO</li>
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
