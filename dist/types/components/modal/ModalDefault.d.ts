export interface ModalDefaultProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    isFullscreen?: boolean;
    title: string;
}
export declare function ModalDefault({ isOpen, onClose, children, className, isFullscreen, title, }: Readonly<ModalDefaultProps>): import("react/jsx-runtime").JSX.Element | null;
