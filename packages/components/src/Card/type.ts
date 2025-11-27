import type { HTMLAttributes, CSSProperties, ReactNode } from 'react'

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    style?: CSSProperties
    className?: string
    children?: ReactNode
    bordered?: boolean
    hoverable?: boolean
    size?: 'default' | 'small'
    title?: string | ReactNode
    extra?: string | ReactNode
    cover?: ReactNode
    actions?: ReactNode[]
    headerStyle?: CSSProperties
    bodyStyle?: CSSProperties
}
