export interface TooltipProps {
    text: string;
    children: any;
    className?: string;
    coordTop?: number;
    coordLeft?: number;
}
export declare function Tooltip({ text, children, className, coordTop, coordLeft, }: Readonly<TooltipProps>): import("react/jsx-runtime").JSX.Element;
