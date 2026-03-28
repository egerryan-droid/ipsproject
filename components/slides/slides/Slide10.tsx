import { SlideLayout } from '../SlideLayout'

const moatCards = [
  {
    icon: '🔐',
    title: 'Licensed Expertise',
    body: 'NICET-certified techs, AHJ relationships built over years. PE platforms can\'t replicate this overnight.',
  },
  {
    icon: '📋',
    title: 'Code Compliance Moat',
    body: 'Fire alarm is the most regulated system in any building. Every change needs licensed sign-off.',
  },
  {
    icon: '🔄',
    title: 'Inspection Revenue Lock',
    body: 'Annual inspections legally mandated. Every inspection is a customer touch point — and a cross-sell.',
  },
  {
    icon: '🏢',
    title: 'AHJ Relationships',
    body: 'Authority Having Jurisdiction trust takes years to build. New entrants face real barriers.',
  },
  {
    icon: '🚀',
    title: 'Trojan Horse Effect',
    body: 'Fire alarm gets you into the building. Once in, you own the relationship for everything else.',
  },
  {
    icon: '⏱️',
    title: '3-5 Year Window',
    body: 'NFPA 72 (2025) starts the clock. PE integration is coming. But you have the runway to act first.',
  },
]

export function Slide10() {
  return (
    <SlideLayout actNumber={3} actLabel="ACT 3: YOUR MOAT AND YOUR GAPS" title="The Fire Alarm Moat: Your Offensive Weapon" speaker="Zahria Tucker">
      <div className="h-full flex flex-col gap-[2%]">
        {/* Moat card grid */}
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-[1.5%]">
          {moatCards.map((card) => (
            <div key={card.title} className="bg-[#f0fdf4] border-2 border-[#86efac] rounded-xl px-[4%] py-[3%] flex flex-col gap-[1.5%]">
              <span className="text-[1.6vw]">{card.icon}</span>
              <p className="text-[0.9vw] font-bold text-[#1a1a1f]">{card.title}</p>
              <p className="text-[0.75vw] text-[#80848f] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Dark callout */}
        <div className="bg-[#1a1a1f] rounded-xl px-[3%] py-[2%] flex items-center gap-[2%] flex-shrink-0">
          <div className="w-[0.4%] self-stretch bg-[#059669] rounded-full flex-shrink-0" />
          <p className="text-white text-[0.9vw] leading-relaxed">
            <span className="text-[#6ee7b7] font-bold">Fire alarm isn&apos;t just your defense — it&apos;s your Trojan horse.</span> Once you install fire, you own the customer relationship for everything else. Every inspection is a chance to sell managed security, monitoring, and cloud services.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
