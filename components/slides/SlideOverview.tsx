'use client'
import { motion } from 'framer-motion'
import { SLIDES, ACT_COLORS, ACT_NAMES, type Slide } from '@/lib/slides-data'

export function SlideOverview({ current, onSelect, onClose, slides = SLIDES }: {
  current: number
  onSelect: (n: number) => void
  onClose: () => void
  slides?: Slide[]
}) {
  const actNums = [...new Set(slides.map(s => s.actNumber))].sort()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-ips-dark/95 backdrop-blur z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="p-8" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white font-bold text-2xl">All Slides</h2>
            <p className="text-white/40 text-sm mt-1">Click any slide to jump · Press Esc to close</p>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white text-sm border border-white/20 px-4 py-2 rounded-lg transition-all">
            Close
          </button>
        </div>
        {/* Act groups */}
        {actNums.map(actNum => {
          const actSlides = slides.filter(s => s.actNumber === actNum)
          return (
            <div key={actNum} className="mb-8">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">
                Act {actNum}: {ACT_NAMES[actNum]}
              </p>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                {actSlides.map((slide) => {
                  const i = slides.indexOf(slide)
                  return (
                    <button
                      key={slide.id}
                      onClick={() => onSelect(i)}
                      className={`rounded-xl border-2 p-3 text-left transition-all hover:scale-105 ${
                        i === current ? 'border-accent bg-accent/20' : 'border-white/10 bg-white/5 hover:border-white/30'
                      }`}
                    >
                      <div className="text-[10px] font-bold text-white/40 mb-1">{slide.id}</div>
                      <div className="text-[10px] text-white/80 leading-tight font-medium line-clamp-3">{slide.title}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
