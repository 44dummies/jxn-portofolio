'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from '@/components/ui/Magnetic';
import { useLanguage } from '@/context/LanguageContext';

const kpis = [
    { value: '3.2x', label: 'ROAS' },
    { value: '+180%', label: 'Leads' },
    { value: '-27%', label: 'CAC' },
];

const floatingTestimonials = [
    {
        quote: "Jackson transformed our Meta strategy. Revenue doubled in 90 days.",
        name: "Wanjiku M.",
        role: "CMO, Safari Styles",
    },
    {
        quote: "Our organic traffic went from zero to 50k/mo. Game-changing SEO work.",
        name: "Ochieng O.",
        role: "Founder, TechHub",
    },
    {
        quote: "Finally, someone who understands both paid and organic. Incredible ROI.",
        name: "Akinyi O.",
        role: "Head of Growth, Finova",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

export default function Hero() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Parallax - REMOVED (Now Global) */}
            {/* Keeping empty motion div for spacing if needed, but structure implies we can just remove content */}

            {/* Animated gold particles */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-[var(--gold)]/30"
                        initial={{
                            x: `${20 + i * 15}%`,
                            y: '100%',
                            opacity: 0
                        }}
                        animate={{
                            y: '-20%',
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center"
                style={{ y: contentY }}
            >
                {/* Left column - Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants}>
                        <motion.span
                            className="
                                inline-flex items-center gap-2 px-4 py-2 rounded-full
                                bg-[var(--gold)]/10 border border-[var(--gold)]/20
                                text-[var(--gold)] text-sm font-medium
                                backdrop-blur-sm
                            "
                            whileHover={{ scale: 1.05, borderColor: 'rgba(201, 169, 98, 0.4)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                            {t('hero.badge')}
                        </motion.span>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        variants={itemVariants}
                        className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                    >
                        <motion.span
                            className="text-gradient-gold inline-block"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            Jackson
                        </motion.span>{' '}
                        <span className="text-[var(--text-primary)]">Ndeti</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-6 text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg"
                    >
                        {t('hero.tagline')}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
                        <Magnetic>
                            <motion.a
                                href="#projects"
                                className="btn-primary"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                            >
                                {t('hero.cta1')}
                            </motion.a>
                        </Magnetic>
                        <Magnetic>
                            <motion.a
                                href="#contact"
                                className="btn-secondary"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                            >
                                {t('hero.cta2')}
                            </motion.a>
                        </Magnetic>
                    </motion.div>

                    {/* KPI Chips */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex flex-wrap gap-4"
                    >
                        {kpis.map((kpi, index) => (
                            <motion.div
                                key={kpi.label}
                                className="
                                    px-5 py-3 rounded-2xl
                                    bg-[var(--bg-card)]/80 border border-[var(--border-glass)]
                                    flex items-center gap-3 backdrop-blur-sm
                                "
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: 'rgba(201, 169, 98, 0.3)',
                                    boxShadow: '0 0 20px rgba(201, 169, 98, 0.15)'
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                            >
                                <span className="text-2xl font-bold text-gradient-gold">{kpi.value}</span>
                                <span className="text-sm text-[var(--text-muted)]">{kpi.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right column - Floating testimonials */}
                <div className="relative h-[500px] hidden lg:block">
                    {/* Decorative elements */}
                    <motion.div
                        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-20 w-8 h-8 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 backdrop-blur-sm"
                    />
                    <motion.div
                        animate={{ y: [10, -10, 10], scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 left-10 w-6 h-6 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/20"
                    />

                    {/* Cursor icon */}
                    <motion.div
                        animate={{ y: [-5, 5, -5], x: [5, -5, 5], rotate: [0, 10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-32 left-20"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--gold)]/40">
                            <path d="M5 3L19 12L12 13L9 20L5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </motion.div>

                    {/* Floating testimonial cards */}
                    {floatingTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{
                                opacity: 1,
                                y: [0, -15, 0],
                                scale: 1,
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 20px 50px rgba(201, 169, 98, 0.15)',
                                borderColor: 'rgba(201, 169, 98, 0.3)'
                            }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.5 + index * 0.2 },
                                y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                                scale: { duration: 0.3 }
                            }}
                            className={`
                                absolute glass-card p-5 w-72 cursor-pointer
                                ${index === 0 ? 'top-0 right-0' : ''}
                                ${index === 1 ? 'top-40 left-0' : ''}
                                ${index === 2 ? 'bottom-0 right-10' : ''}
                            `}
                        >
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)]" />
                                <div>
                                    <p className="text-sm font-medium text-[var(--text-primary)]">{testimonial.name}</p>
                                    <p className="text-xs text-[var(--text-muted)]">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">Scroll</span>
                    <div className="w-6 h-10 rounded-full border border-[var(--border-glass)] flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
