import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { AdminLayout } from './components/admin/AdminLayout';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Vacancies } from './pages/Vacancies';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { OrderTracking } from './pages/OrderTracking';
import { NotFound } from './pages/NotFound';
import { Dashboard } from './pages/admin/Dashboard';
import { Orders } from './pages/admin/Orders';
import { Users } from './pages/admin/Users';
import { Projects } from './pages/admin/Projects';
import { AdminVacancies } from './pages/admin/AdminVacancies';
import { Messages } from './pages/admin/Messages';
import { Settings } from './pages/admin/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'pricing', Component: Pricing },
      { path: 'vacancies', Component: Vacancies },
      { path: 'contact', Component: Contact },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'order-tracking', Component: OrderTracking },
      { path: '*', Component: NotFound },
    ],
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'orders', Component: Orders },
      { path: 'users', Component: Users },
      { path: 'projects', Component: Projects },
      { path: 'vacancies', Component: AdminVacancies },
      { path: 'messages', Component: Messages },
      { path: 'settings', Component: Settings },
    ],
  },
]);