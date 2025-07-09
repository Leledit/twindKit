import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface FormLabelProps {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

export function FormLabel({ htmlFor, children, className }: Readonly<FormLabelProps>) {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        `block mb-1 text-sm font-medium 
         text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]`,
        className
      )}
    >
      {children}
    </label>
  );
}
