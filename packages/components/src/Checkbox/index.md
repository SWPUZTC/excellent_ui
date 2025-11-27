---
title: 复选框 Checkbox
group: 数据输入
---

# Checkbox 复选框

复选框是一种用于选择多个选项的交互组件。

---

## 基础用法

最基本的点击选中操作。

```tsx
import React from 'react'
import { Checkbox } from '@excellent-ui/components'

export default () => (
    <div>
        <Checkbox>Checkbox</Checkbox>
    </div>
)
```

## 禁用

禁用复选框。

```tsx
import React from 'react'
import { Checkbox } from '@excellent-ui/components'

export default () => (
    <div>
        <Checkbox disabled>Checkbox</Checkbox>
    </div>
)
```

## 受控

通过 `checked` 属性控制是否选中

```tsx
import React, { useState } from 'react'
import { Button, Space, Checkbox } from '@excellent-ui/components'

export default () => {
    const [checked, setChecked] = useState(false)
    return (
        <div>
            <Space size={40}>
                <Checkbox checked={checked}>Checkbox</Checkbox>
                <Checkbox checked={checked} disabled>
                    disabled Checkbox
                </Checkbox>
            </Space>
            <div style={{ marginTop: 30 }}>
                <Button
                    type="primary"
                    onClick={() => {
                        setChecked(!checked)
                    }}
                >
                    {checked ? 'unCheck' : 'Check'}
                </Button>
            </div>
        </div>
    )
}
```

## 复选框组

生成复选框组。设置 `direction="vertical"` 可以展示竖向的复选框组

```tsx
import React from 'react'
import { Button, Checkbox } from '@excellent-ui/components'
const CheckboxGroup = Checkbox.Group
const options = [
    {
        label: 'Option 1',
        value: '1'
    },
    {
        label: 'Option 2',
        value: '2',
        disabled: true
    },
    {
        label: 'Option 3',
        value: '3'
    },
    {
        label: 'Option 4',
        value: '4'
    }
]
export default () => (
    <div>
        <CheckboxGroup options={['Option A', 'Option B', 'Option C']} style={{ display: 'block', marginBottom: 16 }} />

        <CheckboxGroup options={options} defaultValue={['1', '3']} style={{ display: 'block', marginBottom: 20 }} />

        <CheckboxGroup direction="vertical" options={['Option A', 'Option B', 'Option C']} />
    </div>
)
```

## 自定义 Icon

通过 `icon` 属性自定义选中态图标。

```tsx
import React from 'react'
import { Checkbox } from '@excellent-ui/components'
import { IconAt } from '@arco-design/web-react/icon'

export default () => (
    <div>
        <Checkbox icon={<IconAt />}>Checkbox</Checkbox>
    </div>
)
```

## API

**Checkbox**

| 参数名         | 说明                       | 类型                                                           | 默认值 |
| -------------- | -------------------------- | -------------------------------------------------------------- | ------ |
| checked        | 受控：是否选中             | `boolean`                                                      | -      |
| defaultChecked | 非受控：初始是否选中       | `boolean`                                                      | -      |
| disabled       | 是否禁用                   | `boolean`                                                      | -      |
| error          | 错误状态样式               | `boolean`                                                      | -      |
| icon           | 自定义选中态图标           | `ReactNode`                                                    | -      |
| className      | 自定义类名                 | `string`                                                       | -      |
| style          | 自定义样式                 | `CSSProperties`                                                | -      |
| value          | 选项值                     | `T`                                                            | -      |
| onChange       | 变化回调（选中与原生事件） | `(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void` | -      |

**Checkbox.Group**

| 参数名       | 说明                                 | 类型                                                                            | 默认值         |
| ------------ | ------------------------------------ | ------------------------------------------------------------------------------- | -------------- |
| direction    | 排列方向                             | `'horizontal'` \| `'vertical'`                                                  | `'horizontal'` |
| disabled     | 是否禁用组内所有选项                 | `boolean`                                                                       | -              |
| value        | 受控：当前选中值列表                 | `T[]`                                                                           | -              |
| defaultValue | 非受控：初始选中值列表               | `T[]`                                                                           | `[]`           |
| onChange     | 变化回调（原生事件与当前选中值数组） | `(e: ChangeEvent<HTMLInputElement>, value: T[]) => void`                        | -              |
| options      | 选项列表（简写或对象）               | `(T \| { label: ReactNode, value: T, disabled?: boolean, icon?: ReactNode })[]` | -              |
| className    | 自定义类名                           | `string`                                                                        | -              |
| style        | 自定义样式                           | `CSSProperties`                                                                 | -              |
