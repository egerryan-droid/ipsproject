import { SlideLayout } from '../SlideLayout'

const rows = [
  { id: 1, claim: 'Geography engine, not growth engine', evidence: 'Revenue history is geography steps. VTO = 8 branches.', verdict: 'CONFIRMED' },
  { id: 2, claim: 'Install and walk away', evidence: 'Pete: "installs, trains, and walks away." No MSAs.', verdict: 'CONFIRMED' },
  { id: 3, claim: 'Churn is invisible', evidence: 'Customer retention never mentioned in 1:45 meeting.', verdict: 'CONFIRMED' },
  { id: 4, claim: 'No customer acquisition engine', evidence: 'VTO: "shift from farming to hunting" \u2014 a 2028 aspiration.', verdict: 'CONFIRMED' },
  { id: 5, claim: 'RMR not operationally prioritized', evidence: 'Andy: "existential." VTO: zero RMR action items.', verdict: 'CONFIRMED' },
  { id: 6, claim: 'No PE defense', evidence: '"Strong competitive confidence." Zero defensive actions.', verdict: 'CONFIRMED' },
  { id: 7, claim: 'Buyout strategy contradicts financials', evidence: '"Outgrow." But growth consumed cash in 2025.', verdict: 'CONFIRMED' },
  { id: 8, claim: 'Andy asked for this', evidence: '"Contrarian. Challenge our thinking. Blind spots."', verdict: 'CONFIRMED' },
]

export function Slide43() {
  return (
    <SlideLayout actNumber={8} actLabel="ACT 8: THE GEOGRAPHY ENGINE" title="Confirmed by Leadership" speaker="Zahria Tucker">
      {/* Table */}
      <div className="h-full flex flex-col overflow-hidden">
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '4%' }} />
            <col style={{ width: '26%' }} />
            <col style={{ width: '50%' }} />
            <col style={{ width: '20%' }} />
          </colgroup>
          <thead>
            <tr className="bg-gray-50">
              {['#', 'THESIS CLAIM', 'MEETING EVIDENCE', 'VERDICT'].map((h) => (
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
              <tr key={row.id} style={{ background: i % 2 === 0 ? '#fff' : '#f5f5f8' }}>
                <td style={{ padding: '1.2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.7vw', color: '#80848f' }}>{row.id}</p>
                </td>
                <td style={{ padding: '1.2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-semibold" style={{ fontSize: '0.7vw', color: '#1a1a1f', lineHeight: 1.3 }}>{row.claim}</p>
                </td>
                <td style={{ padding: '1.2% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.65vw', color: '#4b5563', lineHeight: 1.4 }}>{row.evidence}</p>
                </td>
                <td style={{ padding: '1.2% 2%', borderBottom: '1px solid #e5e7eb' }}>
                  <div className="flex items-center gap-[4%]">
                    <span style={{ fontSize: '0.8vw', color: '#059669' }}>&#10003;</span>
                    <p className="font-bold" style={{ fontSize: '0.65vw', color: '#059669' }}>{row.verdict}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Quote box */}
        <div className="flex-shrink-0 mt-auto pt-[1%]">
          <div className="rounded-xl" style={{ background: '#fffbeb', border: '2px solid #fbbf24', padding: '2% 3%' }}>
            <p className="font-bold" style={{ fontSize: '0.85vw', color: '#92400e', lineHeight: 1.5 }}>
              Andy Boyd: &ldquo;Be contrarian. Challenge our thinking. We have blind spots.&rdquo;
            </p>
            <p style={{ fontSize: '0.65vw', color: '#b45309', marginTop: '1%' }}>
              This is the contrarian perspective he requested. Every claim tested against leadership&apos;s own words. Every claim confirmed.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
