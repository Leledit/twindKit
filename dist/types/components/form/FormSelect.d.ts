import { SelectHTMLAttributes } from 'react';

export interface IFormSelectOption {
    label: string;
    value: string | number;
}
export interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    messageError?: string;
    isValidating: boolean;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: IFormSelectOption[];
    placeholder?: string;
    className?: string;
}
export declare function FormSelect({ label, error, success, disabled, messageError, isValidating, onChange, options, placeholder, className, ...props }: Readonly<FormSelectProps>): import("react/jsx-runtime").JSX.Element;
export default FormSelect;
