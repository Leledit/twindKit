import { ChevronsRight, ChevronsLeft } from "lucide-react";
import { twMerge } from "tailwind-merge";

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

export function Pagination({
  totalData,
  currentPage,
  setCurrentPage,
  elementsPerPage = 20,
  classNameIcons,
  classNameSelectPage,
  className
}: Readonly<PaginationProps>) {
  const numberPage = Math.ceil(totalData / elementsPerPage);

  if (totalData === 0 || totalData < elementsPerPage) return null;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const classesSelectPage = `bg-[var(--color-secondary-active)] text-[var(--color-primary-foreground)] 
      dark:bg-[var(--color-secondary-active-dark)] dark:text-[var(--color-primary-foreground-dark)] ${classNameSelectPage}`

  return (
    <div className="w-full flex flex-col justify-center items-center mb-10 mt-5">
      <div className="max-w-[400px] w-full flex flex-row justify-around items-center">
        <ChevronsLeft
          className={twMerge("text-[var(--color-secondary)] cursor-pointer", classNameIcons)}
          onClick={() => handlePageChange(1)}
        />
        {Array.from({ length: numberPage }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={twMerge(
              `flex justify-center items-center w-[40px] h-[40px] text-sm rounded-full transition-colors duration-200 cursor-pointer`,
              currentPage === i + 1
                ? classesSelectPage
                : "text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] hover:bg-[var(--color-muted-dark)/10] "+className,
                
            )}
          >
            {i + 1}
          </button>
        ))}
        <ChevronsRight
          className={twMerge("text-[var(--color-secondary)] cursor-pointer", classNameIcons)}
          onClick={() => handlePageChange(numberPage)}
        />
      </div>
    </div>
  );
}
