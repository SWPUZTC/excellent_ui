import type { CSSProperties } from 'react'

export interface AffixProps {
    offsetTop?: number
    offsetBottom?: number
    className?: string
    style?: CSSProperties
    affixStyle?: CSSProperties
    affixClassName?: string
    onChange?: (affixed: boolean) => void
    target?: () => HTMLElement | Window
}