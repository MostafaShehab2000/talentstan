"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TalentStan is not a staffing agency; it is a liquidity provider for healthcare workforce. The AI matching and dynamic pricing have reduced our operational overhead by 34%.",
    name: "Dr. Ahmed Al-Rashid",
    role: "CEO, Saudi German Health Network",
  },
  {
    quote: "The rigor of their credential verification engine is unprecedented. We achieve compliance automatically, allowing our clinical directors to focus on patient outcomes rather than paperwork.",
    name: "Sarah Chen, MD",
    role: "Chief Medical Officer, Vanguard Health",
  },
  {
    quote: "As an independent practitioner, the platform provides complete autonomy. The real-time pricing transparency and instant settlement infrastructure are game-changing.",
    name: "Dr. Youssef Fadel",
    role: "Consultant Anesthesiologist",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-[2rem] border border-[#E5E7EB] bg-white p-10 transition-all hover:shadow-2xl hover:shadow-[#0F766E]/5 hover:-translate-y-2 group"
            >
              <div>
                <Quote className="h-8 w-8 text-[#E5E7EB] mb-6 transition-colors group-hover:text-[#14B8A6]" />
                <p className="text-base font-medium text-[#374151] leading-relaxed mb-8">
                  "{test.quote}"
                </p>
              </div>
              <div className="border-t border-[#F3F4F6] pt-6">
                <div className="text-sm font-bold text-[#021A18]">{test.name}</div>
                <div className="text-xs font-medium text-[#6B7280]">{test.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
