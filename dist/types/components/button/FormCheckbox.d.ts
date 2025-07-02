type Size = 'sm' | 'md' | 'lg';
export interface IProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    className?: string;
    size?: Size;
}
export {};
