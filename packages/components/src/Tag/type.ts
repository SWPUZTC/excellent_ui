import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    style?: CSSProperties
    checkable?: boolean
    checked?: boolean
    closeable?: boolean
    defaultChecked?: boolean
    visible?: boolean
    bordered?: boolean
    size?: 'small' | 'medium' | 'large'
    closeIcon?: ReactNode
    icon?: ReactNode
    onCheck?: (checked: boolean) => void
    onClose?: (e: React.MouseEvent<HTMLDivElement>) => Promise<unknown> | void
}