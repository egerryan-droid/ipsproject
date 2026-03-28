import { SlideViewer } from '@/components/slides/SlideViewer'
import { SLIDES } from '@/lib/slides-data'

// External Analysis slide order — updated with EC consolidation wave (slides 25-30)
// Removed: 2 (IPS Today), 3 (IPS Vision), 10 (Fire Moat), 11 (Gaps), 12 (RMR model)
// Added: 22 (Industry Landscape), 23 (Macro Environment), 25-30 (EC Consolidation)
const EXTERNAL_SLIDE_IDS = [1, 22, 23, 4, 5, 6, 7, 8, 9, 25, 26, 27, 28, 29, 13, 30]
const EXTERNAL_SLIDES = EXTERNAL_SLIDE_IDS.map(id => SLIDES.find(s => s.id === id)!)

export default function PresentationPage() {
  return <SlideViewer slides={EXTERNAL_SLIDES} />
}
