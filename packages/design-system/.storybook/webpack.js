const { addWebpackAlias, override } = require('customize-cra')

const replaceSvgLoader = (config) => {
  const rules = config.module.rules.map((rule) => {
    const isSvgRule =
      rule.test &&
      typeof rule.test.test === 'function' &&
      rule.test.test('.svg')
    if (isSvgRule) {
      return { ...rule, exclude: /\.svg$/ }
    }

    return rule
  })

  rules.push({
    test: /\.svg$/,
    enforce: 'pre',
    loader: require.resolve('@svgr/webpack'),
  })

  return { ...config, module: { ...config.module, rules } }
}

const getConfig = override(
  replaceSvgLoader,
  addWebpackAlias({
    'react-native': 'react-native-web',
    'react-native-linear-gradient': 'react-native-web-linear-gradient',
  }),
)

module.exports = {
  getConfig,
}
