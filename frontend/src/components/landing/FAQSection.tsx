"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is the dynamic pricing calculated?",
    answer: "Our algorithm evaluates real-time supply and demand, urgency, specialty scarcity, and historical fulfillment rates to calculate a clearing price that guarantees coverage while optimizing facility spend.",
  },
  {
    question: "What is the credential verification process?",
    answer: "TalentStan connects directly to primary source databases (NPPES, State Boards, DEA). Verification is continuous, automated, and immutable, ensuring 100% compliance before any match is made.",
  },
  {
    question: "How quickly are professionals paid?",
    answer: "Payments are initiated the moment a shift is verified as complete by the facility. Funds typically settle within 24-48 hours depending on the receiving institution.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
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
