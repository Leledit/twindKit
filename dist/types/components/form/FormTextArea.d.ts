export interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    messageError?: string;
    isValidating: boolean;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export declare function FormTextArea({ className, label, error, success, disabled, messageError, isValidating, onChange, ...props }: Readonly<FormTextAreaProps>): import("react/jsx-runtime").JSX.Element;
