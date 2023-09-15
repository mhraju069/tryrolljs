/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path')
const { getDefaultConfig } = require('metro-config')

const nodeModulesPaths = [
  path.resolve(path.join(__dirname, '../../node_modules')),
  path.resolve(__dirname, '../../node_modules/@roll-network/web3'),
]

const extraNodeModules = {
  crypto: require.resolve('react-native-crypto'),
  stream: require.resolve('stream-browserify'),
  https: require.resolve('https-browserify'),
  http: require.resolve('http-browserify'),
}

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
      nodeModulesPaths,
      extraNodeModules,
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    watchFolders: nodeModulesPaths,
  }
})()
