'use client';

import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';

const services = [
    {
        title: 'Meta Ads',
        subtitle: 'Funnels & Retargeting',
        description: 'Full-funnel Meta campaigns from prospecting to conversion. Dynamic retargeting that turns browsers into buyers.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
            </svg>
        ),
    },
    {
        title: 'SEO Strategy',
        subtitle: 'Clusters & Technical',
        description: 'Topical authority through content clusters. Technical foundations that search engines love.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
            </svg>
        ),
    },
    {
        title: 'Landing Pages & CRO',
        subtitle: 'Convert More Visitors',
        description: 'High-converting landing pages built for your ads. A/B tested layouts that maximize every click.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
            </svg>
        ),
    },
    {
        title: 'Tracking Setup',
        subtitle: 'Pixel · CAPI · GA4',
        description: 'Bulletproof tracking infrastructure. First-party data, server-side events, and conversion APIs.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: 'Content Engine',
        subtitle: 'Blogs & Pages That Rank',
        description: 'Strategic content that captures search demand. From keyword research to published pages that drive traffic.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
    },
    {
        title: 'Reporting & Sprints',
        subtitle: 'Growth Accountability',
        description: 'Weekly performance reports and monthly growth sprints. Transparent metrics that show real business impact.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 20V10" />
                <path d="M12 20V4" />
                <path d="M6 20v-6" />
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function Services() {
    return (
        <section id="services" className="section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--gold)] text-sm font-medium tracking-wider uppercase">
                        Services
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        Full-funnel growth,{' '}
                        <span className="text-gradient-gold">end to end</span>
                    </h2>
                    <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        From awareness to conversion, I build growth systems that scale revenue predictably.
                    </p>
                </motion.div>

                {/* Services grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service) => (
                        <SpotlightCard
                            key={service.title}
                            variants={cardVariants}
                            className="p-8 cursor-pointer group"
                        >
                            <motion.div
                                className="
                                    w-14 h-14 rounded-2xl flex items-center justify-center
                                    bg-[var(--gold)]/10 text-[var(--gold)]
                                    group-hover:bg-[var(--gold)]/20 transition-colors duration-300
                                "
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {service.icon}
                            </motion.div>

                            <h3 className="mt-6 text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-sm text-[var(--gold)] mt-1">
                                {service.subtitle}
                            </p>
                            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover arrow indicator */}
                            <motion.div
                                className="mt-6 flex items-center gap-2 text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ x: -10 }}
                                whileHover={{ x: 0 }}
                            >
                                <span className="text-sm font-medium">Learn more</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </motion.div>
                        </SpotlightCard>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
