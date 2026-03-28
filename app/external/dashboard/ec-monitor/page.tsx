import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

const DEAL_VOLUME = [
  { metric: 'EC Transactions', y2024: '79', y2025: '99', trend: '+25%' },
  { metric: 'PE-Driven', y2024: '58 (73%)', y2025: '~70%+', trend: 'Dominant' },
  { metric: 'Construction M&A', y2024: '476', y2025: '562', trend: '+18.2%' },
  { metric: 'Subcontractor Deals', y2024: '264', y2025: '366', trend: '+38.6%' },
]

const EC_PLATFORMS = [
  { platform: 'EMCOR', revenue: '$14.6B', backer: 'Public (NYSE)', fire: true, security: true, managed: true, nicet: 'Hundreds' },
  { platform: 'ArchKey Solutions', revenue: '$1.4B', backer: '26North', fire: true, security: true, managed: false, nicet: 'Yes' },
  { platform: 'IES Holdings', revenue: '$2.9B', backer: 'Public (IESC)', fire: true, security: true, managed: false, nicet: 'Yes' },
  { platform: 'State Group', revenue: 'N/A', backer: 'Apollo', fire: true, security: true, managed: false, nicet: 'Yes' },
  { platform: 'Hunt Electric', revenue: '$500M+', backer: 'Private', fire: true, security: true, managed: false, nicet: 'Yes' },
]

const CUSTOMER_RISK = [
  { customer: 'PEC / ArchKey', revenue: '$130K', owner: '26North PE', fire: 'Extensive national', threat: 'CRITICAL' },
  { customer: 'Eagle / EMCOR', revenue: '$85K', owner: 'Public F500', fire: 'Sister co life safety', threat: 'HIGH' },
  { customer: 'KEP / IES', revenue: '$726K', owner: 'Public IESC', fire: 'Parent does fire', threat: 'MODERATE' },
  { customer: 'Superior Group', revenue: '$5.5M', owner: 'Family', fire: 'Building security', threat: 'MODERATE' },
  { customer: 'Kings Electric', revenue: '$678K', owner: 'Independent', fire: 'Fire team OH/KY', threat: 'MODERATE' },
  { customer: 'TD4 Electrical', revenue: '$10.0M', owner: 'Independent', fire: 'Offers fire', threat: 'LOW' },
  { customer: 'Hilscher-Clarke', revenue: '$1.9M', owner: 'Management', fire: 'Limited', threat: 'LOW' },
  { customer: 'Ace Electric', revenue: '$30K', owner: 'Family', fire: 'Limited', threat: 'LOW' },
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

function CheckIcon({ enabled }: { enabled: boolean }) {
  if (enabled) return <span className="text-green-600 font-bold">Yes</span>
  return <span className="text-ips-gray">Building</span>
}

export default function ECMonitorPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1B3A6B] text-white px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-2 leading-tight">EC Consolidation Monitor</h1>
            <p className="text-white/60 max-w-2xl">
              Electrical contractor roll-up activity, vertical integration into fire and security,
              and direct threat assessment for IPS&apos;s EC customer base. The convergence loop is
              confirmed and accelerating.
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
            <span className="text-sm text-ips-dark font-medium">EC Consolidation Monitor</span>
          </div>

          {/* Key Takeaways */}
          <div className="mb-10 rounded-xl border-l-4 border-[#1B3A6B] bg-[#e8edf7] p-6">
            <h3 className="text-sm font-bold text-[#1B3A6B] uppercase tracking-widest mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-[#1a1a1f]">
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> 58 of 79 EC acquisitions in 2024 were PE-driven (73%). FMI says consolidation is still in early stages.</li>
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> ArchKey (parent of IPS customer PEC Solutions) has a national fire/security team and is actively hiring NICET estimators</li>
              <li className="flex items-start gap-2"><span className="text-[#C8202D] font-bold mt-0.5">→</span> The displacement mechanism: PE buys EC, EC builds fire in-house, subcontractor (IPS) loses the work without a competitive bid</li>
            </ul>
          </div>

          {/* Convergence Loop Callout */}
          <div className="mb-8 rounded-xl border-2 border-[#C8202D] bg-red-50/50 p-5">
            <h3 className="font-bold text-[#C8202D] text-lg mb-2">The Convergence Loop (Confirmed)</h3>
            <p className="text-sm text-ips-dark mb-3">
              PE buys EC (middle) &rarr; EC builds/acquires fire + security (top) &rarr; PE harvests recurring revenue
              from building relationships (bottom). <strong>This is not hypothetical.</strong> ArchKey (IPS&apos;s customer)
              is executing this playbook right now.
            </p>
            <p className="text-xs text-ips-gray">
              3 of 8 top IPS EC customers are already PE/corporate-owned. PEC Solutions (ArchKey) is actively building
              fire capability to displace IPS.
            </p>
          </div>

          {/* EC Deal Volume */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">EC Deal Volume</h2>
            <p className="text-sm text-ips-gray mb-4">
              EC M&amp;A activity accelerated sharply in 2025. Subcontractor deals grew 38.6%,
              reflecting PE platforms&apos; push deeper into specialty trades including fire and security.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 font-semibold text-ips-gray">Metric</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">2024</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">2025</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {DEAL_VOLUME.map((d) => (
                    <tr key={d.metric} className="border-t border-gray-50">
                      <td className="px-5 py-3 font-medium text-ips-dark">{d.metric}</td>
                      <td className="px-5 py-3 text-ips-dark">{d.y2024}</td>
                      <td className="px-5 py-3 font-semibold text-ips-dark">{d.y2025}</td>
                      <td className={`px-5 py-3 font-semibold ${
                        d.trend.includes('+') ? 'text-[#C8202D]' :
                        d.trend === 'Dominant' ? 'text-orange-600' : 'text-ips-dark'
                      }`}>
                        {d.trend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Vertically Integrated EC Platforms */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">Vertically Integrated EC Platforms</h2>
            <p className="text-sm text-ips-gray mb-4">
              EC platforms that have built or acquired fire and security capabilities, creating
              end-to-end building systems offerings that threaten specialty subcontractors like IPS.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold text-ips-gray">Platform</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">Revenue</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">Backer</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray text-center">Fire</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray text-center">Security</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray text-center">Managed Svc</th>
                    <th className="px-4 py-3 font-semibold text-ips-gray">NICET</th>
                  </tr>
                </thead>
                <tbody>
                  {EC_PLATFORMS.map((p) => (
                    <tr key={p.platform} className="border-t border-gray-50">
                      <td className="px-4 py-3 font-medium text-ips-dark whitespace-nowrap">{p.platform}</td>
                      <td className="px-4 py-3 font-semibold text-ips-dark">{p.revenue}</td>
                      <td className="px-4 py-3 text-ips-dark">{p.backer}</td>
                      <td className="px-4 py-3 text-center"><CheckIcon enabled={p.fire} /></td>
                      <td className="px-4 py-3 text-center"><CheckIcon enabled={p.security} /></td>
                      <td className="px-4 py-3 text-center"><CheckIcon enabled={p.managed} /></td>
                      <td className="px-4 py-3 text-ips-dark">{p.nicet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* IPS EC Customer Ownership Risk */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ips-dark mb-2">IPS EC Customer &mdash; Ownership &amp; Threat Status</h2>
            <p className="text-sm text-ips-gray mb-4">
              Ownership status and vertical integration threat for IPS&apos;s top EC/GC subcontract customers.
              23% of IPS revenue (~$12.65M) flows through EC subcontractor relationships,
              with $3.8-6.3M at risk of erosion over 3-5 years.
            </p>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 font-semibold text-ips-gray">Customer</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Revenue</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Owner</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Fire Capability</th>
                    <th className="px-5 py-3 font-semibold text-ips-gray">Threat</th>
                  </tr>
                </thead>
                <tbody>
                  {CUSTOMER_RISK.map((c) => (
                    <tr
                      key={c.customer}
                      className={`border-t border-gray-50 ${
                        c.threat === 'CRITICAL' ? 'bg-red-50/30' :
                        c.threat === 'HIGH' ? 'bg-orange-50/30' : ''
                      }`}
                    >
                      <td className="px-5 py-3 font-medium text-ips-dark">{c.customer}</td>
                      <td className="px-5 py-3 font-semibold text-ips-dark">{c.revenue}</td>
                      <td className="px-5 py-3 text-ips-dark">{c.owner}</td>
                      <td className="px-5 py-3 text-ips-gray">{c.fire}</td>
                      <td className="px-5 py-3"><ThreatBadge level={c.threat} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-6 mt-3 text-xs text-ips-gray">
              <span className="flex items-center gap-1.5"><ThreatBadge level="CRITICAL" /> Active displacement risk</span>
              <span className="flex items-center gap-1.5"><ThreatBadge level="HIGH" /> Capability exists</span>
              <span className="flex items-center gap-1.5"><ThreatBadge level="MODERATE" /> Emerging capability</span>
              <span className="flex items-center gap-1.5"><ThreatBadge level="LOW" /> Limited near-term risk</span>
            </div>
          </section>

          {/* Sources */}
          <section className="mt-12 mb-8 rounded-xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="text-xs font-bold text-ips-gray uppercase tracking-widest mb-3">Sources & Verification</h3>
            <ul className="text-xs text-ips-gray space-y-1.5">
              <li>• BMI Mergers & Acquisitions — Electrical Contractor M&A Market Report: 2024 Recap</li>
              <li>• FMI Capital Advisors — Electrical Contractor Consolidation Analysis</li>
              <li>• Capstone Partners — Construction Services M&A Update (2025)</li>
              <li>• Lincoln International — Fire & Life Safety M&A Report (2024)</li>
              <li>• ArchKey Solutions corporate website and press releases</li>
              <li>• EMCOR Group (NYSE: EME) SEC filings and corporate disclosures</li>
              <li>• IES Holdings (NASDAQ: IESC) SEC filings</li>
              <li>• IPS 3-Year Customer Invoice Data (30,241 records, 2023-2025)</li>
              <li>• IPS Leadership Meeting Transcript (March 20, 2026)</li>
              <li>• Pete Keller Consultation (March 25, 2026)</li>
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
