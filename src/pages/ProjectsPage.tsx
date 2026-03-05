import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import ProjectListScreen from '../features/project-list/ProjectListScreen'
import { setPageTitle } from '../features/ui/uiSlice'

function ProjectsPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Project List'))
  }, [dispatch])

  return <ProjectListScreen />
}

export default ProjectsPage
