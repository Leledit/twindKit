import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        `w-full min-h-[48px] rounded-lg transition py-3 px-4 min-w-[140px] cursor-pointer mt-5 shadow-theme-xs 
        bg-secondary dark:bg-secondary-dark text-foreground dark:text-foreground-dark`, 
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};