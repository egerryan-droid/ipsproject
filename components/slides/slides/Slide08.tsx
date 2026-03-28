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
) as React.ComponentType<{ defaultYear?: '2025' | '2028' }>

export function Slide08() {
  return (
    <SlideLayout actNumber={2} actLabel="ACT 2: THE INDUSTRY IS CONVERGING" title="Strategic Group Map: 2028 (Projected Movement)" speaker="Kyu Hyuk Choi">
      <div className="h-full flex flex-col">
        <div className="flex justify-end mb-[0.5%]">
          <span className="bg-[#f59e0b]/15 text-[#b45309] text-[0.65vw] font-bold px-[2%] py-[0.5%] rounded-full">2028 PROJECTED — TOGGLE TO COMPARE</span>
        </div>
        <div className="flex-1 relative min-h-0">
          <StrategicGroupMapChart defaultYear="2028" />
        </div>
      </div>
    </SlideLayout>
  )
}
