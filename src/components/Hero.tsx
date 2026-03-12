"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // RAF loop — lerps currentTime toward targetTime each frame
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      if (video.duration) {
        const diff = targetTime.current - video.currentTime;
        if (Math.abs(diff) > 0.001) {
          video.currentTime = lerp(video.currentTime, targetTime.current, 0.12);
        }
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    const onScroll = () => {
      const el = sectionRef.current;
      if (!el || !video.duration) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -top / scrollable));
      targetTime.current = progress * video.duration;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh]">
      {/* Single sticky container — pins to viewport while section scrolls */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Native video — scrubbed manually, no library CSS conflicts */}
        <video
          ref={videoRef}
          src="/videos/miruns_Headphone_Video_seekable.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          muted
          playsInline
          preload="auto"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-[1]" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl"
          >
            Neuroscience meets sport.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
          >
            Discreetly embedded in the headphones you already wear, Miruns
            captures real-time biosignals and turns them into actionable
            intelligence.
          </motion.h2>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="h-10 w-6 rounded-full border-2 border-muted flex items-start justify-center pt-2">
            <div className="h-2 w-1 rounded-full bg-muted" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
