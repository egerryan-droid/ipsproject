import { SlideLayout } from '../SlideLayout'

const paths = [
  {
    num: '01',
    title: 'RMR Acceleration',
    color: '#1B3A6B',
    bg: '#f0f4fa',
    border: '#a5b4fc',
    points: [
      'Start immediately — no new headcount',
      'Bundle inspections into SLA contracts',
      'Add monitoring to every install',
      'Target: sub-20% → 50%+ RMR',
      'EV impact: 3x → 6x+ EBITDA multiple',
    ],
    timeline: 'Start now',
  },
  {
    num: '02',
    title: 'Atlanta Expansion',
    color: '#059669',
    bg: '#f0fdf4',
    border: '#86efac',
    points: [
      'Leader-first model, Q3 2026',
      'Fire anchor acquisition, Q4 2026',
      'Security greenfield, Q1 2027',
      'Target: $10-15M Year 2 revenue',
      'Nashville playbook: proven',
    ],
    timeline: 'Q3 2026',
  },
  {
    num: '03',
    title: 'Capability Expansion',
    color: '#C8202D',
    bg: '#fff7ed',
    border: '#fdba74',
    points: [
      'OT/IT cybersecurity partnership',
      'Cloud managed services (Brivo/Eagle Eye)',
      'Building automation integration',
      'Become the independent platform',
      'Target: full-service by 2028',
    ],
    timeline: '12-18 months',
  },
]

export function Slide20() {
  return (
    <SlideLayout actNumber={5} actLabel="ACT 5: CLOSE" title="Summary: Three Paths, One Destination" speaker="Ryan Eger">
      <div className="h-full flex flex-col gap-[2%]">
        {/* Three path cards */}
        <div className="flex-1 grid grid-cols-3 gap-[2%]">
          {paths.map(p => (
            <div
              key={p.num}
              className="rounded-2xl border-2 flex flex-col overflow-hidden"
              style={{ borderColor: p.border, backgroundColor: p.bg }}
            >
              {/* Card header */}
              <div className="px-[6%] pt-[5%] pb-[3%]" style={{ borderBottom: `2px solid ${p.border}` }}>
                <span className="text-[0.6vw] font-extrabold px-[3%] py-[1%] rounded text-white mb-[2%] inline-block" style={{ backgroundColor: p.color }}>PATH {p.num}</span>
                <h3 className="text-[1vw] font-bold text-[#1a1a1f] mt-[1%]">{p.title}</h3>
                <p className="text-[0.65vw] font-semibold mt-[1%]" style={{ color: p.color }}>Start: {p.timeline}</p>
              </div>
              {/* Points */}
              <div className="px-[6%] py-[4%] flex-1 flex flex-col gap-[2%]">
                {p.points.map(pt => (
                  <div key={pt} className="flex items-start gap-[3%]">
                    <span className="text-[0.9vw] flex-shrink-0" style={{ color: p.color }}>&#9656;</span>
                    <p className="text-[0.75vw] text-[#1a1a1f] leading-tight">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Destination box */}
        <div className="bg-[#1a1a1f] rounded-2xl px-[4%] py-[2.5%] flex items-center gap-[3%]">
          <div className="flex-shrink-0">
            <p className="text-[0.6vw] font-bold text-[#a5b4fc] uppercase tracking-widest">THE DESTINATION</p>
            <p className="text-[1.3vw] font-extrabold text-white leading-tight">One Independent, Converged</p>
            <p className="text-[1.3vw] font-extrabold text-white leading-tight">Building Intelligence Platform</p>
          </div>
          <div className="w-[1px] self-stretch bg-white/20" />
          <div className="flex-1 grid grid-cols-3 gap-[3%]">
            <div className="text-center">
              <p className="text-[1.6vw] font-extrabold text-[#a5b4fc]">$100M+</p>
              <p className="text-[0.65vw] text-white/50">Revenue target</p>
            </div>
            <div className="text-center">
              <p className="text-[1.6vw] font-extrabold text-[#6ee7b7]">6+ markets</p>
              <p className="text-[0.65vw] text-white/50">Geographic reach</p>
            </div>
            <div className="text-center">
              <p className="text-[1.6vw] font-extrabold text-[#fbbf24]">Independent</p>
              <p className="text-[0.65vw] text-white/50">No PE surrender</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
