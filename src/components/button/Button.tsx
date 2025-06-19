import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  ...attributes
}) => {
  return (
    <button
      className={twMerge(
        `rounded-lg transition py-3 px-4 text-primary-50 min-w-[140px] cursor-pointer mt-5
        shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 bg-accent-500 hover:accent-500/90 w-full`,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...attributes}
    >
      {children}
    </button>
  );
};