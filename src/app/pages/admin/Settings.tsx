import { useState } from 'react';
import { Save, Globe, DollarSign, Bell, Shield, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Separator } from '../../components/ui/separator';
import { toast } from 'sonner';

export function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'WebsiteOnline.az',
    email: 'info@websiteonline.az',
    phone: '+994 XX XXX XX XX',
    defaultCurrency: 'AZN',
    defaultLanguage: 'az',
    emailNotifications: true,
    orderNotifications: true,
    marketingEmails: false,
    twoFactorAuth: false,
  });

  const handleSave = () => {
    toast.success('Tənzimləmələr saxlanıldı');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tənzimləmələr</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Sistem tənzimləmələrini idarə edin
        </p>
      </div>

      <div className="max-w-4xl space-y-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              <CardTitle>Ümumi tənzimləmələr</CardTitle>
            </div>
            <CardDescription>
              Sayt haqqında əsas məlumatlar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="siteName">Sayt adı</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Currency & Language */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <CardTitle>Valyuta və dil</CardTitle>
            </div>
            <CardDescription>
              Standart valyuta və dil seçimləri
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="currency">Standart valyuta</Label>
              <Input
                id="currency"
                value={settings.defaultCurrency}
                onChange={(e) => setSettings({ ...settings, defaultCurrency: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="language">Standart dil</Label>
              <Input
                id="language"
                value={settings.defaultLanguage}
                onChange={(e) => setSettings({ ...settings, defaultLanguage: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-purple-600" />
              <CardTitle>Bildirişlər</CardTitle>
            </div>
            <CardDescription>
              Email bildiriş tənzimləmələri
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email bildirişləri</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ümumi email bildirişləri alın
                </p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => 
                  setSettings({ ...settings, emailNotifications: checked })
                }
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label>Sifariş bildirişləri</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Yeni sifarişlər haqqında bildiriş alın
                </p>
              </div>
              <Switch
                checked={settings.orderNotifications}
                onCheckedChange={(checked) => 
                  setSettings({ ...settings, orderNotifications: checked })
                }
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label>Marketinq emailləri</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Xəbərlər və kampaniyalar haqqında emaillər alın
                </p>
              </div>
              <Switch
                checked={settings.marketingEmails}
                onCheckedChange={(checked) => 
                  setSettings({ ...settings, marketingEmails: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-600" />
              <CardTitle>Təhlükəsizlik</CardTitle>
            </div>
            <CardDescription>
              Hesab təhlükəsizlik tənzimləmələri
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <Label>İki faktorlu autentifikasiya</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Hesabınızı əlavə təhlükəsizlik təbəqəsi ilə qoruyun
                </p>
              </div>
              <Switch
                checked={settings.twoFactorAuth}
                onCheckedChange={(checked) => 
                  setSettings({ ...settings, twoFactorAuth: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button size="lg" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Dəyişiklikləri saxla
          </Button>
        </div>
      </div>
    </div>
  );
}
