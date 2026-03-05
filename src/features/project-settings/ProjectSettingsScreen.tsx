type IconName =
  | 'info'
  | 'wallet'
  | 'key'
  | 'webhook'
  | 'copy'
  | 'upload'
  | 'warning'
  | 'plus'
  | 'trash'
  | 'bell'
  | 'chevronRight'
  | 'apple'
  | 'google'

function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'info') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10v6" />
        <circle cx="12" cy="7.5" r=".9" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'wallet') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h11A2.5 2.5 0 0 1 19 8.5V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        <path d="M19 10h2v6h-2a2 2 0 1 1 0-6Z" />
      </svg>
    )
  }

  if (name === 'key') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="8.5" cy="14.5" r="3.5" />
        <path d="M11.5 12 20 3.5" />
        <path d="M17 7h2.5V9.5H22" />
      </svg>
    )
  }

  if (name === 'webhook') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M8 7a4 4 0 1 1 6.9 2.8" />
        <path d="M16 17a4 4 0 1 1-6.9-2.8" />
        <circle cx="8" cy="7" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="16" cy="17" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'copy') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="9" y="9" width="10" height="10" rx="2" />
        <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
      </svg>
    )
  }

  if (name === 'upload') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 16V6" />
        <path d="m8.5 9.5 3.5-3.5 3.5 3.5" />
        <path d="M4 19h16" />
      </svg>
    )
  }

  if (name === 'warning') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 3 2.5 20h19Z" />
        <path d="M12 9v5" />
        <circle cx="12" cy="17" r=".8" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'plus') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    )
  }

  if (name === 'trash') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 7h16" />
        <path d="M9 7V5h6v2" />
        <rect x="6.5" y="7" width="11" height="13" rx="1.5" />
      </svg>
    )
  }

  if (name === 'bell') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 3a5 5 0 0 0-5 5v2.7c0 .6-.2 1.2-.6 1.7L5 14h14l-1.4-1.6c-.4-.5-.6-1.1-.6-1.7V8a5 5 0 0 0-5-5Z" />
        <path d="M10 18a2 2 0 0 0 4 0" />
      </svg>
    )
  }

  if (name === 'apple') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M16.2 13.1c0-2.1 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.1-1.8-1.3-.1-2.5.8-3.2.8s-1.7-.8-2.8-.8c-1.5 0-2.8.9-3.5 2.1-1.5 2.5-.4 6.2 1 8.2.7 1 1.5 2 2.7 2 .9 0 1.3-.6 2.5-.6s1.5.6 2.5.6c1 0 1.8-.9 2.5-1.9.8-1.1 1.1-2.2 1.1-2.2-.1 0-1.6-.6-1.6-3.1Z" />
        <path d="M14.3 6.6c.5-.6.9-1.4.8-2.3-.8.1-1.7.6-2.3 1.2-.5.5-.9 1.4-.8 2.2.9.1 1.8-.4 2.3-1.1Z" />
      </svg>
    )
  }

  if (name === 'google') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-5.9-2.7-5.9-6s2.6-6 5.9-6c1.9 0 3.2.8 4 1.4l2.7-2.6C17 3 14.7 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.7-4.1 9.7-9.8 0-.7-.1-1.3-.2-2H12Z" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function SectionHeader({ title, icon }: { title: string; icon: IconName }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
    </div>
  )
}

function FieldLabel({ children }: { children: string }) {
  return (
    <span className="mb-1.5 block text-[11px] font-bold tracking-[0.5px] text-slate-500 uppercase">
      {children}
    </span>
  )
}

function ProjectSettingsScreen() {
  return (
    <section className="min-h-full">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-sm sm:px-8">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-400">Project</span>
          <Icon name="chevronRight" className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-800">Project Settings</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-bold tracking-[0.5px] text-slate-500 uppercase">
              Live Environment
            </span>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Notifications"
          >
            <Icon name="bell" className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="w-full space-y-6 p-4 sm:p-6 lg:p-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Project Settings & Integrations
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Configure project metadata, store credentials, webhook delivery, and API access
            policies.
          </p>
        </div>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
            <SectionHeader title="General Info" icon="info" />
          </div>
          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <label>
              <FieldLabel>Project Name</FieldLabel>
              <input
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                defaultValue="Fitness Tracker iOS"
              />
            </label>
            <div>
              <FieldLabel>Project ID</FieldLabel>
              <div className="flex items-center gap-2">
                <input
                  className="flex-1 rounded-lg border border-slate-200 bg-slate-100 px-3.5 py-2.5 font-mono text-xs text-slate-500"
                  defaultValue="ft-ios-prod-8821"
                  readOnly
                />
                <button
                  type="button"
                  className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                  aria-label="Copy Project ID"
                >
                  <Icon name="copy" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
            <SectionHeader title="App Store Credentials" icon="wallet" />
          </div>
          <div className="space-y-6 p-5 sm:p-6">
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-[11px] font-bold tracking-[0.5px] text-slate-500 uppercase">
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="apple" className="h-3.5 w-3.5 text-slate-500" />
                    Apple Shared Secret
                  </span>
                </label>
                <button
                  type="button"
                  className="text-[11px] font-bold text-blue-600 hover:underline"
                >
                  How to find this?
                </button>
              </div>
              <input
                type="password"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                defaultValue="••••••••••••••••••••••••"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold tracking-[0.5px] text-slate-500 uppercase">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="google" className="h-3.5 w-3.5 text-slate-500" />
                  Google Service Account JSON
                </span>
              </label>
              <div className="mt-2 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center">
                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500">
                  <Icon name="upload" className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-700">
                  Upload a file or drag and drop
                </p>
                <p className="mt-1 text-xs text-slate-500">JSON up to 10MB</p>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
            <SectionHeader title="API Keys" icon="key" />
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-100"
            >
              <Icon name="plus" className="h-3.5 w-3.5" />
              Generate Key
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">
                    Scope
                  </th>
                  <th className="px-6 py-3 text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">
                    Key
                  </th>
                  <th className="px-6 py-3 text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-[10px] font-bold tracking-[0.7px] text-slate-400 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600 uppercase">
                      SDK Public
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">pk_live_51M...3a9f</td>
                  <td className="px-6 py-4 text-xs text-slate-500">Oct 12, 2023</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="text-slate-400 transition hover:text-rose-500"
                      aria-label="Delete SDK Public key"
                    >
                      <Icon name="trash" className="inline h-4 w-4" />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-600 uppercase">
                      Admin Secret
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">sk_live_22R...k91v</td>
                  <td className="px-6 py-4 text-xs text-slate-500">Oct 15, 2023</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="text-slate-400 transition hover:text-rose-500"
                      aria-label="Delete Admin Secret key"
                    >
                      <Icon name="trash" className="inline h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
            <SectionHeader title="Webhooks" icon="webhook" />
            <label className="inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.5px] text-slate-500 uppercase">
                Enabled
              </span>
              <span className="relative h-6 w-11 rounded-full bg-blue-500">
                <span className="absolute top-0.5 left-5 h-5 w-5 rounded-full bg-white" />
              </span>
            </label>
          </div>
          <div className="space-y-4 p-5 sm:p-6">
            <label>
              <FieldLabel>Endpoint URL</FieldLabel>
              <input
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                defaultValue="https://api.fitnesstracker.com/webhooks/billing"
              />
            </label>

            <div className="flex gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-3 text-xs leading-relaxed text-amber-700">
              <Icon name="warning" className="mt-0.5 h-4 w-4 flex-none" />
              Ensure your server handles `POST` requests and returns `200 OK` within 5 seconds to
              avoid retry timeouts.
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-end gap-3 border-t border-slate-200 pt-4 sm:flex-row">
          <button
            type="button"
            className="rounded-lg bg-slate-100 px-6 py-2 text-sm font-bold text-slate-600 hover:bg-slate-200"
          >
            Reset Changes
          </button>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-bold text-white hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectSettingsScreen
