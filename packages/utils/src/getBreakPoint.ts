type ResponsiveValue<T> = {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    xxl?: T;
}

const BREAK_POINTS: Required<ResponsiveValue<number>> = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600
}

const getBreakPoint = <T = number>(query: keyof ResponsiveValue<T> = 'xs', target: ResponsiveValue<T>) => {
    let final_key = 'xs' as keyof ResponsiveValue<T>
    Object.keys(target).forEach(item => {
        if (BREAK_POINTS[item as keyof typeof BREAK_POINTS] > BREAK_POINTS[query]) return
        final_key = item as keyof ResponsiveValue<T>
    })
    return target[final_key]
}

export default getBreakPoint