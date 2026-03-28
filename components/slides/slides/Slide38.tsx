import { SlideLayout } from '../SlideLayout'

const marginCreation = [
  { icon: '\u2605', label: 'Fire Alarm Engineering', desc: 'NICET IV capability commands premium pricing — high-barrier, high-value design work' },
  { icon: '\u2605', label: 'Service Agreements (50-60% margin)', desc: 'Growing 73% YoY from $2.1M to $3.7M — the brightest spot in the P&L' },
  { icon: '\u2605', label: 'PSA Network Leverage', desc: '#2 vendor at $8.9M — group buying provides structural cost advantage vs. direct purchasing' },
  { icon: '\u2605', label: 'Edwards/EST Partnership', desc: 'Largest private EST distributor nationally — ~$6M/year in preferred distributor pricing' },
  { icon: '\u2605', label: 'National Accounts Execution', desc: 'Amazon across 48/50 states — proves scalability and wins repeat volume' },
]

const marginLeakage = [
  { icon: '\u26A0', label: 'EC Channel Compression', desc: '34% of revenue flows through ECs — margin compressed, end-user relationship lost forever' },
  { icon: '\u26A0', label: 'Post-Install Handoff Gap', desc: 'Install, train, walk away — monitoring and managed services left on the table' },
  { icon: '\u26A0', label: '20% Subcontractor Spend', desc: '$21.2M over 3 years — coordinating, not executing. Pass-through with limited value-add' },
  { icon: '\u26A0', label: '$11.8M Credit Card Purchasing', desc: '11.2% of vendor spend on ad-hoc cards — likely non-negotiated pricing, no PO process' },
  { icon: '\u26A0', label: '122-Day DSO', desc: '$18M in AR is interest-free customer financing. Cash destroyed despite revenue growth.' },
]

export function Slide38() {
  return (
    <SlideLayout actNumber={7} actLabel="ACT 7: WHERE IPS CREATES VALUE" title="Value Chain: Margin Creation vs Margin Leakage" speaker="Katy Peat">
      {/* Two-column layout */}
      <div className="h-full flex flex-col">
        <div className="flex-1 flex gap-[2%]">
          {/* Left: Margin Creation */}
          <div className="w-[49%] flex flex-col">
            <div className="flex items-center gap-[2%] mb-[2%]">
              <div className="w-[1vw] h-[1vw] rounded-full bg-[#059669]" />
              <p className="font-bold text-[#059669] uppercase tracking-widest" style={{ fontSize: '0.7vw' }}>
                Margin Creation
              </p>
            </div>
            <div className="flex-1 border-2 border-[#059669]/30 rounded-xl overflow-hidden">
              {marginCreation.map((item, i) => (
                <div
                  key={item.label}
                  className={`px-[4%] py-[2.5%] border-b border-gray-200 last:border-b-0 ${i % 2 === 0 ? 'bg-[#f0fdf4]' : 'bg-white'}`}
                >
                  <div className="flex items-start gap-[2%]">
                    <span style={{ fontSize: '0.8vw', color: '#059669', flexShrink: 0, marginTop: '0.2%' }}>{item.icon}</span>
                    <div>
                      <p className="font-bold text-[#1a1a1f]" style={{ fontSize: '0.7vw' }}>{item.label}</p>
                      <p className="text-[#374151]" style={{ fontSize: '0.6vw', lineHeight: 1.4, marginTop: '1%' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Margin Leakage */}
          <div className="w-[49%] flex flex-col">
            <div className="flex items-center gap-[2%] mb-[2%]">
              <div className="w-[1vw] h-[1vw] rounded-full bg-[#C8202D]" />
              <p className="font-bold text-[#C8202D] uppercase tracking-widest" style={{ fontSize: '0.7vw' }}>
                Margin Leakage
              </p>
            </div>
            <div className="flex-1 border-2 border-[#C8202D]/30 rounded-xl overflow-hidden">
              {marginLeakage.map((item, i) => (
                <div
                  key={item.label}
                  className={`px-[4%] py-[2.5%] border-b border-gray-200 last:border-b-0 ${i % 2 === 0 ? 'bg-[#fef2f2]' : 'bg-white'}`}
                >
                  <div className="flex items-start gap-[2%]">
                    <span style={{ fontSize: '0.8vw', color: '#C8202D', flexShrink: 0, marginTop: '0.2%' }}>{item.icon}</span>
                    <div>
                      <p className="font-bold text-[#1a1a1f]" style={{ fontSize: '0.7vw' }}>{item.label}</p>
                      <p className="text-[#374151]" style={{ fontSize: '0.6vw', lineHeight: 1.4, marginTop: '1%' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom source */}
        <div className="flex-shrink-0 flex items-center justify-end mt-[1%]">
          <span className="text-[#80848f]" style={{ fontSize: '0.45vw' }}>
            Source: IPS 3-Year Invoice Data | 3-Year Vendor AP Data (42,787 records) | IPS Financial Model V3
          </span>
        </div>
      </div>
    </SlideLayout>
  )
}
