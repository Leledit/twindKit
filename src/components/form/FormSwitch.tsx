import { twMerge } from "tailwind-merge";

export interface FormSwitchProps {
  isChecked: boolean;
  onChange: () => void;
  label: string;
  isValidating: boolean;
  error: boolean;
  className?: string;
}

export function FormSwitch({
  isChecked,
  onChange,
  label,
  isValidating,
  error,
  className,
}: Readonly<FormSwitchProps>) {
  return (
    <div className={twMerge("mb-2 w-full mt-5", className)}>
      <div className="flex items-center gap-3">
        <p className="text-base text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]">
          {label}
        </p>
        <button
          type="button"
          onClick={onChange}
          className={twMerge(
            `relative w-11 h-6 transition-colors duration-200 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2`,
            isChecked
              ? "bg-[var(--color-secondary)] focus:ring-[var(--color-secondary)]"
              : "bg-[var(--color-muted)] dark:bg-[var(--color-muted-dark)] focus:ring-[var(--color-muted)]"
          )}
        >
          <span
            className={twMerge(
              `absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200`,
              isChecked ? "translate-x-5" : "translate-x-0"
            )}
          />
        </button>
      </div>
      {isValidating && error && (
        <p className="text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]">
          Este campo é obrigatório
        </p>
      )}
    </div>
  );
}
