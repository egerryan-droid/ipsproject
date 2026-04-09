import { SlideLayout } from '../SlideLayout'

const fireRewards = [
  { label: 'NICET IV Certification', note: '10-year investment; recognized by AHJs and GCs as mark of credibility' },
  { label: 'AHJ Relationship Capital', note: 'Locally built over time; not transferable through ownership changes' },
  { label: 'Multi-State Licensing', note: 'Each state requires separate licensing — meaningful barrier' },
  { label: 'Code-Mandated Inspection Contracts', note: 'Recurring, driven by installed base — not construction cycles' },
  { label: 'Proprietary Panel Switching Costs', note: 'Replacement is technically complex and disruptive' },
]

const securityRewards = [
  { label: 'Open Architecture Capability', note: '73% of buyers require vendor-agnostic platforms (Genetec 2026)' },
  { label: 'Cloud Migration Capability', note: 'ACaaS/VSaaS are the fastest-growing segments in the market' },
  { label: 'Cybersecurity Competency', note: 'Emerging buyer evaluation criterion — enterprise, healthcare, gov, education' },
  { label: 'Integrated Solutions', note: '60% of buyers operating unified systems (Genetec 2026)' },
  { label: 'Long-Term Customer Relationships', note: 'In a low-barrier market, relationship depth is the most durable advantage' },
]

export function Slide54() {
  return (
    <SlideLayout actNumber={1} actLabel="ACT 1: THE PLAYING FIELD" title="What These Markets Reward" speaker="AJ McKean">
      <div className="h-full flex flex-col">
        <div className="flex-1 grid grid-cols-2 gap-[2%] min-h-0">
          {/* Fire */}
          <div className="flex flex-col">
            <div className="flex items-center gap-[2%] mb-[2%]">
              <div className="w-[0.5%] self-stretch bg-[#C8202D] rounded-full flex-shrink-0" style={{ minHeight: '1.5vw' }} />
              <p className="text-[0.9vw] font-extrabold text-[#1a1a1f]">Fire Rewards Depth &amp; Stickiness</p>
            </div>
            <div className="flex flex-col gap-[2%] flex-1">
              {fireRewards.map((r) => (
                <div key={r.label} className="bg-red-50 border border-red-100 rounded-lg px-[4%] py-[2%] flex flex-col justify-center">
                  <p className="text-[0.7vw] font-bold text-[#1a1a1f]">{r.label}</p>
                  <p className="text-[0.55vw] text-[#80848f] mt-[1%] leading-snug">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Security */}
          <div className="flex flex-col">
            <div className="flex items-center gap-[2%] mb-[2%]">
              <div className="w-[0.5%] self-stretch bg-[#2563eb] rounded-full flex-shrink-0" style={{ minHeight: '1.5vw' }} />
              <p className="text-[0.9vw] font-extrabold text-[#1a1a1f]">Security Rewards Breadth &amp; Delivery Model</p>
            </div>
            <div className="flex flex-col gap-[2%] flex-1">
              {securityRewards.map((r) => (
                <div key={r.label} className="bg-blue-50 border border-blue-100 rounded-lg px-[4%] py-[2%] flex flex-col justify-center">
                  <p className="text-[0.7vw] font-bold text-[#1a1a1f]">{r.label}</p>
                  <p className="text-[0.55vw] text-[#80848f] mt-[1%] leading-snug">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom shared row */}
        <div className="flex-shrink-0 mt-[1.5%] grid grid-cols-2 gap-[2%]">
          <div className="bg-[#f5f5f8] rounded-lg px-[3%] py-[2%] border-l-4 border-[#1B3A6B]">
            <p className="text-[0.65vw] font-bold text-[#1B3A6B] mb-[1%]">Both Reward Recurring Revenue</p>
            <p className="text-[0.52vw] text-[#1a1a1f] leading-snug">PE platforms at 13&ndash;14&times; EBITDA driven by RMR portfolios. Project-heavy businesses trade at material discount. 25%+ recurring revenue is the benchmark.</p>
          </div>
          <div className="bg-[#fffbeb] rounded-lg px-[3%] py-[2%] border-l-4 border-[#92400e]">
            <p className="text-[0.65vw] font-bold text-[#92400e] mb-[1%]">Both Constrained by Labor</p>
            <p className="text-[0.52vw] text-[#1a1a1f] leading-snug">Technician shortage and rising competency floor (IP networking, cloud, device management) identical across both. Whoever solves workforce wins.</p>
          </div>
        </div>
        <div className="pt-[0.5%] flex-shrink-0">
          <p className="text-[0.45vw] text-[#80848f] text-right">Sources: Genetec State of Physical Security 2026 &middot; PitchBook &middot; Team PESTEL Workbook</p>
        </div>
      </div>
    </SlideLayout>
  )
}
