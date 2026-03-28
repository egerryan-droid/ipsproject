import Link from 'next/link'
import SiteNav from '@/components/layout/SiteNav'
import { INTERNAL_DELIVERABLES } from '@/lib/constants'

const FRAMEWORK_ICONS: Record<string, string> = {
  'vrio': '🔬',
  'value-chain': '🔗',
  'core-competencies': '💎',
  'resource-assessment': '📊',
  'glass-house': '🏠',
  'pressure-test': '🔨',
  'capstone-thesis': '🎯',
}

export default function InternalDeliverablesPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/internal" className="text-sm text-ips-gray hover:text-accent transition-colors">
              ← Back to Internal Analysis
            </Link>
          </div>

          <h1 className="text-3xl font-extrabold text-ips-dark mb-2">Internal Analysis Deliverables</h1>
          <p className="text-ips-gray mb-8">
            Seven frameworks analyzing IPS from the inside — financial reality, resource assessment,
            and the capstone thesis that ties everything together.
          </p>

          <div className="grid grid-cols-1 gap-3">
            {INTERNAL_DELIVERABLES.map((d, i) => (
              <Link
                key={d.slug}
                href={`/internal/deliverables/${d.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-gray-100 hover:border-ips-red/20 hover:shadow-sm p-5 transition-all"
              >
                <span className="text-2xl w-10 flex-shrink-0 text-center">
                  {FRAMEWORK_ICONS[d.slug] || '📄'}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-ips-gray">{i + 1}</span>
                    <h3 className="font-bold text-ips-dark group-hover:text-ips-red transition-colors">
                      {d.label}
                    </h3>
                  </div>
                  <p className="text-sm text-ips-gray mt-1">{d.description}</p>
                </div>
                <span className="text-ips-gray group-hover:text-ips-red transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
