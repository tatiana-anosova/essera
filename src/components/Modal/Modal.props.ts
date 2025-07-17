import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	className?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
}
