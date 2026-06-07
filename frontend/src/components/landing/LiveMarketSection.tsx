"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Building2, Activity, Wallet } from "lucide-react";

function BloombergCounter({ end, prefix = "", suffix = "", decimals = 0 }: { end: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 2000;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
            setCount(eased * end);
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, started]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-mono font-bold tracking-tight text-white flex items-baseline gap-1">
      {prefix && <span className="text-xl lg:text-2xl text-white/50">{prefix}</span>}
      {count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix && <span className="text-xl lg:text-2xl text-[#14B8A6]">{suffix}</span>}
    </div>
  );
}

export function LiveMarketSection() {
  return (
    <section className="bg-[#021A18] py-8 border-y border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-white/60 uppercase">Live Market Data</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 divide-x divide-white/10">
          <div className="flex flex-col pl-0">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-[#14B8A6]" />
              <span className="text-sm font-medium text-white/70">Verified Professionals</span>
            </div>
            <BloombergCounter end={26842} />
            <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-400/10 w-fit px-2 py-0.5 rounded">
              <TrendingUp className="h-3 w-3" /> +145 today
            </div>
          </div>

          <div className="flex flex-col pl-8">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="h-4 w-4 text-[#14B8A6]" />
              <span className="text-sm font-medium text-white/70">Hospitals Online</span>
            </div>
            <BloombergCounter end={412} />
            <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-400/10 w-fit px-2 py-0.5 rounded">
              <TrendingUp className="h-3 w-3" /> +12 today
            </div>
          </div>

          <div className="flex flex-col pl-8">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-4 w-4 text-[#14B8A6]" />
              <span className="text-sm font-medium text-white/70">Open Shifts</span>
            </div>
            <BloombergCounter end={1246} />
            <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-[#14B8A6] bg-[#14B8A6]/10 w-fit px-2 py-0.5 rounded">
              <Activity className="h-3 w-3" /> Routing now
            </div>
          </div>

          <div className="flex flex-col pl-8">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="h-4 w-4 text-[#14B8A6]" />
              <span className="text-sm font-medium text-white/70">Today's Workforce Market</span>
            </div>
            <BloombergCounter end={84.2} prefix="EGP" suffix="M" decimals={1} />
            <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-400/10 w-fit px-2 py-0.5 rounded">
              <TrendingUp className="h-3 w-3" /> +4.2% vs yesterday
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
