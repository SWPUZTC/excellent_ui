import React, { useState } from 'react'
import classNames from 'classnames'
import { CheckboxGroupProps } from './type'
import { CheckboxContext } from './type'
import Checkbox from './checkbox'

const Group = <T,>(props: CheckboxGroupProps<T>) => {
    const { className, style, children, direction = 'horizontal', disabled, value, defaultValue, onChange, options, ...rest } = props

    // 强制类型转换 value 为数组，兼容接口定义
    const propValue = value as unknown as T[] | undefined

    const [internalValue, setInternalValue] = useState<T[]>(defaultValue || [])

    const mergedValue = propValue !== undefined ? propValue : internalValue

    const onCheckboxChange = (optionValue: T, checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = checked
            ? [...mergedValue, optionValue] // 选中：添加
            : mergedValue.filter(v => v !== optionValue) // 取消：移除

        if (propValue === undefined) {
            setInternalValue(newValue)
        }

        onChange?.(e, newValue)
    }

    const contextValue = {
        groupValue: mergedValue,
        onChange: onCheckboxChange,
        disabled,
        inGroup: true
    }

    const prefixCls = 'ex-checkbox-group'
    const cls = classNames(prefixCls, `${prefixCls}-direction-${direction}`, className)

    return (
        <CheckboxContext.Provider value={contextValue}>
            <div className={cls} style={style} {...rest}>
                {options && options.length > 0
                    ? options.map(option => {
                          const isStringOrNum = typeof option === 'string' || typeof option === 'number'
                          const optValue = isStringOrNum ? option : (option as any).value
                          const optLabel = isStringOrNum ? option : (option as any).label
                          const optDisabled = !isStringOrNum ? (option as any).disabled : undefined
                          const optIcon = !isStringOrNum ? (option as any).icon : undefined

                          return (
                              <Checkbox key={`checkbox-opt-${optValue}`} value={optValue} disabled={optDisabled} icon={optIcon}>
                                  {optLabel}
                              </Checkbox>
                          )
                      })
                    : children}
            </div>
        </CheckboxContext.Provider>
    )
}

export default Group
