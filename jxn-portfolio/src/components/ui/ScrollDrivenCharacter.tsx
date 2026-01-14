'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function ScrollDrivenCharacter() {
    const [isMobile, setIsMobile] = useState(false);

    // Track scroll progress
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress for smoother animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Desktop Animations
    // X-Axis: Moves from Right (80vw) to Left (10vw)
    const xPosition = useTransform(smoothProgress, [0, 1], ['20%', '-40%']);

    // Z-Axis/Scale: Slight zoom to create 3D parallax feel (1 -> 1.15)
    const scale = useTransform(smoothProgress, [0, 1], [1, 1.15]);

    // Handle Resize for Mobile Logic
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div
            className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]"
            aria-hidden="true"
        >
            {/* 
                Container for the image.
                - Desktop: Height 100vh, image centered vertically, moves horizontally.
                - Mobile: Width 100%, image anchored to bottom, no movement.
            */}
            <motion.div
                className="relative w-full h-full"
                style={!isMobile ? { x: xPosition, scale } : {}}
            >
                <div
                    className={`
                        absolute 
                        ${isMobile
                            ? 'bottom-0 left-0 w-full h-[60vh]'
                            : 'top-0 right-0 h-full w-auto min-w-[100vw] flex items-center justify-center'
                        }
                    `}
                >
                    <div className={`relative ${isMobile ? 'w-full h-full' : 'h-full w-auto aspect-[16/9]'}`}>
                        <Image
                            src="/jackson-cinema.png"
                            alt="Cinematic Background"
                            fill
                            priority
                            className={`
                                object-cover
                                ${isMobile ? 'object-top' : 'object-cover'}
                            `}
                            style={{
                                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                            }}
                        />
                    </div>
                </div>
            </motion.div>

            {/* Global Gradient Overlays for Readability */}
            {/* Left side fade for text readability on desktop */}
            <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />

            {/* Bottom fade for seamless transition on mobile/desktop */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
    );
}
