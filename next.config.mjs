/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve files from /public as direct URLs — avoids /_next/image optimizer issues
  // (common when dev env or project path causes image optimization to fail).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
