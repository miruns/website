"use client";

import { motion } from "framer-motion";
import VideoHero from "./VideoHero";

export default function Hero() {
  return (
    <VideoHero src="/videos/miruns_Headphone_Video_seekable.mp4">
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-muted"
      >
        <span className="inline-block h-px w-10 bg-muted" />
        Biosignal Intelligence
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-7xl lg:text-8xl"
      >
        Neuroscience
        <br />
        meets sport.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        className="mt-8 text-lg text-muted leading-relaxed sm:text-xl max-w-2xl"
      >
        Discreetly embedded in the headphones you already wear, Miruns
        captures real-time biosignals and turns them into actionable
        intelligence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="/product"
          className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors"
        >
          Learn More
        </a>
        <a
          href="/about"
          className="inline-flex items-center justify-center px-8 py-4 border border-border bg-card-bg text-foreground font-medium rounded-full hover:bg-hover transition-colors"
        >
          Our Story
        </a>
      </motion.div>
    </VideoHero>
  );
}
