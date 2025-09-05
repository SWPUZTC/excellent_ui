/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
   ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    'node_modules/**',
    'dist/**',
    'apps/docs/stories/**', // 忽略 storybook 自动生成的文件
  ],
};