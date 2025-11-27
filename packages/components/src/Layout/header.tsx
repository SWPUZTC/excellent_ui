import { LayoutHeaderProps } from './type'
import classNames from 'classnames'

const Header = ({ className, style, children, ...rest }: LayoutHeaderProps) => {
    return (
        <header className={classNames('ex-layout-header', className)} style={style} {...rest}>
            {children}
        </header>
    )
}

export default Header
