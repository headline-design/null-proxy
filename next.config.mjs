/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/docs/_next/static/:path*',
        destination: 'https://v0-null-mdx.vercel.app/_next/static/:path*',
      },
      {
        source: '/docs/_next/:path*',
        destination: 'https://v0-null-mdx.vercel.app/_next/:path*',
      },
      {
        source: '/docs/favicon.ico',
        destination: 'https://v0-null-mdx.vercel.app/favicon.ico',
      },
      {
        source: '/docs/images/:path*',
        destination: 'https://v0-null-mdx.vercel.app/images/:path*',
      },
      {
        source: '/docs',
        destination: 'https://v0-null-mdx.vercel.app/docs',
      },
      {
        source: '/docs/:path*',
        destination: 'https://v0-null-mdx.vercel.app/docs/:path*',
      },
    ]
  },
}

export default nextConfig
