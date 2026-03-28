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

        {/* Quote + Stat row */}
        <div className="flex gap-[2%]">
          {/* Quote box */}
          <div className="flex-1 bg-[#f5f5f8] border-l-4 border-[#1B3A6B] rounded-r-xl px-[3%] py-[2%]">
            <p className="text-[#1a1a1f] italic leading-relaxed" style={{ fontSize: '0.85vw' }}>
              &ldquo;IPS installs, trains, and walks away. Customer self-manages.&rdquo;
            </p>
            <p className="text-[#1B3A6B] font-bold mt-[1%]" style={{ fontSize: '0.65vw' }}>
              &mdash; Pete Keller, IPS Leadership
            </p>
          </div>

          {/* Stat box */}
          <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[2%] flex flex-col items-center justify-center" style={{ width: '30%' }}>
            <p className="text-[#fca5a5] font-extrabold" style={{ fontSize: '2.5vw', lineHeight: 1 }}>5.8%</p>
            <p className="text-white font-semibold mt-[2%]" style={{ fontSize: '0.7vw' }}>IPS RMR</p>
            <div className="w-[50%] h-[1px] bg-[#374151] my-[3%]" />
            <p className="text-[#059669] font-bold" style={{ fontSize: '1.2vw' }}>25%+</p>
            <p className="text-[#80848f]" style={{ fontSize: '0.6vw' }}>Industry Benchmark</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
