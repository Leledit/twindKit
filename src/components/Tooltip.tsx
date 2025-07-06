"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

export interface TooltipProps {
  text: string;
  children: any;
  className?: string;
  coordTop?: number;
  coordLeft?: number;
}

export function Tooltip({
  text,
  children,
  className,
  coordTop,
  coordLeft,
}: Readonly<TooltipProps>) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (visible && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY + (coordTop ?? 0),
        left: rect.left + rect.width / 2 + window.scrollX + (coordLeft ?? 0),
      });
    }
  }, [coordLeft, coordTop, visible]);

  return (
    <button
      className={twMerge("relative inline-block", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={ref}
    >
      {children}
      {visible &&
        createPortal(
          <div
            style={{
              top: coords.top - 10,
              left: coords.left,
              transform: "translate(-50%, -100%)",
              position: "absolute",
              zIndex: 9999,
            }}
            className={twMerge(
              `px-3 py-1 text-sm border rounded shadow-lg whitespace-nowrap`,
              `bg-[var(--color-background)] text-[var(--color-foreground)] border-[var(--color-muted)]`
            )}
          >
            {text}
          </div>,
          document.body
        )}
    </button>
  );
}
