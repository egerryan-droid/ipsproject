import { SlideLayout } from '../SlideLayout'

const comparison = [
  {
    dimension: 'Primary Recommendation',
    year2021: 'Geographic expansion (markets 4-5)',
    year2026: 'Geographic expansion + RMR acceleration + capability build',
    change: 'Expanded',
  },
  {
    dimension: 'Industry Framing',
    year2021: 'Fire & security integration market',
    year2026: 'Building intelligence convergence (fire + security + IT + cyber)',
    change: 'Reframed',
  },
  {
    dimension: 'Competitive Threat',
    year2021: 'Regional competitors, national chains',
    year2026: 'PE platforms with $3.7B combined revenue; 242 deals in 2025',
    change: 'Escalated',
  },
  {
    dimension: 'Revenue Model',
    year2021: 'Project-based growth',
    year2026: 'RMR-first, subscription/managed services',
    change: 'Transformed',
  },
  {
    dimension: 'Fire Alarm Role',
    year2021: 'Core service line',
    year2026: 'Strategic moat + Trojan horse for full-service platform',
    change: 'Strategic',
  },
  {
    dimension: 'Timeline Urgency',
    year2021: 'Growth opportunity',
    year2026: 'Partner buyout + convergence window = must act now',
    change: 'Urgent',
  },
]

const changeColors: Record<string, string> = {
  'Expanded': '#1B3A6B',
  'Reframed': '#2563eb',
  'Escalated': '#C8202D',
  'Transformed': '#059669',
  'Strategic': '#1B3A6B',
  'Urgent': '#C8202D',
}

export function Slide18() {
  return (
    <SlideLayout actNumber={4} actLabel="ACT 4: THE PATH FORWARD" title="The 2021 Study Got You Here. This Gets You There." speaker="Ryan Eger">
      <div className="h-full flex flex-col gap-[1.5%]">
        {/* Comparison table */}
        <div className="flex-1 border border-gray-200 rounded-xl overflow-hidden">
          {/* Column headers */}
          <div className="grid border-b border-gray-200" style={{ gridTemplateColumns: '22% 1fr 1fr 10%' }}>
            <div className="bg-gray-50 px-[3%] py-[2%] text-[0.65vw] font-bold text-[#80848f] uppercase tracking-wider">Dimension</div>
            <div className="bg-gray-50 border-l border-gray-200 px-[3%] py-[2%]">
              <p className="text-[0.65vw] font-bold text-[#80848f] uppercase tracking-wider">2021 Xavier Study</p>
              <p className="text-[0.7vw] text-[#80848f]">What got IPS here</p>
            </div>
            <div className="bg-blue-50/60 border-l border-[#1B3A6B]/30 px-[3%] py-[2%]">
              <p className="text-[0.65vw] font-bold text-[#1B3A6B] uppercase tracking-wider">2026 Assessment</p>
              <p className="text-[0.7vw] text-[#1B3A6B]">What gets IPS there</p>
            </div>
            <div className="bg-gray-50 border-l border-gray-200 px-[3%] py-[2%] text-[0.65vw] font-bold text-[#80848f] uppercase tracking-wider text-center">Shift</div>
          </div>
          {/* Rows */}
          {comparison.map((row, i) => (
            <div key={row.dimension} className={`grid border-b border-gray-200 last:border-b-0 ${i % 2 === 0 ? '' : 'bg-[#fafafa]'}`} style={{ gridTemplateColumns: '22% 1fr 1fr 10%' }}>
              <div className="px-[3%] py-[2.5%] border-r border-gray-200">
                <p className="text-[0.78vw] font-bold text-[#1a1a1f]">{row.dimension}</p>
              </div>
              <div className="px-[3%] py-[2.5%] border-r border-gray-200">
                <p className="text-[0.75vw] text-[#80848f] leading-relaxed">{row.year2021}</p>
              </div>
              <div className="px-[3%] py-[2.5%] border-r border-[#1B3A6B]/20 bg-blue-50/30">
                <p className="text-[0.75vw] text-[#1a1a1f] font-medium leading-relaxed">{row.year2026}</p>
              </div>
              <div className="px-[2%] py-[2.5%] flex items-center justify-center">
                <span
                  className="text-[0.55vw] font-bold px-[4%] py-[1%] rounded-full text-white text-center"
                  style={{ backgroundColor: changeColors[row.change] }}
                >
                  {row.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[2%] flex items-center gap-[2%]">
          <div className="w-[0.4%] self-stretch bg-[#C8202D] rounded-full flex-shrink-0" />
          <p className="text-white text-[0.9vw] leading-relaxed">
            <span className="text-[#fdba74] font-bold">Geographic expansion is still necessary — but in 2026 it is necessary, not sufficient.</span> The 2021 team asked the right question for 2021. The industry has changed.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
