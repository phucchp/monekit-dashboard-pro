function CustomersTopBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
      <div className="text-sm">
        <span className="text-slate-400">Users & Data</span>
        <span className="px-2 text-slate-300">›</span>
        <span className="font-semibold text-slate-800">Customers</span>
      </div>
      <div className="flex gap-2 text-slate-500">
        <button type="button" className="rounded-lg p-2 hover:bg-slate-100" aria-label="Notifications">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3a5 5 0 0 0-5 5v2.7c0 .6-.2 1.2-.6 1.7L5 14h14l-1.4-1.6c-.4-.5-.6-1.1-.6-1.7V8a5 5 0 0 0-5-5Z" />
            <path d="M10 18a2 2 0 0 0 4 0" />
          </svg>
        </button>
        <button type="button" className="rounded-lg p-2 hover:bg-slate-100" aria-label="Messages">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default CustomersTopBar
