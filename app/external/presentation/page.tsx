import { SlideViewer } from '@/components/slides/SlideViewer'
import { SLIDES } from '@/lib/slides-data'

// External Analysis — Collapsed Storyboard v2 (17 slides + cover)
// Act I: The Playing Field (1, 22, 23, 54, 55)
// Act II: The Convergence Squeeze (4, 6, 58, 59, 60, 5, 25, 9, 7, 56)
// Act III: Where IPS Stands (13, 57, 30)
const EXTERNAL_SLIDE_IDS = [1, 22, 23, 54, 55, 4, 6, 58, 59, 60, 5, 25, 9, 7, 56, 13, 57, 30]
const EXTERNAL_SLIDES = EXTERNAL_SLIDE_IDS.map(id => SLIDES.find(s => s.id === id)!)

export default function PresentationPage() {
  return <SlideViewer slides={EXTERNAL_SLIDES} />
}
