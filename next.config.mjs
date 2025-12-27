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
        source: '/blog',
        destination: 'https://null-mdx.vercel.app/blog',
      },
      {
        source: '/blog/:path+',
        destination: 'https://null-mdx.vercel.app/blog/:path+',
      },
      {
        source: '/about',
        destination: 'https://null-mdx.vercel.app/about',
      },
      {
        source: '/assets',
        destination: 'https://null-mdx.vercel.app/assets',
      },
      {
        source: '/assets/:path+',
        destination: 'https://null-mdx.vercel.app/assets/:path+',
      },
      {
        source: '/design',
        destination: 'https://null-mdx.vercel.app/design',
      },
      {
        source: '/design/:path+',
        destination: 'https://null-mdx.vercel.app/design/:path+',
      },
      {
        source: '/api/:path+',
        destination: 'https://null-mdx.vercel.app/api/:path+',
      },
      {
        source: '/feed.xml',
        destination: 'https://null-mdx.vercel.app/feed.xml',
      },
      {
        source: '/llms.txt',
        destination: 'https://null-mdx.vercel.app/llms.txt',
      },
      {
        source: '/docs',
        destination: 'https://null-mdx.vercel.app/docs',
      },
      {
        source: '/docs/:path+',
        destination: 'https://null-mdx.vercel.app/docs/:path+',
      },
      {
        source: '/docs-static/:path+',
        destination: 'https://null-mdx.vercel.app/docs-static/:path+',
      },
    ];
  },
};

export default nextConfig;
