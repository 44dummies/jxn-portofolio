'use client';

import { motion } from 'framer-motion';

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jackson-ndeti-863265278',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1854VAh5ds/',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.376h3.428l-.532 3.667h-2.896v7.98.003h-4.837z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border-glass)]">
            <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 md:px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col gap-4 md:gap-8"
                >
                    {/* Mobile: Compact single row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Logo / Name */}
                        <div className="text-center md:text-left">
                            <p className="text-base font-semibold">
                                <span className="text-gradient-gold">Jackson</span>{' '}
                                <span className="text-[var(--text-primary)]">Ndeti</span>
                            </p>
                            <p className="text-xs text-[var(--text-muted)] mt-0.5 hidden md:block">
                                Full-Funnel Growth Marketer
                            </p>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    className="
                                        w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center
                                        bg-[var(--bg-card)] border border-[var(--border-glass)]
                                        text-[var(--text-secondary)] hover:text-[var(--gold)]
                                        hover:border-[var(--gold)]/30 transition-colors duration-300
                                    "
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Contact - Hidden on mobile, shown on desktop */}
                    <div className="hidden md:grid md:grid-cols-2 gap-4 border-t border-[var(--border-glass)] pt-6">
                        <div className="text-left space-y-1">
                            <h4 className="text-[var(--gold)] text-xs font-medium uppercase tracking-wider mb-2">Email</h4>
                            <a href="mailto:lucentiquedigital21@gmail.com" className="block text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
                                lucentiquedigital21@gmail.com
                            </a>
                        </div>
                        <div className="text-right space-y-1">
                            <h4 className="text-[var(--gold)] text-xs font-medium uppercase tracking-wider mb-2">Phone</h4>
                            <a href="tel:0706577769" className="block text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
                                0706 577 769
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-center text-xs text-[var(--text-muted)] pt-2 md:pt-4">
                        © {new Date().getFullYear()} Jackson Ndeti
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
