module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?(@react-native|react-native|react-native-linear-gradient|react-native-safe-area-context|@wagmi|wagmi|@web3modal|pretty-bytes|react-native-image-crop-picker|uint8arrays|multiformats)/.*))',
  ],
  moduleFileExtensions: [
    'web.tsx',
    'tsx',
    'web.ts',
    'ts',
    'web.jsx',
    'jsx',
    'web.js',
    'js',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+/((@)?(react-native|react-native-linear-gradient|react-native-safe-area-context))/.+\\.(js|jsx)$':
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
    '^react-native$': 'react-native-web',
    '^react-native-linear-gradient$': 'react-native-web-linear-gradient',
  },
  testMatch: [
    '**/*.web.test.ts',
    '**/*.web.test.tsx',
    '!**/*.web.native.ts',
    '!**/*.web.native.tsx',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/setupJest.web.js',
  ],
}
