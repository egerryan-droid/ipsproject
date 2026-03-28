'use client'
import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'

type Channel = {
  name: string
  revenue: number
  gp: number
  margin: number
  rrm: string
  color: string
}

const CHANNELS: Channel[] = [
  { name: 'EC/GC Subcontract', revenue: 29094, gp: 5237, margin: 18, rrm: 'Zero', color: '#C8202D' },
  { name: 'National Accounts', revenue: 15892, gp: 3496, margin: 22, rrm: 'Moderate', color: '#f59e0b' },
  { name: 'Service/Recurring', revenue: 12285, gp: 6143, margin: 50, rrm: 'Is RMR', color: '#16a34a' },
  { name: 'Direct End-User', revenue: 10448, gp: 3134, margin: 30, rrm: 'High', color: '#1B3A6B' },
]

const TOTAL_REVENUE = CHANNELS.reduce((s, c) => s + c.revenue, 0)
const TOTAL_GP = CHANNELS.reduce((s, c) => s + c.gp, 0)

function formatK(value: number) {
  return `$${(value / 1000).toFixed(0)}K`
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: Channel }> }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="bg-[#1a1a1f] text-white rounded-xl p-4 shadow-2xl w-56 border border-white/10">
      <div className="font-bold text-sm mb-2" style={{ color: d.color }}>
        {d.name}
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span className="text-white/40">Revenue</span>
          <span className="text-white/80 font-medium">${d.revenue.toLocaleString()}K</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40">Gross Profit</span>
          <span className="text-white/80 font-medium">${d.gp.toLocaleString()}K</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40">Margin</span>
          <span className="text-white/80 font-medium">{d.margin}%</span>
        </div>
        <div className="flex justify-between pt-1 border-t border-white/10">
          <span className="text-white/40">RMR Potential</span>
          <span className="font-semibold" style={{ color: d.color }}>{d.rrm}</span>
        </div>
      </div>
    </div>
  )
}

export function ChannelProfitability() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const ecRevPct = Math.round((CHANNELS[0].revenue / TOTAL_REVENUE) * 100)
  const ecGpPct = Math.round((CHANNELS[0].gp / TOTAL_GP) * 100)

  return (
    <div className="w-full h-full flex flex-col font-sans">
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mb-2 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#80848f]" />
          <span className="text-xs text-[#80848f]">Revenue ($K)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#80848f] opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.6) 2px, rgba(255,255,255,0.6) 4px)' }} />
          <span className="text-xs text-[#80848f]">Gross Profit ($K)</span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={CHANNELS}
            margin={{ top: 8, right: 16, bottom: 8, left: 16 }}
            barCategoryGap="20%"
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: '#80848f', fontFamily: 'Inter, sans-serif' }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatK}
              tick={{ fontSize: 10, fill: '#80848f', fontFamily: 'Inter, sans-serif' }}
              axisLine={false}
              tickLine={false}
              width={54}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(0,0,0,0.04)' }}
            />
            {/* Revenue bars */}
            <Bar
              dataKey="revenue"
              name="Revenue"
              radius={[4, 4, 0, 0]}
              onMouseEnter={(_, idx) => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {CHANNELS.map((ch, idx) => (
                <Cell
                  key={ch.name}
                  fill={ch.color}
                  fillOpacity={hoveredIndex === idx ? 1 : 0.85}
                />
              ))}
            </Bar>
            {/* Gross Profit bars (lighter / striped appearance) */}
            <Bar
              dataKey="gp"
              name="Gross Profit"
              radius={[4, 4, 0, 0]}
              onMouseEnter={(_, idx) => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {CHANNELS.map((ch, idx) => (
                <Cell
                  key={ch.name}
                  fill={ch.color}
                  fillOpacity={hoveredIndex === idx ? 0.55 : 0.35}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Margin badges */}
      <div className="flex justify-around px-4 mb-2 flex-shrink-0">
        {CHANNELS.map((ch) => (
          <div
            key={ch.name}
            className="text-center"
          >
            <span
              className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: ch.color }}
            >
              {ch.margin}% margin
            </span>
          </div>
        ))}
      </div>

      {/* Summary mismatch callout */}
      <div className="flex-shrink-0 mx-4 mb-2 rounded-lg border-2 border-red-200 bg-red-50 px-4 py-2.5 flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
          <span className="text-red-600 text-sm font-bold">!</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a1a1f]">
            EC/GC Subcontract: {ecRevPct}% of revenue = only {ecGpPct}% of GP
          </p>
          <p className="text-xs text-[#80848f]">
            Largest channel by volume, lowest margin at 18% with zero RMR potential — the profitability mismatch.
          </p>
        </div>
      </div>
    </div>
  )
}
