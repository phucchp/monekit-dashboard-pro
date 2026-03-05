import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import ProjectOverviewScreen from '../features/project-overview/ProjectOverviewScreen'
import { setPageTitle } from '../features/ui/uiSlice'

function DashboardPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Dashboard'))
  }, [dispatch])

  return <ProjectOverviewScreen />
}

export default DashboardPage
