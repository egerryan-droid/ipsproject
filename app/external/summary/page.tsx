import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'

export default function ExternalSummaryPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 bg-white min-h-screen">
        {/* Header */}
        <section className="bg-[#1B3A6B] text-white px-6 py-12 print:bg-white print:text-black print:py-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#C8202D] uppercase tracking-widest text-xs font-semibold mb-2">
              Xavier EMBA Capstone | May 2026
            </p>
            <h1 className="text-3xl font-extrabold mb-2 leading-tight">
              External Strategic Analysis
            </h1>
            <p className="text-lg text-white/80 font-medium">
              Integrated Protection Services &mdash; Executive Summary
            </p>
            <p className="text-white/40 text-sm mt-3">
              Choi &middot; Eger &middot; McKean &middot; Peat &middot; Tucker
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-10 print:py-4">
          {/* Thesis */}
          <div className="border-l-4 border-[#1B3A6B] bg-gray-50 rounded-r-lg px-5 py-4 mb-10">
            <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-1">
              One-Sentence Thesis
            </p>
            <p className="text-[#1a1a1f] leading-relaxed">
              The fire and security industry is converging with IT, cybersecurity, and building
              automation into a single building intelligence industry. PE firms are assembling the
              pieces, and IPS has a 3&ndash;5 year window to position as the independent alternative.
            </p>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
            {[
              { val: '$256B+', label: 'Addressable market' },
              { val: '$9.6B', label: 'PE debt deployed' },
              { val: '16–18%', label: 'Cloud/XaaS CAGR' },
              { val: '7.5%', label: 'Fire systems CAGR' },
              { val: '7–10%', label: 'IPS RMR gap' },
              { val: '3–5 yr', label: 'Window to act' },
            ].map((s) => (
              <div key={s.val} className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-lg font-extrabold text-[#1B3A6B]">{s.val}</p>
                <p className="text-[10px] text-gray-500 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Section 1 */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
            The Industry Landscape
          </h2>
          <p className="text-[#1a1a1f] leading-relaxed mb-3">
            IPS operates at the intersection of two NAICS codes: <strong>238210</strong> (Electrical
            Contractors, $223.6B) and <strong>561621</strong> (Security Systems, $33.2B). The combined
            addressable market exceeds $256 billion. With 6,136 security firms nationally averaging
            $4.79M in revenue, IPS at $55M is firmly top tier &mdash; yet represents less than 0.02% of
            total addressable market. Fire protection is code-mandated and non-discretionary. Electronic
            security is shifting rapidly toward subscription-based cloud delivery.
          </p>

          {/* Section 2 */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
            Macro Environment (PESTEL)
          </h2>
          <p className="text-[#1a1a1f] leading-relaxed mb-3">
            Thirteen of seventeen macro trends are favorable. The demand environment is overwhelmingly
            positive. The constraint is labor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Tailwinds</p>
              <ul className="text-sm text-[#1a1a1f] space-y-1 list-disc list-inside">
                <li>$1B+ in federal security grants (DHS/FEMA HSGP)</li>
                <li>Columbus: 77 data centers by 2030, 2.4 GW planned</li>
                <li>Cloud migration: ACaaS at 17.9% CAGR, VSaaS at 16.1%</li>
                <li>NFPA 72 (2025) mandates cybersecurity for fire systems</li>
                <li>Climate resilience driving fire/safety demand</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Headwind</p>
              <ul className="text-sm text-[#1a1a1f] space-y-1 list-disc list-inside">
                <li>29% of fire workforce retiring by 2026</li>
                <li>No industry apprenticeship program exists</li>
                <li>50% of firms cite hiring difficulty &mdash; caps growth for everyone</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
            The Industry Is Converging
          </h2>
          <p className="text-[#1a1a1f] leading-relaxed mb-3">
            Fire protection ($33.2B) and electronic security ($33.2B+) are merging into a single
            &ldquo;building intelligence&rdquo; market. NFPA 72 (2025) codifies this by mandating
            cybersecurity for networked fire systems. 71% of organizations already operate converged
            platforms. Cloud/XaaS grows at 16&ndash;18% CAGR while the base market grows at 4%.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-3">
            <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wide mb-2">Three Convergence Waves</p>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="text-sm font-bold text-[#1B3A6B]">Wave 1: 2024&ndash;26</p>
                <p className="text-xs text-gray-600">Security + IT/Cyber</p>
                <p className="text-[10px] text-[#C8202D] font-bold mt-1">HAPPENING NOW</p>
              </div>
              <div>
                <p className="text-sm font-bold text-amber-600">Wave 2: 2026&ndash;28</p>
                <p className="text-xs text-gray-600">Security + Building Automation</p>
                <p className="text-[10px] text-[#C8202D] font-bold mt-1">COMING SOON</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-700">Wave 3: 2028&ndash;34</p>
                <p className="text-xs text-gray-600">Fire + Everything Else</p>
                <p className="text-[10px] text-gray-500 font-bold mt-1">SLOW BUT CERTAIN</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#C8202D] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
            $9.6 Billion Is Pointed at Your Market
          </h2>
          <p className="text-[#1a1a1f] leading-relaxed mb-3">
            PE firms are systematically assembling every layer of building intelligence. Combined
            PE platform debt exceeds $9.6B. Pye-Barker alone has $680M in undrawn capacity. One PE
            firm (Leonard Green) controls $3.7B in combined fire and security revenue via Convergint
            and Pye-Barker.
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#1B3A6B] text-white">
                  <th className="text-left p-2">PE Firm</th>
                  <th className="text-left p-2">Fire</th>
                  <th className="text-left p-2">Security</th>
                  <th className="text-left p-2">Scale</th>
                  <th className="text-left p-2">Significance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Leonard Green', 'Pye-Barker $1B', 'Convergint $2.7B', '$3.7B', 'Controls #1 AND #2 PE platforms'],
                  ['Lone Star', 'Kidde/Edwards $3B', '—', '$3B OEM', "Controls IPS's primary fire supplier"],
                  ['GTCR', '—', 'Everon $782M', '$782M+', 'Columbus + Louisville overlap'],
                  ['Honeywell', '—', 'LenelS2 $4.95B', '$4.95B+', 'Full stack: fire + security + BA'],
                  ['Wind Point', 'Via Pavion', 'Pavion $625M', '$625M+', '15+ sister companies'],
                  ['Carlyle', 'Sciens $390M+', 'YES', '$390M+', 'Expanding east into IPS markets'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    {row.map((cell, j) => (
                      <td key={j} className={`p-2 border-b border-gray-100 ${j === 0 ? 'font-bold' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 5 */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">5</span>
            The Third Front: EC Consolidation
          </h2>
          <p className="text-[#1a1a1f] leading-relaxed mb-3">
            The $255B electrical contracting industry is experiencing its own PE-driven consolidation
            wave &mdash; 79 deals in 2024, 73% PE-driven. ECs are vertically integrating fire and
            security to capture subcontractor margin and recurring revenue. Seven platforms already
            have fire+security inside an EC structure. This creates a third competitive front
            alongside PE-backed security platforms and cloud-native disruptors.
          </p>

          {/* Section 6 */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">6</span>
            The Convergence Squeeze
          </h2>
          <p className="text-[#1a1a1f] leading-relaxed mb-3">
            IPS is being squeezed from three directions: PE-backed national platforms pressing down,
            cloud-native disruptors pressing up, and ECs vertically integrating from inside the project
            pipeline. The partner buyout makes this existential &mdash; grow revenue and RMR fast enough
            to fund it internally, or the PE offer becomes the only path. The window is 3&ndash;5 years.
          </p>

          {/* Section 7 */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">7</span>
            Where IPS Stands: Competitive Scorecard
          </h2>
          <p className="text-[#1a1a1f] leading-relaxed mb-3">
            Rated on 8 key success factors (1&ndash;5 scale), IPS scores 27/40 &mdash; behind Convergint
            (33) and Everon (31) but ahead of peer Silco (23). IPS is world-class at the technical
            craft: NICET IV (5/5), fire+security combined (5/5), technology partnerships (5/5). But
            the business systems that scale from $55M to $150M score poorly: recurring revenue (2/5),
            scale &amp; capital (2/5), workforce pipeline (2/5), process maturity (2/5).
          </p>

          {/* Findings */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-4 mt-10 border-b-2 border-[#1B3A6B] pb-2">
            Five Things the External Environment Is Telling You
          </h2>

          <div className="space-y-4 mb-10">
            {[
              { n: '1', color: '#1B3A6B', title: 'Your industry is becoming one market', body: 'Fire, security, IT, and cyber are merging into building intelligence. NFPA 72 (2025) makes it official. Cloud grows 4\u00d7 faster than the base market. The $256B addressable market is reorganizing around whoever can integrate all of it.' },
              { n: '2', color: '#C8202D', title: 'Someone else is building what you could be', body: 'PE firms have deployed $9.6B assembling integrated platforms. Sovereign wealth funds validated the model at $6.1B. Every IPS market is now encircled. This is an industry reorganization.' },
              { n: '3', color: '#D97706', title: 'Fire is your most defensible asset', body: 'Zero substitution threat. 10-year NICET IV moat. Code-mandated demand. But Edwards exclusivity is eroding under new PE ownership, and the fire moat alone won\u2019t fund a partner buyout.' },
              { n: '4', color: '#166534', title: 'RMR is the answer to almost every question', body: 'IPS\u2019s true recurring revenue of 7\u201310% is the single largest gap. Service margins are 2.5\u00d7 project margins. The platforms are in place (Brivo, Genetec). The gap is go-to-market execution.' },
              { n: '5', color: '#1B3A6B', title: 'The window is shorter than we thought', body: 'EC consolidation adds a third competitive front. PE-driven M&A assembles fire capability in 90 days. $12B+ in capital is deployed across all three fronts. The competitive landscape is narrowing faster than the original 3\u20135 year estimate.' },
            ].map((f) => (
              <div key={f.n} className="flex gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: f.color }}
                >
                  <span className="text-white text-xs font-bold">{f.n}</span>
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1f]">{f.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bridge */}
          <div className="bg-[#1a1a1f] rounded-lg px-5 py-4 mb-8">
            <p className="text-white text-sm leading-relaxed">
              <span className="text-[#C8202D] font-bold">THE QUESTION: </span>
              The external environment frames the challenge: a converging industry, PE reorganization,
              EC vertical integration, a narrowing window, and a partner buyout that makes growth
              existential. The internal analysis answers it &mdash; what does IPS have to work with,
              and what strategic paths does the converged industry create?
            </p>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Sources: Plunkett Research via Xavier/Gale &middot; PitchBook &middot; Capstone Partners
              (Feb 2026) &middot; SDM Magazine Top 100 (2024) &middot; NFPA 72 (2025) &middot; FEMA.gov
              &middot; MarketsandMarkets &middot; Grand View Research &middot; IBISWorld &middot;
              ConstructConnect &middot; BMI Mergers &middot; FMI Capital Advisors &middot; IPS
              Leadership (Mar 2026) &middot; Pete Keller Consultation (Mar 25, 2026) &middot; Team
              PESTEL Workbook
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-3 mt-8 print:hidden">
            <Link
              href="/external/presentation"
              className="bg-[#1B3A6B] text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-[#122847] transition-colors"
            >
              View Full Presentation
            </Link>
            <Link
              href="/external"
              className="bg-gray-100 text-[#1a1a1f] text-sm font-semibold rounded-lg px-5 py-2.5 hover:bg-gray-200 transition-colors"
            >
              Back to External Analysis
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
