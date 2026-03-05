import { Navigate, createBrowserRouter } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import CustomersPage from './pages/CustomersPage'
import DashboardPage from './pages/DashboardPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import OfferingCreatePage from './pages/OfferingCreatePage'
import OfferingDetailPage from './pages/OfferingDetailPage'
import OfferingsPage from './pages/OfferingsPage'
import ProductCreatePage from './pages/ProductCreatePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductListPage from './pages/ProductListPage'
import ProjectsPage from './pages/ProjectsPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import SettingsPage from './pages/SettingsPage'
import VirtualCurrencyCreatePage from './pages/VirtualCurrencyCreatePage'
import VirtualCurrencyDetailPage from './pages/VirtualCurrencyDetailPage'
import VirtualCurrencyListPage from './pages/VirtualCurrencyListPage'

export const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignUpPage />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPasswordPage />,
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: 'projects', element: <ProjectsPage /> },
        { path: 'customers', element: <CustomersPage /> },
        { path: 'products', element: <ProductListPage /> },
        { path: 'products/new', element: <ProductCreatePage /> },
        { path: 'products/:productId', element: <ProductDetailPage /> },
        { path: 'offerings', element: <OfferingsPage /> },
        { path: 'offerings/new', element: <OfferingCreatePage /> },
        { path: 'offerings/:offeringId', element: <OfferingDetailPage /> },
        { path: 'virtual-currencies', element: <VirtualCurrencyListPage /> },
        { path: 'virtual-currencies/new', element: <VirtualCurrencyCreatePage /> },
        { path: 'virtual-currencies/:currencyId', element: <VirtualCurrencyDetailPage /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ],
  { basename: '/monekit-dashboard-pro/' },
)
