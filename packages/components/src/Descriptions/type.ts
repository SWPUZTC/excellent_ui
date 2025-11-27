import type { CSSProperties, ReactNode, HTMLAttributes, Key } from "react";

type ResponsiveValue<T> = {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    xxl?: T;
}

export type DataItem = {
    key?: Key
    label?: ReactNode
    value?: ReactNode
    span?: number
}

export interface DescriptionsProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    border?: boolean
    layout?: 'vertical' | 'horizontal' | 'inline-vertical' | 'inline-horizontal'
    size?: 'small' | 'medium' | 'large'
    tableLayout?: 'fixed' | 'auto'
    title?: ReactNode
    className?: string
    columns?: number | ResponsiveValue<number>
    data?: DataItem[]
    labelStyle?: CSSProperties
    style?: CSSProperties
    valueStyle?: CSSProperties
}