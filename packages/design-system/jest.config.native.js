module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?(@react-native|react-native|react-native-linear-gradient|@wagmi|wagmi|@web3modal|pretty-bytes|react-native-image-crop-picker|@legendapp/motion|@expo/html-elements)/.*))',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  transform: {
    '^.+/((@)?(react-native|react-native-linear-gradient))/.+\\.(js|jsx)$':
      'babel-jest',
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testMatch: [
    '**/*.test.ts',
    '**/*.test.tsx',
    '!**/*.web.test.ts',
    '!**/*.web.test.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupJest.native.js'],
}
