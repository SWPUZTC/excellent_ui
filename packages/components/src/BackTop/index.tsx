import { BackTopProps } from './type'
import { useScrollTop } from '@excellent-ui/hooks'
import './index.scss'
import { useEffect, useState } from 'react'

const BackTop = (props: BackTopProps) => {
    const { visibleHeight = 400, className, style, onClick, target = () => window, children, ...rest } = props
    const [scrollTarget, setScrollTarget] = useState<HTMLElement | Window>(window)

    useEffect(() => {
        // 异步解析 target()，避免初次渲染时目标容器尚未挂载导致不可见的问题
        let canceled = false
        const updateTarget = () => {
            try {
                const el = target()
                const next = el && (el instanceof Window || el instanceof HTMLElement) ? el : window
                // 仅在目标容器变动时更新状态
                if (!canceled) setScrollTarget(next)
            } catch {
                if (!canceled) setScrollTarget(window)
            }
        }
        if (typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(updateTarget)
        } else {
            setTimeout(updateTarget, 0)
        }
        return () => {
            canceled = true
        }
    }, [target])

    const visible = useScrollTop(scrollTarget, visibleHeight)

    const handleClick = () => {
        const element = scrollTarget
        element.scrollTo({ top: 0, behavior: 'smooth' })
        onClick?.()
    }

    return visible ? (
        <div className={`ex-back-top ${className || ''}`} style={style} onClick={handleClick} {...rest}>
            {children}
        </div>
    ) : null
}

export default BackTop
