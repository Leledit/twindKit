import { twMerge } from 'tailwind-merge';
import { FormLabel } from './FormLabel.js';
import { getBorderColor } from '../../utils/styles.js';

export interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  messageError?: string;
  isValidating: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function FormTextArea({
  className,
  label,
  error = false,
  success = false,
  disabled = false,
  messageError = 'Campo obrigatório',
  isValidating,
  onChange,
  ...props
}: Readonly<FormTextAreaProps>) {
  const showError = error && isValidating;

  return (
    <div className="w-full mb-3 mt-5">
      {label && <FormLabel className="mb-2">{label}</FormLabel>}

      <div className="relative">
        <textarea
          {...props}
          onChange={onChange}
          disabled={disabled}
          className={twMerge(
            `border focus:outline-none appearance-none transition duration-200 rounded-md
             h-[50px] w-full resize-none appearance-none px-4 py-2.5 shadow-sm transition-colors duration-150
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)]
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)/10]
            `,
            getBorderColor(showError, success),
            disabled ? 'opacity-60 cursor-not-allowed' : '',
            className
          )}
        />

        {showError && messageError && (
          <p className="text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)] mt-2">
            {messageError}
          </p>
        )}
      </div>
    </div>
  );
}
