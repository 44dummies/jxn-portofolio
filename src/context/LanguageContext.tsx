'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navbar
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.process': 'Process',
        'nav.projects': 'Projects',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',
        'nav.cta': 'Book a Call',

        // Hero
        'hero.badge': 'Full-Funnel Growth • Meta Ads + SEO',
        'hero.tagline': 'I scale growth with performance Meta ads + compounding SEO — built for measurable revenue.',
        'hero.cta1': 'View Case Studies',
        'hero.cta2': 'Contact',

        // About
        'about.label': 'About Me',
        'about.title': 'Turning Clicks into',
        'about.title.highlight': 'Customers',
        'about.intro': "I'm Jackson Ndeti, a full-funnel growth marketer based in Nairobi, Kenya. I specialize in transforming marketing spend into measurable revenue through data-driven strategies.",
        'about.story': 'My journey started with a simple question: "Why do most ads fail?" The answer led me down a path of mastering the entire customer journey — from the first ad impression to the final conversion.',
        'about.mission': 'Today, I help businesses across Africa and beyond scale with Meta Ads, SEO, and conversion-optimized funnels. My approach is simple: understand the customer, craft the message, measure everything.',
        'about.skills.label': 'Core Expertise',
        'about.years': 'Years of Experience',

        // Services
        'services.label': 'Services',
        'services.title': 'Full-funnel growth,',
        'services.title.highlight': 'end to end',
        'services.subtitle': 'From awareness to conversion, I build growth systems that scale revenue predictably.',

        // Process
        'process.label': 'How I Work',
        'process.title': 'A Proven',
        'process.title.highlight': 'Process',
        'process.subtitle': "Every successful campaign follows a systematic approach. Here's how I turn strategy into results.",
        'process.discovery': 'Discovery',
        'process.discovery.desc': 'Deep dive into your business, market, competitors, and current performance to identify growth opportunities.',
        'process.strategy': 'Strategy',
        'process.strategy.desc': 'Craft a data-driven growth plan with clear KPIs, targeting, messaging, and channel mix tailored to your goals.',
        'process.execution': 'Execution',
        'process.execution.desc': 'Launch campaigns with pixel-perfect creative, optimized landing pages, and bulletproof tracking.',
        'process.optimization': 'Optimization',
        'process.optimization.desc': "Continuous testing, iteration, and scaling. We double down on what works and cut what doesn't.",

        // Blog
        'blog.label': 'Insights',
        'blog.title': 'Growth',
        'blog.title.highlight': 'Blog',
        'blog.subtitle': 'Actionable insights and strategies to help you scale your business.',
        'blog.newsletter.title': 'Get Growth Tips in Your Inbox',
        'blog.newsletter.subtitle': 'Join 500+ marketers getting weekly insights on scaling with paid + organic.',
        'blog.newsletter.placeholder': 'Enter your email',
        'blog.newsletter.button': 'Subscribe',

        // Contact
        'contact.label': 'Get in Touch',
        'contact.title': "Let's Build Something",
        'contact.title.highlight': 'Great',
        'contact.subtitle': 'Ready to scale? Drop me a message and let\'s discuss your growth goals.',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.message': 'Tell me about your project...',
        'contact.form.submit': 'Send Message',
        'contact.direct': 'Direct Contact Info',

        // Footer
        'footer.tagline': 'Scaling businesses with performance marketing that delivers measurable results.',
        'footer.rights': 'All rights reserved.',
    },
    sw: {
        // Navbar
        'nav.about': 'Kunihusu',
        'nav.services': 'Huduma',
        'nav.process': 'Mchakato',
        'nav.projects': 'Miradi',
        'nav.blog': 'Blogu',
        'nav.contact': 'Wasiliana',
        'nav.cta': 'Piga Simu',

        // Hero
        'hero.badge': 'Ukuaji Kamili • Meta Ads + SEO',
        'hero.tagline': 'Ninakuza biashara na matangazo ya Meta yanayofanya kazi + SEO — yanayojengwa kwa mapato yanayopimika.',
        'hero.cta1': 'Tazama Mifano',
        'hero.cta2': 'Wasiliana',

        // About
        'about.label': 'Kunihusu',
        'about.title': 'Kubadilisha Vibonyezo kuwa',
        'about.title.highlight': 'Wateja',
        'about.intro': 'Mimi ni Jackson Ndeti, mtaalamu wa ukuaji wa masoko nilioko Nairobi, Kenya. Ninabobea kubadilisha matumizi ya masoko kuwa mapato yanayopimika kupitia mikakati inayotegemea data.',
        'about.story': 'Safari yangu ilianza na swali rahisi: "Kwa nini matangazo mengi yanashindikana?" Jibu lilinipeleka njia ya kujua safari nzima ya mteja — kutoka hisia ya kwanza ya tangazo hadi ubadilishaji wa mwisho.',
        'about.mission': 'Leo, ninasaidia biashara kote Afrika na zaidi kukua na Meta Ads, SEO, na funnels zilizoimarishwa kwa ubadilishaji. Njia yangu ni rahisi: elewa mteja, tengeneza ujumbe, pima kila kitu.',
        'about.skills.label': 'Utaalamu Mkuu',
        'about.years': 'Miaka ya Uzoefu',

        // Services
        'services.label': 'Huduma',
        'services.title': 'Ukuaji kamili,',
        'services.title.highlight': 'mwanzo hadi mwisho',
        'services.subtitle': 'Kutoka ufahamu hadi ubadilishaji, ninajenga mifumo ya ukuaji inayokua mapato kwa uhakika.',

        // Process
        'process.label': 'Jinsi Ninavyofanya Kazi',
        'process.title': 'Mchakato',
        'process.title.highlight': 'Uliothibitishwa',
        'process.subtitle': 'Kila kampeni yenye mafanikio inafuata njia ya utaratibu. Hivi ndivyo ninavyobadilisha mkakati kuwa matokeo.',
        'process.discovery': 'Ugunduzi',
        'process.discovery.desc': 'Uchunguzi wa kina wa biashara yako, soko, washindani, na utendaji wa sasa kutambua fursa za ukuaji.',
        'process.strategy': 'Mkakati',
        'process.strategy.desc': 'Kuunda mpango wa ukuaji unaotegemea data na KPIs wazi, ulengaji, ujumbe, na mchanganyiko wa njia uliobinafsishwa kwa malengo yako.',
        'process.execution': 'Utekelezaji',
        'process.execution.desc': 'Zindua kampeni na ubunifu kamili, kurasa za kutua zilizoimarishwa, na ufuatiliaji usiopatikana.',
        'process.optimization': 'Uboreshaji',
        'process.optimization.desc': 'Majaribio yanayoendelea, marudio, na ukuzaji. Tunakazia kinachofanya kazi na kukata kisichofanya.',

        // Blog
        'blog.label': 'Maarifa',
        'blog.title': 'Blogu ya',
        'blog.title.highlight': 'Ukuaji',
        'blog.subtitle': 'Maarifa yanayotumika na mikakati ya kukusaidia kukuza biashara yako.',
        'blog.newsletter.title': 'Pata Vidokezo vya Ukuaji Kwenye Barua Pepe Yako',
        'blog.newsletter.subtitle': 'Jiunge na wapasue 500+ wanaopata maarifa ya kila wiki juu ya kukuza na kulipwa + kikaboni.',
        'blog.newsletter.placeholder': 'Weka barua pepe yako',
        'blog.newsletter.button': 'Jiandikishe',

        // Contact
        'contact.label': 'Wasiliana Nami',
        'contact.title': 'Tujengate Kitu',
        'contact.title.highlight': 'Kubwa',
        'contact.subtitle': 'Uko tayari kukua? Nitupie ujumbe na tuzungumze kuhusu malengo yako ya ukuaji.',
        'contact.form.name': 'Jina Lako',
        'contact.form.email': 'Barua Pepe Yako',
        'contact.form.message': 'Nieleze kuhusu mradi wako...',
        'contact.form.submit': 'Tuma Ujumbe',
        'contact.direct': 'Taarifa za Mawasiliano ya Moja kwa Moja',

        // Footer
        'footer.tagline': 'Kukuza biashara na masoko ya utendaji yanayotoa matokeo yanayopimika.',
        'footer.rights': 'Haki zote zimehifadhiwa.',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem('jxn-lang') as Language;
        if (saved) {
            setLanguage(saved);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'sw' : 'en';
        setLanguage(newLang);
        localStorage.setItem('jxn-lang', newLang);
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        // Return safe defaults during SSR or when outside provider
        return {
            language: 'en' as Language,
            toggleLanguage: () => { },
            t: (key: string) => key
        };
    }
    return context;
}
