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
    link: "https://scholar.google.com/citations?user=L8q-KSoAAAAJ&hl=en",
    linkLabel: "Google Scholar",
  },
  {
    initials: "SM",
    name: "Prof Srinjoy Mitra, PhD",
    role: "Hardware",
    detail: "Medical Electronics & Neural Engineering, Edinburgh",
    link: "https://scholar.google.com/citations?user=6dxU0p4AAAAJ&hl=en",
    linkLabel: "Google Scholar",
  },
  {
    initials: "YE",
    name: "Youssef El Abbassi",
    role: "Software",
    detail: "Software & Dev Experience, Gatineau",
    link: "https://github.com/yelabb",
    linkLabel: "GitHub",
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
            Industry experience, engineering depth, and research rigor, the
            combination needed to bring brain-level wearable intelligence to
            market.
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
              <a
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
              >
                {m.linkLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}