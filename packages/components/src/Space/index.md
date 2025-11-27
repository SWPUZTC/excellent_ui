---
title: 间距 Space
group: 布局
---

# Space 间距

间距是一种布局组件，用于在组件之间添加间距。

---

## 基础用法

间距组件的基本用法。

```tsx
import React from 'react'
import { Button, Space, Typography } from '@excellent-ui/components'

export default () => (
    <Space size="large">
        <Typography.Text>Space:</Typography.Text>
        <Button type="primary">Item1</Button>
        <Button type="primary">Item2</Button>
    </Space>
)
```

## 垂直间距

可以设置垂直方向排列的间距。

```tsx
import React from 'react'
import { Button, Space } from '@excellent-ui/components'

export default () => (
    <Space direction="vertical" size="large">
        <Button type="primary">Item1</Button>
        <Button type="primary">Item2</Button>
        <Button type="primary">Item3</Button>
    </Space>
)
```

## 分隔符

为相邻子元素设置分隔符。

```tsx
import React from 'react'
import { Button, Space } from '@excellent-ui/components'

export default () => (
    <Space split={<hr style={{ height: '28px', display: 'inline-block', marginLeft: '8px', verticalAlign: 'middle' }} />}>
        <Button type="primary">Item1</Button>
        <Button type="primary">Item2</Button>
        <Button type="primary">Item3</Button>
    </Space>
)
```

## API

| 参数名    | 说明         | 类型                                                         | 默认值         |
| --------- | ------------ | ------------------------------------------------------------ | -------------- |
| className | 自定义类名   | `string`                                                     | -              |
| style     | 自定义样式   | `CSSProperties`                                              | -              |
| direction | 间距方向     | `'vertical'` \| `'horizontal'`                               | `'horizontal'` |
| size      | 间距大小     | `'mini'` \| `'small'` \| `'medium'` \| `'large'` \| `number` | `'small'`      |
| align     | 对齐方式     | `'start'` \| `'end'` \| `'center'` \| `'baseline'`           | `'center'`     |
| split     | 设置分隔符   | `ReactNode`                                                  | -              |
| wrap      | 是否自动换行 | `boolean`                                                    | `false`        |
