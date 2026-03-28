import { SlideLayout } from '../SlideLayout'

const contextCards = [
  { label: 'Partner buyout need', value: '42%', detail: 'Ownership stake to fund', color: '#C8202D' },
  { label: 'Fire moat window', value: '3-5 yrs', detail: 'Before full PE convergence', color: '#f59e0b' },
  { label: 'RMR multiplier jump', value: '3x→6x+', detail: 'EV impact of RMR shift', color: '#1B3A6B' },
  { label: 'Deal volume growth', value: '+24%', detail: '2025 M&A YoY increase', color: '#059669' },
]

const paths = [
  { num: '1', label: 'RMR Acceleration', icon: '🔄', color: '#1B3A6B', detail: 'Shift revenue model now' },
  { num: '2', label: 'Atlanta Expansion', icon: '🗺️', color: '#059669', detail: 'Leader-first, fire anchor' },
  { num: '3', label: 'Capability Expand', icon: '🚀', color: '#C8202D', detail: 'Cyber, cloud, managed services' },
]

export function Slide14() {
  return (
    <SlideLayout actNumber={4} actLabel="ACT 4: THE PATH FORWARD" title="The Strategic Imperative" speaker="Ryan Eger">
      <div className="h-full flex flex-col gap-[2%]">
        {/* Bold statement */}
        <div className="bg-[#1a1a1f] rounded-2xl px-[5%] py-[3.5%] relative overflow-hidden flex-shrink-0">
          <div className="absolute left-0 top-0 bottom-0 w-[0.6%] bg-[#C8202D]" />
          <p className="text-[1.3vw] text-white leading-relaxed pl-[1%]">
            IPS must grow fast enough to fund the buyout of a <span className="text-[#fbbf24] font-bold">42% partner</span> — without surrendering independence to private equity. The converged industry model is simultaneously the <span className="text-[#f87171] font-bold">threat</span> AND the <span className="text-[#6ee7b7] font-bold">solution</span>.
          </p>
        </div>

        {/* Context cards */}
        <div className="grid grid-cols-4 gap-[1.5%]">
          {contextCards.map(c => (
            <div key={c.label} className="rounded-xl border-2 px-[5%] py-[3%]" style={{ borderColor: c.color + '40', backgroundColor: c.color + '0a' }}>
              <p className="text-[0.65vw] font-semibold text-[#80848f] uppercase tracking-wider">{c.label}</p>
              <p className="text-[2vw] font-extrabold mt-[2%]" style={{ color: c.color }}>{c.value}</p>
              <p className="text-[0.7vw] text-[#80848f] mt-[1%]">{c.detail}</p>
            </div>
          ))}
        </div>

        {/* Three path previews */}
        <div className="flex-1 grid grid-cols-3 gap-[1.5%]">
          {paths.map(p => (
            <div key={p.num} className="rounded-xl border-2 px-[6%] py-[4%] flex flex-col justify-between" style={{ borderColor: p.color + '40', backgroundColor: p.color + '08' }}>
              <div>
                <div className="flex items-center gap-[3%] mb-[3%]">
                  <span className="text-[1.4vw] font-extrabold" style={{ color: p.color }}>PATH {p.num}</span>
                  <span className="text-[1.4vw]">{p.icon}</span>
                </div>
                <p className="text-[1.1vw] font-bold text-[#1a1a1f]">{p.label}</p>
                <p className="text-[0.8vw] text-[#80848f] mt-[2%]">{p.detail}</p>
              </div>
              <div className="w-full h-[0.3vw] rounded-full mt-[4%]" style={{ backgroundColor: p.color }} />
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
