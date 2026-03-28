'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type VRIOValue = 'Yes' | 'Partial' | 'No'
type Result = 'Sustained Advantage' | 'Unused Advantage' | 'Temporary Advantage' | 'Competitive Parity' | 'Competitive Disadvantage'
type Strength = 'Strong' | 'Moderate' | 'Low-Moderate' | 'Weak-Moderate' | 'Weak'

type Resource = {
  name: string
  v: VRIOValue
  r: VRIOValue
  i: VRIOValue
  o: VRIOValue
  result: Result
  strength: Strength
  justification?: string
}

const RESOURCES: Resource[] = [
  {
    name: 'NICET IV Fire Engineering',
    v: 'Yes', r: 'Yes', i: 'Yes', o: 'Partial',
    result: 'Unused Advantage', strength: 'Strong',
    justification: 'Only regional integrator with in-house NICET IV certification. Rare and hard to imitate, but not fully organized — IPS does not yet leverage this for premium pricing or market positioning.',
  },
  {
    name: 'Combined Fire + Security',
    v: 'Yes', r: 'Partial', i: 'Partial', o: 'Partial',
    result: 'Temporary Advantage', strength: 'Moderate',
    justification: 'Full-service fire and security under one roof is valuable, but PE-backed platforms are rapidly acquiring this capability. Advantage is real today but eroding.',
  },
  {
    name: 'Customer Relationship Base',
    v: 'Yes', r: 'Partial', i: 'Partial', o: 'No',
    result: 'Unused Advantage', strength: 'Strong',
    justification: 'Deep relationships with GCs and end-users built over decades. Not organized to convert project relationships into recurring service contracts.',
  },
  {
    name: 'Financial Position',
    v: 'Yes', r: 'No', i: 'No', o: 'Partial',
    result: 'Competitive Parity', strength: 'Strong',
    justification: 'Debt-free with strong cash flow. Valuable but not rare — many competitors are well-capitalized through PE backing. Provides strategic flexibility.',
  },
  {
    name: 'Geographic Footprint',
    v: 'Yes', r: 'No', i: 'No', o: 'Partial',
    result: 'Competitive Parity', strength: 'Low-Moderate',
    justification: 'OH/KY/TN coverage is standard for regional integrators. Not a differentiator but a necessary foundation for growth.',
  },
  {
    name: 'Leadership Team',
    v: 'Yes', r: 'Partial', i: 'Partial', o: 'No',
    result: 'Unused Advantage', strength: 'Moderate',
    justification: 'Experienced leadership with deep industry knowledge. Not fully organized to execute strategic transformation — capability exists but structure does not.',
  },
  {
    name: 'Edwards/EST Partnership',
    v: 'Yes', r: 'Partial', i: 'No', o: 'Partial',
    result: 'Temporary Advantage', strength: 'Moderate',
    justification: 'Largest private EST distributor. Valuable channel relationship, but Edwards has multiple partners and could shift distribution strategy.',
  },
  {
    name: 'Project Hub Technology',
    v: 'Yes', r: 'Partial', i: 'No', o: 'Partial',
    result: 'Competitive Parity', strength: 'Weak',
    justification: 'Internal project management platform. Not yet a competitive differentiator — similar tools exist across the industry.',
  },
  {
    name: 'National Accounts',
    v: 'Yes', r: 'Partial', i: 'No', o: 'Partial',
    result: 'Temporary Advantage', strength: 'Strong',
    justification: 'Growing national accounts portfolio. Partially rare and provides scale, but not hard to imitate — larger competitors have deeper national capabilities.',
  },
  {
    name: 'Recurring Revenue (5.8%)',
    v: 'Partial', r: 'No', i: 'No', o: 'No',
    result: 'Competitive Disadvantage', strength: 'Strong',
    justification: 'At only 5.8% recurring, IPS lags the industry average of 30-40%. This is the single biggest strategic vulnerability — low RMR means low valuation multiples and high revenue volatility.',
  },
  {
    name: 'Workforce Culture',
    v: 'Yes', r: 'Partial', i: 'Partial', o: 'No',
    result: 'Unused Advantage', strength: 'Weak-Moderate',
    justification: 'Strong technician loyalty and low turnover relative to industry. Not organized into a formal retention and development program.',
  },
  {
    name: 'Regulatory Knowledge',
    v: 'Yes', r: 'Partial', i: 'Yes', o: 'Partial',
    result: 'Unused Advantage', strength: 'Moderate',
    justification: 'Deep fire code and AHJ expertise. Hard to imitate quickly, but not organized into a scalable consulting or training offering.',
  },
]

const VRIO_CELL_COLORS: Record<VRIOValue, { bg: string; text: string }> = {
  Yes: { bg: 'bg-green-600', text: 'text-white' },
  Partial: { bg: 'bg-amber-500', text: 'text-white' },
  No: { bg: 'bg-red-600', text: 'text-white' },
}

const RESULT_COLORS: Record<Result, { bg: string; text: string; border: string }> = {
  'Sustained Advantage': { bg: 'bg-green-800', text: 'text-white', border: 'border-green-800' },
  'Unused Advantage': { bg: 'bg-amber-500', text: 'text-white', border: 'border-amber-500' },
  'Temporary Advantage': { bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-500' },
  'Competitive Parity': { bg: 'bg-gray-400', text: 'text-white', border: 'border-gray-400' },
  'Competitive Disadvantage': { bg: 'bg-red-600', text: 'text-white', border: 'border-red-600' },
}

function countResults() {
  const counts: Partial<Record<Result, number>> = {}
  for (const r of RESOURCES) {
    counts[r.result] = (counts[r.result] || 0) + 1
  }
  return counts
}

export function VRIOMatrix() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)
  const counts = countResults()

  return (
    <div className="w-full h-full flex flex-col font-sans overflow-auto">
      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-[#1a1a1f] text-white">
              <th className="text-left px-3 py-2 font-semibold text-[11px] w-[30%]">Resource / Capability</th>
              <th className="text-center px-2 py-2 font-semibold text-[11px] w-[8%]">V</th>
              <th className="text-center px-2 py-2 font-semibold text-[11px] w-[8%]">R</th>
              <th className="text-center px-2 py-2 font-semibold text-[11px] w-[8%]">I</th>
              <th className="text-center px-2 py-2 font-semibold text-[11px] w-[8%]">O</th>
              <th className="text-center px-2 py-2 font-semibold text-[11px] w-[22%]">Competitive Implication</th>
              <th className="text-center px-2 py-2 font-semibold text-[11px] w-[16%]">Strength</th>
            </tr>
          </thead>
          {RESOURCES.map((resource, idx) => {
            const isDisadvantage = resource.result === 'Competitive Disadvantage'
            const isExpanded = expandedRow === idx
            const resultStyle = RESULT_COLORS[resource.result]

            return (
              <tbody key={resource.name}>
                  <tr
                    onClick={() => setExpandedRow(isExpanded ? null : idx)}
                    className={`
                      cursor-pointer transition-colors hover:bg-[#f5f5f8]
                      ${isDisadvantage ? 'border-l-4 border-l-red-600 bg-red-50' : 'border-l-4 border-l-transparent'}
                      ${isExpanded ? 'bg-[#f5f5f8]' : ''}
                    `}
                  >
                    <td className={`px-3 py-2 ${isDisadvantage ? 'font-bold text-red-700' : 'text-[#1a1a1f]'}`}>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                          &#9654;
                        </span>
                        {resource.name}
                      </div>
                    </td>
                    {(['v', 'r', 'i', 'o'] as const).map((key) => {
                      const val = resource[key] as VRIOValue
                      const style = VRIO_CELL_COLORS[val]
                      return (
                        <td key={key} className="text-center px-1 py-1.5">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${style.bg} ${style.text}`}>
                            {val}
                          </span>
                        </td>
                      )
                    })}
                    <td className="text-center px-1 py-1.5">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${resultStyle.bg} ${resultStyle.text}`}>
                        {resource.result}
                      </span>
                    </td>
                    <td className="text-center px-2 py-2 text-[#80848f] text-[10px] font-medium">
                      {resource.strength}
                    </td>
                  </tr>
                  {/* Expandable detail row */}
                  <tr>
                    <td colSpan={7} className="p-0">
                      <AnimatePresence>
                        {isExpanded && resource.justification && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className={`mx-3 my-2 p-3 rounded-lg border-l-4 ${resultStyle.border} bg-white shadow-sm`}>
                              <p className="text-xs text-[#1a1a1f] leading-relaxed">
                                {resource.justification}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </td>
                  </tr>
              </tbody>
            )
          })}
        </table>
      </div>

      {/* Summary stats */}
      <div className="flex-shrink-0 px-3 py-2.5 bg-[#f5f5f8] border-t border-gray-200 flex items-center justify-center gap-4 flex-wrap">
        {([
          ['Unused Advantage', 'bg-amber-500'],
          ['Temporary Advantage', 'bg-blue-500'],
          ['Competitive Parity', 'bg-gray-400'],
          ['Competitive Disadvantage', 'bg-red-600'],
        ] as const).map(([result, bg]) => (
          <div key={result} className="flex items-center gap-1.5">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${bg}`} />
            <span className="text-xs text-[#1a1a1f] font-semibold">{counts[result] || 0}</span>
            <span className="text-xs text-[#80848f]">{result.replace('Competitive ', '')}</span>
          </div>
        ))}
      </div>

      {/* VRIO legend */}
      <div className="flex-shrink-0 px-3 py-1.5 bg-white border-t border-gray-100 flex items-center justify-center gap-4">
        {[
          { letter: 'V', label: 'Valuable' },
          { letter: 'R', label: 'Rare' },
          { letter: 'I', label: 'Inimitable' },
          { letter: 'O', label: 'Organized' },
        ].map((item) => (
          <span key={item.letter} className="text-[10px] text-[#80848f]">
            <span className="font-bold text-[#1a1a1f]">{item.letter}</span> = {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
