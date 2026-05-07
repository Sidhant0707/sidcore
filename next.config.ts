/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to generate a static 'out' folder
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;