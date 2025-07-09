import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import FormSelect, { IFormSelectOption } from "./FormSelect.js";
import { Button } from "../button/Button.js";

export interface FormSelectArrayProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  value: string[];
  error?: boolean;
  messageError?: string;
  onChangeValueArray: (newValue: string[]) => void;
  placeholder?: string;
  options: IFormSelectOption[];
  isValidating?: boolean;
  externalClassName?: string;
}

export function FormSelectArray({
  label,
  value,
  error = false,
  messageError,
  onChangeValueArray,
  options,
  placeholder = "",
  isValidating = false,
  externalClassName,
  ...props
}: Readonly<FormSelectArrayProps>) {
  const [inputValue, setInputValue] = useState<string>("");
  const [availableOptions, setAvailableOptions] = useState<IFormSelectOption[]>(options);

  useEffect(() => {
    if (availableOptions.length > 0) {
      setInputValue(availableOptions[0].value.toString());
    }
  }, [availableOptions]);

  const addItem = () => {
    if (inputValue !== "" && !value.includes(inputValue)) {
      onChangeValueArray([...value, inputValue]);
      setAvailableOptions(
        availableOptions.filter((option) => option.value !== inputValue)
      );
    }
  };

  return (
    <div className={twMerge("w-full mb-3", externalClassName)}>
      <div className="flex items-center">
        <FormSelect
          key={availableOptions.length}
          isValidating={isValidating}
          value={inputValue || ""}
          error={error}
          placeholder={placeholder}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          options={availableOptions}
          className="w-full"
          label={label}
          {...props}
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
        <div className="mt-2 flex flex-row items-center justify-start flex-wrap">
          {value.map((item) => (
            <div
              key={item}
              className={twMerge(
                "flex items-center justify-between px-3 py-1 mt-1 text-sm border rounded-[5px] max-w-[32%] mr-1 mr-1 mb-2",
                "border-gray-300",
                "bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]",
                "text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]"
              )}
            >
              <span>
                {options.find((option) => option.value === item)?.label || item}
              </span>
              <button
                type="button"
                onClick={() => {
                  onChangeValueArray(value.filter((i) => i !== item));
                  const removedOption = options.find(
                    (option) => option.value === item
                  );
                  if (removedOption) {
                    setAvailableOptions([...availableOptions, removedOption]);
                  }
                }}
                className="text-danger-500 hover:text-danger-700 cursor-pointer ml-2"
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
