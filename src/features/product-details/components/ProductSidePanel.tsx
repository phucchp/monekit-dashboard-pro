import { healthChecks, metadata } from '../data'

function ProductSidePanel() {
  return (
    <aside className="space-y-4">
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900 md:text-xl">Product Health</h3>
        <ul className="mt-4 space-y-3">
          {healthChecks.map((check) => (
            <li key={check.title} className="flex items-start gap-2">
              <span
                className={[
                  'mt-1 h-3 w-3 rounded-full border',
                  check.healthy ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300 bg-transparent',
                ].join(' ')}
              />
              <div>
                <p className={check.healthy ? 'text-slate-800' : 'text-slate-400'}>{check.title}</p>
                <p className="text-xs text-slate-400">{check.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-3/4 rounded-full bg-emerald-500" />
          </div>
          <p className="mt-2 text-center text-sm text-slate-500">75% Configuration Complete</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900 md:text-xl">Metadata</h3>
        <div className="mt-4 space-y-3">
          {metadata.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span className="text-slate-500">{item.label}</span>
              <span className="font-mono text-slate-700">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <button
        type="button"
        className="w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600"
      >
        Archive Product
      </button>
    </aside>
  )
}

export default ProductSidePanel
