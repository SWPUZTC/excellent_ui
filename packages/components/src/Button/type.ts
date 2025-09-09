import React from 'react'

export default interface ButtonProps {
    type?: 'default' | 'primary'
    borderType?: 'solid' | 'dashed' | 'dotted'
    children: React.ReactNode
    style?: React.CSSProperties
    className?: string
    onClick?: (e: Event) => void
    disabled?: boolean
    icon?: React.ReactNode
    size?: 'mini' | 'small' | 'medium' | 'large' | 'extraLarge'
    status?: 'default' | 'success' | 'warning' | 'danger'
    htmlType?: 'button' | 'submit' | 'reset'
}
