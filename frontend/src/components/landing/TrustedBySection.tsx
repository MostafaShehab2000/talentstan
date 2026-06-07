"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const sponsors = [
  { name: "King Fahad Medical City", location: "Riyadh", tier: "Strategic Partner", color: "bg-[#0F766E]", text: "text-white" },
  { name: "Cleveland Clinic", location: "Abu Dhabi", tier: "National Partner", color: "bg-[#021A18]", text: "text-white" },
  { name: "Aster DM Healthcare", location: "Dubai", tier: "Platinum", color: "bg-[#14B8A6]/10", text: "text-[#021A18]" },
  { name: "Saudi German Health", location: "Jeddah", tier: "Platinum", color: "bg-[#14B8A6]/10", text: "text-[#021A18]" },
  { name: "Mediclinic Middle East", location: "Dubai", tier: "Gold", color: "bg-gray-100", text: "text-gray-800" },
  { name: "fakeeh.care", location: "Riyadh", tier: "Gold", color: "bg-gray-100", text: "text-gray-800" },
  { name: "Vanguard Health", location: "Doha", tier: "Silver", color: "bg-gray-50", text: "text-gray-600" },
  { name: "NMC Healthcare", location: "Abu Dhabi", tier: "Silver", color: "bg-gray-50", text: "text-gray-600" },
];

export function TrustedBySection() {
  // Duplicate for infinite scroll
  const marqueeItems = [...sponsors, ...sponsors];

  return (
    <section className="bg-white border-b border-[#F3F4F6] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1.5"
          >
            <Building2 className="h-4 w-4 text-[#6B7280]" />
            <span className="text-xs font-semibold tracking-widest text-[#6B7280] uppercase">National Healthcare Network</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-[#021A18] tracking-tight"
          >
            Leading healthcare institutions trust TalentStan.
          </motion.h2>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          style={{ width: "max-content" }}
        >
          {marqueeItems.map((sponsor, i) => (
            <div
              key={i}
              className={`inline-flex flex-col justify-center rounded-2xl mx-4 px-8 py-6 w-80 h-32 shrink-0 border border-[#E5E7EB]/50 transition-all hover:scale-105 hover:shadow-xl cursor-pointer ${sponsor.color} ${sponsor.text}`}
            >
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">{sponsor.tier}</div>
              <div className="text-lg font-bold truncate">{sponsor.name}</div>
              <div className="text-sm opacity-80 mt-1">{sponsor.location}</div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Fades for edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
