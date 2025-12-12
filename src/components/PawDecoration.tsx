import React from 'react';

export const PawDecoration = () => {
    return (
        <div className="absolute bottom-0 -left-6 md:left-12 w-24 md:w-32 hidden md:block z-10 pointer-events-none select-none">
            {/* 
                This is a simplified custom SVG representation of the Paw.
            */}
            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                <g>
                    <path d="M10 120 V80 C10 50 30 30 50 30 C70 30 90 50 90 80 V120 H10Z" fill="white" stroke="#E5E5E5" strokeWidth="2" />
                    <ellipse cx="50" cy="75" rx="18" ry="14" fill="#FFC0CB" /> {/* Main pad */}
                    <circle cx="25" cy="50" r="9" fill="#FFC0CB" />
                    <circle cx="50" cy="40" r="9" fill="#FFC0CB" />
                    <circle cx="75" cy="50" r="9" fill="#FFC0CB" />
                </g>
            </svg>
            <div className="absolute -top-10 -left-16 bg-white px-4 py-2 rounded-2xl rounded-br-none shadow-lg border border-gray-100 transform -rotate-12">
                <span className="font-[family-name:var(--font-handwriting)] text-quiz-text-secondary whitespace-nowrap font-bold text-xl">Best of Luck!</span>
            </div>
        </div>
    )
}
