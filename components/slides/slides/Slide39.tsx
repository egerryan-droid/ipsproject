import { SlideLayout } from '../SlideLayout'

const currentSteps = ['Install', 'Train', 'Walk Away', 'Wait for Call']
const idealSteps = ['Install', 'Monitor', 'Service Agreement', 'Managed Services', 'Inspect', 'Refresh']

export function Slide39() {
  return (
    <SlideLayout actNumber={7} actLabel="ACT 7: WHERE IPS CREATES VALUE" title="The Handoff Gap" speaker="Katy Peat">
      {/* Content area */}
      <div className="h-full flex flex-col gap-[3%]">
        {/* Current process (red) */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-[1%] mb-[1.5%]">
            <div className="bg-[#C8202D] rounded-md px-[1%] py-[0.3%]">
              <p className="text-white font-bold uppercase tracking-widest" style={{ fontSize: '0.6vw' }}>CURRENT</p>
            </div>
            <p className="font-semibold text-[#C8202D]" style={{ fontSize: '0.8vw' }}>What IPS does today</p>
          </div>
          <div className="flex-1 bg-[#fef2f2] border-2 border-[#C8202D]/30 rounded-xl flex items-center px-[3%] gap-[1%]">
            {currentSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-[1%] flex-1">
                <div className={`flex-1 rounded-lg flex items-center justify-center py-[2%] ${
                  i >= 2 ? 'bg-[#C8202D] border-2 border-[#C8202D]' : 'bg-white border-2 border-[#C8202D]/30'
                }`}>
                  <p className={`font-bold ${i >= 2 ? 'text-white' : 'text-[#1a1a1f]'}`} style={{ fontSize: '0.85vw' }}>
                    {step}
                  </p>
                </div>
                {i < currentSteps.length - 1 && (
                  <span style={{ fontSize: '1.2vw', color: '#C8202D', flexShrink: 0 }}>{'\u2192'}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ideal process (green) */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-[1%] mb-[1.5%]">
            <div className="bg-[#059669] rounded-md px-[1%] py-[0.3%]">
              <p className="text-white font-bold uppercase tracking-widest" style={{ fontSize: '0.6vw' }}>IDEAL</p>
            </div>
            <p className="font-semibold text-[#059669]" style={{ fontSize: '0.8vw' }}>The full lifecycle capture</p>
          </div>
          <div className="flex-1 bg-[#f0fdf4] border-2 border-[#059669]/30 rounded-xl flex items-center px-[3%] gap-[0.5%]">
            {idealSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-[0.5%] flex-1">
                <div className="flex-1 bg-white border-2 border-[#059669]/30 rounded-lg flex items-center justify-center py-[2%]">
                  <p className="font-bold text-[#1a1a1f]" style={{ fontSize: '0.7vw' }}>
                    {step}
                  </p>
                </div>
                {i < idealSteps.length - 1 && (
                  <span style={{ fontSize: '1vw', color: '#059669', flexShrink: 0 }}>{'\u2192'}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CLV Gap + Attach Rates */}
        <div className="flex gap-[2%]">
          {/* CLV numbers */}
          <div className="flex-1 bg-[#1a1a1f] rounded-xl px-[3%] py-[2%]">
            <p className="font-bold uppercase tracking-wider" style={{ fontSize: '0.55vw', color: '#80848f', marginBottom: '2%' }}>Customer Lifetime Value Gap</p>
            <div className="flex items-end gap-[4%]">
              <div>
                <p className="text-[#fca5a5] font-extrabold" style={{ fontSize: '1.6vw', lineHeight: 1 }}>$60,428</p>
                <p className="text-[#80848f]" style={{ fontSize: '0.55vw', marginTop: '2%' }}>Current CLV</p>
              </div>
              <span style={{ fontSize: '1.2vw', color: '#80848f' }}>{'\u2192'}</span>
              <div>
                <p className="text-[#059669] font-extrabold" style={{ fontSize: '1.6vw', lineHeight: 1 }}>$91,062</p>
                <p className="text-[#80848f]" style={{ fontSize: '0.55vw', marginTop: '2%' }}>Ideal CLV</p>
              </div>
              <span style={{ fontSize: '1.2vw', color: '#80848f' }}>=</span>
              <div>
                <p className="text-[#fbbf24] font-extrabold" style={{ fontSize: '1.6vw', lineHeight: 1 }}>$30,634</p>
                <p className="text-[#80848f]" style={{ fontSize: '0.55vw', marginTop: '2%' }}>Gap per Customer</p>
              </div>
            </div>
          </div>

          {/* Attach rates */}
          <div className="rounded-xl px-[3%] py-[2%]" style={{ width: '35%', background: '#f5f5f8', border: '1px solid #e5e7eb' }}>
            <p className="font-bold uppercase tracking-wider" style={{ fontSize: '0.55vw', color: '#80848f', marginBottom: '3%' }}>Attach Rates</p>
            <div style={{ marginBottom: '3%' }}>
              <p className="font-bold" style={{ fontSize: '0.65vw', color: '#1a1a1f' }}>Monitoring</p>
              <p style={{ fontSize: '0.6vw', color: '#4b5563' }}><span style={{ color: '#C8202D', fontWeight: 700 }}>15%</span> current {'\u2192'} <span style={{ color: '#059669', fontWeight: 700 }}>60%</span> ideal</p>
            </div>
            <div>
              <p className="font-bold" style={{ fontSize: '0.65vw', color: '#1a1a1f' }}>Service Agreement</p>
              <p style={{ fontSize: '0.6vw', color: '#4b5563' }}><span style={{ color: '#C8202D', fontWeight: 700 }}>30%</span> current {'\u2192'} <span style={{ color: '#059669', fontWeight: 700 }}>70%</span> ideal</p>
            </div>
          </div>
        </div>

        {/* Aggregate gap callout */}
        <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[1.5%] flex items-center gap-[3%]" style={{ marginTop: '2%' }}>
          <div className="w-[0.5%] self-stretch bg-[#fbbf24] rounded-full flex-shrink-0" />
          <p className="text-white" style={{ fontSize: '0.75vw', lineHeight: 1.5 }}>
            <span className="font-bold text-[#fbbf24]">Aggregate Gap: ~$21M</span> across 700 direct customers. IPS installs, trains, and walks away. Every un-attached monitoring contract and service agreement is revenue left on the table — and a customer left undefended against competitors.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
