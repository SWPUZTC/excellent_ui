---
title: 骨架屏 Skeleton
group: 反馈
---

# Skeleton 骨架屏

骨架屏是一种占位组件，用于在数据加载完成前展示。

---

## 基础用法

骨架屏的基本使用

```tsx
import React from 'react'
import { Skeleton } from '@excellent-ui/components'

export default () => <Skeleton></Skeleton>
```

## 文本行数和宽度

设置文本行数及文本宽度。

```tsx
import React from 'react'
import { Skeleton } from '@excellent-ui/components'

export default () => (
    <Skeleton
        text={{
            rows: 3,
            width: ['100%', 600, 400]
        }}
        image
    ></Skeleton>
)
```

## 动画

骨架屏显示动画效果。

```tsx
import React from 'react'
import { Skeleton, Switch, Typography, Avatar } from '@excellent-ui/components'
import { useState } from 'react'

export default () => {
    const [loading, setLoading] = useState(true)

    const onChange = checked => {
        setLoading(checked)
    }

    return (
        <div>
            <div style={{ marginBottom: 40 }}>
                <Typography.Text style={{ margin: '0 8px' }}>Animation</Typography.Text>
                <Switch style={{ verticalAlign: 'middle' }} size="small" onChange={onChange} checked={loading} />
            </div>
            <Skeleton loading={loading} text={{ width: '90%' }} image={{ shape: 'circle' }} animation>
                <div style={{ display: 'flex' }}>
                    <Avatar size={50} style={{ margin: '0 20px' }}>
                        Arco
                    </Avatar>
                    <Typography>
                        <Typography.Paragraph style={{ margin: 0 }}>This is content, this is content, this is content</Typography.Paragraph>
                        <Typography.Paragraph style={{ margin: 0 }}>This is content, this is content</Typography.Paragraph>
                        <Typography.Paragraph style={{ margin: 0 }}>This is content, this is content</Typography.Paragraph>
                    </Typography>
                </div>
            </Skeleton>
        </div>
    )
}
```

## API

**Skeleton**

| 参数名     | 说明                                                  | 类型                                               | 默认值    |
| ---------- | ----------------------------------------------------- | -------------------------------------------------- | --------- |
| loading    | 是否处于加载中；为 `false` 且有 `children` 时展示内容 | `boolean`                                          | `true`    |
| animation  | 是否开启动画效果                                      | `boolean`                                          | `true`    |
| image      | 是否显示头像占位，或传入配置对象                      | `boolean` \| `SkeletonImageProps`                  | `false`   |
| text       | 是否显示文本占位，或传入配置对象                      | `boolean` \| `SkeletonTextProps`                   | `true`    |
| className  | 容器类名                                              | `string`                                           | -         |
| style      | 容器样式                                              | `CSSProperties`                                    | -         |

**SkeletonImageProps**

| 参数名    | 说明                       | 类型                                  | 默认值     |
| --------- | -------------------------- | ------------------------------------- | ---------- |
| shape     | 头像形状                   | `'circle'` \| `'square'`             | `'circle'` |
| size      | 尺寸（预设或数值）         | `'small'` \| `'default'` \| `'large'` \| `number` | `'default'` |
| className | 头像占位节点类名           | `string`                              | -          |
| style     | 头像占位节点样式           | `CSSProperties`                       | -          |

**SkeletonTextProps**

| 参数名    | 说明                                   | 类型                                   | 默认值        |
| --------- | -------------------------------------- | -------------------------------------- | ------------- |
| rows      | 文本行数                               | `number`                                | `3`           |
| width     | 每行宽度，可传数组分别控制每一行       | `number` \| `string` \| `(number \| string)[]` | 未指定时最后一行约 `60%`，其余 `100%` |
| className | 文本占位容器类名                       | `string`                                | -             |
| style     | 文本占位容器样式                       | `CSSProperties`                         | -             |
