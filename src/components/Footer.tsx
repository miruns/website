export default function Footer() {
  return (
    <footer className="border-t border-border px-8 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row">
        {/* Left */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <span className="font-mono text-lg tracking-tight text-foreground">
            miruns
          </span>
          <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row">
            <a href="/product" className="transition-colors hover:text-foreground">
              Product
            </a>
            <a href="/about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="/market" className="transition-colors hover:text-foreground">
              Market
            </a>
            <a href="/team" className="transition-colors hover:text-foreground">
              Team
            </a>
            <a href="/roadmap" className="transition-colors hover:text-foreground">
              Roadmap
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-4 text-sm text-muted sm:items-end">
          <div className="flex gap-6">
            <a
              href="https://github.com/miruns"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/miruns/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
          <a
            href="mailto:contact@miruns.com"
            className="transition-colors hover:text-foreground"
          >
            contact@miruns.com
          </a>
          <span>&copy; {new Date().getFullYear()} Miruns</span>
        </div>
      </div>
    </footer>
  );
}
