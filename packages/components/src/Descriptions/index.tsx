import { DescriptionsProps, DataItem } from './type'
import { useBreakPoint } from '@excellent-ui/hooks'
import { getBreakPoint } from '@excellent-ui/utils'
import classNames from 'classnames'
import { Fragment } from 'react'
import './index.scss'

const Descriptions = (props: DescriptionsProps) => {
    const {
        border,
        layout = 'horizontal',
        size = 'medium',
        tableLayout = 'auto',
        title,
        className,
        columns = 3,
        data = [],
        labelStyle,
        style,
        valueStyle,
        ...rest
    } = props

    // 获取总colspan
    const getTotalSpan = (data: DataItem[]) => {
        return Array.isArray(data) ? data.reduce((pre, cur) => pre + (cur.span || 1), 0) : 0
    }

    // 获取当前屏幕的breakpoint
    const currentBreakPoint = useBreakPoint()

    // 获取当前屏幕的columns
    const getColumns = () => {
        if (typeof columns === 'number') {
            return columns
        }
        return getBreakPoint(currentBreakPoint, columns) || 3
    }

    const getClassName = () => {
        return classNames(
            `ex-descriptions-${tableLayout}`,
            `ex-descriptions-${size}`,
            border && 'ex-descriptions-border',
            className,
            `ex-descriptions-${layout}`
        )
    }

    const getRenderData = (data: DataItem[]) => {
        const renderData: DataItem[][] = []
        const columns = getColumns()
        data.forEach(item => {
            const lastone = renderData[renderData.length - 1]
            const length = getTotalSpan(lastone)
            // 如果当前行没有数据，或者当前行数据的colspan等于columns，就新起一行
            if (!length || length === columns) {
                renderData.push([
                    {
                        ...item,
                        // 如果item的colspan大于columns，就将其 colspan 设为 columns
                        span: item.span ? (item.span > columns ? columns : item.span) : 1
                    }
                ])
            } else {
                // 如果当前行数据的colspan小于columns，就将item加入当前行
                lastone.push({
                    ...item,
                    span: item.span ? (item.span > columns ? columns : item.span) : 1
                })
            }
        })
        const lastone = renderData[renderData.length - 1]
        const length = getTotalSpan(lastone)
        // 如果最后一行数据的colspan小于columns，就将其 colspan 设为 columns
        if (length && length < columns) {
            const lastItem = lastone[lastone.length - 1]
            lastItem.span = columns - length + (lastItem.span || 1)
        }
        return renderData
    }

    const renderVertical = (cols: DataItem[], index: number) => {
        return (
            <Fragment key={index}>
                <tr className="ex-descriptions-row">
                    {cols.map((item, key) => (
                        <td
                            key={`${item.key || key}_label`}
                            style={labelStyle}
                            className="ex-descriptions-item-label"
                            colSpan={item.span || 1}
                        >
                            {item.label}
                        </td>
                    ))}
                </tr>
                <tr className="ex-descriptions-row">
                    {cols.map((item, key) => {
                        return (
                            <td
                                key={`${item.key || key}_value`}
                                className="ex-descriptions-item-value"
                                style={valueStyle}
                                colSpan={item.span || 1}
                            >
                                {item.value}
                            </td>
                        )
                    })}
                </tr>
            </Fragment>
        )
    }

    const renderHorizontal = (cols: DataItem[], index: number) => {
        return (
            <tr className="ex-descriptions-row" key={index}>
                {cols.map((item, key) => (
                    <Fragment key={`${item.key || key}_label`}>
                        <td style={labelStyle} className="ex-descriptions-item-label">
                            {item.label}
                        </td>
                        <td style={valueStyle} className="ex-descriptions-item-value" colSpan={item.span ? 2 * item.span - 1 : 1}>
                            {item.value}
                        </td>
                    </Fragment>
                ))}
            </tr>
        )
    }

    const renderInline = (cols: DataItem[], index: number) => {
        return (
            <tr className="ex-descriptions-row" key={index}>
                {cols.map((item, key) => (
                    <td key={item.key || key} className="ex-descriptions-item">
                        <div className="ex-descriptions-item-label-inline" style={labelStyle}>
                            {item.label}
                        </div>
                        <div className="ex-descriptions-item-value-inline" style={valueStyle}>
                            {item.value}
                        </div>
                    </td>
                ))}
            </tr>
        )
    }

    const renderChild = (cols: DataItem[], index: number) => {
        if (layout === 'inline-vertical' || layout === 'inline-horizontal') {
            return renderInline(cols, index)
        }
        return layout === 'vertical' ? renderVertical(cols, index) : renderHorizontal(cols, index)
    }

    return (
        <div className={getClassName()} {...rest} style={style}>
            {title && <div className="ex-descriptions-title">{title}</div>}
            <div className="ex-descriptions-body">
                <table className="ex-descriptions-table" cellSpacing={0} cellPadding={0}>
                    <tbody>{getRenderData(data).map((item, index) => renderChild(item, index))}</tbody>
                </table>
            </div>
        </div>
    )
}

export default Descriptions
