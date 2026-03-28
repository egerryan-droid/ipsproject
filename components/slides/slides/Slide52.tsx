import { SlideLayout } from '../SlideLayout'

const counterArguments = [
  { num: 1, argument: 'Organic growth is rare and real', verdict: 'PARTIAL' as const, implication: 'Growth rate genuine. Growth quality poor.' },
  { num: 2, argument: 'NICET IV moat is deeper', verdict: 'VALID' as const, implication: 'Protects relevance, not revenue.' },
  { num: 3, argument: 'Retention is normal for projects', verdict: 'PARTIAL' as const, implication: 'Metric noisy. Underlying gap real.' },
  { num: 4, argument: 'Cash is a distribution choice', verdict: 'PARTIAL' as const, implication: 'Single year = timing. Five-year = structural.' },
  { num: 5, argument: 'PE competitors are messy', verdict: 'PARTIAL' as const, implication: 'Valid for direct (57%). Invalid for EC (43%).' },
  { num: 6, argument: 'Base case model works', verdict: 'PARTIAL' as const, implication: 'Works if static environment. It won\u2019t be.' },
  { num: 7, argument: 'Amazon is an opportunity', verdict: 'INVALID' as const, implication: 'Warehouse commodity. No moat. MSA-vulnerable.' },
]

const verdictColors: Record<string, string> = {
  VALID: '#16a34a',
  PARTIAL: '#d97706',
  INVALID: '#C8202D',
}

const verdictBg: Record<string, string> = {
  VALID: '#f0fdf4',
  PARTIAL: '#fffbeb',
  INVALID: '#fef2f2',
}

export function Slide52() {
  return (
    <SlideLayout actNumber={11} actLabel="ACT 11: STRESS TEST" title="Seven Counter-Arguments: The Verdict" speaker="All">
      <div className="flex-1 flex flex-col min-h-0">
        {/* Table */}
        <div className="flex-1 overflow-hidden rounded-lg" style={{ border: '1px solid #e5e7eb' }}>
          {/* Header row */}
          <div className="flex bg-gray-50" style={{ borderBottom: '1px solid #e5e7eb' }}>
            <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '4%', padding: '0.6% 0', borderRight: '1px solid #e5e7eb' }}>
              <span className="font-semibold text-[#6b7280]" style={{ fontSize: '0.6vw' }}>#</span>
            </div>
            <div className="flex items-center" style={{ width: '32%', padding: '0.6% 1.5%', borderRight: '1px solid #e5e7eb' }}>
              <span className="font-semibold text-[#6b7280]" style={{ fontSize: '0.6vw' }}>Counter-Argument</span>
            </div>
            <div className="flex items-center justify-center" style={{ width: '12%', padding: '0.6% 1%', borderRight: '1px solid #e5e7eb' }}>
              <span className="font-semibold text-[#6b7280]" style={{ fontSize: '0.6vw' }}>Verdict</span>
            </div>
            <div className="flex items-center" style={{ width: '52%', padding: '0.6% 1.5%' }}>
              <span className="font-semibold text-[#6b7280]" style={{ fontSize: '0.6vw' }}>Implication</span>
            </div>
          </div>

          {/* Data rows */}
          {counterArguments.map((row, i) => (
            <div
              key={row.num}
              className="flex"
              style={{
                borderBottom: i < counterArguments.length - 1 ? '1px solid #e5e7eb' : 'none',
                background: i % 2 === 1 ? '#fafafa' : '#ffffff',
              }}
            >
              <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '4%', padding: '1% 0', borderRight: '1px solid #e5e7eb' }}>
                <span className="font-bold text-[#1B3A6B]" style={{ fontSize: '0.7vw' }}>{row.num}</span>
              </div>
              <div className="flex items-center" style={{ width: '32%', padding: '1% 1.5%', borderRight: '1px solid #e5e7eb' }}>
                <span className="text-[#1B3A6B] font-medium" style={{ fontSize: '0.7vw' }}>&ldquo;{row.argument}&rdquo;</span>
              </div>
              <div className="flex items-center justify-center" style={{ width: '12%', padding: '1% 1%', borderRight: '1px solid #e5e7eb' }}>
                <span
                  className="font-bold uppercase rounded-full text-center"
                  style={{
                    fontSize: '0.6vw',
                    color: verdictColors[row.verdict],
                    background: verdictBg[row.verdict],
                    padding: '0.2vw 0.6vw',
                  }}
                >
                  {row.verdict}
                </span>
              </div>
              <div className="flex items-center" style={{ width: '52%', padding: '1% 1.5%' }}>
                <span className="text-[#374151]" style={{ fontSize: '0.7vw' }}>{row.implication}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
