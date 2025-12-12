import React from 'react';

interface QuestionProps {
    text: string;
}

export const Question: React.FC<QuestionProps> = ({ text }) => {
    return (
        <h2 className="text-xl md:text-2xl font-bold text-center text-quiz-text-secondary mb-8 font-sans">
            {text}
        </h2>
    );
};
