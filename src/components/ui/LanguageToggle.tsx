'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            onClick={toggleLanguage}
            className="
                fixed top-44 right-6 z-50
                w-12 h-12 rounded-full
                bg-[var(--bg-card)] border border-[var(--border-glass)]
                hidden md:flex items-center justify-center
                text-[var(--gold)] hover:text-white
                hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/10
                shadow-lg shadow-black/20
                transition-colors duration-300
                font-bold text-sm
            "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${language === 'en' ? 'Swahili' : 'English'}`}
        >
            <motion.span
                key={language}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
            >
                {language === 'en' ? 'SW' : 'EN'}
            </motion.span>
        </motion.button>
    );
}
