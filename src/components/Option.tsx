import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface OptionProps {
    text: string;
    selected: boolean;
    onSelect: () => void;
}

export const Option: React.FC<OptionProps> = ({ text, selected, onSelect }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.01, backgroundColor: "var(--color-quiz-option-hover)" }}
            whileTap={{ scale: 0.99 }}
            onClick={onSelect}
            className={clsx(
                "w-full p-4 mb-3 rounded-xl border transition-all duration-200 text-center font-medium shadow-sm",
                selected
                    ? "bg-quiz-option-hover border-quiz-text-primary ring-1 ring-quiz-text-primary"
                    : "bg-quiz-option-bg border-transparent hover:border-quiz-option-border"
            )}
        >
            <span className="text-quiz-text-secondary block font-sans">
                {text}
            </span>
        </motion.button>
    );
};
