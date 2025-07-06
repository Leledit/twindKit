export interface FormSwitchProps {
    isChecked: boolean;
    onChange: () => void;
    label: string;
    isValidating: boolean;
    error: boolean;
    className?: string;
}
export declare function FormSwitch({ isChecked, onChange, label, isValidating, error, className, }: Readonly<FormSwitchProps>): import("react/jsx-runtime").JSX.Element;
