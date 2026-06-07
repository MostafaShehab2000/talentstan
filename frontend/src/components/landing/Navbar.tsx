"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-b border-border/40 bg-background/60 px-6 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40 md:px-12"
    >
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold tracking-tighter">
            T
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">
            TalentStan
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {["Solutions", "Professionals", "Healthcare Facilities", "Pricing", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link 
          href="/login" 
          className="hidden sm:inline-flex text-sm font-medium h-8 items-center justify-center px-2.5 rounded-lg hover:bg-muted hover:text-foreground transition-all"
        >
          Login
        </Link>
        <Link 
          href="/register" 
          className="inline-flex h-8 items-center justify-center rounded-full bg-primary text-primary-foreground px-6 text-sm font-medium transition-all hover:bg-primary/80 hover:scale-105 active:scale-95"
        >
          Get Started
        </Link>
      </div>
    </motion.nav>
  );
}
