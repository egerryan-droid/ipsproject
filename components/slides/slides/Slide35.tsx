import { SlideLayout } from '../SlideLayout'

const vrioRows = [
  { resource: 'NICET IV Fire Engineering', v: 'Yes', r: 'Yes', i: 'Yes', o: 'Partial', implication: 'Unused Competitive Advantage', highlight: false },
  { resource: 'Combined Fire + Security', v: 'Yes', r: 'Partial', i: 'Partial', o: 'Partial', implication: 'Temporary Competitive Advantage', highlight: false },
  { resource: 'Customer Relationship Base', v: 'Yes', r: 'Partial', i: 'Partial', o: 'No', implication: 'Unused Competitive Advantage', highlight: false },
  { resource: 'Financial Position', v: 'Yes', r: 'No', i: 'No', o: 'Partial', implication: 'Competitive Parity', highlight: false },
  { resource: 'Geographic Footprint', v: 'Yes', r: 'No', i: 'No', o: 'Partial', implication: 'Competitive Parity', highlight: false },
  { resource: 'Leadership Team', v: 'Yes', r: 'Partial', i: 'Partial', o: 'No', implication: 'Unused Competitive Advantage', highlight: false },
  { resource: 'Edwards/EST Partnership', v: 'Yes', r: 'Partial', i: 'No', o: 'Partial', implication: 'Temporary Competitive Advantage', highlight: false },
  { resource: 'Project Hub Technology', v: 'Yes', r: 'Partial', i: 'No', o: 'Partial', implication: 'Competitive Parity', highlight: false },
  { resource: 'National Accounts', v: 'Yes', r: 'Partial', i: 'No', o: 'Partial', implication: 'Temporary Competitive Advantage', highlight: false },
  { resource: 'Recurring Revenue (RMR)', v: 'Partial', r: 'No', i: 'No', o: 'No', implication: 'Competitive Disadvantage', highlight: true },
  { resource: 'Workforce Culture', v: 'Yes', r: 'Partial', i: 'Partial', o: 'No', implication: 'Unused Competitive Advantage', highlight: false },
  { resource: 'Regulatory Knowledge', v: 'Yes', r: 'Partial', i: 'Yes', o: 'Partial', implication: 'Unused Competitive Advantage', highlight: false },
]

function cellColor(val: string): string {
  if (val === 'Yes') return '#059669'
  if (val === 'Partial') return '#d97706'
  return '#C8202D'
}

function cellBg(val: string): string {
  if (val === 'Yes') return '#f0fdf4'
  if (val === 'Partial') return '#fffbeb'
  return '#fef2f2'
}

function implColor(impl: string): string {
  if (impl.includes('Disadvantage')) return '#C8202D'
  if (impl.includes('Parity')) return '#80848f'
  if (impl.includes('Temporary')) return '#d97706'
  if (impl.includes('Unused')) return '#1B3A6B'
  return '#059669'
}

const COL_TEMPLATE = '22% 10% 10% 10% 10% 38%'

export function Slide35() {
  return (
    <SlideLayout actNumber={7} actLabel="ACT 7: WHERE IPS CREATES VALUE" title="VRIO Analysis: 12 Resources Assessed" speaker="Katy Peat">
      {/* Table area */}
      <div className="h-full flex flex-col overflow-hidden">
        <div className="flex-1 overflow-hidden flex flex-col border border-gray-200 rounded-lg">
          {/* Column headers */}
          <div
            className="grid flex-shrink-0 bg-gray-50"
            style={{ gridTemplateColumns: COL_TEMPLATE }}
          >
            {['RESOURCE', 'V', 'R', 'I', 'O', 'COMPETITIVE IMPLICATION'].map((h) => (
              <div
                key={h}
                className="border-r border-gray-200 last:border-r-0 flex items-center"
                style={{ padding: '1% 1.5%' }}
              >
                <span className="font-bold text-[#1B3A6B] uppercase tracking-widest" style={{ fontSize: '0.5vw' }}>
                  {h}
                </span>
              </div>
            ))}
          </div>

          {/* Data rows */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {vrioRows.map((row, i) => {
              const isAlt = i % 2 !== 0
              return (
                <div
                  key={row.resource}
                  className="grid flex-1 border-b border-gray-200 last:border-b-0"
                  style={{
                    gridTemplateColumns: COL_TEMPLATE,
                    backgroundColor: row.highlight ? '#fef2f2' : isAlt ? '#f9f9fb' : '#ffffff',
                    borderLeft: row.highlight ? '3px solid #C8202D' : 'none',
                  }}
                >
                  {/* Resource name */}
                  <div className="border-r border-gray-200 flex items-center" style={{ padding: '0 1.5%' }}>
                    <span className="font-bold text-[#1a1a1f]" style={{ fontSize: '0.55vw' }}>
                      {row.resource}
                    </span>
                  </div>
                  {/* V R I O cells */}
                  {[row.v, row.r, row.i, row.o].map((val, ci) => (
                    <div
                      key={ci}
                      className="border-r border-gray-200 flex items-center justify-center"
                      style={{ padding: '0 1%', backgroundColor: cellBg(val) }}
                    >
                      <span className="font-bold" style={{ fontSize: '0.6vw', color: cellColor(val) }}>
                        {val}
                      </span>
                    </div>
                  ))}
                  {/* Implication */}
                  <div className="flex items-center" style={{ padding: '0 1.5%' }}>
                    <span className="font-bold" style={{ fontSize: '0.55vw', color: implColor(row.implication) }}>
                      {row.implication}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom insight bar */}
        <div
          className="flex-shrink-0"
          style={{ backgroundColor: '#eef2ff', padding: '1% 2%', marginTop: '0.8%', marginBottom: '0.3%', borderRadius: '8px' }}
        >
          <p style={{ fontSize: '0.6vw', color: '#1a1a1f', lineHeight: 1.4 }}>
            <span className="font-bold text-[#1B3A6B]">PATTERN: </span>
            11 of 12 resources are Valuable. Only 1 (RMR) is a competitive disadvantage — yet it is the single most important dimension for valuation and long-term strategic positioning. 6 of 12 fail on the Organization dimension.
          </p>
        </div>

        <div className="flex-shrink-0 flex items-center justify-end" style={{ marginBottom: '0.3%' }}>
          <span className="text-[#80848f]" style={{ fontSize: '0.45vw' }}>
            Source: VRIO Analysis — IPS Internal Data (Mar 2026) | IPS Financial Model V3
          </span>
        </div>
      </div>
    </SlideLayout>
  )
}
