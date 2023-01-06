module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
          // TODO: remove when @tryrolljs/api is published
          paths: {
            '@tryrolljs/api/*': ['../api/*'],
          },
        },
      },
    ],
  },
}
