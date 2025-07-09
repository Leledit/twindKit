import { default as React } from 'react';

export interface FormInputArrayProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value: string[];
    error?: boolean;
    messageError?: string;
    onChangeValueArray: (newValue: string[]) => void;
    placeholder?: string;
    isValidating?: boolean;
}
export declare function FormInputArray({ label, value, error, messageError, onChangeValueArray, placeholder, isValidating, ...props }: Readonly<FormInputArrayProps>): import("react/jsx-runtime").JSX.Element;
