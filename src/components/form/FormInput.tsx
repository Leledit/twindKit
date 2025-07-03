import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValidating: boolean;
  label?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  messageError?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({
  label,
  error = false,
  success = false,
  disabled = false,
  messageError = 'Campo obrigatório',
  isValidating,
  icon: Icon,
  className = '',
  onChange,
  ...rest
}:Readonly<FormInputProps>) {
  const showError = error && isValidating;

  const getBorderColor = () => {
    if (showError) {
      return 'border-[var(--color-error)] focus:border-[var(--color-error)]';
    }
    if (success) {
      return 'border-[var(--color-success)] focus:border-[var(--color-success)]';
    }
    return 'border-[var(--color-secondary)] focus:border-[var(--color-secondary)] dark:border-[var(--color-muted-dark)] dark:focus:border-[var(--color-secondary-dark)]';
  };

  const iconColor = showError
    ? 'text-[var(--color-error)]'
    : success
    ? 'text-[var(--color-success)]'
    : 'text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]';

  return (
    <div className="w-full mt-5">
      {label && (
        <label
          htmlFor={rest.id}
          className="block mb-1 text-sm font-medium text-[var(--color-primary-foreground)] dark:text-[var(--color-foreground-dark)]"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
        )}

        <input
          disabled={disabled}
          onChange={onChange}
          className={twMerge(
            `block w-full rounded-md py-3 px-4 transition duration-200 border focus:outline-none appearance-none transition duration-200
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             ${Icon ? 'pl-10' : ''}
             ${getBorderColor()}
             ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
            `,
        
            className
          )}
          {...rest}
        />
      </div>

      {showError && messageError && (
        <p className="mt-2 text-sm text-[var(--color-error)]">{messageError}</p>
      )}
    </div>
  );
};

export default FormInput;
