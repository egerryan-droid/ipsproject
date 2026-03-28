import { SlideLayout } from '../SlideLayout'

const steps = [
  { num: '01', title: 'Hire Atlanta Leader', detail: 'Find proven fire/security PM with Atlanta AHJ relationships. Leader-first model — no leader, no launch.', timeline: 'Q3 2026' },
  { num: '02', title: 'Fire Anchor Acquisition', detail: 'Identify 1-3 small Atlanta fire integrators for acquisition or partnership. Nashville playbook.', timeline: 'Q4 2026' },
  { num: '03', title: 'Security Greenfield', detail: 'Leverage existing vendor relationships (Brivo, Eagle Eye). Sell into fire customer base first.', timeline: 'Q1 2027' },
  { num: '04', title: 'Full Market Presence', detail: '$10-15M revenue target Year 2. RMR-first pricing from day one.', timeline: 'Q3 2027' },
]

const whyAtlanta = [
  { icon: '📍', text: 'Fastest-growing metro in the Southeast' },
  { icon: '🏢', text: 'IPS customers already requesting coverage' },
  { icon: '🔥', text: 'Fire integrator acquisition targets identified' },
  { icon: '🤝', text: 'Nashville market validation — playbook proven' },
  { icon: '📊', text: 'Aligns with IPS VTO 3-year geographic target' },
]

export function Slide16() {
  return (
    <SlideLayout actNumber={4} actLabel="ACT 4: THE PATH FORWARD" title="Path 2: Geographic Expansion — Atlanta" speaker="Ryan Eger">
      <div className="h-full flex gap-[2%]">
        {/* Playbook steps */}
        <div className="flex-1 flex flex-col gap-[1.5%]">
          <p className="text-[0.75vw] font-bold text-[#80848f] uppercase tracking-widest mb-[0.5%]">The Nashville Playbook: Atlanta Edition</p>
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-[3%] items-stretch">
              {/* Step number + connector */}
              <div className="flex flex-col items-center">
                <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-[#1B3A6B] flex items-center justify-center text-white font-extrabold text-[0.7vw] flex-shrink-0">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#1B3A6B]/30 mt-[1%]" />
                )}
              </div>
              {/* Content */}
              <div className="flex-1 bg-[#f5f5f8] border border-gray-200 rounded-xl px-[4%] py-[2.5%] mb-[1%]">
                <div className="flex items-center justify-between">
                  <p className="text-[0.9vw] font-bold text-[#1a1a1f]">{s.title}</p>
                  <span className="text-[0.6vw] font-bold text-[#1B3A6B] border border-[#1B3A6B]/40 px-[3%] py-[0.5%] rounded">{s.timeline}</span>
                </div>
                <p className="text-[0.75vw] text-[#80848f] mt-[1%] leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Atlanta */}
        <div className="w-[35%] flex flex-col gap-[1.5%]">
          <p className="text-[0.75vw] font-bold text-[#80848f] uppercase tracking-widest mb-[0.5%]">Why Atlanta</p>
          <div className="flex-1 bg-[#f5f5f8] border-2 border-[#e8e9f0] rounded-2xl px-[5%] py-[3%] flex flex-col gap-[2%]">
            {whyAtlanta.map(w => (
              <div key={w.text} className="flex items-start gap-[3%]">
                <span className="text-[1.1vw] flex-shrink-0">{w.icon}</span>
                <p className="text-[0.8vw] text-[#1a1a1f] leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1a1a1f] rounded-xl px-[5%] py-[3%]">
            <p className="text-[0.7vw] font-bold text-[#fdba74] uppercase tracking-wider mb-[2%]">Nashville Proof Point</p>
            <p className="text-white text-[0.75vw] leading-relaxed">Nashville launched the same way — fire anchor, security greenfield, leader-first. It worked. Atlanta is the next market validation.</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
