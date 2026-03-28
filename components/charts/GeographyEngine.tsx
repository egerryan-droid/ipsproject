'use client'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts'

const BRANCH_DATA = [
  { year: 2009, cincinnati: 5, columbus: 0, lexington: 0, nashville: 0, national: 0 },
  { year: 2012, cincinnati: 8, columbus: 3, lexington: 0, nashville: 0, national: 0 },
  { year: 2015, cincinnati: 10, columbus: 5, lexington: 0, nashville: 0, national: 2 },
  { year: 2019, cincinnati: 8, columbus: 5, lexington: 1, nashville: 0, national: 5 },
  { year: 2020, cincinnati: 10, columbus: 6, lexington: 2, nashville: 1, national: 21 },
  { year: 2021, cincinnati: 10, columbus: 6, lexington: 2, nashville: 2, national: 22 },
  { year: 2022, cincinnati: 8, columbus: 5, lexington: 2, nashville: 3, national: 10 },
  { year: 2023, cincinnati: 8, columbus: 7, lexington: 2, nashville: 5, national: 11 },
  { year: 2024, cincinnati: 9, columbus: 10, lexington: 2, nashville: 7, national: 15 },
  { year: 2025, cincinnati: 9, columbus: 13, lexington: 2, nashville: 8, national: 22 },
]

const BRANCHES = [
  { key: 'national', name: 'National Accounts', color: '#C8202D' },
  { key: 'nashville', name: 'Nashville', color: '#8b5cf6' },
  { key: 'lexington', name: 'Lexington', color: '#f59e0b' },
  { key: 'columbus', name: 'Columbus', color: '#1B3A6B' },
  { key: 'cincinnati', name: 'Cincinnati', color: '#6b7280' },
]

interface TooltipPayloadEntry {
  name: string
  value: number
  color: string
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: TooltipPayloadEntry[]; label?: number }) {
  if (!active || !payload || !label) return null
  const total = payload.reduce((sum: number, p: TooltipPayloadEntry) => sum + p.value, 0)
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-3 py-2 text-sm">
      <p className="font-bold text-[#1a1a1f] mb-1">{label}</p>
      {[...payload].reverse().map((entry: TooltipPayloadEntry) => (
        <div key={entry.name} className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: entry.color }} />
            <span className="text-[#80848f]">{entry.name}</span>
          </span>
          <span className="font-semibold text-[#1a1a1f]">${entry.value}M</span>
        </div>
      ))}
      <div className="border-t border-gray-100 mt-1 pt-1 flex justify-between">
        <span className="text-[#80848f]">Total</span>
        <span className="font-bold text-[#1a1a1f]">${total}M</span>
      </div>
    </div>
  )
}

export function GeographyEngine() {
  return (
    <div className="w-full h-full flex flex-col p-[2%]">
      <div className="flex-1 min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={BRANCH_DATA} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
            <XAxis
              dataKey="year"
              tick={{ fontSize: '0.75vw', fill: '#80848f' }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis
              tick={{ fontSize: '0.75vw', fill: '#80848f' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v: number) => `$${v}M`}
              width={50}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              height={28}
              iconType="circle"
              iconSize={8}
              formatter={(value: string) => <span style={{ color: '#1a1a1f', fontSize: '0.7vw' }}>{value}</span>}
            />
            <ReferenceLine
              x={2022}
              stroke="#C8202D"
              strokeDasharray="4 4"
              strokeWidth={1}
            />
            {BRANCHES.map((branch) => (
              <Area
                key={branch.key}
                type="monotone"
                dataKey={branch.key}
                name={branch.name}
                stackId="1"
                stroke={branch.color}
                fill={branch.color}
                fillOpacity={0.7}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>

        {/* Annotation: Amazon spike */}
        <div
          className="absolute pointer-events-none"
          style={{ top: '12%', right: '38%' }}
        >
          <div className="bg-red-50 border border-red-200 rounded px-[0.6vw] py-[0.3vw] text-[0.65vw] text-red-600 font-medium whitespace-nowrap">
            Amazon spike and pullback
            <span className="block text-[0.55vw] text-red-400">2020{'\u2013'}2022</span>
          </div>
        </div>

        {/* Annotation: Revenue drop */}
        <div
          className="absolute pointer-events-none"
          style={{ top: '40%', right: '30%' }}
        >
          <div className="bg-white border border-gray-300 rounded px-[0.6vw] py-[0.3vw] text-[0.6vw] text-[#80848f] max-w-[14vw] leading-snug">
            Revenue dropped 34% in 2022 — no recurring base to catch the fall
          </div>
        </div>
      </div>
    </div>
  )
}
