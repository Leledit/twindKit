import { InputHTMLAttributes } from 'react';

export interface FormInputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    messageError?: string;
    isValidating: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function FormInputPassword({ label, error, success, disabled, messageError, isValidating, onChange, ...rest }: Readonly<FormInputPasswordProps>): import("react/jsx-runtime").JSX.Element;
export default FormInputPassword;
