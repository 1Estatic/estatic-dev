/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Permite requisições de desenvolvimento de origens específicas
  allowedDevOrigins: [
    'http://26.204.26.123:3000',
    '26.204.26.123',
  ],
}

export default nextConfig
