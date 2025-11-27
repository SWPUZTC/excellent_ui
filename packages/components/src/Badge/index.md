---
title: 徽章 Badge
group: 数据展示
---

# Badge 徽章

一般出现在图标或文字的右上角。提供及时、重要的信息提示。

---

## 基础用法

基础的用法。只需指定 `count`，即可显示徽标。

```tsx
import React from 'react'
import { Space, Badge, Avatar } from '@excellent-ui/components'

export default () => (
    <Badge count={9}>
        <Avatar shape="square" />
    </Badge>
)
```

## 独立使用

`children` 为空时，将会独立展示徽标。

```tsx
import React from 'react'
import { Space, Badge, Avatar } from '@excellent-ui/components'

export default () => (
    <Space size={40}>
        <Badge count={2} />
        <Badge count={16} />
        <Badge maxCount={99} count={1000} />
    </Space>
)
```

## 文本内容

设置 text，可设置自定义提示内容。

```tsx
import React from 'react'
import { Space, Badge, Avatar } from '@excellent-ui/components'
import { IconUser } from '@arco-design/web-react/icon'

export default () => (
    <Space size={40}>
        <Badge text="NEW">
            <Avatar shape="square">
                <span>
                    <IconUser />
                </span>
            </Avatar>
        </Badge>
        <Badge text="HOT">
            <Avatar shape="square">
                <span>
                    <IconUser />
                </span>
            </Avatar>
        </Badge>
    </Space>
)
```

## 最大值

设置 `maxCount`，可以限制最大显示的徽标数值，超过将会加 `+` 后缀。`maxCount` 默认为 `99`。

```tsx
import React from 'react'
import { Space, Badge, Avatar } from '@excellent-ui/components'
import { IconUser } from '@arco-design/web-react/icon'

export default () => (
    <Space size={40}>
        <Badge count={100} maxCount={10}>
            <Avatar shape="square">
                <span>
                    <IconUser />
                </span>
            </Avatar>
        </Badge>
        <Badge count={100}>
            <Avatar shape="square">
                <span>
                    <IconUser />
                </span>
            </Avatar>
        </Badge>
        <Badge count={1000} maxCount={999}>
            <Avatar shape="square">
                <span>
                    <IconUser />
                </span>
            </Avatar>
        </Badge>
    </Space>
)
```

## API

**Badge**

| 参数名       | 说明                                      | 类型                     | 默认值 |
| ------------ | ----------------------------------------- | ------------------------ | ------ |
| children     | 嵌套的目标元素；为空时徽标独立显示        | `ReactNode`              | -      |
| count        | 徽标数值，`> 0` 显示数字；`<= 0` 显示红点 | `number`                 | `0`    |
| maxCount     | 最大显示数，超过显示为 `maxCount+`        | `number`                 | `99`   |
| text         | 自定义文本徽标，优先于 `count`            | `string`                 | -      |
| color        | 徽标背景色（覆盖默认红色）                | `CSSProperties['color']` | -      |
| className    | 外层容器类名                              | `string`                 | -      |
| style        | 外层容器样式                              | `CSSProperties`          | -      |
| dotClassName | 徽标节点类名（`sup`）                     | `string`                 | -      |
| dotStyle     | 徽标节点样式（`sup`）                     | `CSSProperties`          | -      |
