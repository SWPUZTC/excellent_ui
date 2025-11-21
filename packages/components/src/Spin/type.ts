import { HTMLAttributes } from "react";
import type { CSSProperties } from "react";

export interface SpinProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'size'> {
    block?: boolean;
    dot?: boolean;
    loading?: boolean;
    size?: number;
    tip?: string;
    className?: string; 
    style?: CSSProperties;
}