import { useState } from 'react';
import { Search, Package, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

type OrderStatus = 'pending' | 'inProgress' | 'completed';

const mockOrders: Record<string, { id: string; name: string; status: OrderStatus; date: string }> = {
  'ORD-001': {
    id: 'ORD-001',
    name: 'Business Website',
    status: 'completed',
    date: '2026-04-10',
  },
  'ORD-002': {
    id: 'ORD-002',
    name: 'Portfolio Website',
    status: 'inProgress',
    date: '2026-04-14',
  },
  'ORD-003': {
    id: 'ORD-003',
    name: 'E-commerce Platform',
    status: 'pending',
    date: '2026-04-16',
  },
};

export function OrderTracking() {
  const { t } = useLanguage();
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState<typeof mockOrders[string] | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const foundOrder = mockOrders[orderId.toUpperCase()];
    if (foundOrder) {
      setOrder(foundOrder);
      setNotFound(false);
    } else {
      setOrder(null);
      setNotFound(true);
    }
  };

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />;
      case 'inProgress':
        return <Package className="h-8 w-8 text-blue-600 dark:text-blue-400" />;
      case 'completed':
        return <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />;
    }
  };

  const getStatusText = (status: OrderStatus) => {
    return t(`orderTracking.${status}`);
  };

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'inProgress':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'completed':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t('orderTracking.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('orderTracking.subtitle')}
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-md mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>{t('orderTracking.orderId')}</CardTitle>
              <CardDescription>
                Sifariş ID-ni daxil edin (məsələn: ORD-001, ORD-002, ORD-003)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <Label htmlFor="orderId">{t('orderTracking.orderId')}</Label>
                  <Input
                    id="orderId"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="ORD-XXX"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  {t('orderTracking.check')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Order Result */}
        {order && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {getStatusIcon(order.status)}
                  <div className="flex-1">
                    <CardTitle>{order.name}</CardTitle>
                    <CardDescription>Sifariş ID: {order.id}</CardDescription>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Sifariş tarixi:</p>
                    <p className="font-semibold">{order.date}</p>
                  </div>

                  {/* Progress Steps */}
                  <div className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex flex-col items-center flex-1">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            order.status === 'pending' || order.status === 'inProgress' || order.status === 'completed'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-300 dark:bg-gray-700'
                          }`}
                        >
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <p className="text-xs mt-2">{t('orderTracking.pending')}</p>
                      </div>

                      <div className={`flex-1 h-1 ${order.status === 'inProgress' || order.status === 'completed' ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-700'}`} />

                      <div className="flex flex-col items-center flex-1">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            order.status === 'inProgress' || order.status === 'completed'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-300 dark:bg-gray-700'
                          }`}
                        >
                          <Package className="h-5 w-5" />
                        </div>
                        <p className="text-xs mt-2">{t('orderTracking.inProgress')}</p>
                      </div>

                      <div className={`flex-1 h-1 ${order.status === 'completed' ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-700'}`} />

                      <div className="flex flex-col items-center flex-1">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            order.status === 'completed'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-300 dark:bg-gray-700'
                          }`}
                        >
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <p className="text-xs mt-2">{t('orderTracking.completed')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Not Found */}
        {notFound && (
          <div className="max-w-md mx-auto">
            <Card className="border-red-200 dark:border-red-900">
              <CardContent className="pt-6">
                <p className="text-center text-red-600 dark:text-red-400">
                  Sifariş tapılmadı. Zəhmət olmasa ID-ni yoxlayın.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
