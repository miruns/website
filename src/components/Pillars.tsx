"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🧠",
    title: "Accurate Fatigue Assessment",
    description:
      "Objective, brain-level measurement of cognitive state via EEG — not a proxy like typing speed or eye tracking. Direct information about brain activity for reliable fatigue monitoring.",
  },
  {
    icon: "⚡",
    title: "Real-Time Prediction & Alerts",
    description:
      "Stay aware of cognitive fatigue as it builds. Timely prompts to take a break, adjust intensity, or switch tasks — before performance degrades.",
  },
  {
    icon: "🎯",
    title: "Personalised Management",
    description:
      "Individual fatigue patterns analysed over time. Tailored recommendations for breaks, recovery rhythm, and work intensity that align with your unique cognitive needs.",
  },
  {
    icon: "📈",
    title: "Long-Term Cognitive Health",
    description:
      "Track changes in cognitive patterns over time. Surface trends that may signal burnout risk or cognitive decline — a proactive tool for brain health and resilience.",
  },
];

export default function Pillars() {
  return (
    <section id="product" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
          What you get
        </p>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Four pillars of performance intelligence
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-card-border bg-card-bg p-8 transition-shadow hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]"
            >
              <span className="mb-4 block text-3xl">{p.icon}</span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
