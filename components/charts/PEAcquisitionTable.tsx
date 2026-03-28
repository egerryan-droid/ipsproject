'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const PE_DATA = [
  { firm: 'Leonard Green', dates: 'via multiple funds', fire: 'Pye-Barker $1B', security: 'Convergint $2.7B', cloud: 'YES', cyber: 'Via Deloitte', scale: '$3.7B', bgClass: 'bg-red-50',
    significance: 'Controls #1 AND #2 PE integrator platforms simultaneously.',
    impact: 'CRITICAL — One firm owns $3.7B in combined fire/security. Unprecedented consolidation.' },
  { firm: 'Lone Star', dates: 'Dec 2024', fire: 'Kidde/Edwards $3B', security: '—', cloud: 'No', cyber: 'No', scale: '$3B OEM', bgClass: 'bg-white',
    significance: 'Acquired IPS primary fire alarm supplier (Edwards/EST) for $3B.',
    impact: 'HIGH — EST exclusivity protection may weaken. Watch distributor agreements.' },
  { firm: 'GTCR', dates: '2021—present', fire: '—', security: 'Everon $782M', cloud: 'SimpliSafe', cyber: 'Limited', scale: '$782M+', bgClass: 'bg-red-50',
    significance: 'Residential-to-commercial expansion strategy. Columbus + Louisville overlap.',
    impact: 'MODERATE — Direct geographic overlap in IPS markets.' },
  { firm: 'Honeywell', dates: 'Strategic OEM', fire: 'Fire division', security: 'LenelS2 $4.95B', cloud: 'YES', cyber: 'YES', scale: '$4.95B+', bgClass: 'bg-white',
    significance: 'Full-stack building intelligence: fire + security + HVAC + cyber.',
    impact: 'MODERATE — Sets converged platform standard. Not direct integrator today.' },
  { firm: 'Wind Point', dates: '2019—present', fire: 'Via Pavion', security: 'Pavion $625M', cloud: 'YES', cyber: 'No', scale: '$625M+', bgClass: 'bg-red-50',
    significance: '15+ Pavion sister companies coordinating on bids.',
    impact: 'MODERATE — 15 coordinated companies can undercut on shared market bids.' },
  { firm: 'Carlyle', dates: '2020—present', fire: 'Sciens $390M+', security: 'YES', cloud: 'No', cyber: 'No', scale: '$390M+', bgClass: 'bg-white',
    significance: 'Eastward expansion from southeast toward IPS core markets.',
    impact: 'EMERGING — Monitor for OH/KY market entry within 2-3 years.' },
]

export function PEAcquisitionTable() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-left">
          <thead className="sticky top-0 z-10">
            <tr className="bg-[#1a1a1f] text-white">
              {['PE FIRM', 'FIRE', 'SECURITY', 'CLOUD', 'CYBER', 'SCALE', ''].map(h => (
                <th key={h} className="px-[1%] py-[1%] font-semibold text-[0.75vw] uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PE_DATA.map((row) => (
              <>
                <tr
                  key={row.firm}
                  onClick={() => setExpanded(expanded === row.firm ? null : row.firm)}
                  className={`cursor-pointer border-b border-gray-100 transition-all hover:bg-[#e8edf7] ${expanded === row.firm ? 'bg-[#e8edf7]' : row.bgClass}`}
                >
                  <td className="px-[1%] py-[1.5%]">
                    <div className="font-bold text-[#1a1a1f] text-[1vw]">{row.firm}</div>
                    <div className="text-[0.7vw] text-[#80848f]">{row.dates}</div>
                  </td>
                  <td className="px-[1%] py-[1.5%] font-semibold text-[#cc1f1f] text-[0.9vw]">{row.fire}</td>
                  <td className="px-[1%] py-[1.5%] font-semibold text-[#cc1f1f] text-[0.9vw]">{row.security}</td>
                  <td className={`px-[1%] py-[1.5%] font-semibold text-[0.9vw] ${row.cloud === 'YES' ? 'text-[#217a42]' : 'text-[#80848f]'}`}>{row.cloud}</td>
                  <td className={`px-[1%] py-[1.5%] font-semibold text-[0.9vw] ${row.cyber !== 'No' ? 'text-[#217a42]' : 'text-[#80848f]'}`}>{row.cyber}</td>
                  <td className="px-[1%] py-[1.5%] font-bold text-[#1a1a1f] text-[1vw]">{row.scale}</td>
                  <td className="px-[1%] py-[1.5%]">
                    <ChevronDown className={`w-4 h-4 text-[#80848f] transition-transform ${expanded === row.firm ? 'rotate-180' : ''}`} />
                  </td>
                </tr>
                <AnimatePresence>
                  {expanded === row.firm && (
                    <motion.tr
                      key={`${row.firm}-expand`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <td colSpan={7} className="px-[2%] py-[1.5%] bg-[#e8edf7] border-b-2 border-[#1B3A6B]/30">
                        <div className="grid grid-cols-2 gap-[3%]">
                          <div>
                            <span className="font-semibold text-[0.8vw] text-[#1B3A6B]">Why it matters: </span>
                            <span className="text-[0.8vw] text-[#1a1a1f]">{row.significance}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-[0.8vw] text-[#cc1f1f]">IPS Impact: </span>
                            <span className="text-[0.8vw] text-[#1a1a1f]">{row.impact}</span>
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  )}
                </AnimatePresence>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-[0.7vw] text-[#80848f] py-[0.5%] border-t border-gray-100 flex-shrink-0">
        Click any row to expand \u00b7 242 security transactions in 2025 \u00b7 +24% YoY \u00b7 Source: PitchBook, Capstone Partners Feb 2026
      </p>
    </div>
  )
}
