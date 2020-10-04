module.exports = {
  stories: ['../src/app/stories/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (baseConfig) => {
    const nextConfig = require('../src/app/next.config.js');

    // merge whatever from nextConfig into the webpack config storybook will use
    return { ...baseConfig };
  },
}
