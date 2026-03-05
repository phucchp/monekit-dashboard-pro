import { Link } from 'react-router-dom'

function ForgotPasswordPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <aside className="hidden lg:block">
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold tracking-[0.5px] text-blue-700 uppercase">
            Account Recovery
          </p>
          <h1 className="mt-6 text-5xl leading-tight font-black tracking-tight text-slate-900">
            Reset Password.
            <br />
            Get Back To
            <br />
            Your Workspace.
          </h1>
          <p className="mt-5 max-w-md text-base text-slate-600">
            Enter your work email and we will send a secure password reset link.
          </p>
        </aside>

        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Forgot Password</h2>
            <p className="mt-2 text-sm text-slate-500">
              We will send instructions to your email to reset your password.
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

            <button
              type="button"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-8 border-t border-slate-100 pt-5 text-center">
            <Link to="/login" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPasswordPage
