import { SlideLayout } from '../SlideLayout'

const stats = [
  { value: '207', label: 'New Customers' },
  { value: '185', label: 'Customers Lost' },
  { value: '22', label: 'Net Gain', accent: true },
]

export function Slide40() {
  return (
    <SlideLayout actNumber={8} actLabel="ACT 8: THE GEOGRAPHY ENGINE" title="IPS Does Not Have a Growth Engine" speaker="Zahria Tucker">
      {/* Main content area */}
      <div className="h-full flex flex-col items-center justify-center">
        {/* Large statement */}
        <div className="text-center" style={{ maxWidth: '80%' }}>
          <p className="text-[#1a1a1f] font-bold leading-tight" style={{ fontSize: '2.8vw' }}>
            IPS doesn&apos;t have a{' '}
            <span className="text-[#059669]">growth engine</span>.
          </p>
          <p className="text-[#1a1a1f] font-bold leading-tight mt-[1%]" style={{ fontSize: '2.8vw' }}>
            It has a{' '}
            <span className="text-[#d97706]">geography engine</span>.
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#d97706]" style={{ width: '15%', height: '3px', marginTop: '3%', marginBottom: '3%', borderRadius: '2px' }} />

        {/* Stats row */}
        <div className="flex items-center gap-[3%]">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-[3%]">
              <div className="flex flex-col items-center">
                <p
                  className="font-extrabold leading-none"
                  style={{
                    fontSize: '3vw',
                    color: s.accent ? '#d97706' : '#1a1a1f',
                  }}
                >
                  {s.value}
                </p>
                <p className="text-[#80848f] font-semibold uppercase tracking-widest mt-[6%]" style={{ fontSize: '0.65vw' }}>
                  {s.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="flex flex-col items-center mx-[1vw]">
                  <span className="text-[#80848f]" style={{ fontSize: '1.5vw' }}>
                    {i === 0 ? '\u2212' : '='}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[2%] flex items-center gap-[3%] mt-auto w-full">
          <div className="w-[0.5%] self-stretch bg-[#d97706] rounded-full flex-shrink-0" />
          <p className="text-white text-[0.85vw] leading-relaxed">
            <span className="font-bold text-[#fbbf24]">The pattern:</span> The only mechanism that has ever worked is opening a new branch in a new market. Cincinnati, Columbus, Lexington, Nashville — each one was a geographic play. Customer retention is 81.5%. Without new geography, growth stalls.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
