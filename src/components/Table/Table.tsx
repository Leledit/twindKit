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

export function Table<T>({
  data,
  columns,
  rowActions,
}: Readonly<TableProps<T>>) {
  return (
    <div className="shadow-sm border border-[var(--color-muted)] rounded-md text-[var(--color-foreground)] overflow-x-auto w-full">
      <table className="min-w-[800px] table-auto w-full">
        <thead>
          <tr className="border-b border-[var(--color-muted)] bg-[var(--color-background)] dark:bg-[var(--color-background-dark)]">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-2 text-[16px] text-left font-semibold text-[var(--color-secondary)]"
              >
                {column.title}
              </th>
            ))}
            {rowActions && <th className="px-4 py-2 text-center" />}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (rowActions ? 1 : 0)}
                className="px-4 py-4 text-center text-[var(--color-muted)]"
              >
                Nenhum registro encontrado!
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={index}
                className={
                  index === data.length - 1
                    ? ""
                    : "border-b border-[var(--color-muted)]"
                }
              >
                {columns.map((column) => {
                  const cellValue = row[column.key as keyof T];
                  return (
                    <td
                      key={String(column.key)}
                      className="px-4 py-2 text-[14px] font-normal text-left text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]"
                    >
                      {column.render
                        ? column.render(cellValue, row)
                        : (cellValue as React.ReactNode)}
                    </td>
                  );
                })}
                {rowActions && (
                  <td className="px-4 py-2 whitespace-nowrap w-[5%]">
                    {rowActions(row)}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
