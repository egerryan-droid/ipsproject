import { SlideLayout } from '../SlideLayout'

const outcomes = [
  { label: 'Negotiated Midpoint', detail: '~$43M. $7.2M/yr payment. FCF: $3.5M. Zero growth capital.', color: '#d97706' },
  { label: 'Peak Price Demand', detail: '~$60M. $10.1M/yr. Max capacity: $7.8M. IMPOSSIBLE.', color: '#C8202D' },
  { label: 'Distressed Sale', detail: 'PE offers 5x (forced seller). EV: $41M. Partner loses $44M vs peak.', color: '#991b1b' },
  { label: 'PE Buys Stake', detail: 'PE acquires 42%. Board seat. Veto rights. Forces full sale. Andy loses control.', color: '#7f1d1d' },
]

export function Slide47() {
  return (
    <SlideLayout actNumber={9} actLabel="ACT 9: WHAT BREAKS" title="Scenario H: The Cascading Failure" speaker="Kyu Hyuk Choi">
      {/* Cascade diagram */}
      <div className="h-full flex flex-col min-h-0">
        {/* Level 1 */}
        <div className="flex justify-center" style={{ marginBottom: '1%' }}>
          <div className="rounded-xl text-center" style={{ background: '#C8202D', padding: '1.5% 5%' }}>
            <p className="text-white font-bold" style={{ fontSize: '0.9vw' }}>Revenue Declines (Scenario G)</p>
          </div>
        </div>
        <div className="flex justify-center" style={{ marginBottom: '1%' }}>
          <div style={{ width: '2px', height: '1.5vw', background: '#C8202D' }} />
        </div>

        {/* Level 2 */}
        <div className="flex justify-center" style={{ marginBottom: '1%' }}>
          <div className="rounded-xl text-center" style={{ background: '#C8202D', padding: '1.5% 5%' }}>
            <p className="text-white font-bold" style={{ fontSize: '0.9vw' }}>Partner (age 72 in 2028) Demands Exit</p>
          </div>
        </div>
        <div className="flex justify-center" style={{ marginBottom: '1%' }}>
          <div style={{ width: '2px', height: '1.5vw', background: '#C8202D' }} />
        </div>

        {/* Level 3 */}
        <div className="flex justify-center" style={{ marginBottom: '1%' }}>
          <div className="rounded-xl text-center" style={{ background: '#991b1b', padding: '1.5% 4%' }}>
            <p className="text-white font-bold" style={{ fontSize: '0.85vw' }}>IPS Cannot Fund Buyout &mdash; FCF $3.5M vs $4.6M Needed</p>
          </div>
        </div>
        <div className="flex justify-center" style={{ marginBottom: '1.5%' }}>
          <div style={{ width: '2px', height: '1.5vw', background: '#991b1b' }} />
        </div>

        {/* Level 4 — four outcomes */}
        <div className="flex gap-[1.5%]" style={{ marginBottom: '2%' }}>
          {outcomes.map((o) => (
            <div key={o.label} className="flex-1 rounded-xl" style={{ border: `2px solid ${o.color}`, padding: '2.5% 2%', background: '#fff' }}>
              <p className="font-bold" style={{ fontSize: '0.75vw', color: o.color, marginBottom: '2%' }}>{o.label}</p>
              <p style={{ fontSize: '0.6vw', color: '#4b5563', lineHeight: 1.5 }}>{o.detail}</p>
            </div>
          ))}
        </div>

        {/* Buyout affordability callout */}
        <div className="rounded-xl flex items-start gap-[2%]" style={{ background: '#fef2f2', border: '2px solid #C8202D', padding: '2% 3%', marginBottom: '1.5%' }}>
          <div>
            <p style={{ fontSize: '0.7vw', color: '#991b1b', lineHeight: 1.5 }}>
              <span className="font-bold">Maximum affordable buyout: $62M under base case, $27M under Amazon loss.</span> Negotiated vs Full Price gap is $9M — but the difference in survivability is binary. At full price, IPS cannot service debt. At negotiated price, it barely can.
            </p>
          </div>
        </div>

        {/* Bottom comparison table */}
        <div className="rounded-xl overflow-hidden mt-auto" style={{ border: '2px solid #1a1a1f' }}>
          <div className="flex" style={{ background: '#1a1a1f', padding: '1.5% 3%' }}>
            <p className="text-white font-bold" style={{ fontSize: '0.8vw' }}>Same Price. 3x Less Capacity.</p>
          </div>
          <div className="flex">
            <div className="flex-1" style={{ padding: '2% 3%', borderRight: '1px solid #e5e7eb', background: '#f0fdf4' }}>
              <p className="font-bold uppercase tracking-wider" style={{ fontSize: '0.6vw', color: '#059669' }}>Buy in 2026</p>
              <p className="font-extrabold" style={{ fontSize: '1.4vw', color: '#059669', lineHeight: 1.2 }}>~$27M</p>
              <p style={{ fontSize: '0.6vw', color: '#4b5563', marginTop: '1%' }}>FCF: $10.0M &middot; Coverage: <span className="font-bold" style={{ color: '#059669' }}>2.2x</span></p>
            </div>
            <div className="flex-1" style={{ padding: '2% 3%', background: '#fef2f2' }}>
              <p className="font-bold uppercase tracking-wider" style={{ fontSize: '0.6vw', color: '#C8202D' }}>Buy in 2028</p>
              <p className="font-extrabold" style={{ fontSize: '1.4vw', color: '#C8202D', lineHeight: 1.2 }}>~$27M</p>
              <p style={{ fontSize: '0.6vw', color: '#4b5563', marginTop: '1%' }}>FCF: $3.5M &middot; Coverage: <span className="font-bold" style={{ color: '#C8202D' }}>0.76x</span></p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
