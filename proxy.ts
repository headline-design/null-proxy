import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // Only handle /docs paths
  if (pathname.startsWith("/docs")) {
    const DOCS_DOMAIN = "https://v0-null-mdx.vercel.app"

    // Remove /docs prefix to get the actual path on the external domain
    const externalPath = pathname.replace(/^\/docs/, "") || "/"
    const externalUrl = `${DOCS_DOMAIN}${externalPath}${search}`

    try {
      // Fetch from external docs site
      const response = await fetch(externalUrl, {
        headers: {
          ...Object.fromEntries(request.headers),
          host: new URL(DOCS_DOMAIN).host,
        },
      })

      const contentType = response.headers.get("content-type") || ""

      // For HTML responses, rewrite asset paths to include /docs prefix
      if (contentType.includes("text/html")) {
        let html = await response.text()

        // Rewrite asset paths to include /docs prefix
        html = html.replace(/href="\/_next\//g, 'href="/docs/_next/')
        html = html.replace(/src="\/_next\//g, 'src="/docs/_next/')
        html = html.replace(/from '\/_next\//g, "from '/docs/_next/")
        html = html.replace(/from "\/_next\//g, 'from "/docs/_next/')

        return new NextResponse(html, {
          status: response.status,
          headers: response.headers,
        })
      }

      // For other responses (assets, etc), pass through as-is
      const body = await response.arrayBuffer()
      return new NextResponse(body, {
        status: response.status,
        headers: response.headers,
      })
    } catch (error) {
      console.error("[v0] Error proxying docs:", error)
      return new NextResponse("Error loading documentation", { status: 500 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/docs/:path*", "/docs/_next/:path*"],
}