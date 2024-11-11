import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   //FIXME
//   turbo: {},
//   distDir: 'build',
//   reactStrictMode: true,
//   trailingSlash: true,
//   output: 'export',
//   //FIXME
//   basePath:
//     process.env.NODE_ENV === 'production' ? '/w_dictionary_converter' : '',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
//   webpack: (config) => {
//     config.resolve.alias['@styles'] = 'src/styles/*';
//     return config;
//   }
// };

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  turbo: {},
  distDir: 'build',
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  basePath: isProd ? '/w_dictionary_converter' : '',
  assetPrefix: isProd ? '/w_dictionary_converter/' : '',
  webpack: (config) => {
    config.resolve.alias['@styles'] = 'src/styles/*';
    return config;
  }
};

export default nextConfig;
