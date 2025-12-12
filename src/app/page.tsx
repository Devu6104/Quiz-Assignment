import QuizContainer from "@/components/QuizContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 relative overflow-hidden bg-quiz-gradient">
      {/* Background Gradient is set in globals.css body, but we can enforce it here too or handle layout */}
      <QuizContainer />
    </main>
  );
}
