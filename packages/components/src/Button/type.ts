import { HTMLAttributes } from "react";
import type { ReactNode, CSSProperties, MouseEvent } from "react";

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type' | 'prefix' | 'suffix'> {
    disabled?: boolean;
    loading?: boolean;
    htmlType?: 'button' | 'submit' | 'reset';
    size?: 'mini' | 'small' | 'medium' | 'large';
    prefix?: ReactNode;
    suffix?: ReactNode;
    status?: 'warning' | 'danger' | 'success' | 'default';
    type?: 'primary' | 'secondary' | 'text' | 'outline';
    className?: string;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}