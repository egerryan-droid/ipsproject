import { SlideLayout } from '../SlideLayout'

const steps = [
  {
    phase: 'BUYOUT FIRST',
    years: '2026\u20132027',
    description: 'Complete the partner buyout while revenue is growing and FCF is strong. Full control enables the transformation. Price is the same now or later \u2014 capacity to pay is 3x higher now.',
    color: '#059669',
  },
  {
    phase: 'PIVOT',
    years: '2027\u20132028',
    description: 'Shift revenue mix from project-based to recurring. Monthly invoice at every project close. Acquire or partner for managed services delivery. Redesign sales compensation.',
    color: '#1B3A6B',
  },
  {
    phase: 'BUILD',
    years: '2028\u20132030',
    description: 'Scale the recurring model. NOC, helpdesk, subscription billing at full capacity. RMR from 5.8% to 15%+. Enterprise value re-rates from 1x to 1.5\u20132x revenue.',
    color: '#d97706',
  },
]

export function Slide50() {
  return (
    <SlideLayout actNumber={10} actLabel="ACT 10: WHAT REPLACES IT" title="The Order: Buyout First, Then Pivot, Then Build" speaker="All">
      {/* Timeline */}
      <div className="h-full flex flex-col min-h-0">
        {/* Three-step horizontal timeline */}
        <div className="flex items-start gap-[1%]" style={{ marginBottom: '2.5%' }}>
          {steps.map((s, i) => (
            <div key={s.phase} className="flex-1 flex flex-col items-center relative">
              {/* Step card */}
              <div className="w-full rounded-xl" style={{ border: `2px solid ${s.color}`, overflow: 'hidden' }}>
                <div className="text-center" style={{ background: s.color, padding: '3% 2%' }}>
                  <p className="text-white font-extrabold uppercase tracking-wider" style={{ fontSize: '0.85vw' }}>{s.phase}</p>
                  <p className="text-white/70 font-semibold" style={{ fontSize: '0.7vw' }}>{s.years}</p>
                </div>
                <div style={{ padding: '5% 4%', background: '#fff' }}>
                  <p style={{ fontSize: '0.65vw', color: '#374151', lineHeight: 1.6 }}>{s.description}</p>
                </div>
              </div>
              {/* Arrow to next */}
              {i < steps.length - 1 && (
                <div className="absolute flex items-center justify-center" style={{ right: '-5%', top: '18%', zIndex: 10 }}>
                  <span className="font-extrabold" style={{ fontSize: '1.6vw', color: '#1a1a1f' }}>&rarr;</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Red warning box */}
        <div className="rounded-xl text-center" style={{ background: '#C8202D', padding: '2% 4%', marginBottom: '2%' }}>
          <p className="text-white font-bold" style={{ fontSize: '1vw' }}>
            Reversing the order risks losing the company.
          </p>
          <p className="text-white/80" style={{ fontSize: '0.65vw', marginTop: '0.5%' }}>
            The pivot causes the revenue decline that triggers the partner exit demand that forces the distressed sale.
          </p>
        </div>

        {/* Bottom quote */}
        <div className="rounded-xl" style={{ background: '#1a1a1f', padding: '3% 4%', marginBottom: '1.5%' }}>
          <p style={{ fontSize: '0.85vw', color: '#e5e7eb', lineHeight: 1.7 }}>
            &ldquo;The operating model that built this company cannot sustain it in the environment that now exists. Here is the evidence. Here is what replaces it.&rdquo;
          </p>
        </div>

        {/* Prominent closing statement */}
        <div className="flex-shrink-0 text-center" style={{ padding: '0.5% 0' }}>
          <p className="font-semibold uppercase tracking-widest" style={{ fontSize: '0.6vw', color: '#80848f' }}>
            Confidential &mdash; Prepared for IPS Leadership
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
