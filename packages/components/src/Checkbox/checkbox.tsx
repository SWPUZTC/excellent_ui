import React, { useContext, useState, useRef } from 'react'
import classNames from 'classnames'
import { CheckboxProps } from './type' // 假设接口定义在 type.ts
import { CheckboxContext } from './type'
import { IconCheck } from '@arco-design/web-react/icon'
import './index.scss'

const Checkbox = <T,>(props: CheckboxProps<T>) => {
    const { className, style, children, value, disabled, checked: propsChecked, defaultChecked, onChange, error, icon, ...rest } = props

    const context = useContext(CheckboxContext)
    const inputRef = useRef<HTMLInputElement>(null)

    // 内部状态（非受控模式使用）
    const [internalChecked, setInternalChecked] = useState(defaultChecked || false)

    // 判断是否在 Group 中
    const isGroup = context?.inGroup

    // 计算最终的 checked 状态
    // 如果在 Group 中，判断 groupValue 数组是否包含当前 value
    // 否则优先使用 propsChecked (受控)，降级使用 internalChecked (非受控)
    const isChecked =
        isGroup && context.groupValue
            ? context.groupValue.includes(value as T)
            : propsChecked !== undefined
              ? propsChecked
              : internalChecked

    // 合并 disabled 状态
    const mergedDisabled = context?.disabled || disabled

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (mergedDisabled) return

        const newChecked = e.target.checked

        // 1. 如果在 Group 中，调用 Group 的逻辑
        if (isGroup && context.onChange) {
            context.onChange(value as T, newChecked, e)
        } else {
            // 2. 如果是单体 Checkbox
            if (propsChecked === undefined) {
                setInternalChecked(newChecked)
            }
            onChange?.(newChecked, e)
        }
    }

    const prefixCls = 'ex-checkbox'
    const wrapperClass = classNames(
        prefixCls,
        {
            [`${prefixCls}-checked`]: isChecked,
            [`${prefixCls}-disabled`]: mergedDisabled,
            [`${prefixCls}-error`]: error // 错误状态支持
        },
        className
    )

    return (
        <label className={wrapperClass} style={style}>
            <input
                {...rest}
                ref={inputRef}
                type="checkbox"
                disabled={mergedDisabled}
                checked={isChecked}
                onChange={handleChange}
                onClick={e => e.stopPropagation()}
                value={value as any}
            />
            <span className={`${prefixCls}-mask`}>
                {icon ? (
                    <span className={`${prefixCls}-mask-icon`}>{icon}</span>
                ) : (
                    isChecked && <IconCheck className={`${prefixCls}-mask-icon`} />
                )}
            </span>
            {children && <span className={`${prefixCls}-text`}>{children}</span>}
        </label>
    )
}

export default Checkbox
