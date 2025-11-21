---
title: 排版 Typography
group: 通用
---

# 排版 Typography

用于展示标题、段落、文本内容。

---

## 组合使用

排版组件用于展示标题、段落、文本内容，这里展示了排版的组合使用。

```tsx
import React from 'react'
import { Typography } from '@excellent-ui/components'
const { Title, Paragraph, Text } = Typography

export default () => {
    return (
        <Typography style={{ marginTop: -40 }}>
            <Title>Design system</Title>
            <Paragraph>
                A design is a plan or specification for the construction of an object or system or for the implementation of an activity or
                process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design
                expresses the process of developing a design.
            </Paragraph>
            <Paragraph>
                In some cases, the direct construction of an object without an explicit prior plan (such as in craftwork, some engineering,
                coding, and graphic design) may also be considered
                <Text bold>to be a design activity.</Text>
            </Paragraph>
            <Title heading={2}>ArcoDesign</Title>
            <Paragraph>
                The ArcoDesign component library defines a set of default particle variables, and a custom theme is to{' '}
                <Text mark>customize</Text> and <Text underline>overwrite</Text> this variable list.
            </Paragraph>
            <Paragraph blockquote>
                A design is a plan or specification for the construction of an object or system or for the implementation of an activity or
                process, or the result of that plan or specification in the form of a <Text code>prototype</Text>, <Text code>product</Text>{' '}
                or
                <Text code>process</Text>. The verb to design expresses the process of developing a design.
            </Paragraph>
            <Paragraph mark underline delete>
                A design is a plan or specification for the construction of an object or system or for the implementation of an activity or
                process.
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>
                        Architectural blueprints
                        <ul>
                            <li>Architectural blueprints</li>
                        </ul>
                    </li>
                    <li>Engineering drawings</li>
                    <li>Business processes</li>
                </ul>
            </Paragraph>
            <Paragraph>
                <ol>
                    <li>Architectural blueprints</li>
                    <li>Engineering drawings</li>
                    <li>Business processes</li>
                </ol>
            </Paragraph>
        </Typography>
    )
}
```

## 标题

展示不同级别的标题。

```tsx
import React from 'react'
import { Typography } from '@excellent-ui/components'

export default () => (
    <Typography>
        <Typography.Title heading={1}>H1. The Pragmatic Romanticism</Typography.Title>
        <Typography.Title heading={2}>H2. The Pragmatic Romanticism</Typography.Title>
        <Typography.Title heading={3}>H3. The Pragmatic Romanticism</Typography.Title>
        <Typography.Title heading={4}>H4. The Pragmatic Romanticism</Typography.Title>
        <Typography.Title heading={5}>H5. The Pragmatic Romanticism</Typography.Title>
        <Typography.Title heading={6}>H6. The Pragmatic Romanticism</Typography.Title>
    </Typography>
)
```

## 文本

不同样式的文本以及超链接组件。

```tsx
import React from 'react'
import { Typography } from '@excellent-ui/components'

export default () => (
    <div style={{ display: 'flex', gap: 20 }}>
        <Typography.Text>Arco Design</Typography.Text>
        <Typography.Text type="secondary">Secondary</Typography.Text>
        <Typography.Text type="primary">Primary</Typography.Text>
        <Typography.Text type="success">Success</Typography.Text>
        <Typography.Text type="warning">Warning</Typography.Text>
        <Typography.Text type="error">Error</Typography.Text>
        <Typography.Text bold>Bold</Typography.Text>
        <Typography.Text disabled>Disabled</Typography.Text>
        <Typography.Text mark>Mark</Typography.Text>
        <Typography.Text underline>Underline</Typography.Text>
        <Typography.Text delete>Line through</Typography.Text>
        <Typography.Text code>Code snippet</Typography.Text>
    </div>
)
```

## 段落

展示段落文本。

```tsx
import React from 'react'
import { Typography } from '@excellent-ui/components'
const { Title, Paragraph } = Typography

export default () => (
    <Typography>
        <Title heading={5}>Default</Title>
        <Paragraph>
            A design is a plan or specification for the construction of an object or system or for the implementation of an activity or
            process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design
            expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan
            (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity.
        </Paragraph>
        <Title heading={5}>Secondary</Title>
        <Paragraph type="secondary">
            A design is a plan or specification for the construction of an object or system or for the implementation of an activity or
            process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design
            expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan
            (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity.
        </Paragraph>
        <Title heading={5}>Spacing default</Title>
        <Paragraph>
            A design is a plan or specification for the construction of an object or system or for the implementation of an activity or
            process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design
            expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan
            (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity.
        </Paragraph>
        <Title heading={5}>Spacing tight</Title>
        <Paragraph type="secondary" spacing="tight">
            A design is a plan or specification for the construction of an object or system or for the implementation of an activity or
            process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design
            expresses the process of developing a design.
        </Paragraph>
    </Typography>
)
```

## API

**Typography**

| 参数名    | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| className | 自定义类名 | `string`        | -      |
| style     | 自定义样式 | `CSSProperties` | -      |

**Typography.Title**

| 参数名    | 说明           | 类型                                                             | 默认值 |
| --------- | -------------- | ---------------------------------------------------------------- | ------ |
| bold      | 是否加粗       | `boolean`                                                        | -      |
| code      | 是否显示为代码 | `boolean`                                                        | -      |
| delete    | 是否删除线     | `boolean`                                                        | -      |
| heading   | 标题级别       | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                                     | `1`    |
| disabled  | 是否禁用       | `boolean`                                                        | -      |
| mark      | 是否标记       | `boolean \| { color: string }`                                   | -      |
| type      | 文本类型       | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | -      |
| underline | 是否下划线     | `boolean`                                                        | -      |
| className | 自定义类名     | `string`                                                         | -      |
| style     | 自定义样式     | `CSSProperties`                                                  | -      |

**Typography.Paragraph**

| 参数名     | 说明                                                                                                  | 类型                                                             | 默认值    |
| ---------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------- |
| bold       | 是否加粗                                                                                              | `boolean`                                                        | -         |
| code       | 是否显示为代码                                                                                        | `boolean`                                                        | -         |
| blockquote | 是否引用块                                                                                            | `boolean`                                                        | -         |
| spacing    | 段落的的行高，长文本(大于5行)的时候推荐使用默认行高，短文本(小于等于3行)推荐使用 `tight 紧密的行高。` | `default \| tight`                                               | `default` |
| delete     | 是否删除线                                                                                            | `boolean`                                                        | -         |
| disabled   | 是否禁用                                                                                              | `boolean`                                                        | -         |
| mark       | 是否标记                                                                                              | `boolean \| { color: string }`                                   | -         |
| type       | 文本类型                                                                                              | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | -         |
| underline  | 是否下划线                                                                                            | `boolean`                                                        | -         |
| className  | 自定义类名                                                                                            | `string`                                                         | -         |
| style      | 自定义样式                                                                                            | `CSSProperties`                                                  | -         |

**Typography.Text**

| 参数名    | 说明           | 类型                                                             | 默认值 |
| --------- | -------------- | ---------------------------------------------------------------- | ------ |
| bold      | 是否加粗       | `boolean`                                                        | -      |
| code      | 是否显示为代码 | `boolean`                                                        | -      |
| delete    | 是否删除线     | `boolean`                                                        | -      |
| disabled  | 是否禁用       | `boolean`                                                        | -      |
| mark      | 是否标记       | `boolean \| { color: string }`                                   | -      |
| type      | 文本类型       | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | -      |
| underline | 是否下划线     | `boolean`                                                        | -      |
| className | 自定义类名     | `string`                                                         | -      |
| style     | 自定义样式     | `CSSProperties`                                                  | -      |
