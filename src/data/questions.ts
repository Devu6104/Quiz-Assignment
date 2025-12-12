export type Question = {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string; // I have to guess the correct answers, but they are obvious.
};

export const quizQuestions: Question[] = [
    {
        id: 1,
        text: "1. What sound does a cat make?",
        options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
        correctAnswer: "Meow-Meow"
    },
    {
        id: 2,
        text: "2. What would you probably find in your fridge?",
        options: ["Shoes", "Ice Cream", "Books"],
        correctAnswer: "Ice Cream"
    },
    {
        id: 3,
        text: "3. What color are bananas?",
        options: ["Blue", "Yellow", "Red"],
        correctAnswer: "Yellow"
    },
    {
        id: 4,
        text: "4. How many stars are in the sky?",
        options: ["Two", "Infinite", "One Hundred"],
        correctAnswer: "Infinite"
    }
];
