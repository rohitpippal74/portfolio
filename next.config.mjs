/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   trailingSlash: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//    assetPrefix: '/portfolio',
//   basePath: '/portfolio',
//   trailingSlash: true,
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // remove basePath & assetPrefix
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
}

export default nextConfig
