'use client';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './Modal.props';
import styles from './Modal.module.css';
import clsx from 'clsx';

export const Modal = ({ isOpen, onClose, size= 'md', children, className, ...props }: ModalProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
		}
		return () => document.removeEventListener('keydown', handleEscape);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return createPortal(
		<div className={clsx(styles.overlay)} onClick={onClose}>
			<div
				className={clsx(styles.modal, styles[size], className)}
				onClick={(e) => e.stopPropagation()}
			>
				<span
					className={clsx("material-icons-outlined", styles.closeBtn)}
					onClick={onClose}
				>
					close
				</span>
				{children}
			</div>
		</div>,
		document.body
	);
};
