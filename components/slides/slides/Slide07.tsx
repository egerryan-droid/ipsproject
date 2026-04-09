'use client'
import dynamic from 'next/dynamic'
import { SlideLayout } from '../SlideLayout'

const StrategicGroupMapChart = dynamic(
  () => import('@/components/charts/StrategicGroupMap').then(m => ({ default: m.StrategicGroupMap })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-[#f5f5f8] text-[#80848f] text-[1.5vw]">
        Loading interactive chart...
      </div>
    ),
  }
)

export function Slide07() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE CONVERGENCE SQUEEZE" title="Strategic Group Map: 2025 vs. 2028" speaker="Kyu Hyuk Choi">
      <div className="h-full flex flex-col">
        <div className="flex justify-end mb-[0.5%]">
          <span className="bg-[#1B3A6B]/10 text-[#1B3A6B] text-[0.65vw] font-bold px-[2%] py-[0.5%] rounded-full">INTERACTIVE — HOVER FOR DETAILS</span>
        </div>
        <div className="flex-1 relative min-h-0">
          <StrategicGroupMapChart />
        </div>
      </div>
    </SlideLayout>
  )
}
