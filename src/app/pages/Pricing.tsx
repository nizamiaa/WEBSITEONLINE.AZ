import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router';

const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 99,
    features: [
      '3 səhifəlik sayt',
      'Responsiv dizayn',
      '5 gün ərzində təhvil',
      'Texniki dəstək',
    ],
    popular: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 199,
    features: [
      '5-7 səhifə',
      'Admin panel',
      'SEO optimizasiya',
      'Responsiv dizayn',
      '10 gün ərzində təhvil',
      '30 gün texniki dəstək',
    ],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 399,
    features: [
      'Tam fərdi dizayn',
      'E-commerce və ya kompleks sistem',
      '24/7 dəstək',
      'SEO + Performans optimizasiya',
      'Admin panel',
      'Limitsiz səhifə',
      '3 ay texniki dəstək',
    ],
    popular: false,
  },
];

export function Pricing() {
  const { t } = useLanguage();
  const { convertPrice } = useCurrency();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">
            {t('pricing.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Currency Info */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('currency.info')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative ${
                plan.popular
                  ? 'border-blue-600 dark:border-blue-400 shadow-xl scale-105'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Ən populyar
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  {t(`pricing.${plan.id}`)}
                </CardTitle>
                <CardDescription className="text-3xl font-bold mt-4">
                  {convertPrice(plan.price)}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link to="/contact" className="w-full">
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {t('hero.cta1')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
