"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Network } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] rounded-full bg-primary/5 opacity-50 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex max-w-2xl flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent" />
              The Future of Healthcare Workforce
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.1]"
            >
              Enterprise <br />
              <span className="text-primary">Healthcare</span> <br />
              Workforce Marketplace.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              The definitive ecosystem connecting elite medical professionals with world-class facilities. Liquidity, precision, and trust at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button size="lg" className="rounded-full px-8 text-base h-14 group transition-all hover:scale-105 active:scale-95" asChild>
                <Link href="/register">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 transition-all hover:bg-secondary/5 hover:text-secondary hover:border-secondary/20" asChild>
                <Link href="/professionals">
                  Find Professionals
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Premium Abstract Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-square w-full rounded-[2.5rem] border border-border/50 bg-gradient-to-br from-card to-background p-8 shadow-2xl shadow-primary/5">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
              
              {/* Abstract Glass Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-8 top-8 h-32 w-32 rounded-2xl border border-white/20 bg-white/50 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/50 flex items-center justify-center"
              >
                <Activity className="h-12 w-12 text-primary" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 right-8 h-40 w-40 rounded-3xl border border-white/20 bg-white/40 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/40 flex items-center justify-center"
              >
                <Network className="h-16 w-16 text-secondary" />
              </motion.div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card p-6 shadow-2xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-8 w-8 rounded-full bg-primary" />
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="h-2 w-24 rounded-full bg-muted" />
                    <div className="h-2 w-16 mx-auto rounded-full bg-muted/50" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
