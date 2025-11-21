import type { CSSProperties, HTMLAttributes } from 'react'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    style?: CSSProperties
    className?: string
}

export interface TypographyTextProps extends TypographyProps {
    bold?: boolean
    code?: boolean
    delete?: boolean
    disabled?: boolean
    underline?: boolean
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
    mark?: boolean | { color?: string }
}

export interface TypographyTitleProps extends TypographyProps, TypographyTextProps {
    heading?: 1 | 2 | 3 | 4 | 5 | 6
}

export interface TypographyParagraphProps extends TypographyProps, TypographyTextProps {
    spacing?: 'default' | 'tight'
    blockquote?: boolean
}