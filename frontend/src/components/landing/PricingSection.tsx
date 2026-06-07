"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Silver",
    price: "499",
    features: ["Basic Directory Listing", "Standard Support", "Basic Analytics"],
    highlighted: false,
    color: "bg-white",
    border: "border-[#E5E7EB]",
    button: "bg-white text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB]",
  },
  {
    name: "Gold",
    price: "999",
    features: ["Priority Placement", "Verified Badge", "Advanced Analytics", "Priority Support"],
    highlighted: false,
    color: "bg-white",
    border: "border-[#E5E7EB]",
    button: "bg-white text-[#374151] border border-[#D1D5DB] hover:bg-[#F9FAFB]",
  },
  {
    name: "Platinum",
    price: "2,499",
    features: ["Homepage Visibility", "Dedicated Account Manager", "Premium Talent Access", "API Access"],
    highlighted: false,
    color: "bg-[#FAFAFA]",
    border: "border-[#0F766E]/20",
    button: "bg-[#0F766E]/10 text-[#0F766E] font-semibold hover:bg-[#0F766E]/20",
  },
  {
    name: "National Partner",
    price: "4,999",
    features: ["National Directory Placement", "Custom Onboarding", "Full Integration Support", "24/7 SLA Support"],
    highlighted: false,
    color: "bg-[#FAFAFA]",
    border: "border-[#0F766E]/40",
    button: "bg-[#0F766E]/10 text-[#0F766E] font-semibold hover:bg-[#0F766E]/20",
  },
  {
    name: "Strategic Partner",
    price: "Custom",
    features: [
      "Homepage Hero Placement",
      "AI Recommendation Priority",
      "Enterprise HRMS Integration",
      "Dedicated Success Team",
      "Custom SLA Guarantee",
    ],
    highlighted: true,
    color: "bg-[#021A18]",
    border: "border-[#021A18]",
    button: "bg-[#14B8A6] text-white font-bold hover:bg-[#0d9486]",
    text: "text-white",
    mutedText: "text-white/60",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#F8FAFC] py-32 border-b border-[#F3F4F6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold tracking-tight text-[#021A18]"
          >
            Hospital Partnership & Sponsorship Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-[#6B7280] leading-relaxed"
          >
            Secure top talent with priority marketplace placement. Our partnership tiers provide increasing levels of brand visibility and API integrations.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex w-full max-w-sm flex-col rounded-[2rem] border p-8 transition-all hover:-translate-y-2 hover:shadow-2xl ${plan.color} ${plan.border} ${plan.highlighted ? 'shadow-2xl shadow-[#021A18]/20 scale-105 z-10' : 'shadow-sm'}`}
            >
              {plan.highlighted && (
                <div className="mb-6 flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#14B8A6] fill-[#14B8A6]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#14B8A6]">Enterprise Choice</span>
                </div>
              )}
              
              <div className={`mb-2 text-xl font-bold ${plan.text || 'text-[#111827]'}`}>{plan.name}</div>
              
              <div className="mb-8 flex items-baseline gap-1 mt-4">
                {plan.price !== "Custom" && <span className={`text-2xl font-medium ${plan.mutedText || 'text-[#6B7280]'}`}>$</span>}
                <span className={`text-4xl lg:text-5xl font-bold tracking-tight ${plan.text || 'text-[#111827]'}`}>{plan.price}</span>
                {plan.price !== "Custom" && <span className={`text-sm ${plan.mutedText || 'text-[#9CA3AF]'}`}>/mo</span>}
              </div>

              <ul className="mb-10 flex flex-col gap-4 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 ${plan.highlighted ? 'text-[#14B8A6]' : 'text-[#0F766E]'}`} />
                    <span className={`text-sm font-medium leading-tight ${plan.mutedText || 'text-[#4B5563]'}`}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-xl py-4 text-sm transition-all ${plan.button}`}>
                {plan.price === "Custom" ? "Contact Enterprise Sales" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
