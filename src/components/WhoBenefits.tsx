"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    index: "01",
    name: "Athletes & Fitness",
    benefit:
      "Optimal workout planning, overtraining prevention, post-exercise mental recovery tracking.",
  },
  {
    index: "02",
    name: "Professionals & Executives",
    benefit:
      "Monitor fatigue across long working hours. Optimise focus intervals and break timing for sustained productivity.",
  },
  {
    index: "03",
    name: "Students",
    benefit:
      "Identify when cognitive capacity is falling during study sessions. Adjust pacing for better retention.",
  },
  {
    index: "04",
    name: "Gamers & Esports",
    benefit:
      "Gauge mental fatigue during marathon sessions. Protect reaction time and decision-making under pressure.",
  },
  {
    index: "05",
    name: "Drivers & Operators",
    benefit:
      "Continuous fatigue monitoring for long-haul drivers, pilots, and shift workers. Reduce accident risk.",
  },
  {
    index: "06",
    name: "Medical & Clinical",
    benefit:
      "Objective tool for patient fatigue monitoring, personalised care plans, and fatigue-management research.",
  },
];

export default function WhoBenefits() {
  return (
    <section id="who" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
          Use cases
        </p>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Built for any
          <br />
          cognitive demand.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-card-border bg-card-bg p-6"
            >
              <span className="mb-3 block font-mono text-xs tracking-widest text-accent">{a.index}</span>
              <h3 className="mb-1 text-base font-semibold text-foreground">
                {a.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{a.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
