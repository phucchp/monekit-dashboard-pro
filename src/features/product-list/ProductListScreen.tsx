import { Link } from 'react-router-dom'
import { storeSections, type ProductRow, type StoreSection } from './data'

function StatusPill({ status }: { status?: ProductRow['status'] }) {
  if (!status) {
    return <span className="text-xs font-semibold text-blue-600">Attach</span>
  }

  if (status === 'Published') {
    return (
      <span className="inline-flex rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.25px] text-emerald-600 uppercase">
        {status}
      </span>
    )
  }

  return (
    <span className="inline-flex rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.25px] text-amber-600 uppercase">
      {status}
    </span>
  )
}

function StoreSectionCard({ section }: { section: StoreSection }) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4">
        <h3 className="text-base font-bold text-slate-900">{section.title}</h3>
        <div className="flex items-center gap-3 text-xs font-semibold">
          {section.secondaryActionLabel ? (
            <button type="button" className="text-blue-600">
              {section.secondaryActionLabel}
            </button>
          ) : null}
          <button type="button" className="text-slate-600">
            + {section.actionLabel}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-slate-50 text-[11px] tracking-[0.6px] text-slate-400 uppercase">
            <tr>
              <th className="px-5 py-3 text-left">Product ID</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left">Entitlements</th>
              <th className="px-5 py-3 text-right">Created Date</th>
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={`${section.key}-${row.id}`} className="border-t border-slate-100">
                <td className="px-5 py-3.5 align-top">
                  <div className="font-semibold text-slate-900">
                    {section.key === 'web' && row.name === 'VIP Pass (Monthly)' ? (
                      <Link to="/products/vip-pass-monthly" className="hover:text-blue-600">
                        {row.name}
                      </Link>
                    ) : (
                      row.name
                    )}
                  </div>
                  <div className="font-mono text-xs text-slate-500">{row.id}</div>
                </td>
                <td className="px-5 py-3.5 align-top">
                  {row.status ? <StatusPill status={row.status} /> : <span className="text-slate-300">-</span>}
                </td>
                <td className="px-5 py-3.5 align-top">
                  {row.entitlement === 'Attach' ? (
                    <span className="text-xs font-semibold text-blue-600">Attach</span>
                  ) : (
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                      {row.entitlement}
                    </span>
                  )}
                </td>
                <td className="px-5 py-3.5 text-right align-top font-mono text-xs text-slate-500">{row.created}</td>
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
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
        <div className="text-sm">
          <span className="text-slate-400">Monetization</span>
          <span className="px-2 text-slate-300">›</span>
          <span className="font-semibold text-slate-800">Products</span>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative w-56">
            <input
              className="w-full rounded-full bg-slate-100 py-2 pr-4 pl-9 text-sm text-slate-600"
              placeholder="Search products..."
            />
            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">⌕</span>
          </div>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            ⍰
          </button>
        </div>
      </header>

      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Product Catalog</h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage cross-platform product mapping and synchronization.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
            >
              Entitlements
            </button>
            <Link
              to="/products/new"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              + New Product
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
