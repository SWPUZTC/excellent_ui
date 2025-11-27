import type { CSSProperties, HTMLAttributes } from "react"

interface LayoutProps extends HTMLAttributes<HTMLElement> {
    className?: string
    style?: CSSProperties
}

interface LayoutFooterProps extends HTMLAttributes<HTMLElement> {
    className?: string
    style?: CSSProperties
}

interface LayoutHeaderProps extends HTMLAttributes<HTMLElement> {
    className?: string
    style?: CSSProperties
}

interface LayoutContextProps extends HTMLAttributes<HTMLElement> {
    className?: string
    style?: CSSProperties
}

interface LayoutSiderProps extends HTMLAttributes<HTMLElement> {
    className?: string
    style?: CSSProperties
    collapsed?: boolean // 侧边栏是否收起
    collapsible?: boolean // 侧边栏是否可收起
    onCollapse?: (collapsed: boolean) => void // 侧边栏收起状态改变时的回调
    reverseArrow?: boolean // 侧边栏是否反向箭头方向
    collapsedWidth?: number // 侧边栏收起宽度
    width?: number
    resize?: CSSProperties['resize']
}

export type { LayoutProps, LayoutFooterProps, LayoutHeaderProps, LayoutContextProps, LayoutSiderProps }
