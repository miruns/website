"use client";

import { useState } from "react";

const navLinks = [
  { label: "Technology", href: "#about" },
  { label: "Github", href: "https://github.com/miruns", external: true },
  { label: "Linkedin", href: "https://www.linkedin.com/company/miruns/", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* Top fade — blends into page background */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#" className="font-mono text-lg tracking-tight text-foreground">
          miruns
        </a>

        {/* Desktop links */}
        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-background px-6 pb-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
