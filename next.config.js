/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: ['styles'],
  },
  eslint: { dirs: ['.eslintrc.js'] },
  typescript: { tsconfigPath: './tsconfig.json' }
};

module.exports = nextConfig;
