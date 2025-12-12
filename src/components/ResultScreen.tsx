import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface ResultScreenProps {
    score: number;
    total: number;
    onRetry: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onRetry }) => {
    const targetPercentage = Math.round((score / total) * 100);

    // Spring animation for smooth counting
    const springValue = useSpring(0, {
        duration: 2000,
        bounce: 0,
        stiffness: 50
    });

    // Transform spring value to integer string
    const displayValue = useTransform(springValue, (value) => Math.round(value));
    const [displayPercentage, setDisplayPercentage] = useState(0);

    useEffect(() => {
        springValue.set(targetPercentage);

        // Sync motion value with state for rendering
        const unsubscribe = displayValue.on("change", (latest) => {
            setDisplayPercentage(latest);
        });
        return () => unsubscribe();
    }, [targetPercentage, springValue, displayValue]);

    return (
        <div className="flex flex-col items-center justify-center py-12">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mb-8 inline-block shadow-sm">
                    <span className="text-sm font-semibold tracking-wide text-gray-700 uppercase">Keep Learning!</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif text-quiz-text-primary mb-2">
                    Your Final score is
                </h2>

                <div className="text-8xl md:text-9xl font-serif text-quiz-text-primary mb-12 flex items-center justify-center">
                    <motion.span>
                        {displayPercentage}
                    </motion.span>
                    <span>%</span>
                </div>

                <button
                    onClick={onRetry}
                    className="px-8 py-3 bg-quiz-option-bg hover:bg-quiz-option-hover text-quiz-text-primary font-semibold rounded-lg transition-colors duration-200"
                >
                    Start Again
                </button>
            </motion.div>
        </div>
    );
};
