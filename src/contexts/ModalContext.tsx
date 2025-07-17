'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
	open: (name: string, props?: any) => void;
	close: () => void;
	isOpen: boolean;
	currentModal: string | null;
	modalProps: any;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('useModal must be used within ModalProvider');
	}
	return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentModal, setCurrentModal] = useState<string | null>(null);
	const [modalProps, setModalProps] = useState<any>({});

	const open = (name: string, props: any = {}) => {
		setCurrentModal(name);
		setModalProps(props);
		setIsOpen(true);
	};

	const close = () => {
		setIsOpen(false);
		setCurrentModal(null);
		setModalProps({});
	};

	return (
		<ModalContext.Provider value={{ open, close, isOpen, currentModal, modalProps }}>
			{children}
		</ModalContext.Provider>
	);
};
