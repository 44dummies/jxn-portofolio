'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const skills = [
    'Meta Ads',
    'Google Ads',
    'SEO Strategy',
    'Content Marketing',
    'CRO',
    'Analytics',
    'Landing Pages',
    'Email Marketing',
];

export default function About() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for image
    const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

    return (
        <section ref={sectionRef} id="about" className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Image with Parallax */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <motion.div
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card"
                            style={{ y: imageY, scale: imageScale }}
                        >
                            <Image
                                src="/jackson-creative.jpg"
                                alt="Jackson Ndeti"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay accent */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/60 via-transparent to-transparent" />
                        </motion.div>

                        {/* Floating stats card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -bottom-6 -right-6 md:right-6 glass-card p-6 rounded-2xl"
                        >
                            <p className="text-4xl font-bold text-gradient-gold">5+</p>
                            <p className="text-sm text-[var(--text-muted)]">{t('about.years')}</p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-[var(--gold)] text-sm font-medium tracking-wider uppercase">
                            {t('about.label')}
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                            {t('about.title')}{' '}
                            <span className="text-gradient-gold">{t('about.title.highlight')}</span>
                        </h2>

                        <div className="mt-6 space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
                            <p>{t('about.intro')}</p>
                            <p><em>{t('about.story')}</em></p>
                            <p>{t('about.mission')}</p>
                        </div>

                        {/* Skills */}
                        <div className="mt-8">
                            <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-4">
                                {t('about.skills.label')}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                                        className="
                                            px-4 py-2 rounded-full text-sm
                                            bg-[var(--bg-card)] border border-[var(--border-glass)]
                                            text-[var(--text-secondary)]
                                            hover:border-[var(--gold)]/30 hover:text-[var(--gold)]
                                            transition-colors duration-300
                                        "
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
