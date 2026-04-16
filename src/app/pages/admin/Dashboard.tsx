import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Package,
  CheckCircle,
  Clock,
  XCircle,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

const stats = [
  {
    title: 'Ümumi gəlir',
    value: '12,450 AZN',
    change: '+12.5%',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    title: 'Yeni sifarişlər',
    value: '24',
    change: '+8.2%',
    icon: ShoppingCart,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    title: 'Aktiv istifadəçilər',
    value: '156',
    change: '+23.1%',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    title: 'Tamamlanmış',
    value: '89',
    change: '+18.7%',
    icon: Package,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
  },
];

const recentOrders = [
  { id: 'ORD-001', client: 'Əli Məmmədov', service: 'Business Website', status: 'completed', amount: '199 AZN' },
  { id: 'ORD-002', client: 'Nigar Əliyeva', service: 'E-commerce Platform', status: 'inProgress', amount: '399 AZN' },
  { id: 'ORD-003', client: 'Elvin Həsənov', service: 'Portfolio Website', status: 'pending', amount: '99 AZN' },
  { id: 'ORD-004', client: 'Leyla İsmayılova', service: 'Standard Package', status: 'inProgress', amount: '199 AZN' },
  { id: 'ORD-005', client: 'Rəşad Quliyev', service: 'Premium Package', status: 'pending', amount: '399 AZN' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
          <CheckCircle className="h-3 w-3" />
          Tamamlandı
        </span>
      );
    case 'inProgress':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
          <Clock className="h-3 w-3" />
          İcra olunur
        </span>
      );
    case 'pending':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
          <Clock className="h-3 w-3" />
          Gözləyir
        </span>
      );
    default:
      return null;
  }
};

export function Dashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Xoş gəlmisiniz! Əsas statistikanıza nəzər salın.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                  <TrendingUp className="h-4 w-4" />
                  <span>{stat.change} bu ay</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Son sifarişlər</CardTitle>
              <CardDescription className="mt-1">
                Ən son daxil olan 5 sifariş
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Hamısına bax
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sifariş ID</TableHead>
                <TableHead>Müştəri</TableHead>
                <TableHead>Xidmət</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Məbləğ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>{order.service}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right font-semibold">{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
