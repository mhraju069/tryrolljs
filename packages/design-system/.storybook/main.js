const path = require('path')
const { getConfig } = require('./webpack')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
  ],
  framework: getAbsolutePath('@storybook/react-webpack5'),
  webpackFinal: getConfig,
  core: {
    builder: getAbsolutePath('@storybook/builder-webpack5'),
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  docs: {
    autodocs: true,
  },
}

function getAbsolutePath(value) {
  return path.resolve(
    path.join(__dirname, '../../../node_modules', value),
  )
}
