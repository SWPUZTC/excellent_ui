---
title: 描述列表 Descriptions
group: 数据展示
---

# Descriptions 描述列表

描述列表组件用于展示一组相关的属性或信息。

---

## 基础用法

简单地成组展示多个只读字段，一般用于详情页的信息。

```tsx
import React from 'react'
import { Descriptions } from '@excellent-ui/components'

export default () => {
    const data = [
        {
            label: 'Name :',
            value: 'Socrates'
        },
        {
            label: 'Mobile :',
            value: '123-1234-1234'
        },
        {
            label: 'Residence :',
            value: 'Beijing'
        },
        {
            label: 'Hometown :',
            value: 'Beijing'
        },
        {
            label: 'Address :',
            value: 'Yingdu Building, Zhichun Road, Beijing'
        }
    ]
    return <Descriptions layout="inline-horizontal" title="User Info" data={data} />
}
```

## 单列样式

单列的描述列表样式。

```tsx
import React from 'react'
import { Descriptions } from '@excellent-ui/components'
const data = [
    {
        label: 'Name',
        value: 'Socrates'
    },
    {
        label: 'Mobile',
        value: '123-1234-1234'
    },
    {
        label: 'Residence',
        value: 'Beijing'
    },
    {
        label: 'Hometown',
        value: 'Beijing'
    },
    {
        label: 'Address',
        value: 'Yingdu Building, Zhichun Road, Beijing'
    }
]

export default () => (
    <div>
        <Descriptions columns={1} title="User Info" data={data} style={{ marginBottom: 20 }} labelStyle={{ paddingRight: 36 }} />
        <Descriptions columns={1} title="User Info" data={data} labelStyle={{ textAlign: 'right', paddingRight: 36 }} />
    </div>
)
```

## 标签文本对齐

标签文本可以设置左对齐右对齐，也可以设置垂直的排列方式。

```tsx
import React from 'react'
import { Descriptions } from '@excellent-ui/components'
const data = [
    {
        label: 'Name',
        value: 'Socrates'
    },
    {
        label: 'Mobile',
        value: '123-1234-1234'
    },
    {
        label: 'Residence',
        value: 'Beijing'
    },
    {
        label: 'Hometown',
        value: 'Beijing'
    },
    {
        label: 'Address',
        value: 'Yingdu Building, Zhichun Road, Beijing'
    }
]

export default () => (
    <div>
        <Descriptions colon=" :" title="User Info" data={data} labelStyle={{ textAlign: 'right' }} style={{ marginBottom: 20 }} />
        <Descriptions title="User Info" data={data} layout="inline-vertical" />
    </div>
)
```

## 不同排列模式

有水平排列、垂直排列、行内水平排列、行内垂直排列四种排列模式。

```tsx
import React from 'react'
import { Descriptions } from '@excellent-ui/components'
const data = [
    {
        label: 'Name',
        value: 'Socrates'
    },
    {
        label: 'Mobile',
        value: '123-1234-1234'
    },
    {
        label: 'Residence',
        value: 'Beijing'
    },
    {
        label: 'Hometown',
        value: 'Beijing'
    },
    {
        label: 'Date of Birth',
        value: '2020-05-15',
        span: 2
    },
    {
        label: 'Address',
        value: 'Yingdu Building, Zhichun Road, Beijing'
    }
]
const data2 = [
    {
        label: 'Name',
        value: 'Socrates'
    },
    {
        label: 'Hometown',
        value: 'Beijing'
    },
    {
        label: 'Mobile',
        value: '123-1234-1234'
    },
    {
        label: 'Date of Birth',
        value: '2020-05-15'
    },
    {
        label: 'Residence',
        value: 'Beijing'
    },
    {
        label: 'Gender',
        value: 'Male'
    },
    {
        label: 'Ethnicity',
        value: 'Han'
    },
    {
        label: 'Address',
        value: 'Yingdu Building, Zhichun Road, Beijing'
    }
]

export default () => (
    <div>
        <Descriptions title="Inline Horizontal" colon=":" data={data.slice(0, 5)} layout="inline-horizontal" style={{ marginBottom: 20 }} />
        <Descriptions title="Horizontal" data={data} layout="horizontal" border style={{ marginBottom: 20 }} />
        <Descriptions title="Vertical" data={data2} layout="vertical" border column={5} style={{ marginBottom: 20 }} />
        <Descriptions title="Inline Vertical" data={data2} layout="inline-vertical" border column={5} />
    </div>
)
```

## 不同尺寸

展示不同尺寸下的描述列表。

```tsx
import React, { useState } from 'react'
import { Descriptions, Button, Space } from '@excellent-ui/components'
const data = [
    {
        label: 'Name',
        value: 'Socrates'
    },
    {
        label: 'Mobile',
        value: '123-1234-1234'
    },
    {
        label: 'Residence',
        value: 'Beijing'
    },
    {
        label: 'Hometown',
        value: 'Beijing'
    },
    {
        label: 'Date of Birth',
        value: '2020-05-15',
        span: 2
    },
    {
        label: 'Address',
        value: 'Yingdu Building, Zhichun Road, Beijing'
    }
]

export default () => {
    const [size, setSize] = useState('medium')
    return (
        <div>
            <Space size={20} style={{ marginBottom: 20 }}>
                <Button type="primary" onClick={() => setSize('small')}>
                    Small
                </Button>
                <Button type="primary" onClick={() => setSize('medium')}>
                    Medium
                </Button>
                <Button type="primary" onClick={() => setSize('large')}>
                    Large
                </Button>
            </Space>
            <Descriptions border title="User Info" data={data} size={size} style={{ marginBottom: 20 }} />
            <Descriptions column={1} title="User Info" data={data} size={size} labelStyle={{ paddingRight: 40 }} />
        </div>
    )
}
```

## 响应式排列

支持响应式排列。

```tsx
import React from 'react'
import { Descriptions } from '@excellent-ui/components'
const data = [
    {
        label: 'Name',
        value: 'Socrates'
    },
    {
        label: 'Mobile',
        value: '123-1234-1234'
    },
    {
        label: 'Residence',
        value: 'Beijing'
    },
    {
        label: 'Hometown',
        value: 'Beijing'
    },
    {
        label: 'Date of Birth',
        value: '2020-05-15',
        span: 2
    },
    {
        label: 'Address',
        value: 'Yingdu Building, Zhichun Road, Beijing'
    }
]

export default () => (
    <Descriptions
        title="Responsive"
        data={data}
        border
        columns={{
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 4
        }}
    />
)
```

## API

**Descriptions**

| 参数名      | 说明                       | 类型                                                                                            | 默认值         |
| ----------- | -------------------------- | ----------------------------------------------------------------------------------------------- | -------------- |
| border      | 是否显示边框               | `boolean`                                                                                       | -              |
| layout      | 布局模式                   | `'horizontal'` \| `'vertical'` \| `'inline-horizontal'` \| `'inline-vertical'`                  | `'horizontal'` |
| size        | 尺寸                       | `'small'` \| `'medium'` \| `'large'`                                                            | `'medium'`     |
| tableLayout | 表格布局                   | `'fixed'` \| `'auto'`                                                                           | `'auto'`       |
| title       | 标题                       | `ReactNode`                                                                                     | -              |
| className   | 自定义类名                 | `string`                                                                                        | -              |
| style       | 自定义样式                 | `CSSProperties`                                                                                 | -              |
| columns     | 每行的列数；可传响应式对象 | `number` \| `{ xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }` | `3`            |
| data        | 数据项数组                 | `DataItem[]`                                                                                    | `[]`           |
| labelStyle  | 标签区域样式               | `CSSProperties`                                                                                 | -              |
| valueStyle  | 内容区域样式               | `CSSProperties`                                                                                 | -              |

**DataItem**

| 字段  | 说明     | 类型        |
| ----- | -------- | ----------- |
| key   | 唯一标识 | `Key`       |
| label | 标签     | `ReactNode` |
| value | 内容     | `ReactNode` |
| span  | 跨列数   | `number`    |

说明：

- 横向与纵向布局中，`span` 控制一项所占的列数（会自动按 `columns` 换行，并在末行补齐）。
- 行内布局忽略 `span`，每项占 1 列。
