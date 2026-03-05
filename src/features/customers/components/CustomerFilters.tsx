const statuses = ['All', 'Active', 'Trialing', 'Canceled']

function CustomerFilters() {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative w-full xl:max-w-md">
          <input
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-4 pl-10 text-sm text-slate-700 outline-none focus:border-blue-400"
            placeholder="Search by name, email, or user ID..."
          />
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="mr-1 font-bold tracking-[0.6px] text-slate-400 uppercase">Status:</span>
          {statuses.map((status) => (
            <button
              key={status}
              type="button"
              className={[
                'rounded-full px-3 py-1.5 font-semibold',
                status === 'All' ? 'bg-blue-50 text-blue-600' : 'text-slate-600',
              ].join(' ')}
            >
              {status}
            </button>
          ))}
          <span className="mx-2 hidden h-5 w-px bg-slate-200 sm:block" />
          <button
            type="button"
            className="rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-600"
          >
            Advanced Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerFilters
