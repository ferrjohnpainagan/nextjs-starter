const withPWA = require('./withPWA');
const withTwin = require('./withTwin');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA(
  withTwin({
    reactStrictMode: false,
    swcMinify: true,
    env: {
      BASE_URL: process.env.BASE_URL,
      CURRENCY: process.env.CURRENCY,
    },
    reactStrictMode: true,
  }),
);
