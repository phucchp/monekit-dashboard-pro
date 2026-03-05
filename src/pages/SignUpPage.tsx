import { Link } from 'react-router-dom'

function SignUpPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <aside className="hidden lg:block">
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold tracking-[0.5px] text-blue-700 uppercase">
            Pro Plan Onboarding
          </p>
          <h1 className="mt-6 text-5xl leading-tight font-black tracking-tight text-slate-900">
            Launch Faster.
            <br />
            Scale Smarter.
            <br />
            Go Pro.
          </h1>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li>Unlimited products, offerings, and paywalls</li>
            <li>Advanced customer analytics and churn insights</li>
            <li>Priority support with 99.9% uptime SLA</li>
          </ul>
        </aside>

        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Create Pro Account
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Set up your workspace and start the Pro trial in under 2 minutes.
            </p>
          </div>

          <form className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                  First name
                </span>
                <input
                  type="text"
                  placeholder="Alex"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Last name</span>
                <input
                  type="text"
                  placeholder="Rivers"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">Company</span>
              <input
                type="text"
                placeholder="Your company name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">Work email</span>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Password</span>
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Team size</span>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>200+</option>
                </select>
              </label>
            </div>

            <label className="flex items-start gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600"
              />
              <span>
                I agree to the Terms of Service and Privacy Policy, and I authorize Monekit to start
                my 14-day Pro trial.
              </span>
            </label>

            <button
              type="button"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Start Pro Trial
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
              Sign in
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

export default SignUpPage
