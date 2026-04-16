import { Link } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    name: 'TechCorp Business',
    category: 'Business',
    description: 'Müasir dizayn və yüksək sürət optimizasiyası ilə hazırlanmış web sayt.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBwb3J0Zm9saW98ZW58MXx8fHwxNzc2MzMyNDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Creative Portfolio',
    category: 'Portfolio',
    description: 'Müasir dizayn və yüksək sürət optimizasiyası ilə hazırlanmış web sayt.',
    image: 'https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzYzMjk1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'ShopNow E-commerce',
    category: 'E-commerce',
    description: 'Müasir dizayn və yüksək sürət optimizasiyası ilə hazırlanmış web sayt.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzc2MzA5NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const team = [
  {
    id: 1,
    name: 'Əli Məmmədov',
    position: 'UI/UX Designer',
    bio: '3+ il təcrübə, istifadəçi yönümlü dizayn yanaşması.',
    image: 'https://images.unsplash.com/photo-1752650733757-bcb151bc2045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZXNpZ25lcnxlbnwxfHx8fDE3NzYzMzI0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Nigar Əliyeva',
    position: 'Frontend Developer',
    bio: '3+ il təcrübə, istifadəçi yönümlü dizayn yanaşması.',
    image: 'https://images.unsplash.com/photo-1753450298481-362990f811ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc3NjMzMjQ5NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Elvin Həsənov',
    position: 'Project Manager',
    bio: '3+ il təcrübə, istifadəçi yönümlü dizayn yanaşması.',
    image: 'https://images.unsplash.com/photo-1587715718640-987708ba38e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwcHJvamVjdCUyMG1hbmFnZXJ8ZW58MXx8fHwxNzc2MzMyNDk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  {t('hero.cta1')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {t('hero.cta2')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>
                    {t(`projects.category.${project.category.toLowerCase()}`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm">
                    {t('projects.view')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">
              {t('team.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Responsive Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
              <Check className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t('responsive.info')}
              </p>
            </div>

            {/* Admin Panel Info */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-8 border-2 border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold mb-4 text-center text-purple-900 dark:text-purple-100">
                🔐 Premium Admin Panel
              </h3>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                Tam funksional admin panel ilə sifarişləri, istifadəçiləri və layihələri idarə edin
              </p>
              <div className="bg-white dark:bg-gray-800 rounded p-4 text-sm">
                <p className="font-semibold mb-2">Demo giriş məlumatları:</p>
                <p className="text-gray-600 dark:text-gray-400">Email: admin@websiteonline.az</p>
                <p className="text-gray-600 dark:text-gray-400">Şifrə: admin123</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}