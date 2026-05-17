/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        // Allow any HTTPS image — blog featured images can come from anywhere
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
