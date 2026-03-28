import { SlideViewer } from '@/components/slides/SlideViewer'
import { SLIDES } from '@/lib/slides-data'

// Internal Analysis slides — Acts 6-11 (slides 31-53)
const INTERNAL_SLIDE_IDS = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
const INTERNAL_SLIDES = INTERNAL_SLIDE_IDS.map(id => SLIDES.find(s => s.id === id)!)

export default function InternalPresentationPage() {
  return <SlideViewer slides={INTERNAL_SLIDES} />
}
