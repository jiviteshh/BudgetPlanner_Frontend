/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    output: 'export',
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
