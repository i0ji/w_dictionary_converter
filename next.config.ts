import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  trailingSlash: true
};

export default nextConfig;
