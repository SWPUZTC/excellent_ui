import type { PropsWithChildren } from 'react'
import classNames from 'classnames'
import type { SkeletonProps, SkeletonImageProps, SkeletonTextProps } from './type'
import './index.scss'

const Skeleton = (props: PropsWithChildren<SkeletonProps>) => {
    const {
        loading = true, // 默认为加载状态，如果没有 children 也可以直接作为占位符使用
        animation = true,
        image = false,
        text = true,
        className,
        style,
        children
    } = props

    if (!loading && children) {
        return <>{children}</>
    }

    // --- 内部渲染辅助函数 ---

    // 1. 渲染头像/图片占位
    const renderImage = () => {
        if (!image) return null

        const imageProps: SkeletonImageProps = typeof image === 'object' ? image : {}
        const { shape = 'circle', size = 'default', style: imgStyle, className: imgClass } = imageProps

        // 处理数字类型的 size
        const sizeStyle = typeof size === 'number' ? { width: size, height: size } : {}

        return (
            <div className="ex-skeleton-header">
                <div
                    className={classNames(
                        'ex-skeleton-image',
                        `ex-skeleton-image-${typeof size === 'string' ? size : ''}`,
                        `ex-skeleton-image-${shape}`,
                        imgClass
                    )}
                    style={{ ...sizeStyle, ...imgStyle }}
                />
            </div>
        )
    }

    const renderText = () => {
        if (!text) return null

        const textProps: SkeletonTextProps = typeof text === 'object' ? text : {}
        const { rows = 3, width, style: textStyle, className: textClass } = textProps

        return (
            <ul className={classNames('ex-skeleton-content', textClass)} style={textStyle}>
                {Array.from({ length: rows }).map((_, index) => {
                    // 计算每一行的宽度
                    let rowWidth: number | string = '100%'
                    if (Array.isArray(width)) {
                        rowWidth = width[index] || '100%'
                    } else if (width) {
                        rowWidth = width
                    } else if (index === rows - 1) {
                        rowWidth = '60%'
                    }

                    return <li key={index} className="ex-skeleton-row" style={{ width: rowWidth }} />
                })}
            </ul>
        )
    }

    return (
        <div className={classNames('ex-skeleton', { 'ex-skeleton-animated': animation }, className)} style={style}>
            {renderImage()}
            {renderText()}
        </div>
    )
}

export default Skeleton
