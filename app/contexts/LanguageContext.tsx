'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.product': 'Product',
    'nav.pricing': 'Pricing',
    'nav.migration': 'Migration',
    'nav.cta': 'Talk to Astrah',
    
    // Hero
    'hero.eyebrow': 'THE BUSINESS OPERATING SYSTEM FOR THE GULF',
    'hero.headline1': 'Stop managing chaos.',
    'hero.headline2': 'Start managing revenue.',
    'hero.subline1': 'The AI-native OS built for WhatsApp-first sales teams.',
    'hero.subline2a': 'Not a CRM.',
    'hero.subline2b': 'A system.',
    'hero.supporting': 'Built for how business actually happens across the GCC and MENA.',
    
    // Reality Check
    'reality.headline': 'Your CRM is lying to you.',
    'reality.signal1': 'WhatsApp messages are ignored.',
    'reality.signal2': 'Follow-ups are missed.',
    'reality.signal3': 'Deals die in silence.',
    'reality.context': 'In the Gulf, revenue is built on relationships and trust, not spreadsheets. Yet most systems are built for email workflows while deals actually move through conversations.',
    'reality.gap.title': 'The Gap',
    'reality.gap.1': 'Traditional CRMs record activity after it happens.',
    'reality.gap.2': "They don't see conversations.",
    'reality.gap.3': "They don't see silence.",
    'reality.gap.4': "They don't see risk.",
    'reality.statement': 'Astrah does.',
    
    // Why Systems Fail
    'systems.headline': 'WHY EXISTING SYSTEMS FAIL',
    'systems.p1': 'Global CRMs assume email-first workflows and rigid pipelines. That model doesn\'t match how business actually works in this region.',
    'systems.p2': 'Here, trust is built in real time.',
    'systems.p3': 'Decisions happen inside chats.',
    'systems.p4': 'Localizing Western software doesn\'t solve this. The region needs infrastructure designed for these realities.',
    
    // Why Astrah
    'whystrah.headline': 'WHY ASTRAH EXISTS',
    'whystrah.legacy': 'Legacy CRMs',
    'whystrah.astrah': 'Astrah OS',
    'whystrah.legacy.1': 'Email-first',
    'whystrah.legacy.2': 'Manual data entry',
    'whystrah.legacy.3': 'Static records',
    'whystrah.legacy.4': 'Dashboard mindset',
    'whystrah.astrah.1': 'WhatsApp-first',
    'whystrah.astrah.2': 'AI-native',
    'whystrah.astrah.3': 'Living intelligence',
    'whystrah.astrah.4': 'Business operating system',
    'whystrah.insight': 'Business here doesn\'t happen in inboxes. It happens in conversations.',
    
    // AI Lead Generator
    'lead.headline': 'Demand, built in.',
    'lead.subtitle': 'AI LEAD GENERATOR',
    'lead.p1': 'Demand doesn\'t come from lists.',
    'lead.p2': 'It comes from intelligence.',
    'lead.p3': 'Astrah doesn\'t just manage leads.',
    'lead.p4': 'It helps generate pipeline.',
    'lead.capabilities': 'Capabilities',
    'lead.cap.1': 'Outcome-aware sourcing based on what actually closes',
    'lead.cap.2': 'Region-tuned signals for GCC and MENA markets',
    'lead.cap.3': 'Ranked opportunity feed by intent',
    'lead.cap.4': 'Drafted outreach, never auto-sent',
    'lead.closing': 'Stop buying cold lists. Start generating demand inside your OS.',
    
    // AI Deal Intelligence
    'deal.headline': 'Stop revenue leaks.',
    'deal.subtitle': 'AI DEAL INTELLIGENCE',
    'deal.p1': 'Protect the pipeline you already earned.',
    'deal.p2': 'Astrah monitors deal behavior and surfaces risk before it becomes loss.',
    'deal.signals': 'Signals Detected',
    'deal.signal.1': 'Silence detection',
    'deal.signal.2': 'Stagnation alerts',
    'deal.signal.3': 'Priority and momentum signals',
    'deal.principle': 'Principle',
    'deal.principle.1': 'No auto-sending.',
    'deal.principle.2': 'No auto-modifying.',
    'deal.principle.3': 'No surprises.',
    'deal.principle.4': 'Just visibility and control.',
    
    // Agreement to Cash
    'cash.headline': 'From "Yalla" to paid.',
    'cash.p1': 'Most CRMs stop when the conversation ends.',
    'cash.p2': 'Astrah stops when the money hits the bank.',
    'cash.concept': 'Concept',
    'cash.concept.1': 'Kill the PDF.',
    'cash.concept.2': 'The gap between agreement and payment is where deals die.',
    'cash.old': 'Old way:',
    'cash.old.way': 'Send PDF → Wait → Chase',
    'cash.astrah': 'Astrah way:',
    'cash.astrah.way': 'Send link → Paid',
    
    // AI Inbox Zero
    'inbox.headline': 'Inbox intelligence.',
    'inbox.subtitle': 'AI INBOX ZERO',
    'inbox.p1': 'One unified intelligence layer for WhatsApp and email.',
    'inbox.capabilities': 'Capabilities',
    'inbox.cap.1': 'Sentiment and intent signals',
    'inbox.cap.2': 'Smart thread summaries',
    'inbox.cap.3': 'Urgency-based prioritization',
    'inbox.closing': 'Your team stays human. The system keeps order.',
    
    // Intelligence Core
    'core.headline': 'The system is alive.',
    'core.p1': 'Astrah is powered by a persistent intelligence layer across the entire OS.',
    'core.p2': 'It interprets conversations, surfaces risk, highlights momentum, and suggests next actions.',
    'core.p3': 'This is not a chatbot.',
    'core.p4': 'It supports decisions.',
    'core.p5': 'You make them.',
    
    // Migration
    'migration.headline': 'Switch in days, not months.',
    'migration.p1': 'We handle data cleaning, mapping, and setup.',
    'migration.p2': 'You log in and operate.',
    'migration.p3': 'Complex environments are scoped separately.',
    
    // Pricing
    'pricing.headline': 'PRICING (TEASER ONLY)',
    'pricing.p1': 'Transparent, region-first pricing.',
    'pricing.p2': 'One intelligence core.',
    'pricing.p3': 'Scales by power and volume.',
    'pricing.cta': 'View Pricing',
    
    // Footer CTA
    'footercta.headline': 'Built for serious operators.',
    'footercta.p1': 'Astrah OS is for teams who don\'t want another tool to manage, but a system that helps them run the business with clarity.',
    
    // Footer
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.language': 'Language',
    'footer.copyright': '© 2026 Astrah OS. All rights reserved.',
  },
  ar: {
    // Navbar
    'nav.product': 'المنتج',
    'nav.pricing': 'الأسعار',
    'nav.migration': 'الترحيل',
    'nav.cta': 'تحدث مع أسترا',
    
    // Hero
    'hero.eyebrow': 'نظام التشغيل التجاري للخليج',
    'hero.headline1': 'توقّف عن إدارة الفوضى.',
    'hero.headline2': 'ابدأ إدارة الإيرادات.',
    'hero.subline1': 'نظام تشغيل ذكي مبني على الذكاء الاصطناعي لفرق المبيعات التي تعتمد على واتساب أولاً.',
    'hero.subline2a': 'ليس نظام CRM. بل ',
    'hero.subline2b': 'نظام متكامل.',
    'hero.supporting': 'مصمم لطريقة عمل الأعمال الحقيقية في دول مجلس التعاون الخليجي ومنطقة الشرق الأوسط وشمال أفريقيا.',
    
    // Reality Check
    'reality.headline': 'نظام إدارة علاقات العملاء الخاص بك يكذب عليك.',
    'reality.signal1': 'يتم تجاهل رسائل واتساب.',
    'reality.signal2': 'يتم تفويت المتابعات.',
    'reality.signal3': 'تموت الصفقات في صمت.',
    'reality.context': 'في الخليج، تُبنى الإيرادات على العلاقات والثقة، وليس جداول البيانات. ومع ذلك، يتم بناء معظم الأنظمة لسير عمل البريد الإلكتروني بينما تتحرك الصفقات فعليًا من خلال المحادثات.',
    'reality.gap.title': 'الفجوة',
    'reality.gap.1': 'تسجل أنظمة إدارة علاقات العملاء التقليدية النشاط بعد حدوثه.',
    'reality.gap.2': 'لا يرون المحادثات.',
    'reality.gap.3': 'لا يرون الصمت.',
    'reality.gap.4': 'لا يرون المخاطر.',
    'reality.statement': 'أسترا يفعل.',
    
    // Why Systems Fail
    'systems.headline': 'لماذا تفشل الأنظمة الموجودة',
    'systems.p1': 'تفترض أنظمة إدارة علاقات العملاء العالمية سير عمل تركز على البريد الإلكتروني وخطوط أنابيب جامدة. هذا النموذج لا يتطابق مع كيفية عمل الأعمال فعليًا في هذه المنطقة.',
    'systems.p2': 'هنا، تُبنى الثقة في الوقت الفعلي.',
    'systems.p3': 'تحدث القرارات داخل الدردشات.',
    'systems.p4': 'توطين البرمجيات الغربية لا يحل هذا. المنطقة تحتاج إلى بنية تحتية مصممة لهذه الحقائق.',
    
    // Why Astrah
    'whystrah.headline': 'لماذا يوجد أسترا',
    'whystrah.legacy': 'أنظمة إدارة علاقات العملاء القديمة',
    'whystrah.astrah': 'نظام أسترا',
    'whystrah.legacy.1': 'البريد الإلكتروني أولاً',
    'whystrah.legacy.2': 'إدخال البيانات يدويًا',
    'whystrah.legacy.3': 'سجلات ثابتة',
    'whystrah.legacy.4': 'عقلية لوحة المعلومات',
    'whystrah.astrah.1': 'واتساب أولاً',
    'whystrah.astrah.2': 'قائم على الذكاء الاصطناعي',
    'whystrah.astrah.3': 'ذكاء حي',
    'whystrah.astrah.4': 'نظام تشغيل الأعمال',
    'whystrah.insight': 'الأعمال هنا لا تحدث في صناديق الوارد. تحدث في المحادثات.',
    
    // AI Lead Generator
    'lead.headline': 'الطلب، مدمج.',
    'lead.subtitle': 'مولد العملاء المحتملين بالذكاء الاصطناعي',
    'lead.p1': 'الطلب لا يأتي من القوائم.',
    'lead.p2': 'يأتي من الذكاء.',
    'lead.p3': 'أسترا لا يدير العملاء المحتملين فقط.',
    'lead.p4': 'يساعد في توليد خط الأنابيب.',
    'lead.capabilities': 'القدرات',
    'lead.cap.1': 'المصادر الواعية بالنتائج بناءً على ما يُغلق فعليًا',
    'lead.cap.2': 'إشارات مخصصة للمنطقة لأسواق دول مجلس التعاون الخليجي والشرق الأوسط وشمال أفريقيا',
    'lead.cap.3': 'خلاصة الفرص المرتبة حسب النية',
    'lead.cap.4': 'الوصول المسود، لا يُرسل تلقائيًا أبدًا',
    'lead.closing': 'توقف عن شراء القوائم الباردة. ابدأ في توليد الطلب داخل نظام التشغيل الخاص بك.',
    
    // AI Deal Intelligence
    'deal.headline': 'أوقف تسرب الإيرادات.',
    'deal.subtitle': 'ذكاء الصفقات بالذكاء الاصطناعي',
    'deal.p1': 'احم خط الأنابيب الذي كسبته بالفعل.',
    'deal.p2': 'يراقب أسترا سلوك الصفقة ويكشف المخاطر قبل أن تصبح خسارة.',
    'deal.signals': 'الإشارات المكتشفة',
    'deal.signal.1': 'اكتشاف الصمت',
    'deal.signal.2': 'تنبيهات الركود',
    'deal.signal.3': 'إشارات الأولوية والزخم',
    'deal.principle': 'المبدأ',
    'deal.principle.1': 'لا إرسال تلقائي.',
    'deal.principle.2': 'لا تعديل تلقائي.',
    'deal.principle.3': 'لا مفاجآت.',
    'deal.principle.4': 'الرؤية والتحكم فقط.',
    
    // Agreement to Cash
    'cash.headline': 'من "يلا" إلى الدفع.',
    'cash.p1': 'تتوقف معظم أنظمة إدارة علاقات العملاء عندما تنتهي المحادثة.',
    'cash.p2': 'يتوقف أسترا عندما تصل الأموال إلى البنك.',
    'cash.concept': 'المفهوم',
    'cash.concept.1': 'اقتل ملف PDF.',
    'cash.concept.2': 'الفجوة بين الاتفاق والدفع هي المكان الذي تموت فيه الصفقات.',
    'cash.old': 'الطريقة القديمة:',
    'cash.old.way': 'إرسال PDF → انتظار → مطاردة',
    'cash.astrah': 'طريقة أسترا:',
    'cash.astrah.way': 'إرسال رابط → مدفوع',
    
    // AI Inbox Zero
    'inbox.headline': 'ذكاء صندوق الوارد.',
    'inbox.subtitle': 'صندوق الوارد الصفري بالذكاء الاصطناعي',
    'inbox.p1': 'طبقة ذكاء موحدة واحدة لواتساب والبريد الإلكتروني.',
    'inbox.capabilities': 'القدرات',
    'inbox.cap.1': 'إشارات المشاعر والنية',
    'inbox.cap.2': 'ملخصات الخيوط الذكية',
    'inbox.cap.3': 'الأولوية القائمة على الاستعجال',
    'inbox.closing': 'يبقى فريقك بشريًا. يحافظ النظام على النظام.',
    
    // Intelligence Core
    'core.headline': 'النظام حي.',
    'core.p1': 'يعمل أسترا بطبقة ذكاء مستمرة عبر نظام التشغيل بالكامل.',
    'core.p2': 'يفسر المحادثات ويكشف المخاطر ويسلط الضوء على الزخم ويقترح الإجراءات التالية.',
    'core.p3': 'هذا ليس روبوت محادثة.',
    'core.p4': 'يدعم القرارات.',
    'core.p5': 'أنت تتخذها.',
    
    // Migration
    'migration.headline': 'التبديل في أيام، وليس أشهر.',
    'migration.p1': 'نتولى تنظيف البيانات والخرائط والإعداد.',
    'migration.p2': 'تقوم بتسجيل الدخول والتشغيل.',
    'migration.p3': 'يتم تحديد البيئات المعقدة بشكل منفصل.',
    
    // Pricing
    'pricing.headline': 'الأسعار (معاينة فقط)',
    'pricing.p1': 'أسعار شفافة، تركز على المنطقة أولاً.',
    'pricing.p2': 'نواة ذكاء واحدة.',
    'pricing.p3': 'يتوسع حسب القوة والحجم.',
    'pricing.cta': 'عرض الأسعار',
    
    // Footer CTA
    'footercta.headline': 'مصمم للمشغلين الجادين.',
    'footercta.p1': 'نظام أسترا مخصص للفرق التي لا تريد أداة أخرى لإدارتها، بل نظام يساعدها على إدارة الأعمال بوضوح.',
    
    // Footer
    'footer.product': 'المنتج',
    'footer.legal': 'قانوني',
    'footer.language': 'اللغة',
    'footer.copyright': '© 2026 نظام أسترا. جميع الحقوق محفوظة.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Set HTML dir attribute for RTL
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguageState(savedLang);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
