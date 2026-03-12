export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Left */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <span className="font-mono text-sm tracking-tight text-foreground">
            miruns
          </span>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#product" className="transition-colors hover:text-foreground">
              Product
            </a>
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
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-2 text-sm text-muted sm:items-end">
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
