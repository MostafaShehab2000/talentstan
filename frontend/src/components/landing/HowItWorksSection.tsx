"use client";

import { motion } from "framer-motion";
import { UserPlus, Shield, Sparkles, Stethoscope, CheckCircle2, CreditCard, FileCheck } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "01", title: "Registration", description: "Create your digital identity in 60 seconds with basic credentials." },
  { icon: FileCheck, step: "02", title: "Verification", description: "Automated credential & background verification from primary sources." },
  { icon: Sparkles, step: "03", title: "Matching", description: "AI algorithms align you with the highest-value opportunities." },
  { icon: CheckCircle2, step: "04", title: "Acceptance", description: "Review and confirm shifts on your terms, on your schedule." },
  { icon: Stethoscope, step: "05", title: "Work", description: "Execute the shift with full digital support and real-time backup." },
  { icon: Shield, step: "06", title: "Completion", description: "Digital sign-off and automated quality assurance confirmation." },
  { icon: CreditCard, step: "07", title: "Payment", description: "Instant, frictionless financial settlement within 24-48 hours." },
];

export function HowItWorksSection() {
  return (
    <section className="bg-white border-b border-[#F3F4F6] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#0A2218]"
          >
            Flawless Execution, Every Time.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-[#6B7280] max-w-lg mx-auto"
          >
            A completely deterministic workflow from onboarding to payout.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-10 right-10 hidden h-px bg-[#F3F4F6] lg:block">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0F766E] to-[#14B8A6]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-7 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group flex flex-col items-center text-center gap-3"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 group-hover:border-[#0F766E]/50 group-hover:shadow-md group-hover:-translate-y-1">
                  <step.icon className="h-8 w-8 text-[#374151] transition-colors group-hover:text-[#0F766E]" />
                  <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#0F766E] text-[9px] font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-[#111827]">{step.title}</h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
