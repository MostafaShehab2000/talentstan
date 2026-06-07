"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <div className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-foreground">
        {count.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="border-y border-border/50 bg-muted/20 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-8"
        >
          <Counter end={50000} suffix="+" label="Professionals" />
          <Counter end={1200} suffix="+" label="Facilities" />
          <Counter end={250} suffix="k" label="Successful Matches" />
          <Counter end={99} suffix="%" label="Coverage Rate" />
        </motion.div>
      </div>
    </section>
  );
}
