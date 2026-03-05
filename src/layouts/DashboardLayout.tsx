import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type IconName =
  | 'dashboard'
  | 'projects'
  | 'analytics'
  | 'customers'
  | 'transactions'
  | 'products'
  | 'currency'
  | 'offerings'
  | 'paywalls'
  | 'entitlements'
  | 'settings'

type NavItem = {
  label: string
  to?: string
  icon: IconName
}

function NavIcon({ name }: { name: IconName }) {
  if (name === 'dashboard') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="5" rx="1.5" />
        <rect x="13" y="10" width="8" height="11" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
      </svg>
    )
  }

  if (name === 'customers') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19a6 6 0 0 1 12 0" />
        <circle cx="17" cy="9" r="2" />
      </svg>
    )
  }

  if (name === 'projects') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 5v14" />
        <path d="M3 10h18" />
      </svg>
    )
  }

  if (name === 'analytics') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 19h16" />
        <path d="M7 15v-3" />
        <path d="M12 15V7" />
        <path d="M17 15v-5" />
      </svg>
    )
  }

  if (name === 'transactions') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
      </svg>
    )
  }

  if (name === 'products') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 7.5 12 3l9 4.5-9 4.5Z" />
        <path d="M3 7.5V16.5L12 21l9-4.5V7.5" />
      </svg>
    )
  }

  if (name === 'currency') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M9 9h5a2 2 0 0 1 0 4H10a2 2 0 0 0 0 4h5" />
      </svg>
    )
  }

  if (name === 'offerings') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 12 12 3l9 9-9 9-9-9Z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  }

  if (name === 'paywalls') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }

  if (name === 'entitlements') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 3 4 7v6c0 5 4 7 8 8 4-1 8-3 8-8V7Z" />
        <path d="m9.5 12.5 1.8 1.8 3.2-3.8" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.7l.1.1a1.9 1.9 0 1 1-2.6 2.6l-.1-.1a1.6 1.6 0 0 0-1.7-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.7.3l-.1.1a1.9 1.9 0 0 1-2.6-2.6l.1-.1a1.6 1.6 0 0 0 .3-1.7 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.7l-.1-.1a1.9 1.9 0 1 1 2.6-2.6l.1.1a1.6 1.6 0 0 0 1.7.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.7-.3l.1-.1a1.9 1.9 0 1 1 2.6 2.6l-.1.1a1.6 1.6 0 0 0-.3 1.7v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.5 1Z" />
    </svg>
  )
}

const overviewItems: NavItem[] = [
  { label: 'Dashboard', to: '/', icon: 'dashboard' },
  { label: 'Projects List', to: '/projects', icon: 'projects' },
  { label: 'Global Analytics', icon: 'analytics' },
]
const usersDataItems: NavItem[] = [
  { label: 'Customers', to: '/customers', icon: 'customers' },
  { label: 'Transactions', icon: 'transactions' },
]
const monetizationItems: NavItem[] = [
  { label: 'Products', to: '/products', icon: 'products' },
  { label: 'Virtual Currency', to: '/virtual-currencies', icon: 'currency' },
  { label: 'Offerings', icon: 'offerings' },
  { label: 'Paywalls', icon: 'paywalls' },
  { label: 'Entitlements', icon: 'entitlements' },
]
const configurationItems: NavItem[] = [
  { label: 'Project Settings', to: '/settings', icon: 'settings' },
]

function NavSection({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <section>
      <p className="px-3 text-[10px] font-bold tracking-[1px] text-slate-400 uppercase">{title}</p>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={`${title}-${item.label}`}>
            {item.to ? (
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                  ].join(' ')
                }
              >
                <NavIcon name={item.icon} />
                {item.label}
              </NavLink>
            ) : (
              <span className="flex cursor-default items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-400">
                <NavIcon name={item.icon} />
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

function DashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-900">
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[256px_minmax(0,1fr)]">
        <aside className="border-b border-slate-200 bg-white lg:flex lg:flex-col lg:border-r lg:border-b-0">
          <div className="border-b border-slate-200 p-4 sm:p-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 px-1">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-xs font-bold text-white">
                  B
                </div>
                <p className="text-sm font-black tracking-tight uppercase">Billing Console</p>
              </div>
              <button
                type="button"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <p className="px-1 text-[10px] font-bold tracking-[1px] text-slate-400 uppercase">
                Active Project
              </p>
              <button
                type="button"
                className="mt-2 flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-xs font-bold text-white">
                  FT
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">Fitness Tracker</p>
                  <p className="text-[10px] font-semibold text-emerald-500 uppercase">Production</p>
                </div>
                <span className="text-slate-400">›</span>
              </button>
            </div>
          </div>

          <div
            className={[
              menuOpen ? 'block' : 'hidden',
              'lg:block lg:flex lg:flex-1 lg:flex-col',
            ].join(' ')}
          >
            <nav className="space-y-6 p-4 lg:flex-1 lg:overflow-y-auto">
              <NavSection title="Overview" items={overviewItems} />
              <NavSection title="Users & Data" items={usersDataItems} />
              <NavSection title="Monetization" items={monetizationItems} />
              <NavSection title="Configuration" items={configurationItems} />
            </nav>

            <div className="border-t border-slate-200 p-4">
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-slate-50"
              >
                <div className="h-8 w-8 rounded-full bg-amber-200" />
                <div>
                  <p className="text-sm font-semibold">Alex Rivers</p>
                  <p className="text-[10px] font-bold tracking-[0.2px] text-slate-500 uppercase">
                    Organization Admin
                  </p>
                </div>
              </button>
            </div>
          </div>
        </aside>

        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
