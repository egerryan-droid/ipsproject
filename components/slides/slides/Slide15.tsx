import { SlideLayout } from '../SlideLayout'

const actions = [
  { priority: 'NOW', item: 'Bundle fire inspection into annual SLA contracts', detail: 'Convert every inspection to a managed contract', urgency: 'high' },
  { priority: 'NOW', item: 'Add monitoring to every access/video install', detail: 'Brivo + Eagle Eye already support it', urgency: 'high' },
  { priority: '30 DAYS', item: 'Repackage service offerings as subscriptions', detail: 'OpEx pricing customers already expect', urgency: 'medium' },
  { priority: '60 DAYS', item: 'Sales team RMR quota + incentive alignment', detail: 'Comp structure must reward recurring wins', urgency: 'medium' },
  { priority: '90 DAYS', item: 'Pursue 1-2 cyber partnership agreements', detail: 'White-label or co-sell with IT/cyber firm', urgency: 'medium' },
]

const impactBars = [
  { label: 'Today (<20% RMR)', value: 18, ev: '~3x EBITDA', color: '#C8202D' },
  { label: 'Target (50%+ RMR)', value: 55, ev: '~6x EBITDA', color: '#1B3A6B' },
  { label: 'Best-in-class (60%+ RMR)', value: 65, ev: '~8-10x EBITDA', color: '#059669' },
]

export function Slide15() {
  return (
    <SlideLayout actNumber={4} actLabel="ACT 4: THE PATH FORWARD" title="Path 1: RMR Acceleration" speaker="Ryan Eger">
      <div className="h-full flex gap-[2%]">
        {/* Action items */}
        <div className="flex-1 flex flex-col gap-[1.5%]">
          <div className="flex items-center justify-between mb-[0.5%]">
            <p className="text-[0.75vw] font-bold text-[#80848f] uppercase tracking-widest">Action Items</p>
            <span className="bg-[#C8202D] text-white text-[0.6vw] font-extrabold px-[2%] py-[0.5%] rounded-full">START IMMEDIATELY</span>
          </div>
          {actions.map(a => (
            <div key={a.item} className={`rounded-xl border px-[4%] py-[2.5%] flex items-start gap-[3%] ${a.urgency === 'high' ? 'border-[#C8202D]/40 bg-[#fff7ed]' : 'border-[#e8e9f0] bg-[#f9f9fb]'}`}>
              <span className={`text-[0.6vw] font-extrabold px-[3%] py-[0.5%] rounded flex-shrink-0 mt-[0.2vw] ${a.urgency === 'high' ? 'bg-[#C8202D] text-white' : 'bg-[#f5f5f8] text-[#80848f] border border-[#e8e9f0]'}`}>
                {a.priority}
              </span>
              <div>
                <p className="text-[0.85vw] font-semibold text-[#1a1a1f] leading-tight">{a.item}</p>
                <p className="text-[0.7vw] text-[#80848f] mt-[1%]">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact visualization */}
        <div className="w-[38%] flex flex-col gap-[2%]">
          <p className="text-[0.75vw] font-bold text-[#80848f] uppercase tracking-widest">RMR % &#x2192; Enterprise Value Impact</p>
          {impactBars.map(bar => (
            <div key={bar.label} className="flex flex-col gap-[1%]">
              <div className="flex items-center justify-between">
                <p className="text-[0.75vw] font-semibold text-[#1a1a1f]">{bar.label}</p>
                <p className="text-[0.75vw] font-bold" style={{ color: bar.color }}>{bar.ev}</p>
              </div>
              <div className="w-full h-[2vw] bg-[#f5f5f8] rounded-lg overflow-hidden border border-[#e8e9f0]">
                <div
                  className="h-full rounded-lg flex items-center px-[3%]"
                  style={{ width: `${bar.value}%`, backgroundColor: bar.color }}
                >
                  <span className="text-white text-[0.65vw] font-bold">{bar.value}%</span>
                </div>
              </div>
            </div>
          ))}

          {/* Key insight */}
          <div className="bg-[#1a1a1f] rounded-xl px-[5%] py-[4%] mt-[2%]">
            <p className="text-[0.7vw] font-bold text-[#C8202D] uppercase tracking-wider mb-[2%]">Why This First</p>
            <p className="text-white text-[0.8vw] leading-relaxed">Highest leverage. Lowest capital requirement. No new headcount needed to begin. The existing Brivo/Eagle Eye platform already supports it.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
