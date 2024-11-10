import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  //FIXME
  turbo: {},
  distDir: 'build',
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  //FIXME
  basePath: '/w_dictionary_converter',
  assetPrefix: '.',
  webpack: (config) => {
    config.resolve.alias['@styles'] = 'src/styles/*';
    return config;
  }
};

export default nextConfig;
