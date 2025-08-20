/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'fashiontv.com', 'cdn.fashiontv.com'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
};

export default nextConfig;