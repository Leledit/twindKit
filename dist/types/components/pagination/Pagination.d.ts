export type paginationComponentTypeOrigin = "admin" | "user";
export interface PaginationProps {
    totalData: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    elementsPerPage?: number;
}
export declare function Pagination({ totalData, currentPage, setCurrentPage, elementsPerPage, }: Readonly<PaginationProps>): import("react/jsx-runtime").JSX.Element | null;
