const { spawnSync } = require('child_process')

const options = {
  stdio: 'inherit',
  killSignal: 'SIGTERM',
}

const localPath = '../css-universe/node_modules/css-forge/dist'

const spawnScript = (cmd1, cmd2, message) => {
  console.log(`------------------${message}------------------ Starting 👀`)
  const cp = spawnSync(cmd1, cmd2, options)

  if (cp.status === 0) {
    console.log(`------------------${message}------------------ DONE 👍`)
  } else {
    console.log(cp.stderr, cp.status)
  }
}

const main = () => {
  spawnScript('yarn', ['build:dist'], 'Bulding dist')

  spawnScript('yarn', ['build:types'], 'Building Type')

  spawnScript('rm', ['-rf', localPath], 'Cleaning dist folder from css-universe')

  spawnScript('cp', ['-R', './dist', localPath], 'Copying dist from CSS-Forge to css-universe')
}

main()
