---
title: 卡片 Card
group: 数据展示
---

# Card 卡片

将信息分类后分标题、详情等区域聚合展现，一般作为简洁介绍或者信息的大盘和入口。

---

## 基础用法

常规的内容容器，可承载文字、列表、图片、段落，常用于模块划分和内容概览。

```tsx
import React from 'react'
import { Card, Link } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex' }}>
        <Card style={{ width: 360 }} title="Arco Card" extra={<Link>More</Link>}>
            ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world. Toutiao started out as a
            news recommendation engine and gradually evolved into a platform delivering content in various formats.
        </Card>
    </div>
)
```

## 鼠标悬浮样式

指定 hoverable 来为卡片添加鼠标悬浮样式，同时你可以通过样式覆盖来自定义悬浮样式。

```tsx
import React from 'react'
import { Card, Link, Space } from '@excellent-ui/components'

export default () => (
    <Space>
        <Card style={{ width: 360 }} title="Arco Card" hoverable extra={<Link>More</Link>}>
            Card content
            <br />
            Card content
        </Card>
        <Card style={{ width: 360 }} className="card-custom-hover-style" title="Custom hover style" hoverable extra={<Link>More</Link>}>
            Card content <br /> Card content
        </Card>
    </Space>
)
```

## 无边框卡片

设置 bordered 为 false 来使用无边框卡片。

```tsx
import React from 'react'
import { Card, Link, Space } from '@excellent-ui/components'

export default () => (
    <Space
        style={{
            padding: 40,
            backgroundColor: 'var(--color-fill-2)'
        }}
        size="large"
    >
        <Card style={{ width: 360 }} title="Arco Card" extra={<Link>More</Link>} bordered={false}>
            Card content
            <br />
            Card content
        </Card>
        <Card style={{ width: 360 }} title="Hover me" hoverable extra={<Link>More</Link>} bordered={false}>
            Card content
            <br />
            Card content
        </Card>
    </Space>
)
```

## 栅格卡片

在系统概览页面常常和栅格进行配合。

```tsx
import React from 'react'
import { Grid, Card, Link } from '@excellent-ui/components'
const { Row, Col } = Grid
const extra = <Link>More</Link>

export default () => (
    <div
        style={{
            boxSizing: 'border-box',
            width: '100%',
            padding: 40,
            backgroundColor: 'var(--color-fill-2)'
        }}
    >
        <Row gutter={20} style={{ marginBottom: 20 }}>
            <Col span={8}>
                <Card
                    title="Arco Card"
                    extra={extra}
                    bordered={false}
                    style={{
                        width: '100%'
                    }}
                >
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Arco Card" extra={extra} bordered={false} style={{ width: '100%' }}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Arco Card" extra={extra} bordered={false} style={{ width: '100%' }}>
                    Card content
                </Card>
            </Col>
        </Row>
        <Row gutter={20}>
            <Col span={16}>
                <Card title="Arco Card" extra={extra} bordered={false} style={{ width: '100%' }}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Arco Card" extra={extra} bordered={false} style={{ width: '100%' }}>
                    Card content
                </Card>
            </Col>
        </Row>
    </div>
)
```

## 内部卡片

卡片中可以嵌套其他卡片组件。

```tsx
import React from 'react'
import { Card, Link } from '@excellent-ui/components'

export default () => (
    <Card title="Arco Card">
        <Card style={{ marginBottom: 20 }} title="Inner Card Title" extra={<Link>More</Link>}>
            Inner Card Content
        </Card>
        <Card title="Inner Card Title" extra={<Link>More</Link>}>
            Inner Card Content
        </Card>
    </Card>
)
```

## 更灵活的内容展示

支持更加灵活的内容（封面、头像、 标题、描述信息）

```tsx
import React from 'react'
import { Card } from '@excellent-ui/components'

export default () => (
    <Card
        hoverable
        style={{ width: 360 }}
        cover={
            <div style={{ height: 204, overflow: 'hidden' }}>
                <img
                    style={{ width: '100%', transform: 'translateY(-20px)' }}
                    alt="dessert"
                    src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                />
            </div>
        }
    >
        Card content <br /> Card content
    </Card>
)
```

## API

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| title | 卡片标题 | `string` \| `ReactNode` | - |
| extra | 卡片右上角的操作区域 | `string` \| `ReactNode` | - |
| bordered | 是否有边框 | `boolean` | `true` |
| hoverable | 鼠标悬浮时是否可浮起 | `boolean` | `false` |
| size | 卡片尺寸 | `'default'` \| `'small'` | `'default'` |
| cover | 卡片封面 | `ReactNode` | - |
| actions | 卡片底部的操作组 | `ReactNode[]` | - |
| headerStyle | 卡片头部的自定义样式 | `CSSProperties` | - |
| bodyStyle | 卡片内容区域的自定义样式 | `CSSProperties` | - |
