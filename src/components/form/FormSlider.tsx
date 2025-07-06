import { twMerge } from "tailwind-merge";

export interface FormSliderProps {
  value: number;
  onChange: (value: number | number[]) => void;
  label: string;
  isValidating: boolean;
  error: boolean;
  className?: string;
}

export function FormSlider({
  value,
  onChange,
  label,
  isValidating,
  error,
  className,
}: Readonly<FormSliderProps>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

  return (
    <div className={twMerge("mb-2 w-full mt-4", className)}>
      <div className="flex items-center">
        <p className="text-base text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)] mr-4">
          {label}
        </p>
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          value={value}
          onChange={handleChange}
          className="w-3/5 accent-[var(--color-secondary)] dark:accent-[var(--color-secondary-dark)]"
        />
        <p
          className="
            ml-4 w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-secondary)] 
            text-[var(--color-foreground)] dark:text-[var(--color-secondary-dark)] text-sm"
        >
          {value}
        </p>
      </div>
      {isValidating && error && (
        <p className="text-sm mt-2 ml-2 text-[var(--color-error)] dark:text-[var(--color-error-dark)]">
          Este campo é obrigatório
        </p>
      )}
    </div>
  );
}
