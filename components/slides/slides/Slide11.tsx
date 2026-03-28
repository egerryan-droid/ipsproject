import { SlideLayout } from '../SlideLayout'

const hasItems = [
  { item: 'Fire alarm expertise & licensing', detail: 'NICET, AHJ relationships, code compliance' },
  { item: 'Physical security integration', detail: 'Access control, video surveillance' },
  { item: 'Multi-market presence', detail: '5 markets, regional relationships' },
  { item: 'Brivo / Eagle Eye platform', detail: 'Cloud-ready access & video' },
  { item: 'Strong customer relationships', detail: 'Retention-driven, referral-heavy' },
  { item: 'GAS culture', detail: 'Speed, responsiveness, ownership' },
]

const lacksItems = [
  { item: 'Significant RMR base', detail: '<20% recurring — industry leaders at 40-60%', severity: 'high' },
  { item: 'Cybersecurity capability', detail: 'No OT/IT managed security offering yet', severity: 'high' },
  { item: 'Managed services platform', detail: 'Break-fix model still dominant', severity: 'high' },
  { item: 'Formal sales process', detail: 'Relationship-dependent, no structured pipeline', severity: 'medium' },
  { item: 'Atlanta / SE market presence', detail: 'Customers requesting it, no coverage yet', severity: 'medium' },
  { item: 'Enterprise technology stack', detail: 'PSA/ERP integration incomplete', severity: 'medium' },
]

export function Slide11() {
  return (
    <SlideLayout actNumber={3} actLabel="ACT 3: YOUR MOAT AND YOUR GAPS" title="The Gaps the Converged Industry Exposes" speaker="Zahria Tucker">
      <div className="h-full flex gap-[1.5%]">
        {/* Has column */}
        <div className="flex-1 flex flex-col">
          <div className="bg-[#f0fdf4] border-2 border-[#86efac] rounded-t-xl px-[4%] py-[2%]">
            <p className="text-[0.9vw] font-bold text-[#059669] uppercase tracking-wider">IPS Has</p>
          </div>
          <div className="flex-1 border-2 border-t-0 border-[#86efac] rounded-b-xl overflow-hidden">
            {hasItems.map((item, i) => (
              <div key={item.item} className={`px-[4%] py-[2.5%] border-b border-[#d1fae5] last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f0fdf4]'}`}>
                <div className="flex items-start gap-[2%]">
                  <span className="text-[#059669] text-[1vw] flex-shrink-0 mt-[0.1vw]">&#x2713;</span>
                  <div>
                    <p className="text-[0.85vw] font-semibold text-[#1a1a1f]">{item.item}</p>
                    <p className="text-[0.7vw] text-[#80848f]">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lacks column */}
        <div className="flex-1 flex flex-col">
          <div className="bg-[#fff7ed] border-2 border-[#fdba74] rounded-t-xl px-[4%] py-[2%]">
            <p className="text-[0.9vw] font-bold text-[#C8202D] uppercase tracking-wider">IPS Lacks (In the Converged Industry)</p>
          </div>
          <div className="flex-1 border-2 border-t-0 border-[#fdba74] rounded-b-xl overflow-hidden">
            {lacksItems.map((item, i) => (
              <div key={item.item} className={`px-[4%] py-[2.5%] border-b border-[#fed7aa] last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fff7ed]'}`}>
                <div className="flex items-start gap-[2%]">
                  <span className={`text-[1vw] flex-shrink-0 mt-[0.1vw] ${item.severity === 'high' ? 'text-[#C8202D]' : 'text-[#C8202D]'}`}>
                    {item.severity === 'high' ? '\u26A0' : '\u25B3'}
                  </span>
                  <div>
                    <div className="flex items-center gap-[2%]">
                      <p className="text-[0.85vw] font-semibold text-[#1a1a1f]">{item.item}</p>
                      {item.severity === 'high' && (
                        <span className="text-[0.55vw] bg-[#C8202D] text-white px-[2%] py-[0.3%] rounded font-bold">PRIORITY</span>
                      )}
                    </div>
                    <p className="text-[0.7vw] text-[#80848f]">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
