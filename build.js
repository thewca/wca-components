const { build } = require('esbuild')
const { sassPlugin } = require('esbuild-sass-plugin')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

const entryFile = 'src/index.ts'
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  plugins: [sassPlugin(), nodeExternalsPlugin()],
  loader: {
    '.svg': 'file',
  },
}

build({
  ...shared,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['esnext', 'node12.22.0'],
})

build({
  ...shared,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['esnext', 'node12.22.0'],
})
