import { ReactNode } from 'react';

type typeAction = "edit" | "delete" | "link" | "info" | "check";
export interface TableActionProps {
    type: typeAction;
    action: () => void;
    textTooltip: string;
    className?: string;
}
export declare function TableAction({ type, action, textTooltip, className }: Readonly<TableActionProps>): ReactNode;
export {};
