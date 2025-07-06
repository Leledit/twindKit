import { ReactNode } from 'react';

export type TabItem = {
    id: string;
    icon: ReactNode;
    content: ReactNode;
};
export type ActionsItem = {
    id: string;
    icon: ReactNode;
    text: string;
    action: () => void;
};
export interface VerticalTabsProps {
    tabs: TabItem[];
    actions?: ActionsItem[];
    defaultTab?: string;
    className?: string;
}
export declare function VerticalTabs({ tabs, defaultTab, actions, className, }: Readonly<VerticalTabsProps>): import("react/jsx-runtime").JSX.Element;
