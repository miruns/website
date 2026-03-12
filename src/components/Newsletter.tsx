"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire up to newsletter API
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Stay in the loop.
        </h2>
        <p className="mt-4 text-muted">
          Get updates on hardware availability, app releases, and research
          findings.
        </p>

        {submitted ? (
          <p className="mt-8 font-mono text-sm text-accent">
            Thanks! We&apos;ll keep you posted.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-card-border bg-card-bg px-5 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none sm:rounded-r-none"
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:rounded-l-none"
            >
              Sign Up
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
