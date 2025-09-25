/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/budgetplanner',      // ← important
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
