import { SlideLayout } from '../SlideLayout'

const rows = [
  { year: '2026', baseRev: '$60.8M', adjRev: '$60.8M', baseEbitda: '$8.4M', fixedEbitda: '$8.4M', valley: false },
  { year: '2027', baseRev: '$75.0M', adjRev: '$72.0M', baseEbitda: '$12.4M', fixedEbitda: '$12.3M', valley: false },
  { year: '2028', baseRev: '$82.4M', adjRev: '$64.4M', baseEbitda: '$15.5M', fixedEbitda: '$8.2M', valley: true },
  { year: '2029', baseRev: '$92.2M', adjRev: '$61.2M', baseEbitda: '$19.1M', fixedEbitda: '$7.5M', valley: true },
  { year: '2030', baseRev: '$100.6M', adjRev: '$69.6M', baseEbitda: '$22.5M', fixedEbitda: '$12.8M', valley: false },
]

const colHeaders = ['YEAR', 'BASE REV', 'ADJ REV', 'BASE EBITDA', 'FIXED COST EBITDA', 'STATUS']

export function Slide46() {
  return (
    <SlideLayout actNumber={9} actLabel="ACT 9: WHAT BREAKS" title="Scenario G: Full Vertical Displacement" speaker="Kyu Hyuk Choi">
      {/* Content */}
      <div className="h-full flex flex-col min-h-0">
        {/* Table */}
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed', marginBottom: '2%' }}>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '16%' }} />
            <col style={{ width: '16%' }} />
            <col style={{ width: '18%' }} />
            <col style={{ width: '22%' }} />
            <col style={{ width: '18%' }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50">
              {colHeaders.map((h) => (
                <th
                  key={h}
                  className="text-[#1B3A6B] uppercase text-left"
                  style={{ fontSize: '0.6vw', fontWeight: 700, letterSpacing: '0.08em', padding: '1.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.year} style={{ background: row.valley ? '#fef2f2' : i % 2 === 0 ? '#fff' : '#f5f5f8' }}>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.8vw', color: row.valley ? '#C8202D' : '#1a1a1f' }}>{row.year}</p>
                </td>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.75vw', color: '#80848f' }}>{row.baseRev}</p>
                </td>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.75vw', color: row.valley ? '#C8202D' : '#1a1a1f' }}>{row.adjRev}</p>
                </td>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.75vw', color: '#80848f' }}>{row.baseEbitda}</p>
                </td>
                <td style={{ padding: '1.8% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.75vw', color: row.valley ? '#C8202D' : '#059669' }}>{row.fixedEbitda}</p>
                </td>
                <td style={{ padding: '1.8% 2%', borderBottom: '1px solid #e5e7eb' }}>
                  {row.valley ? (
                    <div className="rounded-full text-center" style={{ background: '#C8202D', padding: '2% 4%' }}>
                      <p className="text-white font-bold uppercase" style={{ fontSize: '0.55vw', letterSpacing: '0.08em' }}>VALLEY OF DEATH</p>
                    </div>
                  ) : (
                    <p className="font-semibold" style={{ fontSize: '0.6vw', color: '#80848f' }}>{row.year === '2030' ? 'Recovering' : 'Pre-impact'}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Reality gap callout */}
        <div className="rounded-xl flex items-center gap-[3%]" style={{ background: '#fef2f2', border: '2px solid #C8202D', padding: '2% 3%', marginBottom: '2%' }}>
          <div className="flex-shrink-0">
            <p className="font-bold uppercase tracking-wider" style={{ fontSize: '0.6vw', color: '#C8202D' }}>Reality Gap</p>
            <p className="font-extrabold" style={{ fontSize: '1.8vw', color: '#C8202D', lineHeight: 1 }}>$6.2M</p>
          </div>
          <div style={{ width: '1px', height: '100%', minHeight: '3vw', background: '#fca5a5' }} />
          <div>
            <p style={{ fontSize: '0.7vw', color: '#991b1b', lineHeight: 1.5 }}>
              <span className="font-bold">Percentage model: $14.4M EBITDA.</span> Fixed cost reality: $8.2M. The gap exists because 140 employees, 5 leases, and 20 vehicles do not flex with revenue.
            </p>
          </div>
        </div>

        {/* Bottom explanation */}
        <div className="rounded-xl" style={{ background: '#1a1a1f', padding: '2% 3%' }}>
          <p style={{ fontSize: '0.75vw', color: '#e5e7eb', lineHeight: 1.5 }}>
            <span className="font-bold" style={{ color: '#fca5a5' }}>SGA is 82% fixed</span> ($11.0M of $13.5M). NICET technicians cannot be fired and rehired on demand. The percentage-based model assumes costs scale with revenue. They do not. The destination is better &mdash; but the path through 2028&ndash;2029 is the problem.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
