'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the follower ring
    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    // Detect touch devices
    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();
    }, []);

    useEffect(() => {
        // Don't add listeners on touch devices
        if (isTouchDevice) return;

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        // Track all interactive elements
        const updateHoverListeners = () => {
            const hoverables = document.querySelectorAll('a, button, input, textarea, [data-hoverable="true"]');
            hoverables.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
            return () => {
                hoverables.forEach((el) => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
            };
        };

        window.addEventListener('mousemove', moveCursor);
        // Initial binding
        let cleanupListeners = updateHoverListeners();

        // Re-bind on mutation (route changes etc)
        const observer = new MutationObserver(() => {
            cleanupListeners();
            cleanupListeners = updateHoverListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        // Hide system cursor
        document.documentElement.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.documentElement.style.cursor = 'auto';
            cleanupListeners();
            observer.disconnect();
        };
    }, [mouseX, mouseY, isVisible, isTouchDevice]);

    // Don't render on touch devices
    if (isTouchDevice || !isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Main Dot */}
            <motion.div
                className="absolute w-2 h-2 bg-[var(--gold)] rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
            />

            {/* Follower Ring */}
            <motion.div
                className="absolute w-8 h-8 border border-[var(--gold)] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    left: -14, // Offset to center (w-8 is 32px, half is 16. minus dot half 4? No. just center purely)
                    top: -14,
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    opacity: isHovered ? 0.8 : 0.5,
                    borderWidth: isHovered ? '2px' : '1px',
                }}
                transition={{ duration: 0.15 }}
            />
        </div>
    );
}
