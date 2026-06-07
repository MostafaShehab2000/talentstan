"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "TalentStan didn't just solve our staffing shortage; it fundamentally changed how we calculate the cost of human capital.",
    author: "Dr. Elena Rostova",
    title: "Chief Medical Officer, Vanguard Health",
  },
  {
    quote: "The interface is invisible. The matching is instant. It is the only platform that respects the value of a physician's time.",
    author: "James Chen, MD",
    title: "Cardiothoracic Surgeon",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col justify-between rounded-[2rem] bg-card p-10 md:p-14 border border-border shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-snug">
                "{testimonial.quote}"
              </div>
              <div className="mt-12 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-muted border border-border/50 flex items-center justify-center font-bold text-lg text-muted-foreground">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
