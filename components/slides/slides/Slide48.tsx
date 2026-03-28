import { SlideLayout } from '../SlideLayout'

export function Slide48() {
  return (
    <SlideLayout actNumber={9} actLabel="ACT 9: WHAT BREAKS" title="The Valuation Paradox" speaker="Kyu Hyuk Choi">
      {/* Content */}
      <div className="h-full flex flex-col items-center justify-center min-h-0">
        {/* Side by side comparison */}
        <div className="flex items-center gap-[2%] w-full" style={{ maxWidth: '90%', marginBottom: '3%' }}>
          {/* Left card — current */}
          <div className="flex-1 rounded-xl" style={{ border: '2px solid #e5e7eb', padding: '4% 3%', background: '#f5f5f8' }}>
            <p className="font-bold uppercase tracking-wider" style={{ fontSize: '0.65vw', color: '#80848f' }}>Current Model</p>
            <p className="font-extrabold" style={{ fontSize: '2.5vw', color: '#1a1a1f', lineHeight: 1, marginTop: '2%' }}>$92M</p>
            <p className="font-semibold" style={{ fontSize: '0.8vw', color: '#80848f', marginTop: '1%' }}>company</p>
            <div style={{ width: '100%', height: '1px', background: '#e5e7eb', margin: '4% 0' }} />
            <div className="flex flex-col gap-[6%]">
              <div className="flex justify-between">
                <span style={{ fontSize: '0.65vw', color: '#80848f' }}>RMR</span>
                <span className="font-bold" style={{ fontSize: '0.65vw', color: '#C8202D' }}>5.8%</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '0.65vw', color: '#80848f' }}>Revenue Multiple</span>
                <span className="font-bold" style={{ fontSize: '0.65vw', color: '#1a1a1f' }}>1.0x</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '0.65vw', color: '#80848f' }}>Enterprise Value</span>
                <span className="font-bold" style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>$92M</span>
              </div>
            </div>
          </div>

          {/* Center comparison sign */}
          <div className="flex flex-col items-center justify-center flex-shrink-0" style={{ width: '8%' }}>
            <div className="rounded-full flex items-center justify-center" style={{ width: '3.5vw', height: '3.5vw', background: '#059669' }}>
              <span className="text-white font-extrabold" style={{ fontSize: '1.8vw' }}>&ge;</span>
            </div>
          </div>

          {/* Right card — smaller/better */}
          <div className="flex-1 rounded-xl" style={{ border: '2px solid #059669', padding: '4% 3%', background: '#f0fdf4' }}>
            <p className="font-bold uppercase tracking-wider" style={{ fontSize: '0.65vw', color: '#059669' }}>Transformed Model</p>
            <p className="font-extrabold" style={{ fontSize: '2.5vw', color: '#166534', lineHeight: 1, marginTop: '2%' }}>$61M</p>
            <p className="font-semibold" style={{ fontSize: '0.8vw', color: '#059669', marginTop: '1%' }}>company</p>
            <div style={{ width: '100%', height: '1px', background: '#bbf7d0', margin: '4% 0' }} />
            <div className="flex flex-col gap-[6%]">
              <div className="flex justify-between">
                <span style={{ fontSize: '0.65vw', color: '#059669' }}>RMR</span>
                <span className="font-bold" style={{ fontSize: '0.65vw', color: '#059669' }}>15&ndash;20%</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '0.65vw', color: '#059669' }}>Revenue Multiple</span>
                <span className="font-bold" style={{ fontSize: '0.65vw', color: '#166534' }}>1.5&ndash;2.0x</span>
              </div>
              <div className="flex justify-between">
                <span style={{ fontSize: '0.65vw', color: '#059669' }}>Enterprise Value</span>
                <span className="font-bold" style={{ fontSize: '0.75vw', color: '#166534' }}>$92&ndash;122M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom explanation */}
        <div className="w-full rounded-xl" style={{ background: '#1a1a1f', padding: '2.5% 4%' }}>
          <p style={{ fontSize: '0.85vw', color: '#e5e7eb', lineHeight: 1.6 }}>
            <span className="font-bold" style={{ color: '#6ee7b7' }}>The smaller company could be worth MORE.</span>{' '}
            Losing EC + Amazon forces a better business model &mdash; higher margins, stickier relationships, recurring revenue. The destination IS better.{' '}
            <span className="font-bold" style={{ color: '#fca5a5' }}>IF</span> IPS makes the pivot proactively, not reactively after the revenue disappears.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
