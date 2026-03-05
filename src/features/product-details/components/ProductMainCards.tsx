import { productCore, storeIdentifiers } from '../data'

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
        <h3 className="text-xl font-bold text-slate-900 md:text-base">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </section>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-1 text-xs font-semibold tracking-[0.3px] text-slate-500 uppercase">{children}</p>
}

function InputLike({ value, muted = false }: { value: string; muted?: boolean }) {
  return (
    <div
      className={[
        'w-full rounded-lg border border-slate-200 px-3 py-2 text-sm',
        muted ? 'bg-slate-100 text-slate-500' : 'bg-slate-50 text-slate-900',
      ].join(' ')}
    >
      {value}
    </div>
  )
}

function ProductMainCards() {
  return (
    <div className="space-y-5">
      <section>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{productCore.name}</h1>
          <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.2px] text-emerald-600 uppercase">
            Published
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-500">
          Unique identifier: <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">{productCore.id}</code>
        </p>
      </section>

      <SectionCard title="Core Details">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Display Name</Label>
            <InputLike value={productCore.name} />
          </div>
          <div>
            <Label>Internal Reference ID</Label>
            <InputLike value={productCore.id} muted />
          </div>
        </div>
        <div className="mt-4">
          <Label>Description</Label>
          <textarea
            className="h-20 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
            defaultValue={productCore.description}
          />
        </div>
      </SectionCard>

      <SectionCard title="Store Identifiers">
        <div className="space-y-4">
          {storeIdentifiers.map((row) => (
            <div key={row.store} className="flex flex-col gap-3 border-slate-100 pb-4 last:pb-0 md:flex-row md:items-center">
              <div className="flex w-full items-center gap-3 md:w-40">
                <span className={['h-4 w-4 rounded', row.badge].join(' ')} />
                <span className="text-sm font-medium text-slate-700">{row.store}</span>
              </div>
              <div className="flex-1">
                <InputLike value={row.value} />
              </div>
              <button
                type="button"
                className="self-start rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 md:self-auto"
              >
                Sync now
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Subscription Logic">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Entitlement Level</Label>
            <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900">
              <option>Premium Access</option>
            </select>
            <p className="mt-1 text-xs text-slate-400">Defines what content the user unlocks.</p>
          </div>
          <div>
            <Label>Grace Period</Label>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900">16 days</div>
            <p className="mt-1 text-xs text-slate-400">Time allowed for payment recovery.</p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}

export default ProductMainCards
