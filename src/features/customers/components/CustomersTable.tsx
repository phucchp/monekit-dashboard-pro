import { customers, statusStyles } from '../data'

function CustomersTable() {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-slate-50 text-[11px] tracking-[1.1px] text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-4 text-left">Customer Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Current Plan</th>
              <th className="px-6 py-4 text-left">Total Spend</th>
              <th className="px-6 py-4 text-left">Platform</th>
              <th className="px-6 py-4" />
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.email} className="border-t border-slate-200">
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={[
                        'flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold',
                        customer.avatarTone,
                      ].join(' ')}
                    >
                      {customer.initials}
                    </div>
                    <span className="font-semibold text-slate-800">{customer.name}</span>
                  </div>
                </td>
                <td className="px-6 py-3 text-slate-500">{customer.email}</td>
                <td className="px-6 py-3">
                  <span
                    className={[
                      'inline-flex rounded-full px-2.5 py-1 text-xs font-semibold',
                      statusStyles[customer.status],
                    ].join(' ')}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-3 font-medium text-slate-800">{customer.plan}</td>
                <td className="px-6 py-3 font-bold text-slate-900">{customer.spend}</td>
                <td className="px-6 py-3 text-slate-500">{customer.platform}</td>
                <td className="px-6 py-3 text-center text-xl leading-none text-slate-400">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-6 py-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Showing 1-4 of 1,284 customers</p>
        <div className="flex items-center gap-1">
          <button type="button" className="h-8 w-8 rounded-lg border border-slate-200 bg-white text-slate-400">
            ‹
          </button>
          <button type="button" className="h-8 w-8 rounded-lg bg-blue-600 font-semibold text-white">
            1
          </button>
          <button type="button" className="h-8 w-8 rounded-lg font-semibold text-slate-600">
            2
          </button>
          <button type="button" className="h-8 w-8 rounded-lg font-semibold text-slate-600">
            3
          </button>
          <button type="button" className="h-8 w-8 rounded-lg border border-slate-200 bg-white text-slate-400">
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomersTable
