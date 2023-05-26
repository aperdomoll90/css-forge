import { readdirSync, lstatSync, existsSync, copyFileSync, mkdirSync } from 'fs'

const main = () => {
  const src = 'dist'
  const typesFolder = 'types'
  const components = readdirSync(typesFolder)
  components.map(componentName => {
    const from = `${typesFolder}/${componentName}`
    const to = `${src}/${componentName}`
    const isAFolder = existsSync(to) && lstatSync(to).isDirectory()
    if (isAFolder) {
      const typesFiles = readdirSync(`${typesFolder}/${componentName}`)
      typesFiles.map(file => {
        const source = `${from}/${file}`
        const destination = `${to}/${file}`
        if (!lstatSync(source).isDirectory()) copyFileSync(source, destination)
      })
    } else if (!lstatSync(from).isDirectory()) {
      copyFileSync(from, to)
    } else if (lstatSync(from).isDirectory() && !existsSync(to)) {
      mkdirSync(to)
      const typesFiles = readdirSync(`${typesFolder}/${componentName}`)
      typesFiles.map(file => {
        const source = `${from}/${file}`
        const destination = `${to}/${file}`
        if (!lstatSync(source).isDirectory()) copyFileSync(source, destination)
      })
    }
  })
}

main()
