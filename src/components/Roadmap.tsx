"use client";

import { motion } from "framer-motion";

export default function Roadmap() {
  const timeline = [
    {
      year: "2024",
      milestones: [
        "First mechanical prototype created",
        "Software, Signal Processing",
        "PoC confirmed: possible to collect EEG and predict fatigue",
        "Mobile application",
        "New sport design",
        "Active fundraising initiated in 2H 2024 to finalise prototype and integrate basic functionalities E2E"
      ]
    },
    {
      year: "2025",
      milestones: [
        "Develop MVP and test it on a sample of early adopters",
        "Mechanical and chemical design",
        "Application enhancement",
        "Continue data collection for AI model",
        "Pre-Seed funding"
      ]
    },
    {
      year: "2026",
      milestones: [
        "Finalise the product, set up manufacturing, and prepare marketing strategies",
        "Secure necessary certifications and ensure scalability for production",
        "Seed funding",
        "Q4'26 Launch"
      ]
    },
    {
      year: "2027",
      milestones: [
        "Expansion to secondary markets (military, healthcare, etc.)",
        "Product enhancements and additional features",
        "Series A funding"
      ]
    }
  ];

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
          <p className="text-sm uppercase tracking-[0.15em] text-muted mb-4">Our Journey</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8">
            Progressive Timeline and Roadmap
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            From prototype to market leadership in fatigue monitoring technology.
          </p>
        </motion.div>

        <div className="space-y-12">
          {timeline.map((phase, index) => (
            <motion.div
              key={phase.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {phase.year}
                </div>
                <h2 className="text-2xl font-semibold">{phase.year}</h2>
              </div>
              <div className="ml-16 space-y-2">
                {phase.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-muted flex-shrink-0"></div>
                    <p className="text-muted">{milestone}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}