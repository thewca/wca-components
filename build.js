const { build } = require('esbuild')
const { sassPlugin } = require('esbuild-sass-plugin')
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const { globSync } = require('glob')

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

// Build separate css files to be able to only include one component
build({
  ...shared,
  format: 'esm',
  outdir: './dist/css/',
  target: ['esnext', 'node12.22.0'],
  entryPoints: globSync('./src/components/**/index.ts'),
})

build({
  ...shared,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['esnext', 'node12.22.0'],
})
