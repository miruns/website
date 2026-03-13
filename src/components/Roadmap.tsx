"use client";

import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.3 as const },
  transition: { duration: 0.5 },
};

const timeline = [
  {
    year: "2024",
    label: "Foundation",
    milestones: [
      "First mechanical prototype created",
      "Signal processing & software development",
      "PoC confirmed: EEG-based fatigue prediction",
      "Mobile application development",
      "Active fundraising initiated in 2H 2024",
    ],
  },
  {
    year: "2025",
    label: "Validation",
    milestones: [
      "MVP development and early-adopter testing",
      "Mechanical and chemical design refinement",
      "Application enhancement",
      "Continued data collection for AI models",
      "Pre-Seed funding",
    ],
  },
  {
    year: "2026",
    label: "Launch",
    milestones: [
      "Product finalization and manufacturing setup",
      "Certifications and production scalability",
      "Seed funding",
      "Q4 2026 — Market launch",
    ],
  },
  {
    year: "2027",
    label: "Expansion",
    milestones: [
      "Secondary markets: military, healthcare, aviation",
      "Product enhancements and new features",
      "Series A funding",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div {...fade} className="mb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            Roadmap
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            From prototype
            <br />
            to market.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            A clear, phased trajectory from proof-of-concept to commercial scale
            in fatigue monitoring technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="overflow-hidden rounded-2xl border border-card-border">
          {timeline.map((phase, i) => (
            <motion.div
              key={phase.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-card-bg p-8 sm:p-10 ${
                i > 0 ? "border-t border-card-border" : ""
              }`}
            >
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-mono text-2xl tracking-tight text-accent sm:text-3xl">
                  {phase.year}
                </span>
                <span className="text-sm font-medium uppercase tracking-widest text-muted">
                  {phase.label}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {phase.milestones.map((m) => (
                  <div key={m} className="flex items-start gap-3">
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                    <p className="text-sm leading-relaxed text-muted">{m}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}