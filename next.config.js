const withPWA = require('./src/utils/withPWA');
const withTwin = require('./src/utils/withTwin');

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
