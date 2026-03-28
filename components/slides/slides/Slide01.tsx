import { IPS_LOGO_BASE64 } from '@/lib/logos'

export function Slide01() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Thin accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1B3A6B]" />

      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={IPS_LOGO_BASE64} alt="IPS" className="h-[8vw] w-auto mb-[2vw]" />

      {/* Eyebrow */}
      <p
        className="font-semibold text-[#80848f] uppercase tracking-[0.25em]"
        style={{ fontSize: '0.75vw', marginBottom: '1.5vw' }}
      >
        XAVIER EMBA CAPSTONE | MAY 2026
      </p>

      {/* Title */}
      <h1
        className="font-bold text-[#1B3A6B] leading-tight text-center"
        style={{ fontSize: '3.2vw' }}
      >
        External Strategic Analysis
      </h1>
      <h2
        className="font-extrabold text-[#1B3A6B] leading-tight text-center"
        style={{ fontSize: '3.2vw', marginTop: '0.3vw' }}
      >
        Integrated Protection Services
      </h2>

      {/* Subtitle */}
      <p
        className="font-medium text-[#80848f] text-center"
        style={{ fontSize: '1.4vw', marginTop: '1.2vw' }}
      >
        The Convergence Squeeze
      </p>

      {/* Divider */}
      <div
        className="bg-[#1B3A6B]"
        style={{ width: '12%', height: '2px', marginTop: '2vw', marginBottom: '1.5vw' }}
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
        className="bg-[#f5f5f8] border-l-4 border-[#1B3A6B] text-left"
        style={{ marginTop: '2.5vw', padding: '1.5% 2.5%', width: '60%', borderRadius: '6px' }}
      >
        <p
          className="font-semibold text-[#1B3A6B] uppercase tracking-[0.15em]"
          style={{ fontSize: '0.6vw', marginBottom: '0.5vw' }}
        >
          ONE-SENTENCE THESIS
        </p>
        <p
          className="text-[#1a1a1f] leading-relaxed"
          style={{ fontSize: '0.8vw' }}
        >
          The fire and security industry is converging with IT, cybersecurity, and building
          automation into a single building intelligence industry. PE firms are assembling the
          pieces, and IPS has a 3-5 year window to position as the independent alternative.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-[5%] py-[0.8%] border-t border-gray-100 flex justify-between items-center">
        <span className="text-[0.55vw] text-[#80848f]">AJ McKean</span>
        <span className="text-[0.5vw] text-[#b0b4bf]">Confidential — Prepared for IPS Leadership</span>
      </div>
    </div>
  )
}
