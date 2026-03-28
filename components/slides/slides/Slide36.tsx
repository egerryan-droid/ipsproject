import { SlideLayout } from '../SlideLayout'

const capabilityItems = [
  'NICET IV Fire Alarm Engineering',
  'Combined Fire + Security under one roof',
  'Edwards/EST preferred distributor',
  'PSA Network + 25 vendor partnerships',
  'National accounts execution (48/50 states)',
]

const systemsItems = [
  'Recurring Revenue: 5.8% vs. 25% benchmark',
  'Workforce Dev: No formal training pipeline',
  'Process Maturity: Aging ERP, no CRM',
  'Subscription Billing: None',
  'Cross-sell Engine: Informal at best',
]

const failedResources = [
  'Customer Relationship Base',
  'Leadership Team',
  'Workforce Culture',
  'Recurring Revenue (RMR)',
  'Financial Position',
  'Geographic Footprint',
]

export function Slide36() {
  return (
    <SlideLayout actNumber={7} actLabel="ACT 7: WHERE IPS CREATES VALUE" title="The Organization Gap" speaker="Katy Peat">
      {/* Content: two columns */}
      <div className="h-full flex flex-col">
        <div className="flex-1 flex gap-[2%]">
          {/* Left: Capability */}
          <div className="w-[48%] flex flex-col">
            <div className="flex items-center gap-[2%] mb-[2%]">
              <div className="rounded-lg px-[3%] py-[1.5%] bg-[#059669]">
                <p className="text-white font-bold" style={{ fontSize: '1.4vw' }}>5 / 5</p>
              </div>
              <div>
                <p className="font-bold text-[#1a1a1f]" style={{ fontSize: '1.1vw' }}>on Capability</p>
                <p className="text-[#059669] font-semibold" style={{ fontSize: '0.65vw' }}>TECHNICAL EXCELLENCE</p>
              </div>
            </div>
            <div className="flex-1 border-2 border-[#059669]/30 rounded-xl overflow-hidden">
              {capabilityItems.map((item, i) => (
                <div
                  key={item}
                  className={`px-[4%] py-[3%] border-b border-gray-200 last:border-b-0 flex items-center gap-[3%] ${i % 2 === 0 ? 'bg-[#f0fdf4]' : 'bg-white'}`}
                >
                  <span style={{ fontSize: '1vw', color: '#059669' }}>{'\u2713'}</span>
                  <p className="font-semibold text-[#1a1a1f]" style={{ fontSize: '0.75vw' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Barbell visual */}
          <div className="flex flex-col items-center justify-center w-[4%]">
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-[#059669]" />
            <div className="flex-1 w-[2px] bg-gray-200" />
            <div className="bg-[#d97706] rounded-md px-[0.3vw] py-[0.2vw]">
              <p className="text-white font-bold" style={{ fontSize: '0.5vw' }}>GAP</p>
            </div>
            <div className="flex-1 w-[2px] bg-gray-200" />
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-[#C8202D]" />
          </div>

          {/* Right: Systems */}
          <div className="w-[48%] flex flex-col">
            <div className="flex items-center gap-[2%] mb-[2%]">
              <div className="rounded-lg px-[3%] py-[1.5%] bg-[#C8202D]">
                <p className="text-white font-bold" style={{ fontSize: '1.4vw' }}>2 / 5</p>
              </div>
              <div>
                <p className="font-bold text-[#1a1a1f]" style={{ fontSize: '1.1vw' }}>on Systems</p>
                <p className="text-[#C8202D] font-semibold" style={{ fontSize: '0.65vw' }}>OPERATIONAL INFRASTRUCTURE</p>
              </div>
            </div>
            <div className="flex-1 border-2 border-[#C8202D]/30 rounded-xl overflow-hidden">
              {systemsItems.map((item, i) => (
                <div
                  key={item}
                  className={`px-[4%] py-[3%] border-b border-gray-200 last:border-b-0 flex items-center gap-[3%] ${i % 2 === 0 ? 'bg-[#fef2f2]' : 'bg-white'}`}
                >
                  <span style={{ fontSize: '1vw', color: '#C8202D' }}>{'\u2717'}</span>
                  <p className="font-semibold text-[#1a1a1f]" style={{ fontSize: '0.75vw' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[1.5%] mt-[2%]">
          <div className="flex items-center gap-[2%]">
            <p className="text-[#a5b4fc] font-bold" style={{ fontSize: '0.75vw' }}>6 of 12 VRIO resources fail on the Organization dimension</p>
            <div className="h-[1px] flex-1 bg-[#374151]" />
            <div className="flex gap-[1%] flex-shrink-0">
              {failedResources.map((r) => (
                <span
                  key={r}
                  className="bg-[#374151] text-[#e5e7eb] rounded-md px-[0.5%] py-[0.2%]"
                  style={{ fontSize: '0.5vw' }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
