"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-[#0F766E] py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-5"
        >
          Ready to Enter the Ecosystem?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/70 mb-10 max-w-xl mx-auto"
        >
          Join 25,000+ professionals and 1,200+ facilities who are transforming how healthcare talent is deployed across the MENA region.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/register" className="flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#0F766E] hover:bg-white/90 transition-all hover:shadow-lg active:scale-95">
            Get Started Free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all">
            Talk to Sales
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
