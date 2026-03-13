"use client";

import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className="px-8 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-sm uppercase tracking-[0.15em] text-muted mb-4">Our Team</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8">
            The Team
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            We have the industry experience, engineering talent, and sales skills to succeed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div className="text-center p-8 rounded-2xl bg-card-bg border">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">👨‍🔬</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Ildar Rakhmatulin, PhD</h3>
            <p className="text-muted mb-4">Founder, CEO</p>
            <p className="text-sm text-muted">
              Hardware ML & Neuroscience Researcher, Edinburgh
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-card-bg border">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Prof Srinjoy Mitra, PhD</h3>
            <p className="text-muted mb-4">Academic Advisor</p>
            <p className="text-sm text-muted">
              Medical electronics, Neural engineering, Edinburgh
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-8">
            Advisors & Partners
          </h2>
          <p className="text-lg text-muted">
            We collaborate with leading experts in neuroscience, sports science, and technology to ensure our solution is cutting-edge and effective.
          </p>
        </motion.div>
      </div>
    </section>
  );
}