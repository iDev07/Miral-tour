/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/?v=1",
      },
    ];
  },
};

module.exports = nextConfig;
