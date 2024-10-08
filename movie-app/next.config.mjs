/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      // Define custom export paths if needed
      return {
        '/': { page: '/' },
        // Add other routes or dynamic ones if required
      };
    },
  };
  
  export default nextConfig;
  