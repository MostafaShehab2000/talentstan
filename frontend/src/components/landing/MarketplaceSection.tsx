"use client";

import { motion } from "framer-motion";
import { Building2, ArrowLeftRight, Users } from "lucide-react";

export function MarketplaceSection() {
  return (
    <section id="solutions" className="bg-[#FAFAFA] border-b border-[#F3F4F6] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#0A2218]"
          >
            The Ecosystem of Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-[#6B7280] max-w-xl mx-auto"
          >
            Frictionless liquidity between healthcare demand and premium talent — orchestrated by intelligent algorithms.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-1/2 left-0 right-0 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent md:block" />
          <div className="grid gap-8 md:grid-cols-3 relative z-10">
            {[
              { icon: Building2, title: "Healthcare Facilities", description: "Hospitals and clinics seeking immediate, verified talent coverage at dynamic market rates.", color: "bg-blue-50", iconColor: "text-blue-600" },
              { icon: ArrowLeftRight, title: "TalentStan Core", description: "The intelligent matching engine routing demand to supply instantly with 95%+ accuracy.", color: "bg-[#F0FDF9]", iconColor: "text-[#0F766E]", primary: true },
              { icon: Users, title: "Elite Professionals", description: "Verified doctors, nurses, and technicians who control their schedule and maximize earnings.", color: "bg-teal-50", iconColor: "text-teal-600" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`flex flex-col items-center gap-5 rounded-2xl border p-8 text-center transition-all hover:shadow-md ${item.primary ? "border-[#0F766E]/30 bg-[#F0FDF9] shadow-sm ring-1 ring-[#0F766E]/10" : "border-[#E5E7EB] bg-white"}`}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}>
                  <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${item.primary ? "text-[#0F766E]" : "text-[#111827]"}`}>{item.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
