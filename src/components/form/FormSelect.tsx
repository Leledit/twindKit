import { twMerge } from 'tailwind-merge';
import type { SelectHTMLAttributes } from 'react';
import { FormLabel } from './FormLabel.js';
import { getBorderColor } from '../../utils/styles.js';

export interface IFormSelectOption {
  label: string;
  value: string | number;
}

export interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  messageError?: string;
  isValidating: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IFormSelectOption[];
  placeholder?: string;
  className?: string;
}

export function FormSelect({
  label,
  error = false,
  success = false,
  disabled = false,
  messageError = 'Campo obrigatório',
  isValidating,
  onChange,
  options,
  placeholder = 'Selecione uma opção',
  className,
  ...props
}:Readonly<FormSelectProps>){
  const showError = error && isValidating;

  return (
    <div className="w-full mt-5 mb-3">
      {label && <FormLabel>{label}</FormLabel>}
      <div className="relative">
        <select
          {...props}
          onChange={onChange}
          disabled={disabled}
          className={twMerge(
            `block w-full rounded-md py-3 px-4 pr-10 transition duration-200 appearance-none
             bg-[var(--color-primary)] text-[var(--color-primary-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-primary-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             transition duration-200 border focus:outline-none appearance-none transition duration-200
            `,
            getBorderColor(showError, success),
            disabled ? 'opacity-60 cursor-not-allowed' : '',
            className
          )}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Ícone de dropdown */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              d="M7 7l3 3 3-3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {showError && messageError && (
          <p className="mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]">
            {messageError}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormSelect;
