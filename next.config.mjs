/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Commented out for development
  trailingSlash: true, // Commented out for development
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio/out', // Commented out for development
  assetPrefix: '/portfolio/out', // Commented out for development
}

export default nextConfig;
