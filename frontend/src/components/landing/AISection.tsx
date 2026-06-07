"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Zap, ShieldCheck } from "lucide-react";

export function AISection() {
  return (
    <section className="bg-foreground py-32 text-background overflow-hidden relative">
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/3">
        <div className="h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-sm font-medium backdrop-blur-sm"
            >
              <BrainCircuit className="h-4 w-4 text-accent" />
              Intelligence Layer
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl"
            >
              Algorithmic precision. <br />
              <span className="text-muted-foreground">Human reliability.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-lg text-muted-foreground/80"
            >
              Our proprietary matching engine analyzes 40+ dynamic variables including credentials, proximity, historical reliability, and real-time facility urgency to ensure the perfect clinical fit in milliseconds.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 mt-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Dynamic Pricing</h4>
                  <p className="mt-1 text-sm text-muted-foreground/80">Real-time market rates based on urgency.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Credential Guard</h4>
                  <p className="mt-1 text-sm text-muted-foreground/80">Automated primary source verification.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none lg:ml-auto"
          >
            <div className="aspect-[4/3] w-full rounded-3xl border border-background/10 bg-background/5 p-2 shadow-2xl backdrop-blur-xl">
              <div className="h-full w-full rounded-2xl bg-black/40 p-6 flex flex-col gap-4 relative overflow-hidden">
                {/* Simulated Code/Terminal output */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                
                {[
                  { text: "Analyzing 1,240 nearby professionals...", delay: 0 },
                  { text: "Filtering by: ICU Exp > 5yrs, BLS Certified", delay: 1 },
                  { text: "Calculating optimal market rate: $145/hr", delay: 2 },
                  { text: "Match Found: RN. Sarah Jenkins (99.8% Fit)", delay: 3, highlight: true }
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + line.delay * 0.4 }}
                    className={`font-mono text-sm sm:text-base ${line.highlight ? 'text-accent' : 'text-muted-foreground/60'}`}
                  >
                    <span className="opacity-50 mr-2">{'>'}</span> {line.text}
                  </motion.div>
                ))}

                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
