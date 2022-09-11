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

const doesTargetIncludeNative = (target) =>
  target === 'ios' || target === 'android'

const getExtensions = (target) => {
  const extensions = ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs']
  const targets = doesTargetIncludeNative(target)
    ? [target, 'native']
    : [target]
  const extraExtensions = extensions.flatMap((extension) =>
    targets.map((target_) => `.${target_}${extension}`),
  )
  extensions.unshift(...extraExtensions)

  return extensions
}

const makeEntryFileNameGetter = (target) => (chunkInfo) => {
  const suffixesToStrip = doesTargetIncludeNative(target)
    ? [`.${target}`, '.native']
    : [`.${target}`]
  const fileNameWithoutExtension = suffixesToStrip.reduce(
    (fileName, suffix) => `${fileName.replace(suffix, '')}`,
    chunkInfo.name,
  )

  return `${fileNameWithoutExtension}.js`
}

const getConfig = (format, target = 'web') => {
  const extensions = getExtensions(target)

  const outputDir = `./dist/${target}/${format}`

  return {
    input: 'src/index.ts',
    output: [
      {
        dir: outputDir,
        format: format,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: makeEntryFileNameGetter(target),
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

const getStyleConfig = (target = 'web') => ({
  input: 'src/assets/css/index.css',
  output: {
    file: `dist/${target}/index.css`,
    format: 'esm',
  },
  plugins: [
    postcss({
      extract: true,
    }),
  ],
})

const webConfigs = [
  getConfig('cjs', 'web'),
  getConfig('esm', 'web'),
  getStyleConfig('web'),
]

const nativeConfigs = [
  getConfig('cjs', 'native'),
  getConfig('esm', 'native'),
  getConfig('cjs', 'ios'),
  getConfig('esm', 'ios'),
  getConfig('cjs', 'android'),
  getConfig('esm', 'android'),
]

export default [...webConfigs, ...nativeConfigs]
