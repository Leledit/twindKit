import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Size = 'sm' | 'md' | 'lg';

export interface IProps{
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  size?: Size
};

const sizeMap = {
  sm: {
    box: 'w-4 h-4',
    icon: 'w-2.5 h-2.5',
    label: 'text-xs',
  },
  md: {
    box: 'w-5 h-5',
    icon: 'w-3 h-3',
    label: 'text-sm',
  },
  lg: {
    box: 'w-6 h-6',
    icon: 'w-3.5 h-3.5',
    label: 'text-base',
  },
};

const FormCheckbox: FC<IProps> = ({
  checked,
  onChange,
  label,
  className = '',
  size = 'md',
}) => {
  const currentSize = sizeMap[size];

  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <div
        className={twMerge(`
          flex items-center justify-center rounded border 
          ${currentSize.box}
          border-[var(--color-muted)]
          peer-checked:bg-[var(--color-primary)]
          peer-checked:border-[var(--color-primary)]
          transition-colors
          dark:border-[var(--color-muted-dark)]
          dark:peer-checked:bg-[var(--color-primary-dark)]
          dark:peer-checked:border-[var(--color-primary-dark)]
        `)}
      >
        <svg
          className={twMerge(`
            ${currentSize.icon} hidden peer-checked:block 
            text-[var(--color-primary-foreground)] 
            dark:text-[var(--color-primary-foreground-dark)]
          `)}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9 16.2l-3.5-3.6L4 14l5 5 12-12-1.5-1.4z"
          />
        </svg>
      </div>
      {label && (
        <span
          className={twMerge(`
            ml-2 ${currentSize.label}
            text-[var(--color-foreground)] 
            dark:text-[var(--color-foreground-dark)]
          `)}
        >
          {label}
        </span>
      )}
    </label>
  );
};
