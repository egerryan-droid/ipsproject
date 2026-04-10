import { SlideLayout } from '../SlideLayout'

export function Slide09() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="The Convergence Squeeze" speaker="Kyu Hyuk Choi">
      <div className="h-full flex flex-col">
        {/* Main content: left panels + right sidebar */}
        <div className="flex-1 flex min-h-0 gap-[2%]">

          {/* Left: 3 stacked panels — ~75% width */}
          <div className="flex-1 flex flex-col gap-[1.5%] min-h-0">

            {/* TOP PANEL — red */}
            <div
              className="flex-1 rounded-xl border-2 px-[4%] py-[3%] flex flex-col justify-center"
              style={{ backgroundColor: '#fde8e8', borderColor: '#ef4444' }}
            >
              <div className="flex items-center gap-[2%] mb-[1.5%]">
                <p className="text-[1vw] font-bold text-[#1a1a1f] leading-tight">
                  ABOVE: PE-Backed Converged Platforms
                </p>
                <span
                  className="text-[0.6vw] font-bold uppercase tracking-wide px-[2%] py-[0.5%] rounded-full flex-shrink-0"
                  style={{ color: '#ef4444', backgroundColor: '#fca5a5' }}
                >
                  PRESSING DOWN
                </span>
              </div>
              <p className="text-[0.75vw] font-semibold text-[#374151] mb-[1.5%]">
                Convergint + Deloitte cyber | Pye-Barker 57 acq/yr, $6.1B valuation | 261 deals in 3 years, pace tripled | Allied Universal $20B+
              </p>
              <p className="text-[0.75vw] text-[#4b5563] leading-relaxed">
                They offer everything IPS offers PLUS cybersecurity, IT managed services, national scale, and subscription platforms.
              </p>
            </div>

            {/* Down arrows badge */}
            <div className="flex justify-center flex-shrink-0">
              <span
                className="text-[0.7vw] font-bold text-white px-[2%] py-[0.75%] rounded-full"
                style={{ backgroundColor: '#1a1a1f' }}
              >
                &#x25BC; &#x25BC; &#x25BC;
              </span>
            </div>

            {/* MIDDLE PANEL — accent blue */}
            <div
              className="flex-1 rounded-xl border-2 px-[4%] py-[3%] flex flex-col justify-center shadow-md"
              style={{ backgroundColor: '#f0f1fb', borderColor: '#1B3A6B' }}
            >
              <p className="text-[1vw] font-bold text-[#1B3A6B] leading-tight mb-[1%]">
                MIDDLE: IPS ($55M)
              </p>
              <p className="text-[0.75vw] font-semibold text-[#1a1a1f] mb-[1.5%]">
                Full-service regional fire + security integrator
              </p>
              <p className="text-[0.75vw] text-[#374151] leading-relaxed mb-[1%]">
                Strong today -- but addressable market narrows if you stay here
              </p>
              <p className="text-[0.75vw] text-[#1B3A6B] font-bold leading-relaxed mb-[1%]">
                Must fund 42% partner buyout without PE — growth isn&apos;t optional
              </p>
              <p className="text-[0.75vw] text-[#1B3A6B] font-semibold leading-relaxed">
                IPS owns this space today. The moat is real. The window is 3-5 years.
              </p>
            </div>

            {/* Up arrows badge */}
            <div className="flex justify-center flex-shrink-0">
              <span
                className="text-[0.7vw] font-bold text-white px-[2%] py-[0.75%] rounded-full"
                style={{ backgroundColor: '#1a1a1f' }}
              >
                &#x25B2; &#x25B2; &#x25B2;
              </span>
            </div>

            {/* BOTTOM PANEL — gray */}
            <div
              className="flex-1 rounded-xl border-2 px-[4%] py-[3%] flex flex-col justify-center"
              style={{ backgroundColor: '#f3f4f6', borderColor: '#d1d5db' }}
            >
              <div className="flex items-center gap-[2%] mb-[1.5%]">
                <p className="text-[1vw] font-bold text-[#374151] leading-tight">
                  BELOW: Cloud-Native Disruptors + IT/EC Entrants
                </p>
                <span
                  className="text-[0.6vw] font-bold uppercase tracking-wide px-[2%] py-[0.5%] rounded-full flex-shrink-0"
                  style={{ color: '#6b7280', backgroundColor: '#e5e7eb' }}
                >
                  PRESSING UP
                </span>
              </div>
              <p className="text-[0.75vw] font-semibold text-[#374151] mb-[1.5%]">
                Verkada $5.8B | Brivo+Eagle Eye merged | ECs adding low-voltage | IT/MSPs entering security | ArchKey, EMCOR, IES, Apollo building fire in-house
              </p>
              <p className="text-[0.75vw] text-[#4b5563] leading-relaxed">
                Cloud-first and subscription-first from below. PE-backed ECs vertically integrating from inside — buying the channel IPS sells through.
              </p>
            </div>

          </div>

          {/* Right sidebar: stats — ~25% width */}
          <div className="w-[24%] flex-shrink-0 flex flex-col gap-[3%]">
            <p className="text-[0.65vw] font-bold uppercase tracking-widest text-[#1B3A6B]">
              THE MATH
            </p>

            {/* Stat cards */}
            {[
              { value: '$9.24B+', label: 'Disclosed PE platform debt', color: '#1B3A6B' },
              { value: '$680M', label: 'Pye-Barker undrawn capacity', color: '#1B3A6B' },
              { value: '261', label: 'Deals in 3 years — 17 in OH/KY/TN. Pace tripled.', color: '#1B3A6B' },
              { value: '7-10%', label: 'IPS RMR vs. 25%+ benchmark', color: '#C8202D' },
            ].map((stat) => (
              <div
                key={stat.value}
                className="flex-1 rounded-xl border border-gray-200 bg-white px-[8%] py-[5%] flex flex-col justify-center"
              >
                <p
                  className="text-[2.2vw] font-extrabold leading-none mb-[4%]"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-[0.65vw] text-[#374151] leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom dark callout bar */}
        <div
          className="flex-shrink-0 px-[4%] py-[2%] rounded-xl mt-[1%]"
          style={{ backgroundColor: '#1a1a1f' }}
        >
          <p className="text-[0.8vw] text-white leading-relaxed">
            The ceiling is lowering. The floor is rising. The walls are closing in. The partner buyout makes this existential: grow revenue and RMR fast enough to fund it internally, or the PE offer becomes the only path.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
