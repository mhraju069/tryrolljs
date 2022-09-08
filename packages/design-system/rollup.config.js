import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'

const packageJson = require('./package.json')

const getConfig = (format) => ({
  input: 'src/index.ts',
  output: [
    {
      dir: `./dist/${format}`,
      format: format,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: [...Object.keys(packageJson.peerDependencies || {})],
  plugins: [
    alias({
      entries: [
        { find: 'react-native$', replacement: 'react-native-web' },
        {
          find: 'react-native-linear-gradient',
          replacement: 'react-native-web-linear-gradient',
        },
      ],
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['ts', 'tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
      exclude: 'node_modules/**',
    }),
    typescript({
      tsconfig: './tsconfig.build.json',
      declarationDir: `./dist/${format}`,
      declaration: true,
      noEmit: false,
      emitDeclarationOnly: true,
    }),
    url({
      include: ['**/*.ttf'],
      limit: Infinity,
    }),
    svgr({ native: true }),
  ],
})

const getStyleConfig = () => ({
  input: 'src/assets/css/tailwind.css',
  output: {
    file: 'dist/index.css',
    format: 'esm',
  },
  plugins: [
    postcss({
      extract: true,
    }),
  ],
})

export default [getConfig('cjs'), getConfig('esm'), getStyleConfig()]
