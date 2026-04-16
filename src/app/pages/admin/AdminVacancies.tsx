import { useState } from 'react';
import { Search, Plus, Edit, Trash2, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { toast } from 'sonner';

const vacancies = [
  {
    id: 1,
    title: 'UI/UX Designer',
    type: 'Full-time',
    applicants: 12,
    status: 'active',
    postedDate: '2026-04-01',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    type: 'Full-time',
    applicants: 8,
    status: 'active',
    postedDate: '2026-03-28',
  },
  {
    id: 3,
    title: 'Backend Developer',
    type: 'Full-time',
    applicants: 15,
    status: 'active',
    postedDate: '2026-03-25',
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    type: 'Part-time',
    applicants: 5,
    status: 'closed',
    postedDate: '2026-03-20',
  },
];

export function AdminVacancies() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVacancies = vacancies.filter((vacancy) =>
    vacancy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (title: string) => {
    toast.success(`Vakansiya "${title}" silindi`);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Vakansiyalar</h1>
        <p className="text-gray-600 dark:text-gray-400">
          İş elanlarını idarə edin
        </p>
      </div>

      {/* Search and Actions */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Vakansiya adı ilə axtar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Yeni vakansiya
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Vacancies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVacancies.map((vacancy) => (
          <Card key={vacancy.id}>
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-lg">{vacancy.title}</CardTitle>
                <Badge variant={vacancy.status === 'active' ? 'default' : 'secondary'}>
                  {vacancy.status === 'active' ? 'Aktiv' : 'Bağlı'}
                </Badge>
              </div>
              <CardDescription>{vacancy.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{vacancy.applicants} müraciət</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-500">
                    {vacancy.postedDate}
                  </span>
                </div>

                <div className="flex gap-2 pt-2 border-t dark:border-gray-800">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-2" />
                    Redaktə
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(vacancy.title)}
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
