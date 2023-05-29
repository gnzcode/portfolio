/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/",
  env: {
    API_KEY: process.env.API_KEY,
    API_TOKEN: process.env.API_TOKEN,
  },
};

module.exports = nextConfig;
