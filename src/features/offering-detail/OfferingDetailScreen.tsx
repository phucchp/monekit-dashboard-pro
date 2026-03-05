import { Link } from 'react-router-dom'
import { ruleTags, skuItems } from './data'

type IconName =
  | 'arrowLeft'
  | 'duplicate'
  | 'save'
  | 'snow'
  | 'info'
  | 'box'
  | 'target'
  | 'beaker'
  | 'danger'
  | 'delete'
  | 'edit'
  | 'trash'
  | 'drag'
  | 'plus'

function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'arrowLeft') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m15 18-6-6 6-6" />
      </svg>
    )
  }

  if (name === 'duplicate') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="9" width="10" height="10" rx="2" />
        <rect x="5" y="5" width="10" height="10" rx="2" />
      </svg>
    )
  }

  if (name === 'save') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 4h11l3 3v13H5z" />
        <path d="M8 4v6h8" />
      </svg>
    )
  }

  if (name === 'snow') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18" />
        <path d="m7 6 10 12" />
        <path d="m17 6-10 12" />
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
        <path d="m12 5 7 7-7 7-7-7 7-7Z" />
      </svg>
    )
  }

  if (name === 'beaker') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
      </svg>
    )
  }

  if (name === 'danger') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5" />
        <circle cx="12" cy="16.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'delete') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7h16" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </svg>
    )
  }

  if (name === 'edit') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m4 15.5 9-9 4 4-9 9-4 1z" />
      </svg>
    )
  }

  if (name === 'drag') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="9" cy="7" r="1.5" />
        <circle cx="15" cy="7" r="1.5" />
        <circle cx="9" cy="12" r="1.5" />
        <circle cx="15" cy="12" r="1.5" />
        <circle cx="9" cy="17" r="1.5" />
        <circle cx="15" cy="17" r="1.5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

function OfferingDetailScreen() {
  return (
    <section className="min-h-full bg-slate-100/80">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur-sm sm:px-8">
        <div className="flex items-center gap-3 text-sm">
          <Link to="/offerings" className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700">
            <Icon name="arrowLeft" className="h-4 w-4" />
            Offerings
          </Link>
          <span className="text-slate-300">›</span>
          <span className="font-semibold text-slate-800">Winter Sale 2024</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <button type="button" className="inline-flex items-center gap-1 rounded px-3 py-2 text-slate-500 hover:bg-slate-100">
            <Icon name="duplicate" className="h-4 w-4" /> Duplicate
          </button>
          <button type="button" className="rounded px-3 py-2 text-slate-500 hover:bg-slate-100">Cancel</button>
          <button type="button" className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-blue-700">
            <Icon name="save" className="h-4 w-4" /> Save Changes
          </button>
        </div>
      </header>

      <div className="w-full p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500">
                  <Icon name="snow" className="h-6 w-6" />
                </span>
                <div>
                  <h1 className="text-4xl font-black tracking-tight text-slate-900">Winter Sale 2024</h1>
                  <p className="text-sm text-slate-500">Internal ID: offering_winter_2024_promo</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 uppercase">Active</span>
              </div>

              <div className="grid grid-cols-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-slate-700">
                <div className="px-4">
                  <p className="text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">Conversion Rate</p>
                  <p className="text-3xl font-black">4.28%</p>
                </div>
                <div className="border-x border-slate-200 px-4">
                  <p className="text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">Total Revenue</p>
                  <p className="text-3xl font-black">$12.4k</p>
                </div>
                <div className="px-4">
                  <p className="text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">Impressions</p>
                  <p className="text-3xl font-black">2.8k</p>
                </div>
              </div>
            </div>
          </section>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <header className="border-b border-slate-100 px-5 py-4 sm:px-6">
                  <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-slate-900">
                    <Icon name="info" className="h-4 w-4 text-slate-400" /> General Details
                  </h2>
                </header>
                <div className="space-y-4 px-5 py-5 sm:px-6">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold tracking-[0.8px] text-slate-500 uppercase">Offering Name</span>
                    <input className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm" defaultValue="Winter Sale 2024" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-bold tracking-[0.8px] text-slate-500 uppercase">Public Description</span>
                    <textarea className="h-24 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm" defaultValue="Special seasonal discount targeting users in Northern Hemisphere regions. Includes priority support and legacy badge." />
                  </label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[11px] font-bold tracking-[0.8px] text-slate-500 uppercase">Internal Metadata (JSON)</span>
                      <textarea className="h-20 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-blue-600" defaultValue={'{ "campaign_source": "winter_seasonal_24", "ab_test_group": "v2" }'} />
                    </label>
                    <div>
                      <span className="mb-2 block text-[11px] font-bold tracking-[0.8px] text-slate-500 uppercase">Display Options</span>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm">
                          <input type="checkbox" defaultChecked /> Highlight as Recommended
                        </label>
                        <label className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm">
                          <input type="checkbox" /> Auto-apply promo code
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                  <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-slate-900">
                    <Icon name="box" className="h-4 w-4 text-slate-400" /> SKU Management
                  </h2>
                  <button type="button" className="text-sm font-semibold text-blue-600">+ Add Product</button>
                </header>
                <div className="space-y-3 px-5 py-5 sm:px-6">
                  <p className="text-sm text-slate-500">Drag and drop to reorder products as they appear on the paywall.</p>
                  {skuItems.map((item) => (
                    <article key={item.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3">
                      <span className="text-slate-400"><Icon name="drag" className="h-4 w-4" /></span>
                      <div>
                        <p className="font-semibold text-slate-900">{item.name}</p>
                        <p className="text-xs text-slate-500">{item.sku}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="font-semibold text-slate-900">{item.price}</p>
                          <p className="text-xs text-emerald-600">{item.note}</p>
                        </div>
                        <button type="button" className="text-slate-400 hover:text-slate-600"><Icon name="edit" className="h-3.5 w-3.5" /></button>
                        <button type="button" className="text-slate-400 hover:text-slate-600"><Icon name="trash" className="h-3.5 w-3.5" /></button>
                      </div>
                    </article>
                  ))}

                  <button type="button" className="flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 text-xs font-bold tracking-[0.8px] text-slate-400 uppercase">
                    <Icon name="plus" className="h-4 w-4" /> Link Existing Product SKU
                  </button>
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="inline-flex items-center gap-2 text-xl font-bold text-slate-900"><Icon name="target" className="h-4 w-4 text-violet-500" /> Targeting Rules</h3>
                  <button type="button" className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold text-white uppercase">Edit Rules</button>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">Regions</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {ruleTags.regions.map((region) => <span key={region} className="rounded border border-slate-200 bg-white px-2 py-0.5 text-xs">{region}</span>)}
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">User Segments</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {ruleTags.segments.map((segment) => <span key={segment} className="rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-600">{segment}</span>)}
                    </div>
                  </div>
                  <div className="rounded-lg bg-rose-50 p-3">
                    <p className="text-[10px] font-bold tracking-[0.7px] text-rose-500 uppercase">Expiration</p>
                    <p className="mt-1 font-semibold text-rose-700">Ends in 14 days</p>
                    <p className="text-xs text-rose-500">December 31, 2024 • 11:59 PM UTC</p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="inline-flex items-center gap-2 text-xl font-bold text-slate-900"><Icon name="beaker" className="h-4 w-4 text-amber-500" /> A/B Testing</h3>
                  <button type="button" className="text-xs font-bold text-blue-600 uppercase">Set Weight</button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-700">Traffic Weight</span>
                    <span className="font-bold text-slate-900">100%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-full rounded-full bg-blue-500" />
                  </div>
                  <p className="mt-3 text-xs text-slate-500">This offering is currently receiving 100% of matched traffic.</p>
                </div>
              </section>

              <section>
                <p className="mb-2 text-[10px] font-bold tracking-[1px] text-slate-400 uppercase">Danger Zone</p>
                <div className="space-y-2">
                  <button type="button" className="flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"><Icon name="danger" className="h-4 w-4" /> Deactivate Offering</button>
                  <button type="button" className="flex w-full items-center gap-2 rounded-lg border border-rose-200 bg-white px-4 py-3 text-sm font-semibold text-rose-600 shadow-sm"><Icon name="delete" className="h-4 w-4" /> Delete Offering</button>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferingDetailScreen
