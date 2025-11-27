---
title: 返回顶部 BackTop
group: 其他
---

# BackTop 回到顶部

可一键返回顶部的按钮。

---

## 基础用法

当滚动到一定高度的时候，在右下角会出现一个返回顶部的按钮。

```tsx
import React from 'react'
import { BackTop, Button, Typography } from '@excellent-ui/components'
const { Paragraph } = Typography

export default () => {
    return (
        <div style={{ position: 'relative', padding: '8px 12px' }}>
            <BackTop style={{ position: 'absolute' }} visibleHeight={30} target={() => document.getElementById('custom_backtop')}>
                <Button type="primary" iconOnly style={{ width: 40, height: 40 }}>
                    UP
                </Button>
            </BackTop>
            <div id="custom_backtop" style={{ height: 300, overflow: 'auto' }}>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
                <Paragraph>This is the content</Paragraph>
            </div>
        </div>
    )
}
```

## API

**BackTop**

| 参数名        | 说明                       | 类型                        | 默认值         |
| ------------- | -------------------------- | --------------------------- | -------------- |
| visibleHeight | 触发返回顶部按钮的滚动高度 | `number`                    | `400`          |
| className     | 自定义类名                 | `string`                    | -              |
| style         | 自定义样式                 | `CSSProperties`             | -              |
| onClick       | 点击返回顶部时的回调函数   | `() => void`                | -              |
| target        | 滚动的目标元素             | `() => HTMLElement\|Window` | `() => window` |
