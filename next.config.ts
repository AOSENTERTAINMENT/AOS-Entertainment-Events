import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  typedRoutes: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    // Next generates .next/types/app/*.ts that import ../../../../app/*.js (source path).
    // At build time only .next/server/app/*.js exists, so resolution fails. Exclude type-only
    // files from compilation so webpack doesn't try to resolve those imports.
    config.module.rules.push({
      test: /\.next[\\/]types[\\/].*\.ts$/,
      use: 'ignore-loader',
      type: 'javascript/auto',
    });
    return config;
  },
};

export default nextConfig;
