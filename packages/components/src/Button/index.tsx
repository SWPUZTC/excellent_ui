import ButtonProps from './type'
//import { size } from '@/constant'

// const initialProps: ButtonProps = {
//     type: 'default',
//     borderType: 'solid',
//     size: 'medium',
//     status: 'default',
//     htmlType: 'button'
// }

const Button = (props: ButtonProps) => {
    const { children, style, className, disabled, icon, htmlType } = props;

    return (
        <button 
        type={htmlType} 
        className={className ? className : 'excellent-ui-button'} 
        style={style}
        disabled={disabled}>
            {icon}
            {children}
        </button>
    )
}

export default Button
