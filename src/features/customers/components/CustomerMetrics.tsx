import { customerMetrics } from '../data'

function CustomerMetrics() {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-3">
      {customerMetrics.map((metric) => (
        <article key={metric.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">{metric.label}</p>
          <p className="mt-1 text-3xl font-bold text-slate-900">{metric.value}</p>
          {metric.hint ? <p className="text-xs text-slate-400">{metric.hint}</p> : null}
        </article>
      ))}
    </div>
  )
}

export default CustomerMetrics
