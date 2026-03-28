import { SlideLayout } from '../SlideLayout'

const metrics = [
  { label: 'Annual Revenue', value: '$55M', sub: '2025 run rate', accent: true },
  { label: 'Organic Growth', value: '20%', sub: 'YoY, no acquisitions', accent: false },
  { label: 'Markets Served', value: '5', sub: 'Cin · Col · Lex · Nash · National', accent: false },
  { label: 'Revenue Mix', value: '50/50', sub: 'Fire alarm / Security', accent: false },
  { label: 'Business Model', value: 'Independent', sub: 'No PE ownership', accent: false },
  { label: 'RMR Base', value: '<20%', sub: 'Recurring monthly revenue', accent: false },
  { label: 'Core Strength', value: 'Fire Alarm', sub: 'Licensed, AHJ relationships', accent: true },
  { label: 'Differentiation', value: 'GAS Factor', sub: 'Get After Stuff — culture of speed', accent: false },
]

export function Slide02() {
  return (
    <SlideLayout actNumber={1} actLabel="ACT 1: THE WORLD YOU BUILT" title="IPS Today: A Company That's Winning" speaker="AJ McKean">
      <div className="h-full flex flex-col gap-[2%]">
        {/* Metric grid */}
        <div className="flex-1 grid grid-cols-4 gap-[1.5%]">
          {metrics.map((m) => (
            <div
              key={m.label}
              className={`rounded-xl border-2 flex flex-col justify-center px-[6%] py-[4%] ${
                m.accent ? 'border-[#1B3A6B] bg-[#f0f1fb]' : 'border-[#e8e9f0] bg-[#f9f9fb]'
              }`}
            >
              <p className="text-[0.75vw] font-semibold text-[#80848f] uppercase tracking-wider mb-[4%]">{m.label}</p>
              <p className={`text-[2.4vw] font-extrabold leading-none ${m.accent ? 'text-[#1B3A6B]' : 'text-[#1a1a1f]'}`}>{m.value}</p>
              <p className="text-[0.75vw] text-[#80848f] mt-[4%]">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[2%] flex items-center gap-[3%] flex-shrink-0">
          <div className="w-[0.5%] self-stretch bg-[#1B3A6B] rounded-full flex-shrink-0" />
          <p className="text-white text-[1vw] leading-relaxed">
            <span className="font-bold text-[#e8edf7]">Bottom line:</span> IPS is a rare animal — an independent integrator at scale, growing organically, with a genuine fire alarm moat. This is the foundation. Everything that follows is about protecting and extending it.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
