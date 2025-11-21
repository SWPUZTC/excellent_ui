import { TypographyParagraphProps } from '../type';
import classNames from 'classnames'
import { useCallback, createElement, type ReactNode } from 'react'

const TypographyParagraph = (props: TypographyParagraphProps) => {
    const { bold, code, delete: del, disabled, type, underline, className, style, children, mark, blockquote, spacing = 'default', ...rest } = props

    const getClassName = useCallback(() => {
        return classNames(className, 'ex-typography', 'ex-typography-paragraph', {
            'ex-typography-bold': bold,
            'ex-typography-delete': del,
            'ex-typography-disabled': disabled,
            [`ex-typography-${type}`]: type,
            'ex-typography-underline': underline,
            'ex-typography-mark': mark,
            'ex-typography-blockquote': blockquote,
        })
    }, [bold, del, disabled, type, underline, mark, className, blockquote])

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
                            `div`,
                            {
                                className: getClassName(),
                                style: { 
                                    backgroundColor: typeof mark === 'object' ? mark.color : undefined, 
                                    lineHeight: spacing === 'tight' ? '1.3' : undefined,
                                    ...style 
                                },
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

export default TypographyParagraph
