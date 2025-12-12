import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Assignment",
  description: "Pixel perfect quiz UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gradient-to-br from-quiz-bg-start to-quiz-bg-end text-quiz-text-secondary">
        {children}
      </body>
    </html>
  );
}
