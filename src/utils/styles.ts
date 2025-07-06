export function getBorderColor(showError: boolean, success: boolean ){
    if (showError) {
      return "border-[var(--color-error)] focus:border-[var(--color-error)]";
    }
    if (success) {
      return "border-[var(--color-success)] focus:border-[var(--color-success)]";
    }
    return "border-[var(--color-secondary)] focus:border-[var(--color-secondary)] dark:border-[var(--color-muted-dark)] dark:focus:border-[var(--color-secondary-dark)]";
  };