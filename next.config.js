/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: { unoptimized: true },
  basePath: isProd ? "/Portfolio" : "",
  assetPrefix: isProd ? "/Portfolio/" : "",
};

module.exports = nextConfig;
