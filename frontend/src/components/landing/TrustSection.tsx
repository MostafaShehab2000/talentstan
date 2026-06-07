"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Building2, CheckCircle2, Globe } from "lucide-react";

const stats = [
  { value: 25000, suffix: "+", label: "Healthcare Professionals", icon: Users },
  { value: 1200, suffix: "+", label: "Healthcare Facilities", icon: Building2 },
  { value: 85000, suffix: "+", label: "Successful Matches", icon: CheckCircle2 },
  { value: 6, suffix: "", label: "Countries Covered", icon: Globe },
];

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 1800;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, started]);

  return (
    <div ref={ref} className="text-3xl font-bold text-[#111827]">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="border-b border-[#F3F4F6] bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0FDF9]">
                <stat.icon className="h-6 w-6 text-[#0F766E]" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-[#6B7280] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
