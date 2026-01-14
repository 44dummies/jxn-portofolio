'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SpotlightCard from './ui/SpotlightCard';

const projects = [
    {
        title: 'DTC Fashion Scale',
        channel: 'Meta Ads',
        metric: '3.2x ROAS',
        description: 'Scaled a womens fashion brand from $50k to $400k/mo ad spend while improving return on ad spend through creative testing and audience segmentation.',
        image: '/project-fashion.png',
    },
    {
        title: 'B2B SaaS Content Cluster',
        channel: 'SEO',
        metric: '0 → 47 ranking pages',
        description: 'Built topical authority in a competitive SaaS niche. Created 47 interlinked pages generating 12k organic visitors monthly and 340% increase in demo requests.',
        image: '/project-seo.png',
    },
    {
        title: 'Local HVAC Growth',
        channel: 'SEO + Retargeting',
        metric: '+180% leads',
        description: 'Combined local SEO dominance with Meta retargeting. Captured search intent and converted warm traffic, nearly tripling monthly qualified leads.',
        image: '/project-local.png',
    },
    {
        title: 'Ecom Tracking Overhaul',
        channel: 'CAPI / GA4',
        metric: '34% attribution lift',
        description: 'Rebuilt tracking infrastructure with server-side events and Conversions API. Recovered lost attribution data and improved campaign optimization signals.',
        image: '/project-tracking.png',
    },
    {
        title: 'Fintech Landing Redesign',
        channel: 'CRO',
        metric: '+52% conversion',
        description: 'Redesigned the signup flow for a B2B fintech platform. Simplified the value prop, added social proof, and increased trial signups by over half.',
        image: '/project-cro.png',
    },
    {
        title: 'Health & Wellness Campaign',
        channel: 'Meta Ads',
        metric: '-27% CAC',
        description: 'Restructured campaign architecture for a supplement brand. Improved creative strategy and audience testing reduced cost per acquisition significantly.',
        image: '/project-health.png',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
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
                        Case Studies
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        Results that{' '}
                        <span className="text-gradient-gold">compound</span>
                    </h2>
                    <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        Real campaigns, real metrics. Here&apos;s how I&apos;ve helped brands scale their growth.
                    </p>
                </motion.div>

                {/* Projects grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project) => (
                        <SpotlightCard
                            key={project.title}
                            variants={cardVariants}
                            className="overflow-hidden cursor-pointer group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20">
                                        View Case Study
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Channel & Metric */}
                                <div className="flex items-center justify-between mb-3">
                                    <motion.span
                                        className="
                                            px-3 py-1 rounded-full text-xs font-medium
                                            bg-[var(--gold)]/10 text-[var(--gold)]
                                        "
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {project.channel}
                                    </motion.span>
                                    <span className="text-sm font-semibold text-gradient-gold">
                                        {project.metric}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
