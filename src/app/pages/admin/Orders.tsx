import { useState } from 'react';
import { Search, Filter, Download, Eye, Edit, Trash2, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { toast } from 'sonner';

const allOrders = [
  { id: 'ORD-001', client: 'Əli Məmmədov', email: 'ali@example.com', service: 'Business Website', status: 'completed', amount: 199, date: '2026-04-10' },
  { id: 'ORD-002', client: 'Nigar Əliyeva', email: 'nigar@example.com', service: 'E-commerce Platform', status: 'inProgress', amount: 399, date: '2026-04-14' },
  { id: 'ORD-003', client: 'Elvin Həsənov', email: 'elvin@example.com', service: 'Portfolio Website', status: 'pending', amount: 99, date: '2026-04-16' },
  { id: 'ORD-004', client: 'Leyla İsmayılova', email: 'leyla@example.com', service: 'Standard Package', status: 'inProgress', amount: 199, date: '2026-04-15' },
  { id: 'ORD-005', client: 'Rəşad Quliyev', email: 'rashad@example.com', service: 'Premium Package', status: 'pending', amount: 399, date: '2026-04-16' },
  { id: 'ORD-006', client: 'Səbinə Məmmədova', email: 'sabina@example.com', service: 'Business Website', status: 'completed', amount: 199, date: '2026-04-12' },
  { id: 'ORD-007', client: 'Vüqar Əliyev', email: 'vugar@example.com', service: 'Basic Package', status: 'cancelled', amount: 99, date: '2026-04-13' },
];

const getStatusBadge = (status: string) => {
  const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    completed: 'default',
    inProgress: 'secondary',
    pending: 'outline',
    cancelled: 'destructive',
  };

  const labels: Record<string, string> = {
    completed: 'Tamamlandı',
    inProgress: 'İcra olunur',
    pending: 'Gözləyir',
    cancelled: 'Ləğv edilib',
  };

  return <Badge variant={variants[status] || 'outline'}>{labels[status] || status}</Badge>;
};

export function Orders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = allOrders.filter((order) => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: string) => {
    toast.success(`Sifariş ${id} silindi`);
  };

  const handleExport = () => {
    toast.success('Sifarişlər Excel faylına ixrac edildi');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Sifarişlər</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Bütün sifarişləri idarə edin və izləyin
        </p>
      </div>

      {/* Filters and Actions */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Sifariş ID, müştəri və ya email ilə axtar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Hamısı</SelectItem>
                <SelectItem value="pending">Gözləyir</SelectItem>
                <SelectItem value="inProgress">İcra olunur</SelectItem>
                <SelectItem value="completed">Tamamlandı</SelectItem>
                <SelectItem value="cancelled">Ləğv edilib</SelectItem>
              </SelectContent>
            </Select>

            {/* Export */}
            <Button variant="outline" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              İxrac et
            </Button>

            {/* Add New */}
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Yeni sifariş
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Sifariş siyahısı</CardTitle>
          <CardDescription>
            {filteredOrders.length} sifariş tapıldı
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Müştəri</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Xidmət</TableHead>
                <TableHead>Tarix</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Məbləğ</TableHead>
                <TableHead className="text-right">Əməliyyatlar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">{order.email}</TableCell>
                  <TableCell>{order.service}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right font-semibold">{order.amount} AZN</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDelete(order.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
