---
title: 加载中 Spin
group: 反馈
---

# Spin 加载中

用于页面和区块的加载中状态 - 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

---

## 基础用法

一个简单的 loading 状态。

```tsx
import React from 'react'
import { Spin } from '@excellent-ui/components'

export default () => <Spin />
```

## 点类型的指示符

通过 `dot` 属性，可以展示点类型的指示符。

```tsx
import React from 'react'
import { Spin } from '@excellent-ui/components'

export default () => <Spin dot />
```

## 容器中

可以给任意元素添加加载状态。容器默认是 inline-block 布局，当你需要撑满父级容器时，可以设置 style={{ display: 'block' }}。

```tsx
import React from 'react'
import { Spin } from '@excellent-ui/components'

export default () => (
    <div style={{ marginBottom: 40 }}>
        <h3>块级元素（block）</h3>
        <Spin block tip="块级加载器占据整行宽度" />
    </div>
)
```

## 自定义描述文案

通过 `tip` 字段自定义加载时的文案。

```tsx
import React from 'react'
import { Spin } from '@excellent-ui/components'

export default () => (
    <div style={{ marginBottom: 40 }}>
        <h3>自定义样式</h3>
        <Spin dot size={40} tip="自定义颜色" style={{ backgroundColor: '#52c41a' }} />
    </div>
)
```

## 不同尺寸

设置 `size` 可以得到不同尺寸的加载图标。

```tsx
import React from 'react'
import { Spin } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        <Spin size={20} />
        <Spin size={30} />
        <Spin size={40} />
    </div>
)
```

## API

**Link**

| 参数名    | 说明                                       | 类型            | 默认值  |
| --------- | ------------------------------------------ | --------------- | ------- |
| block     | 是否将 Spin 渲染为块级元素                 | `boolean`       | `false` |
| dot       | 是否展示点类型的指示符                     | `boolean`       | -       |
| className | 自定义类名                                 | `string`        | -       |
| style     | 自定义样式                                 | `CSSProperties` | -       |
| tip       | 自定义加载文案                             | `string`        | -       |
| loading   | 是否展示加载状态(仅在`Spin`有子节点才生效) | `boolean`       | `false` |
| size      | 加载图标尺寸                               | `number`        | -       |
