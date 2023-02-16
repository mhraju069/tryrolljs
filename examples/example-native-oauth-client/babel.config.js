module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@tryrolljs/design-system':
            '@tryrolljs/design-system/dist/native/esm',
        },
      },
    ],
  ],
}
