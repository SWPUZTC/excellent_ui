import { defineConfig } from 'tsup';

export default defineConfig((options) => {
    const isDev = options.watch as boolean;
    return {
        entry: ['./src/index.ts'],
        format: ['cjs', 'esm'],
        dts: true,
        clean: true,
        external: ['react', 'react-dom'],
        sourcemap: isDev,
        minify: !isDev,
        splitting: true,
        env: {
            NODE_ENV: isDev ? 'development' : 'production',
        },
    }
});