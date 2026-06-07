"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Zap, ShieldCheck, BarChart3 } from "lucide-react";

export function AISection() {
  return (
    <section className="bg-[#0A2218] py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#14B8A6 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5"
            >
              <BrainCircuit className="h-4 w-4 text-[#14B8A6]" />
              <span className="text-sm font-medium text-white/80">Intelligence Layer</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold text-white leading-tight mb-5"
            >
              Algorithmic precision.<br />
              <span className="text-white/50">Human reliability.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/60 leading-relaxed mb-8"
            >
              Our proprietary engine analyzes 40+ dynamic variables — credentials, proximity, historical reliability, and real-time urgency — to ensure the perfect clinical fit in milliseconds.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: "Dynamic Pricing", desc: "Real-time market rates based on urgency and scarcity." },
                { icon: ShieldCheck, title: "Credential Guard", desc: "Automated primary source verification." },
                { icon: BarChart3, title: "Workforce Analytics", desc: "Bloomberg-level insights on utilization." },
                { icon: BrainCircuit, title: "Predictive Matching", desc: "Learn and improve with every match made." },
              ].map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <feat.icon className="h-5 w-5 text-[#14B8A6] mb-2" />
                  <div className="text-sm font-semibold text-white mb-1">{feat.title}</div>
                  <div className="text-xs text-white/50">{feat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-black/30 p-2"
          >
            <div className="rounded-xl bg-black/60 p-6 font-mono text-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-white/30">talentstan_ai_engine.log</span>
              </div>
              {[
                { text: "Scanning 1,240 nearby professionals...", color: "text-white/50", delay: 0.3 },
                { text: "Filter: ICU Exp > 5yrs, BLS Certified ✓", color: "text-white/50", delay: 0.7 },
                { text: "Running location proximity scoring...", color: "text-white/50", delay: 1.1 },
                { text: "Calculating optimal market rate: $145/hr", color: "text-white/50", delay: 1.5 },
                { text: "Reliability score analysis: 99.2% ✓", color: "text-white/50", delay: 1.9 },
                { text: "✅ MATCH FOUND: RN Sarah Jenkins — 95% Fit", color: "text-[#14B8A6]", delay: 2.3, bold: true },
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: line.delay }}
                  className={`mb-2 ${line.color} ${line.bold ? "font-bold" : ""}`}
                >
                  <span className="text-white/20 mr-2">{`>`}</span>{line.text}
                </motion.div>
              ))}
              <motion.div
                className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
