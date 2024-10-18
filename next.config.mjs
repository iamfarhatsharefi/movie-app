/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Helps with 404 errors on dynamic routes

  images: {
    domains: ['image.tmdb.org'], // Add image.tmdb.org for Next.js image optimization
  },
};

export default nextConfig;
