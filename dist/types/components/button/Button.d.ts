import { FC, ReactNode } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
export declare const Button: FC<ButtonProps>;
