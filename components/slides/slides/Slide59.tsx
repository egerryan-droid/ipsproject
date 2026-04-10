import { SlideLayout } from '../SlideLayout'

// PE in Electronic Security — who owns what, how much capital, what it means

const players = [
  {
    firm: 'Leonard Green / Convergint',
    revenue: '$3.0B+',
    model: '22+ acquisitions. Deloitte cyber partnership. Full-stack platform. $2.70B total debt, now $3.0B+ current.',
    geography: 'Cincinnati + Nashville (entered 2025)',
    threat: 'Most complete converged platform. Cyber + cloud + fire + security. Already in IPS markets.',
    color: '#C8202D',
  },
  {
    firm: 'GTCR / Everon (ex-ADT Commercial)',
    revenue: '$781.7M',
    model: '$100M acquisition facility (Feb 2025). 8 acquisitions since Oct 2023. SimpliSafe bolt-on.',
    geography: 'Columbus + Louisville + Newtech Systems Ashland KY (Dec 2023)',
    threat: 'Direct IPS geography overlap. Subscription-first model. Active M&A in KY/OH corridor.',
    color: '#C8202D',
  },
  {
    firm: 'Wind Point / Pavion',
    revenue: '$625M',
    model: '15+ sister companies. Regional roll-up strategy.',
    geography: 'Cincinnati office',
    threat: 'Already in IPS\u2019s home market. Sister company network for cross-selling.',
    color: '#d96619',
  },
  {
    firm: 'Honeywell / LenelS2 + Onity',
    revenue: '$4.95B access',
    model: 'Strategic (not PE). Full stack: fire + security + building automation.',
    geography: 'National \u2014 manufacturer + integrator',
    threat: 'Vertical integration from OEM level. Own the hardware, software, and service layer.',
    color: '#1B3A6B',
  },
  {
    firm: 'Verkada (VC-backed)',
    revenue: '$700M',
    model: 'Direct-to-end-user. $5.8B valuation. 40% growth. Subscription-only.',
    geography: 'National direct \u2014 bypasses integrators',
    threat: 'Not PE roll-up but same effect: capturing security spend without the integrator channel.',
    color: '#80848f',
  },
  {
    firm: 'Brivo + Eagle Eye (merger)',
    revenue: 'Combined',
    model: 'Merged Dec 2025. Combined cloud access control + video platform.',
    geography: 'National \u2014 cloud-native platform',
    threat: 'Cloud-first converged security platform. Eliminates need for on-premise integrator model.',
    color: '#0d8090',
  },
]

export function Slide59() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE CONVERGENCE SQUEEZE" title="PE in Electronic Security" speaker="Ryan Eger">
      <div className="h-full flex flex-col">
        <p className="text-[0.7vw] text-[#80848f] italic mb-[1.5%] flex-shrink-0">
          Security&apos;s low barriers and fragmentation made it the first industry PE consolidated. The platforms are now mature and expanding into IPS geography.
        </p>

        {/* Player cards */}
        <div className="flex-1 flex flex-col gap-[1.2%] min-h-0">
          {players.map((p) => (
            <div key={p.firm} className="flex rounded-lg border border-gray-200 bg-white overflow-hidden">
              <div className="w-[0.4%] flex-shrink-0" style={{ backgroundColor: p.color }} />
              <div className="w-[12%] flex flex-col items-center justify-center flex-shrink-0 bg-gray-50 px-[1%]">
                <span className="text-[1.3vw] font-extrabold leading-none" style={{ color: p.color }}>{p.revenue}</span>
              </div>
              <div className="flex-1 flex items-center px-[2%] py-[1.2%] gap-[3%]">
                <div className="flex-1">
                  <p className="text-[0.7vw] font-extrabold text-[#1a1a1f] leading-tight">{p.firm}</p>
                  <p className="text-[0.52vw] text-[#80848f] mt-[0.5%]">{p.model}</p>
                </div>
                <div className="w-[15%] flex-shrink-0">
                  <p className="text-[0.48vw] font-bold text-[#80848f] uppercase tracking-wider mb-[2%]">Geography</p>
                  <p className="text-[0.52vw] text-[#1a1a1f] leading-snug">{p.geography}</p>
                </div>
                <div className="w-[30%] flex-shrink-0">
                  <p className="text-[0.48vw] font-bold uppercase tracking-wider mb-[2%]" style={{ color: p.color }}>IPS Impact</p>
                  <p className="text-[0.52vw] text-[#1a1a1f] leading-snug">{p.threat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key stats bar */}
        <div className="flex-shrink-0 mt-[1.5%] grid grid-cols-4 gap-[1.5%]">
          {[
            { val: '242', label: 'Security sector transactions in 2025', color: '#C8202D' },
            { val: '+24%', label: 'YoY increase in deal volume', color: '#C8202D' },
            { val: '$7.3B+', label: 'Under one PE firm (Leonard Green)', color: '#1B3A6B' },
            { val: '82%', label: 'Planning cloud access control', color: '#0d8090' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-lg px-[3%] py-[1.5%] text-center">
              <p className="text-[1.2vw] font-extrabold leading-none" style={{ color: s.color }}>{s.val}</p>
              <p className="text-[0.48vw] text-[#80848f] mt-[3%] leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex-shrink-0 pt-[0.5%]">
          <p className="text-[0.45vw] text-[#80848f] text-right">
            Sources: PitchBook &middot; Capstone Partners Feb 2026 &middot; SDM Top 100 (2024) &middot; Genetec State of Physical Security 2026
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
