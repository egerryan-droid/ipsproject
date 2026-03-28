import { IPSLogo } from '../IPSLogo'

type SlideLayoutProps = {
  actNumber: number
  actLabel: string
  title: string
  speaker?: string
  children: React.ReactNode
}

export function SlideLayout({ actNumber, actLabel, title, speaker, children }: SlideLayoutProps) {
  const isDanger = actNumber === 8 || actNumber === 9

  return (
    <div className="w-full h-full bg-white relative flex flex-col">
      {/* Thin accent line at top */}
      <div className={`h-[3px] w-full ${isDanger ? 'bg-[#C8202D]' : 'bg-[#1B3A6B]'}`} />

      {/* Header — minimal, typography-driven */}
      <div className="px-[5%] pt-[3%] pb-[1.5%] flex justify-between items-start flex-shrink-0">
        <div>
          <p className="text-[0.65vw] uppercase tracking-[0.2em] text-[#80848f] font-semibold mb-[0.3vw]">
            {actLabel}
          </p>
          <h1 className="text-[2.2vw] font-bold text-[#1B3A6B] leading-[1.15]">
            {title}
          </h1>
        </div>
        <IPSLogo className="h-[3vw] w-auto flex-shrink-0" />
      </div>

      {/* Content area */}
      <div className="flex-1 px-[5%] pb-[2%] min-h-0 overflow-hidden">
        {children}
      </div>

      {/* Bottom bar */}
      <div className="px-[5%] py-[0.8%] border-t border-gray-100 flex justify-between items-center flex-shrink-0">
        {speaker && (
          <span className="text-[0.55vw] text-[#80848f]">{speaker}</span>
        )}
        <span className="text-[0.5vw] text-[#b0b4bf] ml-auto">Confidential — Prepared for IPS Leadership</span>
      </div>
    </div>
  )
}
