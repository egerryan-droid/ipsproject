import { SlideLayout } from '../SlideLayout'

const forces = [
  { label: 'CODE EVOLUTION', headline: 'Regulation Extended into IT', color: '#1B3A6B', bullets: ['NFPA 72 (2025) mandates cybersecurity for networked fire systems', 'ERCES mandates expanding at state and municipal level', 'School safety legislation creating funded pipelines in OH, KY, TN'] },
  { label: 'TECHNOLOGY CONVERGENCE', headline: 'Skill Floor Rising Across Both', color: '#0d8090', bullets: ['IP-connected panels, cloud monitoring, AI analytics raising competency bar', 'Hardware commoditizing \u2014 differentiation shifting to software/service', 'Same skills needed: IP networking, cloud, device management'] },
  { label: 'CAPITAL-DRIVEN CONSOLIDATION', headline: 'Record M&A Pace', color: '#C8202D', bullets: ['242 M&A transactions in fire & security in 2025, +24.1% YoY', 'Fire/life safety transactions up 66.7% YoY', 'PE assembling integrated platforms across fire, security, cloud, cyber'] },
  { label: 'MANUFACTURER DISRUPTION', headline: 'Exclusivity Eroding', color: '#d96619', bullets: ['Edwards/EST under Lone Star Funds \u2014 PE ownership changing OEM dynamics', 'Long-standing distributor relationships being renegotiated', 'Exclusivity weakening under new PE ownership structures'] },
  { label: 'CLOUD / XaaS SHIFT', headline: 'Subscription Is the New Default', color: '#166534', bullets: ['CapEx-to-OpEx transition underway in both fire and security', 'Subscription delivery becoming expected model, not exception', '82% of organizations planning cloud access control transitions'] },
]

export function Slide55() {
  return (
    <SlideLayout actNumber={1} actLabel="ACT 1: THE PLAYING FIELD" title="The Forces Acting on Both Industries" speaker="AJ McKean">
      <div className="h-full flex flex-col">
        <p className="text-[0.65vw] text-[#80848f] italic mb-[1.5%] flex-shrink-0">
          Five external forces are hitting fire and security simultaneously &mdash; channeling structurally different industries toward the same destination.
        </p>
        <div className="flex-1 flex items-start min-h-0">
          <div className="w-full grid grid-cols-5 gap-[1%]">
          {forces.map((f) => (
            <div key={f.label} className="flex flex-col rounded-lg border border-gray-200 overflow-hidden bg-white">
              <div className="px-[6%] pt-[5%] pb-[3%]" style={{ borderLeft: `3px solid ${f.color}` }}>
                <p className="text-[0.5vw] font-bold uppercase tracking-widest mb-[3%]" style={{ color: f.color }}>{f.label}</p>
                <p className="text-[0.7vw] font-extrabold text-[#1a1a1f] leading-tight">{f.headline}</p>
              </div>
              <div className="px-[6%] pb-[5%] flex flex-col gap-[5%]">
                {f.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-[5%]">
                    <div className="w-[0.3vw] h-[0.3vw] rounded-full mt-[0.25vw] flex-shrink-0" style={{ backgroundColor: f.color }} />
                    <p className="text-[0.5vw] text-[#1a1a1f] leading-snug">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="pt-[0.5%] flex-shrink-0">
          <p className="text-[0.45vw] text-[#80848f] text-right">Sources: NFPA 72-2025 &middot; Capstone Partners Feb 2026 &middot; PitchBook &middot; Team PESTEL Workbook</p>
        </div>
      </div>
    </SlideLayout>
  )
}
