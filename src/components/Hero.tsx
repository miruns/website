"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;

    const video = videoRef.current;
    if (!video) return;

    if (mobile) {
      // Mobile: simple autoplay loop — scroll-scrub is unreliable on mobile browsers
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    // Desktop: scroll-driven video scrub
    const getViewportHeight = () =>
      window.visualViewport?.height ?? window.innerHeight;

    const lerpFactor = 0.12;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      if (video.duration) {
        const diff = targetTime.current - video.currentTime;
        if (Math.abs(diff) > 0.001) {
          video.currentTime = lerp(
            video.currentTime,
            targetTime.current,
            lerpFactor
          );
        }
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    const onScroll = () => {
      const el = sectionRef.current;
      if (!el || !video.duration) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = getViewportHeight();
      const scrollable = height - vh;
      const progress = Math.min(1, Math.max(0, -top / scrollable));
      targetTime.current = progress * video.duration;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh md:min-h-[300dvh]"
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden">

        {/* Video background */}
        <video
          ref={videoRef}
          src="/videos/miruns_Headphone_Video_seekable.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          muted
          playsInline
          preload="auto"
        />

        {/* Gradient — heavy on left, light vignette bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-[1]" />

        {/* Content — bottom-left editorial layout */}
        <div className="absolute bottom-0 left-0 z-10 px-8 pb-20 sm:px-12 sm:pb-24 max-w-3xl">

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
        </div>

        {/* Scroll indicator — bottom right */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 right-10 z-10 sm:right-16"
        >
          <div className="h-10 w-6 rounded-full border-2 border-muted flex items-start justify-center pt-2">
            <div className="h-2 w-1 rounded-full bg-muted" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
