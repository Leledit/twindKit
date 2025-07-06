import { ReactNode } from 'react';

type typeAction = "edit" | "delete" | "link" | "info" | "check";
export interface TableActionProps {
    type: typeAction;
    action: () => void;
    textTooltip: string;
}
export declare function TableAction({ type, action, textTooltip, }: Readonly<TableActionProps>): ReactNode;
export {};
