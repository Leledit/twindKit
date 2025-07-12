export type paginationComponentTypeOrigin = "admin" | "user";
export interface PaginationProps {
    totalData: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    elementsPerPage?: number;
    classNameIcons?: string;
    classNameSelectPage?: string;
    className?: string;
}
export declare function Pagination({ totalData, currentPage, setCurrentPage, elementsPerPage, classNameIcons, classNameSelectPage, className }: Readonly<PaginationProps>): import("react/jsx-runtime").JSX.Element | null;
