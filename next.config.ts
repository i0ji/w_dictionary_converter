import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  basePath: '/w_dictionary_converter',
  assetPrefix: '/w_dictionary_converter/'
};

export default nextConfig;
