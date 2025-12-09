import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: isProd ? '/w_dictionary_converter' : '',
  assetPrefix: isProd ? '/w_dictionary_converter/' : '',
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    return config;
  },
};

export default nextConfig;
