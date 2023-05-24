import fs from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import { terser } from 'rollup-plugin-terser'

const plugins = [
  terser(),
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ tsconfig: './tsconfig.json' }),
  postcss(),
  alias({
    entries: [
      { find: '@tests', replacement: './__tests__' },
      { find: '@mocks', replacement: './__mocks__' },
    ],
  }),
  svg(),
]

const indexFile = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm',
    },
  ],
  plugins,
}

// const FILE_EXTENSION_LENGTH = -4
// const getFolderConfig = componentType => {
//   const componentsFiles = fs.readdirSync(`src/${componentType}s`)
//   return componentsFiles
//     .filter(componentName => componentName.slice(0, FILE_EXTENSION_LENGTH).endsWith(componentType))
//     .map(componentName => {
//       const name = componentName.slice(0, FILE_EXTENSION_LENGTH)
//       return {
//         input: `src/${componentType}s/${name}.tsx`,
//         output: [
//           {
//             file: `lib/${componentType}s/${name}.js`,
//             format: 'cjs',
//             sourcemap: true,
//           },
//           {
//             file: `lib/${componentType}s/${name}.esm.js`,
//             format: 'esm',
//             sourcemap: true,
//           },
//         ],
//         plugins,
//       }
//     })
// }

const excludeFolders = ['media', 'IconCollection','utils']
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
                file: `lib/${name}/index.js`,
                format: 'cjs',
                sourcemap: true,
              },
              {
                file: `lib/${name}/index.esm.js`,
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
