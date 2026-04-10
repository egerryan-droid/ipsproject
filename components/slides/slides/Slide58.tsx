import { SlideLayout } from '../SlideLayout'

// PE in Fire Protection — who owns what, how much capital, what it means

const players = [
  {
    firm: 'Leonard Green / Pye-Barker',
    revenue: '$1.0B',
    model: 'Roll-up: 57 acquisitions/yr, 54 subsidiaries. SOFR+250 spread.',
    geography: 'Mason OH, Somerset KY, Louisville KY, Care Security Louisville KY (Nov 2025), HT Systems Greenwood IN (Nov 2025)',
    threat: 'Largest PE fire platform. $4.31B total raised, $6.1B valuation with ADIA+GIC sovereign wealth. $680M undrawn capacity.',
    color: '#C8202D',
  },
  {
    firm: 'Carlyle / Sciens Building Solutions',
    revenue: '$390M+',
    model: 'Regional expansion eastward',
    geography: 'Expanding into OH/KY/TN corridor',
    threat: 'Fire-focused platform moving directly into IPS markets.',
    color: '#C8202D',
  },
  {
    firm: 'Lone Star / Kidde-Edwards (OEM)',
    revenue: '$3B OEM',
    model: 'Manufacturer ownership — controls supply',
    geography: 'National (supplier to IPS)',
    threat: 'Controls IPS\u2019s primary fire panel supplier. Exclusivity eroding under PE ownership.',
    color: '#d96619',
  },
  {
    firm: 'Summit Fire & Security (SFP Holding)',
    revenue: '$800M+',
    model: '#1 acquirer: 43 total investments (11 in TTM). Status: Actively Seeking New Investments. CI Capital Partners co-invested on early deals.',
    geography: 'West Chester Township OH + national. Sister co: Protegis Fire & Security (Louisville, KY)',
    threat: '43 acquisitions makes Summit the most active fire acquirer. Now PE-owned post-SRS deal. Accelerating pace with 11 deals in trailing twelve months.',
    color: '#C8202D',
  },
  {
    firm: 'APi Group (Chubb Fire & Security)',
    revenue: '$7.911B',
    model: 'EC \u2192 life safety platform. $21.25B EV, 16.80x EV/EBITDA, $1.265B EBITDA, 29K employees, SOFR+175.',
    geography: 'Global + All State Fire & Security subsidiary in Harrison, OH (Cincinnati metro)',
    threat: 'Proved the playbook: buy EC, add fire+security, capture RMR. Every $1 inspection = $3\u20134 annual service. Mkt Cap $19.09B (+95.92% YoY).',
    color: '#1B3A6B',
  },
]

export function Slide58() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE CONVERGENCE SQUEEZE" title="PE in Fire Protection" speaker="Ryan Eger">
      <div className="h-full flex flex-col">
        <p className="text-[0.7vw] text-[#80848f] italic mb-[1.5%] flex-shrink-0">
          Fire protection&apos;s high barriers (NICET IV, AHJ relationships, code mandates) made it the last industry to consolidate. PE is now inside.
        </p>

        {/* Player cards */}
        <div className="flex-1 flex flex-col gap-[1.5%] min-h-0">
          {players.map((p) => (
            <div key={p.firm} className="flex rounded-lg border border-gray-200 bg-white overflow-hidden">
              {/* Left accent */}
              <div className="w-[0.4%] flex-shrink-0" style={{ backgroundColor: p.color }} />

              {/* Revenue badge */}
              <div className="w-[12%] flex flex-col items-center justify-center flex-shrink-0 bg-gray-50 px-[1%]">
                <span className="text-[1.4vw] font-extrabold leading-none" style={{ color: p.color }}>{p.revenue}</span>
              </div>

              {/* Content */}
              <div className="flex-1 flex items-center px-[2%] py-[1.5%] gap-[3%]">
                <div className="flex-1">
                  <p className="text-[0.75vw] font-extrabold text-[#1a1a1f] leading-tight">{p.firm}</p>
                  <p className="text-[0.55vw] text-[#80848f] mt-[0.5%]">{p.model}</p>
                </div>
                <div className="w-[15%] flex-shrink-0">
                  <p className="text-[0.5vw] font-bold text-[#80848f] uppercase tracking-wider mb-[2%]">Geography</p>
                  <p className="text-[0.55vw] text-[#1a1a1f] leading-snug">{p.geography}</p>
                </div>
                <div className="w-[30%] flex-shrink-0">
                  <p className="text-[0.5vw] font-bold uppercase tracking-wider mb-[2%]" style={{ color: p.color }}>IPS Impact</p>
                  <p className="text-[0.55vw] text-[#1a1a1f] leading-snug">{p.threat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key stats bar */}
        <div className="flex-shrink-0 mt-[1.5%] grid grid-cols-4 gap-[1.5%]">
          {[
            { val: '66.7%', label: 'Fire/life safety M&A increase YoY', color: '#C8202D' },
            { val: '125', label: 'Fire/life safety deals in 2025', color: '#1B3A6B' },
            { val: '10 yr', label: 'NICET IV barrier \u2014 but PE buys it', color: '#d96619' },
            { val: '$3B', label: 'Edwards OEM now PE-controlled', color: '#C8202D' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-lg px-[3%] py-[1.5%] text-center">
              <p className="text-[1.2vw] font-extrabold leading-none" style={{ color: s.color }}>{s.val}</p>
              <p className="text-[0.48vw] text-[#80848f] mt-[3%] leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex-shrink-0 pt-[0.5%]">
          <p className="text-[0.45vw] text-[#80848f] text-right">
            Sources: PitchBook &middot; Capstone Partners Feb 2026 &middot; APi Group 10-K &middot; SDM Magazine
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
