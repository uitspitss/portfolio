const withPlugins = require('next-compose-plugins');

const images = require('remark-images');
const emoji = require('remark-emoji');
const withMDX = require('@zeit/next-mdx')({
  options: {
    remarkPlugins: [images, emoji],
  },
});

const nextConfig = {
  distDir: '../../dist/functions/next',
};

module.exports = withPlugins([
  [
    withMDX
  ]
], nextConfig);
