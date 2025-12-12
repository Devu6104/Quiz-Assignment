"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '@/data/questions';
import { ProgressBar } from '@/components/ProgressBar';
import { Question } from '@/components/Question';
import { Option } from '@/components/Option';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ResultScreen } from '@/components/ResultScreen';
import { PawDecoration } from '@/components/PawDecoration';

export default function QuizContainer() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(string | null)[]>(new Array(quizQuestions.length).fill(null));
    const [isCompleted, setIsCompleted] = useState(false);

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
    const canGoNext = answers[currentQuestionIndex] !== null;

    const handleSelectOption = (option: string) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = option;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (isLastQuestion) {
            setIsCompleted(true);
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleRetry = () => {
        setAnswers(new Array(quizQuestions.length).fill(null));
        setCurrentQuestionIndex(0);
        setIsCompleted(false);
    };

    const calculateScore = () => {
        return answers.reduce((score, answer, index) => {
            if (answer === quizQuestions[index].correctAnswer) {
                return (score as number) + 1;
            }
            return score as number;
        }, 0) as number;
    };

    return (
        <div className="relative z-10 w-full max-w-5xl px-4 md:px-0">
            {/* Outer "Edge" Container with Glass Effect */}
            <div className="bg-white/30 backdrop-blur-md border border-white/40 p-3 md:p-5 rounded-[3rem] shadow-2xl">
                {/* Inner Solid White Card */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-16 min-h-[600px] relative overflow-hidden flex flex-col justify-center shadow-inner">

                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl md:text-6xl text-quiz-text-primary mb-4 italic font-serif">
                            Test Your Knowledge
                        </h1>
                        {!isCompleted && (
                            <div className="inline-block px-4 py-1 rounded bg-gray-50 text-gray-600 text-sm font-medium">
                                Answer all questions to see your results
                            </div>
                        )}
                    </div>

                    <AnimatePresence mode="wait">
                        {!isCompleted ? (
                            <motion.div
                                key="quiz"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full max-w-2xl mx-auto"
                            >
                                <ProgressBar total={quizQuestions.length} current={currentQuestionIndex} />

                                <Question text={currentQuestion.text} />

                                <div className="space-y-4 mb-12">
                                    {currentQuestion.options.map((option) => (
                                        <Option
                                            key={option}
                                            text={option}
                                            selected={answers[currentQuestionIndex] === option}
                                            onSelect={() => handleSelectOption(option)}
                                        />
                                    ))}
                                </div>

                                {/* Navigation */}
                                <div className="flex justify-end gap-3 mt-auto">
                                    {currentQuestionIndex > 0 && (
                                        <button
                                            onClick={handlePrevious}
                                            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-quiz-text-primary transition-colors"
                                            aria-label="Previous Question"
                                        >
                                            <ArrowLeft size={20} />
                                        </button>
                                    )}
                                    <button
                                        onClick={handleNext}
                                        disabled={!canGoNext}
                                        className={`p-3 rounded-lg text-quiz-text-primary transition-colors flex items-center gap-2 ${canGoNext ? 'bg-quiz-option-hover hover:bg-blue-300' : 'bg-gray-100 opacity-50 cursor-not-allowed'
                                            }`}
                                        aria-label="Next Question"
                                    >
                                        {isLastQuestion ? <span className="text-sm font-bold px-2">Submit</span> : <ArrowRight size={20} />}
                                    </button>
                                </div>

                            </motion.div>
                        ) : (
                            <ResultScreen
                                score={calculateScore()}
                                total={quizQuestions.length}
                                onRetry={handleRetry}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Decorative Paw - Only on first slide (index 0) and not completed */}
            {currentQuestionIndex === 0 && !isCompleted && <PawDecoration />}
        </div>
    );
}
