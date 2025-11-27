import { LayoutFooterProps } from './type'
import classNames from 'classnames'

const Footer = ({ className, style, children, ...rest }: LayoutFooterProps) => {
    return (
        <footer className={classNames('ex-layout-footer', className)} style={style} {...rest}>
            {children}
        </footer>
    )
}

export default Footer
