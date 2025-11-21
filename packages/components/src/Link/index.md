---
title: 链接 Link
group: 通用
---

# Link 链接

链接的基本样式。

---

## 基础用法

与按钮相比，链接不太突出，因此通常将其用作可选操作。

```tsx
import React from 'react'
import { Link } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        <Link href="#"> Link </Link>
        <Link href="#" disabled>
            Link
        </Link>
    </div>
)
```

## 其他状态

失败、警告、成功等其他状态下操作，可出现不同样式的链接。

```tsx
import React from 'react'
import { Link } from '@excellent-ui/components'

export default () => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 100px)',
            gridColumnGap: 24
        }}
    >
        <Link href="#" status="error">
            Error Link
        </Link>
        <Link href="#" status="error" disabled>
            Error Link
        </Link>
        <Link href="#" status="success">
            Success Link
        </Link>
        <Link href="#" status="success" disabled>
            Success Link
        </Link>
        <Link href="#" status="warning">
            Warning Link
        </Link>
        <Link href="#" status="warning" disabled>
            Warning Link
        </Link>
    </div>
)
```

## 图标

链接可以添加图标，图标会出现在链接文本的左侧。

```tsx
import React from 'react'
import { Link } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        <Link href="#" icon={<span>🔍</span>}>
            Link
        </Link>
    </div>
)
```

## 悬浮状态样式

可以通过 hoverable 属性设置是否在悬浮状态时隐藏底色。

```tsx
import React from 'react'
import { Link } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        <Link hoverable={false}> Link </Link>
        <Link hoverable={false} status="danger">
            Link
        </Link>
    </div>
)
```

## API

**Link**

| 参数名    | 说明                     | 类型                                              | 默认值      |
| --------- | ------------------------ | ------------------------------------------------- | ----------- |
| status    | 按钮状态                 | `'warning' \| 'danger' \| 'success' \| 'default'` | `'default'` |
| disabled  | 是否禁用按钮             | `boolean`                                         | -           |
| className | 自定义类名               | `string`                                          | -           |
| style     | 自定义样式               | `CSSProperties`                                   | -           |
| icon      | 链接图标                 | `ReactNode`                                       | -           |
| hoverable | 是否在悬浮状态时隐藏底色 | `boolean`                                         | `true`      |
