import { HTMLAttributes } from "react";
import type { ReactNode, CSSProperties } from "react";


export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
    hoverable?: boolean;
    status?: 'warning' | 'danger' | 'success' | 'default';
    className?: string;
    icon?: ReactNode;
    style?: CSSProperties;
}