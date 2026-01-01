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
      // Standard Clean URLs
      { source: '/blog', destination: 'https://null-mdx.vercel.app/blog' },
      { source: '/blog/:path+', destination: 'https://null-mdx.vercel.app/blog/:path+' },
      { source: '/docs', destination: 'https://null-mdx.vercel.app/docs' },
      { source: '/docs/:path+', destination: 'https://null-mdx.vercel.app/docs/:path+' },
      { source: '/about', destination: 'https://null-mdx.vercel.app/about' },
      { source: '/assets', destination: 'https://null-mdx.vercel.app/assets' },
      { source: '/assets/:path+', destination: 'https://null-mdx.vercel.app/assets/:path+' },
      { source: '/design', destination: 'https://null-mdx.vercel.app/design' },
      { source: '/design/:path+', destination: 'https://null-mdx.vercel.app/design/:path+' },
      
      // Isolated API (Namespace protected)
      { 
        source: '/api/null-mdx/:path*', 
        destination: 'https://null-mdx.vercel.app/api/null-mdx/:path*' 
      },
      
      // Global Assets (handled by root delegates in child)
      { source: '/feed.xml', destination: 'https://null-mdx.vercel.app/feed.xml' },
      { source: '/llms.txt', destination: 'https://null-mdx.vercel.app/llms.txt' },
      
      // Static Files (matches child's assetPrefix)
      { source: '/docs-static/:path+', destination: 'https://null-mdx.vercel.app/docs-static/:path+' },
    ];
  },
};

export default nextConfig;