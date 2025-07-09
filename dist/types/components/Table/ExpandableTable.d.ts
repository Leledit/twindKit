import { default as React } from 'react';

export interface ExpandableTableColumn<T> {
    key: string;
    title: string;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
}
export interface ExpandableTableProps<T> {
    data: T[];
    columns: ExpandableTableColumn<T>[];
    rowActions?: (row: T) => React.ReactNode;
    renderExpandedRow: (row: T) => React.ReactNode;
}
export declare function ExpandableTable<T>({ data, columns, rowActions, renderExpandedRow, }: Readonly<ExpandableTableProps<T>>): import("react/jsx-runtime").JSX.Element;
