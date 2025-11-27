---
title: 开关 Switch
group: 数据输入
---

# Switch 开关

开关是一种二状态切换组件，用于在开启和关闭之间进行切换。

---

## 基础用法

最基础的应用。

```tsx
import React from 'react'
import { Switch, Space } from '@excellent-ui/components'

export default () => (
    <Space size="large">
        <Switch defaultChecked />
        <Switch loading defaultChecked />
        <Switch disabled />
        <Switch checked disabled />
    </Space>
)
```

## 禁用状态

通过 disabled 设置 Switch 为禁用状态。

```tsx
import React from 'react'
import { Switch, Space } from '@excellent-ui/components'

export default () => (
    <Space size="large">
        <Switch disabled />
        <Switch checked disabled />
    </Space>
)
```

## 不同尺寸的开关

通过指定 `size` 可以得到不同尺寸的开关。

```tsx
import React from 'react'
import { Switch, Space } from '@excellent-ui/components'

export default () => (
    <Space size="large">
        <Switch />
        <Switch size="small" />
    </Space>
)
```

## 禁用按钮

按钮禁用状态下，用户无法点击按钮，也无法触发按钮的点击事件。

```tsx
import React from 'react'
import { Space, Switch } from '@excellent-ui/components'
import { IconCheck, IconClose } from '@arco-design/web-react/icon'

export default () => (
    <Space size="large">
        <Switch checkedText="ON" unCheckedText="OFF" />
        <Switch checkedText="1" unCheckedText="0" defaultChecked />
        <Switch checkedText={<IconCheck />} unCheckedText={<IconClose />} defaultChecked />
    </Space>
)
```

## 带图标的开关

自定义开关按钮上显示的图标。

```tsx
import React from 'react'
import { Switch } from '@excellent-ui/components'
import { IconCheck, IconClose } from '@arco-design/web-react/icon'

export default () => <Switch checkedIcon={<IconCheck />} unCheckedIcon={<IconClose />} defaultChecked />
```

## API

**Switch**

| 参数名         | 说明                                       | 类型                         | 默认值      |
| -------------- | ------------------------------------------ | ---------------------------- | ----------- |
| checked        | 受控：是否选中                             | `boolean`                    | -           |
| defaultChecked | 非受控：初始是否选中                       | `boolean`                    | -           |
| disabled       | 是否禁用                                   | `boolean`                    | -           |
| loading        | 是否为加载中（把手显示加载动画且不可点击） | `boolean`                    | -           |
| size           | 尺寸，`small` 时不展示文本                 | `'small'` \| `'default'`     | `'default'` |
| checkedIcon    | 选中态把手内的图标                         | `ReactNode`                  | -           |
| unCheckedIcon  | 未选中态把手内的图标                       | `ReactNode`                  | -           |
| checkedText    | 选中态文本（只在非 `small` 尺寸渲染）      | `ReactNode`                  | -           |
| unCheckedText  | 未选中态文本（只在非 `small` 尺寸渲染）    | `ReactNode`                  | -           |
| onChange       | 切换时回调，参数为最新的选中状态           | `(checked: boolean) => void` | -           |
| className      | 自定义类名                                 | `string`                     | -           |
| style          | 自定义样式                                 | `CSSProperties`              | -           |
