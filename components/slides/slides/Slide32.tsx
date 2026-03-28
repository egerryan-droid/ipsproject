import { SlideLayout } from '../SlideLayout'

const financialRows = [
  { year: '2021A', revenue: '$24.2M', growth: '--', gm: '28.1%', ebitda: '8.2%', netIncome: '$1.3M', highlight: false },
  { year: '2022A', revenue: '$33.8M', growth: '+39.7%', gm: '29.4%', ebitda: '9.8%', netIncome: '$2.1M', highlight: false },
  { year: '2023A', revenue: '$34.3M', growth: '+1.5%', gm: '30.2%', ebitda: '10.1%', netIncome: '$2.2M', highlight: false },
  { year: '2024A', revenue: '$42.6M', growth: '+24.2%', gm: '31.9%', ebitda: '11.4%', netIncome: '$3.1M', highlight: false },
  { year: '2025A', revenue: '$53.7M', growth: '+26.1%', gm: '35.6%', ebitda: '10.7%', netIncome: '$3.0M', highlight: true },
  { year: '2026E', revenue: '$60.8M', growth: '+13.2%', gm: '37.0%', ebitda: '12.5%', netIncome: '$4.1M', highlight: false },
  { year: '2027E', revenue: '$69.5M', growth: '+14.3%', gm: '38.5%', ebitda: '13.8%', netIncome: '$5.2M', highlight: false },
  { year: '2028E', revenue: '$79.2M', growth: '+14.0%', gm: '39.8%', ebitda: '14.9%', netIncome: '$6.4M', highlight: false },
  { year: '2029E', revenue: '$89.8M', growth: '+13.4%', gm: '41.0%', ebitda: '15.8%', netIncome: '$7.7M', highlight: false },
  { year: '2030E', revenue: '$100.6M', growth: '+12.0%', gm: '42.5%', ebitda: '16.5%', netIncome: '$9.1M', highlight: false },
]

const colHeaders = ['YEAR', 'REVENUE', 'GROWTH', 'GM %', 'EBITDA %', 'NET INCOME']

export function Slide32() {
  return (
    <SlideLayout actNumber={6} actLabel="ACT 6: WHAT THE NUMBERS SAY" title="Revenue Trajectory and Financial Position" speaker="Ryan Eger">
      <div className="h-full flex flex-col overflow-hidden">
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '12%' }} />
            <col style={{ width: '18%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '18%' }} />
            <col style={{ width: '22%' }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50">
              {colHeaders.map((h) => (
                <th
                  key={h}
                  className="text-[#1B3A6B] uppercase text-left"
                  style={{
                    fontSize: '0.6vw',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '1.5% 2%',
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
            {financialRows.map((row, i) => (
              <tr
                key={row.year}
                style={{
                  background: row.highlight ? '#fef2f2' : i % 2 === 0 ? '#fff' : '#f9fafb',
                  borderLeft: row.highlight ? '3px solid #C8202D' : 'none',
                }}
              >
                <td style={{ padding: '1.2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.75vw', color: row.highlight ? '#C8202D' : '#1a1a1f' }}>{row.year}</p>
                </td>
                <td style={{ padding: '1.2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>{row.revenue}</p>
                </td>
                <td style={{ padding: '1.2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.7vw', color: row.growth === '--' ? '#9ca3af' : '#059669', fontWeight: 600 }}>{row.growth}</p>
                </td>
                <td style={{ padding: '1.2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.7vw', color: '#059669', fontWeight: 600 }}>{row.gm}</p>
                </td>
                <td style={{ padding: '1.2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{
                    fontSize: '0.7vw',
                    fontWeight: 600,
                    color: row.highlight ? '#C8202D' : '#059669',
                  }}>
                    {row.ebitda}
                    {row.highlight && <span style={{ fontSize: '0.55vw', marginLeft: '4%' }}>&#9660;</span>}
                  </p>
                </td>
                <td style={{ padding: '1.2% 2%', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{
                    fontSize: '0.7vw',
                    fontWeight: 600,
                    color: row.highlight ? '#C8202D' : '#1a1a1f',
                  }}>{row.netIncome}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex-1" />

        {/* Bottom insight bar */}
        <div
          className="flex-shrink-0 flex flex-col rounded-lg"
          style={{ background: '#fff0f0', padding: '1.8% 3%', borderTop: '2px solid #fca5a5' }}
        >
          <div className="flex items-start gap-[1%]">
            <span className="font-bold flex-shrink-0" style={{ fontSize: '0.75vw', color: '#C8202D' }}>2025 DIVERGENCE:</span>
            <span style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>
              Gross margin improved 3.7 points to 35.6% — but EBITDA margin declined from 11.4% to 10.7%. Revenue grew 26%. SGA grew 52%. The company got better at making money on projects and worse at controlling what it costs to run the business.
            </span>
          </div>
          <p style={{ fontSize: '0.55vw', color: '#80848f', marginTop: '0.5%' }}>
            Source: IPS Financial Model V3 | 2021-2025 Actuals, 2026-2030 Management Projections
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
