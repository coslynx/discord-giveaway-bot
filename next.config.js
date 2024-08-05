/ @type {import('next').NextConfig} /
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'upload.wikimedia.org', 'images.discord.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path',
        destination: '/api/:path',
      },
      {
        source: '/dashboard',
        destination: '/dashboard',
      },
      {
        source: '/login',
        destination: '/login',
      },
      {
        source: '/register',
        destination: '/register',
      },
    ];
  },
};

module.exports = nextConfig;