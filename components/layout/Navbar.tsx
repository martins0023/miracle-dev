// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MonogramLogo from "../logo/MonogramLogo";

const navItems = [
  {
    name: "Experience",
    href: "/about",
    activeColor: "text-emerald-400",
    activeBg: "bg-emerald-400/10",
    border: "border-emerald-400/50",
  },
  {
    name: "Rundowns",
    href: "/rundowns",
    activeColor: "text-purple-400",
    activeBg: "bg-purple-400/10",
    border: "border-purple-400/50",
  },
  {
    name: "Articles",
    href: "/blog",
    activeColor: "text-amber-400",
    activeBg: "bg-amber-400/10",
    border: "border-amber-400/50",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="fixed top-0 left-0 font-sans right-0 z-50 h-16 bg-background/80 backdrop-blur-xl border-b border-muted/40 supports-backdrop-filter:bg-background/60">
      <div className="flex items-center justify-between px-6 h-full max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group z-50 relative">
          <MonogramLogo className="h-8 w-auto group-hover:text-cyan-400 transition-colors duration-300" />
          <span className="font-mono font-bold text-sm tracking-tighter">
            miracle<span className="text-muted-foreground/50">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isItemActive = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 relative",
                  isItemActive
                    ? cn(item.activeColor, item.activeBg)
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="w-px h-6 bg-muted/40 mx-2" />
          <Link
            href="/connect"
            className="ml-4 px-4 py-1.5 text-sm font-mono border border-cyber/30 text-cyber rounded-md hover:bg-cyber-dim transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.1)] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          >
            _connect
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden z-50 p-2 -mr-2 text-muted-foreground hover:text-foreground active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-black bg-background/95 backdrop-blur-2xl border-b border-muted/20 md:hidden flex flex-col p-6 h-[calc(100vh-64px)]"
          >
            {/* Ambient Background Gradient for Mobile */}
            <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

            <nav className="flex flex-col gap-4 mt-2 relative z-10">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                Navigation
              </span>

              {navItems.map((item, idx) => {
                const isItemActive = isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-xl font-heading font-bold tracking-tight block py-4 px-4 rounded-xl border transition-all",
                        isItemActive
                          ? cn("bg-muted/5", item.activeColor, item.border)
                          : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Link
                  href="/connect"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-4 py-3 text-sm font-mono font-bold border border-cyber/50 text-cyber rounded-md bg-cyber-dim/20 active:scale-95 transition-all"
                >
                  _initiate_connection
                </Link>
              </motion.div>
            </nav>

            {/* Decor: Mobile Menu Footer */}
            <div className="mt-auto pt-6 border-t border-muted/10 relative z-10">
              <div className="flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="font-mono text-xs text-muted-foreground">
                  System Status:{" "}
                  <span className="text-emerald-500">ONLINE</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
