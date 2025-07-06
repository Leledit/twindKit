export type TypeAlertSeverity = "success" | "error" | "warning" | "info";
export interface SnackBarProps {
    open: boolean;
    message: string;
    severity?: TypeAlertSeverity;
    autoHideDuration?: number;
    onClose: () => void;
}
export declare function SnackBar({ open, message, severity, autoHideDuration, onClose, }: Readonly<SnackBarProps>): import("react/jsx-runtime").JSX.Element;
