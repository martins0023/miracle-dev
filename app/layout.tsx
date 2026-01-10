import type { Metadata } from "next";
// 1. Import fonts directly from Google
import { Bricolage_Grotesque, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 2. Configure the fonts
const bricolage = Bricolage_Grotesque({ 
  subsets: ["latin"],
  variable: "--font-bricolage", // CSS variable name
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miracle Oladapo | Frontend Engineer & Security Analyst",
  description: "Personal platform of Miracle Oladapo, bridging user experience and digital security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(bricolage.variable, jetbrainsMono.variable, inter.variable)}>
      <body className="antialiased relative min-h-screen bg-background text-foreground font-sans selection:bg-cyber-dim selection:text-cyber">
        {/* Subtle grain overlay for texture */}
        <div className="bg-grain" aria-hidden="true" />
        
        <Navbar />
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-between pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}