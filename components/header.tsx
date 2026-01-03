import Link from "next/link"

function NullLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M15 7L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <NullLogo />
          <span className="text-[15px] font-semibold">Null Proxy</span>
        </Link>

        <nav className="flex items-center gap-6">
          <a href="/docs" className="text-[14px] text-foreground/60 transition-colors hover:text-foreground">
            Docs
          </a>
          <a href="/blog" className="text-[14px] text-foreground/60 transition-colors hover:text-foreground">
            Blog
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-foreground/60 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
