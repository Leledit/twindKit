import { default as React } from 'react';
import { IFormSelectOption } from './FormSelect.js';

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
export declare function FormSelectArray({ label, value, error, messageError, onChangeValueArray, options, placeholder, isValidating, externalClassName, ...props }: Readonly<FormSelectArrayProps>): import("react/jsx-runtime").JSX.Element;
