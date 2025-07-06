import { ReactNode } from 'react';

export interface AccordionProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
    className?: string;
}
export declare function Accordion({ title, children, defaultOpen, className, }: Readonly<AccordionProps>): import("react/jsx-runtime").JSX.Element;
