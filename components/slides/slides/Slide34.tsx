import { SlideLayout } from '../SlideLayout'

const revenueTypes = [
  {
    type: 'Installation / Project',
    amount: '$42.2M',
    pct: '78.5%',
    margin: '20-25%',
    barWidth: '78.5%',
    barColor: '#C8202D',
    marginColor: '#C8202D',
    desc: 'Largest revenue stream, lowest margin. EC-heavy, one-time, no recurring capture.',
  },
  {
    type: 'Service (Break-Fix)',
    amount: '$7.5M',
    pct: '14.0%',
    margin: '45-50%',
    barWidth: '14%',
    barColor: '#d97706',
    marginColor: '#d97706',
    desc: 'Reactive demand service. Good margin but customer-initiated, not contracted.',
  },
  {
    type: 'Recurring (Contracts)',
    amount: '$3.1M',
    pct: '5.8%',
    margin: '50-60%',
    barWidth: '5.8%',
    barColor: '#059669',
    marginColor: '#059669',
    desc: 'Smallest stream, highest margin. Service agreements + monitoring. Industry benchmark: 25%+.',
  },
]

export function Slide34() {
  return (
    <SlideLayout actNumber={6} actLabel="ACT 6: WHAT THE NUMBERS SAY" title="Revenue Composition: Where the Money Comes From" speaker="Ryan Eger">
      <div className="h-full flex flex-col gap-[2%]">
        {/* Label row */}
        <div className="flex items-center justify-between">
          <p className="text-[0.65vw] font-bold text-[#80848f] uppercase tracking-widest">2025 Revenue by Type</p>
          <div className="flex items-center gap-[3%]">
            <span className="text-[0.6vw] text-[#C8202D] font-bold">Biggest revenue = Lowest margin</span>
            <span className="text-[0.6vw] text-[#80848f]">|</span>
            <span className="text-[0.6vw] text-[#059669] font-bold">Smallest revenue = Highest margin</span>
          </div>
        </div>

        {/* Revenue type cards */}
        {revenueTypes.map((r) => (
          <div key={r.type} className="flex-1 flex flex-col border border-gray-200 rounded-xl overflow-hidden">
            {/* Top section: labels */}
            <div className="flex items-center justify-between px-[3%] py-[1.5%] bg-gray-50">
              <div className="flex items-center gap-[2%]">
                <div className="w-[0.8vw] h-[0.8vw] rounded-full" style={{ backgroundColor: r.barColor }} />
                <p className="font-bold text-[#1a1a1f]" style={{ fontSize: '1.1vw' }}>{r.type}</p>
              </div>
              <div className="flex items-center gap-[4%]">
                <div className="text-right">
                  <p className="text-[0.6vw] text-[#80848f] uppercase tracking-wider">Revenue</p>
                  <p className="font-bold text-[#1a1a1f]" style={{ fontSize: '1.3vw' }}>{r.amount}</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.6vw] text-[#80848f] uppercase tracking-wider">Share</p>
                  <p className="font-bold text-[#1a1a1f]" style={{ fontSize: '1.3vw' }}>{r.pct}</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.6vw] text-[#80848f] uppercase tracking-wider">Margin</p>
                  <p className="font-bold" style={{ fontSize: '1.3vw', color: r.marginColor }}>{r.margin}</p>
                </div>
              </div>
            </div>

            {/* Bar + description */}
            <div className="flex-1 flex items-center px-[3%] gap-[3%]">
              <div className="flex-1 relative" style={{ height: '40%' }}>
                <div className="absolute inset-0 bg-[#f0f0f3] rounded-lg" />
                <div
                  className="absolute top-0 left-0 bottom-0 rounded-lg"
                  style={{ width: r.barWidth, backgroundColor: r.barColor, opacity: 0.2 }}
                />
                <div
                  className="absolute top-0 left-0 bottom-0 rounded-lg"
                  style={{ width: r.barWidth, maxWidth: '100%', backgroundColor: r.barColor }}
                />
              </div>
              <p className="text-[0.65vw] text-[#1a1a1f] leading-relaxed" style={{ width: '40%' }}>{r.desc}</p>
            </div>
          </div>
        ))}

        {/* Bottom callout */}
        <div
          className="flex-shrink-0 flex flex-col rounded-lg"
          style={{ background: '#fff0f0', padding: '1.5% 3%', borderTop: '2px solid #fca5a5' }}
        >
          <div className="flex items-start gap-[1%]">
            <span className="font-bold flex-shrink-0" style={{ fontSize: '0.75vw', color: '#C8202D' }}>THE INVERSION:</span>
            <span style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>
              78.5% of revenue earns 20-25% margin. 5.8% of revenue earns 50-60% margin. The business model rewards volume over value. Flipping this ratio is the single highest-leverage strategic move available.
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
