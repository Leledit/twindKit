export interface ActivityIndicatorProps {
  loading: boolean;
  className?: string;
  width?: string;
  height?: string;
}

export function ActivityIndicator({
  loading,
  className = "",
  width = "2rem",
  height = "2rem",
}: Readonly<ActivityIndicatorProps>) {
  if (!loading) return null;

  return (
    <div
      className={`flex items-center justify-center ${className}`}
    >
      <div
        style={{ width, height }}
        className="rounded-full animate-spin border-4 border-[var(--color-primary)/30] border-t-[var(--color-primary)]"
      />
    </div>
  );
}
