import ButtonProps from './type'
import styles from './index.module.scss'

const Button = (props: ButtonProps) => {
    const { children, style, className, onClick, disabled, icon, htmlType } = props;
    return (
        <button type={htmlType} className={className ? styles[className] : ''} style={style} onClick={onClick} disabled={disabled}>
            {icon}
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'default',
    size: 'medium',
    status: 'default',
    htmlType: 'button',
}

export default Button;