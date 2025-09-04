import React from "react";

export default interface ButtonProps {
    type?: 'default' | 'primary' | 'secondary' | 'dashed';
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    status?: 'default' | 'success' | 'warning' | 'danger';
    htmlType?: 'button' | 'submit' | 'reset';
}