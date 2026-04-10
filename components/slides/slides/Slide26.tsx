import { SlideLayout } from '../SlideLayout'

export function Slide26() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="The Vertical Integration Thesis: Own the Door, Own the RMR" speaker="Ryan Eger">
      <div className="h-full flex flex-col">
        {/* Subtitle */}
        <p className="text-[0.75vw] text-[#80848f] uppercase tracking-widest font-bold mb-[1.5%] flex-shrink-0">
          THE PE PLAYBOOK — 3-STEP VALUE EXTRACTION
        </p>

        {/* 3-step flow */}
        <div className="flex items-stretch gap-[1%] flex-1 min-h-0">
          {/* Step 1 */}
          <div className="flex-1 rounded-xl border-2 border-[#1B3A6B] bg-[#eff6ff] flex flex-col justify-center px-[3%] py-[2%]">
            <div className="flex items-center gap-[4%] mb-[4%]">
              <div
                className="w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#1B3A6B' }}
              >
                <span className="text-white font-extrabold text-[1vw]">1</span>
              </div>
              <p className="text-[1vw] font-extrabold text-[#1a1a1f] leading-tight">
                EC Wins Scope
              </p>
            </div>
            <p className="text-[0.7vw] text-[#1a1a1f] leading-relaxed mb-[3%]">
              PE buys the electrical contractor &mdash; gets the GC relationship, the job site presence, and the low-voltage conduit pull.
            </p>
            <div className="bg-white rounded-lg px-[4%] py-[2%] border border-[#bfdbfe]">
              <p className="text-[0.6vw] text-[#1B3A6B] font-bold">WHO&apos;S DOING IT</p>
              <p className="text-[0.65vw] text-[#1a1a1f] mt-[1%]">ArchKey, EMCOR, IES, State Group (Apollo)</p>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="flex items-center justify-center flex-shrink-0 w-[4%]">
            <span className="text-[2vw] text-[#1B3A6B] font-bold">&rarr;</span>
          </div>

          {/* Step 2 */}
          <div className="flex-1 rounded-xl border-2 border-[#d97706] bg-[#fffbeb] flex flex-col justify-center px-[3%] py-[2%]">
            <div className="flex items-center gap-[4%] mb-[4%]">
              <div
                className="w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#d97706' }}
              >
                <span className="text-white font-extrabold text-[1vw]">2</span>
              </div>
              <p className="text-[1vw] font-extrabold text-[#1a1a1f] leading-tight">
                Builds Fire/Security In-House
              </p>
            </div>
            <p className="text-[0.7vw] text-[#1a1a1f] leading-relaxed mb-[3%]">
              Acquires or hires fire alarm &amp; security capability. Stops subcontracting to companies like IPS. Captures the full project margin.
            </p>
            <div className="bg-white rounded-lg px-[4%] py-[2%] border border-[#fde68a]">
              <p className="text-[0.6vw] text-[#d97706] font-bold">EVIDENCE</p>
              <p className="text-[0.65vw] text-[#1a1a1f] mt-[1%]">ArchKey hiring NICET estimators now; IES Comms +56% YoY</p>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="flex items-center justify-center flex-shrink-0 w-[4%]">
            <span className="text-[2vw] text-[#d97706] font-bold">&rarr;</span>
          </div>

          {/* Step 3 */}
          <div className="flex-1 rounded-xl border-2 border-[#059669] bg-[#ecfdf5] flex flex-col justify-center px-[3%] py-[2%]">
            <div className="flex items-center gap-[4%] mb-[4%]">
              <div
                className="w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#059669' }}
              >
                <span className="text-white font-extrabold text-[1vw]">3</span>
              </div>
              <p className="text-[1vw] font-extrabold text-[#1a1a1f] leading-tight">
                Captures Monthly RMR
              </p>
            </div>
            <p className="text-[0.7vw] text-[#1a1a1f] leading-relaxed mb-[3%]">
              Monitoring, inspection contracts, and managed services generate recurring revenue &mdash; the real prize PE is after.
            </p>
            <div className="bg-white rounded-lg px-[4%] py-[2%] border border-[#a7f3d0]">
              <p className="text-[0.6vw] text-[#059669] font-bold">VALUATION IMPACT</p>
              <p className="text-[0.65vw] text-[#1a1a1f] mt-[1%]">RMR shifts multiples from 3-4x to 6-10x EBITDA</p>
            </div>
          </div>
        </div>

        {/* APi Group proof section */}
        <div className="flex-shrink-0 bg-[#1a1a1f] rounded-xl mt-[2%] px-[4%] py-[2.5%] flex items-center justify-between">
          <div className="flex-1">
            <p className="text-[0.65vw] text-[#93c5fd] font-bold uppercase tracking-widest mb-[1%]">
              PROOF OF CONCEPT: APi GROUP
            </p>
            <p className="text-[0.85vw] text-white font-bold leading-snug">
              Acquired Chubb Fire &amp; Security for $3.1B &mdash; converted from EC to world&apos;s largest life safety provider
            </p>
            <p className="text-[0.7vw] text-[#d1d5db] mt-[1%] leading-relaxed">
              Now $7.911B revenue &middot; $21.25B EV &middot; 16.80x EV/EBITDA &middot; $1.265B EBITDA &middot; 29,000 employees &middot; SOFR+175 (tightest spread in industry).
              Every $1 of inspection generates $3&ndash;4 in annual service revenue. The thesis works.
            </p>
          </div>
          <div className="flex-shrink-0 ml-[3%] flex flex-col items-center">
            <p className="text-[2.8vw] font-extrabold leading-none" style={{ color: '#34d399' }}>$7.911B</p>
            <p className="text-[0.6vw] text-[#9ca3af] mt-[2%]">APi Group revenue</p>
            <p className="text-[0.5vw] text-[#9ca3af] mt-[1%]">Mkt Cap $19.09B (+95.92% YoY)</p>
          </div>
        </div>

        {/* Source */}
        <div className="flex-shrink-0 pt-[0.75%]">
          <p className="text-[0.5vw] text-[#80848f] text-right">
            Sources: APi Group 10-K &middot; IPS Leadership Meetings &middot; PitchBook &middot; FMI Capital Advisors
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
