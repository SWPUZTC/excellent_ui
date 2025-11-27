import { LayoutProps } from './type'
import './index.scss'
import Header from './header'
import Footer from './footer'
import Content from './context'
import Sider from './sider'
import classNames from 'classnames'
import React, { useMemo } from 'react'

const Layout = (props: LayoutProps) => {
    const { className, style, children, ...rest } = props
    const hasSider = useMemo(() => {
        const childrenArray = React.Children.toArray(children)
        return childrenArray.some(child => {
            if (React.isValidElement(child)) {
                return child.type === Sider || (child.type as unknown as { __TYPE__: string }).__TYPE__ === 'sider'
            }
            return false
        })
    }, [children])
    return (
        <section className={classNames('ex-layout', className)} style={{ ...style, flexDirection: hasSider ? 'row' : 'column' }} {...rest}>
            {children}
        </section>
    )
}

Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content
Layout.Sider = Sider

export default Layout
