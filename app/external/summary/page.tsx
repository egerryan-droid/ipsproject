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
              Core Finding
            </p>
            <p className="text-[#1a1a1f] leading-relaxed">
              The fire and security industry is undergoing a one-time structural reorganization from
              fragmented, project-based contracting to consolidated, recurring-revenue platforms. PE
              capital is the accelerant, technology convergence is the mechanism, and code-mandated
              demand is the floor that makes the whole thing investable. IPS is excellent at the old
              game. The industry is reorganizing around a new one.
            </p>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
            {[
              { val: '$256B+', label: 'Combined U.S. market' },
              { val: '$33B+', label: 'PE enterprise value deployed' },
              { val: '261', label: 'M&A deals in 3 years' },
              { val: '6', label: 'PE platforms in Cincinnati' },
              { val: '5.8%', label: 'IPS recurring revenue' },
              { val: '$35-59M', label: 'Value of the RMR gap' },
            ].map((s) => (
              <div key={s.val} className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-lg font-extrabold text-[#1B3A6B]">{s.val}</p>
                <p className="text-[10px] text-gray-500 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>

          {/* === SECTION 1: THE INDUSTRY === */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
            What Is the Industry
          </h2>
          <p className="text-[#1a1a1f] leading-relaxed mb-3">
            IPS operates at the intersection of fire protection ($88.9B global, 6.6% CAGR) and physical
            security ($147.4B global, 6.5% CAGR) &mdash; a combined U.S. addressable market exceeding $256 billion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-xs font-bold text-[#C8202D] uppercase tracking-wide mb-2">Fire Protection Model</p>
              <p className="text-sm text-[#1a1a1f] leading-relaxed mb-2">
                GC &rarr; EC &rarr; Specialty Integrator (IPS). Code-mandated by NFPA 72. No fire alarm = no
                occupancy permit. Proprietary panel ecosystems (Edwards, Notifier, Simplex) create deep switching
                costs. ~50% of IPS revenue flows through the EC channel.
              </p>
              <div className="flex gap-4 mt-2">
                <div><p className="text-lg font-extrabold text-[#C8202D]">~20%</p><p className="text-[10px] text-gray-500">Project GM</p></div>
                <div><p className="text-lg font-extrabold text-[#C8202D]">~50%</p><p className="text-[10px] text-gray-500">Service GM</p></div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs font-bold text-[#2563eb] uppercase tracking-wide mb-2">Security Model</p>
              <p className="text-sm text-[#1a1a1f] leading-relaxed mb-2">
                Direct to end user. Lower regulatory barriers (no statewide OH license). Shifting from CapEx
                ($5K/door) to subscription ($30-50/door/month). Cloud platforms (Brivo, Eagle Eye) making basic
                systems accessible to less sophisticated installers. ~50% of IPS revenue.
              </p>
              <div className="flex gap-4 mt-2">
                <div><p className="text-lg font-extrabold text-[#2563eb]">16-18%</p><p className="text-[10px] text-gray-500">Cloud/XaaS CAGR</p></div>
                <div><p className="text-lg font-extrabold text-[#2563eb]">82%</p><p className="text-[10px] text-gray-500">Planning cloud transitions</p></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wide mb-2">The Margin Structure</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-2 font-bold text-gray-600">Revenue Type</th>
                    <th className="text-left p-2 font-bold text-gray-600">Gross Margin</th>
                    <th className="text-left p-2 font-bold text-gray-600">Character</th>
                    <th className="text-left p-2 font-bold text-gray-600">IPS Mix</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Test & Inspection', '50%+', 'Recurring (code-mandated)', ''],
                    ['Monitoring', '50%+', 'Recurring (monthly)', ''],
                    ['Repair & Maintenance', '40-50%', 'Reoccurring', '5.8% total'],
                    ['Retrofit', '35-45%+', 'Can be recurring', ''],
                    ['New Construction Install', '25-35%', 'One-time project', '78.5%'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-white' : ''}>
                      {row.map((cell, j) => (
                        <td key={j} className={`p-2 border-b border-gray-100 ${j === 3 && cell ? 'font-bold text-[#C8202D]' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-500 mt-2">IPS is 78.5% in the 25-35% row and 5.8% in the 50%+ rows. The industry is moving in the opposite direction.</p>
          </div>

          {/* === SECTION 2: INDUSTRY NUMBERS === */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
            Industry Numbers &amp; Growth Drivers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { val: '$88.9B', sub: '$130.4B by 2030', label: 'Global Fire Protection' },
              { val: '$147.4B', sub: '$216.4B by 2030', label: 'Global Physical Security' },
              { val: '$18.4B', sub: '+18% YoY (record)', label: 'SDM Top 100 Revenue' },
              { val: '6.5-6.6%', sub: 'Both industries', label: 'Global CAGR' },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-lg p-3">
                <p className="text-lg font-extrabold text-[#1B3A6B]">{s.val}</p>
                <p className="text-[10px] text-gray-500">{s.sub}</p>
                <p className="text-[10px] text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-800 uppercase mb-1">High Demand</p>
              <ul className="text-xs text-[#1a1a1f] space-y-1 list-disc list-inside">
                <li>Data Centers: +21.9% construction. OH #3 nationally.</li>
                <li>Healthcare: $28.4B hospital starts 2026</li>
                <li>Education: +6%, $273M+ federal funding</li>
              </ul>
            </div>
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-bold text-blue-800 uppercase mb-1">Geographic Tailwinds</p>
              <ul className="text-xs text-[#1a1a1f] space-y-1 list-disc list-inside">
                <li>Ohio: 77 data centers, Meta Prometheus 1GW+</li>
                <li>Tennessee: #2 job growth metro, HCA HQ</li>
                <li>Federal: $1.3B+ flowing through OH/KY/TN</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-3">
              <p className="text-xs font-bold text-amber-800 uppercase mb-1">Caution</p>
              <ul className="text-xs text-[#1a1a1f] space-y-1 list-disc list-inside">
                <li>Office: -8 to -10% YoY, ~20% vacancy</li>
                <li>Warehouse: declining from overbuilding peak</li>
                <li>Labor: 29% fire workforce retiring, 0 apprenticeship programs</li>
              </ul>
            </div>
          </div>

          {/* What DID it take to win */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wide mb-2">What Did It Take to Win?</p>
            <p className="text-sm text-[#1a1a1f] leading-relaxed">
              Relationships, technical craft, local presence, trust, and price competitiveness. IPS built $55M on
              exactly these: NICET Level IV (10+ years required), largest privately-held Edwards distributor nationally,
              in-house engineering, multi-vendor security portfolio, local ownership with fast decisions. That combination
              won in a fragmented, relationship-driven, project-based industry.
            </p>
          </div>

          {/* Industry characteristics */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wide mb-2">Why PE Loves This Industry</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { label: 'Fragmented', detail: '5,000+ fire companies, 219K ECs' },
                { label: 'Aging owners', detail: 'Industry-wide succession gap' },
                { label: 'Code-mandated', detail: 'Recession-resistant demand floor' },
                { label: 'Multiple arbitrage', detail: 'Buy 6-9x, platform trades 13-16x' },
                { label: 'Recurring revenue', detail: 'Service 50% GM vs project 20%' },
                { label: 'High switching costs', detail: 'Proprietary fire panels' },
                { label: 'Asset-light', detail: 'People + certs + relationships' },
                { label: 'Scalable via M&A', detail: 'Pye-Barker: 57 deals in one year' },
              ].map((c) => (
                <div key={c.label} className="bg-white rounded p-2 border border-gray-100">
                  <p className="text-xs font-bold text-[#1a1a1f]">{c.label}</p>
                  <p className="text-[10px] text-gray-500">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* === SECTION 3: TRENDS / DRIVERS === */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
            Industry Trends &amp; Drivers
          </h2>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-[#2563eb] pl-4">
              <p className="font-bold text-[#1a1a1f] mb-1">Convergence: Fire + Security + IT + Cyber &rarr; One Industry</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                NFPA 72-2025 mandates cybersecurity for networked fire systems. Brivo + Eagle Eye merged Dec 2025
                (unified cloud platform). Verkada: $700M revenue, $5.8B valuation, bypasses integrators. 82% planning
                cloud transitions. The integrator that bridges all categories captures the relationship. The one that
                doesn&apos;t becomes a subcontractor.
              </p>
            </div>

            <div className="border-l-4 border-[#16a34a] pl-4">
              <p className="font-bold text-[#1a1a1f] mb-1">Revenue Model Shift: Projects &rarr; Recurring</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Equipment margins compressing. Complexity and service margins expanding. Installed base &mdash; not the
                installation pipeline &mdash; is the strategic asset. Every system installed today becomes a maintenance
                contract tomorrow. The question is whether the integrator captures that contract or walks away.
              </p>
            </div>

            <div className="border-l-4 border-[#C8202D] pl-4">
              <p className="font-bold text-[#1a1a1f] mb-1">Intermediary Squeeze: Compressed from Three Directions</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>From above:</strong> Edwards under Lone Star PE adding distributors in IPS territories.
                Pete Keller: &ldquo;not as strong a partnership as it used to be.&rdquo;
                <strong> From below:</strong> ECs building fire/security in-house. ArchKey (26North, $32B AUM) hiring
                NICET estimators. PEC revenue to IPS dropped 89%.
                <strong> From the side:</strong> Verkada selling direct. IT MSPs adding physical security. The technology
                floor is rising.
              </p>
            </div>
          </div>

          {/* === SECTION 4: CONSEQUENCES === */}
          <h2 className="text-xl font-bold text-[#C8202D] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#C8202D] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
            Consequences
          </h2>

          {/* C-Suite */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wide mb-2">C-Suite Attention</p>
            <p className="text-sm text-[#1a1a1f] leading-relaxed">
              Security is no longer a facilities conversation &mdash; it&apos;s a board-level conversation. When physical
              security devices become networked IT endpoints and fire code mandates cybersecurity compliance, the buyer
              changes. Facilities managers buy on price. CSOs and risk officers buy on enterprise risk posture and
              platform capability. Good for sophisticated integrators. Fatal for commodity installers.
            </p>
          </div>

          {/* PE Consolidation */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-xs font-bold text-[#C8202D] uppercase tracking-wide mb-2">PE Consolidation &mdash; The Numbers</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              {[
                { val: '$33B+', label: 'Enterprise value deployed' },
                { val: '261', label: 'Deals in 3 years' },
                { val: '17', label: 'Deals in OH/KY/TN' },
                { val: '3x', label: 'Deal pace increase (3→9)' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-extrabold text-[#C8202D]">{s.val}</p>
                  <p className="text-[10px] text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-red-200">
                    <th className="text-left p-2 font-bold text-[#C8202D]">Platform</th>
                    <th className="text-left p-2 font-bold text-[#C8202D]">Revenue</th>
                    <th className="text-left p-2 font-bold text-[#C8202D]">EV / Valuation</th>
                    <th className="text-left p-2 font-bold text-[#C8202D]">PE Sponsor</th>
                    <th className="text-left p-2 font-bold text-[#C8202D]">IPS Market Presence</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['APi Group', '$7.9B', '$21.25B (16.8x)', 'Public', 'Harrison, OH (Cincy metro)'],
                    ['Convergint', '$2.7B', '$5-7B est.', 'Leonard Green / Ares', 'Cincinnati (Jun 2025)'],
                    ['Pye-Barker', '$1.0B', '$6.1B', 'Leonard Green / ADIA / GIC', 'Mason OH, Louisville, Somerset KY'],
                    ['Summit Fire', 'Est. $800M+', 'Unknown', 'SFP Holding', 'West Chester OH, Louisville KY'],
                    ['Everon', '$781.7M', '$1.61B', 'GTCR', 'Columbus, Louisville, Lexington'],
                    ['Pavion', '$625.3M', 'Unknown', 'Wind Point / Blackstone', 'Cincinnati (Turnkey Tech)'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-white' : 'bg-red-50/50'}>
                      {row.map((cell, j) => (
                        <td key={j} className={`p-2 border-b border-red-100 ${j === 0 ? 'font-bold' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-500 mt-2">Leonard Green controls both Convergint AND Pye-Barker &mdash; $3.7B combined revenue under one PE sponsor. Sovereign wealth (ADIA + GIC) validated at $6.1B.</p>
          </div>

          {/* EC Vertical Integration */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-2">Vertical Integration &mdash; ECs Capturing the Integrator&apos;s Work</p>
            <p className="text-sm text-[#1a1a1f] leading-relaxed mb-2">
              PE buys EC &rarr; EC gets GC relationships &rarr; EC builds fire/security in-house &rarr; captures
              subcontractor margin AND recurring revenue &rarr; independent integrators lose the channel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-bold text-amber-800 mb-1">APi Group: The Proof</p>
                <p className="text-xs text-[#1a1a1f]">
                  EC &rarr; acquired Chubb for $3.1B &rarr; now $7.9B revenue, $21.25B EV. Market cap +95.92% YoY.
                  SOFR+175 (tightest spread in industry). Wall Street loves this model.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-amber-800 mb-1">ArchKey/26North: The Active Threat</p>
                <p className="text-xs text-[#1a1a1f]">
                  IPS&apos;s $2.5M customer. 26North: Joshua Harris (Apollo co-founder), $32B AUM, $3.85B dry powder
                  (89% undeployed). ArchKey: $21.4M &rarr; $1B in 7 years (47x). $475M dividend recap Mar 2026.
                  PEC revenue to IPS already dropped 89%.
                </p>
              </div>
            </div>
            <p className="text-xs text-[#C8202D] font-bold mt-2">23% of IPS revenue ($12.65M) flows through the EC channel. $3.8-8.0M at risk over 3-5 years.</p>
          </div>

          {/* What does it take to win NOW vs AHEAD */}
          <div className="bg-[#1a1a1f] rounded-lg p-5 mb-6">
            <p className="text-xs font-bold text-[#C8202D] uppercase tracking-wide mb-3">What Does It Take to Win?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-bold text-white/60 mb-1">THEN</p>
                <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
                  <li>Relationships</li>
                  <li>Technical craft</li>
                  <li>Local presence</li>
                  <li>Price competitiveness</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold text-[#C8202D] mb-1">NOW (2026)</p>
                <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
                  <li>Everything above, PLUS:</li>
                  <li>Recurring revenue wrapping every install</li>
                  <li>Multi-discipline scope (fire + security + managed)</li>
                  <li>Cloud/platform capability</li>
                  <li>Direct customer relationships</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold text-amber-400 mb-1">AHEAD (2028-30)</p>
                <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
                  <li>Everything above, PLUS:</li>
                  <li>Cyber-physical integration</li>
                  <li>Pre-design advisory (own the spec)</li>
                  <li>Lifecycle management contracts</li>
                  <li>Selling to CSOs, not facilities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* === SECTION 5: COMPETITIVE MAP === */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">5</span>
            Competitive Map &mdash; Where Everybody Sits
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            X-axis: Service Complexity (commodity &rarr; integrated platform). Y-axis: Customer Relationship Depth (transactional &rarr; recurring/managed).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Q1: Commodity Installers</p>
              <p className="text-xs text-gray-500">Simple installs won on price. Midwest Security, Royce, HSI. Thin margins, no loyalty.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Q2: Guarding &amp; Basic Recurring</p>
              <p className="text-xs text-gray-500">Labor contracts, basic monitoring. Securitas, Allied Universal. Steady but vulnerable to AI.</p>
            </div>
            <div className="border-2 border-[#C8202D] rounded-lg p-3 bg-red-50/30">
              <p className="text-xs font-bold text-[#C8202D] uppercase mb-1">Q3: Advanced But Transactional &mdash; IPS IS HERE</p>
              <p className="text-xs text-[#1a1a1f]">Sophisticated integration, but project-by-project. High skill, inconsistent revenue. IPS scores 2.75/2.25 vs Convergint 3.0/2.88.</p>
            </div>
            <div className="border-2 border-[#16a34a] rounded-lg p-3 bg-green-50/30">
              <p className="text-xs font-bold text-[#16a34a] uppercase mb-1">Q4: Integrated Managed Security &mdash; WHERE PROFIT LIVES</p>
              <p className="text-xs text-[#1a1a1f]">Managed service agreements, sticky customers, high switching costs. Convergint, APi Group. Buyer is CSO/CISO/C-suite.</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-[#1a1a1f] leading-relaxed">
              <strong>The strategic question is not geographic expansion. It&apos;s quadrant migration.</strong> Moving
              from Q3 to Q4 is worth more than adding a new territory while staying in Q3. IPS and Silco are the last
              independents standing in Cincinnati at meaningful scale.
            </p>
          </div>

          {/* === SECTION 6: PATHWAY OPTIONS === */}
          <h2 className="text-xl font-bold text-[#1B3A6B] mb-3 mt-8 flex items-center gap-2">
            <span className="bg-[#1B3A6B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">6</span>
            Pathway Options
          </h2>
          <div className="space-y-4 mb-6">
            <div className="border border-[#16a34a] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#16a34a] text-white text-xs font-bold px-2 py-0.5 rounded">A</span>
                <p className="font-bold text-[#1a1a1f]">Capture the Recurring Revenue Tail</p>
                <span className="text-[10px] font-bold text-[#16a34a] uppercase ml-auto">Immediate</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Stop leaving the building. Wrap every installation in a lifecycle service agreement. Convert 78.5%
                project-based toward 20%+ recurring. Requires no new headcount or capabilities &mdash; just changing
                how you sell. Moving from 5.8% to 15% RMR changes the valuation multiple from ~6x to ~10x EBITDA.
                That&apos;s <strong>$24M+ in enterprise value</strong> created by changing how you sell, not what you sell.
              </p>
            </div>
            <div className="border border-[#2563eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#2563eb] text-white text-xs font-bold px-2 py-0.5 rounded">B</span>
                <p className="font-bold text-[#1a1a1f]">Deepen the Moat Through Managed Services</p>
                <span className="text-[10px] font-bold text-[#2563eb] uppercase ml-auto">Build</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Add cyber hygiene for physical security systems, remote monitoring/NOC, helpdesk, subscription billing.
                This is the Q3 &rarr; Q4 migration. The moat comes from wrapping IPS&apos;s unique multi-discipline
                depth in a managed service platform no single competitor can replicate locally.
              </p>
            </div>
            <div className="border border-[#d97706] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#d97706] text-white text-xs font-bold px-2 py-0.5 rounded">C</span>
                <p className="font-bold text-[#1a1a1f]">Selective Geographic Expansion &mdash; On the New Model</p>
                <span className="text-[10px] font-bold text-[#d97706] uppercase ml-auto">After A &amp; B</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nashville first (least PE presence, proven playbook, existing pull). Atlanta per VTO. But
                only on the new model &mdash; expanding geographically on the old model replicates the same
                vulnerabilities in a new zip code. The 2021 study recommended geographic expansion. The industry
                changed. Geographic expansion is necessary but not sufficient.
              </p>
            </div>
          </div>

          {/* The Throughline */}
          <div className="bg-[#1a1a1f] rounded-lg px-5 py-4 mb-8">
            <p className="text-white text-sm leading-relaxed">
              <span className="text-[#C8202D] font-bold">THE THROUGHLINE: </span>
              The external environment is not hostile to IPS. It is hostile to IPS&apos;s current business model.
              The technical foundation is elite. The geographic position is strong. The demand environment is favorable.
              The question is whether IPS will build the business model the reorganized industry rewards &mdash; before
              the window closes. The M&amp;A comps prove the stakes: the difference between 6x EBITDA (project-heavy) and
              16x EBITDA (recurring-revenue platform) is <span className="text-[#C8202D] font-bold">$35-59M in enterprise value</span>.
            </p>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Sources: PitchBook (company profiles, deal data, M&amp;A comps, March-April 2026) &middot; Grand View
              Research &middot; MarketsandMarkets &middot; Plunkett Research via Xavier/Gale &middot; SDM Magazine
              Top 100 (2024) &middot; NFPA 72 (2025) &middot; Capstone Partners (Feb 2026) &middot; AIA Consensus
              Construction Forecast (Jan 2025) &middot; Arizton &middot; CBRE Real Estate Outlook 2025 &middot;
              Genetec State of Physical Security 2026 &middot; FEMA.gov &middot; Congress.gov &middot; IPS Leadership
              Meeting (Mar 20, 2026) &middot; Pete Keller Consultation (Mar 25, 2026) &middot; IPS VTO &middot;
              Walter Kidde Channel Partner Agreement (Mar 2026) &middot; LenelS2 VAR Agreement (Sep 2025)
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
