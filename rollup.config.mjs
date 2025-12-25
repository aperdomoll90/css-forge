import fs from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
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
    inject: true,
    extract: false,
    minimize: true,
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

const getConfig = () => {
  const folders = fs.readdirSync('src')
  return [
    ...folders.reduce(
      (accum, name) => {
        if (name.indexOf('.') > -1) return accum
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
