import { SlideLayout } from '../SlideLayout'

const sources = [
  { label: 'EC Project Flow', type: 'Reactive' },
  { label: 'Existing Customer Referrals', type: 'Reactive' },
  { label: 'National Account Expansion', type: 'Reactive' },
]

export function Slide42() {
  return (
    <SlideLayout actNumber={8} actLabel="ACT 8: THE GEOGRAPHY ENGINE" title="Customer Acquisition Reality" speaker="Zahria Tucker">
      {/* Content */}
      <div className="h-full flex flex-col min-h-0">
        {/* Three stat boxes */}
        <div className="flex gap-[2%]" style={{ marginBottom: '2.5%' }}>
          <div className="flex-1 rounded-xl flex flex-col items-center justify-center" style={{ background: '#eff6ff', border: '2px solid #1B3A6B', padding: '3% 2%' }}>
            <p className="font-extrabold" style={{ fontSize: '3vw', color: '#2563eb', lineHeight: 1 }}>207</p>
            <p className="font-semibold uppercase tracking-wider" style={{ fontSize: '0.7vw', color: '#2563eb', marginTop: '2%' }}>New Customers</p>
          </div>
          <div className="flex-1 rounded-xl flex flex-col items-center justify-center" style={{ background: '#fef2f2', border: '2px solid #ef4444', padding: '3% 2%' }}>
            <p className="font-extrabold" style={{ fontSize: '3vw', color: '#C8202D', lineHeight: 1 }}>185</p>
            <p className="font-semibold uppercase tracking-wider" style={{ fontSize: '0.7vw', color: '#C8202D', marginTop: '2%' }}>Lost Customers</p>
          </div>
          <div className="flex-1 rounded-xl flex flex-col items-center justify-center" style={{ background: '#f5f5f8', border: '2px solid #9ca3af', padding: '3% 2%' }}>
            <p className="font-extrabold" style={{ fontSize: '3vw', color: '#6b7280', lineHeight: 1 }}>22</p>
            <p className="font-semibold uppercase tracking-wider" style={{ fontSize: '0.7vw', color: '#6b7280', marginTop: '2%' }}>Net Gain</p>
          </div>
        </div>

        {/* Three source boxes */}
        <div className="flex gap-[2%]" style={{ marginBottom: '2.5%' }}>
          {sources.map((s) => (
            <div key={s.label} className="flex-1 rounded-xl flex flex-col items-center justify-center" style={{ background: '#fff', border: '1px solid #e5e7eb', padding: '2.5% 2%' }}>
              <p className="font-bold text-center" style={{ fontSize: '0.85vw', color: '#1a1a1f' }}>{s.label}</p>
              <div className="rounded-full" style={{ background: '#fef3c7', padding: '1% 4%', marginTop: '3%' }}>
                <p className="font-bold uppercase tracking-wider" style={{ fontSize: '0.6vw', color: '#d97706' }}>{s.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="rounded-xl" style={{ background: '#f5f5f8', border: '1px solid #e5e7eb', padding: '2% 3%', marginBottom: '2%' }}>
          <p style={{ fontSize: '0.75vw', color: '#4b5563', lineHeight: 1.6 }}>
            No outbound sales. No business development function. No lead generation. The phone rings when someone IPS already knows has a project. When the project is done, the phone stops. Every acquisition source is reactive &mdash; IPS waits for work to come to it.
          </p>
        </div>

        {/* VTO callout */}
        <div className="flex-shrink-0 rounded-xl" style={{ background: '#fffbeb', border: '2px solid #fbbf24', padding: '2% 3%' }}>
          <div className="flex items-start gap-[2%]">
            <span className="font-bold flex-shrink-0" style={{ fontSize: '0.7vw', color: '#d97706' }}>VTO SAYS:</span>
            <div>
              <p style={{ fontSize: '0.75vw', color: '#92400e', lineHeight: 1.5 }}>
                <span className="font-bold">&ldquo;Shift from farming to hunting for new customers&rdquo;</span> &mdash; listed as a <span className="font-bold">2028 aspiration</span>, not a 2026 action. Leadership has diagnosed the problem. They have not acted on it because geographic expansion has always been the easier path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
