import { SlideLayout } from '../SlideLayout'

// PE in Electrical Contracting — the third front, newest and most immediately threatening

const players = [
  {
    firm: '26North / ArchKey (PEC Solutions)',
    revenue: '$1.4B',
    model: 'Integrated EC + fire + security. Building NICET capability in-house.',
    geography: 'National \u2014 IPS\u2019s $2.5M customer',
    threat: 'IPS\u2019s largest EC customer. Actively hiring NICET-certified estimators to replace subcontracted fire work.',
    color: '#C8202D',
  },
  {
    firm: 'Apollo / The State Group',
    revenue: 'Regional',
    model: 'Fire + security + EC combined platform.',
    geography: 'KY, IN, TN \u2014 IPS\u2019s exact geography',
    threat: 'Operating in every IPS market. Combined capability means they don\u2019t need IPS as subcontractor.',
    color: '#C8202D',
  },
  {
    firm: 'EMCOR Group',
    revenue: '$14.6B',
    model: 'Hundreds of NICET-certified staff. Dedicated fire/security divisions.',
    geography: 'National',
    threat: 'Already has the fire capability at scale. Doesn\u2019t need to acquire it \u2014 built it internally.',
    color: '#d96619',
  },
  {
    firm: 'IES Holdings (Communications segment)',
    revenue: '$2.9B',
    model: 'Communications segment grew 56% YoY. Adding low-voltage and security.',
    geography: 'Multi-regional, expanding',
    threat: 'Fastest organic growth among ECs. Adding capability that overlaps with IPS security work.',
    color: '#d96619',
  },
  {
    firm: 'Hunt Electric / Norlee Group',
    revenue: '$500M+ / Regional',
    model: 'Hunt: national EC adding fire. Norlee: Heartwood Partners PE-backed roll-up.',
    geography: 'National / Regional expanding',
    threat: 'Both adding fire and security divisions. The subcontractor-to-competitor pipeline is real.',
    color: '#1B3A6B',
  },
]

export function Slide60() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE CONVERGENCE SQUEEZE" title="PE in Electrical Contracting" speaker="Ryan Eger">
      <div className="h-full flex flex-col">
        <p className="text-[0.7vw] text-[#80848f] italic mb-[1.5%] flex-shrink-0">
          The third front. PE is buying the EC channel IPS sells through &mdash; and building the capability to replace IPS from inside the project pipeline.
        </p>

        {/* Player cards */}
        <div className="flex-1 flex flex-col gap-[1.2%] min-h-0">
          {players.map((p) => (
            <div key={p.firm} className="flex rounded-lg border border-gray-200 bg-white overflow-hidden">
              <div className="w-[0.4%] flex-shrink-0" style={{ backgroundColor: p.color }} />
              <div className="w-[12%] flex flex-col items-center justify-center flex-shrink-0 bg-gray-50 px-[1%]">
                <span className="text-[1.2vw] font-extrabold leading-none text-center" style={{ color: p.color }}>{p.revenue}</span>
              </div>
              <div className="flex-1 flex items-center px-[2%] py-[1.2%] gap-[3%]">
                <div className="flex-1">
                  <p className="text-[0.7vw] font-extrabold text-[#1a1a1f] leading-tight">{p.firm}</p>
                  <p className="text-[0.52vw] text-[#80848f] mt-[0.5%]">{p.model}</p>
                </div>
                <div className="w-[15%] flex-shrink-0">
                  <p className="text-[0.48vw] font-bold text-[#80848f] uppercase tracking-wider mb-[2%]">Geography</p>
                  <p className="text-[0.52vw] text-[#1a1a1f] leading-snug">{p.geography}</p>
                </div>
                <div className="w-[30%] flex-shrink-0">
                  <p className="text-[0.48vw] font-bold uppercase tracking-wider mb-[2%]" style={{ color: p.color }}>IPS Impact</p>
                  <p className="text-[0.52vw] text-[#1a1a1f] leading-snug">{p.threat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key stats bar */}
        <div className="flex-shrink-0 mt-[1.5%] grid grid-cols-4 gap-[1.5%]">
          {[
            { val: '79', label: 'EC deals in 2024', color: '#1B3A6B' },
            { val: '73%', label: 'PE-driven acquisitions', color: '#C8202D' },
            { val: '3 of 8', label: 'Top IPS EC customers now PE-owned', color: '#C8202D' },
            { val: '90 days', label: 'To assemble fire capability via M&A', color: '#d96619' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-lg px-[3%] py-[1.5%] text-center">
              <p className="text-[1.2vw] font-extrabold leading-none" style={{ color: s.color }}>{s.val}</p>
              <p className="text-[0.48vw] text-[#80848f] mt-[3%] leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="flex-shrink-0 bg-[#1a1a1f] rounded-xl px-[4%] py-[2%] mt-[1%]">
          <p className="text-[0.75vw] text-white leading-relaxed">
            <span className="font-bold" style={{ color: '#fca5a5' }}>THE PLAYBOOK: </span>
            Buy the EC &rarr; get GC relationships and job site presence &rarr; acquire or hire fire/security capability &rarr; stop subcontracting &rarr; capture monitoring, inspection, and managed services RMR. The subcontractors becoming competitors.
          </p>
        </div>

        <div className="flex-shrink-0 pt-[0.5%]">
          <p className="text-[0.45vw] text-[#80848f] text-right">
            Sources: PitchBook &middot; FMI Capital Advisors &middot; ArchKey corporate website &middot; IES Holdings 10-Q &middot; EMCOR SEC filings &middot; IPS customer data
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
