import type { CSSProperties } from "react";
type ResponsiveValue<T> = {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    xxl?: T;
}


export interface GridProps {
    collapsed?: boolean;
    collapsedRows?: number;
    className?: string;
    colGap?: number | ResponsiveValue<number>;
    cols?: number | ResponsiveValue<number>;
    rowGap?: number | ResponsiveValue<number>;
    style?: CSSProperties;
}

export interface GridRowProps {
    className?: string;
    style?: CSSProperties;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
    gutter?: number | ResponsiveValue<number | [number, number]> | [number, number];
}

export interface GridColProps extends ResponsiveValue<number | { offset?: number; order?: number; span?: number; flex?: string | number | "auto" | "none"; }> {
    className?: string;
    style?: CSSProperties;
    offset?: number;
    order?: number;
    span?: number;
    flex?: string | number | "auto" | "none";
}

export interface GridItemProps {
    className?: string;
    style?: CSSProperties;
    offset?: number | ResponsiveValue<number>;
    span?: number | ResponsiveValue<number>;
}