'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CountUpProps {
    end: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    className?: string;
}

export default function CountUp({
    end,
    prefix = '',
    suffix = '',
    duration = 2,
    className = ''
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;

            const startTime = Date.now();

            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / (duration * 1000), 1);

                // Ease out cubic
                const easeOut = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(end * easeOut));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            {prefix}{count.toLocaleString()}{suffix}
        </motion.span>
    );
}
