import { TypographyTitleProps } from '../type'
import classNames from 'classnames'
import { useCallback, createElement, type ReactNode } from 'react'

const TypographyTitle = (props: TypographyTitleProps) => {
    const { bold, code, delete: del, disabled, type, underline, className, style, children, mark, heading = 1, ...rest } = props

    const getClassName = useCallback(() => {
        return classNames(className, 'ex-typography', {
            'ex-typography-bold': bold,
            'ex-typography-delete': del,
            'ex-typography-disabled': disabled,
            [`ex-typography-${type}`]: type,
            'ex-typography-underline': underline,
            'ex-typography-mark': mark,
            [`ex-typography-heading-${heading}`]: heading
        })
    }, [bold, del, disabled, type, underline, mark, className, heading])

    const codeChildren = useCallback(
        (children: ReactNode) => {
            return code ? <code className="ex-typography-code">{children}</code> : children
        }, [code])

    return (
        <>
            {
                <>
                    {codeChildren(
                        createElement(
                            `h${heading}`,
                            {
                                className: getClassName(),
                                style: { backgroundColor: typeof mark === 'object' ? mark.color : undefined, ...style },
                                ...rest
                            },
                            children
                        )
                    )}
                </>
            }
        </>
    )
}

export default TypographyTitle
