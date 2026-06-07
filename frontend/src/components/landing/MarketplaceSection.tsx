"use client";

import { motion } from "framer-motion";
import { Building2, Users, ArrowRightLeft } from "lucide-react";

export function MarketplaceSection() {
  return (
    <section id="solutions" className="py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            The Ecosystem of Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Frictionless liquidity between healthcare demand and premium talent.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8 relative z-10">
            {/* Facilities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-6 rounded-3xl border border-border/50 bg-card p-8 shadow-xl transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/10">
                <Building2 className="h-10 w-10 text-secondary" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Healthcare Facilities</h3>
                <p className="mt-2 text-sm text-muted-foreground">Hospitals and clinics seeking immediate, verified talent coverage.</p>
              </div>
            </motion.div>

            {/* TalentStan Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-6 rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-2xl ring-1 ring-primary/10 transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                <ArrowRightLeft className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary">TalentStan Core</h3>
                <p className="mt-2 text-sm text-muted-foreground">The intelligent routing engine matching supply and demand instantly.</p>
              </div>
            </motion.div>

            {/* Professionals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-6 rounded-3xl border border-border/50 bg-card p-8 shadow-xl transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Elite Professionals</h3>
                <p className="mt-2 text-sm text-muted-foreground">Verified doctors, nurses, and technicians controlling their schedule.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
