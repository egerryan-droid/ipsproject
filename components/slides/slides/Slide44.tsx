import { SlideLayout } from '../SlideLayout'

const holds = [
  { item: 'Revenue trajectory', detail: '$82M by 2028 plausible at 15% CAGR, though fragile due to customer concentration' },
  { item: 'Total COGS decline', detail: 'Audited: 75.4% (2021) to 64.4% (2025). Real and driven by direct labor leverage.' },
  { item: 'Direct labor leverage', detail: '34.5% to 24.9% \u2014 "parts and smarts" model working. Fewer labor hours per revenue dollar.' },
]

const cracks = [
  { item: 'COGS components distorted', detail: '2025 reclassification: $14M swing between subcontract and materials. Component trend unreliable.' },
  { item: 'DSO 75 days impossible', detail: 'EC channel (43% of revenue) pays in 90\u2013150 days. Weighted blended: ~91 days minimum.' },
  { item: 'SGA 21% contradicted', detail: '2025: 26% revenue growth, 52% SGA growth. $3.6M structural. 24\u201325% is the realistic floor.' },
  { item: 'RMR never crosses 10%', detail: 'Project revenue outpaces RMR growth. Model reaches only 7.9% by 2030. Acquisition required.' },
  { item: '$37M acquisition cost missing', detail: 'Model counts $28M in bolt-on revenue but omits the ~$37M it costs to buy those companies.' },
]

export function Slide44() {
  return (
    <SlideLayout actNumber={9} actLabel="ACT 9: WHAT BREAKS" title="Model Pressure Test: 3 Hold, 5 Crack" speaker="Kyu Hyuk Choi">
      {/* Two columns */}
      <div className="h-full flex gap-[2%] min-h-0">
        {/* HOLDS */}
        <div className="flex-1 flex flex-col">
          <div className="rounded-t-xl flex items-center gap-[2%]" style={{ background: '#059669', padding: '2% 3%' }}>
            <span className="font-bold" style={{ fontSize: '1vw', color: '#fff' }}>&#10003;</span>
            <p className="text-white font-bold uppercase tracking-widest" style={{ fontSize: '0.8vw' }}>HOLDS</p>
          </div>
          <div className="flex-1 rounded-b-xl overflow-hidden" style={{ border: '2px solid #059669', borderTop: 'none' }}>
            {holds.map((h, i) => (
              <div key={h.item} style={{ padding: '4% 4%', borderBottom: i < holds.length - 1 ? '1px solid #e5e7eb' : 'none', background: i % 2 === 0 ? '#f0fdf4' : '#fff' }}>
                <p className="font-bold" style={{ fontSize: '0.85vw', color: '#166534' }}>{h.item}</p>
                <p style={{ fontSize: '0.65vw', color: '#4b5563', marginTop: '2%', lineHeight: 1.5 }}>{h.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CRACKS */}
        <div className="flex-1 flex flex-col">
          <div className="rounded-t-xl flex items-center gap-[2%]" style={{ background: '#C8202D', padding: '2% 3%' }}>
            <span className="font-bold" style={{ fontSize: '1vw', color: '#fff' }}>&#10007;</span>
            <p className="text-white font-bold uppercase tracking-widest" style={{ fontSize: '0.8vw' }}>CRACKS</p>
          </div>
          <div className="flex-1 rounded-b-xl overflow-hidden" style={{ border: '2px solid #C8202D', borderTop: 'none' }}>
            {cracks.map((c, i) => (
              <div key={c.item} style={{ padding: '3% 4%', borderBottom: i < cracks.length - 1 ? '1px solid #e5e7eb' : 'none', background: i % 2 === 0 ? '#fef2f2' : '#fff' }}>
                <p className="font-bold" style={{ fontSize: '0.8vw', color: '#991b1b' }}>{c.item}</p>
                <p style={{ fontSize: '0.6vw', color: '#4b5563', marginTop: '2%', lineHeight: 1.5 }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
