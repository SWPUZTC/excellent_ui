import React, { useState } from 'react'
import classNames from 'classnames'
import { RadioGroupProps } from './type'
import { RadioContext } from './type'
import Radio from './radio'

const Group = <T,>(props: RadioGroupProps<T>) => {
    const {
        className,
        style,
        children,
        name,
        size,
        type = 'radio',
        direction = 'horizontal',
        disabled,
        value,
        defaultValue,
        onChange,
        options,
        ...rest
    } = props as RadioGroupProps<T> & { defaultValue?: T } // 扩展一下类型定义以便内部使用

    const [internalValue, setInternalValue] = useState<T | undefined>(defaultValue)

    // 受控模式取 props.value，非受控取 internalValue
    const mergedValue = value !== undefined ? value : internalValue

    const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>, val: T) => {
        const lastValue = mergedValue
        if (lastValue !== val) {
            if (value === undefined) {
                setInternalValue(val)
            }
            onChange?.(e, val)
        }
    }

    const contextValue = {
        groupValue: mergedValue,
        onChange: onRadioChange,
        name,
        disabled,
        type,
        size
    }

    const prefixCls = 'ex-radio-group'
    const cls = classNames(
        prefixCls,
        `${prefixCls}-direction-${direction}`,
        `${prefixCls}-type-${type}`,
        `${prefixCls}-size-${size}`,
        className
    )

    const renderChildren = () => {
        if (options && options.length > 0) {
            return options.map(option => {
                if (typeof option === 'string' || typeof option === 'number') {
                    return (
                        <Radio key={option} value={option as unknown as T}>
                            {option}
                        </Radio>
                    )
                }
                return (
                    <Radio key={`radio-opt-${option.value}`} value={option.value} disabled={option.disabled || disabled}>
                        {option.label}
                    </Radio>
                )
            })
        }
        return children
    }

    return (
        <RadioContext.Provider value={contextValue}>
            <div className={cls} style={style} {...rest}>
                {renderChildren()}
            </div>
        </RadioContext.Provider>
    )
}

export default Group
