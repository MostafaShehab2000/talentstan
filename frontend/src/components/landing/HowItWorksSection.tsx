"use client";

import { motion } from "framer-motion";
import { UserPlus, Shield, Sparkles, Stethoscope, CreditCard } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Registration",
    description: "Create your digital identity in 60 seconds.",
  },
  {
    icon: Shield,
    title: "Verification",
    description: "Automated credential & background checks.",
  },
  {
    icon: Sparkles,
    title: "Matching",
    description: "Algorithmic alignment with facility needs.",
  },
  {
    icon: Stethoscope,
    title: "Work",
    description: "Execute the shift with full digital support.",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Instant, frictionless financial settlement.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            Flawless Execution.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            A completely deterministic workflow from onboarding to payout.
          </motion.p>
        </div>

        <div className="relative">
          {/* Continuous Line */}
          <div className="absolute top-12 left-[10%] right-[10%] hidden h-0.5 bg-border md:block">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid gap-12 md:grid-cols-5 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-primary/30">
                  <step.icon className="h-8 w-8 text-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
