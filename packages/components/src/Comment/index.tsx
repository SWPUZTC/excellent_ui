import { PropsWithChildren } from 'react'
import { CommentProps } from './type'
import classNames from 'classnames'
import './index.scss'

const Comment = (props: PropsWithChildren<CommentProps>) => {
    const { className, style, datetime, content, avatar, author, actions, align, children } = props
    const getAlignStyle = () => {
        if (!align) return {}
        else if (align === 'left' || align === 'right')
            return {
                datetime: align,
                actions: align
            }
        else {
            return {
                datetime: align.datetime ? align.datetime : 'left',
                actions: align.actions ? align.actions : 'left'
            }
        }
    }
    return (
        <>
            <div className={classNames(className, 'ex-comment')} style={style}>
                <div className={classNames('ex-comment-avatar')}>{avatar}</div>
                <div className={classNames('ex-comment-inner')}>
                    <div className={classNames('ex-comment-inner-content')}>
                        <div
                            className={classNames('ex-comment-title')}
                            style={{
                                justifyContent: getAlignStyle().datetime === 'right' ? 'space-between' : 'flex-start'
                            }}
                        >
                            <span className={classNames('ex-comment-author')}>{author}</span>
                            <span className={classNames('ex-comment-datetime')}>{datetime}</span>
                        </div>
                        <div className={classNames('ex-comment-content')}>{content}</div>
                        <div
                            className={classNames('ex-comment-actions')}
                            style={{
                                justifyContent: getAlignStyle().actions === 'right' ? 'flex-end' : 'flex-start'
                            }}
                        >
                            {actions}
                        </div>
                    </div>
                    <div className={classNames('ex-comment-inner-comment')}>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Comment
