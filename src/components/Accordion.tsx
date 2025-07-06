import { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

export interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
  className,
}: Readonly<AccordionProps>) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={twMerge(
        "overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-sm",
        className
      )}
    >
      <button
        className="flex w-full items-center justify-between px-4 py-5 cursor-pointer hover:bg-[var(--color-hover)] transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        <span className="text-sm font-medium">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[var(--color-text)]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--color-text)]" />
        )}
      </button>

      <div
        id="accordion-content"
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen py-2 px-2" : "max-h-0 p-0"
        }`}
      >
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
