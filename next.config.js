/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // serve images from /public by default; add remotePatterns if needed
    formats: ['image/avif','image/webp']
  }
}
module.exports = nextConfig
