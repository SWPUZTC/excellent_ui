import { LayoutSiderProps } from './type'
import classNames from 'classnames'
import { IconLeft, IconRight } from '@arco-design/web-react/icon'

const Sider = (props: LayoutSiderProps) => {
    const { className, style, children, collapsed, collapsedWidth, collapsible, reverseArrow, onCollapse, width, resize, ...rest } = props
    return (
        <aside
            className={classNames('ex-layout-sider', className)}
            style={{
                ...style,
                resize,
                overflow: 'auto',
                transition: 'width 0.3s ease',
                minWidth: collapsedWidth,
                width: collapsed ? collapsedWidth : width
            }}
            {...rest}
        >
            {children}
            {collapsible && (
                <div className="ex-layout-sider-collapse-arrow" onClick={() => onCollapse?.(!collapsed)}>
                    {reverseArrow ? collapsed ? <IconLeft /> : <IconRight /> : collapsed ? <IconRight /> : <IconLeft />}
                </div>
            )}
        </aside>
    )
}

Sider.__TYPE__ = 'Sider'
export default Sider
