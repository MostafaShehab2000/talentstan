"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Solutions", hasDropdown: true },
  { label: "For Professionals", hasDropdown: true },
  { label: "For Facilities", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "About Us", hasDropdown: false },
];

export function Navbar() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-[#0F2C2A] text-white text-sm py-2.5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto">
          <span className="inline-block h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
          <span className="text-white/90">TalentStan is now live across 6 countries in the MENA region.</span>
        </div>
        <Link href="/careers" className="flex items-center gap-1 text-white/80 hover:text-white transition-colors whitespace-nowrap text-xs font-medium ml-8">
          We&apos;re hiring! View open roles <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-[#e5e9ee] bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F766E]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 7v5c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V7L12 2z" fill="white" fillOpacity="0.3"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0A2218]">TalentStan</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[#374151] hover:bg-[#f3f4f6] hover:text-[#0F766E] transition-all"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:block text-sm font-medium text-[#374151] hover:text-[#0F766E] transition-colors px-4 py-2"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-1.5 rounded-lg bg-[#0F766E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d6860] transition-all hover:shadow-md active:scale-95"
            >
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
