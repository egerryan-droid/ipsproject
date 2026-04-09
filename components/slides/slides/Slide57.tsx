import { SlideLayout } from '../SlideLayout'

const evidenceCards = [
  { label: 'MARGIN MATH', text: 'Service margins are 2.5\u00d7 project margins \u2014 the economics are clear', color: '#1B3A6B' },
  { label: 'VALUATION MATH', text: 'PE platforms at 13\u201314\u00d7 EBITDA driven by RMR portfolios. Project-heavy businesses trade at material discount. RMR directly impacts enterprise value and the buyout equation.', color: '#1B3A6B' },
  { label: 'APi GROUP MODEL', text: 'Every $1 of inspection generates $3\u20134 in annual service revenue. ECs building fire in-house are targeting this same recurring revenue pool.', color: '#C8202D' },
  { label: 'CUSTOMER DEMAND', text: '82% planning cloud access control transitions. Inspection/testing/maintenance is the fastest-growing fire service segment. The market wants to buy this way.', color: '#166534' },
  { label: 'PLATFORMS EXIST', text: 'Brivo, Genetec already deployed at IPS. The gap is go-to-market execution, not technology.', color: '#0d8090' },
]

export function Slide57() {
  return (
    <SlideLayout actNumber={3} actLabel="ACT 3: WHERE IPS STANDS" title="The Recurring Revenue Imperative" speaker="Zahria Tucker">
      <div className="h-full flex">
        {/* Left: RMR Gap Visualization */}
        <div className="w-[38%] flex flex-col justify-center pr-[3%]">
          <p className="text-[0.6vw] font-bold text-[#80848f] uppercase tracking-widest mb-[3%]">IPS RECURRING REVENUE</p>
          <div className="mb-[4%]">
            <div className="flex items-end gap-[4%] mb-[2%]">
              <div className="flex flex-col items-center" style={{ width: '40%' }}>
                <span className="text-[3vw] font-extrabold text-[#C8202D] leading-none">7&ndash;10%</span>
                <span className="text-[0.55vw] text-[#80848f] mt-[2%]">IPS today</span>
                <div className="w-full h-[4vw] bg-[#C8202D]/15 rounded-lg mt-[3%] border-2 border-[#C8202D]/30" />
              </div>
              <div className="flex flex-col items-center" style={{ width: '40%' }}>
                <span className="text-[3vw] font-extrabold text-[#166534] leading-none">25%+</span>
                <span className="text-[0.55vw] text-[#80848f] mt-[2%]">Benchmark</span>
                <div className="w-full h-[10vw] bg-[#166534]/15 rounded-lg mt-[3%] border-2 border-[#166534]/30" />
              </div>
            </div>
          </div>
          <p className="text-[0.75vw] font-bold text-[#1a1a1f] leading-snug">The single largest gap in the competitive scorecard</p>
          <p className="text-[0.6vw] text-[#80848f] mt-[1%] leading-snug">RMR connects competitive positioning, valuation multiples, and the partner buyout equation</p>
        </div>
        {/* Right: Evidence cards */}
        <div className="flex-1 flex flex-col gap-[2%] pl-[2%]" style={{ borderLeft: '1px solid #e5e7eb' }}>
          <p className="text-[0.55vw] font-bold text-[#1B3A6B] uppercase tracking-widest mb-[1%]">WHY RMR IS THE ANSWER</p>
          {evidenceCards.map((card) => (
            <div key={card.label} className="flex-1 rounded-lg bg-gray-50 border border-gray-200 px-[3%] py-[2%] flex flex-col justify-center" style={{ borderLeft: `3px solid ${card.color}` }}>
              <p className="text-[0.5vw] font-bold uppercase tracking-widest mb-[1%]" style={{ color: card.color }}>{card.label}</p>
              <p className="text-[0.55vw] text-[#1a1a1f] leading-snug">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
