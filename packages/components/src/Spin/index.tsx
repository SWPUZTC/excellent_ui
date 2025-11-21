import { SpinProps } from './type';
import { CSSProperties } from 'react';
import classNames from 'classnames';
import './index.scss';

const Spin = (props: SpinProps) => {
    const { block = false, dot = false, loading = true, size = 32, tip = '', className, style, children } = props;

    if (!loading) {
        return children ? <>{children}</> : null;
    }

    const spinnerStyle: CSSProperties = {
        width: size,
        height: size,
        borderWidth: Math.max(2, size / 16),
        ...style
    };

    const dotStyle: CSSProperties = {
        width: size,
        height: size,
        gap: size / 8,
    };

    const renderSpinner = () => {
        if (dot) {
            return (
                <div className="ex-spin-dot" style={dotStyle}>
                    <div className="ex-spin-dot-item" style={style} />
                    <div className="ex-spin-dot-item" style={style} />
                    <div className="ex-spin-dot-item" style={style} />
                </div>
            );
        }
        return <div className="ex-spin-spinner" style={spinnerStyle} />;
    };

    if (children) {
        return (
            <div className={classNames('ex-spin-wrapper', className)} style={style}>
                <div className="ex-spin-blur">{children}</div>
                <div className="ex-spin-overlay">
                    {renderSpinner()}
                    {tip && <div className="ex-spin-tip">{tip}</div>}
                </div>
            </div>
        );
    }

    return (
        <div className={classNames('ex-spin', { 'ex-spin-block': block }, className)}>
            {renderSpinner()}
            {tip && <div className="ex-spin-tip">{tip}</div>}
        </div>
    );
};

export default Spin;
