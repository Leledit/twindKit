import { InputHTMLAttributes } from 'react';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isValidating: boolean;
    label?: string;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    messageError?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function FormInput({ label, error, success, disabled, messageError, isValidating, icon: Icon, className, onChange, ...rest }: Readonly<FormInputProps>): import("react/jsx-runtime").JSX.Element;
export default FormInput;
