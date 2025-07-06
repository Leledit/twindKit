import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export interface ModalDefaultProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  isFullscreen?: boolean;
  title: string;
}

export function ModalDefault({
  isOpen,
  onClose,
  children,
  className = "",
  isFullscreen = false,
  title,
}: Readonly<ModalDefaultProps>) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-12">
      {!isFullscreen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      <div
        onClick={(e) => e.stopPropagation()}
        className={twMerge(
          className,
          `border border-[#454545] relative z-50 w-full bg-[var(--color-background)] text-[var(--color-foreground)] dark:bg-[var(--color-background-dark)] dark:text-[var(--color-foreground-dark)] shadow-xl transition-all`,
          isFullscreen ? "h-full" : "max-w-lg rounded-xl p-6"
        )}
      >
        <div>
          <p className="mt-[-10px] text-[20px] text-[var(--color-foreground)] dark:text-[var(--color-foreground-dark)]">
            {title}
          </p>
          <button
            onClick={onClose}
            className="absolute top-4 right-3 text-[var(--color-muted)] hover:text-[var(--color-secondary)] cursor-pointer"
          >
            <span className="sr-only">Close modal</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
