import { TagProps } from './type'
import classNames from 'classnames'
import './index.scss'
import { useState, type MouseEvent } from 'react'
import Spin from '../Spin'
import { IconClose } from '@arco-design/web-react/icon'

const Tag = (props: TagProps) => {
    const {
        className,
        style,
        checkable,
        checked,
        closeable,
        defaultChecked,
        visible = true,
        bordered,
        size = 'medium',
        closeIcon = <IconClose />,
        icon,
        onCheck,
        onClose,
        children,
        ...restProps
    } = props

    const [internalChecked, setInternalChecked] = useState(checked ?? defaultChecked)
    const [isLoading, setIsLoading] = useState(false)

    const handleCheck = () => {
        setInternalChecked(!internalChecked)
        onCheck?.(!internalChecked)
    }

    const getClassName = () => {
        return classNames(
            'ex-tag',
            {
                'ex-tag-checkable': checkable,
                'ex-tag-checked': internalChecked,
                'ex-tag-invisible': !visible,
                [`ex-tag-${size}`]: size,
                'ex-tag-bordered': bordered
            },
            className
        )
    }

    const handleClose = async (e: MouseEvent<HTMLDivElement>) => {
        try {
            setIsLoading(true)
            await onClose?.(e)
        } catch (error) {
            void error
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={getClassName()} style={style} onClick={checkable ? handleCheck : undefined} {...restProps}>
            {icon && <span className="ex-tag-icon">{icon}</span>}
            <span className="ex-tag-content">{children}</span>
            {closeable && (
                <span className="ex-tag-close-icon" onClick={handleClose}>
                    {isLoading ? <Spin size={12} /> : closeIcon}
                </span>
            )}
        </div>
    )
}

export default Tag
