'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <nav
                className={`
                    flex items-center gap-3 px-3 py-2 rounded-full
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

                <ul className="flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <motion.a
                                href={link.href}
                                className="
                                    px-4 py-2 rounded-full text-sm font-medium
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

                <motion.a
                    href="#contact"
                    className="
                        ml-2 px-5 py-2 rounded-full text-sm font-semibold
                        bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)]
                        text-[var(--bg-dark)] hover:shadow-lg hover:shadow-[var(--gold)]/20
                        transition-all duration-300
                    "
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Book a Growth Call
                </motion.a>
            </nav>
        </motion.header>
    );
}
