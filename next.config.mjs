/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/docs/:path*',
          destination: 'https://v0-null-mdx.vercel.app/:path*',
          basePath: false,
        },
      ],
    };
  },
};

export default nextConfig;
