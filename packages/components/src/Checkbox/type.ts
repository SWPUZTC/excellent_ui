import type { HTMLAttributes, CSSProperties, ChangeEvent, ReactNode } from "react";
import { createContext } from 'react';
export interface CheckboxProps<T> extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
    error?: boolean
    icon?: ReactNode
    className?: string
    style?: CSSProperties
    value?: T
    onChange?: (checked: boolean, e: ChangeEvent<HTMLInputElement>) => void
}

export type CheckboxGroupProps<T> = Omit<CheckboxProps<T>, 'value' | 'onChange' | 'checked' | 'defaultChecked' | 'error' | 'icon'> & {
    direction?: 'vertical' | 'horizontal'
    value?: T
    defaultValue?: T[]
    onChange?: (e: ChangeEvent<HTMLInputElement>, value: T[]) => void
    options?: (T | { label: ReactNode, value: T, disabled?: boolean, icon?: ReactNode })[]
}

export interface CheckboxContextProps<T> {
    groupValue?: T[];
    onChange?: (optionValue: T, checked: boolean, e: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    disabled?: boolean;
    inGroup: boolean;
}

export const CheckboxContext = createContext<CheckboxContextProps<any> | null>(null);
