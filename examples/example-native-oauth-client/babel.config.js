module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@roll-network/design-system':
            '@roll-network/design-system/dist/native/esm',
        },
      },
    ],
  ],
}
