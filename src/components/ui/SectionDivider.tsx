'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
    className?: string;
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
    return (
        <div className={`max-w-7xl mx-auto px-6 ${className}`}>
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent via-[var(--border-glass-hover)] to-transparent"
            />
        </div>
    );
}
