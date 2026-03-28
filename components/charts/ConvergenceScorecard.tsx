'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STREAMS = [
  { name: 'Fire Install (EC)', rev: 24900, score: [2,2,1,4,1], trend: 'Eroding' as const, threat: '3/8 ECs PE-owned; ArchKey building fire' },
  { name: 'Fire Install (direct)', rev: 4300, score: [4,3,2,4,4], trend: 'Stable' as const, threat: 'PE competing but NICET moat holds' },
  { name: 'Fire Service/Inspect', rev: 3000, score: [5,4,3,4,5], trend: 'Defensible' as const, threat: 'Code-mandated, NICET required' },
  { name: 'Security Access', rev: 19800, score: [2,3,2,2,4], trend: 'Pressured' as const, threat: 'Verkada direct; IT teams DIY' },
  { name: 'Security CCTV', rev: 4800, score: [1,2,2,1,4], trend: 'Eroding' as const, threat: 'Stalling growth; commodity' },
  { name: 'Service Agreements', rev: 3700, score: [3,4,3,3,5], trend: 'Growing' as const, threat: 'Sticky; 73% CAGR' },
  { name: 'Monitoring', rev: 200, score: [2,1,2,2,4], trend: 'Stalling' as const, threat: 'Third-party resale; no moat' },
  { name: 'National Accounts', rev: 15900, score: [2,3,1,3,2], trend: 'Concentrated' as const, threat: 'Amazon 23.5%; PE competes nationally' },
]

const DIMENSIONS = [
  { key: 'Reg Moat', tip: 'Regulatory barriers (NICET, AHJ, licensing) protecting this stream' },
  { key: 'Switch$', tip: 'Cost & complexity for customers to switch providers' },
  { key: 'PE Risk', tip: 'Ease for PE-backed platforms to replicate (inverted: 5 = hard to replicate)' },
  { key: 'Tech Risk', tip: 'Vulnerability to cloud/SaaS disruption (inverted: 5 = low disruption risk)' },
  { key: 'Ch.Capture', tip: 'Channel dependency & capture risk (inverted: 5 = IPS controls the channel)' },
]

function scoreColor(score: number): string {
  switch (score) {
    case 1: return 'bg-red-700 text-white'
    case 2: return 'bg-red-500 text-white'
    case 3: return 'bg-yellow-400 text-ips-dark'
    case 4: return 'bg-green-400 text-ips-dark'
    case 5: return 'bg-green-700 text-white'
    default: return 'bg-gray-200'
  }
}

function trendBadge(trend: string): string {
  if (trend === 'Growing' || trend === 'Defensible') return 'bg-green-100 text-green-800'
  if (trend === 'Stable' || trend === 'Pressured') return 'bg-yellow-100 text-yellow-800'
  return 'bg-red-100 text-red-800'
}

function composite(scores: number[]): number {
  return scores.reduce((a, b) => a + b, 0) / scores.length
}

function formatRev(rev: number): string {
  return `$${(rev / 1000).toFixed(1)}M`
}

export function ConvergenceScorecard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  const totalRev = STREAMS.reduce((s, r) => s + r.rev, 0)
  const defensible = STREAMS.filter(r => composite(r.score) >= 3.5)
  const vulnerable = STREAMS.filter(r => composite(r.score) < 3.0)
  const defensibleRev = defensible.reduce((s, r) => s + r.rev, 0)
  const vulnerableRev = vulnerable.reduce((s, r) => s + r.rev, 0)

  return (
    <div ref={ref} className="w-full h-full flex flex-col p-[2%] font-sans">
      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto">
        <table className="w-full border-collapse text-[0.85vw]">
          <thead>
            <tr className="bg-ips-light">
              <th className="text-left px-[0.8%] py-[0.5%] font-semibold text-ips-dark">Stream</th>
              <th className="text-right px-[0.8%] py-[0.5%] font-semibold text-ips-dark">Revenue</th>
              {DIMENSIONS.map(d => (
                <th key={d.key} className="text-center px-[0.5%] py-[0.5%] font-semibold text-ips-dark" title={d.tip}>
                  <span className="border-b border-dashed border-ips-gray cursor-help">{d.key}</span>
                </th>
              ))}
              <th className="text-center px-[0.8%] py-[0.5%] font-semibold text-ips-dark" title="Average of 5 dimensions (1-5 scale)">
                <span className="border-b border-dashed border-ips-gray cursor-help">Composite</span>
              </th>
              <th className="text-center px-[0.8%] py-[0.5%] font-semibold text-ips-dark">Trend</th>
            </tr>
          </thead>
          <tbody>
            {STREAMS.map((stream, i) => {
              const comp = composite(stream.score)
              return (
                <motion.tr
                  key={stream.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="border-b border-gray-100 hover:bg-ips-light/50"
                  title={stream.threat}
                >
                  <td className="px-[0.8%] py-[0.5%] font-medium text-ips-dark whitespace-nowrap">{stream.name}</td>
                  <td className="px-[0.8%] py-[0.5%] text-right font-mono text-ips-dark">{formatRev(stream.rev)}</td>
                  {stream.score.map((s, j) => (
                    <td key={j} className="px-[0.5%] py-[0.5%] text-center">
                      <span className={`inline-block w-[2.2vw] py-[0.15vw] rounded text-[0.75vw] font-bold ${scoreColor(s)}`}>
                        {s}
                      </span>
                    </td>
                  ))}
                  <td className="px-[0.8%] py-[0.5%] text-center">
                    <span className={`inline-block font-bold text-[0.85vw] ${comp >= 3.5 ? 'text-green-700' : comp >= 3.0 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {comp.toFixed(1)}/5.0
                    </span>
                  </td>
                  <td className="px-[0.8%] py-[0.5%] text-center">
                    <span className={`inline-block px-[0.6vw] py-[0.1vw] rounded-full text-[0.7vw] font-semibold ${trendBadge(stream.trend)}`}>
                      {stream.trend}
                    </span>
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Summary bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-[1.5%] flex gap-[2%] justify-center text-[0.85vw]"
      >
        <div className="bg-green-50 border border-green-200 rounded-lg px-[1.5%] py-[0.6%] text-center">
          <div className="text-green-800 font-bold">Defensible Revenue (3.5+ composite)</div>
          <div className="text-green-700 font-mono text-[1vw]">
            {formatRev(defensibleRev)} ({((defensibleRev / totalRev) * 100).toFixed(0)}%)
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg px-[1.5%] py-[0.6%] text-center">
          <div className="text-red-800 font-bold">Vulnerable Revenue (&lt;3.0 composite)</div>
          <div className="text-red-700 font-mono text-[1vw]">
            {formatRev(vulnerableRev)} ({((vulnerableRev / totalRev) * 100).toFixed(0)}%)
          </div>
        </div>
      </motion.div>
    </div>
  )
}
