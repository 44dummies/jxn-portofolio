'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
    return (
        <section id="about" className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
                            <Image
                                src="/jackson-creative.jpg"
                                alt="Jackson Ndeti"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay accent */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/60 via-transparent to-transparent" />
                        </div>

                        {/* Floating stats card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -bottom-6 -right-6 md:right-6 glass-card p-6 rounded-2xl"
                        >
                            <p className="text-4xl font-bold text-gradient-gold">5+</p>
                            <p className="text-sm text-[var(--text-muted)]">Years of Experience</p>
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
                            About Me
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                            Turning Clicks into{' '}
                            <span className="text-gradient-gold">Customers</span>
                        </h2>

                        <div className="mt-6 space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
                            <p>
                                I&apos;m Jackson Ndeti, a full-funnel growth marketer based in Nairobi, Kenya.
                                I specialize in transforming marketing spend into measurable revenue through
                                data-driven strategies.
                            </p>
                            <p>
                                My journey started with a simple question: <em>&quot;Why do most ads fail?&quot;</em>
                                The answer led me down a path of mastering the entire customer journey —
                                from the first ad impression to the final conversion.
                            </p>
                            <p>
                                Today, I help businesses across Africa and beyond scale with
                                <strong className="text-white"> Meta Ads, SEO, and conversion-optimized funnels</strong>.
                                My approach is simple: understand the customer, craft the message, measure everything.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="mt-8">
                            <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-4">
                                Core Expertise
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
