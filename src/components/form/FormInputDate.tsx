import React, { ChangeEvent } from "react";
import { FormLabel } from "./FormLabel.js";

export interface FormInputDateProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "maxLength"> {
  label?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  messageError?: string;
  isValidating?: boolean;
  value: string;
  onChange: (formattedDate: string, rawValue: string) => void;
}

export function FormInputDate({
  className,
  label,
  error = false,
  success = false,
  disabled = false,
  messageError,
  isValidating = false,
  value,
  onChange,
  ...props
}: Readonly<FormInputDateProps>) {
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const rawValue = inputValue.replace(/\D/g, "");

    let formattedDate = "";
    if (rawValue.length > 0) formattedDate += rawValue.substring(0, 2);
    if (rawValue.length >= 3) formattedDate += "/" + rawValue.substring(2, 4);
    if (rawValue.length >= 5) formattedDate += "/" + rawValue.substring(4, 8);

    onChange(formattedDate, rawValue);
  };

  let inputClasses = `
    h-10 w-full rounded-[5px] appearance-none px-4 py-2.5 text-sm shadow-sm transition-colors 
    duration-150 border focus:outline-none appearance-none transition duration-200
    text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]
    bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]
    placeholder:text-gray-500
    border
  `;

  if (disabled) {
    inputClasses += ` opacity-50 cursor-not-allowed`;
  } else if (error && isValidating) {
    inputClasses += ` border-danger-700`;
  } else if (success) {
    inputClasses += ` border-success`;
  } else {
    inputClasses += ` border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30`;
  }

  if (className) {
    inputClasses += ` ${className}`;
  }

  return (
    <div className="w-full mb-3">
      {label && <FormLabel className="mb-2">{label}</FormLabel>}
      <div className="relative">
        <input
          {...props}
          type="text"
          value={value}
          onChange={handleDateChange}
          disabled={disabled}
          className={inputClasses}
          maxLength={10}
          placeholder={props.placeholder || "dd/mm/aaaa"}
        />
        {isValidating && error && (
          <p className="mt-[10px] text-xs text-danger-700">
            {messageError || "Campo obrigatório!"}
          </p>
        )}
      </div>
    </div>
  );
}
