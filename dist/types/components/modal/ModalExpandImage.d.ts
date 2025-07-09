export interface ModalExpandImageProps {
    isOpen: boolean;
    onClose: () => void;
    image: string;
    className?: string;
}
export declare function ModalExpandImage({ isOpen, onClose, image, className, }: Readonly<ModalExpandImageProps>): import("react/jsx-runtime").JSX.Element | null;
