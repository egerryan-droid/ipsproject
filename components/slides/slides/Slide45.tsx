import { SlideLayout } from '../SlideLayout'

const streams = [
  { stream: 'Fire Install (EC)', rev: '$24.9M', score: 1, trend: 'ERODING', trendColor: '#C8202D', threat: '3/8 ECs PE-owned; ArchKey building fire', scoreBg: '#991b1b' },
  { stream: 'Fire Install (direct)', rev: '$4.3M', score: 4, trend: 'Stable', trendColor: '#059669', threat: 'PE competing but NICET moat holds', scoreBg: '#166534' },
  { stream: 'Fire Service/Inspect', rev: '$3.0M', score: 5, trend: 'DEFENSIBLE', trendColor: '#065f46', threat: 'Code-mandated, NICET required, sticky', scoreBg: '#064e3b' },
  { stream: 'Security Access', rev: '$19.8M', score: 3, trend: 'Pressured', trendColor: '#d97706', threat: 'Verkada direct; IT teams DIY', scoreBg: '#92400e' },
  { stream: 'Security CCTV', rev: '$4.8M', score: 2, trend: 'Eroding', trendColor: '#C8202D', threat: 'Stalling growth; commodity', scoreBg: '#9a3412' },
  { stream: 'Service Agreements', rev: '$3.7M', score: 4, trend: 'Growing', trendColor: '#059669', threat: 'Sticky; 73% CAGR', scoreBg: '#166534' },
  { stream: 'Monitoring', rev: '$0.2M', score: 1, trend: 'Stalling', trendColor: '#C8202D', threat: 'Third-party resale; no moat', scoreBg: '#991b1b' },
  { stream: 'National Accounts', rev: '$15.9M', score: 2, trend: 'Concentrated', trendColor: '#C8202D', threat: 'Amazon 23.5%; PE competes nationally', scoreBg: '#9a3412' },
]

const colHeaders = ['REVENUE STREAM', '2025 REV', 'DEFENSIBILITY', 'TREND', 'KEY THREAT']

export function Slide45() {
  return (
    <SlideLayout actNumber={9} actLabel="ACT 9: WHAT BREAKS" title="Convergence Vulnerability Scorecard" speaker="Kyu Hyuk Choi">
      {/* Table */}
      <div className="h-full flex flex-col overflow-hidden">
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '20%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '38%' }} />
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
            {streams.map((row, i) => (
              <tr key={row.stream} style={{ background: i % 2 === 0 ? '#fff' : '#f5f5f8' }}>
                <td style={{ padding: '1.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.7vw', color: '#1a1a1f', lineHeight: 1.3 }}>{row.stream}</p>
                </td>
                <td style={{ padding: '1.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold" style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>{row.rev}</p>
                </td>
                <td style={{ padding: '1.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <div className="flex items-center gap-[6%]">
                    <div className="rounded-full flex items-center justify-center" style={{ width: '1.8vw', height: '1.8vw', background: row.scoreBg }}>
                      <span className="text-white font-extrabold" style={{ fontSize: '0.7vw' }}>{row.score}</span>
                    </div>
                    <span className="font-semibold" style={{ fontSize: '0.6vw', color: '#80848f' }}>/5</span>
                  </div>
                </td>
                <td style={{ padding: '1.5% 2%', borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                  <p className="font-bold uppercase" style={{ fontSize: '0.65vw', color: row.trendColor }}>{row.trend}</p>
                </td>
                <td style={{ padding: '1.5% 2%', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.6vw', color: '#4b5563', lineHeight: 1.4 }}>{row.threat}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tier summary badges */}
        <div className="flex gap-[2%] flex-shrink-0" style={{ marginTop: '1.5%', marginBottom: '1.5%' }}>
          <div className="flex-1 rounded-lg flex items-center justify-center gap-[4%]" style={{ background: '#f0fdf4', border: '2px solid #059669', padding: '1.2% 2%' }}>
            <span className="font-bold uppercase tracking-wider" style={{ fontSize: '0.55vw', color: '#059669' }}>Defensible (4.0+)</span>
            <span className="font-extrabold" style={{ fontSize: '0.9vw', color: '#059669' }}>$13.5M</span>
            <span className="font-semibold" style={{ fontSize: '0.6vw', color: '#059669' }}>(20%)</span>
          </div>
          <div className="flex-1 rounded-lg flex items-center justify-center gap-[4%]" style={{ background: '#fffbeb', border: '2px solid #d97706', padding: '1.2% 2%' }}>
            <span className="font-bold uppercase tracking-wider" style={{ fontSize: '0.55vw', color: '#d97706' }}>Moderate (3.0–3.9)</span>
            <span className="font-extrabold" style={{ fontSize: '0.9vw', color: '#d97706' }}>$23.4M</span>
            <span className="font-semibold" style={{ fontSize: '0.6vw', color: '#d97706' }}>(35%)</span>
          </div>
          <div className="flex-1 rounded-lg flex items-center justify-center gap-[4%]" style={{ background: '#fef2f2', border: '2px solid #C8202D', padding: '1.2% 2%' }}>
            <span className="font-bold uppercase tracking-wider" style={{ fontSize: '0.55vw', color: '#C8202D' }}>Vulnerable (&lt;3.0)</span>
            <span className="font-extrabold" style={{ fontSize: '0.9vw', color: '#C8202D' }}>$29.9M</span>
            <span className="font-semibold" style={{ fontSize: '0.6vw', color: '#C8202D' }}>(45%)</span>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="flex-shrink-0 mt-auto" style={{ background: '#fff0f0', padding: '1.8% 3%', borderTop: '2px solid #fca5a5' }}>
          <div className="flex items-start gap-[1%]">
            <span className="font-bold flex-shrink-0" style={{ fontSize: '0.75vw', color: '#C8202D' }}>KEY FINDING:</span>
            <span style={{ fontSize: '0.7vw', color: '#1a1a1f' }}>
              $24.9M of fire revenue (37% of total) scores 1/5 defensibility. Only $3.0M (4.4%) scores 5/5. Fire the capability is defensible. Fire the revenue stream as currently structured through ECs is the most vulnerable revenue in the entire business.
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
