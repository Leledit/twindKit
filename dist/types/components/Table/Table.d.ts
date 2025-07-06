export interface Column<T> {
    key: string;
    title: string;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
}
export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    rowActions?: (row: T) => React.ReactNode;
}
export declare function Table<T>({ data, columns, rowActions, }: Readonly<TableProps<T>>): import("react/jsx-runtime").JSX.Element;
