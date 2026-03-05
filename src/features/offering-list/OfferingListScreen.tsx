import { Link } from 'react-router-dom'
import { offeringKpis, offerings, type OfferingKpi, type OfferingRow } from './data'

type IconName = 'search' | 'bell' | 'help' | 'plus' | 'settings' | 'edit' | 'kebab' | 'chevronRight' | 'spark'

function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'search') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </svg>
    )
  }

  if (name === 'bell') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9a6 6 0 1 1 12 0v4l2 2v1H4v-1l2-2V9Z" />
      </svg>
    )
  }

  if (name === 'help') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.8c-.7.7-1.3 1.1-1.3 2.2" />
      </svg>
    )
  }

  if (name === 'plus') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    )
  }

  if (name === 'settings') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.7l.1.1a1.9 1.9 0 1 1-2.6 2.6l-.1-.1a1.6 1.6 0 0 0-1.7-.3" />
      </svg>
    )
  }

  if (name === 'edit') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m3 17 1 4 4-1 11-11-4-4L3 17Z" />
      </svg>
    )
  }

  if (name === 'kebab') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="12" cy="6" r="1.8" />
        <circle cx="12" cy="12" r="1.8" />
        <circle cx="12" cy="18" r="1.8" />
      </svg>
    )
  }

  if (name === 'chevronRight') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
    </svg>
  )
}

function KpiCard({ item }: { item: OfferingKpi }) {
  const tone = {
    blue: 'border-blue-100 bg-blue-50 text-blue-700',
    amber: 'border-amber-100 bg-amber-50 text-amber-700',
    emerald: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  }[item.tone]

  return (
    <article className={["rounded-xl border px-5 py-4", tone].join(' ')}>
      <p className="text-[10px] font-bold tracking-[0.8px] uppercase">{item.label}</p>
      <p className="mt-1 text-3xl font-black tracking-tight">{item.value}</p>
    </article>
  )
}

function OfferingCard({ row }: { row: OfferingRow }) {
  const accent = {
    blue: 'border-l-blue-500',
    violet: 'border-l-violet-500',
    amber: 'border-l-amber-500',
  }[row.tone]

  return (
    <article className={["rounded-xl border border-slate-200 border-l-3 bg-white p-5 shadow-sm", accent].join(' ')}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link to={row.detailPath} className="text-3xl font-bold tracking-tight text-slate-900 hover:text-blue-600">
            {row.title}
          </Link>
          <span className="ml-2 rounded bg-blue-50 px-2 py-1 text-[10px] font-bold tracking-[0.6px] text-blue-600 uppercase">
            {row.status}
          </span>
          <p className="mt-1 text-sm text-slate-500">{row.subtitle}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            {row.chips.map((chip) => (
              <span key={chip} className="text-xs text-slate-500">{chip}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <Link to={row.detailPath} className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600">
            <Icon name="edit" className="h-4 w-4" />
          </Link>
          <button type="button" className="rounded p-1.5 hover:bg-slate-100 hover:text-slate-600">
            <Icon name="kebab" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="mt-5 text-[10px] font-bold tracking-[0.8px] text-slate-400 uppercase">Linked SKUs (Products)</p>
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        {row.skus.map((sku) => (
          <div
            key={`${row.id}-${sku.id}`}
            className={[
              'rounded-lg border border-slate-200 px-3 py-2',
              sku.muted ? 'flex items-center justify-center border-dashed text-slate-400' : 'bg-slate-50',
            ].join(' ')}
          >
            {sku.muted ? (
              <span className="text-xs font-bold uppercase">{sku.name}</span>
            ) : (
              <>
                <p className="text-sm font-semibold text-slate-800">{sku.name}</p>
                <p className="text-xs text-slate-500">{sku.sku}</p>
                <p className="mt-1 text-right text-sm font-bold text-slate-900">{sku.price}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

function OfferingListScreen() {
  return (
    <section className="min-h-full bg-slate-100/80">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur-sm sm:px-8">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-400">Monetization</span>
          <Icon name="chevronRight" className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-800">Offerings</span>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <label className="relative block w-64">
            <input
              className="h-9 w-full rounded-full border border-slate-200 bg-slate-50 py-2 pr-3 pl-9 text-sm text-slate-700"
              placeholder="Search offerings..."
            />
            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
              <Icon name="search" className="h-4 w-4" />
            </span>
          </label>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            <Icon name="bell" className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            <Icon name="help" className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="w-full p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900">Offerings</h1>
              <p className="mt-1 text-sm text-slate-500">
                Manage the logic layer mapping products to your paywalls and targeting rules.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-600">
                <Icon name="settings" className="h-4 w-4" /> Default Config
              </button>
              <Link
                to="/offerings/new"
                className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                <Icon name="plus" className="h-4 w-4" /> New Offering
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {offeringKpis.map((item) => (
              <KpiCard key={item.id} item={item} />
            ))}
          </div>

          <div className="space-y-4">
            {offerings.map((row) => (
              <OfferingCard key={row.id} row={row} />
            ))}
          </div>

          <section className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <Icon name="spark" className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">Create a Segmented Offering</h3>
            <p className="mt-2 text-sm text-slate-500">
              Target specific user cohorts with localized pricing or promotional SKUs to boost LTV.
            </p>
            <Link
              to="/offerings/new"
              className="mt-5 inline-flex rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Start New Offering
            </Link>
          </section>
        </div>
      </div>
    </section>
  )
}

export default OfferingListScreen
