import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export interface ModalExpandImageProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  className?: string;
}

export function ModalExpandImage({
  isOpen,
  onClose,
  image,
  className,
}: Readonly<ModalExpandImageProps>) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="overflow-scroll fixed inset-0 z-50 flex items-center justify-center py-6 sm:px-6 sm:py-12 overflow-auto bg-black/30 backdrop-blur-sm"
    >
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className={twMerge(
          `relative z-50 bg-background-base text-text-default shadow-xl transition-all overflow-auto w-full max-w-4xl rounded-lg max-h-[90%]`,
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[var(--color-text)] hover:text-gray-700 cursor-pointer bg-white rounded-full p-1"
          aria-label="Fechar modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
          <img
            src={image}
            alt="Visualização ampliada"
            className="w-full h-auto object-contain rounded-b-lg"
          />
      </div>
    </div>
  );
}
