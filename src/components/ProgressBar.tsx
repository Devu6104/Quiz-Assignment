import React from 'react';
import { clsx } from 'clsx';

interface ProgressBarProps {
    total: number;
    current: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ total, current }) => {
    return (
        <div className="flex gap-2 w-full max-w-md mx-auto mb-8">
            {Array.from({ length: total }).map((_, index) => (
                <div
                    key={index}
                    className={clsx(
                        "h-1.5 flex-1 rounded-full transition-colors duration-300",
                        index <= current
                            ? "bg-quiz-progress-filled"
                            : "bg-quiz-progress-track"
                    )}
                />
            ))}
        </div>
    );
};
