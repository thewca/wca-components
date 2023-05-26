const { build } = require("esbuild");
const { dependencies } = require("./package.json");
const { sassPlugin } = require('esbuild-sass-plugin')

const entryFile = "src/index.ts";
const shared = {
    bundle: true,
    entryPoints: [entryFile],
    logLevel: "info",
    minify: true,
    external: Object.keys(dependencies),
    sourcemap: true,
    plugins: [sassPlugin()]
};

build({
    ...shared,
    format: "esm",
    outfile: "./dist/index.esm.js",
    target: ["esnext", "node12.22.0"],
});

build({
    ...shared,
    format: "cjs",
    outfile: "./dist/index.cjs.js",
    target: ["esnext", "node12.22.0"],
});