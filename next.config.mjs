/** @type {import('next').NextConfig} */
const nextConfig = {
  // Top-level static export
  output: 'export',

  // ESLint settings
  eslint: {
    ignoreDuringBuilds: true,
  },

  // TypeScript settings
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image settings
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
