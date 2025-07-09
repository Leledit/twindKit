export type AccordionGroupItem<T> = {
    id: string;
    title: string;
    data: T;
};
export type AccordionGroupProps<T> = {
    items: AccordionGroupItem<T>[];
    contentComponent: (data: T) => React.ReactNode;
    className?: string;
    classNameAccordion?: string;
};
export declare function AccordionGroup<T>({ items, contentComponent, className, classNameAccordion }: Readonly<AccordionGroupProps<T>>): import("react/jsx-runtime").JSX.Element;
