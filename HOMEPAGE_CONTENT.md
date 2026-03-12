# Miruns — Homepage Content & Structure

> Stack: **Next.js (App Router) + Geist UI + Geist Font**
> Design: dark-first, minimal, high-contrast. Geist Sans for body, Geist Mono for data/stats.

---

## 1. Navigation

```
[Logo: Miruns]                              [Product] [App] [GitHub] [Contact]
```

- **Logo** — wordmark "miruns" in Geist Mono, lowercase
- **Product** — anchor to features section
- **App** — links to app store / download (or waitlist)
- **GitHub** — https://github.com/miruns/miruns-connect
- **Contact** — mailto:contact@miruns.com or anchor to footer

---

## 2. Hero

**Layout:** Full viewport height. Centered text. background video with scroll control (raw_videos/miruns_Headphone_Video.mp4).

**Headline (h1):**
> Neuroscience meets sport.

**Sub-headline (h2, muted):**
> Discreetly embedded in the headphones you already wear, Miruns captures real-time biosignals and turns them into actionable intelligence.


---

## 3. What Is Miruns

**Layout:** Two-column — text left, device/app mockup right.

**Section label (small, uppercase, muted):**
> ABOUT

**Headline:**
> A cutting-edge platform at the intersection of neuroscience, sport science, and active living.

**Body:**
> Miruns integrates seamlessly into everyday headphones — capturing EEG, heart rate, HRV, and environmental data without interrupting your training or your day. The companion app processes these signals with AI to deliver real-time fatigue prediction, recovery tracking, personalised health insights, and a first-person daily narrative — awareness written by your body, for you.

---

## 4. Four Pillars (Core Value Props)

**Layout:** 2×2 grid of cards with icon, title, and description. Subtle border, hover glow.

**Section label:**
> WHAT YOU GET

**Headline:**
> Four pillars of performance intelligence

| # | Title | Description |
|---|-------|-------------|
| 1 | **Accurate Fatigue Assessment** | Objective, brain-level measurement of cognitive state via EEG — not a proxy like typing speed or eye tracking. Direct information about brain activity for reliable fatigue monitoring. |
| 2 | **Real-Time Prediction & Alerts** | Stay aware of cognitive fatigue as it builds. Timely prompts to take a break, adjust intensity, or switch tasks — before performance degrades. |
| 3 | **Personalised Management** | Individual fatigue patterns analysed over time. Tailored recommendations for breaks, recovery rhythm, and work intensity that align with your unique cognitive needs. |
| 4 | **Long-Term Cognitive Health** | Track changes in cognitive patterns over time. Surface trends that may signal burnout risk or cognitive decline — a proactive tool for brain health and resilience. |


## 5. Who Benefits

**Layout:** Grid of cards (3 columns on desktop, 1 on mobile). Each with an icon, audience name, and 2-line benefit.

**Section label:**
> WHO IT'S FOR

**Headline:**
> Sweat. Gain. Do.

| Audience | Benefit |
|----------|---------|
| **Athletes & Fitness** | Optimal workout planning, overtraining prevention, post-exercise mental recovery tracking. |
| **Professionals & Executives** | Monitor fatigue across long working hours. Optimise focus intervals and break timing for sustained productivity. |
| **Students** | Identify when cognitive capacity is falling during study sessions. Adjust pacing for better retention. |
| **Gamers & Esports** | Gauge mental fatigue during marathon sessions. Protect reaction time and decision-making under pressure. |
| **Drivers & Operators** | Continuous fatigue monitoring for long-haul drivers, pilots, and shift workers. Reduce accident risk. |
| **Medical & Clinical** | Objective tool for patient fatigue monitoring, personalised care plans, and fatigue-management research. |

---

## 6. Newsletter / Updates

**Layout:** Simple centered section with email input.

**Headline:**
> Stay in the loop.

**Sub-text:**
> Get updates on hardware availability, app releases, and research findings.

**Form:** `[Email input]` `[Sign Up]`

---

## 7. Footer

```
miruns                                    © 2026 Miruns

[Product]  [GitHub]  [LinkedIn]           contact@miruns.com
```

- **LinkedIn** → https://www.linkedin.com/company/miruns/
- **GitHub** → https://github.com/miruns/miruns-connect
- Keep it minimal — one row, two columns.

---

## Design Notes for Next.js + Geist

| Aspect | Decision |
|--------|----------|
| **Font** | `geist` and `geist-mono` via `next/font/local` (built into Next.js) |
| **Colors** | Geist dark palette — `--geist-background`, `--geist-foreground`. Accent: a single brand color (e.g., electric blue or signal green) for CTAs and highlights |
| **Spacing** | Generous vertical rhythm. Each section gets `py-24` to `py-32` (6rem–8rem padding) |
| **Animations** | Subtle: fade-in on scroll via `framer-motion` or CSS `@starting-style`. No heavy parallax |
| **Components** | Use `geist` components where available (Button, Badge, Card, Input). Custom for hero, waveform viz, and feature showcases |
| **Responsive** | Mobile-first. Hero stacks vertically. Feature grid → single column. Nav → hamburger |
| **Images** | App screenshots from Miruns Connect (see GitHub README screenshots). Use `next/image` with blur placeholder |
| **Performance** | Static generation (`generateStaticParams` not needed — single page). ISR if newsletter needs server action |
