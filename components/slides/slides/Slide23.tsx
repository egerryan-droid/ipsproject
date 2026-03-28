import { SlideLayout } from '../SlideLayout'

// Slide 23 — The Macro Environment (Full PESTEL)
// 6-tile grid: P·E·S·T·E·L — tailwinds (green) and headwinds (amber)

const macroTiles = [
  {
    category: 'POLITICAL',
    headline: 'Federal & State Security Mandates',
    stat: '$1B+',
    statLabel: 'annual federal security grants (FY2025)',
    bullets: [
      'DHS/FEMA HSGP: $1.008B allocated',
      "Ohio Alyssa's Law — panic buttons in schools",
      'NDAA §889 bans Chinese equipment from funded projects',
    ],
    color: '#166534',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    tag: 'TAILWIND',
    tagBg: '#dcfce7',
    tagText: '#166534',
  },
  {
    category: 'ECONOMIC',
    headline: 'Construction Boom in Key Markets',
    stat: '$3.7B',
    statLabel: 'data center construction — up 25% YoY',
    bullets: [
      'Columbus: 77 data centers by 2030, 2.4 GW planned',
      'Nashville: #2 metro for job growth, HCA HQ',
      'Every new building requires fire alarm + security by code',
    ],
    color: '#166534',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    tag: 'TAILWIND',
    tagBg: '#dcfce7',
    tagText: '#166534',
  },
  {
    category: 'SOCIAL',
    headline: 'Skilled Technician Shortage',
    stat: '50%',
    statLabel: 'of fire protection firms cite hiring difficulty',
    bullets: [
      '29% of fire workforce retiring by 2026',
      'No industry apprenticeship program exists',
      'Caps growth for everyone — who solves it wins',
    ],
    color: '#92400e',
    bg: '#fffbeb',
    border: '#fde68a',
    tag: 'HEADWIND',
    tagBg: '#fef3c7',
    tagText: '#92400e',
  },
  {
    category: 'TECHNOLOGICAL',
    headline: 'Cloud Migration Accelerating',
    stat: '17.9%',
    statLabel: 'ACaaS CAGR · VSaaS at 16.1%',
    bullets: [
      'CapEx-to-OpEx shift: customers prefer subscriptions',
      '82% planning cloud access control transitions',
      'AI video analytics moving from premium to standard',
    ],
    color: '#166534',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    tag: 'TAILWIND',
    tagBg: '#dcfce7',
    tagText: '#166534',
  },
  {
    category: 'ENVIRONMENTAL',
    headline: 'Climate Resilience Driving Demand',
    stat: '38%',
    statLabel: 'increase in FEMA disaster declarations (2020–25)',
    bullets: [
      'Extreme weather events increase fire/safety system demand',
      'Green building codes require integrated monitoring',
      'Energy-efficient security systems gaining spec preference',
    ],
    color: '#166534',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    tag: 'TAILWIND',
    tagBg: '#dcfce7',
    tagText: '#166534',
  },
  {
    category: 'LEGAL',
    headline: 'Code Tightening Creates Demand',
    stat: 'NFPA 72',
    statLabel: '2025 edition mandates cyber for fire systems',
    bullets: [
      'ERCES mandates expanding (in-building radio coverage)',
      'State school security laws create funded pipelines',
      'Fire alarm: non-discretionary, legally required inspection',
    ],
    color: '#166534',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    tag: 'TAILWIND',
    tagBg: '#dcfce7',
    tagText: '#166534',
  },
]

export function Slide23() {
  return (
    <SlideLayout actNumber={1} actLabel="ACT 1: THE WORLD YOU BUILT" title="The Macro Environment" speaker="AJ McKean">
      <div className="h-full flex flex-col">
        {/* Subtitle */}
        <p className="text-[0.7vw] text-[#80848f] italic mb-[1%] flex-shrink-0">
          The demand environment is overwhelmingly positive. The constraint is labor. 13 of 17 macro trends favorable.
        </p>

        {/* 3x2 PESTEL grid */}
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-[1%] min-h-0">
          {macroTiles.map((tile) => (
            <div
              key={tile.category}
              className="flex flex-col rounded-lg border overflow-hidden"
              style={{ backgroundColor: tile.bg, borderColor: tile.border }}
            >
              {/* Tile header */}
              <div className="px-[6%] pt-[4%] pb-[2%]">
                <div className="flex items-center justify-between mb-[2%]">
                  <p className="text-[0.58vw] font-bold uppercase tracking-widest" style={{ color: tile.color }}>{tile.category}</p>
                  <span
                    className="text-[0.45vw] font-bold px-[5%] py-[1.5%] rounded-full uppercase tracking-wider"
                    style={{ backgroundColor: tile.tagBg, color: tile.tagText }}
                  >
                    {tile.tag}
                  </span>
                </div>
                <p className="text-[0.72vw] font-extrabold text-[#1a1a1f] leading-tight">{tile.headline}</p>
                <div className="mt-[3%]">
                  <span className="text-[1.3vw] font-extrabold leading-none" style={{ color: tile.color }}>{tile.stat}</span>
                  <p className="text-[0.52vw] text-[#80848f] leading-tight mt-[1%]">{tile.statLabel}</p>
                </div>
              </div>

              {/* Bullets */}
              <div className="flex-1 px-[6%] pb-[4%] flex flex-col gap-[3%]">
                {tile.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-[4%]">
                    <div className="w-[3%] h-[3%] rounded-full mt-[1.5%] flex-shrink-0" style={{ backgroundColor: tile.color, minWidth: '0.35vw', minHeight: '0.35vw' }} />
                    <p className="text-[0.55vw] text-[#1a1a1f] leading-snug">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-[1%] flex-shrink-0">
          <p className="text-[0.55vw] text-[#80848f] text-center">
            Sources: FEMA.gov · Plunkett Research (via Xavier/Gale) · SDM Magazine · NFPA 72 (2025) · BLS · ConstructConnect · Team PESTEL Workbook (March 2026)
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
