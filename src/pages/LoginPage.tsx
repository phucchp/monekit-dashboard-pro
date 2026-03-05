import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <aside className="hidden lg:block">
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold tracking-[0.5px] text-blue-700 uppercase">
            Monekit Billing Console
          </p>
          <h1 className="mt-6 text-5xl leading-tight font-black tracking-tight text-slate-900">
            Welcome Back.
            <br />
            Manage Revenue
            <br />
            In One Place.
          </h1>
          <p className="mt-5 max-w-md text-base text-slate-600">
            Track subscriptions, optimize pricing, and monitor customer performance from a single
            dashboard.
          </p>
        </aside>

        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Sign In</h2>
            <p className="mt-2 text-sm text-slate-500">
              Use your workspace credentials to access the dashboard.
            </p>
          </div>

          <form className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">Work Email</span>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600" />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-bold tracking-[0.5px] text-slate-400 uppercase">
              or continue with
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Google
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Apple
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            New here?{' '}
            <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-700">
              Create an account
            </Link>
          </p>

          <div className="mt-8 border-t border-slate-100 pt-5 text-center">
            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
              Back to dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
