import { NavLink, Outlet } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const navItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Settings', to: '/settings' },
]

function DashboardLayout() {
  const pageTitle = useAppSelector((state) => state.ui.pageTitle)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 md:grid-cols-[240px_1fr]">
        <aside className="border-b border-slate-200 bg-white p-6 md:border-b-0 md:border-r">
          <p className="text-lg font-semibold">Monekit</p>
          <nav className="mt-6 flex gap-2 md:flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="p-6 md:p-8">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">{pageTitle}</h1>
            <p className="mt-1 text-sm text-slate-500">
              A production-ready starter for your dashboard.
            </p>
          </header>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
