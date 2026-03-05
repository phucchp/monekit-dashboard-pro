import { useState } from 'react'
import { Link } from 'react-router-dom'
import { topUpTiers } from './data'

type IconName =
  | 'plus'
  | 'save'
  | 'info'
  | 'upload'
  | 'image'
  | 'link'
  | 'edit'
  | 'trash'
  | 'cube'

function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'plus') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
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

  if (name === 'info') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <circle cx="12" cy="8" r=".8" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'upload') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 15V5" />
        <path d="m8 9 4-4 4 4" />
        <rect x="4" y="15" width="16" height="5" rx="1.5" />
      </svg>
    )
  }

  if (name === 'image') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.5" />
        <path d="m21 16-5-4-5 5-3-3-5 4" />
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

  if (name === 'edit') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m4 15.5 9-9 4 4-9 9-4 1z" />
        <path d="m11.5 8 4 4" />
      </svg>
    )
  }

  if (name === 'trash') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7h16" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M6 7l1 12h10l1-12" />
        <path d="M9 7V4h6v3" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12 12 4l8 8-8 8-8-8Z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  )
}

function VirtualCurrencyCreateScreen() {
  const [syncEnabled, setSyncEnabled] = useState(true)

  return (
    <section className="min-h-full bg-slate-100/80">
      <div className="w-full p-4 sm:p-6 lg:p-8">
          <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>Economy</span>
                <span>›</span>
                <span>Currencies</span>
                <span>›</span>
                <span className="font-semibold text-blue-600">Create New</span>
              </div>
              <h1 className="mt-2 text-[48px] leading-tight font-bold tracking-[-0.6px] text-slate-900">
                Create Virtual Currency
              </h1>
              <p className="mt-1 max-w-2xl text-lg text-slate-500">
                Configure your app&apos;s virtual economy, set exchange rates, and synchronize with
                your backend CMS.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                to="/virtual-currencies"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                <Icon name="save" className="h-4 w-4" />
                Save Currency
              </button>
            </div>
          </header>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-6">
              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-slate-900">
                  <Icon name="info" className="h-5 w-5 text-blue-500" />
                  General Information
                </h2>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Currency Name</span>
                    <input
                      className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm"
                      placeholder="e.g. Gold, Gems, Credits"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Technical Key (CMS ID)</span>
                    <input
                      className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm"
                      placeholder="e.g. currency_gems_001"
                    />
                    <span className="mt-1 block text-xs text-slate-400">Unique identifier for API calls.</span>
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Exchange Rate</span>
                  <div className="flex h-12 items-center rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700">
                    <span className="w-16">100</span>
                    <span className="ml-auto">Units =</span>
                    <span className="mx-3 text-base font-bold text-slate-900">$</span>
                    <span className="w-14 text-right">1.00</span>
                    <span className="ml-3 text-slate-500">USD</span>
                  </div>
                  <span className="mt-1 block text-xs text-slate-400">
                    Base value for calculating bundle prices.
                  </span>
                </label>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-3xl font-bold text-slate-900">CMS Synchronization</h2>
                  <button
                    type="button"
                    onClick={() => setSyncEnabled((prev) => !prev)}
                    className="inline-flex items-center gap-3 text-sm font-semibold text-slate-600"
                  >
                    Auto-sync with Backend
                    <span
                      className={[
                        'relative h-6 w-11 rounded-full transition-colors',
                        syncEnabled ? 'bg-blue-500' : 'bg-slate-300',
                      ].join(' ')}
                    >
                      <span
                        className={[
                          'absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all',
                          syncEnabled ? 'left-5' : 'left-0.5',
                        ].join(' ')}
                      />
                    </span>
                  </button>
                </div>

                <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <p className="flex items-center gap-2 font-semibold text-slate-800">
                    <Icon name="info" className="h-4 w-4 text-blue-500" />
                    Webhook Configuration
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    We will send a POST request to this URL whenever a user&apos;s balance changes.
                  </p>
                </div>

                <label className="mt-4 block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">CMS endpoint URL</span>
                  <div className="relative">
                    <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
                      <Icon name="link" className="h-4 w-4" />
                    </span>
                    <input
                      className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pr-3 pl-10 text-sm"
                      defaultValue="https://api.yourdomain.com/v1/webhooks/currency"
                    />
                  </div>
                </label>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <button type="button" className="font-semibold text-blue-600">
                    Test Connection
                  </button>
                  <span className="text-slate-300">•</span>
                  <button type="button" className="text-slate-500">
                    View Documentation
                  </button>
                </div>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-3xl font-bold text-slate-900">
                    <Icon name="cube" className="h-5 w-5 text-blue-500" />
                    Top-up Tiers
                  </h2>
                  <button type="button" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    <Icon name="plus" className="h-4 w-4" />
                    Add Tier
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {topUpTiers.map((tier) => (
                    <article
                      key={tier.id}
                      className="flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-100 bg-white text-blue-500">
                        <Icon name="cube" className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-slate-900">{tier.title}</p>
                        <p className="text-sm text-slate-500">{tier.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <button type="button" className="rounded p-1 hover:bg-slate-100 hover:text-slate-600">
                          <Icon name="edit" className="h-4 w-4" />
                        </button>
                        <button type="button" className="rounded p-1 hover:bg-slate-100 hover:text-slate-600">
                          <Icon name="trash" className="h-4 w-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-5">
              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">Currency Icon</h3>
                <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <Icon name="upload" className="h-7 w-7" />
                  </div>
                  <p className="mt-3 font-semibold text-slate-700">Click to upload or drag & drop</p>
                  <p className="mt-1 text-xs text-slate-400">SVG, PNG or JPG (Max 2MB)</p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-200 to-cyan-300" />
                  <div>
                    <p className="text-sm font-semibold text-slate-700">current_icon.png</p>
                    <button type="button" className="text-xs font-semibold text-red-500">
                      Remove
                    </button>
                  </div>
                </div>
              </section>

              <section className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-blue-900 p-5 text-white shadow-md">
                <h3 className="text-sm font-bold tracking-[0.7px] text-slate-300 uppercase">Store Preview</h3>
                <div className="mt-4 text-center">
                  <div className="mx-auto h-24 w-24 rounded-lg bg-black/50" />
                  <p className="mt-4 text-4xl font-black">1,200 Gems</p>
                  <p className="text-slate-300">Treasure Vault</p>
                  <button type="button" className="mt-4 w-full rounded-full bg-blue-500 py-2 font-semibold">
                    $9.99
                  </button>
                  <p className="mt-3 text-xs text-slate-400">
                    Preview of how this item will appear in your mobile application.
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-800">
                  <Icon name="info" className="h-4 w-4 text-blue-500" />
                  Pro Tip
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                  Setting up webhooks ensures your backend is always aware of your purchases made
                  through the app stores in real-time.
                </p>
              </section>
            </div>
          </div>
      </div>
    </section>
  )
}

export default VirtualCurrencyCreateScreen
