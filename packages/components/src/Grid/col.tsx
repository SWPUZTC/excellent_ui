import { GridColProps } from './type'
import { useBreakPoint } from '@excellent-ui/hooks'
import classNames from 'classnames'
import { useMemo, type PropsWithChildren } from 'react'
import { getBreakPoint } from '@excellent-ui/utils'

const Col = (props: PropsWithChildren<GridColProps>) => {
    const { offset, order, span = 24, className, flex, style, children } = props
    const currentBreakpoint = useBreakPoint()
    const colClassName = classNames('ex-grid-col', className)

    const bpMap = useMemo(
        () => ({
            ...(props.xs !== undefined ? { xs: props.xs } : {}),
            ...(props.sm !== undefined ? { sm: props.sm } : {}),
            ...(props.md !== undefined ? { md: props.md } : {}),
            ...(props.lg !== undefined ? { lg: props.lg } : {}),
            ...(props.xl !== undefined ? { xl: props.xl } : {}),
            ...(props.xxl !== undefined ? { xxl: props.xxl } : {})
        }),
        [props]
    )

    // 获取真正的偏移量
    const getOffset = useMemo(() => {
        const res = getBreakPoint(currentBreakpoint, bpMap)
        if (typeof res === 'number') {
            return offset || 0
        } else {
            return res?.offset || offset || 0
        }
    }, [currentBreakpoint, offset, bpMap])

    // 获取真正的宽度
    const getSpan = useMemo(() => {
        const res = getBreakPoint(currentBreakpoint, bpMap)
        if (typeof res === 'number') {
            return res || span || 24
        } else {
            return res?.span || span || 24
        }
    }, [currentBreakpoint, span, bpMap])

    // 获取真正的顺序
    const getOrder = useMemo(() => {
        const res = getBreakPoint(currentBreakpoint, bpMap)
        if (typeof res === 'number') {
            return order || 0
        } else {
            return res?.order || order || 0
        }
    }, [currentBreakpoint, order, bpMap])

    const getFlex = useMemo(() => {
        const res = props[currentBreakpoint]
        if (typeof res === 'number') {
            return flex || 'none'
        } else {
            return res?.flex || flex || 'none'
        }
    }, [currentBreakpoint, flex, props])

    // 规范化 flex 值，并决定是否使用 span 宽度
    const flexValue = useMemo(() => {
        if (typeof getFlex === 'number') {
            return getFlex; // 数字：表示 flex-grow 比例
        }
        if (getFlex === 'auto' || getFlex === 'none') {
            return getFlex;
        }
        if (typeof getFlex === 'string') {
            // 视为长度（如 '100px' / '20%'），用作 flex-basis
            return `0 0 ${getFlex}`;
        }
        return 'none';
    }, [getFlex]);

    const shouldUseSpanWidth = useMemo(() => {
        return getFlex === 'none';
    }, [getFlex]);

    return (
        <>
            <div
                className={colClassName}
                style={{
                    flex: flexValue,
                    order: getOrder,
                    ...(shouldUseSpanWidth ? { width: `${(getSpan / 24) * 100}%` } : {}),
                    marginLeft: `${(getOffset / 24) * 100}%`,
                    ...style
                }}
            >
                {children}
            </div>
        </>
    )
}

export default Col
