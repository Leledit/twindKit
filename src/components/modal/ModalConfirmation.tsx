
import { Button } from "../button/Button.js";
import { ModalDefault } from "./ModalDefault.js";

export interface ModalConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
  title: string;
  performAction: () => void;
  className?: string;
  isFullscreen?: boolean;
}

export function ModalConfirmation({
  isOpen,
  onClose,
  performAction,
  description,
  title,
  className = "",
  isFullscreen = false,
}: Readonly<ModalConfirmationProps>) {
  return (
    <ModalDefault
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      className={className}
      isFullscreen={isFullscreen}
    >
      <h3 className="mt-5 mb-2 text-[var(--color-primary-foreground)] dark:text-[var(--color-primary-foreground-dark)]">
        {description}
      </h3>
      <div className="flex flex-row justify-end">
        <Button
          type="button"
          className="max-w-[100px] mr-2"
          onClick={onClose}
          variant="secondary"
        >
          Cancelar
        </Button>
        <Button
          type="button"
          className="max-w-[100px]"
          onClick={performAction}
          variant="danger"
        >
          Confirmar
        </Button>
      </div>
    </ModalDefault>
  );
}
