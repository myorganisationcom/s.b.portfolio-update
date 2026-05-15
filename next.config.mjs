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
    ],
  },
  // Required for native/server-only packages — never bundled by Turbopack
  serverExternalPackages: ['better-sqlite3', 'pg'],
};

export default nextConfig;
