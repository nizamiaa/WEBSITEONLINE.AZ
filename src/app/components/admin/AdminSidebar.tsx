import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Briefcase,
  FolderKanban,
  MessageSquare,
  Settings,
  LogOut,
  Home,
  X,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: ShoppingCart, label: 'Sifarişlər', href: '/admin/orders' },
  { icon: Users, label: 'İstifadəçilər', href: '/admin/users' },
  { icon: FolderKanban, label: 'Layihələr', href: '/admin/projects' },
  { icon: Briefcase, label: 'Vakansiyalar', href: '/admin/vacancies' },
  { icon: MessageSquare, label: 'Mesajlar', href: '/admin/messages' },
  { icon: Settings, label: 'Tənzimləmələr', href: '/admin/settings' },
];

interface AdminSidebarProps {
  onClose?: () => void;
}

export function AdminSidebar({ onClose }: AdminSidebarProps) {
  const location = useLocation();
  const { logout, user } = useAuth();
  const { language } = useLanguage();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-blue-400">Admin Panel</h2>
            <p className="text-sm text-gray-400 mt-1">{user?.name}</p>
          </div>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Back to Site */}
      <div className="p-4 border-b border-gray-800">
        <Link to="/" onClick={onClose}>
          <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
            <Home className="h-5 w-5 mr-3" />
            Sayta qayıt
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
          onClick={logout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Çıxış
        </Button>
      </div>
    </aside>
  );
}