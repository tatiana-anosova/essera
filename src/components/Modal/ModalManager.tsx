'use client';
import { useModal } from '@/contexts/ModalContext';
import { Modal } from './Modal';
import { modalRegistry } from './ModalRegistry';

export const ModalManager = () => {
	const { isOpen, currentModal, modalProps, close } = useModal();

	if (!isOpen || !currentModal) return null;

	const ModalComponent = modalRegistry[currentModal as keyof typeof modalRegistry];

	if (!ModalComponent) {
		console.error(`Modal "${currentModal}" not found in registry`);
		return null;
	}

	return (
		<Modal isOpen={isOpen} onClose={close} size={modalProps.size}>
			<ModalComponent {...modalProps} onClose={close} />
		</Modal>
	);
};
