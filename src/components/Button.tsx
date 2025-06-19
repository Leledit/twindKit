import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
  disabled = false,
  ...atributs
}: Readonly<IProps>) {
  return (
    <button
      className={twMerge(`rounded-lg transition bg-primary-600 px-4 py-2 text-white min-w-[140px] cursor-pointer mt-5
        shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 hover:bg-primary-400
        ${className}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
      `)}
      onClick={onClick}
      disabled={disabled}
      {...atributs}
    >
      {children}
    </button>
  );
}
