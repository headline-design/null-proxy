const Page = () => {
  return (
    <div>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
        <span className="text-[12px] font-medium text-primary">Proxy parent for Null</span>
      </div>

      <h1 className="text-balance text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[48px] lg:text-[56px]">
        The proxy parent for Null documentation
      </h1>
      <p className="mt-5 text-[17px] leading-[1.6] text-foreground/60 md:text-[18px]">
        Routes your landing page to external docs and blog content using Next.js Multi-Zones. Built to work seamlessly
        with Null.
      </p>

      <div className="space-y-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
          <span className="text-[16px] font-mono font-bold text-primary">//</span>
        </div>
        <h3 className="text-[16px] font-semibold tracking-tight">Built for Null</h3>
        <p className="text-[14px] leading-[1.6] text-foreground/50">
          Designed to work with Null, the first real MDX template for v0.
        </p>
      </div>
    </div>
  )
}

export default Page
