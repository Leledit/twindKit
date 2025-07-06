import { ReactNode } from 'react';

export interface CustomLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    href: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
export declare function CustomLink({ children, href, className, disabled, }: Readonly<CustomLinkProps>): import("react/jsx-runtime").JSX.Element;
