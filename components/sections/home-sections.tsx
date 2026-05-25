"use client";
import { motion } from "framer-motion";

const sections = [
  { title: "Selected Work", copy: "Editorial commerce, portfolio systems, and interface redesign concepts." },
  { title: "Services", copy: "Digital Systems, Web Experiences, Brand Platforms, Website Infrastructure." },
  { title: "Process", copy: "Discovery, architecture, visual direction, and performance tuning." },
  { title: "Experience Showcase", copy: "A preview surface for future modular concepts and interactive pilots." },
  { title: "Contact", copy: "For founders, operators, and brands investing in premium web experiences." },
];

export function HomeSections() {
  return (
    <div className="space-y-10">
      {sections.map((s, i) => (
        <motion.section
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.45 }}
          className="rounded-xl border border-white/10 bg-surface p-8"
        >
          <h2 className="font-display text-3xl">{s.title}</h2>
          <p className="mt-3 max-w-2xl text-muted">{s.copy}</p>
        </motion.section>
      ))}
    </div>
  );
}
