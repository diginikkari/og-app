/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingExcludes: {
      '**/*': ['node_modules/**/@swc/core*'],
    }, // See https://github.com/vercel/next.js/issues/42641#issuecomment-1320713368
  },
};

module.exports = nextConfig;
