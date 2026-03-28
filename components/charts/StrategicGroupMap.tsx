'use client'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { motion, AnimatePresence } from 'framer-motion'

type Company = {
  name: string
  revenue: number
  group: 'pe' | 'independent' | 'cloud' | 'converged'
  x2025: { breadth: number; scope: number }
  x2028: { breadth: number; scope: number }
  detail: { revenue: string; ownership: string; notes: string; markets: string }
  isIPS?: boolean
}

const COMPANIES: Company[] = [
  { name: 'Convergint', revenue: 2700, group: 'pe',
    x2025: { breadth: 87, scope: 84 }, x2028: { breadth: 94, scope: 70 },
    detail: { revenue: '$2.7B', ownership: 'PE — Leonard Green', notes: 'Deloitte cyber partnership. 22+ acquisitions. Expanding into Cincy and Nashville.', markets: 'National' }},
  { name: 'Pye-Barker', revenue: 1000, group: 'pe',
    x2025: { breadth: 79, scope: 74 }, x2028: { breadth: 87, scope: 62 },
    detail: { revenue: '$1.0B', ownership: 'PE — Leonard Green', notes: '57 acquisitions/yr. Fire-heavy strategy. OH/KY presence.', markets: 'National' }},
  { name: 'Everon', revenue: 782, group: 'pe',
    x2025: { breadth: 74, scope: 68 }, x2028: { breadth: 82, scope: 58 },
    detail: { revenue: '$782M', ownership: 'PE — GTCR', notes: 'Columbus + Louisville overlap with IPS.', markets: 'Multi-regional' }},
  { name: 'Pavion', revenue: 625, group: 'pe',
    x2025: { breadth: 69, scope: 62 }, x2028: { breadth: 77, scope: 55 },
    detail: { revenue: '$625M', ownership: 'PE — Wind Point', notes: '15+ sister companies for coordination.', markets: 'Multi-regional' }},
  { name: 'Sciens', revenue: 390, group: 'pe',
    x2025: { breadth: 63, scope: 53 }, x2028: { breadth: 72, scope: 48 },
    detail: { revenue: '$390M+', ownership: 'PE — Carlyle', notes: 'Expanding eastward into IPS markets.', markets: 'Regional expanding' }},
  { name: 'Allied Universal', revenue: 20000, group: 'converged',
    x2025: { breadth: 94, scope: 97 }, x2028: { breadth: 97, scope: 97 },
    detail: { revenue: '$20B+', ownership: 'Warburg Pincus / Caisse', notes: 'Guards + tech convergence. OH/IN/KY offices.', markets: 'Global' }},
  { name: 'Securitas', revenue: 15300, group: 'converged',
    x2025: { breadth: 91, scope: 95 }, x2028: { breadth: 95, scope: 95 },
    detail: { revenue: '$15.3B', ownership: 'Public (STO)', notes: 'Tech HQ Uniontown OH. Remote monitoring + cyber.', markets: 'Global' }},
  { name: 'IPS', revenue: 55, group: 'independent', isIPS: true,
    x2025: { breadth: 72, scope: 27 }, x2028: { breadth: 80, scope: 37 },
    detail: { revenue: '$55M → $82M (2028)', ownership: 'Independent — Private', notes: 'NICET IV in-house. Largest private EST distributor. Debt-free. 20% organic growth.', markets: 'OH/KY/TN + Atlanta (planned)' }},
  { name: 'Silco', revenue: 70, group: 'independent',
    x2025: { breadth: 67, scope: 24 }, x2028: { breadth: 69, scope: 25 },
    detail: { revenue: '$60-80M', ownership: 'Independent — Private', notes: '5 OH offices. Primary peer competitor.', markets: 'Ohio' }},
  { name: 'Verkada', revenue: 350, group: 'cloud',
    x2025: { breadth: 54, scope: 43 }, x2028: { breadth: 74, scope: 50 },
    detail: { revenue: '$350M+ est.', ownership: 'Private ($4.5B val)', notes: 'Direct-to-end-user model. IPS does NOT sell Verkada — confirmed frenemy.', markets: 'National direct' }},
  { name: 'Brivo', revenue: 50, group: 'cloud',
    x2025: { breadth: 39, scope: 33 }, x2028: { breadth: 59, scope: 40 },
    detail: { revenue: 'Est. $50M+', ownership: 'Private', notes: 'Cloud ACaaS. IPS authorized partner.', markets: 'National' }},
  { name: 'Paladin', revenue: 12, group: 'independent',
    x2025: { breadth: 52, scope: 14 }, x2028: { breadth: 0, scope: 0 },
    detail: { revenue: 'Est. $10-15M', ownership: 'Independent (being acquired)', notes: 'Local Cincinnati competitor. Likely acquisition target by 2028.', markets: 'Cincinnati local' }},
]

const GROUP_COLORS = {
  pe: '#cc1f1f',
  independent: '#1B3A6B',
  cloud: '#80848f',
  converged: '#d96619',
} as const

const GROUP_LABELS = {
  pe: 'PE-Backed Platforms',
  independent: 'Independent Integrators',
  cloud: 'Cloud-Native Disruptors',
  converged: 'Converged Giants',
} as const

export function StrategicGroupMap({ embedded = false, defaultYear = '2025' }: { embedded?: boolean; defaultYear?: '2025' | '2028' }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [year, setYear] = useState<'2025' | '2028'>(defaultYear)
  const [hovered, setHovered] = useState<Company | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight
    const margin = { top: 20, right: 20, bottom: 52, left: 52 }
    const innerW = width - margin.left - margin.right
    const innerH = height - margin.top - margin.bottom

    const xScale = d3.scaleLinear().domain([0, 100]).range([0, innerW])
    const yScale = d3.scaleLinear().domain([0, 100]).range([innerH, 0])
    const rScale = d3.scaleSqrt().domain([0, 20000]).range([embedded ? 6 : 8, embedded ? 48 : 62])

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()
    svg.attr('width', width).attr('height', height)

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

    // Quadrant shading
    g.append('rect').attr('x', innerW*0.5).attr('y', 0).attr('width', innerW*0.5).attr('height', innerH*0.5).attr('fill', '#fff3e0').attr('opacity', 0.3)

    // Grid lines
    const xGrid = d3.axisBottom(xScale).ticks(5).tickSize(-innerH).tickFormat(() => '')
    const yGrid = d3.axisLeft(yScale).ticks(5).tickSize(-innerW).tickFormat(() => '')
    g.append('g').call(xGrid).attr('transform', `translate(0,${innerH})`).attr('color', '#e5e7eb').attr('stroke-opacity', 0.5)
    g.append('g').call(yGrid).attr('color', '#e5e7eb').attr('stroke-opacity', 0.5)

    // Remove axis lines
    g.selectAll('.domain').remove()

    // Axis labels
    svg.append('text').attr('x', margin.left + innerW/2).attr('y', height-8).attr('text-anchor','middle').attr('font-size', embedded ? '10px' : '12px').attr('fill','#80848f').attr('font-family','Inter,sans-serif').text('SERVICE BREADTH (Fire-only \u2190 \u2192 Full Suite + Cyber + Managed)')
    svg.append('text').attr('transform','rotate(-90)').attr('x',-(margin.top+innerH/2)).attr('y',14).attr('text-anchor','middle').attr('font-size', embedded ? '10px' : '12px').attr('fill','#80848f').attr('font-family','Inter,sans-serif').text('GEOGRAPHIC SCOPE (Local \u2192 National/Global)')

    // Quadrant labels
    g.append('text').attr('x', innerW*0.02).attr('y', innerH*0.05).attr('font-size','10px').attr('fill','#c0c0c8').attr('font-family','Inter,sans-serif').text('HIGH SCOPE / NARROW')
    g.append('text').attr('x', innerW*0.6).attr('y', innerH*0.05).attr('font-size','10px').attr('fill','#c0c0c8').attr('font-family','Inter,sans-serif').text('HIGH SCOPE / FULL SUITE')
    g.append('text').attr('x', innerW*0.62).attr('y', innerH*0.96).attr('font-size','10px').attr('fill','#1B3A6B').attr('font-weight','600').attr('font-family','Inter,sans-serif').text('LOCAL / FULL SUITE \u2190 IPS TODAY')

    const pos = year === '2025' ? 'x2025' : 'x2028'

    // Draw bubbles (faded first for 2028 ghost positions + movement arrows)
    if (year === '2028') {
      // Arrowhead marker definition
      svg.append('defs').append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '0 0 10 10')
        .attr('refX', 8).attr('refY', 5)
        .attr('markerWidth', 6).attr('markerHeight', 6)
        .attr('orient', 'auto-start-reverse')
        .append('path')
        .attr('d', 'M 0 0 L 10 5 L 0 10 z')
        .attr('fill', '#80848f')

      COMPANIES.filter(c => c.x2025.breadth > 0 && c.x2028.breadth > 0).forEach(c => {
        const x1 = xScale(c.x2025.breadth), y1 = yScale(c.x2025.scope)
        const x2 = xScale(c.x2028.breadth), y2 = yScale(c.x2028.scope)
        const dx = x2 - x1, dy = y2 - y1
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Ghost circle at old position
        g.append('circle')
          .attr('cx', x1).attr('cy', y1)
          .attr('r', rScale(c.revenue) * 0.6)
          .attr('fill', GROUP_COLORS[c.group]).attr('fill-opacity', 0.05)
          .attr('stroke', GROUP_COLORS[c.group]).attr('stroke-opacity', 0.15).attr('stroke-width', 1)
          .attr('stroke-dasharray', '4 3')

        // Movement arrow (only if moved meaningfully)
        if (dist > 8) {
          const color = c.isIPS ? '#1B3A6B' : '#80848f'
          g.append('line')
            .attr('x1', x1).attr('y1', y1)
            .attr('x2', x2).attr('y2', y2)
            .attr('stroke', color)
            .attr('stroke-width', c.isIPS ? 2.5 : 1.5)
            .attr('stroke-opacity', c.isIPS ? 0.7 : 0.35)
            .attr('marker-end', 'url(#arrowhead)')
            .style('pointer-events', 'none')
        }
      })

      // Faded companies (Paladin disappearing)
      COMPANIES.filter(c => c.x2025.breadth > 0 && c.x2028.breadth === 0).forEach(c => {
        g.append('circle')
          .attr('cx', xScale(c.x2025.breadth)).attr('cy', yScale(c.x2025.scope))
          .attr('r', rScale(c.revenue) * 0.6)
          .attr('fill', 'none')
          .attr('stroke', GROUP_COLORS[c.group]).attr('stroke-opacity', 0.1).attr('stroke-width', 1)
          .attr('stroke-dasharray', '2 4')

        // "Acquired" label
        g.append('text')
          .attr('x', xScale(c.x2025.breadth)).attr('y', yScale(c.x2025.scope) + 4)
          .attr('text-anchor', 'middle').attr('font-size', '7px').attr('fill', '#9ca3af')
          .attr('font-style', 'italic').text('acquired')
          .style('pointer-events', 'none')
      })
    }

    // Main bubbles
    COMPANIES.filter(c => c[pos].breadth > 0).forEach(c => {
      const cx = xScale(c[pos].breadth)
      const cy = yScale(c[pos].scope)
      const r = rScale(c.revenue)
      const color = GROUP_COLORS[c.group]
      const isIPS = c.isIPS

      const circle = g.append('circle')
        .attr('cx', cx).attr('cy', cy).attr('r', isIPS ? r + 5 : r)
        .attr('fill', color).attr('fill-opacity', isIPS ? 0.25 : 0.15)
        .attr('stroke', color).attr('stroke-width', isIPS ? 3 : 1.5)
        .style('cursor', 'pointer')
        .style('transition', 'fill-opacity 0.2s')

      if (isIPS) {
        // Pulsing ring for IPS
        g.append('circle')
          .attr('cx', cx).attr('cy', cy).attr('r', r + 12)
          .attr('fill', 'none')
          .attr('stroke', color).attr('stroke-opacity', 0.2).attr('stroke-width', 2)
          .attr('stroke-dasharray', '4 4')
      }

      circle.on('mouseover', function(event: MouseEvent) {
          setHovered(c)
          const rect = svgRef.current!.getBoundingClientRect()
          setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top })
          d3.select(this).attr('fill-opacity', 0.5)
        })
        .on('mousemove', function(event: MouseEvent) {
          const rect = svgRef.current!.getBoundingClientRect()
          setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top })
        })
        .on('mouseout', function() {
          setHovered(null)
          d3.select(this).attr('fill-opacity', isIPS ? 0.25 : 0.15)
        })

      // Label
      if (r > (embedded ? 12 : 16) || isIPS) {
        g.append('text')
          .attr('x', cx).attr('y', cy + (r > 24 ? -2 : 0))
          .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
          .attr('font-size', isIPS ? (embedded ? '9px' : '11px') : (embedded ? '7px' : '9px'))
          .attr('font-weight', isIPS ? '800' : '600')
          .attr('fill', color)
          .text(isIPS ? 'IPS \u2605' : c.name)
          .style('pointer-events', 'none')
      }
    })

  }, [year, embedded])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* Year toggle */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-white/95 rounded-xl p-1.5 shadow-sm border border-gray-100">
        {(['2025', '2028'] as const).map(y => (
          <button key={y} onClick={() => setYear(y)}
            className={`text-xs font-bold px-3 py-1 rounded-lg transition-all ${year === y ? 'bg-[#1B3A6B] text-white' : 'text-[#80848f] hover:bg-[#f5f5f8]'}`}>
            {y}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute top-2 left-2 z-10 bg-white/95 rounded-xl p-2.5 shadow-sm border border-gray-100">
        {(Object.entries(GROUP_LABELS) as [keyof typeof GROUP_LABELS, string][]).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2 mb-1 last:mb-0">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: GROUP_COLORS[key] }} />
            <span className="text-[10px] text-[#1a1a1f]">{label}</span>
          </div>
        ))}
      </div>

      <svg ref={svgRef} className="w-full h-full" />

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              left: Math.min(tooltipPos.x + 14, (containerRef.current?.clientWidth || 600) - 260),
              top: Math.max(tooltipPos.y - 80, 10),
            }}
            className="absolute z-20 bg-[#1a1a1f] text-white rounded-xl p-4 shadow-2xl w-56 pointer-events-none border border-white/10"
          >
            <div className="font-bold text-sm mb-2" style={{ color: GROUP_COLORS[hovered.group] }}>
              {hovered.name} {hovered.isIPS ? '\u2605' : ''}
            </div>
            <div className="space-y-1 text-xs text-white/60">
              <div><span className="text-white/40">Revenue:</span> <span className="text-white/80">{hovered.detail.revenue}</span></div>
              <div><span className="text-white/40">Ownership:</span> <span className="text-white/80">{hovered.detail.ownership}</span></div>
              <div><span className="text-white/40">Markets:</span> <span className="text-white/80">{hovered.detail.markets}</span></div>
              <div className="pt-1 text-white/60 leading-relaxed">{hovered.detail.notes}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
