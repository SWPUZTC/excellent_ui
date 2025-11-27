---
title: 标签 Tag
group: 数据展示
---

# Tag 标签

标签是一种用于表示信息分类、状态或属性的小元素。

---

## 基础用法

标签的基础用法。

```tsx
import React from 'react'
import { Tag, Space } from '@excellent-ui/components'
import { IconCheckCircleFill } from '@arco-design/web-react/icon'

export default () => (
    <Space size="large">
        <Tag>Default</Tag>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag icon={<IconCheckCircleFill />}>Complete</Tag>
    </Space>
)
```

## 可关闭标签

可设置 `closable` 属性控制标签是否可关闭，可关闭标签可通过 `onClose` 事件执行一些关闭后操作。也可通过 `visible` 属性控制标签的显示隐藏。

```tsx
import React from 'react'
import { Tag, Space, Switch, Typography } from '@excellent-ui/components'
import { IconStar } from '@arco-design/web-react/icon'
import { useState } from 'react'

export default () => {
    const [visible, setVisible] = useState(true)

    function onClose() {
        setVisible(!visible)
    }

    return (
        <div>
            <Tag closeable visible={visible} onClose={onClose} style={{ margin: '0 24px' }}>
                Tag
            </Tag>
            <Tag icon={<IconStar />} closeable visible={visible} onClose={onClose}>
                Tag
            </Tag>
            <div style={{ marginTop: 24 }}>
                <Switch style={{ margin: '0 8px' }} size="small" checked={visible} onChange={onClose} />
                <Typography.Text>Toggle</Typography.Text>
            </div>
        </div>
    )
}
```

## 可选中

通过参数 `checkable`，可以实现点击选中的效果。

```tsx
import React from 'react'
import { Tag, Space } from '@excellent-ui/components'

export default () => (
    <Space size="large">
        <Tag checkable>Awesome</Tag>
        <Tag checkable defaultChecked>
            Lark
        </Tag>
    </Space>
)
```

## 不同尺寸

标签分为：小、中、大，可以在不同场景下选择合适按钮尺寸。推荐及默认尺寸为「中」。

```tsx
import React from 'react'
import { Tag, Space } from '@excellent-ui/components'

export default () => (
    <Space size="large">
        <Tag size="large" closable>
            Large
        </Tag>
        <Tag size="medium" closable>
            Medium
        </Tag>
        <Tag closable>default</Tag>
        <Tag size="small" closable>
            small
        </Tag>
    </Space>
)
```

## 异步关闭

如果 `onClose` 返回一个 `Promise`，可以异步关闭标签，并且在未关闭时展示加载效果。

```tsx
import React from 'react'
import { Tag } from '@excellent-ui/components'

export default () => (
    <Tag
        closeable
        onClose={() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() >= 0.5) {
                        resolve()
                    } else {
                        alert('Close failed')
                        reject()
                    }
                }, 3000)
            })
        }}
    >
        Tag 1
    </Tag>
)
```

## 带边框的标签

通过参数 bordered，可以显示带边框的标签。

```tsx
import React from 'react'
import { Tag } from '@excellent-ui/components'

export default () => <Tag bordered>Tag 1</Tag>
```

## API

**Tag**

| 参数名         | 说明                                                      | 类型                                                                | 默认值     |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------- | ---------- |
| className      | 自定义类名                                                | `string`                                                            | -          |
| style          | 自定义样式                                                | `CSSProperties`                                                     | -          |
| size           | 标签尺寸                                                  | `'small'` \| `'medium'` \| `'large'`                                | `'medium'` |
| bordered       | 是否显示边框                                              | `boolean`                                                           | -          |
| visible        | 是否可见（为 `false` 时隐藏）                             | `boolean`                                                           | -          |
| icon           | 前置图标节点                                              | `ReactNode`                                                         | -          |
| closeable      | 是否可关闭（显示关闭图标）                                | `boolean`                                                           | -          |
| closeIcon      | 自定义关闭图标节点                                        | `ReactNode`                                                         | -          |
| checkable      | 是否可选中（点击切换选中态）                              | `boolean`                                                           | -          |
| checked        | 指定初始选中状态（当前实现仅用于初始化）                  | `boolean`                                                           | -          |
| defaultChecked | 初始是否选中                                              | `boolean`                                                           | -          |
| onCheck        | 选中态改变时的回调，参数为最新选中状态                    | `(checked: boolean) => void`                                        | -          |
| onClose        | 点击关闭图标时触发，支持返回 `Promise` 控制异步关闭加载态 | `(e: React.MouseEvent<HTMLDivElement>) => Promise<unknown> \| void` | -          |
