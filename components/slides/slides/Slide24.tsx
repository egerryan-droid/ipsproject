import { SlideLayout } from '../SlideLayout'

// Slide 24 — Four Things the External Environment Is Telling You
// Synthesis of external analysis findings

const findings = [
  {
    number: '01',
    title: 'Your industry is becoming one market',
    body: 'Fire, security, IT, and cyber are merging into building intelligence. NFPA 72 (2025) makes this official: cybersecurity is now enforceable for fire systems. Cloud platforms grow 4\u00d7 faster than base market. The $256B addressable market is reorganizing around whoever can integrate all of it.',
    stat: '71%',
    statLabel: 'already converged',
    accent: '#1B3A6B',
  },
  {
    number: '02',
    title: 'Someone else is building what you could be',
    body: 'PE firms have deployed $9.6B assembling fire + security + cyber + cloud into integrated platforms. One firm controls $3.7B. Sovereign wealth funds validated the model at a $6.1B valuation. Every IPS market is now encircled.',
    stat: '242',
    statLabel: 'deals in 2025',
    accent: '#C8202D',
  },
  {
    number: '03',
    title: 'Fire is your most defensible asset',
    body: 'Zero substitution threat. 10-year NICET IV moat. Code-mandated demand that doesn\u2019t disappear in a downturn. Cloud and IT can\u2019t touch it. Fire is the last piece to converge \u2014 that buys time. But Edwards exclusivity is eroding under new PE ownership.',
    stat: '7.5%',
    statLabel: 'fire CAGR 25\u201335',
    accent: '#D97706',
  },
  {
    number: '04',
    title: 'RMR is the answer to almost every question',
    body: 'IPS\u2019s true recurring revenue of 7\u201310% is the single largest gap. Service margins are 2.5\u00d7 project margins. RMR drives enterprise value \u2014 the metric that determines whether the partner buyout is feasible. The platforms are in place (Brivo, Genetec). The gap is go-to-market execution.',
    stat: '3\u20135 yr',
    statLabel: 'window to act',
    accent: '#166534',
  },
]

export function Slide24() {
  return (
    <SlideLayout actNumber={3} actLabel="SYNTHESIS" title="Four Things the External Environment Is Telling You" speaker="Ryan Eger">
      <div className="h-full flex flex-col">
        {/* Four findings */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1.5%] min-h-0">
          {findings.map((f) => (
            <div
              key={f.number}
              className="rounded-xl border border-gray-200 flex overflow-hidden"
              style={{ backgroundColor: '#fafafa' }}
            >
              {/* Left accent + number */}
              <div
                className="flex flex-col items-center justify-start pt-[6%] flex-shrink-0"
                style={{ width: '12%', backgroundColor: f.accent + '0D' }}
              >
                <div
                  className="w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: f.accent }}
                >
                  <span className="text-white font-extrabold text-[0.9vw]">{f.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center py-[3%] pr-[4%] pl-[2%]">
                <p className="text-[0.95vw] font-extrabold text-[#1a1a1f] leading-tight mb-[2%]">
                  {f.title}
                </p>
                <p className="text-[0.65vw] text-[#4b5563] leading-relaxed mb-[3%]">
                  {f.body}
                </p>
                {/* Stat callout */}
                <div className="flex items-baseline gap-[3%]">
                  <span className="text-[1.6vw] font-extrabold leading-none" style={{ color: f.accent }}>
                    {f.stat}
                  </span>
                  <span className="text-[0.55vw] text-[#80848f]">{f.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge forward — dark bar */}
        <div className="flex-shrink-0 bg-[#1a1a1f] rounded-xl px-[4%] py-[2.5%] mt-[1.5%]">
          <p className="text-[0.85vw] text-white leading-relaxed">
            <span className="text-[#c7c9ef] font-bold">THE QUESTION: </span>
            The external environment frames the challenge: converging industry, PE reorganization, a 3&ndash;5 year window, and a partner buyout that makes growth existential. The internal analysis answers it &mdash; what does IPS have to work with?
          </p>
        </div>

        {/* Source */}
        <div className="flex-shrink-0 pt-[0.75%]">
          <p className="text-[0.5vw] text-[#80848f] text-right">
            Sources: Plunkett Research &middot; PitchBook &middot; NFPA 72 (2025) &middot; Capstone Partners &middot; SDM Magazine &middot; Team PESTEL Workbook
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
