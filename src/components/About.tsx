"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-8 py-32">
      <div className="mx-auto max-w-7xl">
        {/* The Fatigue Problem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.15em] text-muted mb-4">The Problem</p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8">
              The Fatigue Problem
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Have you ever wondered why you're always tired, even after rest? Fatigue affects 1 in 3 people daily.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Sports Impact</h3>
              <ul className="space-y-2 text-muted text-left">
                <li>• Over 70% of sport injuries linked to fatigue</li>
                <li>• Progressive fatigue leads to overtraining syndrome</li>
                <li>• OTS affects ~65% of athletes</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Critical Fields</h3>
              <ul className="space-y-2 text-muted text-left">
                <li>• Pilot fatigue: 20% of human error in fatal accidents</li>
                <li>• Fatigued workers: 6 days lost productivity per year</li>
                <li>• Mental health connection</li>
              </ul>
            </div>
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-medium mb-4">The Scale</h3>
              <p className="text-muted">
                Fatigue is a BIG issue across health, safety, and productivity sectors.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Miruns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-8">
            Why Miruns?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Enhanced Training</h3>
              <p className="text-muted">Real-time insights to optimize performance and reduce injury risk.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Scalable Impact</h3>
              <p className="text-muted">EEG database for AI, expanding beyond athletes to critical fields.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Strong Team & Roadmap</h3>
              <p className="text-muted">Experienced team with clear path from prototype to market.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-medium">
              The first wearable using brainwave data to track and predict your energy levels — starting with athletes, scalable for critical fields.
            </p>
          </div>
        </motion.div>

        {/* Current Solutions and Their Limitations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-8">
            Current Solutions and Their Limitations
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-medium mb-4">Available Solutions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Wearable Fitness Trackers</h4>
                  <p className="text-sm text-muted">Track physical activity, heart rate, sleep. Lack precision for fatigue detection.</p>
                </div>
                <div>
                  <h4 className="font-medium">Sports Science Tools</h4>
                  <p className="text-sm text-muted">Analyze movement patterns. High cost, requires specialized settings.</p>
                </div>
                <div>
                  <h4 className="font-medium">Self-Reported Surveys</h4>
                  <p className="text-sm text-muted">Athletes self-assess fatigue. Subjective and prone to bias.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Limitations</h3>
              <ul className="space-y-2 text-muted">
                <li>• Lack precision and real-time monitoring</li>
                <li>• Expensive and inaccessible</li>
                <li>• Limited to physical metrics only</li>
                <li>• No early fatigue detection</li>
                <li>• Reactive rather than proactive</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Competitors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-8">
            Competitors
          </h2>
          <p className="text-lg text-muted mb-6">
            Miruns stands out with integrated EEG technology, real-time monitoring, and affordability.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border p-2">Company</th>
                  <th className="border border-border p-2">Headphones</th>
                  <th className="border border-border p-2">Channels</th>
                  <th className="border border-border p-2">Cost</th>
                  <th className="border border-border p-2">Detect Fatigue</th>
                  <th className="border border-border p-2">AI Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">Neurable</td>
                  <td className="border border-border p-2">Yes</td>
                  <td className="border border-border p-2">12</td>
                  <td className="border border-border p-2">$649</td>
                  <td className="border border-border p-2">No</td>
                  <td className="border border-border p-2">No</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Emotiv</td>
                  <td className="border border-border p-2">Yes</td>
                  <td className="border border-border p-2">2-32</td>
                  <td className="border border-border p-2">$1,999</td>
                  <td className="border border-border p-2">No</td>
                  <td className="border border-border p-2">No</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Muse</td>
                  <td className="border border-border p-2">Yes</td>
                  <td className="border border-border p-2">5</td>
                  <td className="border border-border p-2">$453</td>
                  <td className="border border-border p-2">No</td>
                  <td className="border border-border p-2">No</td>
                </tr>
                <tr className="bg-primary/10">
                  <td className="border border-border p-2 font-bold">Miruns</td>
                  <td className="border border-border p-2 font-bold">Yes</td>
                  <td className="border border-border p-2 font-bold">4/8/16/24</td>
                  <td className="border border-border p-2 font-bold">From $250</td>
                  <td className="border border-border p-2 font-bold">Yes</td>
                  <td className="border border-border p-2 font-bold">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
