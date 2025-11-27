import { LinkProps } from './type'
import './index.scss'
import classNames from 'classnames'

const Link = (props: LinkProps) => {
    const { disabled, hoverable = true, status = 'default', className, icon, style, children, ...rest } = props

    const linkClassName = classNames(
        'ex-link',
        `ex-link-${status}`,
        disabled && 'ex-link-disabled',
        hoverable && 'ex-link-hoverable',
        className
    )

    return (
        <a className={linkClassName} style={style} {...rest}>
            {icon && <span className="ex-link-icon">{icon}</span>}
            {children}
        </a>
    )
}

export default Link
