import { SlideLayout } from '../SlideLayout'

const rows = [
  { dimension: 'Recurring Revenue / RMR %', ips: 2, silco: 2, convergint: 4, pyeBarker: 4, everon: 5 },
  { dimension: 'NICET IV Certification', ips: 5, silco: 3, convergint: 4, pyeBarker: 3, everon: 4 },
  { dimension: 'Fire + Security Combined', ips: 5, silco: 4, convergint: 5, pyeBarker: 4, everon: 4 },
  { dimension: 'Local Relationships / Density', ips: 4, silco: 4, convergint: 3, pyeBarker: 3, everon: 3 },
  { dimension: 'Scale & Capital Access', ips: 2, silco: 2, convergint: 5, pyeBarker: 5, everon: 4 },
  { dimension: 'Technology Partnership Breadth', ips: 5, silco: 3, convergint: 4, pyeBarker: 3, everon: 4 },
  { dimension: 'Workforce Dev Pipeline', ips: 2, silco: 2, convergint: 4, pyeBarker: 3, everon: 3 },
  { dimension: 'Operational Process Maturity', ips: 2, silco: 3, convergint: 4, pyeBarker: 3, everon: 4 },
]

const totals = { ips: 27, silco: 23, convergint: 33, pyeBarker: 28, everon: 31 }

const COL_TEMPLATE = '14% 20% 13% 15% 14% 12%'

function scoreColor(score: number): string {
  if (score >= 4) return '#166534'
  if (score === 3) return '#1a1a1f'
  return '#C8202D'
}

export function Slide13() {
  return (
    <SlideLayout actNumber={3} actLabel="ACT 3: WHERE IPS STANDS" title="What IPS Has — and What It's Missing" speaker="Zahria Tucker">
      <div className="h-full flex flex-col">
        {/* Table area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden flex flex-col border border-gray-200 rounded-lg">
            {/* Column header row */}
            <div
              className="grid flex-shrink-0 bg-gray-50 border-b border-gray-200"
              style={{ gridTemplateColumns: COL_TEMPLATE }}
            >
              <div className="border-r border-gray-200" style={{ padding: '1% 1.5%' }}>
                <span className="font-bold text-[#80848f] uppercase tracking-widest" style={{ fontSize: '0.55vw' }}>
                  KEY SUCCESS FACTOR
                </span>
              </div>
              {/* IPS — highlighted header */}
              <div className="bg-[#e8edf7] border-r border-gray-200 flex items-center justify-center" style={{ padding: '1% 1%' }}>
                <span className="font-bold text-[#1B3A6B] uppercase tracking-widest" style={{ fontSize: '0.6vw' }}>
                  IPS ★
                </span>
              </div>
              {['SILCO', 'CONVERGINT', 'PYE-BARKER', 'EVERON'].map((col) => (
                <div
                  key={col}
                  className="border-r border-gray-200 last:border-r-0 flex items-center justify-center"
                  style={{ padding: '1% 1%' }}
                >
                  <span className="font-bold text-[#80848f] uppercase tracking-widest text-center" style={{ fontSize: '0.55vw' }}>
                    {col}
                  </span>
                </div>
              ))}
            </div>

            {/* Data rows */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {rows.map((row, i) => {
                const isAlt = i % 2 !== 0
                return (
                  <div
                    key={row.dimension}
                    className="grid flex-1 border-b border-gray-200 last:border-b-0"
                    style={{
                      gridTemplateColumns: COL_TEMPLATE,
                      backgroundColor: isAlt ? '#f9fafb' : '#ffffff',
                    }}
                  >
                    {/* Dimension label */}
                    <div className="border-r border-gray-200 flex items-center" style={{ padding: '0 1.5%' }}>
                      <span className="font-bold text-[#1a1a1f] uppercase tracking-wide" style={{ fontSize: '0.55vw' }}>
                        {row.dimension}
                      </span>
                    </div>

                    {/* IPS value — highlighted column */}
                    <div className="bg-[#e8edf7] border-r border-gray-200 flex items-center justify-center" style={{ padding: '0 1%' }}>
                      <span
                        className="font-bold"
                        style={{
                          fontSize: '0.7vw',
                          color: scoreColor(row.ips),
                        }}
                      >
                        {row.ips}
                      </span>
                    </div>

                    {/* Silco */}
                    <div className="border-r border-gray-200 flex items-center justify-center" style={{ padding: '0 1%' }}>
                      <span className="font-semibold" style={{ fontSize: '0.65vw', color: scoreColor(row.silco) }}>
                        {row.silco}
                      </span>
                    </div>

                    {/* Convergint */}
                    <div className="border-r border-gray-200 flex items-center justify-center" style={{ padding: '0 1%' }}>
                      <span className="font-semibold" style={{ fontSize: '0.65vw', color: scoreColor(row.convergint) }}>
                        {row.convergint}
                      </span>
                    </div>

                    {/* Pye-Barker */}
                    <div className="border-r border-gray-200 flex items-center justify-center" style={{ padding: '0 1%' }}>
                      <span className="font-semibold" style={{ fontSize: '0.65vw', color: scoreColor(row.pyeBarker) }}>
                        {row.pyeBarker}
                      </span>
                    </div>

                    {/* Everon */}
                    <div className="flex items-center justify-center" style={{ padding: '0 1%' }}>
                      <span className="font-semibold" style={{ fontSize: '0.65vw', color: scoreColor(row.everon) }}>
                        {row.everon}
                      </span>
                    </div>
                  </div>
                )
              })}

              {/* Totals row */}
              <div
                className="grid flex-shrink-0 border-t-2 border-[#1B3A6B]"
                style={{
                  gridTemplateColumns: COL_TEMPLATE,
                  backgroundColor: '#f9fafb',
                  minHeight: '3.5%',
                }}
              >
                <div className="border-r border-gray-200 flex items-center" style={{ padding: '0.5% 1.5%' }}>
                  <span className="font-extrabold text-[#1a1a1f] uppercase tracking-wide" style={{ fontSize: '0.6vw' }}>
                    TOTAL
                  </span>
                </div>
                <div className="bg-[#e8edf7] border-r border-gray-200 flex items-center justify-center" style={{ padding: '0.5% 1%' }}>
                  <span className="font-extrabold text-[#1B3A6B]" style={{ fontSize: '0.75vw' }}>
                    {totals.ips}
                  </span>
                </div>
                <div className="border-r border-gray-200 flex items-center justify-center" style={{ padding: '0.5% 1%' }}>
                  <span className="font-extrabold text-[#1a1a1f]" style={{ fontSize: '0.7vw' }}>{totals.silco}</span>
                </div>
                <div className="border-r border-gray-200 flex items-center justify-center" style={{ padding: '0.5% 1%' }}>
                  <span className="font-extrabold text-[#1a1a1f]" style={{ fontSize: '0.7vw' }}>{totals.convergint}</span>
                </div>
                <div className="border-r border-gray-200 flex items-center justify-center" style={{ padding: '0.5% 1%' }}>
                  <span className="font-extrabold text-[#1a1a1f]" style={{ fontSize: '0.7vw' }}>{totals.pyeBarker}</span>
                </div>
                <div className="flex items-center justify-center" style={{ padding: '0.5% 1%' }}>
                  <span className="font-extrabold text-[#1a1a1f]" style={{ fontSize: '0.7vw' }}>{totals.everon}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom insight bar */}
          <div
            className="flex-shrink-0 rounded-lg"
            style={{ backgroundColor: '#f5f5f8', padding: '1.2% 2%', marginTop: '1%', marginBottom: '0.3%' }}
          >
            <p style={{ fontSize: '0.6vw', color: '#1a1a1f', lineHeight: 1.4 }}>
              <span className="font-bold text-[#1B3A6B]">THE BARBELL: </span>
              IPS is world-class at the technical craft — NICET IV, fire+security under one roof, 25+ vendor partnerships. But the business systems that scale from $55M to $150M — recurring revenue, workforce pipeline, documented processes — are the gaps.
            </p>
          </div>

          {/* Asterisk note + Source line */}
          <div className="flex-shrink-0 flex items-center justify-between" style={{ marginBottom: '0.5%' }}>
            <span className="text-[#80848f] italic" style={{ fontSize: '0.45vw' }}>
              *Inferred from scale/ownership; not confirmed via primary data.
            </span>
            <span className="text-[#80848f]" style={{ fontSize: '0.45vw' }}>
              Source: IPS Leadership (Mar 2026) | IPS VTO | PitchBook | SDM Top 100 (2024)
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
