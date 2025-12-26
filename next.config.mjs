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
        destination: 'https://v0-null-mdx.vercel.app/docs/:path*',
      },
    ]
  },
}

export default nextConfig
