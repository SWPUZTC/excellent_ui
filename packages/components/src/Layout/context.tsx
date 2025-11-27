import { LayoutContextProps } from './type'
import classNames from 'classnames'

const Context = (props: LayoutContextProps) => {
    const { className, style, children, ...rest } = props
    return (
        <main className={classNames('ex-layout-content', className)} style={style} {...rest}>
            {children}
        </main>
    )
}

export default Context
