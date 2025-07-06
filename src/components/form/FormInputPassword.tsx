import { useState, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { getBorderColor } from '../../utils/styles.js';

export interface FormInputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  messageError?: string;
  isValidating: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInputPassword({
  label,
  error = false,
  success = false,
  disabled = false,
  messageError = 'Campo obrigatório',
  isValidating,
  onChange,
  ...rest
}:Readonly<FormInputPasswordProps>) {
  const [visible, setVisible] = useState(false);
  const showError = error && isValidating;

  return (
    <div className="w-full mt-5">
      {label && (
        <label
          htmlFor={rest.id}
          className="block mb-1 text-sm font-medium text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-[var(--color-muted)] dark:text-[var(--color-muted-dark)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <input
          type={visible ? 'text' : 'password'}
          autoComplete="current-password"
          disabled={disabled}
          onChange={onChange}
          placeholder="••••••••"
          className={twMerge(
            `block w-full rounded-md py-3 px-4 transition duration-200
             bg-[var(--color-background)] text-[var(--color-foreground)] placeholder-[var(--color-muted)] 
             dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] dark:placeholder-[var(--color-muted-dark)]
             pl-10 pr-10 border focus:outline-none appearance-none transition duration-20
            `,
            getBorderColor(showError, success),
            disabled ? 'opacity-60 cursor-not-allowed' : ''
          )}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] dark:text-[var(--color-muted-dark)] dark:hover:text-[var(--color-secondary-dark)] transition cursor-pointer"
          tabIndex={-1}
        >
          {visible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.978 9.978 0 012.276-3.592M6.1 6.1a9.993 9.993 0 0111.8 0m2.063 2.062a9.978 9.978 0 012.276 3.592c-1.274 4.057-5.065 7-9.542 7-.682 0-1.348-.07-1.992-.2M3 3l18 18" />
            </svg>
          )}
        </button>
      </div>
      {showError && messageError && (
        <p className="mt-2 text-sm text-[var(--color-error)] dark:text-[var(--color-error-dark)]">
          {messageError}
        </p>
      )}
    </div>
  );
};

export default FormInputPassword;
