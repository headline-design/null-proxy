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
        destination: 'https://v0-null-mdx-td.vercel.app/blog',
      },
      {
        source: '/blog/:path+',
        destination: 'https://v0-null-mdx-td.vercel.app/blog/:path+',
      },
      {
        source: '/about',
        destination: 'https://v0-null-mdx-td.vercel.app/about',
      },
      {
        source: '/assets',
        destination: 'https://v0-null-mdx-td.vercel.app/assets',
      },
      {
        source: '/assets/:path+',
        destination: 'https://v0-null-mdx-td.vercel.app/assets/:path+',
      },
      {
        source: '/design',
        destination: 'https://v0-null-mdx-td.vercel.app/design',
      },
      {
        source: '/design/:path+',
        destination: 'https://v0-null-mdx-td.vercel.app/design/:path+',
      },
      {
        source: '/api/:path+',
        destination: 'https://v0-null-mdx-td.vercel.app/api/:path+',
      },
      {
        source: '/feed.xml',
        destination: 'https://v0-null-mdx-td.vercel.app/feed.xml',
      },
      {
        source: '/llms.txt',
        destination: 'https://v0-null-mdx-td.vercel.app/llms.txt',
      },
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
        destination: 'https://v0-null-mdx-td.vercel.app/docs-static/:path+',
      },
    ];
  },
};

export default nextConfig;