export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-3">
        {/* Brand */}
        <div>
          <a
            href="/"
            className="font-mono text-lg tracking-tight text-foreground"
          >
            miruns
          </a>
          <p className="mt-3 text-sm text-muted">
            Neuroscience meets sport.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-sm text-muted">
          <a href="/product" className="w-fit transition-colors hover:text-foreground">
            Product
          </a>
          <a href="/about" className="w-fit transition-colors hover:text-foreground">
            About
          </a>
          <a href="/team" className="w-fit transition-colors hover:text-foreground">
            Team
          </a>
          <a href="/roadmap" className="w-fit transition-colors hover:text-foreground">
            Roadmap
          </a>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-3 text-sm text-muted sm:items-end">
          <a
            href="https://github.com/miruns"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/company/miruns/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@miruns.com"
            className="w-fit transition-colors hover:text-foreground"
          >
            contact@miruns.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <span className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Miruns
          </span>
        </div>
      </div>
    </footer>
  );
}
