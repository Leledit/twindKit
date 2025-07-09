import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "cancel" | "danger";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary: `
    bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
    hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]
    dark:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary-hover-dark)] dark:active:bg-[var(--color-primary-active-dark)]
    dark:text-[var(--color-primary-foreground-dark)]
  `,
  secondary: `
    bg-[var(--color-secondary)] text-[var(--color-secondary-active)]
    hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-active)]
    dark:bg-[var(--color-secondary-dark)] dark:hover:bg-[var(--color-secondary-hover-dark)] dark:active:bg-[var(--color-secondary-active-dark)]
    dark:text-[var(--color-secondary-foreground-dark)]
  `,
  cancel: `
    bg-[var(--color-cancel)] text-[var(--color-cancel-foreground)]
    hover:bg-[var(--color-cancel-hover)] active:bg-[var(--color-cancel-active)]
    dark:bg-[var(--color-cancel-dark)] dark:hover:bg-[var(--color-cancel-hover-dark)] dark:active:bg-[var(--color-cancel-active-dark)]
    dark:text-[var(--color-cancel-foreground-dark)]
  `,
  danger: `
    bg-red-600 text-white
    hover:bg-red-700 active:bg-red-800
    dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700
  `,
};

const baseClasses = `
  w-full min-h-[48px] min-w-[140px] py-3 px-4 mt-5 
  rounded-lg
  transition shadow-theme-xs cursor-pointer
`;

export function Button({
  className,
  children,
  variant = "secondary",
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      className={twMerge(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
