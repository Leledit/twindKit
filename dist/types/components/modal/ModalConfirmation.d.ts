export interface ModalConfirmationProps {
    isOpen: boolean;
    onClose: () => void;
    description: string;
    title: string;
    performAction: () => void;
    className?: string;
    isFullscreen?: boolean;
}
export declare function ModalConfirmation({ isOpen, onClose, performAction, description, title, className, isFullscreen, }: Readonly<ModalConfirmationProps>): import("react/jsx-runtime").JSX.Element;
