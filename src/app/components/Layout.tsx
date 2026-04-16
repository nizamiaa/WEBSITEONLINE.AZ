import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { ChatWidget } from './ChatWidget';
import { Toaster } from './ui/sonner';

export function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
      <Toaster />
    </div>
  );
}
