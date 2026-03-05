import { Link } from 'react-router-dom'
import {
  currencySummaryCards,
  liquidityBurned,
  liquidityMinted,
  packageRows,
  recentLedger,
} from './data'

type IconName =
  | 'chevronRight'
  | 'search'
  | 'bell'
  | 'plus'
  | 'coin'
  | 'gem'
  | 'edit'
  | 'refresh'
  | 'shield'

function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'chevronRight') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }

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

  if (name === 'plus') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    )
  }

  if (name === 'coin') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 12h6" />
      </svg>
    )
  }

  if (name === 'gem') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m4 10 4-5h8l4 5-8 9-8-9Z" />
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

  if (name === 'refresh') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 4v6h-6" />
        <path d="M20 10a8 8 0 1 0 2 5" />
      </svg>
    )
  }

  if (name === 'shield') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3 4 7v6c0 5 4 7 8 8 4-1 8-3 8-8V7Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 18 18 8" />
      <path d="M8 8h10v10" />
    </svg>
  )
}

function CurrencySummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_220px]">
      {currencySummaryCards.map((card) => (
        <article key={card.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-6">
            <div className="flex items-center gap-3">
              <span
                className={[
                  'flex h-10 w-10 items-center justify-center rounded-lg',
                  card.tone === 'gold'
                    ? 'bg-amber-400 text-white'
                    : 'bg-emerald-500 text-white',
                ].join(' ')}
              >
                <Icon name={card.tone === 'gold' ? 'coin' : 'gem'} className="h-4 w-4" />
              </span>
              <div>
                <p className="text-lg font-bold text-slate-900">{card.name}</p>
                <p className="text-[11px] font-bold tracking-[0.8px] text-slate-400 uppercase">{card.kind}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-semibold text-slate-400">Rate</p>
              <p className="text-sm font-bold text-slate-900">{card.rateLabel}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 px-6 py-5">
            <div>
              <p className="text-[11px] font-bold tracking-[0.6px] text-slate-400 uppercase">Total Circulation</p>
              <p className="mt-1 text-3xl font-black tracking-tight text-slate-900">{card.circulation}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.6px] text-slate-400 uppercase">Monthly Growth</p>
              <p className="mt-1 text-3xl font-black tracking-tight text-emerald-500">{card.growth}</p>
            </div>
          </div>
        </article>
      ))}

      <aside className="rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 text-white shadow-lg">
        <div className="flex items-center gap-2 text-[11px] font-black tracking-[1.2px] uppercase text-indigo-100">
          <Icon name="coin" className="h-3.5 w-3.5" />
          Quick Stats
        </div>
        <p className="mt-4 text-4xl font-black tracking-tight">$4,290.00</p>
        <p className="mt-1 text-sm text-indigo-100">Pending revenue from currency sales this month</p>
        <button
          type="button"
          className="mt-6 w-full rounded-lg border border-indigo-300/50 bg-indigo-400/30 px-3 py-2 text-sm font-semibold hover:bg-indigo-400/40"
        >
          Download Ledger
        </button>
      </aside>
    </div>
  )
}

function MarketLiquidityChart() {
  const maxValue = Math.max(...liquidityMinted, ...liquidityBurned)

  const toPolylinePoints = (points: number[]) =>
    points
      .map((value, index) => {
        const x = (index / (points.length - 1)) * 100
        const y = 72 - (value / maxValue) * 56
        return `${x},${y}`
      })
      .join(' ')

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Market Liquidity</h3>
          <p className="text-sm text-slate-500">Token burn vs minting rates (last 7 days)</p>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-bold tracking-[0.6px] uppercase">
          <span className="inline-flex items-center gap-1.5 text-blue-500">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Minted
          </span>
          <span className="inline-flex items-center gap-1.5 text-pink-500">
            <span className="h-2.5 w-2.5 rounded-full bg-pink-500" /> Burned
          </span>
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6">
        <svg viewBox="0 0 100 76" className="h-44 w-full">
          <g stroke="#e2e8f0" strokeWidth="0.35">
            {[16, 32, 48, 64].map((value) => (
              <line key={value} x1="0" y1={value} x2="100" y2={value} />
            ))}
          </g>
          <polyline fill="none" stroke="#2680f7" strokeWidth="0.9" points={toPolylinePoints(liquidityMinted)} />
          <polyline
            fill="none"
            stroke="#f43f5e"
            strokeWidth="0.8"
            strokeDasharray="1.4 1"
            points={toPolylinePoints(liquidityBurned)}
          />
        </svg>
        <div className="mt-2 grid grid-cols-7 text-center text-[10px] font-bold tracking-[0.8px] text-slate-400 uppercase">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </section>
  )
}

function VirtualCurrencyListScreen() {
  return (
    <section className="min-h-full">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-sm sm:px-8">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-400">Monetization</span>
          <Icon name="chevronRight" className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-800">Virtual Currency</span>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative w-64">
            <input
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pr-4 pl-9 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Search currencies..."
            />
            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
              <Icon name="search" className="h-4 w-4" />
            </span>
          </div>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Notifications">
            <Icon name="bell" className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="w-full space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">Virtual Currency</h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage exchange rates, packages, and circulation for your project.
            </p>
          </div>

          <Link
            to="/virtual-currencies/new"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            <Icon name="plus" className="h-4 w-4" /> New Currency
          </Link>
        </div>

        <CurrencySummary />

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <h3 className="text-2xl font-bold text-slate-900">Top-up Packages</h3>
                <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Manage All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                  <thead className="bg-slate-50 text-[11px] font-bold tracking-[0.8px] text-slate-400 uppercase">
                    <tr>
                      <th className="px-6 py-3 text-left">Package Name</th>
                      <th className="px-6 py-3 text-left">Contents</th>
                      <th className="px-6 py-3 text-right">Price</th>
                      <th className="px-6 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {packageRows.map((item, index) => (
                      <tr key={item.id} className="hover:bg-slate-50/80">
                        <td className="px-6 py-4 align-top">
                          <p className="font-bold text-slate-900">
                            {index === 1 ? (
                              <Link to="/virtual-currencies/gems" className="hover:text-blue-600">
                                {item.name}
                              </Link>
                            ) : (
                              item.name
                            )}
                          </p>
                          <p className="text-xs text-slate-400">{item.sku}</p>
                        </td>
                        <td className="px-6 py-4 align-top">
                          <div className="space-y-1 text-sm text-slate-600">
                            {item.contents.map((content) => (
                              <div key={content} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                                {content}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right align-top font-semibold text-slate-900">{item.price}</td>
                        <td className="px-6 py-4 text-right align-top">
                          <button
                            type="button"
                            className="inline-flex rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                            aria-label="Edit package"
                          >
                            <Icon name="edit" className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <MarketLiquidityChart />
          </div>

          <div className="space-y-6">
            <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <h3 className="text-2xl font-bold text-slate-900">Recent Ledger</h3>
                <button type="button" className="text-slate-400 hover:text-slate-600" aria-label="Refresh ledger">
                  <Icon name="refresh" className="h-4 w-4" />
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {recentLedger.map((entry) => (
                  <article key={entry.id} className="flex items-start gap-3 px-6 py-4">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                      {entry.user.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-900">{entry.user}</p>
                      <p className="truncate text-xs text-slate-500">{entry.note}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{entry.value}</p>
                      <p className="text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">{entry.status}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-xl bg-slate-900 p-6 text-slate-100 shadow-lg">
              <div className="flex items-center gap-2 text-sm font-bold">
                <span className="rounded-md bg-amber-400/20 p-1 text-amber-300">
                  <Icon name="shield" className="h-4 w-4" />
                </span>
                Currency Rules
              </div>
              <p className="mt-4 text-sm text-slate-300">
                Automated anti-fraud and market caps are active. Project-level currency ceiling is set to 10M Gold.
              </p>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Ceiling Utilization</span>
                  <span>12.4%</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-700">
                  <div className="h-1.5 w-[12.4%] rounded-full bg-amber-400" />
                </div>
              </div>
              <button type="button" className="mt-6 w-full rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                Adjust Market Limits
              </button>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VirtualCurrencyListScreen
