import { defineConfig } from 'tsup';
import sassPlugin from 'esbuild-plugin-sass';

export default defineConfig((options) => {
  const isDev = options.watch as boolean; // 是否是开发模式
  return {
    entry: ['./src/index.ts'],
    format: ['cjs', 'esm'], // 同时输出 CommonJS 和 ES Module
    dts: true,
    // 打包前清空 dist 目录
    clean: true,
    // 不打包 react 和 react-dom，避免代码重复
    external: ['react', 'react-dom'],
    // 注入 sass 插件，让 tsup 能处理 .scss 文件
    esbuildPlugins: [sassPlugin()],
    // 开启 sourcemap 方便调试
    sourcemap: isDev, // 开发模式开启 sourcemap
    // 开启 minify 压缩代码
    minify: !isDev,
    splitting: true, // 开启代码分割
    env: {
      // 定义环境变量，在代码中可以通过 process.env.NODE_ENV 访问
      NODE_ENV: isDev ? 'development' : 'production',
    },
  }
});