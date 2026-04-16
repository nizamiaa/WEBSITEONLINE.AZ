import { useState } from 'react';
import { Search, Mail, MailOpen, Trash2, Reply } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { toast } from 'sonner';

const messages = [
  { 
    id: 1, 
    name: 'Əli Məmmədov', 
    email: 'ali@example.com', 
    subject: 'E-commerce sayt haqqında sual',
    message: 'Salam, e-commerce platforması üçün qiymət haqqında məlumat almaq istəyirəm.',
    date: '2026-04-16 10:30',
    read: false,
  },
  { 
    id: 2, 
    name: 'Nigar Əliyeva', 
    email: 'nigar@example.com', 
    subject: 'Portfolio sayt sifarişi',
    message: 'Portfolio saytım üçün sifariş vermək istəyirəm. Ətraflı məlumat verə bilərsinizmi?',
    date: '2026-04-15 14:20',
    read: true,
  },
  { 
    id: 3, 
    name: 'Elvin Həsənov', 
    email: 'elvin@example.com', 
    subject: 'Texniki dəstək',
    message: 'Saytımda kiçik bir problem var. Kömək edə bilərsinizmi?',
    date: '2026-04-15 09:15',
    read: false,
  },
  { 
    id: 4, 
    name: 'Leyla İsmayılova', 
    email: 'leyla@example.com', 
    subject: 'SEO xidməti',
    message: 'Saytımın SEO optimizasiyası üçün xidmət təklif edirsiniz?',
    date: '2026-04-14 16:45',
    read: true,
  },
];

export function Messages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<typeof messages[0] | null>(null);

  const filteredMessages = messages.filter((msg) =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReply = (email: string) => {
    toast.success(`Cavab göndərildi: ${email}`);
  };

  const handleDelete = (id: number) => {
    toast.success('Mesaj silindi');
    setSelectedMessage(null);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mesajlar</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Müştəri mesajlarını oxuyun və cavab verin
        </p>
      </div>

      {/* Search */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Ad, email və ya mövzu ilə axtar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Gələn mesajlar</CardTitle>
            <CardDescription>
              {messages.filter(m => !m.read).length} oxunmamış
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y dark:divide-gray-800">
              {filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    selectedMessage?.id === msg.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  } ${!msg.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    {msg.read ? (
                      <MailOpen className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                    ) : (
                      <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`font-medium truncate ${!msg.read ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                          {msg.name}
                        </p>
                        {!msg.read && <Badge variant="default" className="ml-2">Yeni</Badge>}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-1">
                        {msg.subject}
                      </p>
                      <p className="text-xs text-gray-500">{msg.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Message Detail */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Mesaj detalları</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMessage ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{selectedMessage.subject}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{selectedMessage.name}</span>
                    <span>•</span>
                    <span>{selectedMessage.email}</span>
                    <span>•</span>
                    <span>{selectedMessage.date}</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button onClick={() => handleReply(selectedMessage.email)}>
                    <Reply className="h-4 w-4 mr-2" />
                    Cavab ver
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={() => handleDelete(selectedMessage.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Sil
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                Mesaj seçin
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
