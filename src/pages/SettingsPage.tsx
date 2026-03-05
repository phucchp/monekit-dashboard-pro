import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import ProjectSettingsScreen from '../features/project-settings/ProjectSettingsScreen'
import { setPageTitle } from '../features/ui/uiSlice'

function SettingsPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Project Settings'))
  }, [dispatch])

  return <ProjectSettingsScreen />
}

export default SettingsPage
