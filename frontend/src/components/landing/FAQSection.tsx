"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How is the dynamic pricing calculated?",
    a: "Our algorithm evaluates real-time supply and demand, urgency, specialty scarcity, and historical fulfillment rates to calculate a clearing price that guarantees coverage while optimizing facility spend.",
  },
  {
    q: "What is the credential verification process?",
    a: "TalentStan connects directly to primary source databases. Verification is continuous, automated, and immutable — ensuring 100% compliance before any match is made.",
  },
  {
    q: "How quickly are professionals paid?",
    a: "Payments are initiated the moment a shift is verified as complete by the facility. Funds typically settle within 24-48 hours via automated direct deposit.",
  },
  {
    q: "Can facilities integrate TalentStan with their existing HRMS?",
    a: "Yes. Strategic and National Partners receive full API access and custom integration support with major HRMS platforms including Workday, Oracle, and SAP.",
  },
  {
    q: "Is TalentStan compliant with regional data regulations?",
    a: "Absolutely. TalentStan is fully HIPAA compliant and adheres to PDPL (Saudi Arabia) and UAE PDPL frameworks. All data is encrypted at rest and in transit.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-32 border-t border-[#F3F4F6]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#021A18] mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#E5E7EB] pb-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${open === i ? 'text-[#0F766E]' : 'text-[#021A18] group-hover:text-[#0F766E]'}`}>
                  {faq.q}
                </span>
                <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white transition-colors group-hover:border-[#0F766E] group-hover:bg-[#0F766E]/5">
                  {open === i ? (
                    <Minus className="h-4 w-4 text-[#0F766E]" />
                  ) : (
                    <Plus className="h-4 w-4 text-[#6B7280] group-hover:text-[#0F766E]" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 text-base text-[#6B7280] leading-relaxed max-w-2xl">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
