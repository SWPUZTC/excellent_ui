import { CardProps } from './type'
import './index.scss'
import classNames from 'classnames'

const Card = (props: CardProps) => {
    const {
        className,
        style,
        children,
        bordered = true,
        hoverable = true,
        size = 'default',
        title,
        extra,
        cover,
        actions,
        headerStyle,
        bodyStyle
    } = props
    return (
        <>
            <div
                className={classNames(
                    'ex-card',
                    bordered && 'ex-card-bordered',
                    className,
                    `ex-card-${size}`,
                    hoverable && 'ex-card-hoverable'
                )}
                style={style}
            >
                {title || extra ? (
                    <div className="ex-card-header" style={headerStyle}>
                        {title && <div className="ex-card-header-title">{title}</div>}
                        {extra && <div className="ex-card-header-extra">{extra}</div>}
                    </div>
                ) : null}
                {cover && <div className="ex-card-cover">{cover}</div>}
                <div className="ex-card-body" style={bodyStyle}>
                    {children}
                </div>
                {actions && (
                    <div className="ex-card-actions">
                        <div className="ex-card-actions-right">{actions}</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Card
