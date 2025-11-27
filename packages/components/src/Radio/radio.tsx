import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import { RadioProps } from './type' // 假设你的接口定义在 type.ts
import { RadioContext } from './type'
import './index.scss'

const Radio = <T,>(props: RadioProps<T>) => {
    const { className, style, children, value, disabled, checked: propsChecked, defaultChecked, onChange, ...rest } = props

    const context = useContext(RadioContext)

    const [internalChecked, setInternalChecked] = useState(defaultChecked || false)

    // 合并来自 Group 的配置
    const isGroup = !!context
    const mergedDisabled = context?.disabled || disabled
    const mergedType = context?.type || 'radio'
    const mergedSize = context?.size || 'medium'

    // 计算最终的选中状态
    const isChecked = isGroup ? context.groupValue === value : propsChecked !== undefined ? propsChecked : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (mergedDisabled) return

        // 如果不是受控组件，更新内部状态
        if (!isGroup && propsChecked === undefined) {
            setInternalChecked(e.target.checked)
        }

        // 触发自身的 onChange
        onChange?.(e.target.checked, value as T)

        // 如果在 Group 中，触发 Group 的 onChange
        if (isGroup && context.onChange) {
            context.onChange(e, value as T)
        }
    }

    const prefixCls = 'ex-radio'
    const wrapperClass = classNames(
        prefixCls,
        {
            [`${prefixCls}-checked`]: isChecked,
            [`${prefixCls}-disabled`]: mergedDisabled,
            [`${prefixCls}-${mergedType}`]: mergedType === 'button', // 处理按钮样式
            [`${prefixCls}-size-${mergedSize}`]: mergedType === 'button' // 按钮模式才有大小之分
        },
        className
    )

    return (
        <label className={wrapperClass} style={style}>
            <input
                {...rest}
                type="radio"
                disabled={mergedDisabled}
                checked={isChecked}
                onChange={handleChange}
                onClick={e => e.stopPropagation()}
                name={context?.name}
                value={value as string} // HTML input value 通常是 string，这里为了逻辑传递
            />
            {mergedType === 'radio' && <span className={`${prefixCls}-mask`}></span>}
            {children && <span className={`${prefixCls}-text`}>{children}</span>}
        </label>
    )
}

export default Radio
