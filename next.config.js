/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: true },
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_MESSAGING_ID: process.env.FIREBASE_MESSAGING_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  },
};

module.exports = nextConfig;
