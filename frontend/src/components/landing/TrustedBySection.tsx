"use client";

import { motion } from "framer-motion";

const hospitals = [
  { name: "King Fahad Medical City", location: "Riyadh, Saudi Arabia", emoji: "🏥" },
  { name: "Cleveland Clinic", location: "Abu Dhabi", emoji: "🏥" },
  { name: "Aster DM Healthcare", location: "Dubai, UAE", emoji: "🏥" },
  { name: "Saudi German Health", location: "Jeddah, Saudi Arabia", emoji: "🏥" },
  { name: "Mediclinic", location: "Middle East", emoji: "🏥" },
  { name: "fakeeh.care", location: "Riyadh, Saudi Arabia", emoji: "🏥" },
];

export function TrustedBySection() {
  return (
    <section className="bg-[#FAFAFA] border-b border-[#F3F4F6] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#0A2218] mb-3">Trusted by Leading Hospitals</h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              Join hundreds of top hospitals and clinics that trust TalentStan to power their workforce.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {hospitals.map((hospital, i) => (
              <motion.div
                key={hospital.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-4 hover:border-[#0F766E]/30 hover:shadow-sm transition-all cursor-default"
              >
                <span className="text-2xl">{hospital.emoji}</span>
                <div className="text-xs font-semibold text-[#111827] leading-tight">{hospital.name}</div>
                <div className="text-[11px] text-[#9CA3AF]">{hospital.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
