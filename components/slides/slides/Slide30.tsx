import { SlideLayout } from '../SlideLayout'

const findings = [
  {
    number: '01',
    title: 'Your industry is becoming one market',
    body: 'The $256B addressable market is reorganizing around full-stack integration. NFPA 72 (2025) makes convergence official. Cloud grows 4\u00d7 faster than base market.',
    stat: '71%',
    statLabel: 'already converged',
    accent: '#1B3A6B',
  },
  {
    number: '02',
    title: 'Someone else is building what you could be',
    body: '$12B+ deployed across nine PE firms and three consolidation fronts. Every IPS market is now encircled. This is an industry reorganization.',
    stat: '$12B+',
    statLabel: 'across three fronts',
    accent: '#C8202D',
  },
  {
    number: '03',
    title: 'Fire is defensible \u2014 but the door is being bought',
    body: 'The NICET IV moat is real. But the ECs that subcontract IPS are being acquired and building fire capability in-house. ArchKey is hiring NICET staff now.',
    stat: '3 of 8',
    statLabel: 'top EC customers PE-owned',
    accent: '#d97706',
  },
  {
    number: '04',
    title: 'RMR is the answer \u2014 and ECs are coming for it too',
    body: '7\u201310% RMR vs. 25%+ benchmark. The EC channel is now competing for the same recurring revenue pool. Every $1 inspection generates $3\u20134 annual service.',
    stat: '7\u201310%',
    statLabel: 'vs. 25%+ benchmark',
    accent: '#166534',
  },
  {
    number: '05',
    title: 'The window is shorter than we thought',
    body: 'ArchKey hiring NICET staff now. Apollo in IPS geography. PE M&A assembles fire capability in 90 days. 3\u20135 years may be 18\u201324 months for key accounts.',
    stat: '18\u201324mo',
    statLabel: 'for key accounts',
    accent: '#1B3A6B',
  },
]

export function Slide30() {
  return (
    <SlideLayout actNumber={3} actLabel="SYNTHESIS" title="The Question the External Environment Is Asking" speaker="Ryan Eger">
      <div className="h-full flex flex-col gap-[1.2%]">
        {/* Top row: 3 cards */}
        <div className="flex-1 flex gap-[1.2%] min-h-0">
          {findings.slice(0, 3).map((f) => (
            <div
              key={f.number}
              className="flex-1 rounded-xl border border-gray-200 flex overflow-hidden"
              style={{ backgroundColor: '#fafafa' }}
            >
              {/* Left accent + number */}
              <div
                className="flex flex-col items-center justify-start pt-[6%] flex-shrink-0"
                style={{ width: '14%', backgroundColor: f.accent + '0D' }}
              >
                <div
                  className="w-[2vw] h-[2vw] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: f.accent }}
                >
                  <span className="text-white font-extrabold text-[0.75vw]">{f.number}</span>
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center py-[3%] pr-[4%] pl-[2%]">
                <p className="text-[0.8vw] font-extrabold text-[#1a1a1f] leading-tight mb-[2%]">
                  {f.title}
                </p>
                <p className="text-[0.55vw] text-[#80848f] leading-relaxed mb-[3%]">
                  {f.body}
                </p>
                <div className="flex items-baseline gap-[3%]">
                  <span className="text-[1.3vw] font-extrabold leading-none" style={{ color: f.accent }}>
                    {f.stat}
                  </span>
                  <span className="text-[0.5vw] text-[#80848f]">{f.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 cards */}
        <div className="flex-1 flex gap-[1.2%] min-h-0">
          {findings.slice(3, 5).map((f) => (
            <div
              key={f.number}
              className="flex-1 rounded-xl border border-gray-200 flex overflow-hidden"
              style={{ backgroundColor: '#fafafa' }}
            >
              {/* Left accent + number */}
              <div
                className="flex flex-col items-center justify-start pt-[6%] flex-shrink-0"
                style={{ width: '10%', backgroundColor: f.accent + '0D' }}
              >
                <div
                  className="w-[2vw] h-[2vw] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: f.accent }}
                >
                  <span className="text-white font-extrabold text-[0.75vw]">{f.number}</span>
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center py-[3%] pr-[4%] pl-[2%]">
                <p className="text-[0.8vw] font-extrabold text-[#1a1a1f] leading-tight mb-[2%]">
                  {f.title}
                </p>
                <p className="text-[0.55vw] text-[#80848f] leading-relaxed mb-[3%]">
                  {f.body}
                </p>
                <div className="flex items-baseline gap-[3%]">
                  <span className="text-[1.3vw] font-extrabold leading-none" style={{ color: f.accent }}>
                    {f.stat}
                  </span>
                  <span className="text-[0.5vw] text-[#80848f]">{f.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge forward — dark bar */}
        <div className="flex-shrink-0 bg-[#1a1a1f] rounded-xl px-[4%] py-[2%]">
          <p className="text-[0.8vw] text-white leading-relaxed">
            <span className="font-bold" style={{ color: '#93c5fd' }}>THE QUESTION: </span>
            Three convergence fronts. EC consolidation compressing the window. A partner buyout that makes growth existential.
            The internal analysis answers what IPS has to work with, and how fast it can move.
          </p>
        </div>

        {/* Source */}
        <div className="flex-shrink-0">
          <p className="text-[0.5vw] text-[#80848f] text-right">
            Sources: PitchBook &middot; Capstone Partners &middot; FMI Capital Advisors &middot; APi Group 10-K &middot; IPS Leadership Meetings &middot; Team Analysis
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
