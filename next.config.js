/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["robohash.org"],
  },
};

module.exports = nextConfig;
