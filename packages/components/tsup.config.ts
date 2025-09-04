import { defineConfig } from 'tsup'
import esbuildPluginCssModules from 'esbuild-plugin-css-modules'
import esbuildSassPlugin from 'esbuild-sass-plugin'

export default defineConfig({
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: ['esm','cjs'],
    dts: true,
    splitting: false,
    sourcemap: false,
    clean: true,
    minify: true,
    esbuildPlugins: [
        esbuildPluginCssModules(),
        esbuildSassPlugin(),
    ]
})