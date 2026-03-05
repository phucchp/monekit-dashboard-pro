import { useState } from 'react'
import { Link } from 'react-router-dom'
import { metadataRows, selectedProducts, targetingRules } from './data'

type IconName =
  | 'arrowLeft'
  | 'info'
  | 'code'
  | 'box'
  | 'target'
  | 'search'
  | 'plus'
  | 'trash'
  | 'close'
  | 'chevronDown'

function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'arrowLeft') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m15 18-6-6 6-6" />
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

  if (name === 'code') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
      </svg>
    )
  }

  if (name === 'box') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7.5 12 3l9 4.5-9 4.5Z" />
        <path d="M3 7.5V16.5L12 21l9-4.5V7.5" />
      </svg>
    )
  }

  if (name === 'target') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  }

  if (name === 'search') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </svg>
    )
  }

  if (name === 'plus') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
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
      </svg>
    )
  }

  if (name === 'chevronDown') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

function ProductPlatformBadge({ platform }: { platform: string }) {
  return (
    <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.4px] text-slate-500 uppercase">
      {platform}
    </span>
  )
}

function ProductLeading({ tone }: { tone: 'ios' | 'android' | 'stripe' }) {
  const palette: Record<'ios' | 'android' | 'stripe', string> = {
    ios: 'bg-blue-50 text-blue-600',
    android: 'bg-emerald-50 text-emerald-600',
    stripe: 'bg-slate-100 text-slate-700',
  }

  const letter: Record<'ios' | 'android' | 'stripe', string> = {
    ios: 'iOS',
    android: 'A',
    stripe: 'S',
  }

  return (
    <span className={["inline-flex h-9 w-9 items-center justify-center rounded-lg text-[10px] font-bold", palette[tone]].join(' ')}>
      {letter[tone]}
    </span>
  )
}

function OfferingCreateScreen() {
  const [isDefault, setIsDefault] = useState(false)

  return (
    <section className="min-h-full bg-slate-100/80">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur-sm sm:px-8">
        <div className="flex items-center gap-3 text-sm">
          <Link to="/offerings" className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700">
            <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            Back to Offerings
          </Link>
          <span className="text-slate-300">›</span>
          <span className="font-semibold text-slate-800">Create New Offering</span>
        </div>

        <div className="flex items-center gap-3">
          <button type="button" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
            Save Draft
          </button>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Publish Offering
          </button>
        </div>
      </header>

      <div className="w-full p-4 sm:p-6 lg:p-8">
        <div className="w-full space-y-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">New Offering</h1>
            <p className="mt-1 text-sm text-slate-500">
              Configure your product bundles, metadata, and targeting logic.
            </p>
          </div>

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-6 sm:px-6">
              <h2 className="inline-flex items-center gap-2 text-xl font-bold text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                  <Icon name="info" className="h-4 w-4" />
                </span>
                Basic Information
              </h2>
              <button
                type="button"
                onClick={() => setIsDefault((prev) => !prev)}
                className="inline-flex items-center gap-3 text-sm font-semibold text-slate-500"
              >
                Set as Default
                <span
                  className={[
                    'relative h-5 w-9 rounded-full transition-colors',
                    isDefault ? 'bg-blue-500' : 'bg-slate-200',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all',
                      isDefault ? 'left-4.5' : 'left-0.5',
                    ].join(' ')}
                  />
                </span>
              </button>
            </div>

            <div className="grid gap-4 px-5 py-5 md:grid-cols-2 sm:px-6">
              <label className="block">
                <span className="mb-2 block text-[11px] font-bold tracking-[0.8px] text-slate-500 uppercase">Internal Name</span>
                <input
                  className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700"
                  placeholder="e.g. Winter Sale 2024"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-bold tracking-[0.8px] text-slate-500 uppercase">Description</span>
                <input
                  className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700"
                  placeholder="Internal notes for this offering..."
                />
              </label>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-6 sm:px-6">
              <h2 className="inline-flex items-center gap-2 text-xl font-bold text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                  <Icon name="code" className="h-4 w-4" />
                </span>
                Metadata (SDK Config)
              </h2>
              <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                + Add Field
              </button>
            </div>

            <div className="space-y-3 px-5 py-5 sm:px-6">
              <div className="grid grid-cols-[1fr_1fr_40px] gap-3 text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">
                <span>Key</span>
                <span>Value</span>
                <span />
              </div>
              {metadataRows.map((row) => (
                <div key={row.id} className="grid grid-cols-[1fr_1fr_40px] gap-3">
                  <input
                    className="h-10 rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700"
                    defaultValue={row.key}
                  />
                  <input
                    className="h-10 rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700"
                    defaultValue={row.value}
                  />
                  <button type="button" className="inline-flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                    <Icon name="trash" className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-6 sm:px-6">
              <h2 className="inline-flex items-center gap-2 text-xl font-bold text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                  <Icon name="box" className="h-4 w-4" />
                </span>
                Product Mapping
              </h2>
            </div>

            <div className="space-y-5 px-5 py-5 sm:px-6">
              <label className="relative block">
                <input
                  className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pr-3 pl-10 text-sm text-slate-700"
                  placeholder="Search for SKUs from App Store, Play Store, or Stripe..."
                />
                <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
                  <Icon name="search" className="h-4 w-4" />
                </span>
              </label>

              <div>
                <p className="text-[10px] font-bold tracking-[0.8px] text-slate-400 uppercase">Selected Products (3)</p>
                <div className="mt-3 space-y-2">
                  {selectedProducts.map((product) => (
                    <article
                      key={product.id}
                      className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <ProductLeading tone={product.tone} />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-slate-900">{product.name}</p>
                            <ProductPlatformBadge platform={product.platform} />
                          </div>
                          <p className="text-xs text-slate-500">{product.sku}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-slate-900">{product.price}</p>
                          <p className="text-xs text-slate-500">{product.suffix}</p>
                        </div>
                        <button type="button" className="text-slate-400 hover:text-slate-600" aria-label="Remove product">
                          <Icon name="close" className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-6 sm:px-6">
              <h2 className="inline-flex items-center gap-2 text-xl font-bold text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                  <Icon name="target" className="h-4 w-4" />
                </span>
                Targeting & Placement
              </h2>
              <span className="rounded bg-emerald-50 px-2 py-1 text-[10px] font-bold tracking-[0.6px] text-emerald-600 uppercase">
                Logic: AND
              </span>
            </div>

            <div className="space-y-4 px-5 py-5 sm:px-6">
              <div className="grid grid-cols-[1fr_1fr_2fr_40px] gap-3 text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">
                <span>Property</span>
                <span>Condition</span>
                <span>Value</span>
                <span />
              </div>

              {targetingRules.map((rule) => (
                <div key={rule.id} className="grid grid-cols-[1fr_1fr_2fr_40px] gap-3">
                  <button type="button" className="inline-flex h-10 items-center justify-between rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700">
                    <span>{rule.property}</span>
                    <Icon name="chevronDown" className="h-3.5 w-3.5 text-slate-400" />
                  </button>
                  <button type="button" className="inline-flex h-10 items-center justify-between rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700">
                    <span>{rule.condition}</span>
                    <Icon name="chevronDown" className="h-3.5 w-3.5 text-slate-400" />
                  </button>
                  <button type="button" className="inline-flex h-10 items-center justify-between rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700">
                    <span className="truncate">{rule.value}</span>
                    <Icon name="chevronDown" className="h-3.5 w-3.5 text-slate-400" />
                  </button>
                  <button type="button" className="inline-flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                    <Icon name="trash" className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}

              <button type="button" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                <Icon name="plus" className="h-3.5 w-3.5" />
                Add Condition
              </button>
            </div>
          </section>

          <div className="flex items-center justify-end gap-4 border-t border-slate-200 pt-6">
            <button type="button" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
              Discard Changes
            </button>
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Publish Offering
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferingCreateScreen
