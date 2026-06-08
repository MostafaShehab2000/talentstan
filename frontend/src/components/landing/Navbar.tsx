"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function Navbar({ dict, lang }: { dict: any, lang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    // Replace the current language in the pathname with the new one
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath || `/${newLang}`);
  };

  const navLinks = [
    { label: dict.solutions, hasDropdown: true },
    { label: dict.forProfessionals, hasDropdown: true },
    { label: dict.forFacilities, hasDropdown: true },
    { label: dict.pricing, hasDropdown: false },
    { label: dict.resources, hasDropdown: true },
    { label: dict.aboutUs, hasDropdown: false },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-[#021A18] text-white text-sm py-2.5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto">
          <span className="inline-block h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
          <span className="text-white/90 font-medium">{dict.announcement}</span>
        </div>
        <Link href={`/${lang}/careers`} className={`hidden md:flex items-center gap-1 text-white/80 hover:text-white transition-colors whitespace-nowrap text-xs font-medium ${lang === 'en' ? 'ml-8' : 'mr-8'} group`}>
          {dict.hiring} <ArrowRight className={`h-3 w-3 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
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
          <Link href={`/${lang}`} className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-[150px] h-[40px]">
              <Image 
                src="/logo.png" 
                alt="TalentStan Logo" 
                fill 
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
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
            <button
              onClick={switchLanguage}
              className="flex items-center gap-2 text-sm font-medium text-[#374151] hover:text-[#0F766E] transition-colors"
            >
              <Globe className="h-4 w-4" />
              {lang === 'en' ? 'عربي' : 'English'}
            </button>
            <Link
              href={`/${lang}/login`}
              className="hidden sm:block text-sm font-medium text-[#374151] hover:text-[#0F766E] transition-colors"
            >
              {dict.login}
            </Link>
            <Link
              href={`/${lang}/register`}
              className="group flex items-center gap-2 rounded-full bg-[#021A18] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0F766E] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              {dict.getStarted} <ArrowRight className={`h-4 w-4 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
