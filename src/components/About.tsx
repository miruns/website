"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A cutting-edge platform at the intersection of neuroscience, sport
            science, and active living.
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Miruns integrates seamlessly into everyday headphones — capturing
            EEG, heart rate, HRV, and environmental data without interrupting
            your training or your day. The companion app processes these signals
            with AI to deliver real-time fatigue prediction, recovery tracking,
            personalised health insights, and a first-person daily narrative —
            awareness written by your body, for you.
          </p>
        </motion.div>

        {/* Visual placeholder (device mockup) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="flex h-80 w-full items-center justify-center rounded-2xl border border-card-border bg-card-bg">
            <span className="font-mono text-sm text-muted">
              [ Device / App Mockup ]
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
