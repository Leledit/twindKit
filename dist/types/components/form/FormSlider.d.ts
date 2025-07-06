export interface FormSliderProps {
    value: number;
    onChange: (value: number | number[]) => void;
    label: string;
    isValidating: boolean;
    error: boolean;
    className?: string;
}
export declare function FormSlider({ value, onChange, label, isValidating, error, className, }: Readonly<FormSliderProps>): import("react/jsx-runtime").JSX.Element;
