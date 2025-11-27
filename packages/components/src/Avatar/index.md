---
title: 头像 Avatar
group: 数据展示
---

# Avatar 头像

用作头像显示，可以为图片、图标或字符形式展示。

---

## 基础用法

头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。

```tsx
import React from 'react'
import { Avatar, Space } from '@excellent-ui/components'

export default () => (
    <Space size="large">
        <Avatar>A</Avatar>
        <Avatar style={{ backgroundColor: '#14a9f8' }}>Arco</Avatar>
        <Avatar style={{ backgroundColor: '#00d0b6' }}>Design</Avatar>
        <Avatar>
            <img
                alt="avatar"
                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            />
        </Avatar>
    </Space>
)
```

## 大小和形状

通过设置 `size` 字段，可以调节头像的大小，默认大小为 40px。设置 `shape` 字段，可以设置头像是圆形 (circle) 还是正方形 (square)。

```tsx
import React from 'react'
import { Avatar, Space } from '@excellent-ui/components'

export default () => (
    <Space size="large" direction="vertical">
        <Space size="large">
            <Avatar size={64}>Arco</Avatar>
            <Avatar size={40}>Arco</Avatar>
            <Avatar size={32}>Arco</Avatar>
            <Avatar size={24}>Arco</Avatar>
        </Space>
        <Space size="large">
            <Avatar size={64} shape="square">
                Arco
            </Avatar>
            <Avatar size={40} shape="square">
                Arco
            </Avatar>
            <Avatar size={32} shape="square">
                Arco
            </Avatar>
            <Avatar size={24} shape="square">
                Arco
            </Avatar>
        </Space>
    </Space>
)
```

## 头像组

使用 `Avatar.Group` 可以使用头像组功能，可通过 `size` 指定头像的大小。

```tsx
import React from 'react'
import { Avatar } from '@excellent-ui/components'
const AvatarGroup = Avatar.Group
export default () => (
    <div>
        <AvatarGroup size={32} style={{ margin: 10 }} maxCount={3}>
            <Avatar style={{ backgroundColor: '#7BC616' }}>A</Avatar>
            <Avatar style={{ backgroundColor: '#14C9C9' }}>B</Avatar>
            <Avatar style={{ backgroundColor: '#168CFF' }}>C</Avatar>
            <Avatar style={{ backgroundColor: '#FF7D00' }}>Arco</Avatar>
            <Avatar style={{ backgroundColor: '#FFC72E' }}>Design</Avatar>
        </AvatarGroup>
        <br />
        <AvatarGroup size={24} style={{ margin: 10 }}>
            <Avatar style={{ backgroundColor: '#7BC616' }}>A</Avatar>
            <Avatar style={{ backgroundColor: '#14C9C9' }}>B</Avatar>
            <Avatar style={{ backgroundColor: '#168CFF' }}>C</Avatar>
            <Avatar style={{ backgroundColor: '#FF7D00' }}>Arco</Avatar>
            <Avatar style={{ backgroundColor: '#FFC72E' }}>Design</Avatar>
        </AvatarGroup>
    </div>
)
```

## 交互按钮

可以通过 `triggerIcon` `triggerType` 来定制交互按钮，类型有 `mask (遮罩)` 和 `button (按钮)` 两种，通过 `onClick` 参数来添加回调。

```tsx
import React from 'react'
import { Avatar, Space } from '@excellent-ui/components'
import { IconCamera, IconEdit, IconUser } from '@arco-design/web-react/icon'

export default () => (
    <Space size="large">
        <Avatar
            triggerIcon={<IconCamera />}
            triggerIconStyle={{
                color: '#3491FA'
            }}
            autoFixFontSize={false}
            style={{
                backgroundColor: '#168CFF'
            }}
        >
            A
        </Avatar>
        <Avatar triggerIcon={<IconEdit />} style={{ backgroundColor: '#14C9C9' }}>
            <IconUser />
        </Avatar>
        <Avatar shape="square" triggerIcon={<IconEdit />} style={{ backgroundColor: '#FFC72E' }}>
            <IconUser />
        </Avatar>
        <Avatar triggerIcon={<IconCamera />} triggerType="mask">
            <img
                alt="avatar"
                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            />
        </Avatar>
    </Space>
)
```

## 自动调整字体大小

如果头像是文字的话，会自动调节字体大小，来适应头像框。

```tsx
import React, { useState } from 'react'
import { Avatar, Space, Button } from '@excellent-ui/components'

export default () => {
    const list = ['B', 'Arco', 'Design', 'Tom', 'AD']
    const [index, setIndex] = useState(0)
    return (
        <Space>
            <Avatar>{list[index]}</Avatar>
            <Button type="secondary" onClick={() => setIndex(index >= 4 ? 0 : index + 1)}>
                Change
            </Button>
        </Space>
    )
}
```

## API

**Avatar**

| 参数名       | 说明                               | 类型                                                | 默认值     |
| ------------ | ---------------------------------- | --------------------------------------------------- | ---------- |
| className    | 自定义类名                         | `string`                                            | -          |
| style        | 自定义样式                         | `CSSProperties`                                     | -          |
| shape        | 形状                               | `'circle'` \| `'square'`                            | `'circle'` |
| size         | 头像尺寸                           | `number`                                            | `40`       |
| children     | 头像内容（文本、图标或图片）       | `ReactNode`                                         | -          |
| triggerType  | 交互按钮类型                       | `'mask'` \| `'button'`                              | `'button'` |
| triggerIcon  | 交互按钮内容                       | `ReactNode`                                         | -          |
| triggerStyle | 交互按钮容器样式                   | `CSSProperties`                                     | -          |
| onClick      | 点击头像时触发的回调               | `(event: React.MouseEvent<HTMLDivElement>) => void` | -          |
| autoFix      | 是否自动根据文本内容缩放以适应容器 | `boolean`                                           | `true`     |

**Avatar.Group**

| 参数名       | 说明                                  | 类型                     | 默认值  |
| ------------ | ------------------------------------- | ------------------------ | ------- |
| children     | 子头像列表                            | `ReactNode`              | -       |
| size         | 统一头像尺寸（传给子项默认值）        | `number`                 | -       |
| shape        | 统一形状（传给子项默认值）            | `'circle'` \| `'square'` | -       |
| maxCount     | 最大展示数量，超过显示为“+N”          | `number`                 | -       |
| zindexAscend | 层级是否递增（true 时后面的在更上层） | `boolean`                | `false` |
| autoFix      | 统一文字自适应开关（传给子项默认值）  | `boolean`                | -       |
| className    | 容器类名                              | `string`                 | -       |
| style        | 容器样式                              | `CSSProperties`          | -       |
| maxStyle     | “+N” 合并头像的样式                   | `CSSProperties`          | -       |
