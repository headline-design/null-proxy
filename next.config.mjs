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
        source: '/docs',
        destination: 'https://v0-null-mdx.vercel.app/docs',
      },
      {
        source: '/docs/:path+',
        destination: 'https://v0-null-mdx.vercel.app/docs/:path+',
      },
      {
        source: '/docs-static/:path+',
        destination: 'https://v0-null-mdx.vercel.app/docs-static/:path+',
      },
    ];
  },
};

export default nextConfig;
