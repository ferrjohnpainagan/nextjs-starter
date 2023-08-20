const withPWA = require('./withPWA.js');
const withTwin = require('./withTwin.js');

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
