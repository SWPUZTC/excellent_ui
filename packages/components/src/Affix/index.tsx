import { AffixProps } from './type'
import classNames from 'classnames'
import { useState, type PropsWithChildren, useRef, useMemo, useEffect, useCallback, type CSSProperties } from 'react'
import { debounce } from '@excellent-ui/utils'

const Affix = (props: PropsWithChildren<AffixProps>) => {
    const { offsetTop = 0, offsetBottom, className, style, onChange, target = () => window, affixStyle, affixClassName, children } = props

    const isBottomAffix = offsetBottom !== undefined ? 'bottom' : 'top'
    const WrapperRef = useRef<HTMLDivElement>(null)
    const placeholderRef = useRef<HTMLDivElement>(null)
    // 记录是否固定
    const [affixed, setAffixed] = useState(false)
    // 记录占位元素的高度
    const [placeholderHeight, setPlaceholderHeight] = useState(0)
    // 记录宽度
    const [WrapperWidth, setWrapperWidth] = useState(0)

    // 获取容器的信息
    const getTargetRect = useCallback(() => {
        const ele = target()
        if (ele === window) {
            return {
                top: 0,
                bottom: window.innerHeight
            }
        } else {
            const rect = (ele as HTMLElement).getBoundingClientRect()
            return {
                top: rect.top,
                bottom: rect.bottom
            }
        }
    }, [target])

    const updateAffixed = useCallback(() => {
        if (!WrapperRef.current || !placeholderRef.current) return

        const WrapperEle = WrapperRef.current
        const placeholderEle = placeholderRef.current
        // 固定时检查占位元素，未固定时检查包装元素
        const checkEle = affixed ? placeholderEle : WrapperEle

        const rect = checkEle.getBoundingClientRect()
        const { top, bottom } = getTargetRect()

        const isAffixed = isBottomAffix === 'bottom' ? bottom <= rect.bottom + (offsetBottom ?? 0) : rect.top <= offsetTop + top
        if (isAffixed !== affixed) {
            setAffixed(isAffixed)
            onChange?.(isAffixed)

            if (isAffixed) {
                setPlaceholderHeight(WrapperEle.offsetHeight)
                setWrapperWidth(WrapperEle.offsetWidth)
            } else {
                setPlaceholderHeight(0)
            }
        }
    }, [affixed, getTargetRect, offsetTop, offsetBottom, onChange, isBottomAffix])

    const getStyle = useMemo(() => {
        return affixed
            ? {
                  ...style,
                  ...affixStyle,
                  position: target() === window ? 'fixed' : 'absolute',
                  [isBottomAffix]: offsetBottom ?? offsetTop,
                  zIndex: 999,
                  width: WrapperWidth
              }
            : style
    }, [affixed, affixStyle, offsetTop, offsetBottom, style, WrapperWidth, isBottomAffix, target]) as CSSProperties

    useEffect(() => {
        // 监听滚动事件和窗口变化事件 ，使用防抖函数优化性能
        const debounceUpdateAffixed = debounce(updateAffixed, 20)
        const ele = target()
        if (ele !== window) console.log('ele', ele)
        ele.addEventListener('scroll', debounceUpdateAffixed)
        ele.addEventListener('resize', debounceUpdateAffixed)
        return () => {
            ele.removeEventListener('scroll', debounceUpdateAffixed)
            ele.removeEventListener('resize', debounceUpdateAffixed)
        }
    }, [target, updateAffixed])

    useEffect(() => {
        onChange?.(affixed)
    }, [affixed, onChange])

    return (
        <>
            <div ref={placeholderRef} style={{ height: affixed ? placeholderHeight : 0, width: '100%' }}></div>
            <div className={classNames(affixed && affixClassName, !affixed && className)} ref={WrapperRef} style={getStyle}>
                {children}
            </div>
        </>
    )
}

export default Affix
