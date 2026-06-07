"use client";

import { motion } from "framer-motion";
import { Building2, Cpu, Users } from "lucide-react";

export function MarketplaceSection() {
  return (
    <section className="bg-white py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold tracking-tight text-[#021A18]"
          >
            The Intelligent Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-[#6B7280] leading-relaxed"
          >
            A frictionless conduit between critical healthcare demand and verified clinical supply.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Animated Connectors */}
          <div className="absolute top-1/2 left-[10%] right-[10%] hidden h-0.5 -translate-y-1/2 bg-[#E5E7EB] md:block z-0">
            <motion.div
              className="absolute left-0 top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-[#0F766E] to-transparent"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid gap-16 md:grid-cols-3 relative z-10 items-center">
            {/* Facilities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-6 rounded-[2rem] border border-[#E5E7EB] bg-white/80 backdrop-blur-md p-10 text-center transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8FAFC]">
                <Building2 className="h-10 w-10 text-[#021A18]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#021A18] mb-3">Healthcare Facilities</h3>
                <p className="text-sm font-medium text-[#6B7280] leading-relaxed">
                  Post shift requests. Define parameters. Set urgency.
                </p>
              </div>
            </motion.div>

            {/* AI Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-6 rounded-[2.5rem] bg-[#021A18] p-12 text-center shadow-2xl shadow-[#0F766E]/20 relative"
            >
              <div className="absolute -inset-4 rounded-[3rem] border border-[#0F766E]/30 animate-pulse" />
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0F766E] to-[#14B8A6] shadow-xl">
                <Cpu className="h-12 w-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">TalentStan Core</h3>
                <p className="text-sm font-medium text-white/70 leading-relaxed">
                  Real-time dynamic pricing & predictive matching algorithms.
                </p>
              </div>
            </motion.div>

            {/* Professionals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-6 rounded-[2rem] border border-[#E5E7EB] bg-white/80 backdrop-blur-md p-10 text-center transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8FAFC]">
                <Users className="h-10 w-10 text-[#021A18]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#021A18] mb-3">Verified Professionals</h3>
                <p className="text-sm font-medium text-[#6B7280] leading-relaxed">
                  Accept shifts. Execute work. Get paid instantly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
