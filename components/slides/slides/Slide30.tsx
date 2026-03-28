import { SlideLayout } from '../SlideLayout'

const findings = [
  {
    number: '01',
    title: 'Your industry is becoming one market',
    body: 'Fire, security, electrical, IT, and cyber are merging into building intelligence. PE firms are assembling all capabilities under one roof. The $256B addressable market is reorganizing around whoever can integrate the full stack.',
    stat: '$256B',
    statLabel: 'addressable market',
    accent: '#1B3A6B',
  },
  {
    number: '02',
    title: 'Someone else is building what you could be',
    body: 'PE firms have deployed over $12B assembling fire + security + EC + cloud into converged platforms. Nine PE firms now hold positions across three consolidation fronts. Every IPS market is encircled.',
    stat: '$12B+',
    statLabel: 'PE capital deployed',
    accent: '#C8202D',
  },
  {
    number: '03',
    title: 'Fire is defensible but the door is being bought',
    body: 'Fire protection has zero substitution threat and a 10-year NICET IV moat. But 73% of EC deals are PE-driven — the same ECs that subcontract IPS are being acquired and building fire capability in-house. The door to the customer is changing hands.',
    stat: '73%',
    statLabel: 'PE-driven EC deals',
    accent: '#d97706',
  },
  {
    number: '04',
    title: 'RMR is the answer — and ECs are coming for it too',
    body: 'Every $1 of inspection generates $3-4 in annual service revenue. APi Group proved the model at $7.9B. ECs are vertically integrating to capture monitoring, inspection, and managed services — the same recurring revenue IPS needs to fund its partner buyout.',
    stat: '$1 = $3-4',
    statLabel: 'inspection to service revenue',
    accent: '#059669',
  },
  {
    number: '05',
    title: 'The window is shorter than we thought',
    body: 'EC consolidation adds a third front to the convergence squeeze. ArchKey is hiring NICET staff now. Apollo\'s State Group operates in IPS\'s exact geography. The 3-5 year window from our original analysis may be closer to 18-24 months for key accounts.',
    stat: '90 days',
    statLabel: 'to assemble capability',
    accent: '#C8202D',
  },
]

export function Slide30() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="Five Things the External Environment Is Now Telling You" speaker="Ryan Eger">
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
            The external environment now shows three convergence fronts, not two. EC consolidation compresses the window and threatens the subcontractor channel.
            The internal analysis answers it &mdash; what does IPS have to work with, and how fast can it move?
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
