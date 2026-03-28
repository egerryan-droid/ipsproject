import { SlideLayout } from '../SlideLayout'

const nextSteps = [
  {
    category: 'Immediate (0-30 days)',
    color: '#1B3A6B',
    items: [
      'Begin RMR pricing conversion on next 5 contracts',
      'Audit current monitoring and managed services gap',
      'Identify Atlanta market entry candidates',
    ],
  },
  {
    category: 'Near-term (30-90 days)',
    color: '#059669',
    items: [
      'Hire Atlanta division leader',
      'Select cyber/IT partnership model',
      'Realign sales comp toward RMR wins',
    ],
  },
  {
    category: 'Strategic (90+ days)',
    color: '#C8202D',
    items: [
      'LOI on Atlanta fire acquisition target',
      'Launch managed security offering',
      'Model EV impact of RMR progress for buyout plan',
    ],
  },
]

export function Slide21() {
  return (
    <SlideLayout actNumber={5} actLabel="ACT 5: CLOSE" title="What's Next" speaker="Ryan Eger">
      <div className="h-full flex gap-[2%]">
        {/* Next steps two-column checklist */}
        <div className="flex-1 flex flex-col gap-[1.5%]">
          <p className="text-[0.75vw] font-bold text-[#80848f] uppercase tracking-widest mb-[0.5%]">Action Checklist</p>
          {nextSteps.map(group => (
            <div key={group.category} className="flex-1">
              <p className="text-[0.7vw] font-bold uppercase tracking-wider mb-[1%]" style={{ color: group.color }}>{group.category}</p>
              {group.items.map(item => (
                <div key={item} className="flex items-start gap-[2%] mb-[1.5%]">
                  <div className="w-[1.2vw] h-[1.2vw] rounded border-2 flex-shrink-0 mt-[0.1vw]" style={{ borderColor: group.color }} />
                  <p className="text-[0.8vw] text-[#1a1a1f] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="w-[45%] flex flex-col gap-[2%]">
          {/* Team */}
          <div className="bg-[#f5f5f8] border border-gray-200 rounded-2xl px-[6%] py-[4%]">
            <p className="text-[0.65vw] font-bold text-[#80848f] uppercase tracking-widest mb-[2%]">Xavier EMBA Capstone Team</p>
            <div className="space-y-[1.5%]">
              {['AJ McKean', 'Katy Peat', 'Kyu Hyuk Choi', 'Zahria Tucker', 'Ryan Eger'].map(name => (
                <div key={name} className="flex items-center gap-[3%]">
                  <div className="w-[1vw] h-[1vw] rounded-full bg-[#1B3A6B] flex-shrink-0" />
                  <p className="text-[0.8vw] font-semibold text-[#1a1a1f]">{name}</p>
                </div>
              ))}
            </div>
            <p className="text-[0.65vw] text-[#80848f] mt-[3%]">May 8, 2026 · Xavier University EMBA</p>
          </div>

          {/* Closing dark box */}
          <div className="flex-1 bg-[#1a1a1f] rounded-2xl px-[6%] py-[5%] relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[0.6%] bg-[#1B3A6B]" />
            <p className="text-[0.7vw] font-bold text-[#a78bfa] uppercase tracking-widest mb-[3%] pl-[1%]">The Contrary View</p>
            <p className="text-white text-[1vw] leading-relaxed pl-[1%]">
              You told us to be contrary. We are. <span className="text-[#e8edf7] font-bold">Not because you&apos;re doing something wrong — you&apos;re winning.</span>
            </p>
            <p className="text-white/70 text-[0.85vw] leading-relaxed mt-[3%] pl-[1%]">
              But the industry is reorganizing. The company that recognizes this first and acts on it will define the next era.
            </p>
            <p className="text-[#a78bfa] text-[1vw] font-bold mt-[4%] pl-[1%]">
              We think that company should be IPS.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
