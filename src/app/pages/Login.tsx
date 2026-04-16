import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';

export function Login() {
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      toast.success('Uğurla daxil oldunuz!');
      // Check if admin
      if (formData.email === 'admin@websiteonline.az') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error('Email və ya şifrə yanlışdır');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{t('login.welcome')}</CardTitle>
          <CardDescription>
            Hesabınıza daxil olmaq üçün məlumatları daxil edin
          </CardDescription>
          <CardDescription className="mt-2 text-xs bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
            Demo: admin@websiteonline.az / admin123
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">{t('login.email')}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="email@example.com"
              />
            </div>

            <div>
              <Label htmlFor="password">{t('login.password')}</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" className="w-full">
              {t('login.submit')}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('login.noAccount').split('?')[0]}?{' '}
            <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
              {t('login.noAccount').split('?')[1]}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}