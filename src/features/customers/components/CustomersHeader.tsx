function CustomersHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Customer Management</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage and monitor all customer subscriptions and platform activity.
        </p>
      </div>
      <div className="flex w-full gap-3 sm:w-auto">
        <button
          type="button"
          className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm sm:flex-none"
        >
          Export CSV
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm sm:flex-none"
        >
          Add Customer
        </button>
      </div>
    </div>
  )
}

export default CustomersHeader
