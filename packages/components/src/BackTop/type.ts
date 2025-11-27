import type { CSSProperties, HTMLAttributes } from 'react'

export interface BackTopProps extends HTMLAttributes<HTMLDivElement> {
    visibleHeight?: number;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    target?: () => HTMLElement | Window;
}