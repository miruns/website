"use client";

import { motion } from "framer-motion";

export default function Product() {
  return (
    <section className="px-8 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Miruns: a Game-Changing Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.15em] text-muted mb-4">The Solution</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8">
              Miruns: a Game-Changing Solution
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Miruns is a groundbreaking wearable headphone device that leverages EEG technology to monitor and predict fatigue levels in real-time, tailored specifically for athletes.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Real-Time Monitoring</h3>
              <p className="text-muted">Tracks and predicts both physical and mental fatigue live.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-medium mb-4">EEG Technology</h3>
              <p className="text-muted">High accuracy with brainwave data for actionable insights.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Seamless Design</h3>
              <p className="text-muted">Integrated into high-quality earphones for convenience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Scalable Impact</h3>
              <p className="text-muted">From athletes to critical fields like military and healthcare.</p>
            </div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-8">
            How it Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
              <div>
                <h3 className="text-lg font-medium">EEG Sensors</h3>
                <p className="text-muted">Smart earphones with high-quality wireless audio capture EEG data.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
              <div>
                <h3 className="text-lg font-medium">Data Processing</h3>
                <p className="text-muted">EEG technology with advanced software provides real-time insights on fatigue levels.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
              <div>
                <h3 className="text-lg font-medium">App Visualization</h3>
                <p className="text-muted">Data is visualized in the Miruns app, offering users immediate and actionable insights.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">4</div>
              <div>
                <h3 className="text-lg font-medium">Cloud Storage</h3>
                <p className="text-muted">The app connects to a cloud server for data storage and software updates.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-8">
            Product Demo
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Before Training</h3>
              <p className="text-muted">See your energy levels and readiness for training. Get recommendations for warmup duration.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">During Training</h3>
              <p className="text-muted">Immediate alerts if intensity needs adjustment. Detected signs of physical strain before injury.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">After Training</h3>
              <p className="text-muted">Post-training analysis for performance understanding. Personalized recovery plans.</p>
            </div>
          </div>
        </motion.div>

        {/* Core Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-8">
            Core Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium mb-2">EEG-Based Monitoring</h3>
              <p className="text-muted">Continuous monitoring of brain activity to detect physical and mental fatigue.</p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium mb-2">Real-Time Feedback</h3>
              <p className="text-muted">Instant feedback on fatigue levels to optimize training and prevent overtraining.</p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium mb-2">Performance Tracking</h3>
              <p className="text-muted">Comprehensive tracking of key performance metrics over time.</p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium mb-2">Personalized Recovery Plans</h3>
              <p className="text-muted">Tailored recovery recommendations based on individual fatigue data.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}