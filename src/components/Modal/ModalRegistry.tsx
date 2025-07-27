import { ImageZoomModal } from '@/components/modals/ImageZoomModal/ImageZoomModal';
import { CartModal } from '@/components/modals/CartModal/CartModal';

export const modalRegistry = {
	imageZoom: ImageZoomModal,
	cartModal: CartModal,
	// add new modals
};

export type ModalName = keyof typeof modalRegistry;
