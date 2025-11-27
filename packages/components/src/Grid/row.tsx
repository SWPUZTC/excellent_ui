import { GridRowProps } from './type'
import { useBreakPoint } from '@excellent-ui/hooks'
import { useMemo, type PropsWithChildren, Children, cloneElement, type ReactElement, type CSSProperties } from 'react'
import classNames from 'classnames'

const BREAK_POINTS = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600
}

const Row = (props: PropsWithChildren<GridRowProps>) => {
    const { className, style, align = 'start', justify = 'start', gutter = 0, children } = props
    // 获取当前断点
    const currentBreakpoint = useBreakPoint()
    const RowGap = useMemo(() => {
        if (gutter === null) return [0, 0]
        // 数字：直接使用水平间距，垂直为 0
        if (typeof gutter === 'number') {
            return [gutter, 0]
        }
        if (Array.isArray(gutter)) {
            return gutter
        }
        // 响应式对象
        if (typeof gutter === 'object') {
            const currentValue = gutter[currentBreakpoint as keyof typeof gutter]
            // 注意：0 是有效值，必须用 !== undefined 判断
            if (currentValue !== undefined) {
                return Array.isArray(currentValue) ? currentValue : [currentValue as number, 0]
            }
            // 按断点顺序寻找不大于当前断点的最近值
            const keys = Object.keys(gutter)
            if (keys.length === 0) return [0, 0]
            const sorted = keys
                .filter(k => gutter[k as keyof typeof gutter] !== undefined)
                .sort((a, b) => BREAK_POINTS[a as keyof typeof BREAK_POINTS] - BREAK_POINTS[b as keyof typeof BREAK_POINTS])

            let bestKey: keyof typeof gutter | undefined
            for (const k of sorted) {
                if (BREAK_POINTS[k as keyof typeof BREAK_POINTS] <= BREAK_POINTS[currentBreakpoint]) {
                    bestKey = k as keyof typeof gutter
                } else {
                    break
                }
            }
            if (bestKey !== undefined) {
                const v = gutter[bestKey]
                return Array.isArray(v) ? v : [v as number, 0]
            }
            return [0, 0]
        }
        return [0, 0]
    }, [currentBreakpoint, gutter])
    const marginGap = useMemo(() => {
        return {
            margin: `-${RowGap[1] / 2}px -${RowGap[0] / 2}px`
        }
    }, [RowGap])

    return (
        <>
            <div
                className={classNames('ex-grid-row', className)}
                style={{ alignItems: align, justifyContent: justify, ...marginGap, ...style }}
            >
                {Children.map(children, (child, index) => {
                    return cloneElement(
                        child as ReactElement,
                        {
                            key: index,
                            style: {
                                ...(child as { props: { style: CSSProperties } }).props.style,
                                padding: `${RowGap[1] / 2}px ${RowGap[0] / 2}px`
                            }
                        } as PropsWithChildren
                    )
                })}
            </div>
        </>
    )
}

export default Row
