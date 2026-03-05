import { Link } from 'react-router-dom'
import { storeSections, type ProductRow, type StoreSection } from './data'

type IconName = 'search' | 'help' | 'plus' | 'chevronRight' | 'download'

function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'search') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </svg>
    )
  }

  if (name === 'help') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.8c-.7.7-1.3 1.1-1.3 2.2" />
        <circle cx="12" cy="16.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'plus') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    )
  }

  if (name === 'download') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 4v11" />
        <path d="m8 11 4 4 4-4" />
        <path d="M4 20h16" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function StoreBadge({ sectionKey }: { sectionKey: string }) {
  const toneByStore: Record<string, string> = {
    web: 'bg-blue-50 text-blue-600',
    appstore: 'bg-slate-100 text-slate-700',
    playstore: 'bg-emerald-50 text-emerald-600',
    stripe: 'bg-indigo-50 text-indigo-600',
  }

  const labelByStore: Record<string, string> = {
    web: 'W',
    appstore: 'A',
    playstore: 'P',
    stripe: 'S',
  }

  return (
    <span
      className={[
        'inline-flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-black',
        toneByStore[sectionKey] ?? 'bg-slate-100 text-slate-700',
      ].join(' ')}
    >
      {labelByStore[sectionKey] ?? sectionKey.slice(0, 1).toUpperCase()}
    </span>
  )
}

function StatusPill({ status }: { status?: ProductRow['status'] }) {
  if (!status) return <span className="text-slate-300">-</span>

  if (status === 'Published') {
    return (
      <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.3px] text-emerald-600 uppercase">
        {status}
      </span>
    )
  }

  return (
    <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.3px] text-amber-700 uppercase">
      {status}
    </span>
  )
}

function StoreSectionCard({ section }: { section: StoreSection }) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <StoreBadge sectionKey={section.key} />
          <h3 className="text-base font-bold text-slate-900">{section.title}</h3>
          <span className="text-xs text-slate-400">{section.rows.length} products</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold">
          {section.secondaryActionLabel ? (
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-slate-600 hover:bg-slate-100"
            >
              <Icon name="download" className="h-3.5 w-3.5" />
              {section.secondaryActionLabel}
            </button>
          ) : null}
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-2.5 py-1.5 text-blue-600 hover:bg-blue-100"
          >
            <Icon name="plus" className="h-3.5 w-3.5" />
            {section.actionLabel}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-slate-50 text-[10px] font-bold tracking-[0.8px] text-slate-400 uppercase">
            <tr>
              <th className="px-5 py-3 text-left sm:px-6">Product</th>
              <th className="px-5 py-3 text-left sm:px-6">Status</th>
              <th className="px-5 py-3 text-left sm:px-6">Entitlements</th>
              <th className="px-5 py-3 text-right sm:px-6">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {section.rows.map((row) => (
              <tr key={`${section.key}-${row.id}`} className="hover:bg-slate-50/80">
                <td className="px-5 py-3.5 align-top sm:px-6">
                  <p className="font-semibold text-slate-900">
                    {section.key === 'web' && row.name === 'VIP Pass (Monthly)' ? (
                      <Link to="/products/vip-pass-monthly" className="hover:text-blue-600">
                        {row.name}
                      </Link>
                    ) : (
                      row.name
                    )}
                  </p>
                  <p className="font-mono text-xs text-slate-500">{row.id}</p>
                </td>
                <td className="px-5 py-3.5 align-top sm:px-6">
                  <StatusPill status={row.status} />
                </td>
                <td className="px-5 py-3.5 align-top sm:px-6">
                  {row.entitlement === 'Attach' ? (
                    <button
                      type="button"
                      className="text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      Attach
                    </button>
                  ) : (
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {row.entitlement}
                    </span>
                  )}
                </td>
                <td className="px-5 py-3.5 text-right align-top font-mono text-xs text-slate-500 sm:px-6">
                  {row.created}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function ProductListScreen() {
  return (
    <section className="min-h-full">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-sm sm:px-8">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-400">Monetization</span>
          <Icon name="chevronRight" className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-800">Products</span>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative w-56">
            <input
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pr-4 pl-9 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Search products..."
            />
            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
              <Icon name="search" className="h-4 w-4" />
            </span>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Help"
          >
            <Icon name="help" className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="w-full space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Product Catalog</h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage product mapping across platforms and keep metadata synchronized.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Entitlements
            </button>
            <Link
              to="/products/new"
              className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              <Icon name="plus" className="h-4 w-4" />
              New Product
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          {storeSections.map((section) => (
            <StoreSectionCard key={section.key} section={section} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductListScreen
