"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";

const dashboardStats = [
  { label: "Active Shifts", value: "248", change: "+12%", trend: "up" },
  { label: "Professionals Online", value: "1,429", change: "+8%", trend: "up" },
  { label: "Successful Matches", value: "3,892", change: "+15%", trend: "up" },
  { label: "Total Revenue", value: "$2.4M", change: "+22%", trend: "up" },
];

const liveShifts = [
  { role: "ICU Nurse – Night Shift", hospital: "King Fahad Medical City", urgent: true, time: "2 min ago" },
  { role: "General Practitioner", hospital: "Aster Hospital, Dubai", urgent: false, time: "5 min ago" },
  { role: "Pharmacist", hospital: "MediCity City Hospital", urgent: false, time: "8 min ago" },
  { role: "Laboratory Technician", hospital: "Saudi German Hospital", urgent: false, time: "11 min ago" },
];

const trustBadges = [
  { label: "AI-Powered Matching" },
  { label: "Real-time Availability" },
  { label: "Secure & Compliant" },
];

export function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 pb-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="flex flex-col justify-center pt-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#14B8A6]" />
              <span className="text-sm font-medium text-[#0F766E]">The #1 Healthcare Workforce Marketplace in MENA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-5xl font-bold tracking-tight text-[#0A2218] leading-[1.1] mb-6"
            >
              The Enterprise <br />
              Healthcare <br />
              <span className="text-[#0F766E]">Workforce Platform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-lg text-[#4B5563] leading-relaxed mb-8 max-w-lg"
            >
              Connecting healthcare facilities with verified medical professionals. Manage shifts, optimize operations, and access the best talent with AI-powered matching.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row mb-8"
            >
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#0F766E] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0d6860] transition-all hover:shadow-md active:scale-95"
              >
                Join the Network <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/professionals"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#D1D5DB] bg-white px-6 py-3.5 text-sm font-semibold text-[#374151] hover:bg-[#F9FAFB] hover:border-[#0F766E]/30 transition-all"
              >
                I&apos;m a Healthcare Professional
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[#0F766E]" />
                  <span className="text-sm text-[#6B7280] font-medium">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative lg:mt-0 mt-0"
          >
            {/* Floating Doctor Card - Top Right */}
            <div className="absolute -top-4 -right-4 z-10 hidden lg:block">
              <div className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-lg">
                <div className="h-10 w-10 rounded-full bg-[#F3F4F6] overflow-hidden flex items-center justify-center">
                  <span className="text-xl">👨‍⚕️</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111827]">Dr. Ahmed Hassan</div>
                  <div className="text-xs text-[#6B7280]">Cardiologist</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span className="text-xs text-green-600 font-medium">Available</span>
                    <span className="text-xs text-[#9CA3AF] ml-1">★ 4.9 (108)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Nurse Card - Bottom Right */}
            <div className="absolute -bottom-4 -right-4 z-10 hidden lg:block">
              <div className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-lg">
                <div className="h-10 w-10 rounded-full bg-[#F3F4F6] overflow-hidden flex items-center justify-center">
                  <span className="text-xl">👩‍⚕️</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111827]">Sarah Al-Mutairi</div>
                  <div className="text-xs text-[#6B7280]">ICU Nurse</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span className="text-xs text-green-600 font-medium">Available</span>
                    <span className="text-xs text-[#9CA3AF] ml-1">★ 4.8 (96)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Dashboard Card */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center gap-0 border-b border-[#F3F4F6]">
                <div className="flex w-48 flex-col border-r border-[#F3F4F6] bg-[#FAFAFA] p-4 shrink-0">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-6 w-6 rounded bg-[#0F766E] flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L4 7v5c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V7L12 2z" fill="white" fillOpacity="0.5"/>
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-[#0A2218]">TalentStan</span>
                  </div>
                  <nav className="flex flex-col gap-0.5 text-xs">
                    {["Overview", "Shifts", "Professionals", "Facilities", "Messages", "Analytics", "Payments", "Reports", "Settings"].map((item, i) => (
                      <div key={item} className={`flex items-center gap-2 rounded-md px-2 py-1.5 cursor-pointer ${i === 0 ? "bg-[#0F766E]/10 text-[#0F766E] font-semibold" : "text-[#6B7280] hover:bg-[#F3F4F6]"}`}>
                        <div className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                        {item}
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="flex-1 p-5 overflow-hidden">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-sm font-semibold text-[#111827]">Overview</div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {dashboardStats.map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-[#F3F4F6] bg-[#FAFAFA] p-3">
                        <div className="text-xs text-[#9CA3AF] mb-1">{stat.label}</div>
                        <div className="flex items-end justify-between">
                          <div className="text-base font-bold text-[#111827]">{stat.value}</div>
                          <div className={`flex items-center gap-0.5 text-xs font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-500"}`}>
                            {stat.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                            {stat.change}
                          </div>
                        </div>
                        <div className="mt-2 h-6 w-full opacity-50">
                          <svg viewBox="0 0 60 20" className="w-full h-full">
                            <polyline
                              fill="none"
                              stroke="#0F766E"
                              strokeWidth="1.5"
                              points={`0,15 10,12 20,14 30,8 40,10 50,6 60,4`}
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Live Shift Requests */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs font-semibold text-[#111827] mb-2">Live Shift Requests</div>
                      <div className="space-y-2">
                        {liveShifts.map((shift) => (
                          <div key={shift.role} className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded bg-[#F3F4F6] flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                              🏥
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1">
                                <span className="text-[11px] font-medium text-[#111827] truncate">{shift.role}</span>
                                {shift.urgent && <span className="shrink-0 rounded px-1 py-0.5 bg-red-50 text-red-600 text-[9px] font-bold">Urgent</span>}
                              </div>
                              <div className="text-[10px] text-[#9CA3AF]">{shift.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="mt-2 text-[11px] font-medium text-[#0F766E] flex items-center gap-1">
                        View all shifts <ArrowRight className="h-2.5 w-2.5" />
                      </button>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-[#111827] mb-2">AI Match Score</div>
                      <div className="rounded-xl border border-[#F3F4F6] bg-[#FAFAFA] p-3 text-center">
                        <div className="text-3xl font-bold text-[#0F766E] mb-1">95%</div>
                        <div className="text-xs font-semibold text-[#111827] mb-1">Excellent Match</div>
                        <div className="text-[10px] text-[#9CA3AF]">Based on skills, experience and availability</div>
                      </div>

                      {/* Facility Tag */}
                      <div className="mt-3 rounded-xl border border-[#F3F4F6] bg-[#F8FFFE] p-2.5 flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-[#0F766E]/10 flex items-center justify-center text-xs">🏥</div>
                        <div>
                          <div className="text-[11px] font-semibold text-[#111827]">King Fahad Medical City</div>
                          <div className="text-[10px] text-[#9CA3AF]">Riyadh, Saudi Arabia</div>
                        </div>
                        <div className="ml-auto">
                          <span className="rounded-full bg-[#0F766E]/10 px-2 py-0.5 text-[10px] font-semibold text-[#0F766E]">24 Active Shifts</span>
                        </div>
                      </div>
                    </div>
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
