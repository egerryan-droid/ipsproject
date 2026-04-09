import { SlideLayout } from '../SlideLayout'

const regions = [
  { name: 'Ohio', stat: '#3', statLabel: 'U.S. data center market', color: '#1B3A6B', bullets: ['77 facilities, 2.4 GW planned capacity by 2030', 'Meta Prometheus: world\u2019s first 1 GW+ data center, New Albany (2026)', 'Stargate AI, AMGEN, Anduril, OSU — sustained capital investment'] },
  { name: 'Tennessee', stat: '#2', statLabel: 'U.S. metro for job growth', color: '#166534', bullets: ['Nashville: HCA Healthcare HQ anchors healthcare construction', 'Sustained commercial construction in healthcare, hospitality, mixed-use', 'CBRE: Nashville in highest-growth Sun Belt construction category'] },
  { name: 'Southeast & Sun Belt', stat: '5.3%', statLabel: 'FL construction CAGR (fastest nationally)', color: '#0d8090', bullets: ['Virginia: #1 U.S. data center market — Northern Virginia corridor', 'Healthcare busiest in NC, FL, TX (Skanska) — Atlanta customer pull', 'U.S. data center market: $48B (2024) → $112B by 2030, 15.15% CAGR'] },
  { name: 'Federal Funding', stat: '$1.3B+', statLabel: 'annual funded demand in OH, KY, TN', color: '#C8202D', bullets: ['$1.008B DHS/FEMA Homeland Security Grant Program (FY2025)', '$73M School Violence Prevention Program — grant-funded = less price-sensitive', '$200M/yr Bipartisan Safer Communities Act — OH, KY, TN eligible'] },
]

export function Slide56() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE CONVERGENCE SQUEEZE" title="Where Growth Is Concentrated" speaker="Ryan Eger">
      <div className="h-full flex flex-col">
        <p className="text-[0.65vw] text-[#80848f] italic mb-[1.5%] flex-shrink-0">
          Demand tailwinds are strongest in IPS&apos;s existing and target geographies &mdash; but so is competitive density.
        </p>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[1.5%] min-h-0">
          {regions.map((r) => (
            <div key={r.name} className="rounded-xl border border-gray-200 bg-white overflow-hidden flex flex-col">
              <div className="px-[4%] pt-[4%] pb-[2%]" style={{ borderTop: `3px solid ${r.color}` }}>
                <div className="flex items-baseline gap-[3%] mb-[2%]">
                  <span className="text-[1.8vw] font-extrabold leading-none" style={{ color: r.color }}>{r.stat}</span>
                  <span className="text-[0.55vw] text-[#80848f]">{r.statLabel}</span>
                </div>
                <p className="text-[0.85vw] font-extrabold text-[#1a1a1f]">{r.name}</p>
              </div>
              <div className="flex-1 px-[4%] pb-[3%] flex flex-col gap-[4%]">
                {r.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-[3%]">
                    <div className="w-[0.3vw] h-[0.3vw] rounded-full mt-[0.25vw] flex-shrink-0" style={{ backgroundColor: r.color }} />
                    <p className="text-[0.55vw] text-[#1a1a1f] leading-snug">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-[0.5%] flex-shrink-0">
          <p className="text-[0.45vw] text-[#80848f] text-right">Sources: Arizton (U.S. Data Center) &middot; CBRE Real Estate Outlook 2025 &middot; Mordor Intelligence &middot; ConstructConnect &middot; Congress.gov &middot; FEMA.gov</p>
        </div>
      </div>
    </SlideLayout>
  )
}
