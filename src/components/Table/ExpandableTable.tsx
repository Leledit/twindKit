import { Tooltip } from "../Tooltip.js";
import React, { useState } from "react";

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

export function ExpandableTable<T>({
  data,
  columns,
  rowActions,
  renderExpandedRow,
}: Readonly<ExpandableTableProps<T>>) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleRow = (index: number) => {
    setIsAnimating(true);
    setExpandedRows((prev) => {
      const newExpandedRows: Set<number> = new Set();
      if (!prev.has(index)) {
        newExpandedRows.add(index);
      }
      return newExpandedRows;
    });
  };

  return (
    <div className="shadow-sm border border-gray-200 rounded-[10px] overflow-x-auto w-full">
      <table className="min-w-[800px] table-auto w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-2 text-[16px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]"
              >
                {column.title}
              </th>
            ))}
            <th className="px-4 py-2 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {!data || data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-4 py-2 text-center text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]"
              >
                Nenhum dado disponível
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <React.Fragment key={index}>
                <tr
                  className={`cursor-pointer hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primary-dark)] ${
                    index === data.length - 1 ? "" : "border-b border-gray-200"
                  }`}
                  onClick={() => !rowActions?.(row) && toggleRow(index)}
                >
                  {columns.map((column) => {
                    const cellValue = row[column.key as keyof T];
                    return (
                      <td
                        key={String(column.key)}
                        className="px-4 py-2 text-[14px] font-normal text-left text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]"
                      >
                        {column.render
                          ? column.render(cellValue, row)
                          : (cellValue as React.ReactNode)}
                      </td>
                    );
                  })}
                  <td className="px-2 py-1 text-center align-middle whitespace-nowrap w-1">
                    <div className="flex items-center justify-center gap-1">
                      <Tooltip text="Abrir/Fechar">
                        <button
                          className="text-[20px] text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)] mr-3"
                          onClick={() => rowActions?.(row) && toggleRow(index)}
                        >
                          {expandedRows.has(index) ? "-" : "+"}
                        </button>
                      </Tooltip>
                      {rowActions && rowActions(row)}
                    </div>
                  </td>
                </tr>
                {expandedRows.has(index) && (
                  <tr>
                    <td
                      colSpan={columns.length + 1}
                      className={`p-4 ${
                        isAnimating ? "animate-slide-down" : ""
                      }`}
                      onAnimationEnd={() => setIsAnimating(false)}
                    >
                      <div className="overflow-hidden">
                        {renderExpandedRow(row)}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
