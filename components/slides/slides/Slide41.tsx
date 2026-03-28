import { SlideLayout } from '../SlideLayout'

const branches = [
  { city: 'Cincinnati', year: '2000', revenue: '$19M base', status: 'Mature' },
  { city: 'Columbus', year: '2012', revenue: '$4.4M YTD', status: 'Producing' },
  { city: 'Lexington', year: '2023', revenue: '$297K YTD', status: 'Ramping' },
  { city: 'Nashville', year: '2024', revenue: 'Early', status: 'Ramping' },
  { city: 'Amazon National', year: '2020', revenue: '$15.9M', status: 'Concentrated' },
  { city: 'Atlanta?', year: '2027?', revenue: 'TBD', status: 'Planned' },
]

export function Slide41() {
  return (
    <SlideLayout actNumber={8} actLabel="ACT 8: THE GEOGRAPHY ENGINE" title="The Treadmill" speaker="Zahria Tucker">
      {/* Timeline */}
      <div className="h-full flex flex-col min-h-0">
        {/* Timeline visual */}
        <div className="flex items-start gap-[0.5%] flex-1 min-h-0">
          {branches.map((b, i) => (
            <div key={b.city} className="flex-1 flex flex-col items-center relative">
              {/* Card */}
              <div
                className="w-full rounded-xl border flex flex-col items-center justify-center relative"
                style={{
                  padding: '6% 4%',
                  background: i === branches.length - 1 ? '#fef3c7' : '#fff',
                  borderColor: i === branches.length - 1 ? '#d97706' : '#e5e7eb',
                  borderStyle: i === branches.length - 1 ? 'dashed' : 'solid',
                  borderWidth: i === branches.length - 1 ? '2px' : '1px',
                }}
              >
                <p className="font-extrabold text-center" style={{ fontSize: '0.95vw', color: '#1a1a1f' }}>{b.city}</p>
                <p className="font-semibold text-center" style={{ fontSize: '0.7vw', color: '#d97706', marginTop: '3%' }}>{b.year}</p>
                <div className="rounded-lg w-full text-center" style={{ background: '#f5f5f8', padding: '4% 2%', marginTop: '5%' }}>
                  <p className="font-bold" style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>{b.revenue}</p>
                </div>
                <p className="uppercase tracking-wider font-semibold text-center" style={{
                  fontSize: '0.55vw',
                  marginTop: '4%',
                  color: b.status === 'Mature' ? '#80848f' : b.status === 'Producing' ? '#059669' : b.status === 'Concentrated' ? '#C8202D' : b.status === 'Planned' ? '#d97706' : '#1B3A6B',
                }}>
                  {b.status}
                </p>
              </div>

              {/* Churn leak indicator */}
              <div className="flex flex-col items-center" style={{ marginTop: '3%' }}>
                <div style={{ width: '1px', height: '1.5vw', background: '#fca5a5', borderLeft: '2px dashed #C8202D' }} />
                <p className="font-bold" style={{ fontSize: '0.55vw', color: '#C8202D' }}>18.5% churn</p>
              </div>

              {/* Arrow to next */}
              {i < branches.length - 1 && (
                <div
                  className="absolute flex items-center justify-center"
                  style={{ right: '-8%', top: '30%', zIndex: 10 }}
                >
                  <span className="font-bold" style={{ fontSize: '1.4vw', color: '#d97706' }}>&rarr;</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="flex-shrink-0 rounded-xl" style={{ background: '#fffbeb', border: '2px solid #fbbf24', padding: '2% 3%', marginTop: '2%' }}>
          <p style={{ fontSize: '0.8vw', color: '#92400e', lineHeight: 1.5 }}>
            <span className="font-bold">&ldquo;</span>Each new branch is a fresh field to farm. For 18&ndash;24 months everything is new. Then it matures. The 18.5% annual churn leaks customers from every market — but the next branch masks the loss.<span className="font-bold">&rdquo;</span>
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
