'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const METRICS = [
  { metric: 'Revenue Growth', value: '+26%', direction: 'up' as const, signal: 'positive' as const, note: 'Strong organic growth' },
  { metric: 'Gross Margin', value: '35.6%', direction: 'up' as const, signal: 'positive' as const, note: 'Up 3.7pp from 2024' },
  { metric: 'EBITDA Margin', value: '10.7%', direction: 'down' as const, signal: 'negative' as const, note: 'Down from 11.4% despite GM gains' },
  { metric: 'Cash Position', value: '-$71K', direction: 'down' as const, signal: 'negative' as const, note: 'Negative on $54M revenue' },
  { metric: 'DSO', value: '122 days', direction: 'up' as const, signal: 'negative' as const, note: 'Spiked 22 days from 100' },
  { metric: 'Bad Debt', value: '$849K', direction: 'up' as const, signal: 'negative' as const, note: 'Up 94x from $9K' },
  { metric: 'SGA % Revenue', value: '25.1%', direction: 'up' as const, signal: 'negative' as const, note: 'Up 4.3pp; SGA grew 52%' },
  { metric: 'Top 3 Concentration', value: '46.4%', direction: 'up' as const, signal: 'negative' as const, note: 'Up from 36.5% in 2024' },
  { metric: 'Backlog', value: '$11.3M', direction: 'flat' as const, signal: 'negative' as const, note: 'Flat after 26% growth year' },
  { metric: 'Customer Retention', value: '81.5%', direction: 'flat' as const, signal: 'warning' as const, note: '185 customers lost annually' },
  { metric: 'RMR % of Revenue', value: '5.8%', direction: 'down' as const, signal: 'negative' as const, note: 'Declining as % despite dollar growth' },
]

function DirectionArrow({ direction, signal }: { direction: 'up' | 'down' | 'flat'; signal: 'positive' | 'negative' | 'warning' }) {
  const colorClass = signal === 'positive' ? 'text-green-600' : signal === 'negative' ? 'text-red-500' : 'text-yellow-500'

  if (direction === 'up') {
    return <span className={`${colorClass} text-[1.4vw] font-bold leading-none`}>{'\u25B2'}</span>
  }
  if (direction === 'down') {
    return <span className={`${colorClass} text-[1.4vw] font-bold leading-none`}>{'\u25BC'}</span>
  }
  return <span className={`${colorClass} text-[1.4vw] font-bold leading-none`}>{'\u2014'}</span>
}

function SignalDot({ signal }: { signal: 'positive' | 'negative' | 'warning' }) {
  const bgClass = signal === 'positive' ? 'bg-green-500' : signal === 'negative' ? 'bg-red-500' : 'bg-yellow-400'
  return <span className={`inline-block w-[0.6vw] h-[0.6vw] rounded-full ${bgClass}`} />
}

export function GlassHouseMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <div ref={ref} className="w-full h-full flex flex-col p-[2%] gap-[1.5%]">
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1%] auto-rows-fr">
        {METRICS.map((m, i) => {
          const borderClass = m.signal === 'positive' ? 'border-l-green-500' : 'border-l-red-500'
          return (
            <motion.div
              key={m.metric}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
              className={`rounded-lg border border-gray-200 border-l-4 ${borderClass} bg-white px-[1.5%] py-[1%] flex flex-col justify-center`}
            >
              <div className="flex items-center gap-[0.5vw] mb-[0.3vw]">
                <SignalDot signal={m.signal} />
                <span className="font-bold text-[0.85vw] text-[#1a1a1f] uppercase tracking-wide">{m.metric}</span>
              </div>
              <div className="flex items-center gap-[0.6vw]">
                <span className="font-bold text-[1.8vw] text-[#1a1a1f] leading-tight">{m.value}</span>
                <DirectionArrow direction={m.direction} signal={m.signal} />
              </div>
              <p className="text-[0.7vw] text-[#80848f] mt-[0.2vw] leading-snug">{m.note}</p>
            </motion.div>
          )
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-red-50 border border-red-200 rounded-lg px-[1.5%] py-[0.6%] text-center flex-shrink-0"
      >
        <span className="text-[0.85vw] text-[#1a1a1f] font-medium">
          <span className="text-green-600 font-bold">2 of 11</span> metrics improving.{' '}
          <span className="text-red-500 font-bold">9 deteriorating.</span>{' '}
          Revenue growth is masking operational decline.
        </span>
      </motion.div>
    </div>
  )
}
