"use client";

import { motion } from "framer-motion";
import VideoHero from "./VideoHero";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.3 as const },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <>
      <VideoHero src="/videos/Cyclist_Miruns_Video_Generation_seekable.mp4">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-muted"
        >
          <span className="inline-block h-px w-10 bg-muted" />
          About Miruns
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-7xl lg:text-8xl"
        >
          The fatigue problem
          <br />
          is invisible, until it isn&apos;t.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-8 text-lg text-muted leading-relaxed sm:text-xl max-w-2xl"
        >
          Fatigue affects 1&nbsp;in&nbsp;3 people daily. Over 70% of sport
          injuries are linked to fatigue, and pilot fatigue accounts for 20% of
          human error in fatal accidents. Yet current tools can&apos;t detect it
          before it&apos;s too late.
        </motion.p>
      </VideoHero>

      <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl">

        {/* Stats */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-24 grid gap-px overflow-hidden rounded-2xl border border-card-border bg-card-border sm:grid-cols-3"
        >
          {[
            { value: "70%", label: "of sport injuries linked to fatigue" },
            { value: "65%", label: "of athletes affected by overtraining" },
            { value: "20%", label: "of fatal aviation errors from fatigue" },
          ].map((stat) => (
            <div key={stat.value} className="bg-card-bg p-8 text-center">
              <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Why Miruns */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            Why Miruns
          </p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The first wearable that reads
            <br />
            your brain — not just your body.
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                index: "01",
                title: "Enhanced Training",
                desc: "Real-time insights to optimize performance and reduce injury risk through direct brainwave monitoring.",
              },
              {
                index: "02",
                title: "Scalable Impact",
                desc: "EEG database for AI, expanding beyond athletes to military, healthcare, and critical operations.",
              },
              {
                index: "03",
                title: "Clear Roadmap",
                desc: "Experienced team with a defined path from prototype to market leadership in fatigue monitoring.",
              },
            ].map((item) => (
              <div
                key={item.index}
                className="rounded-2xl border border-card-border bg-card-bg p-8"
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

        {/* Limitations */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-24"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            Landscape
          </p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Existing solutions fall short.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Wearable Trackers",
                issue:
                  "Track heart rate and activity — but lack precision for fatigue detection.",
              },
              {
                title: "Sports Science Tools",
                issue:
                  "Analyze movement patterns — but require expensive, specialized settings.",
              },
              {
                title: "Self-Reported Surveys",
                issue:
                  "Athletes self-assess fatigue — subjective and prone to bias.",
              },
              {
                title: "Clinical EEG",
                issue:
                  "Medical-grade brain monitoring — but bulky, costly, and impractical for daily use.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-card-border bg-card-bg p-6"
              >
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.issue}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competitive edge */}
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.4 }}>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
            Competitive Edge
          </p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How Miruns compares.
          </h2>
          <div className="overflow-hidden rounded-2xl border border-card-border">
            {/* Header */}
            <div className="grid grid-cols-5 gap-px bg-card-border text-xs font-medium uppercase tracking-widest text-muted">
              <div className="bg-background p-4">Company</div>
              <div className="bg-background p-4 text-center">Channels</div>
              <div className="bg-background p-4 text-center">Cost</div>
              <div className="bg-background p-4 text-center">Fatigue</div>
              <div className="bg-background p-4 text-center">AI</div>
            </div>
            {/* Rows */}
            {[
              { name: "Neurable", channels: "12", cost: "$649", fatigue: false, ai: false },
              { name: "Emotiv", channels: "2–32", cost: "$1,999", fatigue: false, ai: false },
              { name: "Muse", channels: "5", cost: "$453", fatigue: false, ai: false },
              { name: "Miruns", channels: "4–24", cost: "From $250", fatigue: true, ai: true, highlight: true },
            ].map((row) => (
              <div
                key={row.name}
                className={`grid grid-cols-5 gap-px bg-card-border text-sm ${
                  row.highlight ? "font-medium text-foreground" : "text-muted"
                }`}
              >
                <div className={`p-4 ${row.highlight ? "bg-accent/5" : "bg-card-bg"}`}>
                  {row.name}
                </div>
                <div className={`p-4 text-center ${row.highlight ? "bg-accent/5" : "bg-card-bg"}`}>
                  {row.channels}
                </div>
                <div className={`p-4 text-center ${row.highlight ? "bg-accent/5" : "bg-card-bg"}`}>
                  {row.cost}
                </div>
                <div className={`p-4 text-center ${row.highlight ? "bg-accent/5" : "bg-card-bg"}`}>
                  {row.fatigue ? "Yes" : "—"}
                </div>
                <div className={`p-4 text-center ${row.highlight ? "bg-accent/5" : "bg-card-bg"}`}>
                  {row.ai ? "Yes" : "—"}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
