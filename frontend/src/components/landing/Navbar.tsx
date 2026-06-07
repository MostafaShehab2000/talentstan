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
      <div className="w-full bg-[#021A18] text-white text-sm py-2.5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto">
          <span className="inline-block h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
          <span className="text-white/90 font-medium">TalentStan is now live across 6 countries in the MENA region.</span>
        </div>
        <Link href="/careers" className="hidden md:flex items-center gap-1 text-white/80 hover:text-white transition-colors whitespace-nowrap text-xs font-medium ml-8 group">
          We're hiring! View open roles <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-[#e5e9ee]/60 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            {/* Using an inline SVG that approximates the logo attached */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-105">
              <circle cx="50" cy="50" r="45" stroke="#0F766E" strokeWidth="3" fill="transparent" strokeDasharray="60 200" strokeLinecap="round" transform="rotate(-90 50 50)"/>
              <path d="M50 35C53.3137 35 56 32.3137 56 29C56 25.6863 53.3137 23 50 23C46.6863 23 44 25.6863 44 29C44 32.3137 46.6863 35 50 35Z" fill="#0F766E"/>
              <path d="M50 40C43 40 38 32 30 35C30 35 38 55 45 60V85H55V60C62 55 70 35 70 35C62 32 57 40 50 40Z" fill="#0F766E"/>
              <path d="M25 45C30 50 35 60 35 75V80H25V45Z" fill="#14B8A6"/>
              <path d="M75 45C70 50 65 60 65 75V80H75V45Z" fill="#14B8A6"/>
              <path d="M50 5L53 15L63 18L53 21L50 31L47 21L37 18L47 15L50 5Z" fill="#14B8A6"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#021A18] leading-none">TalentStan</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[#374151] hover:bg-black/5 hover:text-[#0F766E] transition-all"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden sm:block text-sm font-medium text-[#374151] hover:text-[#0F766E] transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="group flex items-center gap-2 rounded-full bg-[#021A18] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0F766E] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
