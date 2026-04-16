import { Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const vacancies = [
  {
    id: 1,
    title: 'UI/UX Designer',
    requirements: ['Figma biliyi', '2+ il təcrübə', 'Portfolio tələb olunur', 'Azerbaycan dili'],
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    requirements: ['React biliyi', 'TypeScript', 'Tailwind CSS', '1+ il təcrübə'],
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'Backend Developer',
    requirements: ['Node.js / Python', 'Database (PostgreSQL)', 'API development', '2+ il təcrübə'],
    type: 'Full-time',
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    requirements: ['SEO biliyi', 'Google Ads', 'Social Media Marketing', '1+ il təcrübə'],
    type: 'Part-time',
  },
];

export function Vacancies() {
  const { t } = useLanguage();

  const handleApply = (title: string) => {
    alert(`Müraciət göndərildi: ${title}`);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t('vacancies.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('vacancies.subtitle')}
          </p>
        </div>

        {/* Vacancies List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {vacancies.map((vacancy) => (
            <Card key={vacancy.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle>{vacancy.title}</CardTitle>
                      <CardDescription className="mt-1">{vacancy.type}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div>
                  <p className="font-semibold text-sm mb-2">{t('vacancies.requirements')}:</p>
                  <ul className="space-y-1">
                    {vacancy.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                        • {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => handleApply(vacancy.title)}
                >
                  {t('vacancies.apply')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
