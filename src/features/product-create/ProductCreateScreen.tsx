import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const stores = ['App Store', 'Play Store', 'Stripe', 'Web']

type Entitlement = {
  id: string
  title: string
  description: string
  enabled: boolean
}

function ProductCreateScreen() {
  const navigate = useNavigate()
  const [selectedStore, setSelectedStore] = useState('App Store')
  const [entitlements, setEntitlements] = useState<Entitlement[]>([
    {
      id: 'premium',
      title: 'Premium Features',
      description: 'Access to all premium content and tools.',
      enabled: true,
    },
    {
      id: 'ad-removal',
      title: 'Ad Removal',
      description: 'Removes all advertising banners.',
      enabled: false,
    },
    {
      id: 'cloud',
      title: 'Cloud Storage',
      description: 'Enable 100GB cloud backup.',
      enabled: false,
    },
  ])

  return (
    <section className="min-h-full">
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
        <div className="text-sm">
          <span className="text-slate-400">Monetization</span>
          <span className="px-2 text-slate-300">›</span>
          <Link to="/products" className="text-slate-500 hover:text-slate-700">
            Products
          </Link>
          <span className="px-2 text-slate-300">›</span>
          <span className="font-semibold text-slate-800">Create New</span>
        </div>
        <div className="flex gap-2 text-slate-500">
          <button type="button" className="rounded-lg p-2 hover:bg-slate-100">🔔</button>
          <button type="button" className="rounded-lg p-2 hover:bg-slate-100">❔</button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-6 p-4 sm:p-6 lg:p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create New Product</h1>
          <p className="mt-1 text-sm text-slate-500">
            Configure your product&apos;s internal details, store mappings, and entitlements.
          </p>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">General Information</h2>
          <p className="mt-1 text-sm text-slate-500">Internal details used for identification within the dashboard.</p>

          <div className="mt-5 space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Internal Name</span>
              <input
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                placeholder="e.g. VIP Pass (Monthly)"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Description <span className="font-normal text-slate-400">(Optional)</span></span>
              <textarea
                className="h-24 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                placeholder="Brief description for internal reference..."
              />
            </label>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Store Mapping</h2>
          <p className="mt-1 text-sm text-slate-500">
            Connect this product to an existing item in a mobile or web store.
          </p>

          <div className="mt-5">
            <p className="mb-2 text-sm font-semibold text-slate-700">Select Store</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stores.map((store) => (
                <button
                  key={store}
                  type="button"
                  onClick={() => setSelectedStore(store)}
                  className={[
                    'rounded-xl border-2 px-4 py-4 text-sm font-semibold',
                    selectedStore === store
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-slate-200 bg-slate-50 text-slate-700',
                  ].join(' ')}
                >
                  {store}
                </button>
              ))}
            </div>
          </div>

          <label className="mt-5 block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Store Product ID</span>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="e.g. com.example.app.subscription.monthly"
            />
            <span className="mt-1 block text-xs text-slate-400">
              Ensure this matches exactly what is in the store dashboard.
            </span>
          </label>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Pricing & Billing</h2>
          <p className="mt-1 text-sm text-slate-500">Set the default pricing model for reference.</p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Currency</span>
              <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                <option>USD - US Dollar</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Price</span>
              <div className="relative">
                <span className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">$</span>
                <input className="w-full rounded-lg border border-slate-300 py-2 pr-3 pl-6 text-sm" placeholder="9.99" />
              </div>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Billing Period</span>
              <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                <option>Monthly</option>
              </select>
            </label>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <div>
              <p className="text-sm font-semibold text-slate-700">Free Trial</p>
              <p className="text-xs text-slate-400">Enable a trial period before billing starts.</p>
            </div>
            <div className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-500">7 days</div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Entitlements</h2>
          <p className="mt-1 text-sm text-slate-500">Select which features this product unlocks for the user.</p>

          <div className="mt-5 space-y-3">
            {entitlements.map((entitlement) => (
              <div
                key={entitlement.id}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">{entitlement.title}</p>
                  <p className="text-xs text-slate-500">{entitlement.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setEntitlements((prev) =>
                      prev.map((item) =>
                        item.id === entitlement.id ? { ...item, enabled: !item.enabled } : item
                      )
                    )
                  }
                  className={[
                    'relative h-6 w-11 rounded-full transition-colors',
                    entitlement.enabled ? 'bg-blue-500' : 'bg-slate-200',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all',
                      entitlement.enabled ? 'left-5' : 'left-0.5',
                    ].join(' ')}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col justify-end gap-3 border-t border-slate-200 pt-5 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="rounded-lg border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-slate-700"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => navigate('/products/vip-pass-monthly')}
            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white"
          >
            Create Product
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductCreateScreen
