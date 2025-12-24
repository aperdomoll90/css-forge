import fs from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import terser from '@rollup/plugin-terser'

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false,
    declarationMap: false,
  }),
  postcss({
    extract: true,
    minimize: true,
  }),
  svg(),
  alias({
    entries: [
      { find: '@tests', replacement: './__tests__' },
      { find: '@mocks', replacement: './__mocks__' },
    ],
  }),
  terser(),
]

const indexFile = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true,
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
                file: `dist/${name}/index.cjs`,
                format: 'cjs',
                sourcemap: true,
              },
              {
                file: `dist/${name}/index.mjs`,
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
