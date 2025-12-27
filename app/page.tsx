import { ArrowRight, Layers, Zap, Shield, Code2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[12px] font-medium text-primary">Proxy parent for Null</span>
            </div>

            {/* Headline */}
            <h1 className="text-balance text-[42px] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground md:text-[56px] lg:text-[72px]">
              Route everything
              <br />
              <span className="text-primary">through one domain</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-pretty text-[17px] leading-[1.7] text-muted-foreground md:text-[19px]">
              Null Proxy seamlessly connects your landing page to external docs and blog content using Next.js
              Multi-Zones. One domain, infinite possibilities.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/docs"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-[15px] font-medium text-foreground shadow-sm transition-all hover:bg-accent hover:shadow-md"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-colors group-hover:bg-primary/15">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-[17px] font-semibold tracking-tight text-foreground">Multi-Zone Routing</h3>
              <p className="text-[14px] leading-[1.7] text-muted-foreground">
                Transparently proxy requests to external domains while keeping your URL structure clean and consistent.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-colors group-hover:bg-primary/15">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-[17px] font-semibold tracking-tight text-foreground">Built for Null</h3>
              <p className="text-[14px] leading-[1.7] text-muted-foreground">
                Designed to work seamlessly with Null, the first real MDX template for v0 with full proxy support.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-colors group-hover:bg-primary/15">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-[17px] font-semibold tracking-tight text-foreground">Production Ready</h3>
              <p className="text-[14px] leading-[1.7] text-muted-foreground">
                Configured with proper Server Actions, asset prefixes, and origin handling for real-world deployment.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-colors group-hover:bg-primary/15">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-[17px] font-semibold tracking-tight text-foreground">Developer Experience</h3>
              <p className="text-[14px] leading-[1.7] text-muted-foreground">
                Simple configuration, clear patterns, and comprehensive documentation to get you started quickly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12 lg:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-foreground md:text-[40px]">
                Ready to get started?
              </h2>
              <p className="mt-4 text-pretty text-[16px] leading-[1.7] text-muted-foreground md:text-[18px]">
                Deploy your own instance with Null Proxy and start routing your content through a unified domain.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/docs"
                  className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  Read the Docs
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-[15px] font-medium text-foreground shadow-sm transition-all hover:bg-accent hover:shadow-md"
                >
                  View Blog
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}