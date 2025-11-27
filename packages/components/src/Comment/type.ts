import type { ReactNode, CSSProperties } from 'react'

type CommentAlign =
    | {
        datetime?: 'left' | 'right'
        actions?: 'left' | 'right'
    }
    | 'left'
    | 'right'

export interface CommentProps {
    className?: string
    style?: CSSProperties
    datetime?: ReactNode
    content?: ReactNode
    avatar?: ReactNode
    author?: ReactNode
    actions?: ReactNode
    align?: CommentAlign
}
