import SiteNav from '@/components/layout/SiteNav'
import { MarkdownRenderer } from '@/components/deliverables/MarkdownRenderer'
import { PrintButton } from '@/components/deliverables/PrintButton'
import { getInternalDeliverableContent } from '@/lib/deliverables'
import { INTERNAL_DELIVERABLES } from '@/lib/constants'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return INTERNAL_DELIVERABLES.map(d => ({ slug: d.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function InternalDeliverablePage({ params }: Props) {
  const { slug } = await params
  const meta = INTERNAL_DELIVERABLES.find(d => d.slug === slug)
  if (!meta) notFound()

  const content = getInternalDeliverableContent(slug)
  const currentIndex = INTERNAL_DELIVERABLES.findIndex(d => d.slug === slug)
  const prev = currentIndex > 0 ? INTERNAL_DELIVERABLES[currentIndex - 1] : null
  const next = currentIndex < INTERNAL_DELIVERABLES.length - 1 ? INTERNAL_DELIVERABLES[currentIndex + 1] : null

  return (
    <>
      <SiteNav />
      <div className="pt-16 min-h-screen flex bg-white">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-60 flex-shrink-0 border-r border-gray-100 py-8 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 mb-4">
            <p className="text-[10px] font-bold text-[#80848f] uppercase tracking-widest">Internal Analysis</p>
          </div>
          <nav className="px-2 space-y-0.5">
            {INTERNAL_DELIVERABLES.map((d, i) => (
              <Link
                key={d.slug}
                href={`/internal/deliverables/${d.slug}`}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  d.slug === slug
                    ? 'bg-ips-red text-white font-semibold'
                    : 'text-[#80848f] hover:text-[#1a1a1f] hover:bg-[#f5f5f8]'
                }`}
              >
                <span className={`text-xs font-bold w-5 flex-shrink-0 ${d.slug === slug ? 'text-white/70' : 'text-[#c0c0c8]'}`}>
                  {i + 1}
                </span>
                {d.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-4 pt-6 border-t border-gray-100 mx-2">
            <Link href="/internal/presentation" className="flex items-center gap-2 text-xs text-red-600 hover:text-red-700 transition-colors font-medium">
              ← View Presentation
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-8 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-[#80848f] mb-6">
              <Link href="/internal" className="hover:text-ips-red transition-colors">Internal Analysis</Link>
              <span>/</span>
              <Link href="/internal/deliverables" className="hover:text-ips-red transition-colors">Deliverables</Link>
              <span>/</span>
              <span className="text-[#1a1a1f] font-medium">{meta.label}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold text-[#80848f] uppercase tracking-widest">
                {currentIndex + 1} of {INTERNAL_DELIVERABLES.length}
              </span>
              <PrintButton />
            </div>

            {/* Document */}
            <article>
              <MarkdownRenderer content={content} />
            </article>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-100">
              {prev ? (
                <Link
                  href={`/internal/deliverables/${prev.slug}`}
                  className="flex items-center gap-2 text-sm text-[#80848f] hover:text-ips-red transition-colors group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  <div>
                    <div className="text-xs text-[#80848f] mb-0.5">Previous</div>
                    <div className="font-medium">{prev.label}</div>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/internal/deliverables/${next.slug}`}
                  className="flex items-center gap-2 text-sm text-[#80848f] hover:text-ips-red transition-colors group text-right"
                >
                  <div>
                    <div className="text-xs text-[#80848f] mb-0.5">Next</div>
                    <div className="font-medium">{next.label}</div>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
