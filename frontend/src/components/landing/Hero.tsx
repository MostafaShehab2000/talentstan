"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle, TrendingUp, Activity, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-24 pb-32">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#14B8A6]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[#2563EB]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0F766E]/20 bg-[#0F766E]/5 px-4 py-1.5 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#0F766E]" />
                <span className="text-sm font-semibold text-[#0F766E] tracking-wide">ENTERPRISE OS FOR HEALTHCARE</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-[#021A18] leading-[0.95] mb-8"
            >
              The Digital <br />
              Nation of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#14B8A6]">Healthcare</span> <br />
              Talent.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-[#4B5563] leading-relaxed mb-10 max-w-lg font-medium"
            >
              TalentStan is the intelligent marketplace connecting healthcare facilities with verified medical professionals through AI-powered workforce orchestration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/register"
                className="group flex h-14 items-center justify-center gap-2 rounded-full bg-[#021A18] px-8 text-base font-semibold text-white transition-all hover:bg-[#0F766E] hover:shadow-xl hover:shadow-[#0F766E]/20 hover:-translate-y-1 active:translate-y-0"
              >
                Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/demo"
                className="group flex h-14 items-center justify-center gap-2 rounded-full border-2 border-[#E5E7EB] bg-white px-8 text-base font-semibold text-[#021A18] transition-all hover:border-[#021A18] hover:bg-[#F8FAFC]"
              >
                <PlayCircle className="h-5 w-5 text-[#0F766E] transition-transform group-hover:scale-110" /> Book Enterprise Demo
              </Link>
            </motion.div>
          </div>

          {/* Right — Cinematic Floating Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[600px] w-full mt-10 lg:mt-0 flex items-center justify-center perspective-[2000px]"
          >
            {/* Main Glass Dashboard */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[500px] rounded-3xl border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-2xl"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-5deg) rotateX(5deg)' }}
            >
              <div className="flex items-center justify-between mb-8 border-b border-[#E5E7EB]/50 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-[#021A18] flex items-center justify-center">
                    <Activity className="h-4 w-4 text-[#14B8A6]" />
                  </div>
                  <span className="font-bold text-[#021A18]">Workforce OS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-[#6B7280]">SYSTEM LIVE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Active Shifts", value: "1,246", change: "+14%" },
                  { label: "Live Professionals", value: "26,842", change: "+8%" },
                  { label: "Market Price", value: "$145/hr", change: "+2%" },
                  { label: "Revenue", value: "$8.4M", change: "+24%" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[#E5E7EB]/50 bg-[#F8FAFC]/50 p-4 transition-colors hover:bg-white">
                    <div className="text-xs font-medium text-[#6B7280] mb-2">{stat.label}</div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold text-[#021A18]">{stat.value}</div>
                      <div className="flex items-center text-xs font-bold text-[#0F766E] bg-[#0F766E]/10 px-1.5 py-0.5 rounded">
                        <TrendingUp className="h-3 w-3 mr-0.5" /> {stat.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#021A18] p-5 text-white">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-semibold text-white/80">AI Match Score Optimization</div>
                  <div className="text-xs font-bold text-[#14B8A6] bg-[#14B8A6]/20 px-2 py-1 rounded-full">98.5% Accuracy</div>
                </div>
                <div className="h-16 w-full rounded-xl overflow-hidden relative">
                  {/* Fake Bloomberg chart */}
                  <svg viewBox="0 0 100 40" className="w-full h-full preserve-aspect-ratio-none stroke-[#14B8A6] fill-[#14B8A6]/20">
                    <path d="M0 40 L0 30 C 20 30, 30 10, 50 20 C 70 30, 80 5, 100 10 L100 40 Z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Floating Profile 1 */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 top-12 z-20"
              style={{ transform: 'translateZ(50px)' }}
            >
              <div className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0F766E] to-[#14B8A6] p-0.5">
                  <div className="h-full w-full rounded-full border-2 border-white bg-[#021A18] flex items-center justify-center text-lg">👩‍⚕️</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#021A18]">Dr. Sarah Jenkins</div>
                  <div className="text-xs font-medium text-[#6B7280]">Cardiothoracic Surgeon</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <CheckCircle2 className="h-3 w-3 text-[#14B8A6]" />
                    <span className="text-[10px] font-bold text-[#14B8A6]">VERIFIED & AVAILABLE</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Profile 2 */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-12 bottom-20 z-20"
              style={{ transform: 'translateZ(80px)' }}
            >
              <div className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#2563EB] to-blue-400 p-0.5">
                  <div className="h-full w-full rounded-full border-2 border-white bg-[#021A18] flex items-center justify-center text-lg">👨‍⚕️</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#021A18]">James Chen, MD</div>
                  <div className="text-xs font-medium text-[#6B7280]">Emergency Medicine</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <CheckCircle2 className="h-3 w-3 text-[#14B8A6]" />
                    <span className="text-[10px] font-bold text-[#14B8A6]">VERIFIED & AVAILABLE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
