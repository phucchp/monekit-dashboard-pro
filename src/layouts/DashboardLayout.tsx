import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const overviewItems = [{ label: 'Dashboard', to: '/' }]
const usersDataItems = [
  { label: 'Customers', to: '/customers' },
  { label: 'Transactions' },
]
const monetizationItems = [
  { label: 'Products', to: '/products' },
  { label: 'Virtual Currency' },
  { label: 'Offerings' },
  { label: 'Paywalls' },
  { label: 'Entitlements' },
]
const configurationItems = [{ label: 'Project Settings', to: '/settings' }]

type NavItem = {
  label: string
  to?: string
}

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
                    'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <span className="block cursor-default rounded-lg px-3 py-2 text-sm font-medium text-slate-400">
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
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
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

          <div className={[menuOpen ? 'block' : 'hidden', 'lg:block lg:flex lg:flex-1 lg:flex-col'].join(' ')}>
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
