type SlideLayoutProps = {
  actNumber: number
  actLabel: string
  title: string
  speaker?: string
  children: React.ReactNode
}

// Inline SVG logo — zero external dependencies, cannot break
function InlineIPSLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 90" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      <path d="M 20 28 Q 120 -2 220 28" stroke="#C8202D" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <path d="M 20 50 Q 120 80 220 50" stroke="#C8202D" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      <text x="120" y="52" fontFamily="Arial, Helvetica, sans-serif" fontSize="34" fontWeight="900" fontStyle="italic" fill="#1B3A6B" textAnchor="middle" letterSpacing="2">IPS</text>
      <text x="120" y="76" fontFamily="Arial, Helvetica, sans-serif" fontSize="8.5" fontWeight="600" fill="#1B3A6B" textAnchor="middle" letterSpacing="1.5">INTEGRATED PROTECTION SERVICES</text>
    </svg>
  )
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
        <InlineIPSLogo className="h-[3vw] w-auto flex-shrink-0" />
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
