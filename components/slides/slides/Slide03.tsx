import { SlideLayout } from '../SlideLayout'

const milestones = [
  { year: '2026', label: 'Buyout Planning', detail: 'Begin RMR acceleration & Atlanta leader hire', color: '#1B3A6B' },
  { year: '2027', label: 'Atlanta Launch', detail: 'Fire acquisition + security greenfield', color: '#6366f1' },
  { year: '2028', label: 'Capability Expand', detail: 'Cyber, cloud, managed services live', color: '#818cf8' },
  { year: '2029', label: 'Target: $100M+', detail: 'Independent converged platform', color: '#a5b4fc' },
]

const targets = [
  { label: 'Revenue Target', value: '$100M+', timeframe: '3-year horizon' },
  { label: 'Markets', value: '6+', timeframe: 'Add Atlanta (Mkt 6)' },
  { label: 'RMR Mix', value: '50%+', timeframe: 'From sub-20% today' },
  { label: 'Independence', value: 'Maintained', timeframe: 'No PE surrender' },
]

export function Slide03() {
  return (
    <SlideLayout actNumber={1} actLabel="ACT 1: THE WORLD YOU BUILT" title="What Success Looks Like: The IPS Vision" speaker="AJ McKean">
      <div className="h-full flex flex-col gap-[2%]">
        {/* VTO targets row */}
        <div className="grid grid-cols-4 gap-[1.5%]">
          {targets.map(t => (
            <div key={t.label} className="bg-[#f0f1fb] border-2 border-[#1B3A6B]/30 rounded-xl px-[5%] py-[3%] text-center">
              <p className="text-[0.7vw] text-[#80848f] uppercase tracking-wider font-semibold">{t.label}</p>
              <p className="text-[2.2vw] font-extrabold text-[#1B3A6B] my-[2%]">{t.value}</p>
              <p className="text-[0.75vw] text-[#80848f]">{t.timeframe}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[0.8vw] font-bold text-[#80848f] uppercase tracking-widest mb-[1.5%]">VTO Roadmap — 3-Year Horizon</p>
          {/* Track */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[1.6vw] left-[6%] right-[6%] h-[0.25vw] bg-[#e8edf7]" />
            <div className="grid grid-cols-4 gap-0 relative z-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex flex-col items-center">
                  {/* Dot */}
                  <div className="w-[3.2vw] h-[3.2vw] rounded-full flex items-center justify-center text-white font-bold text-[0.85vw] shadow-lg mb-[4%]"
                    style={{ backgroundColor: m.color }}>
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-white border-2 border-[#e8e9f0] rounded-xl px-[6%] py-[3%] text-center w-[90%]">
                    <p className="text-[0.75vw] font-bold text-[#1a1a1f]">{m.year}</p>
                    <p className="text-[0.9vw] font-bold text-[#1B3A6B] mt-[2%]">{m.label}</p>
                    <p className="text-[0.7vw] text-[#80848f] mt-[2%] leading-tight">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pivot callout */}
        <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[2%] flex items-center gap-[2%] flex-shrink-0">
          <div className="w-[0.4%] self-stretch bg-[#f59e0b] rounded-full flex-shrink-0" />
          <p className="text-white text-[0.9vw] leading-relaxed">
            <span className="font-bold text-[#fbbf24]">PIVOT POINT:</span> These targets are ambitious and achievable — IF the industry you&apos;re planning for is the same industry you&apos;ll be competing in. It isn&apos;t. The industry is changing shape underneath your feet.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
