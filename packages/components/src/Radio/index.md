---
title: 单选框 Radio
group: 数据输入
---

# Radio 单选框

单选框是一种选择组件，用户可以从多个选项中选择一个。

---

## 基础用法

基础单选框

```tsx
import React from 'react'
import { Space, Radio } from '@excellent-ui/components'

export default () => (
    <Space size={40}>
        <Radio>Radio</Radio>
        <Radio checked disabled>
            Disabled Radio
        </Radio>
    </Space>
)
```

## 单选框组

单选组的用法。有两种用法，可以通过 `children` 的方式或者 `options` 数组的方式。

```tsx
import React from 'react'
import { Radio } from '@excellent-ui/components'
const RadioGroup = Radio.Group

export default () => (
    <div>
        <RadioGroup defaultValue="a" style={{ marginBottom: 20 }}>
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio value="c">C</Radio>
            <Radio disabled value="d">
                D
            </Radio>
        </RadioGroup>
        <br />
        <RadioGroup options={['A', 'B', 'C', 'D']} style={{ marginBottom: 20 }} />
        <br />
        <RadioGroup
            options={[
                {
                    label: 'A',
                    value: 'a'
                },
                {
                    label: 'B',
                    value: 'b'
                },
                {
                    label: 'C',
                    value: 'c'
                },
                {
                    label: 'D',
                    value: 'd',
                    disabled: true
                }
            ]}
        />
    </div>
)
```

## 竖直单选组

设置 `direction="vertical"` 可以展示竖直的单选组。

```tsx
import React from 'react'
import { Radio } from '@excellent-ui/components'
const RadioGroup = Radio.Group

export default () => (
    <div>
        <RadioGroup direction="vertical" defaultValue="a">
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio value="c">C</Radio>
            <Radio disabled value="d">
                D
            </Radio>
        </RadioGroup>
    </div>
)
```

## 按钮类型

指定 `type=button`，单选框会展示为按钮样式。

```tsx
import React from 'react'
import { Radio } from '@excellent-ui/components'
const RadioGroup = Radio.Group

export default () => (
    <div>
        <RadioGroup type="button" name="lang" defaultValue="Guangzhou" style={{ marginRight: 20, marginBottom: 20 }}>
            <Radio value="Beijing">Beijing</Radio>
            <Radio value="Shanghai">Shanghai</Radio>
            <Radio disabled value="Guangzhou">
                Guangzhou
            </Radio>
            <Radio value="Shenzhen">Shenzhen</Radio>
        </RadioGroup>
    </div>
)
```

## 加载状态

按钮可以设置为加载中状态，加载中状态下按钮不可点击。

```tsx
import React from 'react'
import { Radio } from '@excellent-ui/components'
const RadioGroup = Radio.Group
const options = [
    {
        value: 'Beijing',
        label: 'Beijing'
    },
    {
        value: 'Shanghai',
        label: 'Shanghai'
    },
    {
        value: 'Guangzhou',
        label: 'Guangzhou',
        disabled: true
    },
    {
        value: 'Shenzhen',
        label: 'Shenzhen'
    }
]

export default () => (
    <div>
        <RadioGroup options={options} size="mini" type="button" defaultValue="Beijing" style={{ marginBottom: 20 }} />
        <br />
        <RadioGroup options={options} size="small" type="button" defaultValue="Beijing" style={{ marginBottom: 20 }} />
        <br />
        <RadioGroup options={options} size="default" type="button" defaultValue="Beijing" style={{ marginBottom: 20 }} />
        <br />
        <RadioGroup options={options} size="large" type="button" defaultValue="Beijing" style={{ marginBottom: 20 }} />
    </div>
)
```

## API

**Radio**

| 参数名         | 说明                     | 类型                                   | 默认值 |
| -------------- | ------------------------ | -------------------------------------- | ------ |
| checked        | 受控：是否选中           | `boolean`                              | -      |
| defaultChecked | 非受控：初始是否选中     | `boolean`                              | -      |
| disabled       | 是否禁用                 | `boolean`                              | -      |
| className      | 自定义类名               | `string`                               | -      |
| style          | 自定义样式               | `CSSProperties`                        | -      |
| value          | 选项值                   | `string \| number \| T`                | -      |
| onChange       | 变化回调（选中状态与值） | `(checked: boolean, value: T) => void` | -      |

**Radio.Group**

| 参数名       | 说明                                | 类型                                                                         | 默认值         |
| ------------ | ----------------------------------- | ---------------------------------------------------------------------------- | -------------- |
| name         | 原生 `name`，用于表单               | `string`                                                                     | -              |
| direction    | 排列方向                            | `'horizontal'` \| `'vertical'`                                               | `'horizontal'` |
| size         | 按钮尺寸（仅 `type='button'` 生效） | `'small'` \| `'medium'` \| `'large'`                                         | `'medium'`     |
| type         | 展示类型                            | `'radio'` \| `'button'`                                                      | `'radio'`      |
| disabled     | 是否禁用组内所有选项                | `boolean`                                                                    | -              |
| value        | 受控：当前选中值                    | `string \| number \| T`                                                      | -              |
| defaultValue | 非受控：初始选中值                  | `string \| number \| T`                                                      | -              |
| onChange     | 变化回调（原生事件与当前值）        | `(e: ChangeEvent<HTMLInputElement>, value: T) => void`                       | -              |
| options      | 选项列表                            | `(string \| number \| { label: ReactNode, value: T, disabled?: boolean })[]` | -              |
| className    | 自定义类名                          | `string`                                                                     | -              |
| style        | 自定义样式                          | `CSSProperties`                                                              | -              |
