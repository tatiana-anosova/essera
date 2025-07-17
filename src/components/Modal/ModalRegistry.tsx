import { ImageZoomModal } from '@/components/modals/ImageZoomModal/ImageZoomModal';

export const modalRegistry = {
	imageZoom: ImageZoomModal,
	// add new modals
};

export type ModalName = keyof typeof modalRegistry;
