---
title: 固定定位 Affix
group: 其他
---

# Affix 固定定位

固定定位组件，用于在滚动过程中固定元素在视口内。

---

## 基础用法

基本用法，不设置固定位置时，当页面滚动元素不可见时，元素固定在页面最顶部。

```tsx
import React from 'react'
import { Button, Affix } from '@excellent-ui/components'

export default () => (
    <Affix>
        <Button type="primary">Affix Top</Button>
    </Affix>
)
```

## 顶部固定

元素向上滚动到距顶部一定距离时固定。

```tsx
import React from 'react'
import { Button, Affix } from '@excellent-ui/components'

export default () => (
    <Affix offsetTop={80}>
        <Button type="primary">Affix Top to 80px</Button>
    </Affix>
)
```

## 底部固定

元素向下滚动到距底部一定距离时固定。

```tsx
import React from 'react'
import { Button, Affix } from '@excellent-ui/components'

export default () => (
    <Affix offsetBottom={120}>
        <Button type="primary">Affix Bottom to 120px</Button>
    </Affix>
)
```

## 固定状态改变回调

当固定状态发生改变时，会触发事件。

```tsx
import React from 'react'
import { Button, Affix } from '@excellent-ui/components'

export default () => (
    <Affix>
        <Button type="primary">Affix Top</Button>
    </Affix>
)
```

## 滚动容器

用 `target` 设置需要监听其滚动事件的元素，默认为 `window`。

`target` 指定为非 `window` 容器时，可能会出现 `target` 外层元素滚动，固钉元素跑出滚动容器的问题。这个时候可以通过传入 `targetContainer` 设置 `target` 外层的滚动元素。Affix 会监听该元素的滚动事件来实时更新滚钉元素的位置。也可以在业务代码中自己监听 `target` 外层滚动元素的 `scroll` 事件。

```tsx
import React from 'react'
import { Button, Affix } from '@excellent-ui/components'
import { useRef } from 'react'

export default () => {
    const affixRef = useRef(null)
    const containerRef = useRef(null)
    return (
        <div id="container" style={{ height: 200, overflow: 'auto' }} ref={containerRef}>
            <div
                style={{
                    height: 400,
                    backgroundColor: 'var(--color-fill-2)',
                    backgroundImage: `
            linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0),
            linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0)`,
                    backgroundPosition: `0 0, 15px 15px`,
                    backgroundSize: `30px 30px`,
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                <Affix target={() => containerRef.current} offsetTop={20} style={{ margin: 40 }}>
                    <Button type="primary">Affix in scrolling container</Button>
                </Affix>
            </div>
        </div>
    )
}
```

## API

**Button**

| 参数名    | 说明                     | 类型                                                   | 默认值      |
| --------- | ------------------------ | ------------------------------------------------------ | ----------- |
| type      | 按钮类型                 | `'primary' \| 'secondary' \| 'text' \| 'outline'`      | `'primary'` |
| size      | 按钮尺寸                 | `'mini' \| 'small' \| 'medium' \| 'large'`             | `'medium'`  |
| status    | 按钮状态                 | `'warning' \| 'danger' \| 'success' \| 'default'`      | `'default'` |
| disabled  | 是否禁用按钮             | `boolean`                                              | -           |
| loading   | 是否加载中状态           | `boolean`                                              | -           |
| htmlType  | 原生 button 的 type 属性 | `'button' \| 'submit' \| 'reset'`                      | `'button'`  |
| prefix    | 按钮前缀图标             | `ReactNode`                                            | -           |
| suffix    | 按钮后缀图标             | `ReactNode`                                            | -           |
| className | 自定义类名               | `string`                                               | -           |
| style     | 自定义样式               | `CSSProperties`                                        | -           |
| onClick   | 点击按钮时触发的回调函数 | `(event: React.MouseEvent<HTMLButtonElement>) => void` | -           |
