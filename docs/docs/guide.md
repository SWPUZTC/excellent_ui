# 快速开始

Excellent UI 是一套高质量的 React 组件库，基于 TypeScript 和 SCSS 构建。

## 安装

### 使用 npm 安装

```bash
npm install @excellent-ui/components
```

### 使用 yarn 安装

```bash
yarn add @excellent-ui/components
```

### 使用 pnpm 安装

```bash
pnpm add @excellent-ui/components
```

## 使用组件

### 基本使用

### 按需引入

## 开发指南

### 克隆项目

```bash
git clone your-repo-url
cd excellent_ui
```

### 安装依赖

```bash
pnpm install
```

### 启动文档站点

```bash
pnpm docs:dev
```

### 构建组件库

```bash
pnpm build
```

### 运行测试

```bash
pnpm test
```

### 项目结构

```
excellent_ui/
├── docs/              # 文档站点
├── packages/          # 组件包
│   ├── components/    # 组件库主包
│   ├── hooks/         # React Hooks
│   └── themes/        # 主题包
├── package.json       # 根目录配置
└── pnpm-workspace.yaml # pnpm workspace 配置
```

## 主题定制

Excellent UI 使用 CSS 变量来实现主题定制，你可以通过覆盖 CSS 变量来自定义主题颜色。

### 默认主题变量

```css
:root {
    /* 基础颜色 */
    --primary-color: #1890ff;
    --success-color: #52c41a;
    --warning-color: #faad14;
    --error-color: #ff4d4f;

    /* 中性色 */
    --white: #ffffff;
    --black: #000000;
    --gray-1: #fafafa;
    --gray-2: #f5f5f5;
    --gray-3: #f0f0f0;
    --gray-4: #d9d9d9;
    --gray-5: #bfbfbf;
    --gray-6: #8c8c8c;
    --gray-7: #595959;
    --gray-8: #262626;
    --gray-9: #1f1f1f;

    /* 字体 */
    --font-size-base: 14px;
    --font-size-lg: 16px;
    --font-size-sm: 12px;
    --font-weight-base: 400;
    --font-weight-bold: 500;

    /* 尺寸 */
    --border-radius-base: 2px;
    --border-radius-sm: 4px;
    --size-mini: 24px;
    --size-small: 28px;
    --size-medium: 32px;
    --size-large: 40px;

    /* 阴影 */
    --box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15);
}
```

### 自定义主题

在你的项目中创建一个 CSS 文件来覆盖默认主题变量：

```css
/* theme.css */
:root {
    --primary-color: #722ed1; /* 紫色主题 */
    --success-color: #5cdbd3;
    --warning-color: #ffe58f;
    --error-color: #ff7875;
}
```

然后在你的应用入口文件中引入：

### 动态主题切换

你也可以通过 JavaScript 动态切换主题：

```jsx
const changeTheme = theme => {
    const root = document.documentElement

    if (theme === 'dark') {
        root.style.setProperty('--primary-color', '#177ddc')
        root.style.setProperty('--bg-color', '#1f1f1f')
        root.style.setProperty('--text-color', '#ffffff')
    } else {
        root.style.setProperty('--primary-color', '#1890ff')
        root.style.setProperty('--bg-color', '#ffffff')
        root.style.setProperty('--text-color', '#000000')
    }
}
```

## 浏览器兼容性

- Modern browsers and Internet Explorer 11 (with polyfills)
- Server-side Rendering
- Electron

## 支持

如果你在使用过程中遇到任何问题，请查看我们的 [GitHub Issues](https://github.com/your-repo/issues) 或者提交一个新的 issue。
