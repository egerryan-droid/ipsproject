'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const layers = [
  {
    direction: 'down' as const,
    label: 'ABOVE: PE-Backed Converged Platforms',
    status: 'PRESSING DOWN',
    detail: 'Convergint + Deloitte cyber  |  Pye-Barker 57 acquisitions/yr  |  Allied Universal $20B+',
    extra: 'They offer everything IPS offers PLUS cybersecurity, IT managed services, national scale, and subscription platforms.',
    bgClass: 'bg-red-50 border-red-200',
    labelClass: 'text-red-600',
    statusClass: 'text-red-500 bg-red-100',
    delay: 0,
  },
  {
    direction: 'center' as const,
    label: 'MIDDLE: IPS ($55M) — Full-Service Regional',
    status: 'STRONG TODAY — 3-5 YEAR ACTION WINDOW',
    detail: 'Fire Alarm + Electronic Security + Access + Video + ERCES + 18+ service lines',
    extra: 'Best-in-class regional integrator. Debt-free. 20% organic growth. NICET IV in-house.',
    bgClass: 'bg-[#e8edf7] border-[#1B3A6B] border-2',
    labelClass: 'text-[#1B3A6B]',
    statusClass: 'text-[#1B3A6B] bg-white',
    delay: 0.3,
  },
  {
    direction: 'up' as const,
    label: 'BELOW: Cloud-Native Disruptors + EC/IT Entrants',
    status: 'PRESSING UP',
    detail: 'Verkada $4.5B direct-to-customer  |  ECs adding low-voltage  |  IT/MSPs entering security',
    extra: 'Lower cost, subscription-first, capturing the easier security work without fire complexity.',
    bgClass: 'bg-gray-50 border-gray-200',
    labelClass: 'text-gray-500',
    statusClass: 'text-gray-500 bg-gray-100',
    delay: 0.6,
  },
]

export function ConvergenceSqueeze() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <div ref={ref} className="w-full h-full flex flex-col justify-center gap-0 p-[3%]">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, y: i === 0 ? -30 : i === 2 ? 30 : 0, scale: i === 1 ? 0.97 : 1 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: layer.delay, duration: 0.5, ease: 'easeOut' }}
          className={`rounded-xl border-2 p-[2%] ${layer.bgClass} ${i === 1 ? 'z-10 shadow-md' : ''}`}
          style={{ marginTop: i === 1 ? '-4px' : i === 2 ? '-4px' : 0 }}
        >
          {layer.direction === 'down' && (
            <div className={`text-center text-[2vw] font-bold ${layer.labelClass} mb-[0.5%]`}>\u25bc \u25bc \u25bc</div>
          )}
          <div className={`font-bold text-[1.3vw] ${layer.labelClass}`}>{layer.label}</div>
          <div className={`inline-block text-[0.85vw] font-semibold mt-[0.5%] mb-[0.5%] px-[1%] py-[0.3%] rounded-full ${layer.statusClass}`}>
            {layer.status}
          </div>
          <div className="text-[0.95vw] text-[#1a1a1f]">{layer.detail}</div>
          <div className="text-[0.85vw] text-[#80848f] mt-[0.3%]">{layer.extra}</div>
          {layer.direction === 'up' && (
            <div className={`text-center text-[2vw] font-bold ${layer.labelClass} mt-[0.5%]`}>\u25b2 \u25b2 \u25b2</div>
          )}
        </motion.div>
      ))}
      <p className="text-center text-[0.8vw] text-[#80848f] mt-[1%]">
        The fire alarm moat gives you 3-5 years. The question is what you do with that time.
      </p>
    </div>
  )
}
