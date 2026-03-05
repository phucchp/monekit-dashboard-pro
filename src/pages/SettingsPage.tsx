import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setPageTitle } from '../features/ui/uiSlice'

function SettingsPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Settings'))
  }, [dispatch])

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold">Profile Settings</h2>
      <p className="mt-2 text-sm text-slate-600">
        This page is ready for account and dashboard configuration forms.
      </p>
    </section>
  )
}

export default SettingsPage
