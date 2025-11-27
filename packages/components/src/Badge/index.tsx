import { BadgeProps } from './type'
import './index.scss'
import classNames from 'classnames'
import { useMemo, type PropsWithChildren } from 'react'

const Badge = (props: PropsWithChildren<BadgeProps>) => {
    const { maxCount = 99, text, count = 0, color, className, style, dotStyle, dotClassName, children } = props

    const contentToRender = useMemo(() => {
        if (text) return text
        if (count > 0) return count > maxCount ? `${maxCount}+` : count
        return null
    }, [count, maxCount, text])

    const isDotOnly = !text && count <= 0
    const isStandalone = !children

    return (
        <div style={style} className={classNames('ex-badge', className)}>
            {children && <div className="ex-badge-content">{children}</div>}

            <sup
                style={{ ...dotStyle, backgroundColor: color }}
                className={classNames(
                    'ex-badge-dot',
                    isStandalone && 'ex-badge-standalone',
                    isDotOnly ? 'ex-badge-dot-zero' : text ? 'ex-badge-dot-text' : 'ex-badge-dot-number',
                    dotClassName
                )}
            >
                {!isDotOnly && contentToRender}
            </sup>
        </div>
    )
}

export default Badge
