import React, { useState } from 'react'
import classNames from 'classnames'
import type { SwitchProps } from './type'
import './index.scss'
import Spin from '../Spin'

const Switch: React.FC<SwitchProps> = props => {
    const {
        checked,
        defaultChecked,
        disabled,
        loading,
        size = 'default',
        checkedIcon,
        checkedText,
        unCheckedIcon,
        unCheckedText,
        onChange,
        className,
        style
    } = props

    // 内部状态：用于非受控模式 (Uncontrolled)
    const [internalChecked, setInternalChecked] = useState<boolean>(!!defaultChecked)

    // 判断是否受控：如果 props 中传入了 checked，则以 props 为准，否则使用内部状态
    const isChecked = checked !== undefined ? checked : internalChecked

    // 状态切换处理
    const triggerChange = (newChecked: boolean) => {
        if (!('checked' in props)) {
            setInternalChecked(newChecked)
        }
        onChange?.(newChecked)
    }

    const handleClick = () => {
        if (disabled || loading) {
            return
        }
        triggerChange(!isChecked)
    }

    // 根据 size 决定是否显示文本内容
    const showText = size !== 'small'

    const renderHandleContent = () => {
        if (loading) {
            return <Spin size={10} />
        }
        return isChecked ? checkedIcon : unCheckedIcon
    }

    return (
        <button
            type="button"
            role="switch"
            aria-checked={isChecked}
            disabled={disabled || loading}
            className={classNames(
                'ex-switch',
                {
                    'ex-switch-checked': isChecked,
                    'ex-switch-disabled': disabled,
                    'ex-switch-loading': loading,
                    'ex-switch-small': size === 'small'
                },
                className
            )}
            style={style}
            onClick={handleClick}
        >
            {/* 开关把手 */}
            <div className="ex-switch-handle">{renderHandleContent()}</div>

            {/* 文本内容 - 仅在非 small 模式下渲染 */}
            {showText && <span className="ex-switch-inner">{isChecked ? checkedText : unCheckedText}</span>}
        </button>
    )
}

export default Switch
