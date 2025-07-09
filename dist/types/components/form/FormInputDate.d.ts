import { default as React } from 'react';

export interface FormInputDateProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "maxLength"> {
    label?: string;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    messageError?: string;
    isValidating?: boolean;
    value: string;
    onChange: (formattedDate: string, rawValue: string) => void;
}
export declare function FormInputDate({ className, label, error, success, disabled, messageError, isValidating, value, onChange, ...props }: Readonly<FormInputDateProps>): import("react/jsx-runtime").JSX.Element;
