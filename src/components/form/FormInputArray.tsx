import React, { useState } from "react";
import { X } from "lucide-react";
import FormInput from "./FormInput.js";
import { Button } from "../button/Button.js";

export interface FormInputArrayProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string[];
  error?: boolean;
  messageError?: string;
  onChangeValueArray: (newValue: string[]) => void;
  placeholder?: string;
  isValidating?: boolean;
}

export function FormInputArray({
  label,
  value,
  error = false,
  messageError,
  onChangeValueArray,
  placeholder = "",
  isValidating = false,
  ...props
}: Readonly<FormInputArrayProps>) {
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    const trimmed = inputValue.trim();
    if (trimmed !== "" && !value.includes(trimmed)) {
      onChangeValueArray([...value, trimmed]);
      setInputValue("");
    }
  };

  const removeItem = (itemToRemove: string) => {
    onChangeValueArray(value.filter((item) => item !== itemToRemove));
  };

  let inputClasses = `
    h-10 w-full rounded-[5px] border appearance-none px-4 py-2.5 text-sm
    text-[var(--color-primary-foreground)] 
    dark:text-[var(--color-primary-foreground-dark)]
    placeholder:text-gray-400
    bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]
    focus:outline-none shadow-sm transition-colors duration-150
    focus:ring-primary/10 focus:border-gray-500
    border-gray-300 dark:border-gray-700
  `;

  if (error && isValidating) {
    inputClasses += " border-danger-900";
  }

  return (
    <div className="w-full mb-3">
      <div className="flex items-center">
        <FormInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className={inputClasses}
          {...props}
          isValidating={isValidating}
          error={error}
          label={label}
        />
        <Button
          disabled={!inputValue}
          type="button"
          onClick={() => {
            addItem();
            setInputValue("");
          }}
          className="ml-[15px] mt-[30px]"
        >
          Adicionar
        </Button>
      </div>

      {isValidating && error && (
        <p className="mt-2 text-xs text-danger-700">
          {messageError || "Campo obrigatório!"}
        </p>
      )}

      {value.length > 0 && (
        <div className="mt-2 flex flex-row items-center justify-between flex-wrap">
          {value.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center justify-between px-3 py-1 mt-1 text-sm
                text-[var(--color-primary-foreground)]
                dark:text-[var(--color-primary-foreground-dark)]
                border border-gray-300 dark:border-gray-700
                rounded-[5px] max-w-[32%] mr-1
              "
            >
              <span>{item}</span>
              <button
                type="button"
                onClick={() => removeItem(item)}
                className="text-danger-500 hover:text-danger-700 cursor-pointer"
              >
                <X className="w-[15px] h-[15px]" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
