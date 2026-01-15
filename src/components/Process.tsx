'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'Deep dive into your business, market, competitors, and current performance to identify growth opportunities.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'Craft a data-driven growth plan with clear KPIs, targeting, messaging, and channel mix tailored to your goals.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Execution',
        description: 'Launch campaigns with pixel-perfect creative, optimized landing pages, and bulletproof tracking.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Optimization',
        description: 'Continuous testing, iteration, and scaling. We double down on what works and cut what doesn\'t.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 16h5v5" />
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Process() {
    return (
        <section id="process" className="relative py-12 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <span className="text-[var(--gold)] text-sm font-medium tracking-wider uppercase">
                        How I Work
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        A Proven <span className="text-gradient-gold">Process</span>
                    </h2>
                    <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        Every successful campaign follows a systematic approach. Here&apos;s how I turn strategy into results.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            variants={itemVariants}
                            className="relative group"
                        >
                            {/* Connector line (hidden on last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-[var(--gold)]/30 to-transparent z-0" />
                            )}

                            <div className="glass-card p-5 md:p-8 rounded-3xl h-full relative z-10 group-hover:border-[var(--gold)]/30 transition-colors duration-300">
                                {/* Number badge */}
                                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--bg-dark)] font-bold text-sm">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] mb-6 group-hover:bg-[var(--gold)]/20 transition-colors duration-300">
                                    {step.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-[var(--text-muted)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
