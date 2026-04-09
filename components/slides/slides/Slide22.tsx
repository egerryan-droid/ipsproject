import { SlideLayout } from '../SlideLayout'

// Slide 22 — The Industry Landscape
// Defines the two industries (fire protection + electronic security) before showing convergence

const fireSectors = [
  { label: 'Fire Alarm & Detection', note: '$10.1B → $14.1B U.S. market · 4.2–5.2% CAGR' },
  { label: 'Fire Suppression', note: 'Sprinkler, clean agent, foam systems' },
  { label: 'Inspection & Testing', note: 'Highest CAGR through 2030 — code-mandated, non-cyclical, driven by installed base' },
  { label: 'Emergency Systems', note: 'Exit lighting, mass notification, ERCES' },
]

const securitySectors = [
  { label: 'Access Control', note: 'ACaaS: $1.34B → $3.06B by 2029 · 17.9% CAGR' },
  { label: 'Video Surveillance', note: 'VSaaS: $5.09B → $10.74B by 2029 · 16.1% CAGR' },
  { label: 'Intrusion Detection', note: 'Sensors, panels, monitoring services' },
  { label: 'Managed Services', note: 'Remote monitoring, health checks, helpdesk — growing 3–4× base market' },
]

const bottomStats = [
  { value: '$256B+', label: 'Combined U.S. addressable market' },
  { value: '$18.4B', label: 'SDM Top 100 revenue (2024 record, +18% YoY)' },
  { value: '6.5–6.6%', label: 'Global CAGR (both industries)' },
  { value: '16–18%', label: 'Cloud/XaaS CAGR' },
  { value: '$130.4B', label: 'Global fire protection by 2030' },
]

export function Slide22() {
  return (
    <SlideLayout actNumber={1} actLabel="ACT 1: THE PLAYING FIELD" title="Two Industries, One Set of Forces" speaker="AJ McKean">
      <div className="h-full flex flex-col">
        {/* Two-column industry definition */}
        <div className="flex-1 flex gap-0 pt-[1%] pb-[1%] min-h-0">
          {/* Fire Protection */}
          <div className="flex-1 flex flex-col pr-[2%]">
            <div className="flex items-center gap-[2%] mb-[2%]">
              <div className="w-[0.6%] self-stretch bg-[#C8202D] rounded-full flex-shrink-0" />
              <div>
                <p className="text-[0.65vw] font-bold text-[#C8202D] uppercase tracking-widest">NAICS 238210</p>
                <h3 className="text-[1.3vw] font-extrabold text-[#1a1a1f] leading-tight">Fire Protection</h3>
                <p className="text-[0.75vw] text-[#80848f]">$88.9B global → $130.4B by 2030 · U.S. $25.9B → $32.3B · 6.6% CAGR</p>
              </div>
            </div>
            <div className="flex flex-col gap-[1.5%] flex-1">
              {fireSectors.map((s) => (
                <div key={s.label} className="bg-red-50 border border-red-100 rounded-xl px-[4%] py-[2.5%] flex flex-col justify-center">
                  <p className="text-[0.9vw] font-bold text-[#1a1a1f]">{s.label}</p>
                  <p className="text-[0.7vw] text-[#80848f] mt-[1%]">{s.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex flex-col items-center justify-center px-[1.5%] gap-[3%]">
            <div className="flex-1 w-px bg-gray-200" />
            <div className="bg-[#1B3A6B] rounded-full w-[3vw] h-[3vw] flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white font-black text-[0.7vw] text-center leading-none">+</span>
            </div>
            <div className="flex-1 w-px bg-gray-200" />
          </div>

          {/* Electronic Security */}
          <div className="flex-1 flex flex-col pl-[2%]">
            <div className="flex items-center gap-[2%] mb-[2%]">
              <div className="w-[0.6%] self-stretch bg-[#2563eb] rounded-full flex-shrink-0" />
              <div>
                <p className="text-[0.65vw] font-bold text-[#2563eb] uppercase tracking-widest">NAICS 561621</p>
                <h3 className="text-[1.3vw] font-extrabold text-[#1a1a1f] leading-tight">Electronic Security</h3>
                <p className="text-[0.75vw] text-[#80848f]">$147.4B global → $216.4B by 2030 · U.S. $33.2B → $40.3B · 6.5% CAGR</p>
              </div>
            </div>
            <div className="flex flex-col gap-[1.5%] flex-1">
              {securitySectors.map((s) => (
                <div key={s.label} className="bg-blue-50 border border-blue-100 rounded-xl px-[4%] py-[2.5%] flex flex-col justify-center">
                  <p className="text-[0.9vw] font-bold text-[#1a1a1f]">{s.label}</p>
                  <p className="text-[0.7vw] text-[#80848f] mt-[1%]">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Convergence callout */}
        <div className="flex-shrink-0 my-[1%] rounded-lg px-[3%] py-[1.5%] bg-[#f5f5f8] border-l-4 border-[#1B3A6B]">
          <p className="text-[0.6vw] text-[#1a1a1f] leading-relaxed">
            Every system IPS installs today becomes a maintenance contract tomorrow. Different regulation, different barriers &mdash; but same buildings, same EC channel, same IP infrastructure, same labor pool, same PE capital consolidating both
          </p>
        </div>

        {/* Bottom stats bar */}
        <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[2%] grid grid-cols-5 gap-[2%] flex-shrink-0">
          {bottomStats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-[1.5vw] font-extrabold text-[#e8edf7]">{s.value}</p>
              <p className="text-[0.6vw] text-white/50 mt-[2%] leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Source citation */}
        <div className="pt-[1%] flex-shrink-0">
          <p className="text-[0.55vw] text-[#80848f] text-center">
            Sources: Plunkett Research via Xavier/Gale (NAICS 561621, 238210) · SDM Magazine Top 100 (2024) · MarketsandMarkets · Grand View Research · IBISWorld
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
