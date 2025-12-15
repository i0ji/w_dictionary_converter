import type { NextConfig } from 'next';
import path from 'path'; 

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
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
};

export default nextConfig;
// 1167795659
// https://sslvpn.rtaru.com:8443/sslvpn-plus/doaction.svp?type=login