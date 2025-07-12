export interface MessageErrorProps {
  messageError: string;
}

export function MessageError({ messageError }: Readonly<MessageErrorProps>) {
  if (!messageError) return null;

  return (
    <p
      className="
        mt-3 mb-3 p-2 min-h-[30px] w-full rounded-md
        bg-[var(--color-error)] text-[var(--color-primary-foreground-dark)]
        text-[14px] leading-[30px] text-center
        dark:bg-[var(--color-error-dark)] dark:text-[var(--color-primary-foreground-dark)]
      "
    >
      {messageError}
    </p>
  );
}
