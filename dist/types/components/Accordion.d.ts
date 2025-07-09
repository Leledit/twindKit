import { ReactNode } from 'react';

export interface AccordionProps {
    title: string;
    children: ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    className?: string;
}
export declare function Accordion({ title, children, isOpen: controlledOpen, onToggle, className, }: Readonly<AccordionProps>): import("react/jsx-runtime").JSX.Element;
