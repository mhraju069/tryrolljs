import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

const packageJson = require('./package.json')

const getConfig = (format, target = 'web') => {
  const extensions = ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs']
  const targetSpecificExtensions = extensions.map(
    (extension) => `.${target}${extension}`,
  )
  extensions.unshift(...targetSpecificExtensions)

  const isTargetNative = target === 'native'
  const outputDir = isTargetNative
    ? `./dist/native/${format}`
    : `./dist/${format}`

  return {
    input: 'src/index.ts',
    output: [
      {
        dir: outputDir,
        format: format,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: (chunkInfo) =>
          `${chunkInfo.name.replace(`.${target}`, '')}.js`,
      },
    ],
    external: [...Object.keys(packageJson.peerDependencies || {})],
    plugins: [
      del({ targets: outputDir }),
      alias({
        entries: [
          { find: 'react-native$', replacement: 'react-native-web' },
          {
            find: 'react-native-linear-gradient',
            replacement: 'react-native-web-linear-gradient',
          },
        ],
      }),
      resolve({
        extensions,
        moduleDirectories: [],
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        extensions,
        exclude: 'node_modules/**',
      }),
      typescript({
        tsconfig: './tsconfig.build.json',
        declarationDir: outputDir,
        declaration: true,
        noEmit: false,
        emitDeclarationOnly: true,
      }),
      url({
        include: ['**/*.ttf'],
        limit: Infinity,
      }),
      svgr({ native: true }),
      copy({
        targets: [{ src: 'src/**/*.d.ts', dest: outputDir }],
        flatten: false,
        verbose: true,
      }),
    ],
  }
}

const getStyleConfig = () => ({
  input: 'src/assets/css/index.css',
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

export default [
  getConfig('cjs'),
  getConfig('esm'),
  getConfig('cjs', 'native'),
  getConfig('esm', 'native'),
  getStyleConfig(),
]
