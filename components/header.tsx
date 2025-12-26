import Link from "next/link"
import { FileText } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <FileText className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-[15px] font-semibold">Docs Template</span>
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
