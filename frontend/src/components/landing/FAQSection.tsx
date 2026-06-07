"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How is the dynamic pricing calculated?",
    a: "Our algorithm evaluates real-time supply and demand, urgency, specialty scarcity, and historical fulfillment rates to calculate a clearing price that guarantees coverage while optimizing facility spend.",
  },
  {
    q: "What is the credential verification process?",
    a: "TalentStan connects directly to primary source databases (NPPES, State Boards, DEA). Verification is continuous, automated, and immutable — ensuring 100% compliance before any match is made.",
  },
  {
    q: "How quickly are professionals paid?",
    a: "Payments are initiated the moment a shift is verified as complete by the facility. Funds typically settle within 24-48 hours depending on the receiving institution.",
  },
  {
    q: "Can facilities integrate TalentStan with their existing HRMS?",
    a: "Yes. Enterprise and Enterprise+ plans include full API access and custom integration support with major HRMS platforms including Workday, Oracle, and SAP.",
  },
  {
    q: "Is TalentStan compliant with HIPAA and regional data regulations?",
    a: "Absolutely. TalentStan is fully HIPAA compliant and adheres to PDPL (Saudi Arabia) and UAE PDPL frameworks. All data is encrypted at rest and in transit.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A2218]">Frequently Asked Questions</h2>
          <p className="mt-4 text-base text-[#6B7280]">Everything you need to know about the TalentStan platform.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-[#E5E7EB] bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-[#111827]">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#9CA3AF]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-sm text-[#6B7280] leading-relaxed border-t border-[#F3F4F6] pt-4">
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
