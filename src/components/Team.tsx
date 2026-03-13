"use client";

import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.3 as const },
  transition: { duration: 0.5 },
};

const members = [
  {
    initials: "IR",
    name: "Ildar Rakhmatulin, PhD",
    role: "Founder & CEO",
    detail: "Hardware ML & Neuroscience Researcher, Edinburgh",
  },
  {
    initials: "SM",
    name: "Prof Srinjoy Mitra, PhD",
    role: "Academic Advisor",
    detail: "Medical Electronics & Neural Engineering, Edinburgh",
  },
];

export default function Team() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div {...fade} className="mb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            Our Team
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The people behind
            <br />
            the signal.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Industry experience, engineering depth, and research rigor — the
            combination needed to bring brain-level wearable intelligence to
            market.
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-24 grid gap-6 sm:grid-cols-2"
        >
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-card-border bg-card-bg p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/5">
                <span className="font-mono text-sm tracking-widest text-accent">
                  {m.initials}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {m.detail}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Advisors */}
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            Network
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Advisors &amp; Partners
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            We collaborate with leading experts in neuroscience, sports science,
            and technology to ensure our solution is at the cutting edge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}