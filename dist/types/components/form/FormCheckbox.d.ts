type Size = "sm" | "md" | "lg";
export interface FormCheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    classNameLabel?: string;
    classNameInput?: string;
    size?: Size;
}
export declare function FormCheckbox({ checked, onChange, label, classNameLabel, classNameInput, size, }: Readonly<FormCheckboxProps>): import("react/jsx-runtime").JSX.Element;
export {};
