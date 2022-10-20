const { getConfig } = require('./webpack')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
  ],
  framework: '@storybook/react',
  webpackFinal: getConfig,
  core: {
    builder: 'webpack5',
  },
}
