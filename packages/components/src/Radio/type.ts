import type { HTMLAttributes, CSSProperties, ChangeEvent, ReactNode } from "react";
import { createContext } from 'react';
export interface RadioProps<T> extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
    className?: string
    style?: CSSProperties
    value?: T
    onChange?: (checked: boolean, value: T) => void
}

export type RadioGroupProps<T> = Omit<RadioProps<T>, 'value' | 'onChange'> & {
    name?: string
    direction?: 'vertical' | 'horizontal'
    size?: 'small' | 'medium' | 'large'
    type?: 'radio' | 'button'
    value?: T
    onChange?: (e: ChangeEvent<HTMLInputElement>, value: T) => void
    options?: (string | number | { label: ReactNode, value: T, disabled?: boolean })[]
}

export interface RadioContextProps<T> {
    groupValue?: T;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>, value: T) => void;
    disabled?: boolean;
    type?: 'radio' | 'button';
    size?: 'small' | 'medium' | 'large';
}

export const RadioContext = createContext<RadioContextProps<any> | null>(null);