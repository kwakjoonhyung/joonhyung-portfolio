import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joonhyung Kwak — AI Researcher",
  description:
    "M.S. candidate in Artificial Intelligence at Sungkyunkwan University. Researching LLM inference optimization and causal reasoning systems for mental-health applications.",
  keywords: [
    "AI Researcher",
    "LLM",
    "NLP",
    "Causal Graph",
    "Mental Health AI",
    "Joonhyung Kwak",
    "곽준형",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain font-sans">{children}</body>
    </html>
  );
}
