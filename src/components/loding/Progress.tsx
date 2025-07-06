export interface ProgressProps {
  loading: boolean;
  className?: string;
}

export  function Progress({ loading, className }: Readonly<ProgressProps>) {
  if (!loading) return null;

  return (
    <div
      className={`
        absolute top-0 left-0 flex items-center justify-center h-full w-full z-[1000]
        backdrop-blur-sm dardk:bg-[rgba(0,0,0,0.5)] bg-[rgba(255, 255, 255, 0.5)] border border-[var(--color-primary)/20]
        ${className}
      `}
    >
      <div
        className="
          w-12 h-12 border-4
          border-[var(--color-secondary)/30]
          border-t-[var(--color-secondary)]
          rounded-full animate-spin
          text-secondary-active
        "
      ></div>
    </div>
  );
}
