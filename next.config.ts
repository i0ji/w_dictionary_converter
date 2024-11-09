import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  // basePath: '/',
  // assetPrefix: '/',
};

export default nextConfig;
