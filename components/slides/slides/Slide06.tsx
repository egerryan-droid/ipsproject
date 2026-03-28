import { SlideLayout } from '../SlideLayout'

export function Slide06() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="The Convergence Timeline: Three Waves" speaker="Katy Peat">
      <div className="h-full flex flex-col gap-[1.5%]">
        {/* Three columns */}
        <div className="flex-1 grid grid-cols-3 gap-[2%] min-h-0">

          {/* WAVE 1 */}
          <div className="bg-white border border-gray-200 rounded-xl flex flex-col overflow-hidden">
            {/* Label */}
            <div className="px-[6%] pt-[5%] pb-[2%]">
              <p className="text-[0.7vw] font-semibold uppercase tracking-widest text-gray-400 mb-[2%]">
                WAVE 1
              </p>
              <p className="text-[2.5vw] font-extrabold text-[#1B3A6B] leading-none mb-[2%]">
                2024-2026
              </p>
              <p className="text-[1vw] font-bold text-[#1a1a1f] leading-tight">
                Security + IT / Cyber
              </p>
            </div>
            {/* Status badge */}
            <div className="mx-0 px-[6%] py-[1.5%] bg-[#fff7ed] w-full">
              <p className="text-[0.7vw] font-bold text-[#C8202D] text-center uppercase tracking-wide">
                HAPPENING NOW
              </p>
            </div>
            {/* Bullets */}
            <div className="px-[6%] py-[3%] flex-1 flex flex-col gap-[2.5%]">
              {[
                'IT departments becoming the primary security buyer',
                'Cloud platforms (Brivo, Verkada) blurring IT and security',
                'Convergint adds cybersecurity capability via Deloitte partnership',
                'Managed services = IT service model applied to physical security',
              ].map((item) => (
                <div key={item} className="flex items-start gap-[4%]">
                  <span className="text-[0.75vw] text-[#1a1a1f] mt-[0.1vw] flex-shrink-0">&#x2022;</span>
                  <span className="text-[0.75vw] text-[#1a1a1f] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WAVE 2 */}
          <div className="bg-white border border-gray-200 rounded-xl flex flex-col overflow-hidden">
            <div className="px-[6%] pt-[5%] pb-[2%]">
              <p className="text-[0.7vw] font-semibold uppercase tracking-widest text-gray-400 mb-[2%]">
                WAVE 2
              </p>
              <p className="text-[2.5vw] font-extrabold text-[#f59e0b] leading-none mb-[2%]">
                2026-2028
              </p>
              <p className="text-[1vw] font-bold text-[#1a1a1f] leading-tight">
                Security + Building Automation
              </p>
            </div>
            {/* Status badge */}
            <div className="mx-0 px-[6%] py-[1.5%] bg-[#fff7ed] w-full">
              <p className="text-[0.7vw] font-bold text-[#C8202D] text-center uppercase tracking-wide">
                COMING SOON
              </p>
            </div>
            {/* Bullets */}
            <div className="px-[6%] py-[3%] flex-1 flex flex-col gap-[2.5%]">
              {[
                'IoT connecting fire, HVAC, access control, and video into one network',
                '71% of organizations already operating unified building systems',
                'Smart building platforms managing everything behind the walls',
                'Single-pane-of-glass monitoring across all building systems',
              ].map((item) => (
                <div key={item} className="flex items-start gap-[4%]">
                  <span className="text-[0.75vw] text-[#1a1a1f] mt-[0.1vw] flex-shrink-0">&#x2022;</span>
                  <span className="text-[0.75vw] text-[#1a1a1f] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WAVE 3 */}
          <div className="bg-white border border-gray-200 rounded-xl flex flex-col overflow-hidden">
            <div className="px-[6%] pt-[5%] pb-[2%]">
              <p className="text-[0.7vw] font-semibold uppercase tracking-widest text-gray-400 mb-[2%]">
                WAVE 3
              </p>
              <p className="text-[2.5vw] font-extrabold text-[#1a1a1f] leading-none mb-[2%]">
                2028-2034
              </p>
              <p className="text-[1vw] font-bold text-[#1a1a1f] leading-tight">
                Fire + Everything Else
              </p>
            </div>
            {/* Status badge */}
            <div className="mx-0 px-[6%] py-[1.5%] bg-[#f3f4f6] w-full">
              <p className="text-[0.7vw] font-bold text-gray-500 text-center uppercase tracking-wide">
                SLOW BUT CERTAIN
              </p>
            </div>
            {/* Bullets */}
            <div className="px-[6%] py-[3%] flex-1 flex flex-col gap-[2.5%]">
              {[
                'NFPA 72 cyber requirements enforced (Chapter 11 mandate)',
                'Cloud-connected fire monitoring growing at 8.2% CAGR',
                'Addressable fire systems fastest-growing at 7.5% CAGR 2025-2035',
                'Fire panels become nodes on building intelligence networks',
              ].map((item) => (
                <div key={item} className="flex items-start gap-[4%]">
                  <span className="text-[0.75vw] text-[#1a1a1f] mt-[0.1vw] flex-shrink-0">&#x2022;</span>
                  <span className="text-[0.75vw] text-[#1a1a1f] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom callout */}
        <div
          className="flex-shrink-0 rounded-lg px-[3%] py-[2%] flex items-start gap-[2%]"
          style={{ backgroundColor: '#f5f5f8' }}
        >
          <div className="w-[0.35vw] self-stretch rounded-full flex-shrink-0 bg-[#1B3A6B]" />
          <div className="flex-1">
            <p className="text-[0.75vw] leading-relaxed text-[#1a1a1f]">
              <span className="text-[#1B3A6B] font-bold uppercase tracking-wide text-[0.65vw]">IPS POSITION: </span>
              Fire is the last piece to converge — that&apos;s your most valuable asset. But &apos;last&apos; does not mean &apos;never.&apos; The fire alarm moat buys you 3-5 years. The partner buyout requires growing enterprise value in exactly that window.
            </p>
          </div>
        </div>

        {/* Source */}
        <p className="flex-shrink-0 text-[0.6vw] text-gray-400 text-right">
          Source: Team PESTEL Workbook | Pete Keller Consultation (March 25, 2026) | NFPA 72 (2025)
        </p>
      </div>
    </SlideLayout>
  )
}
