'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, LogOut } from 'lucide-react'
import { IPSLogo, XavierBadge } from '../IPSLogo'

const NAV_ITEMS = [
  { label: 'Overview', href: '/home' },
  { label: 'External Analysis', href: '/external' },
  { label: 'Internal Analysis', href: '/internal' },
  { label: 'Strategy Options', href: '/strategy' },
  { label: 'Final Recommendation', href: '/final' },
]

export default function SiteNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  async function handleLogout() {
    setLoggingOut(true)
    await fetch('/api/logout', { method: 'POST' })
    router.push('/login')
  }

  function isActive(href: string) {
    if (href === '/home') return pathname === '/home'
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left: IPS logo — prominent */}
          <Link href="/home" className="flex items-center gap-3">
            <IPSLogo className="h-10 w-auto" height={40} priority />
          </Link>

          {/* Center/Right: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href)
                    ? 'bg-accent text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors'
                    : 'text-ips-gray hover:text-ips-dark hover:bg-ips-light rounded-lg px-4 py-2 text-sm font-medium transition-colors'
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Far right: cohort label + logout + hamburger */}
          <div className="flex items-center gap-2">
            <span className="hidden lg:flex items-center gap-2 text-[10px] text-ips-gray border border-gray-200 rounded-full px-3 py-1">
              <XavierBadge className="h-4 w-auto opacity-60" />
              EMBA&nbsp;2026
            </span>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="hidden md:flex items-center gap-1.5 text-[10px] text-ips-gray hover:text-ips-red border border-gray-200 hover:border-ips-red/30 rounded-full px-3 py-1 transition-colors"
              title="Sign out"
            >
              <LogOut size={12} />
              {loggingOut ? 'Signing out...' : 'Sign Out'}
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-ips-gray hover:text-ips-dark hover:bg-ips-light transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={
                  isActive(item.href)
                    ? 'bg-accent text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors'
                    : 'text-ips-gray hover:text-ips-dark hover:bg-ips-light rounded-lg px-4 py-2 text-sm font-medium transition-colors'
                }
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 px-4 text-xs text-ips-gray flex items-center justify-between">
              <span>Xavier EMBA&nbsp;·&nbsp;2026</span>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex items-center gap-1 text-ips-gray hover:text-ips-red transition-colors"
              >
                <LogOut size={12} />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
