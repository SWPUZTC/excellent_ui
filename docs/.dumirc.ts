import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  themeConfig: {
    name: 'Excellent UI',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/button' },
    ],
    footer: false,
    socialLinks: {
      github: 'https://github.com/SWPUZTC/excellent_ui',
    }
  },
  scripts: [
    {
      content: `
        (function () {
          const DUMI_THEME_KEY = 'dumi:prefers-color';

          const applyCustomTheme = (themeValue) => {
            const theme = themeValue || 'light';
            document.documentElement.setAttribute('data-theme', theme);
          };

          // 1. 页面加载时，设置初始主题
          try {
            applyCustomTheme(localStorage.getItem(DUMI_THEME_KEY));
          } catch (e) {
            // 在无痕模式等场景下 localStorage 可能会报错
          }

          // 2. 监听来自其他标签页的 storage 变化
          window.addEventListener('storage', (e) => {
            if (e.key === DUMI_THEME_KEY) {
              applyCustomTheme(e.newValue);
            }
          });

          // 3. 轮询检查当前页面的 localStorage 变化
          // dumi 切换主题时会更新 localStorage，但 'storage' 事件不会在当前页触发
          // 因此我们通过轮询来捕获这个变化
          let currentTheme = localStorage.getItem(DUMI_THEME_KEY);
          setInterval(() => {
            try {
              const newTheme = localStorage.getItem(DUMI_THEME_KEY);
              if (newTheme !== currentTheme) {
                currentTheme = newTheme;
                applyCustomTheme(newTheme);
              }
            } catch (e) {
              // 忽略错误
            }
          }, 200);
        })();
      `,
    },
  ],
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