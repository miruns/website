"use client";

import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.3 as const },
  transition: { duration: 0.5 },
};

export default function Product() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <motion.div {...fade} className="mb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            The Product
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Brainwave intelligence,
            <br />
            in your earphones.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Miruns is a wearable EEG headphone that monitors and predicts fatigue
            in real-time — starting with athletes, scalable to every high-stakes
            field.
          </p>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-24"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                index: "01",
                title: "Real-Time Monitoring",
                desc: "Tracks and predicts both physical and mental fatigue as it happens.",
              },
              {
                index: "02",
                title: "EEG Precision",
                desc: "Direct brainwave measurement — not a proxy like heart rate or motion.",
              },
              {
                index: "03",
                title: "Seamless Form Factor",
                desc: "Integrated into high-quality earphones you already want to wear.",
              },
              {
                index: "04",
                title: "Scalable Platform",
                desc: "From athletes to pilots, surgeons, and operators in critical fields.",
              },
            ].map((item) => (
              <div
                key={item.index}
                className="group rounded-2xl border border-card-border bg-card-bg p-8 transition-colors hover:border-accent/30"
              >
                <span className="mb-4 block font-mono text-xs tracking-widest text-accent">
                  {item.index}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            How it works
          </p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four steps from signal
            <br />
            to insight.
          </h2>
          <div className="space-y-0 overflow-hidden rounded-2xl border border-card-border">
            {[
              {
                step: "01",
                title: "EEG Sensors",
                desc: "Smart earphones with high-quality wireless audio capture brainwave data passively.",
              },
              {
                step: "02",
                title: "Signal Processing",
                desc: "On-device and cloud processing extract fatigue markers from raw EEG signals.",
              },
              {
                step: "03",
                title: "App Visualization",
                desc: "Data surfaces in the Miruns app as clear, actionable insights and alerts.",
              },
              {
                step: "04",
                title: "Continuous Learning",
                desc: "Cloud storage and AI models improve predictions over time, personalized to you.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`flex items-start gap-6 bg-card-bg p-8 ${
                  i > 0 ? "border-t border-card-border" : ""
                }`}
              >
                <span className="shrink-0 font-mono text-sm tracking-widest text-accent">
                  {item.step}
                </span>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Training phases */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-24"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            Your workflow
          </p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Before, during, after.
          </h2>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-card-border bg-card-border sm:grid-cols-3">
            {[
              {
                phase: "Before",
                desc: "See energy levels and readiness. Get recommendations for warmup duration and intensity.",
              },
              {
                phase: "During",
                desc: "Real-time alerts when intensity needs adjustment. Detect early signs of strain before injury.",
              },
              {
                phase: "After",
                desc: "Post-training analysis for performance review. Personalized recovery plans based on your data.",
              },
            ].map((item) => (
              <div key={item.phase} className="bg-card-bg p-8">
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {item.phase}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core features */}
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.4 }}>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            Core Features
          </p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built for precision.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "EEG-Based Monitoring",
                desc: "Continuous monitoring of brain activity to detect physical and mental fatigue.",
              },
              {
                title: "Real-Time Feedback",
                desc: "Instant feedback on fatigue levels to optimize training and prevent overtraining.",
              },
              {
                title: "Performance Tracking",
                desc: "Comprehensive tracking of key performance metrics over time.",
              },
              {
                title: "Personalized Recovery",
                desc: "Tailored recovery recommendations based on individual fatigue data.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-card-border bg-card-bg p-6"
              >
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}