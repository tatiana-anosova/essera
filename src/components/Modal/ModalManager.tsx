'use client';
import { useModal } from '@/contexts/ModalContext';
import { Modal } from './Modal';
import { modalRegistry } from './ModalRegistry';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const ModalManager = () => {
	const { isOpen, currentModal, modalProps, close } = useModal();

	const pathname = usePathname();

	useEffect(() => {
		if (isOpen) {
			close();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	if (!isOpen || !currentModal) return null;

	const ModalComponent = modalRegistry[currentModal as keyof typeof modalRegistry];

	if (!ModalComponent) {
		console.error(`Modal "${currentModal}" not found in registry`);
		return null;
	}

	return (
		<Modal isOpen={isOpen} onClose={close} size={modalProps.size} type={modalProps.type}>
			<ModalComponent {...modalProps} onClose={close} />
		</Modal>
	);
};
