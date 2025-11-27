import type { ReactNode, CSSProperties, MouseEvent } from 'react'
interface AvatarProps {
    className?: string
    style?: CSSProperties
    shape?: 'circle' | 'square'
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
    triggerType?: 'mask' | 'button'
    triggerStyle?: CSSProperties
    triggerIcon?: ReactNode
    size?: number
    children?: ReactNode
    autoFix?: boolean
}

export interface AvatarGroupProps {
    className?: string
    style?: CSSProperties
    children?: ReactNode
    size?: number
    shape?: 'circle' | 'square'
    maxCount?: number
    zindexAscend?: boolean
    autoFix?: boolean
    maxStyle?: CSSProperties
}

export default AvatarProps
