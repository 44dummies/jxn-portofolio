'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import NextImage from 'next/image';
import Magnetic from '@/components/ui/Magnetic';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const inputClasses = `
    w-full px-5 py-4 rounded-2xl
    bg-[var(--bg-card)] border border-[var(--border-glass)]
    text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
    focus:outline-none focus:border-[var(--gold)]/50
    transition-colors duration-300
  `;

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Creative Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden glass-card border-[var(--border-glass)]">
                            <NextImage
                                src="/jackson-creative.jpg"
                                alt="Jackson Ndeti Creative"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/80 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-[var(--gold)] font-medium mb-2">Let&apos;s build together</p>
                                <h3 className="text-3xl font-bold text-white leading-tight">
                                    Ready to scale your <br />
                                    <span className="text-gradient-gold">revenue engine?</span>
                                </h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="mb-8 md:mb-10 text-center md:text-left"
                        >
                            <span className="text-[var(--gold)] text-sm font-medium tracking-wider uppercase">
                                Get in Touch
                            </span>
                            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                                Start the <span className="text-gradient-gold">conversation</span>
                            </h2>
                            <p className="mt-4 text-[var(--text-secondary)] text-lg">
                                Tell me your offer + current bottleneck — I&apos;ll reply with a plan.
                            </p>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="glass-card p-8"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.div
                                    whileFocus={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className={inputClasses}
                                    />
                                </motion.div>

                                <motion.div
                                    whileFocus={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@company.com"
                                        required
                                        className={inputClasses}
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                whileFocus={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                                className="mt-6"
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your business..."
                                    required
                                    rows={4}
                                    className={`${inputClasses} resize-none`}
                                />
                            </motion.div>

                            <div className="mt-8">
                                <Magnetic>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="
                                            w-full py-4 rounded-2xl font-semibold
                                            bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)]
                                            text-[var(--bg-dark)]
                                            hover:shadow-lg hover:shadow-[var(--gold)]/25
                                            transition-shadow duration-300
                                        "
                                    >
                                        Send Message
                                    </motion.button>
                                </Magnetic>
                            </div>
                        </motion.form>

                        {/* Direct Contact Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="mt-8 grid grid-cols-2 gap-4 text-center"
                        >
                            <div className="p-4 rounded-2xl glass-card border-[var(--border-glass)]">
                                <p className="text-xs text-[var(--gold)] uppercase tracking-wider mb-1">Email</p>
                                <a href="mailto:lucentiquedigital21@gmail.com" className="text-xs md:text-sm text-[var(--text-secondary)] hover:text-white block truncate">
                                    lucentiquedigital21...
                                </a>
                            </div>
                            <div className="p-4 rounded-2xl glass-card border-[var(--border-glass)]">
                                <p className="text-xs text-[var(--gold)] uppercase tracking-wider mb-1">Phone</p>
                                <a href="tel:0706577769" className="text-xs md:text-sm text-[var(--text-secondary)] hover:text-white block">
                                    0706 577 769
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
