import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mrig Naini Mudgal — AI Engineer & Full Stack Developer",
  description: "Portfolio of Mrig Naini Mudgal, B.Tech Computer Science student specializing in AI Agent Development, LLM Integration, RAG Pipelines, and Full Stack Engineering.",
  keywords: ["AI Engineer", "Full Stack Developer", "LLM Integration", "RAG Pipeline", "Next.js Portfolio", "Django Developer"],
  authors: [{ name: "Mrig Naini Mudgal", url: "mailto:mrignaini.work6@gmail.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-luxury-bg-light dark:bg-luxury-bg-dark text-neutral-warm-800 dark:text-neutral-warm-100 transition-colors duration-700">
        {children}
      </body>
    </html>
  );
}
