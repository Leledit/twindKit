import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface CustomLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function CustomLink({
  children,
  href,
  className = "",
  disabled = false,
}: Readonly<CustomLinkProps>) {
  return (
    <a
      href={disabled ? "/" : href}
      aria-disabled={disabled}
      className={twMerge(
        `
        mt-5 inline-block min-w-[140px] rounded-lg bg-[var(--color-primary)] 
        px-4 py-2 text-center text-[16px] text-white transition 
        shadow-theme-xs hover:bg-[var(--color-primary-hover)] 
        disabled:pointer-events-none disabled:opacity-50
        `,
        disabled && "cursor-not-allowed",
        className
      )}
    >
      {children}
    </a>
  );
}
