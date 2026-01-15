'use client';

import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';

const featuredTestimonials = [
    {
        quote: "Jackson doesn't just run ads — he builds growth engines. Our Meta campaigns went from break-even to 3x ROAS in three months. He understands the full picture.",
        name: "Wanjiku Mwangi",
        role: "CMO",
        company: "Nairobi Fashion House",
    },
    {
        quote: "We went from zero organic presence to 50,000 monthly visitors. Jackson's SEO strategy gave us a compounding asset that keeps delivering leads month after month.",
        name: "Ochieng Otieno",
        role: "Founder & CEO",
        company: "Savannah Tech",
    },
];

const standardTestimonials = [
    {
        quote: "The tracking setup alone was worth it. We finally have accurate attribution data, and our campaigns are optimizing way better now.",
        name: "Akinyi Odhiambo",
        role: "Head of Growth",
        company: "PesaFlow",
    },
    {
        quote: "Jackson redesigned our landing pages and conversion rate jumped 40%. He thinks like a marketer and executes like a designer.",
        name: "Kipchoge Korir",
        role: "Marketing Director",
        company: "Afya Bora Clinics",
    },
    {
        quote: "Best investment we made this year. His Meta + SEO combo strategy covered acquisition from every angle. Highly recommend.",
        name: "Nyambura Kamau",
        role: "Founder",
        company: "Urban Living KE",
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

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <span className="text-[var(--gold)] text-sm font-medium tracking-wider uppercase">
                        Testimonials
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        Trusted by{' '}
                        <span className="text-gradient-gold">leading brands</span>
                    </h2>
                    <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        Real feedback from businesses I&apos;ve helped scale across East Africa and beyond.
                    </p>
                </motion.div>

                {/* Featured testimonials - floating */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                    {featuredTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="relative"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 30px 60px rgba(201, 169, 98, 0.2)'
                                }}
                                className="
                                    glass-card p-8 gold-glow cursor-pointer
                                    border-[var(--gold)]/20 hover:border-[var(--gold)]/40
                                    transition-all duration-300
                                "
                            >
                                {/* Quote icon */}
                                <div className="mb-6">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[var(--gold)]/40">
                                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" fill="currentColor" />
                                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v4z" fill="currentColor" />
                                    </svg>
                                </div>

                                <p className="text-lg text-[var(--text-primary)] leading-relaxed">
                                    &quot;{testimonial.quote}&quot;
                                </p>

                                <div className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center text-[var(--bg-dark)] font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[var(--text-primary)]">{testimonial.name}</p>
                                        <p className="text-sm text-[var(--text-muted)]">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Standard testimonials */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {standardTestimonials.map((testimonial) => (
                        <SpotlightCard
                            key={testimonial.name}
                            variants={cardVariants}
                            className="p-6 cursor-pointer"
                        >
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            <div className="mt-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold-dark)]/20 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] font-medium text-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[var(--text-primary)]">{testimonial.name}</p>
                                    <p className="text-xs text-[var(--text-muted)]">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
