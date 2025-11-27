---
title: 布局 Layout
group: 布局
---

# Layout 布局

布局组件，用于页面级布局。

---

## 基础用法

典型的页面布局。

```tsx
import React from 'react'
import { Layout } from '@excellent-ui/components'
import './index.scss'
const { Header, Content, Footer, Sider } = Layout

export default () => (
    <div className="layout-basic-demo">
        <Layout style={{ height: '400px' }}>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
        <br />
        <Layout style={{ height: '400px' }}>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
        <br />
        <Layout style={{ height: '400px' }}>
            <Header>Header</Header>
            <Layout>
                <Content>Content</Content>
                <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
        <br />
        <Layout style={{ height: '400px' }}>
            <Header>Header</Header>
            <Layout>
                <Sider style={{ width: '64px' }}>Sider</Sider>
                <Sider style={{ width: '206px', marginLeft: '1px' }}>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </div>
)
```

## 可伸缩侧边栏

可以用鼠标进行拖拽放大缩小的侧边栏，需要用到的参数：`resize`。

```tsx
import React from 'react'
import { Layout } from '@excellent-ui/components'
import './index.scss'
const { Header, Content, Footer, Sider } = Layout

export default () => (
    <div className="layout-basic-demo">
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider
                    resize="horizontal"
                    style={{
                        minWidth: 150,
                        maxWidth: 500,
                        height: 200
                    }}
                >
                    Sider
                </Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </div>
)
```

##

```tsx
import React from 'react'
import { Layout } from '@excellent-ui/components'
import './index.scss'
import { useState } from 'react'
const { Header, Content, Footer, Sider } = Layout

export default () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="layout-basic-demo">
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        collapsedWidth={80}
                        style={{
                            minWidth: 80,
                            maxWidth: 500,
                            height: 200
                        }}
                        onCollapse={() => setCollapsed(!collapsed)}
                    >
                        Sider
                    </Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    )
}
```

## API

**Layout**

| 参数名    | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| className | 自定义类名 | `string`        | -      |
| style     | 自定义样式 | `CSSProperties` | -      |

说明：当直接子元素包含 `Layout.Sider` 时，内部会将容器的 `flexDirection` 设为 `row`，否则为 `column`。

**Layout.Header** / **Layout.Footer** / **Layout.Content**

| 参数名    | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| className | 自定义类名 | `string`        | -      |
| style     | 自定义样式 | `CSSProperties` | -      |

**Layout.Sider**

| 参数名         | 说明                               | 类型                           | 默认值 |
| -------------- | ---------------------------------- | ------------------------------ | ------ |
| className      | 自定义类名                         | `string`                       | -      |
| style          | 自定义样式                         | `CSSProperties`                | -      |
| width          | 侧边栏宽度（未折叠时）             | `number`                       | -      |
| collapsed      | 是否收起                           | `boolean`                      | -      |
| collapsedWidth | 收起时宽度                         | `number`                       | -      |
| collapsible    | 是否显示收起/展开的操作箭头        | `boolean`                      | -      |
| reverseArrow   | 箭头方向反转                       | `boolean`                      | -      |
| onCollapse     | 收起状态改变时回调，参数为最新状态 | `(collapsed: boolean) => void` | -      |
| resize         | CSS 原生 `resize` 属性             | `CSSProperties['resize']`      | -      |
| children       | 侧边栏内容                         | `ReactNode`                    | -      |

说明：`resize` 支持 `'none' | 'horizontal' | 'vertical' | 'both'` 等原生取值；折叠状态下 `width` 以 `collapsedWidth` 为准，且始终设置 `minWidth=collapsedWidth`。
