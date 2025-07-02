import { ReactNode } from 'react';

type Variant = "primary" | "secondary" | "cancel" | "danger";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    variant?: Variant;
}
export declare function Button({ className, children, variant, ...props }: Readonly<ButtonProps>): import("react/jsx-runtime").JSX.Element;
export {};
