import { Navigate, createBrowserRouter } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import CustomersPage from './pages/CustomersPage'
import DashboardPage from './pages/DashboardPage'
import ProductCreatePage from './pages/ProductCreatePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductListPage from './pages/ProductListPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'

export const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: 'customers', element: <CustomersPage /> },
        { path: 'products', element: <ProductListPage /> },
        { path: 'products/new', element: <ProductCreatePage /> },
        { path: 'products/:productId', element: <ProductDetailPage /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ],
  { basename: '/monekit-dashboard-pro/' },
)
