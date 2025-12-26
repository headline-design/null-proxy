import Link from "next/link"
import { ArrowRight, BookOpen, Code2, Zap, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xl font-semibold">Docs</span>
            </div>

            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/docs"
                prefetch={false}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Documentation
              </Link>
              <Link
                href="/docs/guides"
                prefetch={false}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Guides
              </Link>
              <Link
                href="/docs/api"
                prefetch={false}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                API Reference
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
              <Button asChild>
                <Link href="/docs" prefetch={false}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Build better with our documentation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Everything you need to integrate, customize, and deploy. Comprehensive guides, API references, and
              examples to help you ship faster.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/docs" prefetch={false}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Link href="/docs/api" prefetch={false}>
                  View API Reference
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Comprehensive Guides</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Step-by-step tutorials and guides to help you get started quickly and build with confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">API Reference</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Complete API documentation with examples, parameters, and responses for every endpoint.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Quick Start</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Get up and running in minutes with our quick start templates and code examples.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Ready to get started?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Jump into our documentation and start building today.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/docs" prefetch={false}>
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="font-semibold">Docs</span>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
