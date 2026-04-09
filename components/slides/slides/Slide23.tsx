import { SlideLayout } from '../SlideLayout'

// Slide 23 — The Demand Environment
// Intent: Demand is a tailwind. The constraint is labor and competitive positioning.
// Layout: 3 demand columns (Federal, Construction, Cloud) + bottom labor constraint bar

const demandColumns = [
  {
    icon: '🏛',
    label: 'FEDERAL TAILWINDS',
    stat: '$1B+',
    statLabel: 'annual security grants',
    color: '#1B3A6B',
    bullets: [
      'DHS/FEMA HSGP: $1.008B in FY2025',
      'NDAA §889 Chinese equipment ban — rip-and-replace demand in gov, education, healthcare',
      'School safety mandates generating funded pipelines in OH, KY, TN',
      '$73M School Violence Prevention + $200M/yr Bipartisan Safer Communities Act',
    ],
  },
  {
    icon: '🏗',
    label: 'CONSTRUCTION TAILWINDS',
    stat: '77',
    statLabel: 'data centers planned — Columbus by 2030',
    color: '#166534',
    bullets: [
      'Data Centers: +21.9% construction growth (2025) — Columbus #3, 77 facilities, 2.4 GW planned',
      'Healthcare: hospital starts $28.4B projected 2026 (+11.6%) — aging population multi-year cycle',
      'Education: +6% construction — fire safety mandates driving funded pipelines',
      'CAUTION: Office -8–10% YoY, ~20% vacancy. Warehouse declining from 2022–23 peak',
    ],
  },
  {
    icon: '☁',
    label: 'CLOUD / XaaS ACCELERATION',
    stat: '16–18%',
    statLabel: 'CAGR vs. 4–7% base market',
    color: '#0d8090',
    bullets: [
      'ACaaS: $1.34B → $3.06B by 2029 (17.9% CAGR)',
      'VSaaS: $5.09B → $10.74B by 2029 (16.1% CAGR)',
      '82% of organizations planning cloud access control transitions',
      'Cloud layer growing 3–4× faster than traditional integration',
    ],
  },
]

export function Slide23() {
  return (
    <SlideLayout actNumber={1} actLabel="ACT 1: THE PLAYING FIELD" title="The Demand Environment" speaker="AJ McKean">
      <div className="h-full flex flex-col">
        {/* Hero stat + subtitle */}
        <div className="flex items-baseline gap-[2%] mb-[1.5%] flex-shrink-0">
          <span className="text-[2.5vw] font-extrabold text-[#1B3A6B] leading-none">13 of 17</span>
          <span className="text-[0.85vw] text-[#1a1a1f] font-medium">macro trends favorable across both industries</span>
        </div>
        <p className="text-[0.7vw] text-[#80848f] italic mb-[2%] flex-shrink-0">
          The demand environment is overwhelmingly positive. The constraint is not demand — it&apos;s capacity and competitive positioning.
        </p>

        {/* Three demand columns */}
        <div className="flex-1 grid grid-cols-3 gap-[1.5%] min-h-0">
          {demandColumns.map((col) => (
            <div
              key={col.label}
              className="flex flex-col rounded-xl border border-gray-200 overflow-hidden bg-white"
            >
              {/* Column header */}
              <div className="px-[5%] pt-[4%] pb-[3%]" style={{ borderBottom: `2px solid ${col.color}20` }}>
                <div className="flex items-center gap-[3%] mb-[3%]">
                  <span className="text-[1.2vw]">{col.icon}</span>
                  <p className="text-[0.55vw] font-bold uppercase tracking-widest" style={{ color: col.color }}>{col.label}</p>
                </div>
                <div className="flex items-baseline gap-[4%]">
                  <span className="text-[2vw] font-extrabold leading-none" style={{ color: col.color }}>{col.stat}</span>
                  <span className="text-[0.5vw] text-[#80848f] leading-tight">{col.statLabel}</span>
                </div>
              </div>

              {/* Bullets */}
              <div className="px-[5%] py-[3%] flex flex-col gap-[4%]">
                {col.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-[4%]">
                    <div
                      className="w-[0.35vw] h-[0.35vw] rounded-full mt-[0.3vw] flex-shrink-0"
                      style={{ backgroundColor: col.color }}
                    />
                    <p className="text-[0.58vw] text-[#1a1a1f] leading-snug">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Labor constraint — the binding ceiling */}
        <div className="flex-shrink-0 mt-[1.5%] rounded-xl overflow-hidden" style={{ border: '2px solid #fde68a', backgroundColor: '#fffbeb' }}>
          <div className="flex items-stretch">
            {/* Label */}
            <div className="bg-[#92400e] px-[2%] flex items-center justify-center flex-shrink-0">
              <p className="text-white text-[0.5vw] font-bold uppercase tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                BINDING CONSTRAINT
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 px-[2.5%] py-[1.5%]">
              <div className="flex items-center gap-[2%] mb-[1%]">
                <p className="text-[0.85vw] font-extrabold text-[#92400e]">Labor: The Ceiling on Everything</p>
                <span className="text-[0.45vw] font-bold px-[1%] py-[0.3%] rounded-full uppercase bg-[#fef3c7] text-[#92400e]">HEADWIND</span>
              </div>
              <div className="grid grid-cols-3 gap-[3%]">
                <div>
                  <span className="text-[1.4vw] font-extrabold text-[#92400e]">29%</span>
                  <p className="text-[0.5vw] text-[#1a1a1f]">of fire workforce retiring by 2026</p>
                </div>
                <div>
                  <span className="text-[1.4vw] font-extrabold text-[#92400e]">52%</span>
                  <p className="text-[0.5vw] text-[#1a1a1f]">of security firms report hiring difficulty</p>
                </div>
                <div>
                  <span className="text-[1.4vw] font-extrabold text-[#92400e]">0</span>
                  <p className="text-[0.5vw] text-[#1a1a1f]">industry apprenticeship programs at scale — who solves it wins</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Source */}
        <div className="pt-[0.5%] flex-shrink-0">
          <p className="text-[0.45vw] text-[#80848f] text-right">
            Sources: Grand View Research · MarketsandMarkets · AIA Consensus Forecast (Jan 2025) · ConstructConnect · Arizton · FEMA.gov · Genetec 2026 · BLS
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
