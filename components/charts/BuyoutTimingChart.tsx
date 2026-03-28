'use client'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts'

const TIMELINE = [
  { year: 2026, age: 70, fcfCoverage: 2.2, patience: 100, ebitdaBase: 8031, ebitdaStress: 8031, buyoutPrice: 27000 },
  { year: 2027, age: 71, fcfCoverage: 1.8, patience: 85, ebitdaBase: 12371, ebitdaStress: 9500, buyoutPrice: 27000 },
  { year: 2028, age: 72, fcfCoverage: 0.76, patience: 40, ebitdaBase: 15532, ebitdaStress: 8156, buyoutPrice: 27000 },
  { year: 2029, age: 73, fcfCoverage: 0.55, patience: 20, ebitdaBase: 19131, ebitdaStress: 7549, buyoutPrice: 27000 },
  { year: 2030, age: 74, fcfCoverage: 0.9, patience: 10, ebitdaBase: 22458, ebitdaStress: 12800, buyoutPrice: 27000 },
]

/* Build chart data with shortfall zone area */
const chartData = TIMELINE.map(d => ({
  ...d,
  label: `${d.year} (age ${d.age})`,
  shortfall: d.fcfCoverage < 1.0 ? d.fcfCoverage : undefined,
  shortfallCeil: d.fcfCoverage < 1.0 ? 1.0 : undefined,
}))

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null
  const d = TIMELINE.find(t => `${t.year} (age ${t.age})` === label)
  if (!d) return null
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs font-sans">
      <div className="font-bold text-ips-dark mb-1">{d.year} — Partner Age {d.age}</div>
      <div className="text-blue-600">FCF Coverage: {d.fcfCoverage.toFixed(2)}x</div>
      <div className="text-orange-500">Partner Patience: {d.patience}%</div>
      <div className="text-gray-500 mt-1">EBITDA (base): ${(d.ebitdaBase / 1000).toFixed(1)}M</div>
      <div className="text-gray-500">EBITDA (stress): ${(d.ebitdaStress / 1000).toFixed(1)}M</div>
      <div className="text-gray-500">Buyout Price: ${(d.buyoutPrice / 1000).toFixed(0)}M</div>
    </div>
  )
}

export function BuyoutTimingChart() {
  return (
    <div className="w-full h-full flex flex-col p-[2%] font-sans">
      {/* Chart area */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: '0.75vw', fill: '#1a1a1f' }}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              domain={[0, 2.5]}
              ticks={[0, 0.5, 1.0, 1.5, 2.0, 2.5]}
              tick={{ fontSize: '0.75vw', fill: '#2563eb' }}
              tickFormatter={(v: number) => `${v.toFixed(1)}x`}
              label={{ value: 'FCF Coverage', angle: -90, position: 'insideLeft', style: { fontSize: '0.8vw', fill: '#2563eb' }, offset: -2 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fontSize: '0.75vw', fill: '#C8202D' }}
              tickFormatter={(v: number) => `${v}%`}
              label={{ value: 'Partner Patience', angle: 90, position: 'insideRight', style: { fontSize: '0.8vw', fill: '#C8202D' }, offset: -2 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: '0.8vw' }}
              formatter={(value: string) => <span className="text-ips-dark">{value}</span>}
            />
            {/* Danger threshold */}
            <ReferenceLine
              yAxisId="left"
              y={1.0}
              stroke="#cc1f1f"
              strokeDasharray="6 3"
              strokeWidth={2}
              label={{ value: '1.0x Danger Threshold', position: 'right', style: { fontSize: '0.7vw', fill: '#cc1f1f', fontWeight: 600 } }}
            />
            {/* Shortfall zone shading — area between FCF line and 1.0x when below */}
            <Area
              yAxisId="left"
              dataKey="shortfallCeil"
              fill="#cc1f1f"
              fillOpacity={0.12}
              stroke="none"
              connectNulls={false}
              name="_shortfallCeil"
              legendType="none"
            />
            <Area
              yAxisId="left"
              dataKey="shortfall"
              fill="white"
              fillOpacity={1}
              stroke="none"
              connectNulls={false}
              name="_shortfallBase"
              legendType="none"
            />
            {/* FCF Coverage line */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="fcfCoverage"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 5, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
              name="FCF Coverage (Scenario G)"
              activeDot={{ r: 7 }}
            />
            {/* Patience line */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="patience"
              stroke="#C8202D"
              strokeWidth={3}
              strokeDasharray="8 4"
              dot={{ r: 5, fill: '#C8202D', stroke: '#fff', strokeWidth: 2 }}
              name="Partner Patience"
              activeDot={{ r: 7 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Crisis annotation */}
      <div className="text-center my-[0.5%]">
        <span className="inline-block bg-red-100 border border-red-300 text-red-800 font-bold text-[0.85vw] px-[1.2%] py-[0.3%] rounded-full">
          CRISIS POINT: 2028 — Both curves cross danger thresholds simultaneously
        </span>
      </div>

      {/* Comparison boxes */}
      <div className="flex gap-[2%] justify-center text-[0.85vw]">
        <div className="bg-green-50 border border-green-200 rounded-lg px-[1.5%] py-[0.6%] text-center flex-1 max-w-[40%]">
          <div className="text-green-800 font-bold">Buy in 2026</div>
          <div className="text-green-700">Coverage 2.2x &middot; Patience 100%</div>
          <div className="text-green-600 font-semibold text-[0.95vw] mt-[0.2%]">COMFORTABLE</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg px-[1.5%] py-[0.6%] text-center flex-1 max-w-[40%]">
          <div className="text-red-800 font-bold">Buy in 2028</div>
          <div className="text-red-700">Coverage 0.76x &middot; Patience 40%</div>
          <div className="text-red-600 font-semibold text-[0.95vw] mt-[0.2%]">SHORTFALL</div>
        </div>
      </div>
    </div>
  )
}
