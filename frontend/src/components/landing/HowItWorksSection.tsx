"use client";

import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, HeartHandshake, CheckCircle2, Stethoscope, Briefcase, CreditCard } from "lucide-react";

const steps = [
  { num: "01", title: "Registration", icon: UserPlus, desc: "Create profile in 60 seconds." },
  { num: "02", title: "Verification", icon: ShieldCheck, desc: "Automated credential validation." },
  { num: "03", title: "Matching", icon: HeartHandshake, desc: "AI routes shifts based on parameters." },
  { num: "04", title: "Acceptance", icon: CheckCircle2, desc: "Instant shift confirmation." },
  { num: "05", title: "Work", icon: Stethoscope, desc: "Deliver high-quality care." },
  { num: "06", title: "Completion", icon: Briefcase, desc: "Facility verifies attendance." },
  { num: "07", title: "Payment", icon: CreditCard, desc: "Automated direct deposit." },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#F8FAFC] py-32 border-y border-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold tracking-tight text-[#021A18]"
          >
            Operational Workflow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-[#6B7280] leading-relaxed"
          >
            The fastest path from staffing shortage to clinical coverage.
          </motion.p>
        </div>

        <div className="relative">
          {/* Horizontal Line connecting steps (hidden on mobile) */}
          <div className="absolute top-[4.5rem] left-[5%] right-[5%] hidden h-0.5 bg-[#E5E7EB] lg:block" />
          
          {/* Animated Line Progress */}
          <div className="absolute top-[4.5rem] left-[5%] right-[5%] hidden h-0.5 lg:block overflow-hidden">
            <motion.div
              className="h-full w-full bg-[#0F766E]"
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-7 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 text-xs font-bold tracking-widest text-[#0F766E] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Phase {step.num}
                </div>
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-[#F8FAFC] bg-white shadow-xl transition-transform group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#0F766E]/20">
                  <step.icon className="h-8 w-8 text-[#021A18] transition-colors group-hover:text-[#0F766E]" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-[#021A18] uppercase tracking-wide">{step.title}</h3>
                <p className="text-xs font-medium text-[#6B7280] leading-relaxed max-w-[140px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
