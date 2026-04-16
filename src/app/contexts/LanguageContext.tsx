import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'az' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  az: {
    // Navigation
    'nav.home': 'Ana səhifə',
    'nav.projects': 'Layihələr',
    'nav.team': 'Komanda',
    'nav.contact': 'Əlaqə',
    'nav.vacancies': 'Vakansiyalar',
    'nav.pricing': 'Qiymətlər',
    'nav.orderTracking': 'Sifariş İzlənməsi',
    'nav.login': 'Daxil ol',
    'nav.register': 'Qeydiyyat',
    
    // Hero
    'hero.title': 'Peşəkar Web Saytlar ilə Biznesini Onlayn Dünyaya Daşı',
    'hero.subtitle': 'Biz sizin üçün müasir, sürətli və satış yönümlü web saytlar hazırlayırıq — biznes, portfolio və e-commerce həlləri ilə.',
    'hero.cta1': 'Sifariş ver',
    'hero.cta2': 'Layihələrimizə bax',
    
    // Projects
    'projects.title': 'Son İşlərimiz',
    'projects.subtitle': 'Müştərilərimiz üçün hazırladığımız seçilmiş layihələr. Hər biri performans, dizayn və istifadəçi təcrübəsi nəzərə alınaraq hazırlanıb.',
    'projects.view': 'Bax',
    'projects.category.business': 'Business',
    'projects.category.portfolio': 'Portfolio',
    'projects.category.ecommerce': 'E-commerce',
    
    // Team
    'team.title': 'Peşəkar Komandamız',
    'team.subtitle': 'Biz dizayn, development və marketinq sahəsində təcrübəli komandayıq.',
    
    // Contact
    'contact.title': 'Bizimlə Əlaqə',
    'contact.subtitle': 'Layihənizi bizimlə bölüşün, sizə ən uyğun həlli təqdim edək.',
    'contact.name': 'Adınız',
    'contact.email': 'Email',
    'contact.message': 'Mesajınız',
    'contact.submit': 'Göndər',
    'contact.emailLabel': 'Email: info@websiteonline.az',
    'contact.whatsapp': 'WhatsApp: +994 XX XXX XX XX',
    
    // Vacancies
    'vacancies.title': 'Karyeranı Bizimlə Qur',
    'vacancies.subtitle': 'Komandamıza qoşul və real layihələrdə iştirak et.',
    'vacancies.requirements': 'Tələblər',
    'vacancies.apply': 'Müraciət et',
    
    // Pricing
    'pricing.title': 'Qiymət Paketləri',
    'pricing.subtitle': 'Hər büdcəyə uyğun web sayt paketləri.',
    'pricing.basic': 'Basic',
    'pricing.standard': 'Standard',
    'pricing.premium': 'Premium',
    
    // Login
    'login.welcome': 'Xoş gəlmisiniz! Hesabınıza daxil olun.',
    'login.email': 'Email',
    'login.password': 'Şifrə',
    'login.submit': 'Daxil ol',
    'login.noAccount': 'Hesabın yoxdur? Qeydiyyatdan keç',
    
    // Register
    'register.title': 'Yeni hesab yaradın',
    'register.fullName': 'Ad Soyad',
    'register.email': 'Email',
    'register.password': 'Şifrə',
    'register.submit': 'Qeydiyyatdan keç',
    
    // Language
    'language.title': 'Dil seçin',
    'language.az': 'Azərbaycan',
    'language.en': 'English',
    'language.ru': 'Русский',
    
    // Theme
    'theme.title': 'Görünüş rejimi',
    'theme.light': 'Light Mode ☀️',
    'theme.dark': 'Dark Mode 🌙',
    
    // Chat
    'chat.title': 'Canlı Dəstək',
    'chat.greeting': 'Salam 👋 Sizə necə kömək edə bilərik?',
    'chat.placeholder': 'Mesajınızı yazın...',
    
    // Order Tracking
    'orderTracking.title': 'Sifarişini İzlə',
    'orderTracking.subtitle': 'Sifariş ID-ni daxil edərək layihənin statusunu yoxla.',
    'orderTracking.orderId': 'Sifariş ID',
    'orderTracking.check': 'Yoxla',
    'orderTracking.pending': 'Gözləmədə',
    'orderTracking.inProgress': 'Hazırlanır',
    'orderTracking.completed': 'Tamamlandı',
    
    // Currency
    'currency.title': 'Valyuta seçimi',
    'currency.info': 'Qiymətlər seçdiyiniz valyutaya uyğun avtomatik yenilənir.',
    
    // Footer
    'footer.about': 'Haqqımızda',
    'footer.projects': 'Layihələr',
    'footer.contact': 'Əlaqə',
    'footer.social': 'Sosial şəbəkələr',
    'footer.copyright': '© 2026 WebsiteOnline.az – Bütün hüquqlar qorunur',
    
    // Responsive
    'responsive.info': 'Bütün saytlar mobil, tablet və desktop cihazlara tam uyğun hazırlanır. Admin panel də daxil olmaqla hər şey responsivdir.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.vacancies': 'Vacancies',
    'nav.pricing': 'Pricing',
    'nav.orderTracking': 'Order Tracking',
    'nav.login': 'Login',
    'nav.register': 'Register',
    
    // Hero
    'hero.title': 'Take Your Business Online with Professional Websites',
    'hero.subtitle': 'We create modern, fast and sales-oriented websites for you — with business, portfolio and e-commerce solutions.',
    'hero.cta1': 'Order Now',
    'hero.cta2': 'View Our Projects',
    
    // Projects
    'projects.title': 'Our Latest Work',
    'projects.subtitle': 'Selected projects prepared for our clients. Each one is prepared considering performance, design and user experience.',
    'projects.view': 'View',
    'projects.category.business': 'Business',
    'projects.category.portfolio': 'Portfolio',
    'projects.category.ecommerce': 'E-commerce',
    
    // Team
    'team.title': 'Our Professional Team',
    'team.subtitle': 'We are an experienced team in design, development and marketing.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Share your project with us, we will offer you the most suitable solution.',
    'contact.name': 'Your Name',
    'contact.email': 'Email',
    'contact.message': 'Your Message',
    'contact.submit': 'Send',
    'contact.emailLabel': 'Email: info@websiteonline.az',
    'contact.whatsapp': 'WhatsApp: +994 XX XXX XX XX',
    
    // Vacancies
    'vacancies.title': 'Build Your Career With Us',
    'vacancies.subtitle': 'Join our team and participate in real projects.',
    'vacancies.requirements': 'Requirements',
    'vacancies.apply': 'Apply',
    
    // Pricing
    'pricing.title': 'Pricing Packages',
    'pricing.subtitle': 'Website packages suitable for every budget.',
    'pricing.basic': 'Basic',
    'pricing.standard': 'Standard',
    'pricing.premium': 'Premium',
    
    // Login
    'login.welcome': 'Welcome! Log in to your account.',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Log In',
    'login.noAccount': "Don't have an account? Register",
    
    // Register
    'register.title': 'Create New Account',
    'register.fullName': 'Full Name',
    'register.email': 'Email',
    'register.password': 'Password',
    'register.submit': 'Register',
    
    // Language
    'language.title': 'Select Language',
    'language.az': 'Azərbaycan',
    'language.en': 'English',
    'language.ru': 'Русский',
    
    // Theme
    'theme.title': 'Appearance Mode',
    'theme.light': 'Light Mode ☀️',
    'theme.dark': 'Dark Mode 🌙',
    
    // Chat
    'chat.title': 'Live Support',
    'chat.greeting': 'Hello 👋 How can we help you?',
    'chat.placeholder': 'Type your message...',
    
    // Order Tracking
    'orderTracking.title': 'Track Your Order',
    'orderTracking.subtitle': 'Check the status of your project by entering the order ID.',
    'orderTracking.orderId': 'Order ID',
    'orderTracking.check': 'Check',
    'orderTracking.pending': 'Pending',
    'orderTracking.inProgress': 'In Progress',
    'orderTracking.completed': 'Completed',
    
    // Currency
    'currency.title': 'Currency Selection',
    'currency.info': 'Prices are automatically updated according to your selected currency.',
    
    // Footer
    'footer.about': 'About Us',
    'footer.projects': 'Projects',
    'footer.contact': 'Contact',
    'footer.social': 'Social Media',
    'footer.copyright': '© 2026 WebsiteOnline.az – All rights reserved',
    
    // Responsive
    'responsive.info': 'All websites are fully compatible with mobile, tablet and desktop devices. Everything including the admin panel is responsive.',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.projects': 'Проекты',
    'nav.team': 'Команда',
    'nav.contact': 'Контакты',
    'nav.vacancies': 'Вакансии',
    'nav.pricing': 'Цены',
    'nav.orderTracking': 'Отслеживание заказа',
    'nav.login': 'Войти',
    'nav.register': 'Регистрация',
    
    // Hero
    'hero.title': 'Профессиональные веб-сайты для развития вашего бизнеса онлайн',
    'hero.subtitle': 'Мы создаем для вас современные, быстрые и ориентированные на продажи веб-сайты — с решениями для бизнеса, портфолио и электронной коммерции.',
    'hero.cta1': 'Заказать',
    'hero.cta2': 'Посмотреть проекты',
    
    // Projects
    'projects.title': 'Наши последние работы',
    'projects.subtitle': 'Избранные проекты, подготовленные для наших клиентов. Каждый из них разработан с учетом производительности, дизайна и пользовательского опыта.',
    'projects.view': 'Посмотреть',
    'projects.category.business': 'Бизнес',
    'projects.category.portfolio': 'Портфолио',
    'projects.category.ecommerce': 'Электронная коммерция',
    
    // Team
    'team.title': 'Наша профессиональная команда',
    'team.subtitle': 'Мы опытная команда в области дизайна, разработки и маркетинга.',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Поделитесь с нами своим проектом, мы предложим вам наиболее подходящее решение.',
    'contact.name': 'Ваше имя',
    'contact.email': 'Email',
    'contact.message': 'Ваше сообщение',
    'contact.submit': 'Отправить',
    'contact.emailLabel': 'Email: info@websiteonline.az',
    'contact.whatsapp': 'WhatsApp: +994 XX XXX XX XX',
    
    // Vacancies
    'vacancies.title': 'Построй карьеру с нами',
    'vacancies.subtitle': 'Присоединяйся к нашей команде и участвуй в реальных проектах.',
    'vacancies.requirements': 'Требования',
    'vacancies.apply': 'Подать заявку',
    
    // Pricing
    'pricing.title': 'Пакеты цен',
    'pricing.subtitle': 'Пакеты веб-сайтов на любой бюджет.',
    'pricing.basic': 'Базовый',
    'pricing.standard': 'Стандартный',
    'pricing.premium': 'Премиум',
    
    // Login
    'login.welcome': 'Добро пожаловать! Войдите в свой аккаунт.',
    'login.email': 'Email',
    'login.password': 'Пароль',
    'login.submit': 'Войти',
    'login.noAccount': 'Нет аккаунта? Зарегистрируйтесь',
    
    // Register
    'register.title': 'Создать новый аккаунт',
    'register.fullName': 'Полное имя',
    'register.email': 'Email',
    'register.password': 'Пароль',
    'register.submit': 'Зарегистрироваться',
    
    // Language
    'language.title': 'Выберите язык',
    'language.az': 'Azərbaycan',
    'language.en': 'English',
    'language.ru': 'Русский',
    
    // Theme
    'theme.title': 'Режим отображения',
    'theme.light': 'Светлый режим ☀️',
    'theme.dark': 'Темный режим 🌙',
    
    // Chat
    'chat.title': 'Живая поддержка',
    'chat.greeting': 'Здравствуйте 👋 Как мы можем вам помочь?',
    'chat.placeholder': 'Напишите ваше сообщение...',
    
    // Order Tracking
    'orderTracking.title': 'Отследить заказ',
    'orderTracking.subtitle': 'Проверьте статус вашего проекта, введя ID заказа.',
    'orderTracking.orderId': 'ID заказа',
    'orderTracking.check': 'Проверить',
    'orderTracking.pending': 'Ожидание',
    'orderTracking.inProgress': 'В процессе',
    'orderTracking.completed': 'Завершено',
    
    // Currency
    'currency.title': 'Выбор валюты',
    'currency.info': 'Цены автоматически обновляются в соответствии с выбранной вами валютой.',
    
    // Footer
    'footer.about': 'О нас',
    'footer.projects': 'Проекты',
    'footer.contact': 'Контакты',
    'footer.social': 'Социальные сети',
    'footer.copyright': '© 2026 WebsiteOnline.az – Все права защищены',
    
    // Responsive
    'responsive.info': 'Все веб-сайты полностью совместимы с мобильными, планшетными и настольными устройствами. Все, включая панель администратора, адаптивно.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('az');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
