import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function SupabaseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M3.084 15.25c-1.664 0-2.6-1.912-1.58-3.226L10.21.806C10.794.054 12 .466 12 1.42v7.33h8.916c1.663 0 2.6 1.912 1.58 3.226L13.79 23.194c-.584.752-1.79.34-1.79-.613V15.25z"
      />
    </svg>
  )
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto max-w-[90rem] px-6 py-24 md:px-8 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[12px] font-medium text-primary">Multi-zone docs & landing template</span>
            </div>

            <h1 className="text-balance text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[48px] lg:text-[56px]">
              Ship documentation sites faster with Next.js
            </h1>
            <p className="mt-5 text-[17px] leading-[1.6] text-foreground/60 md:text-[18px]">
              A production-ready template that combines a landing page with external docs using Next.js Multi-Zones.
              Perfect for developer tools and SaaS products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[14px] font-medium text-primary-foreground transition-all duration-100 hover:brightness-110"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium text-foreground/60 transition-colors duration-100 hover:text-foreground"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-border/40">
          <div className="mx-auto max-w-[90rem] px-6 py-16 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-[16px] font-mono font-bold text-primary">//</span>
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight">Real MDX Support</h3>
                <p className="text-[14px] leading-[1.6] text-foreground/50">
                  First v0 template to render actual markdown files. No more hardcoded content.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-[16px] font-mono font-bold text-primary">01</span>
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight">Multi-Zone Routing</h3>
                <p className="text-[14px] leading-[1.6] text-foreground/50">
                  Seamlessly combine landing pages with external docs using Next.js rewrites.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <SupabaseIcon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight">Supabase Storage</h3>
                <p className="text-[14px] leading-[1.6] text-foreground/50">
                  Built-in asset management with Supabase buckets for images and files.
                </p>
              </div>
              <a href="/design" className="group space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-colors group-hover:bg-primary/20">
                  <span className="text-[16px] font-mono font-bold text-primary">UI</span>
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight group-hover:text-primary transition-colors">
                  Design System
                </h3>
                <p className="text-[14px] leading-[1.6] text-foreground/50">
                  Pre-built components and layouts. Copy and customize for your needs.
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
