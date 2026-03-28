import { SlideLayout } from '../SlideLayout'

const segments = [
  { label: 'Fire Moat Window', start: 0, end: 40, color: '#1B3A6B', textColor: 'white', description: '3-5 year competitive advantage' },
  { label: 'Convergence Acceleration', start: 40, end: 70, color: '#f59e0b', textColor: 'white', description: 'PE pressure increases' },
  { label: 'New Competitive Landscape', start: 70, end: 100, color: '#C8202D', textColor: 'white', description: 'Converged industry mature' },
]

const timelineEvents = [
  { year: '2026', label: 'Act Now', detail: 'RMR acceleration begins, Atlanta leader hired', color: '#1B3A6B', position: 0 },
  { year: '2027', label: 'Atlanta Launch', detail: 'Market 6 operational, fire anchor acquired', color: '#1B3A6B', position: 25 },
  { year: '2028', label: 'Capability Live', detail: 'Cyber/managed services generating RMR', color: '#f59e0b', position: 50 },
  { year: '2029', label: 'Buyout Ready', detail: 'Strong EV, independence maintained', color: '#059669', position: 75 },
  { year: '2030+', label: 'Converged Market', detail: 'IPS positioned as independent platform', color: '#C8202D', position: 98 },
]

export function Slide19() {
  return (
    <SlideLayout actNumber={5} actLabel="ACT 5: CLOSE" title="The Window: Use It" speaker="Ryan Eger">
      <div className="h-full flex flex-col gap-[3%]">
        {/* Window statement */}
        <div className="bg-[#1a1a1f] rounded-2xl px-[5%] py-[3%] relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[0.6%] bg-[#1B3A6B]" />
          <p className="text-[1.2vw] text-white leading-relaxed pl-[1%]">
            The <span className="text-[#a5b4fc] font-bold">fire alarm moat</span> gives IPS 3-5 years where the competitive position is strong. That window aligns almost perfectly with the <span className="text-[#fbbf24] font-bold">partner buyout timeline</span>.
            <span className="text-[#6ee7b7] font-extrabold"> Use it.</span>
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="flex-1 flex flex-col gap-[2%]">
          <p className="text-[0.75vw] font-bold text-[#80848f] uppercase tracking-widest">The IPS Window — 2026 to 2030+</p>

          {/* Color band */}
          <div className="h-[3vw] rounded-xl overflow-hidden flex relative">
            {segments.map(seg => (
              <div
                key={seg.label}
                className="h-full flex items-center justify-center"
                style={{ width: `${seg.end - seg.start}%`, backgroundColor: seg.color }}
              >
                <p className="text-white text-[0.65vw] font-bold text-center px-[2%]">{seg.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline dots */}
          <div className="relative h-[5vw]">
            {timelineEvents.map(ev => (
              <div
                key={ev.year}
                className="absolute flex flex-col items-center"
                style={{ left: `calc(${ev.position}% - 2vw)`, top: 0 }}
              >
                <div className="w-[0.8vw] h-[0.8vw] rounded-full border-4 border-white shadow-md" style={{ backgroundColor: ev.color }} />
                <div className="mt-[0.5vw] text-center">
                  <p className="text-[0.8vw] font-extrabold" style={{ color: ev.color }}>{ev.year}</p>
                  <p className="text-[0.7vw] font-bold text-[#1a1a1f] leading-tight">{ev.label}</p>
                  <p className="text-[0.6vw] text-[#80848f] leading-tight max-w-[8vw]">{ev.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Moat bands */}
          <div className="grid grid-cols-3 gap-[1.5%]">
            <div className="bg-blue-50/60 border-2 border-[#1B3A6B]/40 rounded-xl px-[4%] py-[2.5%] text-center">
              <p className="text-[1.4vw] font-extrabold text-[#1B3A6B]">NOW</p>
              <p className="text-[0.75vw] font-bold text-[#1a1a1f]">Act on all 3 paths</p>
              <p className="text-[0.65vw] text-[#80848f]">Moat is strongest today</p>
            </div>
            <div className="bg-[#fffbeb] border-2 border-[#f59e0b]/40 rounded-xl px-[4%] py-[2.5%] text-center">
              <p className="text-[1.4vw] font-extrabold text-[#f59e0b]">2027-28</p>
              <p className="text-[0.75vw] font-bold text-[#1a1a1f]">Buyout window opens</p>
              <p className="text-[0.65vw] text-[#80848f]">EV multiplier improving</p>
            </div>
            <div className="bg-[#fef2f2] border-2 border-[#C8202D]/40 rounded-xl px-[4%] py-[2.5%] text-center">
              <p className="text-[1.4vw] font-extrabold text-[#C8202D]">2029+</p>
              <p className="text-[0.75vw] font-bold text-[#1a1a1f]">Moat narrows</p>
              <p className="text-[0.65vw] text-[#80848f]">Position now or face squeeze</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
