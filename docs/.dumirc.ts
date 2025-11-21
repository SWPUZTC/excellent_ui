import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  themeConfig: {
    name: 'Excellent UI',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/button' },
    ],
    footer: false
  },

  alias: {
    '@excellent-ui/components': path.join(__dirname, '../packages/components/src'),
    '@excellent-ui/themes': path.join(__dirname, '../packages/themes'),
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: '../packages/components/src' },
    ],
  },
});