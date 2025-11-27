import AvatarProps from './type'
import './index.scss'
import classNames from 'classnames'
import React, { useCallback, useLayoutEffect, useRef } from 'react'
import AvatarGroup from './group'

const Avatar = (props: AvatarProps) => {
    const ContainerRef = useRef<HTMLDivElement>(null)
    const ContentRef = useRef<HTMLSpanElement>(null)
    const {
        className,
        style,
        shape = 'circle',
        onClick,
        triggerType = 'button',
        triggerStyle,
        triggerIcon,
        size = 40,
        children,
        autoFix = true
    } = props

    const autoFixSize = useCallback(() => {
        if (ContainerRef.current && ContentRef.current) {
            // 获取头像文本宽度 content + padding
            const textWidth = ContentRef.current.clientWidth
            // 获取容器宽度 content + padding + margin 默认为80
            const compareSize = size || ContainerRef.current.offsetWidth
            // 计算缩放比例 如果文本宽度大于容器宽度 则缩放 否则不缩放
            const scale = compareSize / (textWidth + 4)
            if (compareSize && scale < 1) {
                ContentRef.current.style.transform = `scale(${scale}) translateX(-50%)`
            } else {
                ContentRef.current.style.transform = 'scale(1) translateX(-50%)'
            }
        }
    }, [size, children])

    // 判断是否是图片
    const Isimage = () => {
        const childArray = React.Children.toArray(children)
        return (
            childArray.length === 1 &&
            React.isValidElement(childArray[0]) &&
            (childArray[0].type === 'img' || childArray[0].type === 'picture')
        )
    }

    const _triggerIconStyle: React.CSSProperties = { ...(triggerStyle || {}) }
    if (triggerType === 'button' && (!triggerStyle || (triggerStyle && !triggerStyle.color)) && style && style.backgroundColor) {
        _triggerIconStyle.color = style.backgroundColor
    }

    // 监听头像文本宽度变化 自动调整缩放比例
    useLayoutEffect(() => {
        if (autoFix) {
            autoFixSize()
        }
    }, [autoFix, autoFixSize])
    return (
        <div
            className={classNames('ex-avatar', className, shape === 'circle' ? 'ex-avatar-circle' : 'ex-avatar-square')}
            ref={ContainerRef}
            style={{
                ...style,
                width: size,
                height: size,
                fontSize: size && size / 2
            }}
            onClick={onClick}
        >
            {Isimage() ? <span className="ex-avatar-img">{children}</span> : null}
            {!Isimage() && (
                <span className="ex-avatar-text" ref={ContentRef}>
                    {children}
                </span>
            )}
            {triggerIcon && (
                <div style={_triggerIconStyle} className={classNames(`ex-avatar-trigger-icon-${triggerType}`)}>
                    {triggerIcon}
                </div>
            )}
        </div>
    )
}

Avatar.Group = AvatarGroup

export default Avatar
