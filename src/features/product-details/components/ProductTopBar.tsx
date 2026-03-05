function ProductTopBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
      <div className="text-sm">
        <span className="text-slate-400">Monetization</span>
        <span className="px-2 text-slate-300">›</span>
        <span className="text-slate-500">Products</span>
        <span className="px-2 text-slate-300">›</span>
        <span className="font-semibold text-slate-800">VIP Pass (Monthly)</span>
      </div>
      <button
        type="button"
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm"
      >
        Save Changes
      </button>
    </header>
  )
}

export default ProductTopBar
