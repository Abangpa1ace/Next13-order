/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  }, 
  async redirects() {
    return [
      {
        source: '/',
        destination: '/order',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig;
