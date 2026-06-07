"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Brain, Zap, LineChart } from "lucide-react";

export function AISection() {
  const [terminalStep, setTerminalStep] = useState(0);

  const terminalLines = [
    { text: "> Scanning professionals...", delay: 0 },
    { text: "> Checking credentials against Primary Sources...", delay: 800 },
    { text: "> Credentials verified [100% Valid]", color: "text-green-400", delay: 1600 },
    { text: "> Calculating dynamic pricing based on urgency & scarcity...", delay: 2400 },
    { text: "> Market rate established: $145/hr", delay: 3200 },
    { text: "> Initiating AI Match Protocol...", delay: 4000 },
    { text: "> MATCH FOUND [95% Similarity]", color: "text-[#14B8A6] font-bold text-lg", delay: 5000 },
    { text: "> Dispatching shift invitation.", delay: 6000 },
  ];

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    terminalLines.forEach((line, index) => {
      const id = setTimeout(() => {
        setTerminalStep(index);
      }, line.delay);
      timeoutIds.push(id);
    });

    // Reset loop
    const resetId = setTimeout(() => {
      setTerminalStep(-1);
    }, 9000);
    timeoutIds.push(resetId);

    return () => timeoutIds.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terminalStep === -1]);

  return (
    <section className="bg-[#021A18] py-32 overflow-hidden border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/20 bg-[#14B8A6]/10 px-4 py-1.5 mb-8">
              <Brain className="h-4 w-4 text-[#14B8A6]" />
              <span className="text-xs font-bold tracking-widest text-[#14B8A6] uppercase">TalentStan Core Intelligence</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Workforce Orchestration <br /> Powered by AI.
            </h2>
            
            <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-md">
              Our proprietary matching engine replaces manual recruiting with instantaneous, data-driven connections. It's not a job board; it's a dynamic clearinghouse.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Zap, title: "Dynamic Pricing", desc: "Real-time rate calculation based on market liquidity." },
                { icon: Shield, title: "Credential Guard", desc: "Continuous automated verification against primary sources." },
                { icon: Brain, title: "Predictive Matching", desc: "ML models optimize for proximity, specialty, and historical reliability." },
                { icon: LineChart, title: "Workforce Analytics", desc: "Enterprise-grade reporting on spend and utilization." },
              ].map((feat) => (
                <div key={feat.title} className="group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-colors group-hover:bg-[#0F766E]/20 group-hover:border-[#0F766E]/50">
                    <feat.icon className="h-5 w-5 text-white/80 group-hover:text-[#14B8A6] transition-colors" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">{feat.title}</h3>
                  <p className="text-sm font-medium text-white/50 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloomberg Terminal Simulation */}
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-[#14B8A6]/20 blur-3xl opacity-50 rounded-full z-0 pointer-events-none" />
            
            <div className="relative z-10 w-full rounded-[2rem] border border-white/10 bg-black overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-white/40 font-bold uppercase tracking-widest">TS-CORE-TERM-v2.0</div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-8 font-mono text-sm h-[400px] flex flex-col justify-end">
                <div className="space-y-4">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: i <= terminalStep ? 1 : 0, x: i <= terminalStep ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                      className={line.color || "text-white/70"}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  {/* Blinking Cursor */}
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-5 bg-[#14B8A6] mt-2 inline-block"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
