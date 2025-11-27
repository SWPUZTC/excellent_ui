import Col from './col'
import Row from './row'
import GridItem from './griditem'
import { GridProps } from './type'
import { useBreakPoint, GridContext } from '@excellent-ui/hooks'
import { getBreakPoint, resolveItemData } from '@excellent-ui/utils'
import classNames from 'classnames'
import './index.scss'
import { get } from 'lodash'
import {
    useMemo,
    type CSSProperties,
    type PropsWithChildren,
    cloneElement,
    type ReactElement,
    Children,
    isValidElement,
    type ReactNode
} from 'react'

const Grid = (props: PropsWithChildren<GridProps>) => {
    const { className, style, rowGap = 0, colGap = 0, children, cols = 24, collapsed = false, collapsedRows = 1 } = props
    const childrenArray = Children.toArray(children)
    const breakpoints = useBreakPoint()

    const getCols = useMemo(() => {
        if (typeof cols === 'number') return cols
        return getBreakPoint(breakpoints, cols) || 24
    }, [cols, breakpoints])

    const getRowGap = useMemo(() => {
        if (typeof rowGap === 'number') return rowGap
        return getBreakPoint(breakpoints, rowGap) || 0
    }, [rowGap, breakpoints])

    const getColGap = useMemo(() => {
        if (typeof colGap === 'number') return colGap
        return getBreakPoint(breakpoints, colGap) || 0
    }, [colGap, breakpoints])

    const totalCells = getCols * collapsedRows
    let currentCell = 0
    const visibleChildren = [] as { child: ReactNode; visible: boolean }[]
    if (!collapsed) visibleChildren.push(...childrenArray.map(child => ({ child, visible: true })))
    else {
        for (const child of childrenArray) {
            if (!isValidElement(child) || get(child, 'type.__TYPE__') !== 'GRID_ITEM') continue
            const { span } = resolveItemData(getCols, get(child, 'props', {}) as { span: number; offset: number })
            if (currentCell + span <= totalCells) {
                visibleChildren.push({ child, visible: true })
                currentCell += span
            } else {
                visibleChildren.push({ child, visible: false })
            }
        }
    }

    const GridStyle: CSSProperties = {
        ...style,
        gridGap: `${getRowGap}px ${getColGap}px`,
        gridTemplateColumns: `repeat(${getCols}, minmax(0, 1fr))`
    }
    return (
        <>
            <GridContext.Provider value={{ rowGap: getRowGap, colGap: getColGap, cols: getCols }}>
                <div className={classNames(className, 'ex-grid')} style={GridStyle}>
                    {visibleChildren.map(item => {
                        if (item.visible) return item.child
                        else {
                            const child = item.child as ReactElement
                            return cloneElement(child, {
                                style: { display: 'none' }
                            } as PropsWithChildren)
                        }
                    })}
                </div>
            </GridContext.Provider>
        </>
    )
}

Grid.Row = Row
Grid.Col = Col
Grid.GridItem = GridItem

export default Grid
