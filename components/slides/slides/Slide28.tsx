import { SlideLayout } from '../SlideLayout'

export function Slide28() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="Updated Convergence Map: Three Fronts" speaker="Ryan Eger">
      <div className="h-full flex flex-col gap-[1.2%]">

        {/* FRONT 1 — Red: PE Fire/Security */}
        <div
          className="flex-1 rounded-xl border-2 px-[4%] flex items-center justify-between"
          style={{ backgroundColor: '#fef2f2', borderColor: '#ef4444' }}
        >
          <div className="flex items-center gap-[2%]">
            <span
              className="text-[0.6vw] font-bold uppercase tracking-wide px-[1.5%] py-[0.4%] rounded-full flex-shrink-0"
              style={{ color: '#fff', backgroundColor: '#ef4444' }}
            >
              FRONT 1
            </span>
            <div>
              <p className="text-[1vw] font-extrabold text-[#1a1a1f] leading-tight">
                PE Fire &amp; Security Platforms
              </p>
              <p className="text-[0.7vw] text-[#80848f] mt-[1%]">
                Convergint &middot; Pye-Barker &middot; Everon &middot; Pavion &middot; Sciens
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[1.6vw] font-bold" style={{ color: '#ef4444' }}>&darr;</span>
            <span className="text-[0.55vw] font-bold uppercase" style={{ color: '#ef4444' }}>Pressing down</span>
          </div>
        </div>

        {/* FRONT 3 — Orange: PE Electrical Contractors */}
        <div
          className="flex-1 rounded-xl border-2 px-[4%] flex items-center justify-between"
          style={{ backgroundColor: '#fffbeb', borderColor: '#f59e0b' }}
        >
          <div className="flex items-center gap-[2%]">
            <span
              className="text-[0.6vw] font-bold uppercase tracking-wide px-[1.5%] py-[0.4%] rounded-full flex-shrink-0"
              style={{ color: '#fff', backgroundColor: '#f59e0b' }}
            >
              FRONT 3
            </span>
            <div>
              <p className="text-[1vw] font-extrabold text-[#1a1a1f] leading-tight">
                PE Electrical Contractors
              </p>
              <p className="text-[0.7vw] text-[#80848f] mt-[1%]">
                ArchKey &middot; EMCOR &middot; IES Holdings &middot; State Group (Apollo)
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[1.6vw] font-bold" style={{ color: '#f59e0b' }}>&rarr;</span>
            <span className="text-[0.55vw] font-bold uppercase" style={{ color: '#f59e0b' }}>Building in</span>
          </div>
        </div>

        {/* IPS CENTER */}
        <div
          className="rounded-xl border-2 px-[4%] py-[2.5%] flex items-center justify-center shadow-lg"
          style={{ backgroundColor: '#f0f4fa', borderColor: '#1B3A6B', flex: '1.4' }}
        >
          <div className="text-center">
            <p className="text-[0.65vw] font-bold uppercase tracking-widest mb-[1%]" style={{ color: '#1B3A6B' }}>
              THE SQUEEZE POINT
            </p>
            <p className="text-[1.6vw] font-extrabold leading-tight" style={{ color: '#1B3A6B' }}>
              IPS &mdash; $55M Independent
            </p>
            <p className="text-[0.75vw] text-[#1a1a1f] mt-[1%]">
              Full-service regional fire + security integrator &mdash; now pressured from three directions simultaneously
            </p>
            <div className="flex items-center justify-center gap-[4%] mt-[2%]">
              <span className="text-[0.6vw] font-bold text-[#ef4444] bg-[#fef2f2] px-[1.5%] py-[0.3%] rounded">
                &darr; From above
              </span>
              <span className="text-[0.6vw] font-bold text-[#f59e0b] bg-[#fffbeb] px-[1.5%] py-[0.3%] rounded">
                &larr; From the side
              </span>
              <span className="text-[0.6vw] font-bold text-[#0d9488] bg-[#f0fdfa] px-[1.5%] py-[0.3%] rounded">
                &uarr; From below
              </span>
            </div>
          </div>
        </div>

        {/* FRONT 2 — Teal: Cloud/Managed Security */}
        <div
          className="flex-1 rounded-xl border-2 px-[4%] flex items-center justify-between"
          style={{ backgroundColor: '#f0fdfa', borderColor: '#14b8a6' }}
        >
          <div className="flex items-center gap-[2%]">
            <span
              className="text-[0.6vw] font-bold uppercase tracking-wide px-[1.5%] py-[0.4%] rounded-full flex-shrink-0"
              style={{ color: '#fff', backgroundColor: '#14b8a6' }}
            >
              FRONT 2
            </span>
            <div>
              <p className="text-[1vw] font-extrabold text-[#1a1a1f] leading-tight">
                Cloud &amp; Managed Security
              </p>
              <p className="text-[0.7vw] text-[#80848f] mt-[1%]">
                Verkada &middot; Brivo &middot; Cyber firms &middot; IT/MSP entrants
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[0.55vw] font-bold uppercase" style={{ color: '#14b8a6' }}>Pressing up</span>
            <span className="text-[1.6vw] font-bold" style={{ color: '#14b8a6' }}>&uarr;</span>
          </div>
        </div>

      </div>
    </SlideLayout>
  )
}
