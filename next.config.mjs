/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Klux gallery CDN — the hero carousel's creatives. Without this every
      // <Image> in the strip 400s, since next/image only optimises allowed hosts.
      {
        protocol: 'https',
        hostname: 'assets.scraive.com',
        port: '',
        pathname: '/scraive/workspaces/**',
      },
    ],
  },
};

export default nextConfig;
