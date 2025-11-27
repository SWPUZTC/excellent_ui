import { useMemo, type PropsWithChildren } from 'react'
import { GridItemProps } from './type'
import { useBreakPoint } from '@excellent-ui/hooks'
import { useGridContext } from '@excellent-ui/hooks'
import { getBreakPoint, resolveItemData } from '@excellent-ui/utils'

const GridItem = (props: PropsWithChildren<GridItemProps>) => {
    const { className, style, span = 1, offset = 0, children } = props
    const breakpoints = useBreakPoint()
    const { colGap, cols } = useGridContext()

    const gridSpan = useMemo(() => {
        if (typeof span === 'number') return span
        return getBreakPoint(breakpoints, span) || 1
    }, [span, breakpoints])

    const getOffset = useMemo(() => {
        if (typeof offset === 'number') return offset
        return getBreakPoint(breakpoints, offset) || 0
    }, [offset, breakpoints])

    const itemData = useMemo(() => {
        return resolveItemData(cols, {
            span: gridSpan,
            offset: getOffset
        })
    }, [gridSpan, getOffset, cols])

    const getMarginLeft = useMemo(() => {
        const { offset, span } = itemData
        if (offset > 0) {
            const oneSpan = `(100% - ${colGap * (span - 1)}px) / ${span}`
            return {
                marginLeft: `calc((${oneSpan} * ${offset}) + ${colGap * offset}px)`
            }
        }
        return {}
    }, [itemData, colGap])
    return (
        <div
            className={className}
            style={{
                ...style,
                gridColumn: `span ${itemData.span} / span ${gridSpan}`,
                ...getMarginLeft
            }}
        >
            {children}
        </div>
    )
}
// 导出类型
GridItem.__TYPE__ = 'GRID_ITEM'
export default GridItem
