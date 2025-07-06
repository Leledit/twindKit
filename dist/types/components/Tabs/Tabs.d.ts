export type Tab = {
    key: string;
    label: string;
    content: React.ReactNode;
};
export interface TabsProps {
    tabs: Tab[];
    defaultTabKey?: string;
}
export declare function Tabs({ tabs, defaultTabKey, }: Readonly<TabsProps>): import("react/jsx-runtime").JSX.Element;
