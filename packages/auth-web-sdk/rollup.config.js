import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'

const packageJson = require('./package.json')

const getConfig = (format) => {
  const outputDir = `./dist/${format}`

  return {
    input: 'src/index.ts',
    output: [
      {
        dir: outputDir,
        format: format,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    external: [...Object.keys(packageJson.peerDependencies || {})],
    plugins: [
      del({ targets: outputDir }),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx'],
        exclude: 'node_modules/**',
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declarationDir: outputDir,
        declaration: true,
        noEmit: false,
        emitDeclarationOnly: true,
        exclude: ['**/*.test.ts', '**/*.test.tsx'],
      }),
    ],
  }
}

export default [getConfig('cjs'), getConfig('esm')]
