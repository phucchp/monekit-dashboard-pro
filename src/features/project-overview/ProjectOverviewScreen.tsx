const metricCards = [
  { label: 'Net Revenue', value: '$48,290', delta: '+12.4%', deltaTone: 'text-emerald-600 bg-emerald-50' },
  {
    label: 'Active Subscribers',
    value: '2,842',
    delta: '+8.2%',
    deltaTone: 'text-emerald-600 bg-emerald-50',
  },
  { label: 'Avg. Basket Size', value: '$32.10', delta: 'Stable', deltaTone: 'text-slate-500 bg-slate-100' },
  { label: 'Churn Rate', value: '1.8%', delta: '-0.4%', deltaTone: 'text-rose-600 bg-rose-50' },
]

const transactions = [
  { name: 'Jordan Smith', item: 'Premium Annual Renewal', amount: '$99.00', time: '2 min ago' },
  { name: 'Sarah Chen', item: '500 Gold Coins Pack', amount: '$4.99', time: '14 min ago' },
  { name: 'John Doe', item: 'Premium Monthly', amount: '$9.99', time: '1h ago' },
]

const products = [
  { name: 'Premium Annual', id: 'sku_premium_yearly', revenue: '$24,900', growth: '+15%', status: 'Active' },
  {
    name: 'Premium Monthly',
    id: 'sku_premium_monthly',
    revenue: '$12,450',
    growth: '+4.2%',
    status: 'Active',
  },
]

function ProjectOverviewScreen() {
  return (
    <section className="min-h-full">
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
        <div className="text-sm">
          <span className="text-slate-400">Project</span>
          <span className="px-2 text-slate-300">›</span>
          <span className="font-semibold text-slate-800">Fitness Tracker iOS</span>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <div className="relative w-60">
            <input
              className="w-full rounded-full bg-slate-100 py-2 pr-4 pl-9 text-sm text-slate-600"
              placeholder="Search customers or tx..."
            />
            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">⌕</span>
          </div>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            🔔
          </button>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            💬
          </button>
        </div>
      </header>

      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Project Overview</h1>
            <p className="mt-1 text-sm text-slate-500">
              Real-time monetization and health metrics for Fitness Tracker iOS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex rounded-lg border border-slate-200 bg-white p-1 text-xs font-bold">
              <button type="button" className="rounded-md bg-slate-100 px-3 py-1.5 text-slate-900">
                Live
              </button>
              <button type="button" className="rounded-md px-3 py-1.5 text-slate-400">
                Sandbox
              </button>
            </div>
            <button type="button" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              Last 30 Days
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((metric) => (
            <article key={metric.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-end">
                <span className={["rounded-full px-2.5 py-1 text-xs font-bold", metric.deltaTone].join(' ')}>
                  {metric.delta}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-500">{metric.label}</p>
              <p className="mt-1 text-4xl font-bold text-slate-900">{metric.value}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <h3 className="text-xl font-bold text-slate-900 md:text-lg">Product Performance</h3>
                <a href="/products" className="text-sm font-semibold text-blue-600">
                  Manage Products
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-sm">
                  <thead className="bg-slate-50 text-[11px] tracking-[0.6px] text-slate-400 uppercase">
                    <tr>
                      <th className="px-5 py-3 text-left">Product</th>
                      <th className="px-5 py-3 text-left">Revenue</th>
                      <th className="px-5 py-3 text-left">Growth</th>
                      <th className="px-5 py-3 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-t border-slate-100">
                        <td className="px-5 py-3.5">
                          <p className="font-semibold text-slate-900">{product.name}</p>
                          <p className="font-mono text-xs text-slate-500">{product.id}</p>
                        </td>
                        <td className="px-5 py-3.5 font-semibold text-slate-800">{product.revenue}</td>
                        <td className="px-5 py-3.5 font-semibold text-emerald-600">{product.growth}</td>
                        <td className="px-5 py-3.5">
                          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600 uppercase">
                            {product.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 md:text-lg">Revenue Growth</h3>
                  <p className="text-sm text-slate-500">Comparison between subscription & currency sales</p>
                </div>
                <button type="button" className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  Weekly View
                </button>
              </div>
              <svg viewBox="0 0 700 260" className="mt-4 h-64 w-full">
                <defs>
                  <linearGradient id="rev-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M20 220 L60 200 L100 210 L140 165 L180 175 L220 135 L260 155 L300 115 L340 125 L380 85 L420 95 L460 55 L500 75 L540 45 L580 65 L620 35 L680 55 L680 260 L20 260 Z" fill="url(#rev-fill)" />
                <path d="M20 220 L60 200 L100 210 L140 165 L180 175 L220 135 L260 155 L300 115 L340 125 L380 85 L420 95 L460 55 L500 75 L540 45 L580 65 L620 35 L680 55" fill="none" stroke="#1d4ed8" strokeWidth="3" />
                <text x="20" y="250" fill="#94a3b8" fontSize="11">WEEK 1</text>
                <text x="220" y="250" fill="#94a3b8" fontSize="11">WEEK 2</text>
                <text x="420" y="250" fill="#94a3b8" fontSize="11">WEEK 3</text>
                <text x="620" y="250" fill="#94a3b8" fontSize="11">WEEK 4</text>
              </svg>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-5 py-4">
                <h3 className="text-xl font-bold text-slate-900 md:text-lg">Recent Transactions</h3>
              </div>
              <ul>
                {transactions.map((tx) => (
                  <li key={`${tx.name}-${tx.time}`} className="flex items-center justify-between border-b border-slate-100 px-5 py-4 last:border-b-0">
                    <div>
                      <p className="font-semibold text-slate-900">{tx.name}</p>
                      <p className="text-sm text-slate-500">{tx.item}</p>
                      <p className="text-xs text-slate-400">{tx.time}</p>
                    </div>
                    <p className="font-bold text-slate-900">{tx.amount}</p>
                  </li>
                ))}
              </ul>
              <div className="p-4">
                <button type="button" className="w-full rounded-lg bg-slate-100 py-2 text-sm font-semibold text-slate-600">
                  View All Data
                </button>
              </div>
            </section>

            <section className="rounded-xl bg-indigo-600 p-5 text-white shadow-lg shadow-indigo-200">
              <h3 className="text-xl font-bold md:text-lg">Project Configuration</h3>
              <p className="mt-2 text-sm text-indigo-100">
                Your API entitlements and webhooks are currently active for the production environment.
              </p>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-indigo-100">API Health</span>
                <span className="font-bold">100% Operational</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-indigo-300/40">
                <div className="h-2 w-full rounded-full bg-white" />
              </div>
              <a
                href="/settings"
                className="mt-4 block rounded-lg bg-white py-2 text-center text-sm font-semibold text-indigo-600"
              >
                Go to Settings
              </a>
            </section>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ProjectOverviewScreen
