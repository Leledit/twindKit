import { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

export interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;         
  onToggle?: () => void; 
  className?: string;
}

export function Accordion({
  title,
  children,
  isOpen: controlledOpen,
  onToggle,
  className,
}: Readonly<AccordionProps>) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const toggle = () => {
    if (onToggle) onToggle();
    else setInternalOpen((prev) => !prev);
  };


  return (
    <div className="overflow-hidden shadow-sm">
      <button
        className={twMerge("flex justify-between items-center w-full cursor-pointer p-4 hover:bg-background-surface transition-colors border-b border-[#E3E3E3] border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] text-primary-foreground dark:text-primary-foreground-dark", className)}
        onClick={toggle}
      >
        <span className="text-sm ">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen py-2" : "max-h-0 py-0"
        }`}
      >
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
