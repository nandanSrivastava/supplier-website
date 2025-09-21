/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for better SPA performance
  // Uncomment the line below if you want to export as static files
  // output: 'export',

  // Optimize for single page application
  experimental: {
    optimizeCss: true,
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    unoptimized: false,
    domains: [],
    formats: ["image/avif", "image/webp"],
  },

  // Configure trailing slashes for better SPA routing
  trailingSlash: false,
};

export default nextConfig;
