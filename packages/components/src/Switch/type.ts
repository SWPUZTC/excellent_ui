import type { CSSProperties, ReactNode } from 'react'
export interface SwitchProps {
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
    loading?: boolean
    size?: 'small' | 'default'
    checkedIcon?: ReactNode
    checkedText?: ReactNode
    unCheckedIcon?: ReactNode
    unCheckedText?: ReactNode
    onChange?: (checked: boolean) => void
    className?: string
    style?: CSSProperties
}