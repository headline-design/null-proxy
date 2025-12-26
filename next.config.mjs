/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.vercel.app'],
    },
  },
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: 'https://v0-null-mdx-td.vercel.app/docs',
      },
      {
        source: '/docs/:path+',
        destination: 'https://v0-null-mdx-td.vercel.app/docs/:path+',
      },
      {
        source: '/docs-static/:path+',
        destination: 'https://v0-null-mdx-td.vercel.app/_next/:path+',
      },
    ];
  },
};

export default nextConfig;
