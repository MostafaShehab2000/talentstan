"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "TalentStan didn't just solve our staffing shortage — it fundamentally changed how we calculate the cost of human capital. We reduced agency fees by 40% in the first quarter.",
    author: "Dr. Elena Rostova",
    title: "Chief Medical Officer",
    company: "Vanguard Health, Dubai",
    rating: 5,
  },
  {
    quote: "The interface is invisible. The matching is instant. It is the only platform that truly respects the value of a physician's time and places clinical fit above everything else.",
    author: "James Chen, MD",
    title: "Cardiothoracic Surgeon",
    company: "Saudi German Hospital, Jeddah",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#FAFAFA] border-b border-[#F3F4F6] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A2218]">What Our Network Says</h2>
          <p className="mt-4 text-base text-[#6B7280]">Trusted by the most demanding healthcare organizations in the region.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-[#F59E0B] text-base">★</span>
                  ))}
                </div>
                <p className="text-lg font-medium text-[#111827] leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#F0FDF9] border border-[#E5E7EB] flex items-center justify-center font-bold text-[#0F766E]">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111827]">{t.author}</div>
                  <div className="text-xs text-[#6B7280]">{t.title} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
