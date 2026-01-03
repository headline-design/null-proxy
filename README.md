# Null Proxy

The routing gateway for the Null ecosystem. Null Proxy serves as the landing page and transparent proxy layer that unifies content from [Null MDX](https://github.com/your-org/null-mdx) under a single domain.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        User Browser                          │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                      Null Proxy                              │
│                   (This Repository)                          │
│                                                              │
│  • Landing page (/)                                          │
│  • Multi-Zones rewrites                                      │
│  • Unified domain experience                                 │
└──────────────────────────┬──────────────────────────────────┘
                           │ rewrites
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                       Null MDX                               │
│               (External Documentation Site)                  │
│                                                              │
│  • /docs/* - Documentation pages                             │
│  • /blog/* - Blog posts                                      │
│  • /about - About page                                       │
│  • /assets, /design - Additional content                     │
└─────────────────────────────────────────────────────────────┘
```

## How It Works

Null Proxy uses [Next.js Multi-Zones](https://nextjs.org/docs/app/building-your-application/deploying/multi-zones) to transparently route requests to a separate Null MDX deployment. Users see a single domain, but content is served from multiple Next.js applications.

### Rewrite Configuration

The `next.config.mjs` configures rewrites that proxy requests:

| Path | Destination | Description |
|------|-------------|-------------|
| `/` | Local | Landing page (this repo) |
| `/docs/*` | Null MDX | Documentation |
| `/blog/*` | Null MDX | Blog posts |
| `/about` | Null MDX | About page |
| `/assets/*` | Null MDX | Asset pages |
| `/design/*` | Null MDX | Design system |
| `/api/null-mdx/*` | Null MDX | Namespaced API routes |
| `/docs-static/*` | Null MDX | Static assets (CSS/JS) |
| `/feed.xml` | Null MDX | RSS feed |
| `/llms.txt` | Null MDX | LLM context file |

### Static Asset Handling

For Multi-Zones to work correctly, the child application (Null MDX) must be configured with an `assetPrefix`:

```js
// Null MDX's next.config.mjs
const nextConfig = {
  assetPrefix: '/docs-static',
}
```

This ensures all CSS, JavaScript, and other assets are served from `/docs-static/*`, which Null Proxy then proxies to the correct destination.

## The Two-Part Template

Null Proxy and Null MDX are designed to work together as a complete documentation system:

| Repository | Purpose | Serves |
|------------|---------|--------|
| **Null Proxy** (this repo) | Gateway & Landing | `/` (landing page) |
| **Null MDX** | Content & Docs | `/docs`, `/blog`, `/about`, etc. |

### Why Two Repositories?

1. **Separation of concerns** - Landing page marketing vs. documentation content
2. **Independent deployments** - Update docs without touching the landing page
3. **Scalability** - Each app can scale independently
4. **Team workflows** - Different teams can own different parts

## proxy-context.md

The `proxy-context.md` file is a **shared reference document** that helps AI agents understand how to write and format content for Null MDX.

### Purpose

When working in Null Proxy, AI agents may need to:
- Create documentation that will be served through the proxy
- Understand the MDX component library available in Null MDX
- Follow consistent formatting patterns across both repositories

### What It Contains

- **File structure** - How content is organized in Null MDX
- **Frontmatter schema** - Required metadata for docs and blog posts
- **MDX components** - Available components (Callout, Steps, Tabs, etc.)
- **Code block syntax** - How to format code with syntax highlighting
- **Best practices** - Writing style and content guidelines

### Why It Lives in Null Proxy

The `proxy-context.md` file lives in Null Proxy (the parent) so that:
1. AI agents working on the landing page have context about the child app
2. Cross-repository documentation stays synchronized
3. The parent app understands the child's content structure

## Quick Start

### Prerequisites

- Node.js 18+
- A deployed instance of Null MDX

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/null-proxy.git
cd null-proxy

# Install dependencies
npm install

# Start development server
npm run dev
```

### Configuration

Update `next.config.mjs` with your Null MDX deployment URL:

```js
// Replace with your Null MDX URL
const NULL_MDX_URL = 'https://your-null-mdx.vercel.app';

const nextConfig = {
  async rewrites() {
    return [
      { source: '/docs/:path*', destination: `${NULL_MDX_URL}/docs/:path*` },
      // ... other rewrites
    ];
  },
};
```

## Navigation Considerations

When linking to proxied routes from the landing page, use regular `<a>` tags instead of Next.js `<Link>` components:

```tsx
// ✅ Correct - Full page navigation for proxied routes
<a href="/docs">Documentation</a>

// ❌ Incorrect - Client-side navigation doesn't work with rewrites from root
<Link href="/docs">Documentation</Link>
```

This is because Next.js client-side navigation doesn't properly handle the rewrite + redirect chain from the root route.

## Deployment

Deploy both applications to Vercel:

1. **Deploy Null MDX first** with `assetPrefix: '/docs-static'`
2. **Deploy Null Proxy** with rewrites pointing to Null MDX URL
3. Point your domain to Null Proxy

## Related

- [Null MDX Repository](https://github.com/your-org/null-mdx) - The documentation template
- [Next.js Multi-Zones](https://nextjs.org/docs/app/building-your-application/deploying/multi-zones) - Official documentation
- [proxy-context.md](./proxy-context.md) - Content creation guide for AI agents

---

Built with Next.js and deployed on Vercel.
