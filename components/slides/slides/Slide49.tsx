import { SlideLayout } from '../SlideLayout'

const recommendations = [
  {
    number: '01',
    title: 'Stop Leaving the Building',
    body: 'Convert every installation into an ongoing relationship. Monitoring, inspection contracts, managed services. The fire technician is already through the door. Make the monthly invoice part of every project close, not a separate sale that never happens.',
    accent: '#1B3A6B',
  },
  {
    number: '02',
    title: 'Build or Buy Delivery Capability',
    body: 'NOC, helpdesk, subscription billing, managed services delivery. Either acquire a small managed security firm or partner with one. Without delivery infrastructure, the monthly invoice is a promise you cannot keep.',
    accent: '#059669',
  },
  {
    number: '03',
    title: 'Redesign Sales Compensation',
    body: 'Reward recurring revenue, not just project closes. A salesperson who earns commission on a $200K project and nothing on a $500/month monitoring contract will sell the project every time. Until incentives change, behavior will not change.',
    accent: '#d97706',
  },
]

export function Slide49() {
  return (
    <SlideLayout actNumber={10} actLabel="ACT 10: WHAT REPLACES IT" title="Three Recommendations" speaker="All">
      {/* Banner */}
      <div className="flex-shrink-0 text-center rounded-lg" style={{ background: '#1a1a1f', padding: '1.2% 3%', marginBottom: '2%' }}>
        <p className="font-bold uppercase tracking-widest" style={{ fontSize: '0.75vw', color: '#fbbf24' }}>
          Not growth tactics. Business model transformation.
        </p>
      </div>

      {/* Three cards */}
      <div className="flex-1 flex gap-[2%] min-h-0">
        {recommendations.map((r) => (
          <div key={r.number} className="flex-1 rounded-xl flex flex-col overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
            {/* Card top accent */}
            <div className="flex items-center gap-[3%]" style={{ background: r.accent, padding: '4% 5%' }}>
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: '2.2vw', height: '2.2vw', background: 'rgba(255,255,255,0.2)' }}>
                <span className="text-white font-extrabold" style={{ fontSize: '0.9vw' }}>{r.number}</span>
              </div>
              <p className="text-white font-bold leading-tight" style={{ fontSize: '1vw' }}>{r.title}</p>
            </div>
            {/* Card body */}
            <div className="flex-1 flex flex-col justify-center" style={{ padding: '6% 5%', background: '#fafafa' }}>
              <p style={{ fontSize: '0.7vw', color: '#374151', lineHeight: 1.7 }}>{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
