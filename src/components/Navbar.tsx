'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
    const { t, language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.services'), href: '#services' },
        { name: t('nav.process'), href: '#process' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.blog'), href: '#blog' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Smooth scroll handler with offset
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 100; // Navbar height + padding
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" as const }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
            >
                <nav
                    className={`
                        flex items-center justify-between px-4 py-3 rounded-full
                        border transition-all duration-500
                        ${scrolled
                            ? 'bg-[var(--bg-card)]/95 backdrop-blur-xl border-[var(--border-glass-hover)] shadow-lg shadow-black/20'
                            : 'bg-[var(--glass-bg)] backdrop-blur-md border-[var(--border-glass)]'
                        }
                    `}
                >
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/logo.jpg"
                            alt="Jackson Ndeti Logo"
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <motion.a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="
                                        px-3 py-2 rounded-full text-sm font-medium
                                        text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                                        hover:bg-white/5 transition-all duration-300
                                    "
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.name}
                                </motion.a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA + Mobile Menu Button */}
                    <div className="flex items-center gap-2">
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="
                                hidden sm:block px-4 py-2 rounded-full text-sm font-semibold
                                bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)]
                                text-[var(--bg-dark)] hover:shadow-lg hover:shadow-[var(--gold)]/20
                                transition-all duration-300
                            "
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {t('nav.cta')}
                        </motion.a>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-white/5 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={mobileMenuOpen ? "open" : "closed"}
                                className="w-6 h-5 flex flex-col justify-between"
                            >
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 8 }
                                    }}
                                    className="w-full h-0.5 bg-[var(--text-primary)] origin-left"
                                />
                                <motion.span
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 }
                                    }}
                                    className="w-full h-0.5 bg-[var(--text-primary)]"
                                />
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -8 }
                                    }}
                                    className="w-full h-0.5 bg-[var(--text-primary)] origin-left"
                                />
                            </motion.div>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="
                                mt-2 p-4 rounded-3xl
                                bg-[var(--bg-card)]/95 backdrop-blur-xl
                                border border-[var(--border-glass)]
                                shadow-2xl shadow-black/30
                            "
                        >
                            <ul className="flex flex-col gap-1">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="
                                                block px-4 py-3 rounded-xl text-base font-medium
                                                text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                                                hover:bg-white/5 transition-all duration-300
                                            "
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, '#contact')}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="
                                    mt-4 block w-full py-3 rounded-xl text-center font-semibold
                                    bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)]
                                    text-[var(--bg-dark)]
                                "
                            >
                                {t('nav.cta')}
                            </motion.a>

                            {/* Mobile Theme & Language Toggles */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-4 flex gap-3 justify-center"
                            >
                                <button
                                    onClick={toggleTheme}
                                    className="
                                        px-4 py-2 rounded-xl
                                        bg-[var(--bg-elevated)] border border-[var(--border-glass)]
                                        text-[var(--text-secondary)] text-sm
                                        flex items-center gap-2
                                    "
                                >
                                    {theme === 'dark' ? (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="5" />
                                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                        </svg>
                                    ) : (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                        </svg>
                                    )}
                                    {theme === 'dark' ? 'Light' : 'Dark'}
                                </button>
                                <button
                                    onClick={toggleLanguage}
                                    className="
                                        px-4 py-2 rounded-xl
                                        bg-[var(--bg-elevated)] border border-[var(--border-glass)]
                                        text-[var(--text-secondary)] text-sm font-medium
                                    "
                                >
                                    {language === 'en' ? '🇰🇪 Swahili' : '🇬🇧 English'}
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
}
