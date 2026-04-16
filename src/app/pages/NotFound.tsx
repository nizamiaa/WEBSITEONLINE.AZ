import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
        <h2 className="text-3xl md:text-4xl mt-4 mb-2">
          Səhifə tapılmadı
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Axtardığınız səhifə mövcud deyil və ya köçürülüb.
        </p>
        <Link to="/">
          <Button size="lg">
            <Home className="h-4 w-4 mr-2" />
            Ana səhifəyə qayıt
          </Button>
        </Link>
      </div>
    </div>
  );
}
