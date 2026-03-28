import { SlideLayout } from '../SlideLayout'

const evidenceRows = [
  { metric: 'Revenue', direction: 'up', dirLabel: 'Up 26%', signal: 'Looks great', color: '#059669' },
  { metric: 'Gross Margin', direction: 'up', dirLabel: 'Up 4 pts', signal: 'Looks great', color: '#059669' },
  { metric: 'EBITDA Margin', direction: 'down', dirLabel: 'Down 0.7 pts', signal: '11.4% to 10.7% — negative operating leverage', color: '#C8202D' },
  { metric: 'Cash Position', direction: 'down', dirLabel: 'Negative', signal: '-$71K ending cash after $11M revenue growth', color: '#C8202D' },
  { metric: 'DSO', direction: 'down', dirLabel: 'Spiked +22 days', signal: '100 to 122 days — $18M trapped in receivables', color: '#C8202D' },
  { metric: 'Bad Debt', direction: 'down', dirLabel: 'Up 94x', signal: '$9K to $849K — material default or collections failure', color: '#C8202D' },
  { metric: 'SGA % of Revenue', direction: 'down', dirLabel: 'Up 4.3 pts', signal: '20.8% to 25.1% — 42 cents of every new dollar', color: '#C8202D' },
  { metric: 'Top 3 Concentration', direction: 'down', dirLabel: 'Up 10 pts', signal: '36.5% to 46.4% — nearly half of revenue', color: '#C8202D' },
  { metric: 'Backlog', direction: 'down', dirLabel: 'Flat', signal: '$11.3M unchanged — pipeline not growing with revenue', color: '#C8202D' },
  { metric: 'Customer Retention', direction: 'down', dirLabel: '81.5%', signal: '1 in 5 customers lost annually (~185/year)', color: '#C8202D' },
  { metric: 'RMR % of Revenue', direction: 'down', dirLabel: '5.8%', signal: 'Barely moved — industry benchmark is 25%+', color: '#C8202D' },
]

export function Slide33() {
  return (
    <SlideLayout actNumber={6} actLabel="ACT 6: WHAT THE NUMBERS SAY" title="The Glass House" speaker="Ryan Eger">
      <div className="h-full flex flex-col overflow-hidden">
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '18%' }} />
            <col style={{ width: '8%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '60%' }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50">
              {['METRIC', '', 'DIRECTION', 'SIGNAL'].map((h) => (
                <th
                  key={h}
                  className="text-[#1B3A6B] uppercase text-left"
                  style={{
                    fontSize: '0.55vw',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '1.2% 2%',
                    borderRight: '1px solid #e5e7eb',
                    borderBottom: '2px solid #e5e7eb',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {evidenceRows.map((row, i) => (
              <tr
                key={row.metric}
                style={{
                  background: row.color === '#059669' ? '#f0fdf4' : i % 2 === 0 ? '#fff' : '#f9fafb',
                }}
              >
                <td style={{ padding: '1% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.7vw', color: '#1a1a1f' }}>{row.metric}</p>
                </td>
                <td style={{ padding: '1% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>
                  <span style={{ fontSize: '1.2vw', color: row.color }}>
                    {row.direction === 'up' ? '\u25B2' : '\u25BC'}
                  </span>
                </td>
                <td style={{ padding: '1% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.65vw', color: row.color, fontWeight: 700 }}>{row.dirLabel}</p>
                </td>
                <td style={{ padding: '1% 2%', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.65vw', color: '#1a1a1f', lineHeight: 1.4 }}>{row.signal}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex-1" />

        {/* Bottom callout */}
        <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[2%] flex items-center gap-[3%]">
          <div className="w-[0.5%] self-stretch bg-[#C8202D] rounded-full flex-shrink-0" />
          <p className="text-white text-[0.85vw] leading-relaxed">
            <span className="font-bold text-[#fca5a5]">The Glass House:</span> The revenue growth is real. It is masking deterioration in almost every operational health metric. Two green arrows. Nine red.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
