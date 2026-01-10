// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MonogramLogo from "../logo/MonogramLogo";

const navItems = [
  { name: "Experience", href: "/about" },
  { name: "Rundowns", href: "/rundowns" },
  { name: "Articles", href: "/blog" },
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

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted/40 supports-backdrop-filter:bg-background/60">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group z-50 relative">
          <MonogramLogo className="h-8 w-auto group-hover:text-cyber transition-colors duration-300" />
          <span className="font-mono font-bold text-sm tracking-tighter">miracle.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-cyber relative py-1",
                isActive(item.href) 
                  ? "text-foreground font-semibold" 
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {/* Active Indicator Dot */}
              {isActive(item.href) && (
                <motion.span 
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber shadow-[0_0_8px_rgba(0,229,255,0.5)]"
                />
              )}
            </Link>
          ))}
          <Link
            href="/connect"
            className="ml-4 px-4 py-1.5 text-sm font-mono border border-cyber/30 text-cyber rounded-md hover:bg-cyber-dim transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.1)] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          >
            _connect
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden z-50 text-muted-foreground hover:text-foreground"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-15 bg-black z-40 bg-background/95 backdrop-blur-xl border-b border-muted/20 md:hidden flex flex-col p-6 h-[calc(100vh-60px)]"
          >
            <nav className="flex flex-col gap-6 mt-4">
              {navItems.map((item, idx) => (
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
                      "text-2xl font-heading font-bold tracking-tight block py-2 border-l-2 pl-4 transition-all",
                      isActive(item.href)
                        ? "border-cyber text-foreground bg-muted/5"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
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
            <div className="mt-auto border-t border-muted/20 pt-6">
              <p className="font-mono text-xs text-muted-foreground text-center">
                System Status: <span className="text-green-500">ONLINE</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}