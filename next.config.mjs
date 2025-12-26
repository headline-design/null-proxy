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
        source: '/docs/:path*',
        destination: 'https://your-docs-domain.com/docs/:path*',
      },
    ]
  },
}

export default nextConfig
