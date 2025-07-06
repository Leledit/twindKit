import { useEffect } from "react";
import { X } from "lucide-react";

export type TypeAlertSeverity = "success" | "error" | "warning" | "info";

export interface SnackBarProps {
  open: boolean;
  message: string;
  severity?: TypeAlertSeverity;
  autoHideDuration?: number;
  onClose: () => void;
}

const severityClasses: Record<TypeAlertSeverity, string> = {
  success: "bg-[var(--color-success)] text-[var(--color-on-success)]",
  error: "bg-[var(--color-error)] text-[var(--color-on-error)]",
  warning: "bg-[var(--color-warning)] text-[var(--color-on-warning)]",
  info: "bg-[var(--color-info)] text-[var(--color-on-info)]",
};

export function SnackBar({
  open,
  message,
  severity = "info",
  autoHideDuration = 6000,
  onClose,
}: Readonly<SnackBarProps>) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  return (
    <div
      className={`
        fixed bottom-4 right-4 z-50
        transition-all duration-300 ease-in-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <div
        className={`
          flex items-center gap-3 px-4 py-3 rounded-md shadow-lg w-80
          ${severityClasses[severity]}
        `}
      >
        <span className="flex-1 text-sm">{message}</span>
        <button onClick={onClose} aria-label="Fechar notificação">
          <X className="w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity" />
        </button>
      </div>
    </div>
  );
}
