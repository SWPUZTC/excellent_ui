import type { CSSProperties } from 'react'

export interface SkeletonImageProps {
    shape?: 'circle' | 'square'
    size?: 'small' | 'default' | 'large' | number
    className?: string
    style?: CSSProperties
}

/**
 * 文本段落占位配置
 */
export interface SkeletonTextProps {
    rows?: number // 行数，默认 3
    width?: number | string | (number | string)[] // 每一行的宽度，可以是数组
    className?: string
    style?: CSSProperties
}

export interface SkeletonProps {
    loading?: boolean // 是否处于加载中，如果是 false 则展示 children
    animation?: boolean // 是否开启动画
    image?: boolean | SkeletonImageProps // 是否显示头像占位，或者配置对象
    text?: boolean | SkeletonTextProps // 是否显示文本占位，或者配置对象
    className?: string
    style?: CSSProperties
}