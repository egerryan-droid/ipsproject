import { SlideLayout } from '../SlideLayout'

const metrics = [
  { value: '$255B', label: 'EC industry revenue', color: '#1B3A6B' },
  { value: '219K', label: 'businesses nationwide', color: '#1B3A6B' },
  { value: '79', label: 'EC deals in 2024', color: '#1B3A6B' },
  { value: '73%', label: 'PE-driven acquisitions', color: '#C8202D' },
  { value: '562', label: 'construction M&A deals', color: '#1B3A6B' },
  { value: '48.1%', label: 'sponsor-backed deals', color: '#C8202D' },
  { value: '10+', label: 'active PE platforms', color: '#C8202D' },
]

export function Slide25() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="The Third Consolidation Wave: Electrical Contractors" speaker="Ryan Eger">
      <div className="h-full flex flex-col">
        {/* Subtitle */}
        <div className="pb-[1%] flex-shrink-0">
          <p className="text-[0.85vw] text-[#1a1a1f] leading-relaxed">
            First it was fire &amp; security. Then cloud/managed services. Now PE is consolidating the electrical contractor channel &mdash; the same companies that subcontract IPS today.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-[1.5%] min-h-0">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-gray-200 bg-[#fafafa] flex flex-col items-center justify-center px-[3%] py-[2%]"
            >
              <p
                className="font-extrabold leading-none mb-[6%]"
                style={{ fontSize: '2.8vw', color: m.color }}
              >
                {m.value}
              </p>
              <p className="text-[0.7vw] text-[#80848f] text-center leading-snug font-medium">
                {m.label}
              </p>
            </div>
          ))}
          {/* Extra context card in the 8th slot */}
          <div className="rounded-xl border border-gray-200 bg-[#f0f7ff] flex flex-col items-center justify-center px-[3%] py-[2%]">
            <p className="font-extrabold leading-none mb-[6%]" style={{ fontSize: '2.8vw', color: '#1B3A6B' }}>
              3rd
            </p>
            <p className="text-[0.7vw] text-[#80848f] text-center leading-snug font-medium">
              consolidation wave after fire/security &amp; cloud
            </p>
          </div>
        </div>

        {/* Bottom dark callout bar */}
        <div className="flex-shrink-0 bg-[#1a1a1f] rounded-xl px-[4%] py-[2.5%] mt-[1.5%]">
          <p className="text-[0.85vw] text-white leading-relaxed">
            <span className="font-bold" style={{ color: '#93c5fd' }}>FMI RESEARCH: </span>
            &ldquo;The electrical contractor space is still in early stages of consolidation &mdash; making it the next frontier for PE platform strategies.&rdquo;
            The same playbook that reshaped fire &amp; security is now pointed at IPS&apos;s subcontractor base.
          </p>
        </div>

        {/* Source */}
        <div className="flex-shrink-0 pt-[0.75%]">
          <p className="text-[0.5vw] text-[#80848f] text-right">
            Sources: FMI Capital Advisors &middot; Capstone Partners Construction M&amp;A Report &middot; PitchBook &middot; IBISWorld
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
