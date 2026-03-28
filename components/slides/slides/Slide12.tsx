import { SlideLayout } from '../SlideLayout'

const oldModel = [
  { label: 'Revenue type', value: 'Project-based', icon: '🔨' },
  { label: 'Customer relationship', value: 'Transactional', icon: '📋' },
  { label: 'Valuation multiple', value: '3-4x EBITDA', icon: '📉' },
  { label: 'Predictability', value: 'Low — bid dependent', icon: '🎲' },
  { label: 'Churn risk', value: 'High per-project', icon: '⚠️' },
]

const newModel = [
  { label: 'Revenue type', value: 'Recurring monthly', icon: '🔄' },
  { label: 'Customer relationship', value: 'Embedded, sticky', icon: '🤝' },
  { label: 'Valuation multiple', value: '6-10x EBITDA', icon: '📈' },
  { label: 'Predictability', value: 'High — contracted', icon: '✅' },
  { label: 'Churn risk', value: 'Low — switching costs', icon: '🔐' },
]

const rmrtypes = [
  { type: 'Monitoring', margin: '70-80%', maturity: 'Ready now' },
  { type: 'Managed Access Control', margin: '55-65%', maturity: 'Ready now (Brivo)' },
  { type: 'Managed Video', margin: '55-65%', maturity: 'Ready now (Eagle Eye)' },
  { type: 'Fire Inspection SLAs', margin: '45-55%', maturity: 'In progress' },
  { type: 'Managed Cyber/OT', margin: '60-70%', maturity: '12-18 months' },
]

export function Slide12() {
  return (
    <SlideLayout actNumber={3} actLabel="ACT 3: YOUR MOAT AND YOUR GAPS" title="RMR: The Business Model of the Converged Industry" speaker="Zahria Tucker">
      <div className="h-full flex gap-[1.5%]">
        {/* Old model */}
        <div className="w-[30%] flex flex-col">
          <div className="bg-[#f5f5f8] border-2 border-[#e8e9f0] rounded-t-xl px-[5%] py-[2%]">
            <p className="text-[0.7vw] font-bold text-[#80848f] uppercase tracking-wider">Old Model</p>
            <p className="text-[1.1vw] font-bold text-[#1a1a1f]">Project / Break-Fix</p>
          </div>
          <div className="flex-1 border-2 border-t-0 border-[#e8e9f0] rounded-b-xl overflow-hidden">
            {oldModel.map((r, i) => (
              <div key={r.label} className={`px-[5%] py-[2.5%] border-b border-[#f0f0f3] last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f9f9fb]'}`}>
                <p className="text-[0.65vw] text-[#80848f] uppercase tracking-wider">{r.label}</p>
                <p className="text-[0.85vw] font-semibold text-[#1a1a1f] mt-[1%]">{r.icon} {r.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center w-[6%]">
          <div className="flex flex-col items-center gap-[4%]">
            <div className="text-[2vw] text-[#1B3A6B]">&#x2192;</div>
            <p className="text-[0.6vw] text-[#1B3A6B] font-bold text-center uppercase tracking-widest">Converge</p>
          </div>
        </div>

        {/* New model */}
        <div className="w-[30%] flex flex-col">
          <div className="bg-[#f0f1fb] border-2 border-[#1B3A6B]/40 rounded-t-xl px-[5%] py-[2%]">
            <p className="text-[0.7vw] font-bold text-[#1B3A6B] uppercase tracking-wider">Converged Model</p>
            <p className="text-[1.1vw] font-bold text-[#1a1a1f]">Recurring / Managed</p>
          </div>
          <div className="flex-1 border-2 border-t-0 border-[#1B3A6B]/40 rounded-b-xl overflow-hidden">
            {newModel.map((r, i) => (
              <div key={r.label} className={`px-[5%] py-[2.5%] border-b border-[#e8edf7] last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f0f1fb]'}`}>
                <p className="text-[0.65vw] text-[#1B3A6B] uppercase tracking-wider font-semibold">{r.label}</p>
                <p className="text-[0.85vw] font-semibold text-[#1a1a1f] mt-[1%]">{r.icon} {r.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RMR types right panel */}
        <div className="flex-1 flex flex-col pl-[2%]">
          <p className="text-[0.75vw] font-bold text-[#80848f] uppercase tracking-widest mb-[1.5%]">IPS RMR Opportunity Stack</p>
          {rmrtypes.map(r => (
            <div key={r.type} className="flex items-center gap-[3%] mb-[2%]">
              <div className="flex-1 bg-[#f5f5f8] rounded-lg px-[4%] py-[2%] border border-[#e8e9f0]">
                <div className="flex items-center justify-between">
                  <p className="text-[0.8vw] font-semibold text-[#1a1a1f]">{r.type}</p>
                  <span className="text-[0.7vw] font-bold text-[#059669]">{r.margin}</span>
                </div>
                <p className="text-[0.65vw] text-[#80848f] mt-[1%]">{r.maturity}</p>
              </div>
            </div>
          ))}
          <div className="bg-[#1a1a1f] rounded-xl px-[4%] py-[2.5%] mt-[1%]">
            <p className="text-[0.75vw] font-bold text-[#6ee7b7]">Going from &lt;20% &#x2192; 50%+ RMR</p>
            <p className="text-white text-[0.7vw] mt-[1%]">takes the EV multiple from 3x &#x2192; 6x+</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
