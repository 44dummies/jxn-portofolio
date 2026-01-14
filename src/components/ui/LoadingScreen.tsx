'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useSyncExternalStore } from 'react';

// Simple store for loading state
const createLoadingStore = () => {
    let isLoading = true;
    const listeners = new Set<() => void>();

    // Check sessionStorage on init
    if (typeof window !== 'undefined' && sessionStorage.getItem('jxn-loaded')) {
        isLoading = false;
    } else {
        // Start timer to hide loader
        setTimeout(() => {
            isLoading = false;
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('jxn-loaded', 'true');
            }
            listeners.forEach(listener => listener());
        }, 2000);
    }

    return {
        subscribe: (listener: () => void) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
        getSnapshot: () => isLoading,
        getServerSnapshot: () => true,
    };
};

const loadingStore = createLoadingStore();

export default function LoadingScreen() {
    const showLoader = useSyncExternalStore(
        loadingStore.subscribe,
        loadingStore.getSnapshot,
        loadingStore.getServerSnapshot
    );

    const [exitComplete, setExitComplete] = useState(false);

    const handleExitComplete = useCallback(() => {
        setExitComplete(true);
    }, []);

    if (exitComplete) return null;

    return (
        <AnimatePresence onExitComplete={handleExitComplete}>
            {showLoader && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="flex flex-col items-center gap-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* JN Logo */}
                        <motion.div
                            className="text-6xl md:text-8xl font-bold tracking-tighter"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(201, 169, 98, 0.3)',
                                    '0 0 40px rgba(201, 169, 98, 0.5)',
                                    '0 0 20px rgba(201, 169, 98, 0.3)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="text-gradient-gold">J</span>
                            <span className="text-white">N</span>
                        </motion.div>

                        {/* Loading bar */}
                        <div className="w-48 h-1 bg-[var(--bg-card)] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.8, ease: 'easeInOut' }}
                            />
                        </div>

                        <motion.p
                            className="text-[var(--text-muted)] text-sm uppercase tracking-widest"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Loading Experience
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
