const withPlugins = require('next-compose-plugins');

const images = require('remark-images');
const emoji = require('remark-emoji');
const mdx = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [images, emoji],
  },
});

const typescript = require('@zeit/next-typescript');

const nextConfig = {
  distDir: '../../dist/functions/next',
};

module.exports = withPlugins(
  [[typescript, mdx({ pageExtensions: ['mdx'] })]],
  process.env.NODE_ENV === 'production' ? nextConfig : null,
);
