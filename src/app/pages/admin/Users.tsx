import { useState } from 'react';
import { Search, UserPlus, MoreVertical, Mail, Shield, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { toast } from 'sonner';

const users = [
  { id: '1', name: 'Admin User', email: 'admin@websiteonline.az', role: 'admin', status: 'active', orders: 0 },
  { id: '2', name: 'Əli Məmmədov', email: 'ali@example.com', role: 'user', status: 'active', orders: 3 },
  { id: '3', name: 'Nigar Əliyeva', email: 'nigar@example.com', role: 'user', status: 'active', orders: 2 },
  { id: '4', name: 'Elvin Həsənov', email: 'elvin@example.com', role: 'user', status: 'active', orders: 1 },
  { id: '5', name: 'Leyla İsmayılova', email: 'leyla@example.com', role: 'user', status: 'inactive', orders: 1 },
  { id: '6', name: 'Rəşad Quliyev', email: 'rashad@example.com', role: 'user', status: 'active', orders: 4 },
];

export function Users() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendEmail = (email: string) => {
    toast.success(`Email göndərildi: ${email}`);
  };

  const handleMakeAdmin = (name: string) => {
    toast.success(`${name} admin edildi`);
  };

  const handleDelete = (name: string) => {
    toast.success(`${name} silindi`);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">İstifadəçilər</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Bütün istifadəçiləri idarə edin
        </p>
      </div>

      {/* Search and Actions */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Ad və ya email ilə axtar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Yeni istifadəçi
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-blue-600 text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{user.name}</CardTitle>
                    <CardDescription className="text-sm">{user.email}</CardDescription>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleSendEmail(user.email)}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email göndər
                    </DropdownMenuItem>
                    {user.role !== 'admin' && (
                      <DropdownMenuItem onClick={() => handleMakeAdmin(user.name)}>
                        <Shield className="h-4 w-4 mr-2" />
                        Admin et
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem 
                      onClick={() => handleDelete(user.name)}
                      className="text-red-600"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Sil
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {user.role === 'admin' ? (
                    <Badge className="bg-purple-600">Admin</Badge>
                  ) : (
                    <Badge variant="secondary">İstifadəçi</Badge>
                  )}
                  <Badge variant={user.status === 'active' ? 'default' : 'outline'}>
                    {user.status === 'active' ? 'Aktiv' : 'Qeyri-aktiv'}
                  </Badge>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {user.orders} sifariş
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
