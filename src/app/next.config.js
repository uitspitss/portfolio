const withPlugins = require('next-compose-plugins');

// next-mdx https://github.com/zeit/next.js/tree/canary/packages/next-mdx
const images = require('remark-images');
const emoji = require('remark-emoji');
const withMDX = require('@zeit/next-mdx')({
  options: {
    remarkPlugins: [images, emoji],
  },
});

// next-optimized-images https://github.com/cyrilwanner/next-optimized-images#configuration
const withOptimzedImages = require('next-optimized-images');

const nextConfig = {
  distDir: '../../dist/functions/next',
  webpack: (config, options) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
    ]
    return config;
  },
};

module.exports = withPlugins([[withMDX],[withOptimzedImages]], nextConfig);
