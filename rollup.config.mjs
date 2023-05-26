import fs from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

const plugins = [
  terser(),
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  postcss(),
  svg(),
  alias({
    entries: [
      { find: '@tests', replacement: './__tests__' },
      { find: '@mocks', replacement: './__mocks__' },
    ],
  }),
]

const indexFile = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins,
}

// folders to be excluded from build
const excludeFolders = ['media', 'IconCollection', 'utils']

const getConfig = () => {
  const folders = fs.readdirSync('src')
  return [
    ...folders.reduce(
      (accum, name) => {
        if (excludeFolders.includes(name) || name.indexOf('.') > -1) return accum
        return [
          ...accum,
          {
            input: `src/${name}/index.tsx`,
            output: [
              {
                file: `dist/${name}/index.js`,
                format: 'cjs',
                sourcemap: true,
              },
              {
                file: `dist/${name}/index.esm.js`,
                format: 'esm',
                sourcemap: true,
              },
            ],
            plugins,
          },
        ]
      },
      [indexFile]
    ),
  ]
}

export default getConfig()
