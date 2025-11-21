---
title: 按钮 Button
group: 通用
---

# Button 按钮

按钮是一种命令组件，可发起一个即时操作。

---

## 基础用法

按钮分为 主要按钮、次要按钮、线形按钮和文本按钮四种。

```tsx
import React from 'react'
import { Button } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 20 }}>
        <Button type="primary">主要按钮</Button>
        <Button type="secondary">默认按钮</Button>
        <Button type="text">文本按钮</Button>
        <Button type="outline">文本按钮</Button>
    </div>
)
```

## 按钮尺寸

按钮分为：迷你、小、中、大，四种尺寸。高度分别为：24px/28px/32px/36px。推荐及默认为尺寸「中」。可在不同场景及不同业务需求选择适合尺寸。

```tsx
import React from 'react'
import { Button } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <Button type="primary" size="mini">
            迷你按钮
        </Button>
        <Button type="primary" size="small">
            小按钮
        </Button>
        <Button type="primary" size="medium">
            中按钮
        </Button>
        <Button type="primary" size="large">
            大按钮
        </Button>
    </div>
)
```

## 按钮状态

按钮状态分为 警告，危险，成功，默认 四种，可以与按钮类型同时生效，优先级高于按钮类型。

```tsx
import React from 'react'
import { Button } from '@excellent-ui/components'

export default () => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 100px)',
            gridRowGap: 24,
            gridColumnGap: 24
        }}
    >
        <Button type="primary" status="warning">
            Warning
        </Button>
        <Button status="warning">Warning</Button>
        <Button type="outline" status="warning">
            Warning
        </Button>
        <Button type="text" status="warning">
            Warning
        </Button>

        <Button type="primary" status="danger">
            Danger
        </Button>
        <Button status="danger">Danger</Button>
        <Button type="outline" status="danger">
            Danger
        </Button>
        <Button type="text" status="danger">
            Danger
        </Button>

        <Button type="primary" status="success">
            Success
        </Button>
        <Button status="success">Success</Button>
        <Button type="outline" status="success">
            Success
        </Button>
        <Button type="text" status="success">
            Success
        </Button>
    </div>
)
```

## 禁用按钮

按钮禁用状态下，用户无法点击按钮，也无法触发按钮的点击事件。

```tsx
import React from 'react'
import { Button } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <Button type="primary" disabled>
            主要按钮
        </Button>
        <Button type="secondary" disabled>
            默认按钮
        </Button>
        <Button type="text" disabled>
            文本按钮
        </Button>
        <Button type="outline" disabled>
            文本按钮
        </Button>
    </div>
)
```

## 加载状态

按钮可以设置为加载中状态，加载中状态下按钮不可点击。

```tsx
import React from 'react'
import { Button } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <Button type="primary" loading status="warning">
            加载中
        </Button>
        <Button type="secondary" loading status="danger">
            加载中
        </Button>
        <Button type="text" loading status="success">
            加载中
        </Button>
        <Button type="outline" loading>
            加载中
        </Button>
    </div>
)
```

## 按钮图标

可以通过 prefix 和 suffix 属性为按钮添加前缀和后缀图标。

```tsx
import React from 'react'
import { Button } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <Button type="primary" prefix={<span>🔍</span>}>
            搜索
        </Button>
        <Button type="secondary" suffix={<span>▶</span>}>
            下一步
        </Button>
        <Button type="outline" prefix={<span>+</span>} suffix={<span>▶</span>}>
            添加并继续
        </Button>
    </div>
)
```

## API

**Button**

| 参数名    | 说明                     | 类型                                                   | 默认值      |
| --------- | ------------------------ | ------------------------------------------------------ | ----------- |
| type      | 按钮类型                 | `'primary' \| 'secondary' \| 'text' \| 'outline'`      | `'primary'` |
| size      | 按钮尺寸                 | `'mini' \| 'small' \| 'medium' \| 'large'`             | `'medium'`  |
| status    | 按钮状态                 | `'warning' \| 'danger' \| 'success' \| 'default'`      | `'default'` |
| disabled  | 是否禁用按钮             | `boolean`                                              | -           |
| loading   | 是否加载中状态           | `boolean`                                              | -           |
| htmlType  | 原生 button 的 type 属性 | `'button' \| 'submit' \| 'reset'`                      | `'button'`  |
| prefix    | 按钮前缀图标             | `ReactNode`                                            | -           |
| suffix    | 按钮后缀图标             | `ReactNode`                                            | -           |
| className | 自定义类名               | `string`                                               | -           |
| style     | 自定义样式               | `CSSProperties`                                        | -           |
| onClick   | 点击按钮时触发的回调函数 | `(event: React.MouseEvent<HTMLButtonElement>) => void` | -           |
