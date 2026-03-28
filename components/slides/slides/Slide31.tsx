import { SlideLayout } from '../SlideLayout'

export function Slide31() {
  return (
    <SlideLayout actNumber={6} actLabel="ACT 6: WHAT THE NUMBERS SAY" title="Internal Analysis: What the Numbers Say" speaker="Ryan Eger">
      <div className="h-full flex items-center">
        <div className="flex-1 flex flex-col justify-center">
          {/* Eyebrow */}
          <p
            className="font-semibold text-[#C8202D] uppercase tracking-widest"
            style={{ fontSize: '0.85vw', marginBottom: '1.5%' }}
          >
            XAVIER EMBA CAPSTONE | MAY 2026
          </p>

          {/* Title */}
          <h1
            className="font-bold text-[#1B3A6B] leading-tight"
            style={{ fontSize: '3.5vw' }}
          >
            Internal Strategic Analysis
          </h1>
          <h2
            className="font-extrabold text-[#C8202D] leading-tight"
            style={{ fontSize: '3.5vw' }}
          >
            Integrated Protection Services
          </h2>

          {/* Sub-headline */}
          <p
            className="font-medium text-[#80848f]"
            style={{ fontSize: '1.5vw', marginTop: '1.5%' }}
          >
            What the Numbers Say About Where IPS Really Stands
          </p>

          {/* Divider */}
          <div
            className="bg-[#C8202D]"
            style={{ width: '20%', height: '2px', marginTop: '2%', marginBottom: '1.5%' }}
          />

          {/* Team names */}
          <p
            className="font-medium text-[#80848f]"
            style={{ fontSize: '0.9vw' }}
          >
            Choi | Eger | McKean | Peat | Tucker
          </p>

          {/* Thesis box */}
          <div
            className="bg-[#f5f5f8] border-l-4 border-[#C8202D]"
            style={{ marginTop: '3%', padding: '2%', width: '85%', borderRadius: '6px' }}
          >
            <p
              className="font-semibold text-[#C8202D] uppercase tracking-widest"
              style={{ fontSize: '0.7vw', marginBottom: '0.75%' }}
            >
              FRAMING THESIS
            </p>
            <p
              className="text-[#1a1a1f] leading-relaxed"
              style={{ fontSize: '0.85vw' }}
            >
              The external analysis established the forces. This internal analysis asks: does IPS
              have the foundation to compete?
            </p>
          </div>
        </div>

        {/* Right side act badge */}
        <div className="w-[25%] flex flex-col items-center justify-center">
          <p
            className="font-extrabold text-[#C8202D] text-center"
            style={{ fontSize: '3.5vw', lineHeight: 1 }}
          >
            ACT 6
          </p>
          <p
            className="text-[#80848f] text-center font-semibold uppercase tracking-widest"
            style={{ fontSize: '0.7vw', marginTop: '4%' }}
          >
            Internal Analysis
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
