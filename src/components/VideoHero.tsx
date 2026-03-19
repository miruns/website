"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface VideoHeroProps {
  src: string;
  children: ReactNode;
}

export default function VideoHero({ src, children }: VideoHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;

    const video = videoRef.current;
    if (!video) return;

    if (mobile) {
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

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
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-[1]" />

        <div className="absolute bottom-0 left-0 z-10 px-8 pb-20 sm:px-12 sm:pb-24 max-w-3xl">
          {children}
        </div>

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
