import { ReactNode } from 'react';

export interface FormLabelProps {
    htmlFor?: string;
    children: ReactNode;
    className?: string;
}
export declare function FormLabel({ htmlFor, children, className }: Readonly<FormLabelProps>): import("react/jsx-runtime").JSX.Element;
