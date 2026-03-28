import { SlideLayout } from '../SlideLayout'

const takeaways = [
  'The NICET IV moat is real \u2014 it protects IPS\u2019s relevance in any future scenario',
  'The operating model must change \u2014 project-and-walk-away cannot survive PE competition',
  'The order is: buyout first, then pivot, then build',
]

export function Slide53() {
  return (
    <SlideLayout actNumber={11} actLabel="ACT 11: STRESS TEST" title="What Survived" speaker="All">
      <div className="flex-1 flex flex-col justify-center" style={{ padding: '0 5%' }}>
        {/* Main text block */}
        <p className="text-[#1B3A6B] font-semibold leading-[1.4]" style={{ fontSize: '1.4vw', marginBottom: '2%' }}>
          IPS&rsquo;s strengths are real but insufficient to protect it in the environment that now exists.
        </p>

        <p className="text-[#374151] leading-[1.6]" style={{ fontSize: '0.9vw', marginBottom: '2%' }}>
          The company is not fragile today. It is fragile to the specific competitive dynamics that are emerging in its markets.
        </p>

        <p className="text-[#1B3A6B] font-bold leading-[1.5]" style={{ fontSize: '0.95vw', marginBottom: '4%' }}>
          The difference matters &mdash; because it means IPS has time to act. But not unlimited time.
        </p>

        {/* Divider */}
        <div className="w-full" style={{ height: '1px', background: '#e5e7eb', marginBottom: '3%' }} />

        {/* Key takeaways */}
        <div className="flex flex-col gap-[1.2%]">
          {takeaways.map((item, i) => (
            <div key={i} className="flex items-start gap-[1%]">
              <div className="flex-shrink-0 rounded-full flex items-center justify-center" style={{ width: '1.6vw', height: '1.6vw', background: '#1B3A6B', marginTop: '0.1vw' }}>
                <span className="text-white font-bold" style={{ fontSize: '0.7vw' }}>{i + 1}</span>
              </div>
              <p className="text-[#374151] leading-[1.6]" style={{ fontSize: '0.8vw' }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Final line */}
        <p className="text-[#80848f] italic text-center" style={{ fontSize: '0.6vw', marginTop: '4%' }}>
          Confidential &mdash; Prepared for IPS Leadership
        </p>
      </div>
    </SlideLayout>
  )
}
