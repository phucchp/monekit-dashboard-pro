import { Navigate, createBrowserRouter } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import SettingsPage from './pages/SettingsPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: 'settings', element: <SettingsPage /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename: '/monekit-dashboard-pro/' }
)
