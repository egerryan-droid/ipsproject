import { SlideLayout } from '../SlideLayout'

export function Slide51() {
  return (
    <SlideLayout actNumber={11} actLabel="ACT 11: STRESS TEST" title="Stress Testing the Thesis" speaker="All">
      <div className="flex-1 flex flex-col items-center justify-center text-center" style={{ padding: '2% 8%' }}>
        {/* Hero quote */}
        <p className="italic font-light text-[#1B3A6B] leading-[1.4]" style={{ fontSize: '1.8vw', maxWidth: '75%', marginBottom: '3%' }}>
          &ldquo;We built this analysis to be disproved. What survived the stress test is what belongs in front of leadership.&rdquo;
        </p>

        {/* Subtext */}
        <p className="text-[#374151] leading-[1.7]" style={{ fontSize: '0.85vw', maxWidth: '65%', marginBottom: '5%' }}>
          Seven counter-arguments. Each given the strongest possible case. Evaluated for whether the core thesis holds, partially holds, or fails.
        </p>

        {/* Bottom stat row */}
        <div className="flex items-center justify-center gap-[4%]">
          <div className="flex items-center gap-[0.5vw]">
            <div className="rounded-full" style={{ width: '0.7vw', height: '0.7vw', background: '#16a34a' }} />
            <span className="font-bold text-[#16a34a]" style={{ fontSize: '1.3vw' }}>2</span>
            <span className="text-[#6b7280] font-medium" style={{ fontSize: '0.75vw' }}>Valid</span>
          </div>

          <div className="flex items-center gap-[0.5vw]">
            <div className="rounded-full" style={{ width: '0.7vw', height: '0.7vw', background: '#d97706' }} />
            <span className="font-bold text-[#d97706]" style={{ fontSize: '1.3vw' }}>4</span>
            <span className="text-[#6b7280] font-medium" style={{ fontSize: '0.75vw' }}>Partial</span>
          </div>

          <div className="flex items-center gap-[0.5vw]">
            <div className="rounded-full" style={{ width: '0.7vw', height: '0.7vw', background: '#C8202D' }} />
            <span className="font-bold text-[#C8202D]" style={{ fontSize: '1.3vw' }}>1</span>
            <span className="text-[#6b7280] font-medium" style={{ fontSize: '0.75vw' }}>Invalid</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
