import type { CSSProperties } from 'react'

export interface BadgeProps {
    maxCount?: number
    text?: string
    count?: number
    color?: CSSProperties['color']
    className?: string
    style?: CSSProperties
    dotStyle?: CSSProperties
    dotClassName?: string
}