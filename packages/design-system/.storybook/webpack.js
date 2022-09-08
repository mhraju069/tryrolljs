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

const setReactNativeAliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      'react-native-linear-gradient$': 'react-native-web-linear-gradient',
    },
  },
})

const includeNodeModule = (noduleName) => (config) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      {
        test: /\.js$/,
        include: new RegExp(`node_modules\/${noduleName}`),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react', { modules: 'commonjs' }],
                ['@babel/preset-env', { modules: 'commonjs' }],
              ],
            },
          },
        ],
      },
      ...config.module.rules,
    ],
  },
})

const pipe =
  (...functions) =>
  (target) =>
    functions.reduce((acc, fn) => fn(acc), target)

const getConfig = (config) => {
  return pipe(
    setReactNativeAliases,
    replaceSvgLoader,
  )(config)
}

module.exports = {
  getConfig,
}
