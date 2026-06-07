"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Up to 200 staff",
    price: "299",
    period: "/month",
    features: ["Basic Listing", "Access to Talent", "Standard Support"],
    cta: "Choose Plan",
    highlighted: false,
  },
  {
    name: "Professional",
    subtitle: "201 – 1,000 staff",
    price: "799",
    period: "/month",
    features: ["Featured Listing", "Priority Talent Access", "Analytics Dashboard", "Priority Support"],
    cta: "Choose Plan",
    highlighted: false,
  },
  {
    name: "Enterprise",
    subtitle: "1,001 – 5,000 staff",
    price: "1,999",
    period: "/month",
    features: ["Premium Visibility", "Dedicated Account Manager", "Advanced Analytics", "API Access", "Priority Support"],
    cta: "Choose Plan",
    highlighted: true,
  },
  {
    name: "Enterprise+",
    subtitle: "5,000+ staff",
    price: "Custom",
    period: "",
    features: ["Top Placement (Homepage)", "Custom Integrations", "Dedicated Success Team", "SLA & Onboarding", "24/7 Priority Support"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white border-b border-[#F3F4F6] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 items-start">
          {/* Left Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <h2 className="text-2xl font-bold text-[#0A2218] mb-3">Hospital Partnership & Sponsorship Packages</h2>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
              Choose the right plan to boost your visibility and access the best talent. All plans include full platform access and priority support.
            </p>
            <p className="text-[11px] text-[#9CA3AF]">All prices are in USD. Annual billing available with up to 20% discount.</p>
          </motion.div>

          {/* Plans Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 md:grid-cols-2">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col rounded-2xl border p-6 ${
                  plan.highlighted
                    ? "border-[#0F766E] bg-[#F0FDF9] ring-1 ring-[#0F766E]/20"
                    : "border-[#E5E7EB] bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-3 inline-flex">
                    <span className="rounded-full bg-[#0F766E] px-2.5 py-0.5 text-[11px] font-bold text-white">Popular</span>
                  </div>
                )}
                <div className="mb-1 text-base font-bold text-[#111827]">{plan.name}</div>
                <div className="mb-3 text-xs text-[#9CA3AF]">{plan.subtitle}</div>
                <div className="mb-5 flex items-baseline gap-1">
                  {plan.price !== "Custom" && <span className="text-sm text-[#6B7280]">$</span>}
                  <span className="text-3xl font-bold text-[#111827]">{plan.price}</span>
                  {plan.period && <span className="text-sm text-[#9CA3AF]">{plan.period}</span>}
                </div>
                <ul className="mb-6 flex flex-col gap-2.5 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-[#0F766E] mt-0.5" />
                      <span className="text-sm text-[#374151]">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-lg py-2.5 text-sm font-semibold transition-all hover:shadow-md active:scale-95 ${
                    plan.highlighted
                      ? "bg-[#0F766E] text-white hover:bg-[#0d6860]"
                      : "border border-[#D1D5DB] bg-white text-[#374151] hover:bg-[#F9FAFB] hover:border-[#0F766E]/40"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
