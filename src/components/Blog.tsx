'use client';

import { motion } from 'framer-motion';

const blogPosts = [
    {
        title: '5 Meta Ads Mistakes Killing Your ROAS',
        excerpt: 'Most advertisers make these critical errors. Learn how to fix them and scale profitably.',
        category: 'Meta Ads',
        readTime: '5 min read',
        image: '/blog/meta-ads.jpg',
        date: 'Coming Soon',
    },
    {
        title: 'SEO in 2025: What Actually Works',
        excerpt: 'Forget outdated tactics. Here\'s the modern playbook for organic growth.',
        category: 'SEO',
        readTime: '7 min read',
        image: '/blog/seo-guide.jpg',
        date: 'Coming Soon',
    },
    {
        title: 'The Landing Page Framework That Converts',
        excerpt: 'A proven template for turning cold traffic into paying customers.',
        category: 'CRO',
        readTime: '6 min read',
        image: '/blog/landing-pages.jpg',
        date: 'Coming Soon',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Blog() {
    return (
        <section id="blog" className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--gold)] text-sm font-medium tracking-wider uppercase">
                        Insights
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        Growth <span className="text-gradient-gold">Blog</span>
                    </h2>
                    <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        Actionable insights and strategies to help you scale your business.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post) => (
                        <motion.article
                            key={post.title}
                            variants={cardVariants}
                            className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            {/* Image placeholder */}
                            <div className="relative h-48 bg-[var(--bg-elevated)] overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                                                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                            </svg>
                                        </div>
                                        <span className="text-xs text-[var(--gold)] uppercase tracking-wider">
                                            {post.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Category badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/30">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--gold)] transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                                    <span>{post.readTime}</span>
                                    <span className="text-[var(--gold)] group-hover:translate-x-1 transition-transform duration-300">
                                        Read More →
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <div className="glass-card p-8 md:p-12 rounded-3xl max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Get Growth Tips in Your Inbox
                        </h3>
                        <p className="text-[var(--text-muted)] mb-6">
                            Join 500+ marketers getting weekly insights on scaling with paid + organic.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                                    flex-1 px-5 py-3 rounded-xl
                                    bg-[var(--bg-card)] border border-[var(--border-glass)]
                                    text-white placeholder-[var(--text-muted)]
                                    focus:outline-none focus:border-[var(--gold)]/50
                                    transition-colors duration-300
                                "
                            />
                            <button className="
                                px-6 py-3 rounded-xl font-semibold
                                bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)]
                                text-[var(--bg-dark)]
                                hover:shadow-lg hover:shadow-[var(--gold)]/25
                                transition-shadow duration-300
                            ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
