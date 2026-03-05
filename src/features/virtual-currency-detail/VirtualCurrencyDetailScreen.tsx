import { packageRows, webhookEvents } from './data'

type IconName =
  | 'history'
  | 'save'
  | 'arrowUp'
  | 'check'
  | 'settings'
  | 'exchange'
  | 'info'
  | 'edit'
  | 'sync'
  | 'link'
  | 'warning'

function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'history') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4v6h6" />
        <path d="M20 12a8 8 0 1 1-2.3-5.7L20 8" />
      </svg>
    )
  }

  if (name === 'save') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 4h11l3 3v13H5z" />
        <path d="M8 4v6h8" />
        <path d="M9 18h6" />
      </svg>
    )
  }

  if (name === 'arrowUp') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m7 13 5-5 5 5" />
      </svg>
    )
  }

  if (name === 'check') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.5 2.3 2.3 4.8-5.3" />
      </svg>
    )
  }

  if (name === 'settings') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.7l.1.1a1.9 1.9 0 1 1-2.6 2.6l-.1-.1a1.6 1.6 0 0 0-1.7-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.7.3l-.1.1a1.9 1.9 0 0 1-2.6-2.6l.1-.1a1.6 1.6 0 0 0 .3-1.7 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.7l-.1-.1a1.9 1.9 0 1 1 2.6-2.6l.1.1a1.6 1.6 0 0 0 1.7.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.7-.3l.1-.1a1.9 1.9 0 1 1 2.6 2.6l-.1.1a1.6 1.6 0 0 0-.3 1.7v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.5 1Z" />
      </svg>
    )
  }

  if (name === 'exchange') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 1v5h5" />
        <path d="M7 23v-5H2" />
        <path d="M20 6a8 8 0 0 0-14.9 2" />
        <path d="M4 18a8 8 0 0 0 14.9-2" />
      </svg>
    )
  }

  if (name === 'info') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <circle cx="12" cy="8" r=".8" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'sync') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6v5h-5" />
        <path d="M4 18v-5h5" />
        <path d="M6 9a7 7 0 0 1 12-2" />
        <path d="M18 15a7 7 0 0 1-12 2" />
      </svg>
    )
  }

  if (name === 'warning') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4 3 20h18z" />
        <path d="M12 10v4" />
        <circle cx="12" cy="17" r=".8" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'link') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.1 0l2.1-2.1a5 5 0 0 0-7.1-7.1L10.8 5" />
        <path d="M14 11a5 5 0 0 0-7.1 0L4.8 13.1a5 5 0 0 0 7.1 7.1L13.2 19" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m4 15.5 9-9 4 4-9 9-4 1z" />
      <path d="m11.5 8 4 4" />
    </svg>
  )
}

function MetricCard({
  title,
  value,
  growth,
  status,
}: {
  title: string
  value: string
  growth?: string
  status?: string
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <div className="mt-1 flex items-end gap-2">
        <p className="text-[38px] leading-none font-black tracking-[-0.4px] text-slate-900">{value}</p>
        {growth ? (
          <span className="inline-flex items-center gap-1 pb-1 text-sm font-bold text-emerald-500">
            <Icon name="arrowUp" className="h-3 w-3" />
            {growth}
          </span>
        ) : null}
        {status ? (
          <span className="inline-flex items-center gap-1 pb-1 text-sm font-bold text-emerald-500">
            <Icon name="check" className="h-3.5 w-3.5" />
            {status}
          </span>
        ) : null}
      </div>
    </article>
  )
}

function VirtualCurrencyDetailScreen() {
  return (
    <section className="min-h-full bg-slate-100/80">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur sm:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>Monetization</span>
              <span>›</span>
              <span>Virtual Currencies</span>
              <span>›</span>
              <span className="font-semibold text-slate-600">Edit Gems</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <h1 className="text-[40px] leading-tight font-bold tracking-[-0.5px] text-slate-900">
                Edit Currency: Gems
              </h1>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                <Icon name="check" className="h-3 w-3" /> Active
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              <Icon name="history" className="h-4 w-4" />
              View Audit Log
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              <Icon name="save" className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>
      </header>

      <div className="w-full p-4 sm:p-6 lg:p-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <MetricCard title="Total Circulation" value="1.45M" growth="5.2%" />
              <MetricCard title="Active Wallets" value="12.3k" growth="1.2%" />
              <MetricCard title="Sync Status" value="Synced" status="✓" />
            </div>

            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                <h2 className="text-3xl font-bold text-slate-900">General Settings</h2>
                <button
                  type="button"
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  aria-label="General settings"
                >
                  <Icon name="settings" className="h-5 w-5" />
                </button>
              </header>

              <div className="space-y-5 px-5 py-5 sm:px-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Currency Name</span>
                    <input
                      className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700"
                      defaultValue="Gems"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Currency Code</span>
                    <input
                      className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700"
                      defaultValue="GEM"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Description</span>
                  <textarea
                    className="h-24 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                    defaultValue="Premium currency for purchasing exclusive items and skipping wait times."
                  />
                </label>
              </div>
            </section>

            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Exchange Rate Configuration</h2>
                  <p className="text-sm text-slate-500">Base conversion rates for real-world currency.</p>
                </div>
                <button
                  type="button"
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  aria-label="Refresh exchange"
                >
                  <Icon name="exchange" className="h-5 w-5" />
                </button>
              </header>

              <div className="space-y-4 px-5 py-5 sm:px-6">
                <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:items-end">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Base Currency (USD)</span>
                    <div className="relative">
                      <span className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">$</span>
                      <input
                        className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pr-3 pl-7 text-sm text-slate-700"
                        defaultValue="1.00"
                      />
                    </div>
                  </label>

                  <div className="hidden pb-2 text-center text-slate-400 md:block">→</div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Virtual Amount (GEM)</span>
                    <div className="relative">
                      <span className="absolute top-1/2 left-3 -translate-y-1/2 text-base text-violet-500">●</span>
                      <input
                        className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pr-3 pl-7 text-sm text-slate-700"
                        defaultValue="100"
                      />
                    </div>
                  </label>
                </div>

                <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm text-blue-700">
                  <p className="flex items-start gap-2">
                    <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0" />
                    Changing the base exchange rate will affect all dynamic pricing calculations but
                    will not change existing static SKU prices. Please recalculate your SKUs after
                    saving.
                  </p>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold text-slate-900">Top-up Packages</h2>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
                    5 Active
                  </span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  + Add Package
                </button>
              </header>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                  <thead className="bg-slate-50 text-[10px] font-bold tracking-[0.8px] text-slate-400 uppercase">
                    <tr>
                      <th className="px-5 py-3 text-left">SKU ID</th>
                      <th className="px-5 py-3 text-left">Name</th>
                      <th className="px-5 py-3 text-left">Amount</th>
                      <th className="px-5 py-3 text-left">Price (USD)</th>
                      <th className="px-5 py-3 text-left">Status</th>
                      <th className="px-5 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {packageRows.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50/70">
                        <td className="px-5 py-4 font-mono text-xs text-slate-500">{row.sku}</td>
                        <td className="px-5 py-4 font-semibold text-slate-900">{row.name}</td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.amount.split('\n').map((line) => (
                            <p key={`${row.id}-${line}`} className="leading-5">
                              {line}
                            </p>
                          ))}
                        </td>
                        <td className="px-5 py-4 font-semibold text-slate-900">{row.price}</td>
                        <td className="px-5 py-4">
                          <span
                            className={[
                              'inline-flex rounded-full px-2.5 py-1 text-xs font-semibold',
                              row.status === 'Active'
                                ? 'bg-emerald-100 text-emerald-600'
                                : 'bg-amber-100 text-amber-700',
                            ].join(' ')}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            className="inline-flex rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
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
          </div>

          <div className="space-y-6">
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-3xl font-bold text-slate-900">Integration Health</h3>

              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-semibold text-slate-600">CMS Webhook</p>
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Operational
                    </span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-emerald-500" />
                  <p className="mt-2 text-xs text-slate-500">Endpoint: https://api.cms.com/hooks/v1</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Last Successful Sync</p>
                  <p className="text-2xl font-bold text-slate-900">Today, 10:42 AM</p>
                  <p className="text-xs text-slate-400">2 mins ago</p>
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Icon name="sync" className="h-4 w-4" />
                  View Sync Log
                </button>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">Recent Webhook Events</h3>
                <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {webhookEvents.map((event) => (
                  <article key={event.id} className="flex items-start gap-2">
                    <span
                      className={[
                        'mt-1 inline-flex',
                        event.tone === 'warning' ? 'text-amber-500' : 'text-emerald-500',
                      ].join(' ')}
                    >
                      <Icon
                        name={event.tone === 'warning' ? 'warning' : 'check'}
                        className="h-3.5 w-3.5"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800">{event.name}</p>
                      <p className="font-mono text-[11px] text-slate-400">{event.code}</p>
                      <p className="text-xs text-slate-400">{event.time}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VirtualCurrencyDetailScreen
