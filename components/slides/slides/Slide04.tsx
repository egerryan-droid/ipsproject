import { SlideLayout } from '../SlideLayout'

export function Slide04() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE CONVERGENCE SQUEEZE" title="Two Industries Becoming One" speaker="Katy Peat">
      <div className="h-full flex flex-col">
        {/* Main body */}
        <div className="flex flex-1 overflow-hidden min-h-0">

          {/* LEFT: Venn diagram ~65% */}
          <div className="relative flex items-center justify-center" style={{ width: '65%', padding: '2% 2% 2% 2%' }}>

            {/* Left circle — dark navy/purple */}
            <div
              className="absolute rounded-full flex flex-col items-center justify-center"
              style={{
                width: '52%',
                height: '82%',
                background: '#1a1a4e',
                left: '2%',
                top: '9%',
                zIndex: 1,
              }}
            >
              <p className="font-bold text-white text-center leading-tight" style={{ fontSize: '0.95vw', paddingLeft: '12%', paddingRight: '38%' }}>
                FIRE &amp; LIFE SAFETY
              </p>
              <p className="font-extrabold text-white text-center" style={{ fontSize: '2.4vw', paddingLeft: '12%', paddingRight: '38%', marginTop: '3%' }}>
                $88.9B
              </p>
              <p className="text-white text-center" style={{ fontSize: '0.65vw', opacity: 0.8, paddingLeft: '12%', paddingRight: '38%', marginTop: '2%' }}>
                Global 2024 · 6.6% CAGR
              </p>
            </div>

            {/* Right circle — teal */}
            <div
              className="absolute rounded-full flex flex-col items-center justify-center"
              style={{
                width: '52%',
                height: '82%',
                background: '#0d9488',
                right: '14%',
                top: '9%',
                zIndex: 1,
              }}
            >
              <p className="font-bold text-white text-center leading-tight" style={{ fontSize: '0.95vw', paddingRight: '12%', paddingLeft: '38%' }}>
                ELECTRONIC SECURITY
              </p>
              <p className="font-extrabold text-white text-center" style={{ fontSize: '2.4vw', paddingRight: '12%', paddingLeft: '38%', marginTop: '3%' }}>
                $147.4B
              </p>
              <p className="text-white text-center" style={{ fontSize: '0.65vw', opacity: 0.8, paddingRight: '12%', paddingLeft: '38%', marginTop: '2%' }}>
                Global 2024 · 6.5% CAGR
              </p>
            </div>

            {/* Center overlap label */}
            <div
              className="absolute flex flex-col items-center justify-center text-center"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, width: '20%' }}
            >
              <p className="font-bold leading-tight" style={{ fontSize: '0.7vw', color: '#0f172a' }}>
                CONVERGED<br />BUILDING<br />INTELLIGENCE
              </p>
            </div>

            {/* Floating pill labels — right side */}
            <div
              className="absolute flex flex-col gap-[4%]"
              style={{ right: '2%', top: '18%', zIndex: 4 }}
            >
              <div
                className="rounded-full text-center"
                style={{ background: '#c7c9ef', padding: '2% 8%', fontSize: '0.6vw', color: '#1a1a4e', fontWeight: 600, whiteSpace: 'nowrap' }}
              >
                Cybersecurity
              </div>
              <div
                className="rounded-full text-center"
                style={{ background: '#c7c9ef', padding: '2% 8%', fontSize: '0.6vw', color: '#1a1a4e', fontWeight: 600, whiteSpace: 'nowrap' }}
              >
                IT Managed Services
              </div>
              <div
                className="rounded-full text-center"
                style={{ background: '#99e6de', padding: '2% 8%', fontSize: '0.6vw', color: '#0d4a46', fontWeight: 600, whiteSpace: 'nowrap' }}
              >
                Building Automation
              </div>
              <p className="text-center uppercase tracking-widest" style={{ fontSize: '0.5vw', color: '#80848f', marginTop: '4%' }}>
                ENTERING
              </p>
            </div>
          </div>

          {/* RIGHT: Data panel ~35% */}
          <div
            className="flex flex-col overflow-hidden flex-shrink-0"
            style={{ width: '35%', borderLeft: '1px solid #e8e9f0', padding: '3% 3% 2% 3%', background: '#fff' }}
          >
            <p className="uppercase tracking-widest font-bold" style={{ fontSize: '0.6vw', color: '#1B3A6B', marginBottom: '4%' }}>
              KEY DATA POINTS
            </p>

            {/* Stat cards */}
            <div className="flex flex-col gap-[3%] flex-1">

              <div className="rounded-xl" style={{ background: '#f5f5f8', padding: '4% 5%', border: '1px solid #e8e9f0' }}>
                <p className="font-extrabold leading-none" style={{ fontSize: '1.6vw', color: '#1B3A6B' }}>$256B+</p>
                <p className="leading-tight" style={{ fontSize: '0.65vw', color: '#1a1a1f', marginTop: '4%' }}>
                  IPS addressable market (NAICS 561621 + 238210)
                </p>
              </div>

              <div className="rounded-xl" style={{ background: '#f5f5f8', padding: '4% 5%', border: '1px solid #e8e9f0' }}>
                <p className="font-extrabold leading-none" style={{ fontSize: '1.6vw', color: '#1B3A6B' }}>16-18%</p>
                <p className="leading-tight" style={{ fontSize: '0.65vw', color: '#1a1a1f', marginTop: '4%' }}>
                  Cloud/XaaS CAGR vs. 4% base market growth
                </p>
              </div>

              <div className="rounded-xl" style={{ background: '#f5f5f8', padding: '4% 5%', border: '1px solid #e8e9f0' }}>
                <p className="font-extrabold leading-none" style={{ fontSize: '1.6vw', color: '#1B3A6B' }}>6.5–6.6%</p>
                <p className="leading-tight" style={{ fontSize: '0.65vw', color: '#1a1a1f', marginTop: '4%' }}>
                  Global CAGR for both fire protection and physical security (2024–2030)
                </p>
              </div>

              <div className="rounded-xl" style={{ background: '#f5f5f8', padding: '4% 5%', border: '1px solid #e8e9f0' }}>
                <p className="font-extrabold leading-none" style={{ fontSize: '1.6vw', color: '#1B3A6B' }}>NFPA 72</p>
                <p className="leading-tight" style={{ fontSize: '0.65vw', color: '#1a1a1f', marginTop: '4%' }}>
                  2025 edition now mandates cybersecurity for networked fire alarm systems
                </p>
              </div>

              <div className="rounded-xl" style={{ background: '#f5f5f8', padding: '4% 5%', border: '1px solid #e8e9f0' }}>
                <p className="font-extrabold leading-none" style={{ fontSize: '1.6vw', color: '#1B3A6B' }}>73%</p>
                <p className="leading-tight" style={{ fontSize: '0.65vw', color: '#1a1a1f', marginTop: '4%' }}>
                  require open architecture platforms · 71% already operating unified systems
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex-shrink-0 flex flex-col rounded-lg"
          style={{ background: '#f5f5f8', padding: '1.5% 3%', marginTop: '1%' }}
        >
          <div className="flex items-start gap-[1%]">
            <span className="font-bold flex-shrink-0" style={{ fontSize: '0.75vw', color: '#1B3A6B' }}>KEY INSIGHT:</span>
            <span style={{ fontSize: '0.75vw', color: '#1a1a1f' }}>
              You describe yourselves as 50% fire, 50% security. The market increasingly sees one market. IPS sits at the intersection of a $256B opportunity — 11.5× the average firm — but at $55M, that&apos;s still &lt;0.02% of TAM.
            </span>
          </div>
          <p style={{ fontSize: '0.55vw', color: '#80848f', marginTop: '0.5%' }}>
            Source: Plunkett Research via Xavier/Gale | NFPA 72 (2025) | Team PESTEL Workbook
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
