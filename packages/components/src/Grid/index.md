---
title: 栅格 Grid
group: 布局
---

# Grid 栅格

栅格可以有效的保证页面的一致性、逻辑性、加强团队协作和统一。

---

## 基础用法

展示了最基本的 24 等分应用。

```tsx
import React from 'react'
import { Grid } from '@excellent-ui/components'
import './index.scss'
const { Row, Col } = Grid

export default () => (
    <div style={{ width: '100%' }} className="grid-demo-background">
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
            <Col span={24}>
                <div>24 - 100%</div>
            </Col>
        </Row>
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
            <Col span={12}>
                <div>12 - 50%</div>
            </Col>
            <Col span={12}>
                <div>12 - 50%</div>
            </Col>
        </Row>
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
            <Col span={8}>
                <div>8 - 33.33%</div>
            </Col>
            <Col span={8}>
                <div>8 - 33.33%</div>
            </Col>
            <Col span={8}>
                <div>8 - 33.33%</div>
            </Col>
        </Row>
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
            <Col span={6}>
                <div>6 - 25%</div>
            </Col>
            <Col span={6}>
                <div>6 - 25%</div>
            </Col>
            <Col span={6}>
                <div>6 - 25%</div>
            </Col>
            <Col span={6}>
                <div>6 - 25%</div>
            </Col>
        </Row>
        <Row className="grid-demo">
            <Col span={4}>
                <div>4 - 16.66%</div>
            </Col>
            <Col span={4}>
                <div>4 - 16.66%</div>
            </Col>
            <Col span={4}>
                <div>4 - 16.66%</div>
            </Col>
            <Col span={4}>
                <div>4 - 16.66%</div>
            </Col>
            <Col span={4}>
                <div>4 - 16.66%</div>
            </Col>
            <Col span={4}>
                <div>4 - 16.66%</div>
            </Col>
        </Row>
    </div>
)
```

## 栅格偏移

指定 `offset` 可以对栅格进行平移操作。

```tsx
import React from 'react'
import { Grid } from '@excellent-ui/components'
import './index.scss'
const { Row, Col } = Grid

export default () => {
    return (
        <div style={{ width: '100%' }}>
            <Row className="grid-demo" style={{ marginBottom: 16, backgroundColor: 'var(--color-fill-2)' }}>
                <Col span={8}>col - 8</Col>
                <Col span={8} offset={8}>
                    col - 8 | offset - 8
                </Col>
            </Row>
            <Row className="grid-demo" style={{ marginBottom: 16, backgroundColor: 'var(--color-fill-2)' }}>
                <Col span={6} offset={8}>
                    col - 6 | offset - 8
                </Col>
                <Col span={6} offset={4}>
                    col - 6 | offset - 4
                </Col>
            </Row>
            <Row className="grid-demo" style={{ backgroundColor: 'var(--color-fill-2)' }}>
                <Col span={12} offset={8}>
                    col - 12 | offset - 8
                </Col>
            </Row>
        </div>
    )
}
```

## 栅格排序

指定 `order` 可以对栅格进行排序。

```tsx
import React from 'react'
import { Grid } from '@excellent-ui/components'
import './index.scss'
const { Row, Col } = Grid

export default () => {
    return (
        <div style={{ width: '100%' }}>
            <Row className="grid-demo" style={{ marginBottom: 16, backgroundColor: 'var(--color-fill-2)' }}>
                <Col span={8} order={16}>
                    col - 8 | order - 16
                </Col>
                <Col span={16} order={8}>
                    col - 16 | order - 8
                </Col>
            </Row>
        </div>
    )
}
```

## 区块间隔

通过在 `Row` 上指定 `gutter` 可以增加栅格的区域间隔。

```tsx
import React from 'react'
import { Grid } from '@excellent-ui/components'
import './index.scss'
const { Row, Col } = Grid

export default () => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Row className="grid-gutter-demo" gutter={24}>
                <Col span={12}>
                    <div>col - 12</div>
                </Col>
                <Col span={12}>
                    <div>col - 12</div>
                </Col>
            </Row>
            <Row className="grid-gutter-demo" gutter={{ md: 8, lg: 24, xl: 32 }}>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
            </Row>
            <Row className="grid-gutter-demo" gutter={[24, 12]}>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
                <Col span={6}>
                    <div>col - 6</div>
                </Col>
            </Row>
        </div>
    )
}
```

## 水平布局

通过 `justify` 来进行水平布局。

```tsx
import React from 'react'
import { Grid, Typography } from '@excellent-ui/components'
import './index.scss'
const { Row, Col } = Grid

export default () => {
    return (
        <div style={{ width: '100%' }}>
            <p
                style={{
                    fontSize: 12,
                    color: '#141f33'
                }}
            >
                <Typography.Text>容器左排列</Typography.Text>
            </p>
            <Row
                className="grid-demo"
                justify="start"
                style={{
                    marginBottom: 40,
                    background: 'var(--color-fill-2)'
                }}
            >
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
            </Row>
            <p
                style={{
                    fontSize: 12,
                    color: '#141f33'
                }}
            >
                <Typography.Text>容器居中排列</Typography.Text>
            </p>
            <Row
                className="grid-demo"
                justify="center"
                style={{
                    marginBottom: 40,
                    background: 'var(--color-fill-2)'
                }}
            >
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
            </Row>
            <p
                style={{
                    fontSize: 12,
                    color: '#141f33'
                }}
            >
                <Typography.Text>容器右排列</Typography.Text>
            </p>
            <Row
                className="grid-demo"
                justify="end"
                style={{
                    marginBottom: 40,
                    background: 'var(--color-fill-2)'
                }}
            >
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
            </Row>
            <p
                style={{
                    fontSize: 12,
                    color: '#141f33'
                }}
            >
                <Typography.Text>容器分散排列</Typography.Text>
            </p>
            <Row
                className="grid-demo"
                justify="space-around"
                style={{
                    marginBottom: 40,
                    background: 'var(--color-fill-2)'
                }}
            >
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
            </Row>
            <p
                style={{
                    fontSize: 12,
                    color: '#141f33'
                }}
            >
                <Typography.Text>容器等距排列</Typography.Text>
            </p>
            <Row
                className="grid-demo"
                justify="space-between"
                style={{
                    marginBottom: 40,
                    background: 'var(--color-fill-2)'
                }}
            >
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
                <Col span={4}>
                    <div>col - 4</div>
                </Col>
            </Row>
        </div>
    )
}
```

## 垂直布局

通过 `align` 来进行垂直布局。

```tsx
import React from 'react'
import { Grid, Typography } from '@excellent-ui/components'
import './index.scss'
const { Row, Col } = Grid

export default () => {
    return (
        <div style={{ width: '100%' }}>
            <p
                style={{
                    fontSize: 12,
                    color: '#141f33'
                }}
            >
                <Typography.Text>垂直顶部对齐</Typography.Text>
            </p>
            <Row
                className="grid-demo"
                align="start"
                style={{
                    marginBottom: 40,
                    backgroundColor: 'var(--color-fill-2)'
                }}
            >
                <Col span={6} style={{ height: 90, lineHeight: '90px' }}>
                    <div>col - 6</div>
                </Col>
                <Col span={6} style={{ height: 48, lineHeight: '48px' }}>
                    <div>col - 6</div>
                </Col>
                <Col span={6} style={{ height: 120, lineHeight: '120px' }}>
                    <div>col - 6</div>
                </Col>
                <Col span={6} style={{ height: 60, lineHeight: '60px' }}>
                    <div>col - 6</div>
                </Col>
            </Row>
            <p
                style={{
                    fontSize: 12,
                    color: '#141f33'
                }}
            >
                <Typography.Text>垂直居中对齐</Typography.Text>
            </p>
            <Row
                className="grid-demo"
                align="center"
                style={{
                    marginBottom: 40,
                    backgroundColor: 'var(--color-fill-2)'
                }}
            >
                <Col span={6} style={{ height: 90, lineHeight: '90px' }}>
                    <div>col - 6</div>
                </Col>
                <Col span={6} style={{ height: 48, lineHeight: '48px' }}>
                    <div>col - 6</div>
                </Col>
                <Col span={6} style={{ height: 120, lineHeight: '120px' }}>
                    <div>col - 6</div>
                </Col>
                <Col span={6} style={{ height: 60, lineHeight: '60px' }}>
                    <div>col - 6</div>
                </Col>
            </Row>
            <p
                style={{
                    fontSize: 12,
                    color: '#141f33'
                }}
            >
                <Typography.Text>垂直底部对齐</Typography.Text>
            </p>
            <Row
                className="grid-demo"
                align="end"
                style={{
                    marginBottom: 40,
                    backgroundColor: 'var(--color-fill-2)'
                }}
            >
                <Col span={6} style={{ height: 90, lineHeight: '90px' }}>
                    <div>col - 6</div>
                </Col>
                <Col span={6} style={{ height: 48, lineHeight: '48px' }}>
                    <div>col - 6</div>
                </Col>
                <Col span={6} style={{ height: 120, lineHeight: '120px' }}>
                    <div>col - 6</div>
                </Col>
                <Col span={6} style={{ height: 60, lineHeight: '60px' }}>
                    <div>col - 6</div>
                </Col>
            </Row>
        </div>
    )
}
```

## 响应式布局

预置六种响应尺寸, 分别为 `xs`, `sm`, `md`, `lg`, `xl`, `xxl`。

```tsx
import React from 'react'
import { Grid } from '@excellent-ui/components'
import './index.scss'
const { Row, Col } = Grid

export default () => {
    return (
        <Row className="grid-demo">
            <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
                Col
            </Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4} xxl={8}>
                Col
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
                Col
            </Col>
        </Row>
    )
}
```

## 其他属性的响应式

`span`, `offset`, `order` 属性可以内嵌到 `xs`, `sm`, `md`, `lg`, `xl`, `xxl` 对象中使用。
比如 `xs={8}` 相当于 `xs={{ span: 8 }}`。

```tsx
import React from 'react'
import { Grid } from '@excellent-ui/components'
import './index.scss'
const { Row, Col } = Grid

export default () => {
    return (
        <div style={{ width: '100%' }}>
            <Row className="grid-demo">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    Col
                </Col>
            </Row>
        </div>
    )
}
```

## Flex用法

通过设置 `Col` 组件的 `flex` 属性，可以任意配置 `flex` 布局。

```tsx
import React from 'react'
import { Grid } from '@excellent-ui/components'
import './index.scss'
const { Row, Col } = Grid

export default () => (
    <div style={{ width: '100%' }}>
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
            <Col flex="100px">
                <div>100px</div>
            </Col>
            <Col flex="auto">
                <div>auto</div>
            </Col>
        </Row>
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
            <Col flex="100px">
                <div>100px</div>
            </Col>
            <Col flex="auto">
                <div>auto</div>
            </Col>
            <Col flex="100px">
                <div>100px</div>
            </Col>
        </Row>
        <Row className="grid-demo" style={{ marginBottom: 16 }}>
            <Col flex={3}>
                <div>3 / 12</div>
            </Col>
            <Col flex={4}>
                <div>4 / 12</div>
            </Col>
            <Col flex={5}>
                <div>5 / 12</div>
            </Col>
        </Row>
    </div>
)
```

## Grid 布局

基于 CSS 的 Grid 布局实现的布局组件，支持折叠，并且可以设置后缀节点，后缀节点会显示在一行的结尾。

```tsx
import React from 'react'
import { Grid, Button } from '@excellent-ui/components'
import './index.scss'
const { GridItem } = Grid
import { useState } from 'react'

export default () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div style={{ width: '100%' }}>
            <div style={{ marginBottom: '20px' }}>
                <span>折叠：</span>
                <Button onClick={() => setCollapsed(!collapsed)}>{collapsed ? '展开' : '折叠'}</Button>
            </div>
            <Grid collapsed={collapsed} cols={3} colGap={12} rowGap={16} className="grid-demo-grid">
                <GridItem className="demo-item">item</GridItem>
                <GridItem className="demo-item">item</GridItem>
                <GridItem className="demo-item">item</GridItem>
                <GridItem className="demo-item" offset={1}>
                    item | offset - 1
                </GridItem>
                <GridItem className="demo-item">item</GridItem>
                <GridItem className="demo-item" span={3}>
                    item | span - 3
                </GridItem>
                <GridItem className="demo-item">item</GridItem>
                <GridItem className="demo-item">item</GridItem>
            </Grid>
        </div>
    )
}
```

## 响应式的 Grid 布局

Grid 组件的响应式配置格式为 `{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }`。

```tsx
import React from 'react'
import { Grid } from '@excellent-ui/components'
import './index.scss'
const { GridItem } = Grid

export default () => (
    <div style={{ width: '100%' }}>
        <Grid cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }} colGap={12} rowGap={16} className="grid-responsive-demo">
            <GridItem className="demo-item">item</GridItem>
            <GridItem className="demo-item">item</GridItem>
            <GridItem className="demo-item">item</GridItem>
            <GridItem className="demo-item">item</GridItem>
            <GridItem className="demo-item">item</GridItem>
            <GridItem className="demo-item">item</GridItem>
        </Grid>
    </div>
)
```

## API

**Grid**

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| cols | 栅格的总列数，支持响应式 | `number` \| `ResponsiveValue<number>` | `24` |
| rowGap | 行间距，支持响应式 | `number` \| `ResponsiveValue<number>` | `0` |
| colGap | 列间距，支持响应式 | `number` \| `ResponsiveValue<number>` | `0` |
| collapsed | 是否折叠 | `boolean` | `false` |
| collapsedRows | 折叠时显示的行数 | `number` | `1` |

**Grid.Row**

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| align | 垂直对齐方式 | `'start'` \| `'center'` \| `'end'` \| `'stretch'` | `'start'` |
| justify | 水平对齐方式 | `'start'` \| `'center'` \| `'end'` \| `'space-around'` \| `'space-between'` | `'start'` |
| gutter | 栅格间隔，`[水平, 垂直]`，支持响应式 | `number` \| `[number, number]` \| `ResponsiveValue<number \| [number, number]>` | `0` |

**Grid.Col**

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| span | 栅格占据的列数 | `number` | - |
| offset | 栅格左侧的偏移格数 | `number` | `0` |
| order | 栅格顺序 | `number` | `0` |
| flex | 自定义 flex 布局 | `string` \| `number` \| `'auto'` \| `'none'` | `'none'` |
| xs | ` <576px` 响应式栅格 | `number` \| `{ span?: number; offset?: number; order?: number; }` | - |
| sm | ` >=576px` 响应式栅格 | `number` \| `{ span?: number; offset?: number; order?: number; }` | - |
| md | ` >=768px` 响应式栅格 | `number` \| `{ span?: number; offset?: number; order?: number; }` | - |
| lg | ` >=992px` 响应式栅格 | `number` \| `{ span?: number; offset?: number; order?: number; }` | - |
| xl | ` >=1200px` 响应式栅格 | `number` \| `{ span?: number; offset?: number; order?: number; }` | - |
| xxl | ` >=1600px` 响应式栅格 | `number` \| `{ span?: number; offset?: number; order?: number; }` | - |

**Grid.GridItem**

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| span | 占据的列数，支持响应式 | `number` \| `ResponsiveValue<number>` | `1` |
| offset | 左侧的偏移列数，支持响应式 | `number` \| `ResponsiveValue<number>` | `0` |
