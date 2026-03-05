import { Link } from 'react-router-dom'
import { projectRows, type ProjectRow } from './data'

type IconName =
  | 'chevronRight'
  | 'search'
  | 'bell'
  | 'chat'
  | 'add'
  | 'arrowRight'
  | 'web'
  | 'ios'
  | 'android'
  | 'fitness'
  | 'education'
  | 'wallet'
  | 'game'
  | 'music'
  | 'health'

function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'chevronRight') {
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

  if (name === 'search') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
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
      </svg>
    )
  }

  if (name === 'chat') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V14a2.5 2.5 0 0 1-2.5 2.5H11L6.5 20V16.5A2.5 2.5 0 0 1 4 14Z" />
      </svg>
    )
  }

  if (name === 'add') {
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

  if (name === 'arrowRight') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    )
  }

  if (name === 'web') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17" />
        <path d="M12 3.5a13 13 0 0 1 0 17" />
      </svg>
    )
  }

  if (name === 'ios') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M16.2 13.1c0-2.1 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.1-1.8-1.3-.1-2.5.8-3.2.8s-1.7-.8-2.8-.8c-1.5 0-2.8.9-3.5 2.1-1.5 2.5-.4 6.2 1 8.2.7 1 1.5 2 2.7 2 .9 0 1.3-.6 2.5-.6s1.5.6 2.5.6c1 0 1.8-.9 2.5-1.9.8-1.1 1.1-2.2 1.1-2.2-.1 0-1.6-.6-1.6-3.1Z" />
      </svg>
    )
  }

  if (name === 'android') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="7" y="9" width="10" height="9" rx="2" />
        <path d="M9 9 8 7" />
        <path d="m15 9 1-2" />
        <circle cx="10" cy="12" r=".7" fill="currentColor" stroke="none" />
        <circle cx="14" cy="12" r=".7" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'fitness') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 10v4" />
        <path d="M20 10v4" />
        <path d="M8 8v8" />
        <path d="M16 8v8" />
        <path d="M4 12h16" />
      </svg>
    )
  }

  if (name === 'education') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m3 9 9-4 9 4-9 4Z" />
        <path d="M7 11v4c0 1 2.2 2 5 2s5-1 5-2v-4" />
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
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M16 12h5" />
      </svg>
    )
  }

  if (name === 'game') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="8" width="18" height="8" rx="4" />
        <path d="M8 12h4" />
        <path d="M10 10v4" />
        <circle cx="16.5" cy="12" r=".8" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'music') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 18V7l10-2v11" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="16" r="2" />
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
      <path d="M12 4v16" />
      <path d="M4 12h16" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  )
}

function toneClass(tone: ProjectRow['iconTone']) {
  if (tone === 'indigo') return 'bg-indigo-500'
  if (tone === 'purple') return 'bg-purple-500'
  if (tone === 'emerald') return 'bg-emerald-500'
  if (tone === 'orange') return 'bg-orange-500'
  if (tone === 'pink') return 'bg-pink-500'
  return 'bg-sky-500'
}

function envClass(environment: ProjectRow['environment']) {
  if (environment === 'Production') return 'bg-emerald-100 text-emerald-600'
  if (environment === 'Beta') return 'bg-orange-100 text-orange-600'
  return 'bg-blue-100 text-blue-600'
}

function platformIcon(platform: ProjectRow['platforms'][number]): IconName {
  if (platform === 'web') return 'web'
  if (platform === 'ios') return 'ios'
  return 'android'
}

function ProjectListScreen() {
  return (
    <section className="min-h-full">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-sm sm:px-8">
        <div className="hidden items-center gap-2 text-sm sm:flex">
          <span className="text-slate-400">Directory</span>
          <Icon name="chevronRight" className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-slate-800">Global Projects</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative mr-1 hidden md:block">
            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
              <Icon name="search" className="h-4 w-4" />
            </span>
            <input
              placeholder="Search projects..."
              className="w-64 rounded-full bg-slate-100 py-1.5 pr-4 pl-9 text-sm outline-none focus:ring-4 focus:ring-blue-100"
            />
          </div>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            <Icon name="bell" className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            <Icon name="chat" className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Global Projects Directory
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage and monitor all multi-tenant client applications.
            </p>
          </div>

          <div className="flex items-center rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
            <span className="mr-1 px-2 text-[10px] font-bold tracking-[0.3px] text-slate-400 uppercase">
              Sort by:
            </span>
            <button type="button" className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-bold">
              Recent
            </button>
            <button
              type="button"
              className="px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-700"
            >
              Name
            </button>
            <button
              type="button"
              className="px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-700"
            >
              Revenue
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <button
            type="button"
            className="group flex min-h-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-8 transition-all hover:border-blue-500 hover:bg-slate-50/60"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-blue-50">
              <Icon name="add" className="h-8 w-8 text-slate-400 group-hover:text-blue-600" />
            </div>
            <p className="mt-4 font-bold text-slate-900">Create New Project</p>
            <p className="mt-1 text-xs text-slate-500">Configure a new client application</p>
          </button>

          {projectRows.map((row, index) => (
            <article
              key={row.id}
              className="group flex min-h-[280px] cursor-pointer flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl"
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className={[
                      'flex h-12 w-12 items-center justify-center rounded-xl text-2xl text-white',
                      toneClass(row.iconTone),
                    ].join(' ')}
                  >
                    <Icon name={row.iconKind} className="h-6 w-6" />
                  </div>
                  <div className="flex gap-1 text-slate-300">
                    {row.platforms.map((platform) => (
                      <Icon
                        key={`${row.id}-${platform}`}
                        name={platformIcon(platform)}
                        className="h-4 w-4"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {index === 0 ? (
                    <Link to="/" className="hover:text-blue-600">
                      {row.name}
                    </Link>
                  ) : (
                    row.name
                  )}
                </h3>
                <p className="mt-1 text-xs text-slate-400">Created: {row.createdAt}</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-[10px] font-bold tracking-[0.2px] text-slate-400 uppercase">
                      Active Users
                    </p>
                    <p className="text-lg font-black text-slate-900">{row.activeUsers}</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-[10px] font-bold tracking-[0.2px] text-slate-400 uppercase">
                      Revenue 24h
                    </p>
                    <p className="text-lg font-black text-emerald-500">{row.revenue24h}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-xs">
                  <span
                    className={[
                      'rounded-full px-2 py-0.5 text-[9px] font-bold uppercase',
                      envClass(row.environment),
                    ].join(' ')}
                  >
                    {row.environment}
                  </span>
                  <span className="text-slate-300 transition-colors group-hover:text-blue-500">
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectListScreen
