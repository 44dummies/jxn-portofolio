'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ text, className = '', delay = 0 }: TextRevealProps) {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`inline-flex flex-wrap ${className}`}
            style={{ perspective: 1000 }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="mr-[0.25em] inline-block"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}
