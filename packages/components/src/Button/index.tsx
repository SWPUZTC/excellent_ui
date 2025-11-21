import { ButtonProps } from './type'
import React from 'react'
import classNames from 'classnames'
import './index.scss'
import Spin from '../Spin'

const Button = (props: ButtonProps) => {
    const { disabled, loading, htmlType = 'button', size = 'medium', prefix, suffix, status = 'default', type = 'primary', className, style, onClick, children, ...rest } = props

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || loading) {
            e.preventDefault()
            return
        }
        onClick?.(e)
    }

    const getButtonClassName = () => {
        return classNames(
            'ex-button',
            size && `ex-button-${size}`,
            status && `ex-button-${status}`,
            type && `ex-button-${type}`,
            disabled && 'ex-button-disabled',
            loading && 'ex-button-loading',
            className,
        )
    }


    return (
        <button disabled={disabled || loading} type={htmlType} style={style} {...rest} onClick={handleClick} className={getButtonClassName()}>
            {loading && <Spin size={10} className='ex-button-loading-spin'/>}
            {prefix && <span className="ex-button-prefix">{prefix}</span>}
            <span className="ex-button-content">{children}</span>
            {suffix && <span className="ex-button-suffix">{suffix}</span>}
        </button>
    )
}

export default Button
