function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600">
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="10" cy="10" r="7" />
          <path d="M10 6v4" />
          <circle cx="10" cy="13.5" r=".8" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
    </div>
  )
}

function ProjectSettingsScreen() {
  return (
    <section className="min-h-full">
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
        <div className="text-sm">
          <span className="text-slate-400">Project</span>
          <span className="px-2 text-slate-300">›</span>
          <span className="font-semibold text-slate-800">Fitness Tracker iOS</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <button type="button" className="rounded-lg p-2 hover:bg-slate-100" aria-label="Notifications">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3a5 5 0 0 0-5 5v2.7c0 .6-.2 1.2-.6 1.7L5 14h14l-1.4-1.6c-.4-.5-.6-1.1-.6-1.7V8a5 5 0 0 0-5-5Z" />
              <path d="M10 18a2 2 0 0 0 4 0" />
            </svg>
          </button>
          <button type="button" className="rounded-lg p-2 hover:bg-slate-100" aria-label="Help">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.8c-.7.7-1.3 1.1-1.3 2.2" />
              <circle cx="12" cy="16.5" r=".8" fill="currentColor" stroke="none" />
            </svg>
          </button>
        </div>
      </header>

      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Project Settings & Integrations</h1>
          <p className="mt-1 text-sm text-slate-500">
            Configure your project metadata, store credentials, and API connections.
          </p>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-4">
            <SectionTitle title="Core Details" />
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-2">
            <label>
              <span className="mb-1 block text-xs font-semibold tracking-[0.3px] text-slate-500 uppercase">
                Project Name
              </span>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm"
                defaultValue="Fitness Tracker iOS"
              />
            </label>
            <div>
              <span className="mb-1 block text-xs font-semibold tracking-[0.3px] text-slate-500 uppercase">
                Project ID
              </span>
              <div className="flex items-start gap-2">
                <input
                  className="flex-1 rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-500"
                  defaultValue="ft-ios-prod-8821"
                />
                <button
                  type="button"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-4">
            <SectionTitle title="API Keys & Authentication" />
          </div>
          <div className="space-y-5 p-6">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">Production API Key</span>
                <button type="button" className="text-xs font-semibold text-blue-600">
                  Regenerate
                </button>
              </div>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm"
                defaultValue="••••••••••••••••••••••••"
              />
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">Service Account JSON</span>
                <span className="text-xs text-slate-400">Required for Google Play sync</span>
              </div>
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                <p className="text-sm font-semibold text-slate-700">Drag & drop a JSON file</p>
                <p className="mt-1 text-xs text-slate-400">or click to browse from your device</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <SectionTitle title="Webhooks" />
            <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
              <span>Enabled</span>
              <span className="relative h-6 w-11 rounded-full bg-blue-500">
                <span className="absolute top-0.5 left-5 h-5 w-5 rounded-full bg-white" />
              </span>
            </label>
          </div>
          <div className="space-y-4 p-6">
            <div>
              <span className="mb-1 block text-sm font-semibold text-slate-700">Endpoint URL</span>
              <input
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm"
                defaultValue="https://api.fitnesstracker.com/webhooks/billing"
              />
            </div>
            <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700">
              Webhook signature validation is active. Rotate the signing secret when rotating API keys.
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-end gap-3 border-t border-slate-200 pt-5 sm:flex-row">
          <button
            type="button"
            className="rounded-lg border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-slate-700"
          >
            Discard Changes
          </button>
          <button type="button" className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white">
            Save Settings
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectSettingsScreen
