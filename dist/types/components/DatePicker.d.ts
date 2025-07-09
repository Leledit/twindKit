export interface DatePickerProps {
    selectedDate: Date | null;
    onChange: (date: Date) => void;
    maxDate?: Date;
}
export declare function DatePicker({ selectedDate, onChange, maxDate, }: Readonly<DatePickerProps>): import("react/jsx-runtime").JSX.Element;
