import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { TransitionProvider } from "@/context/TransitionContext";
import ScrollToTop from "@/components/ScrollToTop";
// Cursor personalizado removido

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Pedro Zampoli - Desenvolvedor Full Stack",
  description: "Portfolio de João Pedro Zampoli, desenvolvedor full stack especializado em React, Node.js e TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
          <Header />
          <TransitionProvider>
            {children}
          </TransitionProvider>
          <Footer />
          <ScrollToTop />
          {/* Cursor personalizado removido */}
        </div>
      </body>
    </html>
  );
}
