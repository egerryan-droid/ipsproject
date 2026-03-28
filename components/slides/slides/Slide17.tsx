import { SlideLayout } from '../SlideLayout'

const capabilities = [
  { icon: '🔐', title: 'OT/IT Cybersecurity', detail: 'Managed security for industrial control + building systems. White-label or co-sell with MSSP partner.', timeline: '12-18 months', priority: 'High' },
  { icon: '☁️', title: 'Cloud Managed Services', detail: 'Brivo / Eagle Eye → managed SOC + NOC. Monthly subscription model.', timeline: '6-12 months', priority: 'High' },
  { icon: '🏗️', title: 'Building Automation', detail: 'HVAC, BMS integration. Partner with mechanical for full-service offering.', timeline: '18-24 months', priority: 'Medium' },
]

export function Slide17() {
  return (
    <SlideLayout actNumber={4} actLabel="ACT 4: THE PATH FORWARD" title="Path 3: Capability Expansion" speaker="Ryan Eger">
      <div className="h-full flex gap-[2%]">
        {/* Concentric capability diagram */}
        <div className="w-[38%] flex items-center justify-center relative">
          {/* Outer ring - Platform */}
          <div className="absolute inset-[2%] rounded-full border-4 border-dashed border-[#fdba74] bg-[#fff7ed]/50 flex items-center justify-center">
            {/* Middle ring - Expand */}
            <div className="w-[72%] h-[72%] rounded-full border-4 border-[#86efac] bg-[#f0fdf4]/80 flex items-center justify-center">
              {/* Core */}
              <div className="w-[60%] h-[60%] rounded-full border-4 border-[#1B3A6B] bg-[#1B3A6B] flex flex-col items-center justify-center shadow-xl">
                <p className="text-white font-extrabold text-[0.9vw] text-center leading-tight">IPS</p>
                <p className="text-[#e8edf7] text-[0.6vw] text-center">Core</p>
              </div>
            </div>
          </div>
          {/* Labels */}
          <div className="absolute bottom-[4%] left-0 right-0 flex justify-center gap-[4%] text-[0.55vw]">
            <span className="flex items-center gap-[1%]"><span className="w-[1vw] h-[0.2vw] bg-[#1B3A6B] inline-block rounded" /> Core</span>
            <span className="flex items-center gap-[1%]"><span className="w-[1vw] h-[0.2vw] bg-[#059669] inline-block rounded" /> Expand</span>
            <span className="flex items-center gap-[1%]"><span className="w-[1vw] h-[0.2vw] bg-[#C8202D] inline-block rounded" style={{borderStyle:'dashed', borderWidth:'1px'}} /> Platform</span>
          </div>
        </div>

        {/* Layer cards + capability details */}
        <div className="flex-1 flex flex-col gap-[1.5%]">
          <p className="text-[0.75vw] font-bold text-[#80848f] uppercase tracking-widest">Capability Expansion Roadmap</p>
          {capabilities.map(c => (
            <div key={c.title} className="bg-[#f9f9fb] border border-[#e8e9f0] rounded-xl px-[4%] py-[2.5%] flex gap-[3%] items-start">
              <span className="text-[1.4vw] flex-shrink-0">{c.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[0.9vw] font-bold text-[#1a1a1f]">{c.title}</p>
                  <div className="flex items-center gap-[2%]">
                    <span className="text-[0.6vw] text-[#80848f]">{c.timeline}</span>
                    <span className={`text-[0.55vw] font-bold px-[2%] py-[0.5%] rounded ${c.priority === 'High' ? 'bg-[#1B3A6B] text-white' : 'bg-[#f5f5f8] text-[#80848f] border border-[#e8e9f0]'}`}>{c.priority}</span>
                  </div>
                </div>
                <p className="text-[0.75vw] text-[#80848f] mt-[1%] leading-relaxed">{c.detail}</p>
              </div>
            </div>
          ))}

          <div className="bg-[#1a1a1f] rounded-xl px-[4%] py-[2.5%] flex items-center gap-[2%]">
            <div className="w-[0.4%] self-stretch bg-[#1B3A6B] rounded-full flex-shrink-0" />
            <p className="text-white text-[0.85vw] leading-relaxed">
              <span className="text-[#93c5fd] font-bold">You don&apos;t need to become Convergint.</span> You need to become the independent alternative — the converged platform with local relationships and the GAS factor PE platforms lose after acquisition.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
