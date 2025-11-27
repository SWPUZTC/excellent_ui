---
title: 评论 Comment
group: 数据展示
---

# Comment 评论

评论是一种用户与系统或其他用户进行互动的方式，通常用于社交媒体、博客、论坛等平台。

---

## 基础用法

一个基本的评论组件，带有作者、头像、时间和操作。

```tsx
import React from 'react'
import { Button, Comment, Avatar } from '@excellent-ui/components'
import { IconHeart, IconHeartFill, IconStar, IconStarFill, IconMessage } from '@arco-design/web-react/icon'
import './index.scss'

export default () => {
    const [like, setLike] = React.useState()
    const [star, setStar] = React.useState()
    const actions = [
        <button className="custom-comment-action" key="heart" onClick={() => setLike(!like)}>
            {like ? <IconHeartFill style={{ color: '#f53f3f' }} /> : <IconHeart />}
            {83 + (like ? 1 : 0)}
        </button>,
        <button className="custom-comment-action" key="star" onClick={() => setStar(!star)}>
            {star ? <IconStarFill style={{ color: '#ffb400' }} /> : <IconStar />}
            {3 + (star ? 1 : 0)}
        </button>,
        <button className="custom-comment-action" key="reply">
            <IconMessage /> Reply
        </button>
    ]
    return (
        <Comment
            actions={actions}
            author="Socrates"
            avatar={
                <Avatar>
                    <img
                        alt="avatar"
                        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
                    />
                </Avatar>
            }
            content={<div>Comment body content.</div>}
            datetime="1 hour"
        />
    )
}
```

## 对齐

通过 `align` 属性可以设置 `datetime` 和 `actions` 的对齐方式。

```tsx
import React from 'react'
import { Button, Comment, Avatar } from '@excellent-ui/components'
import { IconHeart, IconHeartFill, IconStar, IconStarFill, IconMessage } from '@arco-design/web-react/icon'
import './index.scss'

export default () => {
    const [like, setLike] = React.useState(true)
    const [star, setStar] = React.useState(true)
    const actions = [
        <button className="custom-comment-action" key="heart" onClick={() => setLike(!like)}>
            {like ? <IconHeartFill style={{ color: '#f53f3f' }} /> : <IconHeart />}
            {83 + (like ? 1 : 0)}
        </button>,
        <button className="custom-comment-action" key="star" onClick={() => setStar(!star)}>
            {star ? <IconStarFill style={{ color: '#ffb400' }} /> : <IconStar />}
            {3 + (star ? 1 : 0)}
        </button>,
        <button className="custom-comment-action" key="reply">
            <IconMessage /> Reply
        </button>
    ]
    return (
        <Comment
            actions={actions}
            align="right"
            author="Balzac"
            avatar={
                <Avatar>
                    <img
                        alt="avatar"
                        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
                    />
                </Avatar>
            }
            content={
                <div>
                    A design is a plan or specification for the construction of an object or system or for the implementation of an activity
                    or process, or the result of that plan or specification in the form of a prototype, product or process.
                </div>
            }
            datetime="1 hour"
        />
    )
}
```

## 嵌套评论

Comments 组件可以嵌套。

```tsx
import React from 'react'
import { Button, Comment, Avatar } from '@excellent-ui/components'
import { IconMessage, IconHeart, IconStar } from '@arco-design/web-react/icon'

export default () => {
    const actions = (
        <span className="custom-comment-action">
            <IconMessage /> Reply
        </span>
    )
    return (
        <Comment
            actions={actions}
            author={'Socrates'}
            avatar={
                <Avatar>
                    <img
                        alt="avatar"
                        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
                    />
                </Avatar>
            }
            content={<div>Comment body content.</div>}
            datetime="1 hour"
        >
            <Comment
                actions={actions}
                author="Balzac"
                avatar={
                    <Avatar>
                        <img
                            alt="avatar"
                            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
                        />
                    </Avatar>
                }
                content={<div>Comment body content.</div>}
                datetime="1 hour"
            >
                <Comment
                    actions={actions}
                    author="Austen"
                    avatar={
                        <Avatar>
                            <img
                                alt="avatar"
                                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp"
                            />
                        </Avatar>
                    }
                    content={<div> Reply content </div>}
                    datetime="1 hour"
                />
                <Comment
                    actions={actions}
                    author="Plato"
                    avatar={
                        <Avatar>
                            <img
                                alt="avatar"
                                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                            />
                        </Avatar>
                    }
                    content={<div> Reply content </div>}
                    datetime="1 hour"
                />
            </Comment>
        </Comment>
    )
}
```


## API

**Comment**

| 参数名    | 说明                                                         | 类型                                                                                                  | 默认值  |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ------- |
| children  | 嵌套的子评论内容                                             | `ReactNode`                                                                                           | -       |
| className | 自定义类名                                                   | `string`                                                                                              | -       |
| style     | 自定义样式                                                   | `CSSProperties`                                                                                       | -       |
| avatar    | 头像节点                                                     | `ReactNode`                                                                                           | -       |
| author    | 作者名称或节点                                               | `ReactNode`                                                                                           | -       |
| datetime  | 时间信息节点                                                 | `ReactNode`                                                                                           | -       |
| content   | 评论正文内容                                                 | `ReactNode`                                                                                           | -       |
| actions   | 操作区（点赞、回复等），可为一个或多个节点                   | `ReactNode`                                                                                           | -       |
| align     | 对齐方式，可传 `'left'`、`'right'` 或对象分别控制 `datetime/actions` | `'left' \| 'right' \| { datetime?: 'left' \| 'right'; actions?: 'left' \| 'right' }`                 | `'left'` |

