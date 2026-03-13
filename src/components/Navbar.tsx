"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Team", href: "/team" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Github", href: "https://github.com/miruns", external: true },
  { label: "Linkedin", href: "https://www.linkedin.com/company/miruns/", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-mono text-xl tracking-tight text-foreground hover:text-accent transition-colors">
          <Image src="/miruns-icon.png" alt="Miruns logo" width={32} height={32} className="rounded-md" />
          miruns
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
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
          <ThemeSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 px-8 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-border">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
