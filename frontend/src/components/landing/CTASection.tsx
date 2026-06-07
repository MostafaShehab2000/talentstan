"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Headset } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-[#021A18] py-32 relative overflow-hidden">
      {/* Premium Dark Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#14B8A6]/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
        >
          Ready to Enter <br /> the Ecosystem?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium"
        >
          Deploy the enterprise operating system for healthcare talent. 
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/register"
            className="group flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-[#021A18] transition-all hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 active:translate-y-0"
          >
            Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
          >
            <Headset className="h-5 w-5 text-[#14B8A6]" /> Talk to Enterprise Sales
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
