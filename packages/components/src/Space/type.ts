import type { CSSProperties, HTMLAttributes, ReactNode } from "react"
type SpaceSize = 'mini' | 'small' | 'medium' | 'large' | number

interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
    direction?: 'vertical' | 'horizontal'
    size?: SpaceSize
    split?: ReactNode
    align?: 'start' | 'end' | 'center' | 'baseline'
    className?: string
    style?: CSSProperties
    wrap?: boolean
}

export default SpaceProps
